<template>
  <div class="flex min-h-screen flex-col justify-between">
    <div>
      <LayoutHeader />

      <div class="m-4">
        <slot />
      </div>
    </div>

    <LayoutFooter />
  </div>
</template>
