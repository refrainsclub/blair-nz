<template>
  <div class="flex min-h-screen flex-col justify-between">
    <div>
      <Header />

      <div class="m-4">
        <slot />
      </div>
    </div>

    <Footer />
  </div>
</template>
