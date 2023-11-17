<template>
  <div class="carousel-container flex justify-center items-center">
    <!-- Left Arrow Column -->
    <div class="shrink-0">
      <button class="carousel-button" @click="prev">
        <img :src="leftArrow" alt="Previous" />
      </button>
    </div>

    <!-- Carousel Slide Column -->
    <div class="shrink-0 mx-2 relative z-10">
      <!-- Adjusted z-index -->
      <div class="overflow-hidden">
        <!-- Clipping box -->
        <transition name="slide" mode="out-in">
          <slot :currentSlide="currentSlide"></slot>
        </transition>
      </div>
    </div>

    <!-- Right Arrow Column -->
    <div class="shrink-0">
      <button class="carousel-button" @click="next">
        <img :src="rightArrow" alt="Next" />
      </button>
    </div>
  </div>
</template>

<script setup>
import leftArrow from "../assets/left-arrow-2.svg";
import rightArrow from "../assets/right-arrow-2.svg";
import { ref } from "vue";

const currentSlide = ref(0);
const totalSlides = 3; // Update this based on the number of slides

const next = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides;
};

const prev = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
};
</script>
<style>
/* TailwindCSS styles and transition classes */
.carousel-container {
  /* Your styles */
}
.carousel-button {
  /* Your styles */
}
.carousel-slide {
  /* Your styles */
}

/* Transition enter and leave active classes */
.slide-enter-active,
.slide-leave-active {
  position: relative;
  width: 100%;
  transition: transform 0.5s ease;
}

/* Transition enter from and leave to classes */
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(100%);
}

/* Positioning for the entering and leaving elements */
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>
