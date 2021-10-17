<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Task</th>
          <th class="text-left">Status</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody v-for="title in titles" :key="title">
        <span class="title-table">{{ title }}</span>
        <tr v-for="task in getTitlesForTasks(title)" :key="task.id">
          <td
            class="description"
            :class="{ 'line-through': task.status === 'finished' }"
          >
            {{ task.description }}
          </td>
          <td class="status">
            <span
              class="pointer"          
              @click="changeStatus(task)"
              :class="{
                'red--text': task.status === 'to-do',
                'green--text': task.status === 'finished',
                'yellow--text': task.status === 'in-progress',
              }"
            >
              {{ task.status }}</span
            >
          </td>
          <td>
            <button @click="removeTask(task.id)">
              <font-awesome-icon icon="trash" />
            </button>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import axios from "axios";

export default {
  props: ["tasks"],

  data() {
    return {
      loading: false,
      statuses: ["to-do", "in-progress", "finished"],
    };
  },

  computed: {
    titles() {
      return [...new Set(this.tasks.map((item) => item.title))];
    },
  },

  methods: {
    removeTask(id) {
      axios.delete("https://floating-retreat-11502.herokuapp.com/tasks/" + id).then((res) => {
        this.tasks.forEach((item, index) => {
          if (item.id == id) {
            this.tasks.splice(index, 1);
          }
        });
      });
    },
    changeStatus(task) {
      let index = 0;
      if (task.status == "to-do") {
        index = 1;
      }
      if (task.status == "in-progress") {
        index = 2;
      }
      if (task.status == "finished") {
        index = 0;
      }
      axios
        .put("https://floating-retreat-11502.herokuapp.com/tasks/" + task.id, {
          description: task.description,
          title: task.title,
          status: this.statuses[index],
        })
        .then((res) => {
          this.tasks.forEach((item, index) => {
            if (item.id == task.id) {
              this.tasks.splice(index, 1, res.data);
            }
          });
        });
    },
    getTitlesForTasks(title) {
      return this.tasks.filter((item) => item.title === title);
    },
  },
};
</script>


<style scoped>
.pointer {
  cursor: pointer;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
.line-through {
  text-decoration: line-through;
}
.title-table {
  display: block;
  text-align: center;
  font-size: 20px;
  color: goldenrod;
}
.description {
  width: 80%;
}
.status {
  width: 10%;
}
</style>
