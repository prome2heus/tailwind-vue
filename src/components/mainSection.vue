<template>
  <div
    class="w-full bg-cover bg-center"
    :style="{ backgroundImage: `url(${WorldMobileMainPhoto})` }"
  >
    <div class="container mx-auto p-2 sm:p-16 lg:px-8">
      <div class="grid gap-8 grid-cols-1 md:grid-cols-2 h-full">
        <!-- Your column, which behaves like col-md-6 -->
        <div class="flex items-center justify-center h-full">
          <squareCard></squareCard>
        </div>
        <!-- Another column -->
        <div class="flex items-center justify-center h-full">
          <square-card></square-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import WorldMobileMainPhoto from "../assets/worldmobile_main_photo.png";
import squareCard from "./squareCard.vue";
import { ref } from "vue";

defineProps({
  msg: String,
});

const mainPhoto = ref(WorldMobileMainPhoto);
</script>
