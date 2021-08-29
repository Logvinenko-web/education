<template>
<div class="responsive">


  <v-carousel
    hide-delimiters
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
          src: require("../assets/presentation/1.png"),
        },
        {
          src: require("../assets/presentation/2.svg"),
        },
        {
          src: require("../assets/presentation/3.svg"),
        },
        {
          // src: require("../assets/presentation/4.svg"),
        },
        {
          src: require("../assets/presentation/5.png"),
        },
        {
          src: require("../assets/presentation/6.svg"),
        },
        {
          src: require("../assets/presentation/7.png"),
        },
        {
          src: require("../assets/presentation/8.png"),
        },
        {
          src: require("../assets/presentation/9.png"),
        },
        {
          src: require("../assets/presentation/10.png"),
        },
        {
          src: require("../assets/presentation/11.png"),
        },
        {
          src: require("../assets/presentation/12.png"),
        },
        {
          src: require("../assets/presentation/13.png"),
        },
        {
          src: require("../assets/presentation/14.png"),
        },

      ],
    };
  },
};
</script>

<style>

</style>