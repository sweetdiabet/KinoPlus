<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <p>Kino<b>+</b></p>
    </div>
    <div class="navbar__items">
      <nuxt-link v-for="link in availableLinks" :key="link.name" :to="link.path">{{ link.name }}</nuxt-link>
      <nuxt-link to="/account/logout"> Выйти из системы </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'Текущие сеансы',
          path: '/'
        },
        {
          name: 'Фильмы',
          path: '/films'
        },
        {
          name: 'Страница сотрудника',
          path: '/admin'
        }
      ]
    }
  },
  computed: {
    availableLinks() {
      return this.links
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  @apply flex flex-row bg-opacity-70 bg-background-800 px-4 py-8 items-center;
  .navbar__logo {
    @apply flex font-medium items-center;
    > div {
      @apply flex text-xl font-bold text-white bg-app-400 p-2;
    }
    > p {
      @apply text-2xl font-bold ml-2 text-background-50;
      b {
        @apply text-app-400;
      }
    }
  }
  .navbar__items {
    @apply ml-auto;
    a {
      @apply mx-2 font-semibold text-background-100;
      &:hover,
      &.nuxt-link-exact-active {
        @apply text-app-400;
      }
    }
  }
}
</style>
