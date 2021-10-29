<template>
  <div>
    <Tab :new_tabs="new_tabs" :new_explanation="new_explanation" :tables="new_instructions"/>
  </div>
</template>

<script>
import Tab from "../components/Tab.vue";
import { mapState } from "vuex";
export default {
  components: {
    Tab,
   
  },
  data() {
    return {
      category_id:'dfe41080-658b-4cb3-8209-52ab56a3825b',
      new_tabs: [],
      new_explanation: [],
      new_instructions:[],
    };
  },
  computed: {
    ...mapState(["tabs", "explanation", "instructions"]),
  },
  methods: {
add(){
  console.log()
}
  },
  created() {
    this.add(), this.$get_tabs(this.tabs, this.$route.name), this.$get_explanation(this.explanation, this.$route.name), this.$get_instructions(this.instructions, this.$route.name);
  },
};
</script>