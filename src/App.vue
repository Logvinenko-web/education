<template>
  <NavBar :categories="CATEGORIES" />
</template>


<script>
import NavBar from "./components/NavBar.vue";
import {mapActions, mapGetters} from 'vuex'

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      items: null,
    };
  },

  methods: {
    ...mapActions([
      'GET_CATEGORIES'
    ])
  },
  computed:{
    ...mapGetters([
      'CATEGORIES'
    ])
  },
  mounted() {
    this.GET_CATEGORIES()
  },
};
</script>

