<template>
  <div class="films-wrapper">
    <h1>Актуальные сеансы</h1>
    <div class="films">
      <nuxt-link v-for="film in films" :key="film.id" :to="`/films/${film.id}`" class="film">
        <div class="film__cover" :style="`background-image: url('${film.image}')`" />
        <div class="film__info">
          <h2>{{ film.name }}</h2>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      films: ['films/get']
    })
  }
}
</script>

<style lang="scss" scoped>
h1 {
  @apply text-4xl font-bold text-app-500 my-8;
}
.films {
  @apply flex flex-row flex-wrap gap-4;
  .film {
    @apply flex flex-col w-1/4;

    &:hover {
      @apply opacity-80;
    }
    .film__cover {
      @apply bg-background-600 bg-opacity-30 bg-contain bg-no-repeat bg-center w-full h-40vh;
    }

    .film__info {
      @apply p-4 bg-background-600 bg-opacity-50 text-xl;
      h2 {
        @apply text-app-400 font-bold text-2xl mb-4;
      }
      span {
        @apply font-semibold text-app-400;
      }
    }
  }
}
</style>
