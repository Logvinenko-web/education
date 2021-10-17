<template>
  <div>
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="cyan" dark v-bind="attrs" v-on="on">
            Добавить задачу
          </v-btn>
        </template>

        <div>
          <v-card class="dialog">
            <select class="select-day" @change="changeOption($event)">
              <option v-for="day in days" :key="day.id">{{ day.day }}</option>
              <option selected="selected" disabled>Вибрать день</option>
            </select>
            <v-form ref="form" lazy-validation>
              <v-text-field
                v-model="education_task.name"
                label="Назва"
                required
              ></v-text-field>
              <v-text-field
                v-model="education_task.link"
                label="Лінк"
                required
              ></v-text-field>
              <v-textarea
                v-model="education_task.description"
                label="Опис"
                required
              ></v-textarea>
              <v-btn
                color="cyan"
                class="mr-4"
                :loading="loading"
                :disabled="loading"
                @click="addEducationTask()"
              >
                Добавить
              </v-btn>
            </v-form>
          </v-card>
        </div>
      </v-dialog>
    </div>
    <div></div>
    <div>
      <v-card>
        <v-toolbar color="cyan" dark flat>
          <template v-slot:extension>
            <v-tabs v-model="tab" align-with-title>
              <v-tabs-slider color="grey"></v-tabs-slider>
              <v-tab v-for="item in days" :key="item.id">
                {{ item.day }}
              </v-tab>
            </v-tabs>
          </template>
        </v-toolbar>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="day in days" :key="day.id">
            <v-card flat>
              <v-simple-table class="pa-6">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Name</th>
                      <th class="text-left">Link</th>
                      <th class="text-left">Description</th>
                      <th class="text-left">Delete</th>
                    </tr>
                  </thead>

                  <tbody v-for="item in education_tasks" :key="item.id">
                    <tr v-if="day.id === item.education_day_id">
                      <td>
                        <h3>{{ item.name }}</h3>
                      </td>
                      <td>
                        <a :href="item.link" target="_blank">link</a>
                      </td>
                      <td>{{ item.description }}</td>
                      <td>
                        <button @click="removeEducationTask(item.id)">
                          <font-awesome-icon icon="trash" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>
  </div>
</template>



<script>
import { mapActions, mapState } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      tab: null,
      loading: false,
      dialog: false,
      selectedOptionId: "null",
      education_task: {
        name: "",
        link: "",
        description: "",
      },
    };
  },
  methods: {
    ...mapActions(["GET_DAYS"]),
    ...mapActions(["GET_EDUCATION_TASKS"]),
    changeOption: function (event) {
      this.days.map((item) => {
        if (item.day === event.target.value) {
          this.selectedOptionId = item.id;
        }
      });
    },
    addEducationTask() {
      this.loading = true;
      axios
        .post(
          `https://fastapi-support.herokuapp.com/categories/education/${this.selectedOptionId}/education_task`,
          this.education_task
        )
        .then((response) => {
          this.education_task.name = "";
          this.education_task.link = "";
          this.education_task.description = "";
          this.education_tasks.push(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    removeEducationTask(id) {
      axios
        .delete(
          "https://fastapi-support.herokuapp.com/categories/education/education_task/" +
            id
        )
        .then((res) => {
          this.education_tasks.forEach((item, index) => {
            if (item.id == id) {
              this.education_tasks.splice(index, 1);
            }
          });
        });
    },
  },
  computed: {
    ...mapState(["days", "education_tasks"]),
  },
  created() {
    this.GET_DAYS();
    this.GET_EDUCATION_TASKS();
  },
  watch: {
    education_tasks: function () {
      //   GET_EDUCATION_TASKS()
      this.loading = false;
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
.select-day {
  border: 1px solid;
  width: 100%;
  padding: 5px;
}
.dialog {
  padding: 20px;
}
.text-center {
  padding-top: 20px;
  padding-bottom: 10px;
}
</style>