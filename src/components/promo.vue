<template>
  <div class="container mx-auto py-8">
    <div
      class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 bg-blue-500 rounded-lg"
    >
      <!-- Your column, which behaves like col-md-6 -->
      <div class="flex flex-col items-center justify-center">
        <div><img :src="d3js" alt="d3js" class="h-20" /></div>
        <div>
          <p class="text-white text-center text-[27px] leading-[42px] mt-3">
            d3js! very fun
          </p>
          <p class="text-yellow-300 text-[22px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            ullamcorper suscipit viverra. Vivamus vehicula blandit lorem, id
          </p>
        </div>
      </div>
      <!-- Another column -->
      <div class="flex items-center justify-center">
        <img :src="svgrepo" alt="svgrepo" class="h-20" />
        <p>sdfgsdgsdfg</p>
      </div>
      <div class="flex items-center justify-center">
        <img :src="vue" alt="vue" class="h-20" />
        <p>sdfgsdgsdfg</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import d3js from "../assets/d3js-icon.svg";
import svgrepo from "../assets/js-svgrepo-com.svg";
import vue from "../assets/vue.svg";
</script>
