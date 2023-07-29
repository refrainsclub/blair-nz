<template>
  <div class="flex min-h-screen flex-col justify-between">
    <div>
      <UiHeader />

      <div class="m-4">
        <slot />
      </div>
    </div>

    <UiFooter />
  </div>
</template>
