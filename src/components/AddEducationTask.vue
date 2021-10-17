<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="cyan" dark v-bind="attrs" v-on="on">
          Добавить задачу
        </v-btn>
      </template>

      <v-card class="dialog">
        <v-form ref="form" lazy-validation>
        <select @change="changeOption($event)">
        <option v-for="day in days" :key="day.id">{{ day.day }}</option>
        <option selected="selected" disabled>Вибрать день</option>
      </select>
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
          <v-btn color="cyan" class="mr-4"  @click="addEducationTask()"> Добавить </v-btn>
        </v-form>
      </v-card>
    </v-dialog>
  </div>

</template>


<script>
import axios from "axios";

export default {
  props: ["days"],
  data() {
    return {
      loading: false,
      dialog: false,
       education_task: {
        name: "",
        link: "",
        description: "",
      },
    };
  },
  methods: {
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
        .post(`http://127.0.0.1:3000/educations/${this.selectedOptionId}/education_task`, this.education_task)
        .then((response) => {
          this.education_task.name = "";
          this.education_task.link = "";
          this.education_task.description = "";
          this.education_task.push(response.data);

        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  watch: {
    education_task: function () {
      this.loading = false;
      this.dialog = false;
    },
  },
};
</script>
<style scoped>
.dialog {
  padding: 20px;
}
.text-center {
  padding-top: 50px;
}
</style>