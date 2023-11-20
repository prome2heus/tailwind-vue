<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import mainSection from "./components/mainSection.vue";
import header2 from "./components/header2.vue";
import carousel from "./components/carousel.vue";
import promo from "./components/promo.vue";
import testimonial from "./components/testimonial.vue";
import pricing from "./components/pricing.vue";
//import profileImage from "./assets/face.jpg";
</script>

<template>
  <header2></header2>
  <pricing></pricing>
  <router-view></router-view>
</template>
