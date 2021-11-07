<template>
  <div>
    <div v-if="error.statusCode === 404" class="error">
      <h1>Страница не найдена</h1>
      <p>Такой страницы пока нет, возможно вы ошиблись адресом.</p>
      <nuxt-link class="ui-button" to="/"><ChevronLeftIcon /> Вернутся обратно</nuxt-link>
    </div>
    <div v-else class="error">
      <h1>Произошла ошибка :(</h1>
      <p>Информация об ошибке:</p>
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon } from 'vue-feather-icons'
export default {
  components: {
    ChevronLeftIcon,
  },
  props: ['error'],
}
</script>

<style lang="scss" scoped>
.error {
  @apply flex flex-col gap-2;
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
