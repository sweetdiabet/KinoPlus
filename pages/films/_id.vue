<template>
  <div class="film">
    <div class="film__details">
      <div class="film__cover" :style="`background-image: url('${film.image}')`" />
      <h1>{{ film.name }}</h1>
      <div class="film__info">
        <p>
          Длительность фильма: <span>{{ $moment('00:00', 'HH:mm').add(film.duration, 'minutes').format('H часов m минут') }}</span>
        </p>
        <p v-if="film.adult">Фильм предназначен для <span>взрослых</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      getFilm: ['films/getById']
    }),
    film() {
      if (this.$route.params.id) return this.getFilm(Number(this.$route.params.id))
      else return null
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  @apply text-4xl font-bold text-app-500 my-8;
}
.film {
  @apply flex flex-col;
  .film__cover {
    @apply bg-opacity-30 bg-contain bg-no-repeat bg-center w-full h-40vh;
  }

  .film__info {
    @apply p-4 bg-background-400 bg-opacity-10 flex flex-col gap-2 text-2xl;
    h2 {
      @apply text-app-400 font-bold text-2xl;
    }
    span {
      @apply font-semibold text-app-400;
    }
  }

  .film__seats {
    @apply flex flex-row flex-wrap items-center justify-center gap-1;
    .seat {
      @apply flex p-2 bg-background-700 w-16 h-16;
      p {
        @apply m-auto;
      }
      &.seat-ordered {
        @apply bg-app-400 text-background-50;
      }
    }
  }
}
</style>
