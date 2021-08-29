<template>
  <div class="pa-10">
    <div>
      <p class="font-weight-regular">
        Чекбокс каса - це утиліта, яка може бути встановлена на windows або
        linux і емулює роботу фіскального реєстратора Марії 304т.Каса із фронт
        системою може працювати за допомогою драйвер артсофт(можна демо),
        резонанс, чекбокс(маємо власний драйвер), або самописним, який може
        працювати із Марія 304т
      </p>
      <p class="font-weight-regular">
        Каса може бути як онлайн так і офлайн. <br />
        Онлайн каса працює лише при наявності інтернета, чеки в ній можуть бути
        з відміткою ОФЛАЙН якщо на стороні серверу ми перевели касу в офлайн.
        Офлайн каса- це веб сервер який має власний апі(по дефолту
        127.0.0.1:9200/api/docs) і може працювати без інтернета.Наразі 54 версія
        каси без інтернета може лише формувати чеки, відкриття і закриття зміни
        при наявності інтернета.Вже є версія каси із повним офлайном, поки
        тестується.В офлайн касі всі чеки із поміткою ОФЛАЙН, каса переходить в
        офлайн що б сформувати чек і після формування і відправлення чеку
        переходить в онлайн, тобто каса постійно в онлайні, лише коли робть чек
        то в офлайні.
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
          name: "Інструкція онлайн каса",
          link: "https://docs.google.com/document/d/1LUNP5R0mJFqP0D4PwXNK_KQHhWhSm0Z0GRH053eC2-M/edit",
          description: "",
        },
        {
          name: "Інструкція офлайн каса",
          link: "https://docs.google.com/document/d/1MTvmnKeYi4xlLDUrIf8-OFDAj51w4IkeVnKczBG-iAg/edit",
        },
        {
          name: "Інстал онлайн каса windows",
          link: "https://agents.checkbox.in.ua/agents/checkboxAgentRRO/Windows/agent.rro(v0.2.37)_.exe",
        },
        {
          name: "Інстал офлайн каса windows",
          link: "https://agents.checkbox.in.ua/agents/checkboxAgentRRO/Windows/offline/checkbox.kasa(v1.0.1.54)__.exe",
        },
      ],
    };
  },
};
</script>