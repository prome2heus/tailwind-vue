<template>
  <h1>{{ msg }}</h1>

  <div>
    <button
      type="button"
      @click="count++"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      count is {{ count }}
    </button>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<script setup>
import squareCard from "./squareCard.vue";
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
