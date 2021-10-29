<template> 
<div> 
   <div>
    <Tab :new_tabs="new_tabs" :new_explanation="new_explanation" :tables="new_instructions"/>
  </div>
  <div>
<!-- <Table1c /> -->
  </div>
  </div>
</template>

<script>
import Tab from "../components/Tab.vue";
import Table1c from "../components/Table_1c.vue";

import { mapState } from "vuex";
import tabsHandler from "../mixin/tabsHandler"

export default {
  components: {
    Tab,Table1c
  },
  data() {
   return {
      category_id:'9550f9fa-0d5d-4aa4-82bf-4a5cf488ff72',
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