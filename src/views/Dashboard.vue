<template>
  <div>
    <add-task-form :tasks="tasks" v-on:reload="GET_TASKS()" />
    <task-view :tasks="tasks" v-on:reload="GET_TASKS()" />
  </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'
import AddTaskForm from "../components/AddTaskForm.vue";
import TaskView from "../components/TaskView.vue";

export default {
  components: {
    AddTaskForm,
    TaskView,
  },
  data() {
    return {
    };
  },

  methods: {
      ...mapActions([
      'GET_TASKS'
    ]),
  },
   computed:{
    ...mapState([
      'tasks'
    ])
  },
  created() {
    this.GET_TASKS();
  },
};
</script>