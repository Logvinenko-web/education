<template>
  <div class="pa-10">
    <Table v-bind:doc="doc" />
  </div>
</template>

<script>
import Table from "../components/Table.vue";

export default {

  components: { Table },

  data() {
    return {
      doc: [
        {
          name: "ЗАКОН УКРАЇНИ",
          link: "https://zakon.rada.gov.ua/laws/show/265/95-%D0%B2%D1%80#Text",
          description:
            "Про застосування реєстраторів розрахункових операцій у сфері торгівлі, громадського харчування та послуг",
        },
        {
          name: "НАКАЗ № 306",
          link: "https://zakon.rada.gov.ua/laws/show/z0624-20#Text",
          description:
            "Про внесення змін до наказу Міністерства фінансів України від 21 січня 2016 року № 13",
        },
        {
          name: "НАКАЗ № 329",
          link: "https://zakon.rada.gov.ua/laws/show/z0832-21#Text",
          description:
            "Про затвердження Змін до Положення про форму та зміст розрахункових документів / електронних розрахункових документів від 08.06.2021",
        },
      ],
    };
  },
};
</script>