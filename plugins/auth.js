import Vue from "vue";

Vue.mixin({
  computed: {
    user() {
      const session = this.$cookies.get("usr_session");
      if (!session) return null;

      const user = this.$store.state.users.users.filter((usr) => {
        if(usr.name === session.name && usr.password === session.password) return usr;
        else return null;
      })[0];

      return user;
    }
  }
})
