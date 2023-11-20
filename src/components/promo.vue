<template>
  <div class="container mx-auto py-8">
    <div
      class="grid gap-8 rounded-lg bg-blue-500 sm:grid-cols-2 md:grid-cols-3"
    >
      <!-- Your column, which behaves like col-md-6 -->
      <div class="flex flex-col items-center justify-center">
        <div><img :src="d3js" alt="d3js" class="h-20" /></div>
        <div>
          <p class="mt-3 text-center text-[27px] leading-[42px] text-white">
            d3js! very fun
          </p>
          <p class="text-center text-[22px] text-yellow-300">
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
import { ref, reactive, computed } from 'vue';
import d3js from '../assets/d3js-icon.svg';
import svgrepo from '../assets/js-svgrepo-com.svg';
import vue from '../assets/vue.svg';
</script>
