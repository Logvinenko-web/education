<template>
  <div class="pa-10">
    <div>
      <p class="font-weight-regular">
        Мобільний додаток може бути встановлений лише на andriod старше 5
        версії. Додаток називається Checkbox, також даний додаток встановлений
        на терміналах, але його назва RRO.Ukey, встановлюють і оновлюють
        представники банків якими був виданий термінал.
      </p>
      <p class="font-weight-regular"></p>
    </div>
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
          name: "Інструкція",
          link: "https://docs.google.com/document/d/1kLZRR4A0fVkemT-BksrZFT9od8-nqryg/edit",
          description: "",
        },
        {
          name: "Дев версія додатка.На проді вже 24 версія із акцизною маркою",
          link: "https://drive.google.com/file/d/1PH_eKw_i7OzBViCJBO3eBoi1IEDmIWVk/view?usp=sharing",
        },
      ],
    };
  },
};
</script>