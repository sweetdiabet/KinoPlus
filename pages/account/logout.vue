<template>
  <div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  methods: {
    logout() {
      this.$cookies.remove('usr_session')
      return this.$router.go({ path: '/account/login', force: true })
    },
  },
}
</script>
