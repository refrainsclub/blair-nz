<script setup lang="ts">
import { ref } from "vue";

const year = ref(new Date().getFullYear());
</script>

<template>
  <footer class="bg-gray-900 text-white">
    <div
      class="mx-auto flex max-w-7xl flex-col flex-wrap items-center justify-center p-12 text-center sm:flex-row sm:justify-between lg:px-8"
    >
      <div class="flex justify-start gap-4">
        <h1 class="text-xl font-medium">
          Blair
        </h1>
      </div>
      <div class="flex justify-end gap-4">
        <p>© Blair {{ year }}</p>
      </div>
    </div>
  </footer>
</template>
