<template>
  <div class="app">
    <div class="navigation">
      <Navbar />
    </div>
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss">
body {
  @apply text-background-100 text-opacity-85 font-medium bg-background-900;
}

.app {
  @apply relative font-app flex flex-col mx-auto;
  .navigation {
    @apply sticky;
  }
  .content {
    @apply flex flex-col p-2 mx-4;
  }
}
</style>
