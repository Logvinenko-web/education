<template>
  <div>
    <Loader v-if="loading"></Loader>
    <NavBar v-else :categories="categories" />
  </div>
</template>


<script>
import NavBar from "./components/NavBar.vue";
import Loader from "./components/Loader.vue";

import { mapActions, mapState, mapGetters } from "vuex";

export default {
  components: {
    NavBar,
    Loader,
  },
  data() {
    return {
      loading: true,

      items: null,
    };
  },

  methods: {
    ...mapActions(["GET_CATEGORIES"]),
    ...mapActions(["GET_TASKS"]),
    ...mapActions(["GET_EXPLANATION"]),
    ...mapActions(["GET_TABS"]),
    ...mapActions(["GET_INSTRUCTIONS"])
  },
  computed: {
    ...mapState(["categories"]),
    ...mapGetters(["TASKS"]),
  },
  created() {
    this.GET_EXPLANATION(), this.GET_CATEGORIES(), this.GET_TASKS(), this.GET_TABS(), this.GET_INSTRUCTIONS();
  },
  watch: {
    categories: function () {
      this.loading = false;
    },
  },
};
</script>

