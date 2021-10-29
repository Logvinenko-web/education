<template>
  <v-sheet elevation="6">
    <v-tabs
      background-color="cyan"
      dark
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-outline"
      show-arrows
      v-model="tab"
    >
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tab v-for="tab in new_tabs" :key="tab.id">
        {{ tab.name }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="tab in new_tabs" :key="tab.id">
        <v-card
          flat
          v-for="explanation in new_explanation"
          :key="explanation.id"
        >
          <v-card-text v-if="tab.id === explanation.tab_id">
            <p
              class="font-weight-regular"
              :inner-html.prop="explanation.description | marked"
            ></p>
            <!-- <p v-if="tab.id === explanation.tab_id">dd</p> -->
          </v-card-text>
        </v-card>
        <Table
          v-if="
           
            tab.name === 'Інструкції_Інстал' ||
            tab.name === 'Специфікація' ||
            tab.name === 'Нормативка'
          "
          :tables="tables"
        />
        <div class="card_wrapper" v-if="tab.name === 'Помилки в касі'">
          <ErrorCard v-for="item in card" :key="item.title" :item="item" />
        </div>
      </v-tab-item>
    </v-tabs-items>
  </v-sheet>
</template>

<script>
import Table from "../components/Table.vue";
import ErrorCard from "../components/ErrorCard.vue";

export default {
  props: ["new_tabs", "new_explanation", "tables"],
  components: {
    Table,
    ErrorCard,
  },
  data() {
    return {
      tab: null,
      card: [
        {
          img: "https://i.postimg.cc/N04zJZ7F/photo-2021-10-19-23-20-15.jpg",
          title: "Закінчились офлайн коди на касі",
          sub_title: "Refresh в апі каси",
          description:
            "Закінчились офланй коди в касі, потрібно зробити рефреш через апі каси - http://127.0.0.1:9200/api/docs#/%D0%97%D0%BC%D1%96%D0%BD%D0%B0/close_shift_api_v1_shift_refresh_post . Потрібно зробити 3-4 раза і перевірити по консолі що коди підгрузились",
        },
        {
          img: "https://i.postimg.cc/TYDHMKqZ/photo-2021-10-19-23-20-24.jpg",
          title: "Не корректна передача card mask в чек",
          sub_title: "Помилка частіше в Інтертоп",
          description: "Поки помилка в інтертопа, ввели кард маск більше чим допустимо, допустимо 19 символів. Потрібно забрати логи і базу, касу зупинити.Передати на другу лінію. В локальній базі чек відмічаеться як done, в плайлоаді самого чека редагується кард маск до 19 символів і проводиться через апі методом add-external",
        },
        {
          img: "https://i.postimg.cc/d3B3Ls8v/photo-2021-10-19-23-20-09.jpg",
          title: "Проблема із версією віндовс",
          sub_title: "Встановлення оновлень",
          description:
            "Більш за все віндовс 7 і потрібно поставити оновлення - https://agents.checkbox.in.ua/agents/checkboxAgentRRO/Windows/Win7x86/drive-download-20201126T230439Z-001.zip .Оновлення ставить клієнт, після оновлення перезавантажити пк і можуть працювати.",
        },
         {
          img: "https://i.postimg.cc/TPMcV0zw/photo-2021-10-19-23-45-33.jpg",
          title: "Вказаний id вже зареєстрований",
          sub_title: "Передача питання на другу лінію",
          description:"Ошибка означает что в общей базе есть чек который локальная база пытается отправить, но по какой-то причине не обрабатывается (просто залип, что-то в очереди мешает, повторно использован оффлайн код, оффлайн код ошибочно помечен как использован). Для решения проблемы необходимо остановить кассу, взять логи, локальную базу и secret.key, и передать на вторую линию."
        },
      ],
    };
  },
};
</script>

<style scoped>
.font-weight-regular {
  /* padding:10px */
}
.card_wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}
</style>