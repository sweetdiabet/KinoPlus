<template>
  <div>
    <div v-if="state === 0" class="order">
      <h1>К сожалению билет на данное место уже купили :(</h1>
      <button class="ui-button" @click="$router.go(-1)">Вернутся назад</button>
    </div>
    <div v-else-if="state === 1" class="order">
      <h1>Вы собираетесь купить билет</h1>
      <h2>
        на <span>{{ session.film.name }}</span> в <span>{{ session.starts }}</span
        >, место <span>№{{ $route.params.seat }}</span>
      </h2>
      <button class="ui-button" @click="buy">Приобрести билет за {{ session.price }}₽</button>
    </div>
    <div v-else-if="state === 2" class="order">
      <h1>Вы успешно купили билет</h1>
      <h2>
        на <span>{{ session.film.name }}</span> в <span>{{ session.starts }}</span
        >, место <span>№{{ $route.params.seat }}</span>
      </h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      purchase: false
    }
  },
  computed: {
    ...mapGetters({
      getSession: ['sessions/getById']
    }),
    session() {
      if (this.$route.params.id) return this.getSession(Number(this.$route.params.id))
      else return null
    },
    state() {
      if (this.session.hall.places.includes(Number(this.$route.params.seat)) && !this.purchase) return 0
      if (this.purchase) return 2

      return 1
    }
  },
  methods: {
    buy() {
      if (this.state === 0 || this.state === 2) return null

      this.$store.commit('places/buy', {
        session: Number(this.session.id),
        seat: Number(this.$route.params.seat)
      })
      this.purchase = true
    }
  }
}
</script>

<style lang="scss" scoped>
.order {
  @apply flex flex-col items-center h-full;
  h1 {
    @apply text-4xl font-bold text-app-500 my-4;
  }
  h2 {
    @apply text-2xl mb-4;
    span {
      @apply font-bold text-app-500;
    }
  }
}
</style>
