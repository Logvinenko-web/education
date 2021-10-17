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
          <v-text-field
            v-model="task.title"
            label="Заголовок"
            required
          ></v-text-field>
          <v-textarea
            v-model="task.description"
            label="Опис"
            required
          ></v-textarea>
          <v-btn
            color="cyan"
            class="mr-4"
            :loading="loading"
            :disabled="loading"
            @click="addTask()"
          >
            Добавить
          </v-btn>
        </v-form>
      </v-card>
    </v-dialog>
  </div>

</template>


<script>
import axios from "axios";
import {mapActions, mapGetters, mapState} from 'vuex'

export default {
  props: ["tasks"],
  data() {
    return {
      loading: false,
      dialog: false,
      task: {
        description: "",
        title: "",
        status: "to-do",
        //  item:[1,2,3,4]
      },
    };
  },
  methods: {
     ...mapActions([
      'CREATE_TASKS'
    ]),
   async addTask() {
    //  await CREATE_TASKS(this.tasks)
      
      // this.task.title = "";
      this.loading = true;

      axios
        .post("https://floating-retreat-11502.herokuapp.com/tasks", this.task)
        .then((response) => {
          this.task.description = "";
          this.task.title = "";
          this.tasks.push(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  //   created() {
  //   this.CREATE_TASKS();
  // },
  },
  watch: {
    tasks: function () {
      this.dialog = false;
      this.loading = false;
      this.task.description = "";


    },
  },
  //  computed:{
  //   ...mapGetters([
  //     'TASKS'
  //   ])
  // },
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