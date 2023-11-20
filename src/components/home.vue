<template>
  <div class="">
    <promo></promo>
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

<script setup>
import mainSection from '../components/mainSection.vue'; // Adjust the path as needed
import promo from '../components/promo.vue'; // Adjust the path as needed
import carousel from '../components/carousel.vue'; // Adjust the path as needed
import testimonial from '../components/testimonial.vue'; // Adjust the path as needed
</script>
