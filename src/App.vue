<template>
<div>
  <NavBar :categories="categories" />
</div>
</template>


<script>
import NavBar from "./components/NavBar.vue";
import {mapActions, mapState} from 'vuex'

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
    ...mapState([
      'categories'
    ])
  },
  created() {
    this.GET_CATEGORIES()
  },
};
</script>

