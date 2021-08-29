<template>
  <div class="pa-10">
    <div>
      <p class="font-weight-regular">
        Чекбокс підпис - це утиліта, яка може бути встановлена на windows або
        linux і підписує транзакції ецп касира, які потім відправляються на
        сервер ДПС.
      </p>
      <p class="font-weight-regular">
        Підпис може бути встановлени в будь якому місці і не бути привязаний до
        чекбокс каси або порталу. Якщо у клієнта є впн або фаервол і т.п.(що
        блокує доступ до серверів ацск), тоді потрібно відкрити такі
        <a target="_blank" href="https://paste.checkbox.in.ua/bizuqikilo.pas"
          >доступа</a
        >
      </p>
      <p class="font-weight-regular">
        Клієнт має можливість завантажити печатку касира нам на сервер, в меню
        касири на порталі, і не використовувати чекбокс підпис. Підпис буде
        працювати у нас на сервері, постійно в онлайні.
      </p>
    </div>
    <Table v-bind:doc="doc" />
  </div>
</template>

<script>
import Table from "../components/Table.vue";

export default {
  components: {
    Table,
  },
  data() {
    return {
      doc: [
        {
          name: "Інструкція чекбокс підпис windows",
          link: "https://docs.google.com/document/d/1U_zSY8w4TByXSQMHP0t4l3BsvjZnUeUP_G7FiCrc7vQ/edit",
        },
        {
          name: "Інструкція чекбокс підпис linux",
          link: "https://docs.google.com/document/d/11BhjfMG7lKG263F1LeksVY-843w7gNrO6h6PPCNfCmY/edit",
        },
        {
          name: "Інструкція завантаження підпису на сервер",
          link: "https://docs.google.com/document/d/1893pbfXnP6EkF6FW9Mt9D_iNzdtoTh87u0ZEjZYuK5U/edit?usp=sharing",
        },
        {
          name: "Інстал підпис windows",
          link: "https://agents.checkbox.in.ua/agents/checkboxAgentSign/Windows/agent.signer(v0.1.14).exe",
        },
      ],
    };
  },
};
</script>