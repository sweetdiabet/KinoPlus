<template>
<div class="films-wrapper">
  <h1>Актуальные сеансы</h1>
  <div class="films">
    <nuxt-link v-for="session in sessions" :key="session.id" :to="`/sessions/${session.id}`" class="film">
    <div class="film__cover" :style="`background-image: url('${session.film.image}')`" />
    <div class="film__info">
    <h2>{{session.film.name}}</h2>
      <p v-if="$moment(session.starts, 'HH:mm').diff($moment()) > 0">Начало через <span>{{$moment('00:00', 'HH:mm').add($moment(session.starts, 'HH:mm').diff($moment(), 'minutes'), 'minutes').format('H часов m минут')}}</span></p>
  <p v-else>Завтра в <span>{{session.starts}}</span></p>
    <p>Зал <span>№{{session.hall.id}}</span></p>
    <p>Свободных мест: <span>{{session.hall.seats.left}}</span> шт.</p>
    </div>
    </nuxt-link>
  </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      sessions: ['sessions/get']
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
