<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import mainSection from "./components/mainSection.vue";
import headerBar from "./components/headerBar.vue";
import carousel from "./components/carousel.vue";
import promo from "./components/promo.vue";
import testimonial from "./components/testimonial.vue";
//import profileImage from "./assets/face.jpg";
</script>

<template>
  <div class="mt-28">
    <headerBar></headerBar>
    <div>
      <mainSection></mainSection>
      <promo></promo>
    </div>
  </div>
  <carousel v-slot="{ currentSlide }">
    <div v-if="currentSlide === 0">
      <testimonial
        image="../face.jpg"
        name="John"
        surname="Doe"
        opinion="This is a great service!"
        :stars="4"
      />
    </div>
    <div v-if="currentSlide === 1">
      <testimonial
        image="/face2.jpeg"
        name="Janny"
        surname="Doe"
        opinion="This is a great service!"
        :stars="4"
      />
    </div>
    <div v-if="currentSlide === 2">
      <testimonial
        image="/obama.jpeg"
        name="Barak"
        surname="Obama"
        opinion="Obama approves!"
        :stars="4"
      />
    </div>
  </carousel>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
