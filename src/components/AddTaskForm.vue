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
import { mapActions, mapGetters, mapState } from "vuex";

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
      },
    };
  },
  methods: {
    ...mapActions(["CREATE_TASKS"]),
    async addTask() {
      this.loading = true;
      await this.CREATE_TASKS(this.task);
      this.dialog = false;
      this.loading = false;
      this.task.description = "";
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