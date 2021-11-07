<template>
  <div class="login">
    <form class="login__block" @submit.prevent="auth">
      <h1>Войдите в аккаунт администратора</h1>
      <div v-if="errors.length > 0" class="login__errors">
        <p>Ошибка в данных, исправте следующие ошибки:</p>
        <p v-for="error in errors" :key="error">{{ error }}</p>
      </div>
      <div class="login__input">
        <div>
          <p>Логин</p>
          <input
            key="login"
            v-model="login"
            class="ui-input"
            type="text"
            name="login"
          />
        </div>
        <div>
          <p>Код доступа</p>
          <input
            key="password"
            v-model="password"
            class="ui-input"
            type="password"
            name="password"
          />
        </div>
      </div>
      <button class="ui-button" name="auth" @click="auth">Войти</button>
      {{ user }}
    </form>
  </div>
</template>

<script>
export default {
  middleware: 'guest',
  data() {
    return {
      login: null,
      password: null,
      errors: [],
    }
  },
  methods: {
    auth() {
      this.$data.errors = []

      if (!this.$data.login || !this.$data.password)
        return this.$data.errors.push('Логин или пароль не указаны!')
      const user = this.$store.state.users.users.filter((usr) => {
        if (
          usr.name === this.$data.login &&
          usr.password === this.$data.password
        )
          return usr
        else return null
      })[0]
      console.log(user)

      if (!user)
        return this.$data.errors.push(
          'Пользователь с таким логином или паролем не найден!'
        )

      this.$cookies.set('usr_session', user)

      this.$router.go({ path: '/', force: true })
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  @apply flex flex-col mt-20vh;
  .login__block {
    @apply gap-2 text-background-50 bg-background-800 mt-32 p-12 flex m-auto flex-col w-screen-50vw;
    h1 {
      @apply mb-2 text-2xl font-bold;
    }
    .login__input {
      @apply flex flex-col my-2 gap-4;
      p {
        @apply font-semibold;
      }
      input {
        @apply w-full;
      }
      > div {
        @apply flex flex-col;
      }
    }
  }
}
</style>
