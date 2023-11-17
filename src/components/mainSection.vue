<template>
  <div
    class="w-full bg-cover bg-center sm:bg-[url('../public/worldmobile_main_photo.png')] bg-[url('../public/sm-hero.png')]"
  >
    <div
      class="container mx-auto p-2 sm:p-16 lg:px-8 h-[600px] sm:h-[480px] flex items-center justify-center"
    >
      <div
        class="grid gap-16 w-[700px] grid-cols-1 sm:grid-cols-2 h-3/4 w-full"
      >
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
//import WorldMobileMainPhoto from "../assets/worldmobile_main_photo.png";
import squareCard from "./squareCard.vue";
import { ref } from "vue";

defineProps({
  msg: String,
});

//const mainPhoto = ref(WorldMobileMainPhoto);
</script>
