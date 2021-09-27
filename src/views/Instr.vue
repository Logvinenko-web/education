<template>
<div class="container">
    <v-card
  elevation="6"
  class="mx-auto my-12"
    max-width="374"
>
 <v-img
      height="250"
      src="https://logojinni.com/ru/image/logos/privatbank-29.svg"
    ></v-img>
    <v-card-title>Приват Банк</v-card-title>
<v-card-text>     

      <div>Отримання ключа ЕЦП через систему приват24</div>
    </v-card-text>
  
     <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
<router-link to="/privat-bank">
        Отримати
        </router-link>      </v-btn>
</v-card>


    <v-card
  elevation="6"
  class="mx-auto my-12"
    max-width="374"
>
 <v-img
      height="250"
      src="https://static.wixstatic.com/media/78e5ac_a436adee78bd4452ada3a48351bd5e60~mv2.jpg/v1/fill/w_480,h_480,al_c,q_90/78e5ac_a436adee78bd4452ada3a48351bd5e60~mv2.jpg"
    ></v-img>
    <v-card-title>КНЕДП ІДД ДПС</v-card-title>
<v-card-text>     

      <div>Отримання ключа ЕЦП в потатковій</div>
    </v-card-text>
  
     <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
        
      >
      <router-link to="/dps">
        Отримати
        </router-link>
      </v-btn>
</v-card>
    <v-card
  elevation="6"
  class="mx-auto my-12"
    max-width="374"
>
 <v-img
      height="250"
      src="https://storage.dtkt.ua/files/NikoNews/EPidpys09.jpg"
    ></v-img>
    <v-card-title>Інші АЦСК</v-card-title>
<v-card-text>     

      <div>Отримання ключа ЕЦП в інших АЦСК</div>
    </v-card-text>
  
     <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Отримати
      </v-btn>
</v-card>
</div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
}
</style>