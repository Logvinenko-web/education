<template>
<div class="responsive">


  <v-carousel
    hide-delimiters
    height="100vh"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" >
    </v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../assets/rro_ukey/1.svg"),
        },
        {
          src: require("../assets/rro_ukey/2.svg"),
        },
        {
          src: require("../assets/rro_ukey/3.svg"),
        },
        {
          src: require("../assets/rro_ukey/4.svg"),
        },
        {
          src: require("../assets/rro_ukey/5.svg"),
        },
        {
          src: require("../assets/rro_ukey/6.svg"),
        },
        {
          src: require("../assets/rro_ukey/7.svg"),
        },
        {
          src: require("../assets/rro_ukey/8.svg"),
        },
       
        

      ],
    };
  },
};
</script>

<style>

</style>