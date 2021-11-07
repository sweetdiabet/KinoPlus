<template>
  <div class="error">
    <div v-if="$route.query.cause === 'noPermissions'" class="no-permissions">
      <h1>Ошибка доступа</h1>
      <p>Вы пытаетесь открыть страницу, к которой у вас нет доступа.</p>
      <nuxt-link class="ui-button" to="/"
        ><ChevronLeftIcon /> Вернутся на главную страницу</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon } from 'vue-feather-icons'
export default {
  components: {
    ChevronLeftIcon,
  },
}
</script>

<style lang="scss" scoped>
.error {
  @apply flex flex-col;
  h1 {
    @apply text-3xl font-bold;
  }
  p {
    @apply text-xl font-medium;
  }
  .no-permissions {
    @apply flex flex-col gap-4;
  }
}
</style>
