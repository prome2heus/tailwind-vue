<template>
  <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow">
    <!-- Image -->
    <img
      :src="image"
      alt="profile image"
      class="w-48 h-48 rounded-full object-cover"
    />

    <!-- Name and Surname -->
    <div class="mt-2 text-lg font-semibold">{{ name }} {{ surname }}</div>

    <!-- Opinion -->
    <p class="mt-2 text-gray-600 text-center">{{ opinion }}</p>

    <!-- Stars -->
    <div class="mt-2">
      <span v-for="star in starsArray" :key="star" class="text-yellow-400"
        >&#9733;</span
      >
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

// Props
const props = defineProps({
  image: String,
  name: String,
  surname: String,
  opinion: String,
  stars: Number,
});

// Computed property to create an array of stars
const starsArray = computed(() => Array(props.stars).fill("★"));
</script>

<style scoped>
/* Add any additional styling here */
</style>
