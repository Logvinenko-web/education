<template>
  <div>
    <Tab :new_tabs="new_tabs" :new_explanation="new_explanation" :tables="new_instructions"/>
  </div>
</template>

<script>
import Tab from "../components/Tab.vue";
import { mapState } from "vuex";
import tabsHandler from "../mixin/tabsHandler"

export default {
  components: {
    Tab,
  },
  data() {
   return {
      category_id:'d2989be6-a754-4022-8985-090778bbfea4',
      new_tabs: [],
      new_explanation: [],
      new_instructions:[],
    };
},
 mixins:[tabsHandler],
  computed: {
    ...mapState(["tabs", "explanation", "instructions"]),
  },
  created() {
    this.get_tabs(this.tabs, this.category_id), this.get_explanation(this.explanation, this.category_id), this.get_instructions(this.instructions, this.category_id);
  },
};
</script>