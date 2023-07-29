<script setup lang="ts">
import { ref } from "vue";

const year = ref(new Date().getFullYear());
</script>

<template>
  <footer class="bg-gray-900 text-white">
    <div
      class="mx-auto flex flex-wrap text-center max-w-7xl items-center justify-center flex-col sm:flex-row sm:justify-between p-12 lg:px-8"
    >
      <div class="flex justify-start gap-4">
        <h1 class="font-medium text-xl">Blair</h1>
      </div>
      <div class="flex justify-end gap-4">
        <p>© Blair {{ year }}</p>
      </div>
    </div>
  </footer>
</template>
