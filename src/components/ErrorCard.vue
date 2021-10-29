<template>
<div class="card-box">
  <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-img
      :src= item.img
      height="300px"
    ></v-img>

    <v-card-title>
        {{item.title}}
    </v-card-title>

    <v-card-subtitle>
        {{item.sub_title}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
        @click="show = !show"
      >
        Опис
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text
        :inner-html.prop="item.description | marked">
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </div>
</template>

<script>
  export default {
        props: ['item'],

    data: () => ({
      show: false,
    }),
  }
</script>

<style scoped>
.card-box {
    padding-bottom: 20px;
    padding-right: 10px;
}
</style>
