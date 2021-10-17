<template>
  <v-sheet elevation="6">
    <v-tabs
      background-color="cyan"
      dark
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-outline"
      show-arrows
      v-model="tab"
    >
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tab v-for="tab in new_tabs" :key="tab.id">
        {{ tab.name }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="tab in new_tabs" :key="tab.id">
        <v-card flat v-for="explanation in new_explanation" :key="explanation.id">
          <v-card-text
          v-if="tab.id === explanation.tab_id"
          >
            <p class="font-weight-regular">{{ explanation.description }}</p>
          </v-card-text>
        </v-card>
        <Table v-if="tab.name === 'Інструкції_Інстал'" :tables="tables" />
      </v-tab-item>
    </v-tabs-items>
  </v-sheet>
</template>

<script>
import Table from "../components/Table.vue";

export default {
  props: ["new_tabs", "new_explanation", "tables"],
  components: {
    Table,
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style scoped>
.font-weight-regular {
  /* padding:10px */
}
</style>