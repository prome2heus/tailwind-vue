<template>
  <header class="fixed top-0 left-0 w-full h-28 py-4 z-50 bg-white transition">
    <div class="container mx-auto flex justify-between items-center">
      <img :src="logo" alt="logo" class="h-20" />
      <nav>
        <ul class="flex space-x-4">
          <li><a href="#" class="hover:text-gray-300">Home</a></li>
          <li><a href="#" class="hover:text-gray-300">About</a></li>
          <li><a href="#" class="hover:text-gray-300">Services</a></li>
          <li><a href="#" class="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
// Import reactive APIs or other Composition functions as needed
import { ref, reactive, computed } from "vue";
import logo from "../assets/worldmobile_logo_2000x2000.png";

// Example of a reactive state or computed properties
const state = reactive({
  // Your reactive state here
});

// Example of a computed property
const computedProperty = computed(() => {
  // Your logic here
});

// Example of methods
function yourMethod() {
  // Method logic here
}
</script>
