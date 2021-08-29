<template>
  <div class="pa-10">
    <div>
      <p class="font-weight-regular">
        Апі використовують всі наші рішення(каса, портал, моб.додаток). По апі
        можуть інтегруватись як і інтернет магазини так і фронт системи, CRM і
        т.п. Більшість хто інтегрується це наші партнери.
      </p>
      <p class="font-weight-regular">
        Базові запити для роботи по апі: <br />
        - Запит на Відкриття зміни<br />
        - Запит на фомування чеку<br />
        - Запит на перевірку статусу чека<br />
        - Запит на закриття зміни
      </p>
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
          name: "Специфікація",
          link: "https://docs.google.com/document/d/1Zhkc4OljKjea_235YafVvZunkWSp6TCAKeckhgl8t2w/edit",
          description:
            "Структура і основнимы запитами по апі. Всі запити які реалізовані в апі, можна переглянути в свагер/редок",
        },
        {
          name: "Свагер dev",
          link: "	https://dev-api.checkbox.in.ua/api/docs",
        },
        {
          name: "Редок dev",
          link: "https://dev-api.checkbox.in.ua/api/redoc",
        },
      ],
    };
  },
};
</script>