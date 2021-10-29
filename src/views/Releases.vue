<template>
  <div>
    <div class="containerButton">
      <div>
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="blue" dark v-bind="attrs" v-on="on">
              Обрати Дати Релізів
            </v-btn>
          </template>

          <v-date-picker
            v-model="dates"
            :selected-items-text="dateRangeText()"
            width="500"
            range
          >
            <v-card-actions>
              <v-btn color="cyan" dark @click="filterReleases"> Обрати </v-btn>
            </v-card-actions>
          </v-date-picker>
        </v-dialog>
      </div>

      <v-btn color="cyan" dark @click="LastRelease"> Останній Реліз </v-btn>
      <v-btn color="cyan" dark @click="LastRelease"> Останні 4 Реліза </v-btn>
      <v-btn color="cyan" dark @click="LastRelease"> Всі Релізи </v-btn>


    </div>

    <div 
    v-if="!showLastRelease"
    class='releaseContainer'>
      
          <v-card class='releaseItem' width="550" v-for="release in result" :key="release.id">
            <v-card-text>
              <div class="font-weight-bold ml-8 mb-2">
                <strong> {{ release.release_data }}</strong>
              </div>
              <v-timeline align-top dense>
                <v-timeline-item
                  v-for="message in release.list_releases"
                  :key="message.id"
                  :color="message.color"
                  small
                >
                  <div>
                    <div>{{ message.description }}</div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
       
    </div>
    <div v-if="showLastRelease">
      <v-container>
        <v-row justify="space-around">
          <v-card width="600">
            <v-card-text>
              <div class="font-weight-bold ml-8 mb-2">
                <strong> {{ last_release.release_data }}</strong>
              </div>

              <v-timeline align-top dense>
                <v-timeline-item
                  v-for="message in last_release.list_releases"
                  :key="message.id"
                  :color="message.color"
                  small
                >
                  <div>
                    <div>{{ message.description }}</div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    test: "",
    showLastRelease: false,
    dates: [],
    currentDay: "",
    result: [],
    last_release: {},
    releases: [
      {
        id: 1,
        release_data: "2021-10-21",
        list_releases: [
          {
            id: 1,
            description: `Виправлено урахування оборотів по податку при використанні відсоткових знижок на весь чек`,
            color: "green",
          },
          {
            id: 2,
            description: `Додано метод отримання кількості офлайн кодів`,
            color: "red",
          },
          {
            id: 3,
            description: `Додано підтримку зміни кількості офлайн кодів за промовчуванняв (підтримка зпитування >2000 кодів автоматично)`,
            color: "yellow",
          },
          {
            id: 4,
            description: `Виправлено роботу с офлайн кодами в Redis в скрипті проштовхування транзакцій`,
            color: "green",
          },
           {
            id: 5,
            description: `Додано автоблокування касира, якщо ДПС відповідає "Сертифікат не чинний (при перевірці за протоколом OCSP)"`,
            color: "green",
          },
        ],
      },
      {
        id: 2,
        release_data: "2021-10-10",
        list_releases: [
          {
            id: 5,
            description: `Виправлено урахування оборотів по податку при використанні відсоткових знижок на весь чек`,
            color: "green",
          },
          {
            id: 6,
            description: `Додано метод отримання кількості офлайн кодів`,
            color: "green",
          },
          {
            id: 7,
            description: `Раздел отчеты переведен на отчеты с процессинга. Теперь все отчеты приходят на емейл пользователям`,
            color: "green",
          },
          {
            id: 8,
            description: `Раздел отчеты переведен на отчеты с процессинга. Теперь все отчеты приходят на емейл пользователям`,
            color: "green",
          },
        ],
      },
      {
        id: 2,
        release_data: "2021-10-01",
        list_releases: [
          {
            id: 5,
            description: `Раздел отчеты переведен на отчеты с процессинга. Теперь все отчеты приходят на емейл пользователям`,
            color: "green",
          },
          {
            id: 6,
            description: `Раздел отчеты переведен на отчеты с процессинга. Теперь все отчеты приходят на емейл пользователям`,
            color: "green",
          },
          {
            id: 7,
            description: `Раздел отчеты переведен на отчеты с процессинга. Теперь все отчеты приходят на емейл пользователям`,
            color: "green",
          },
          {
            id: 8,
            description: `Раздел отчеты переведен на отчеты с процессинга. Теперь все отчеты приходят на емейл пользователям`,
            color: "green",
          },
        ],
      },
    ],
  }),
  computed: {},
  methods: {
    dateRangeText() {
      return this.dates.join(" - ");
    },
    dateNow() {
      let dataMs = Date.now();
      this.dates.push(new Date(dataMs).toISOString().substr(0, 10));
    },
    filterReleases() {
      let ed = new Date(this.dates[0]).getTime();
      let sd = new Date(this.dates[1]).getTime();
      this.result = this.releases.filter((d) => {
        let time = new Date(d.release_data).getTime();
        return (sd <= time && time <= ed) || (ed <= time && time <= sd);
      });
      this.showLastRelease = false;
      this.dialog = false;
    },
    LastRelease() {
      this.last_release = this.releases.find((d) => {
        let time = new Date(d.release_data).getTime();
        return time <= Date.now();
      });
      this.showLastRelease = true;
    },
  },

  created() {
    this.dateNow();
  },
};
</script>

<style scoped>
.releaseContainer {
  display: flex;
  flex-wrap: wrap;
    justify-content: space-between;

}
.containerButton {
  padding: 50px 200px;
  display: flex;
  justify-content: space-around;
}
.releaseItem {
    margin:0px 20px 30px 20px ;
}
</style>