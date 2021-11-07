<template>
  <div class="film">
    <div class="film__details">
      <div class="film__cover" :style="`background-image: url('${session.film.image}')`" />
      <h1>{{ session.film.name }}</h1>
      <div class="film__info">
        <p v-if="session.film.adult">Фильм предназначен для <span>взрослых</span></p>
        <p v-if="$moment(session.starts, 'HH:mm').diff($moment()) > 0">До начала сеанса осталось {{ $moment('00:00', 'HH:mm').add($moment(session.starts, 'HH:mm').diff($moment(), 'minutes'), 'minutes').format('H часов m минут') }}</p>
        <p v-else>
          Сеанс закончился, приходите завтра в <span>{{ session.starts }}</span>
        </p>
        <p>
          Начало в зале <span>№{{ session.hall.id }}</span>
        </p>
        <p>
          Свободных мест: <span>{{ session.hall.seats.left }}</span> из <b>{{ session.hall.seats.max }}</b> шт.
        </p>
        <p>
          Цена за место <span>{{ session.price }}₽</span>
        </p>
      </div>
    </div>
    <h1>Места для просмотра</h1>
    <div class="film__seats">
      <nuxt-link v-for="seat in session.hall.seats.max" :key="'seat' + seat" :to="`/sessions/${session.id}/order/${seat}`">
        <div class="seat" :class="{ 'seat-ordered': session.hall.places.includes(seat) }">
          <p>{{ seat }}</p>
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
      getSession: ['sessions/getById']
    }),
    session() {
      if (this.$route.params.id) return this.getSession(Number(this.$route.params.id))
      else return null
    },
    seats() {
      return Array.from(Array(this.session.hall.seats.max).keys()).filter((number) => {
        return !this.session.hall.places.includes(number)
      })
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
