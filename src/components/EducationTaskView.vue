<template>
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
      <v-tab-item v-for="day in days" :key="day">
        <v-card flat>
          <v-simple-table class="pa-6">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Tasks</th>
                  <th class="text-left">Link</th>
                  <th class="text-left">Description</th>
                </tr>
              </thead>
              <tbody v-for="item in education_tasks" :key="item.education_day_id">
                <tr 
                v-if="day.id === item.education_day_id"
                >
                  <td>
                    <h3>{{ item.name }}</h3>
                  </td>
                  <td>
                    <a :href="item.link" target="_blank">{{ item.link }}</a>
                  </td>
                  <td>{{ item.description }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
// import axios from "axios";
import { mapActions, mapState } from "vuex";

export default {
    
  props: ["education_tasks"],


  data() {
    return {
       tab: null,
      loading: false,
      dialog: false,
    };
  },

 methods: {
    ...mapActions(["GET_DAYS"]),
    },
   
  computed: {
    ...mapState(["days"]),
  },
  created() {
    this.GET_DAYS();
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
