<template>
  <div>
    <Tab
      :new_tabs="new_tabs"
      :new_explanation="new_explanation"
      :tables="new_instructions"
    />
  </div>
</template>

<script>
import Tab from "../components/Tab.vue";
import { mapState } from "vuex";
import tabsHandler from "../mixin/tabsHandler";

export default {
  components: {
    Tab,
  },
  data() {
    return {
      category_id: "bb7c70da-41d9-48cf-80de-e0c70a084b70",
      new_tabs: [],
      new_explanation: [],
      new_instructions: [],
    };
  },
  mixins: [tabsHandler],
  computed: {
    ...mapState(["tabs", "explanation", "instructions"]),
  },
  created() {
    this.get_tabs(this.tabs, this.category_id), this.get_explanation(this.explanation, this.category_id), this.get_instructions(this.instructions, this.category_id);
  },
};
</script>