<template>
  <v-card>
    <v-toolbar color="cyan" dark flat>
      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="grey"></v-tabs-slider>

          <v-tab v-for="item in days" :key="item.id">
            {{ item.day }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in days" :key="item">
        <v-card flat>
          <v-simple-table class="pa-6">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Tasks</th>
                  <th class="text-left">Link</th>
                  <th class="text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in item.tasks" :key="item.id">
                  <td>
                    <h3>{{ item.task }}</h3>
                  </td>
                  <td>
                    <a :href="item.link" target="_blank">{{ item.link }}</a>
                  </td>
                  <td>{{ item.description }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      //   "Другий день", "Третій день", "Четвертий день", "Пятий день"
      days: [
        {
          id: 1,
          day: "Перший день",
          tasks: [
            {
              id: 1,
              task: "Організаційні питання",
              link: "https://docs.google.com/document/d/1_UWLGUi38BBe9CylFWVG6U23gBDblJb-xFhDF5iBhK8/edit",
              description: "Правила роботи в чекбокс, регламент",
            },
            {
              id: 2,
              task: "Базовий закон",
              link: "https://zakon.rada.gov.ua/laws/show/265/95-%D0%B2%D1%80#Text",
              description: "Вивчити і ознайомитись із законом",
            },
            {
              id: 3,
              task: "Наказ 306",
              link: "https://zakon.rada.gov.ua/laws/show/z0624-20#Text",
              description: "Вивчити і ознайомитись із наказом",
            },
            {
              id: 4,
              task: "Касова дисципліна",
              link: "https://drive.google.com/file/d/1I64PilRm9UqUMgtQre-uuMT8RtVg8ghv/view",
              description: "Ознайомитись із касовою дисципліною",
            },
          ],
        },
        {
          id: 2,
          day: "Другий день",
          tasks: [
            {
              id: 1,
              task: "Ознайомитись з порталом",
              link: "",
              description:
                "Прочитати інструкцію з реєстрацією на порталі і роботою",
            },
            {
              id: 2,
              task: "Генерація тестових печаток касира",
              link: "https://acskidd.gov.ua/certs-request-rro",
              description:
                "Встановити програму, згенерувати печатку, підписати сертифікати.Програму і ключ директора видаємо.",
            },
            {
              id: 3,
              task: "Реєстрація ТТ, каси, касира",
              link: "",
              description: "Зараєструвати ТТ, касу і касира на порталі",
            },
            {
              id: 4,
              task: "Робота на порталі",
              link: "",
              description: "Добавити товар, відкрити зміну, зробити чеки(з різними формами оплатами), зробити повернення, закрити зміну.Сформувати звіти по касі в меню звіти",
            },
          ],
        },
        {
          id: 1,
          day: "Третій день",
          tasks: [
            {
              id: 1,
              task: "2",
              description: "",
            },
          ],
        },
        {
          id: 1,
          day: "Четвертий день",
          tasks: [
            {
              id: 1,
              task: "Ознайомитись із специфікацією апі",
              link:'https://habr.com/ru/post/483202/',
              description: "Ознайомитись із специфікацією апі в розділі апі.",
            },
            {
              id: 2,
              task: "Прочитати про REST API",
              link:'https://sebweo.com/rozuminnya-osnov-roboti-api-i-rest-api-korotkij-vstup/',
              description: "Що таке рест?, Анатомія запиту до API, ",
            },
             {
              id: 3,
              task: "Коди стану HTTP",
              link:'https://developer.mozilla.org/ru/docs/Web/HTTP/Status',
              description: "Ознайомитись із частими кодами стану, 2хх, 4хх, 5хх. Чим вони відрізняються",
            },
             {
              id: 4,
              task: "Відкрити зміну, перевірити статус зміни, зробити чек продажу",
              link:'',
              description: "Авторизуватись касиром, Відкрити зміну, перевірити статус зміни.",
            },
             {
              id: 5,
              task: "Сформувати чек продажу, перевірити статус",
              link:'',
              description: "Зробити чек продажу з одним товаром і одним типом оплати. Перевірити статус чека, Відправити в чат посилання на чек",
            },
             {
              id: 6,
              task: "Сформувати чек продажу, перевірити статус",
              link:'',
              description: "Зробити чек продажу з двома товаром і змішаним типом оплати(CASH, CASHLESS). Перевірити статус чека, Відправити в чат посилання на чек",
            },
            {
              id: 7,
              task: "Сформувати х-звіт, Зробити внесення\винесення, закрити зміну",
              link:'',
              description: "Зробити внесення на 1200грн, винесення на 255 грн. Зробити х звіт, зарити зміну. В чат відправити посилання на х-звіт і z-звітф",
            },

          ],
        },
        {
          id: 1,
          day: "Пятий день",
          tasks: [
            {
              id: 1,
              task: "2",
              description: "",
            },
          ],
        },
      ],
    };
  },
};
</script>