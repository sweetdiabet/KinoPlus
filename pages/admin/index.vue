<template>
  <div v-if="user" class="dashboard">
    <div class="dashboard__userinfo">
      <h1>
        Здравствуйте, <b>{{ user.name }}</b>
      </h1>
      <h2>
        Уровень допуска:
        <b>{{ $store.getters['groups/getById'](user.groupId).name }}</b>
      </h2>
    </div>
    <div v-if="hasGroup([1, 4])" class="dashboard__categories">
      <div class="dashboard__blocks">
        <router-link to="/admin/users">
          <div class="block__icon">
            <users-icon size="3x"></users-icon>
          </div>
          <div>
            <h1>Список пользователей</h1>
            <p>Просмотр пользователей в системе</p>
          </div>
        </router-link>
        <router-link to="/admin/films">
          <div class="block__icon">
            <user-plus-icon size="3x"></user-plus-icon>
          </div>
          <div>
            <h1>Фильмы</h1>
            <p>Список фильмов и подробности</p>
          </div>
        </router-link>
        <router-link to="/admin/sessions">
          <div class="block__icon">
            <user-plus-icon size="3x"></user-plus-icon>
          </div>
          <div>
            <h1>Сеансы</h1>
            <p>Список сеансов и подробности</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { UsersIcon, UserPlusIcon } from 'vue-feather-icons'
export default {
  components: {
    UsersIcon,
    UserPlusIcon
  },
  middleware: 'auth',
  methods: {
    hasGroup(groupIds) {
      return groupIds.includes(this.user.groupId)
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  @apply flex flex-col gap-12 mb-16 mt-12 items-center;
  .dashboard__userinfo {
    @apply flex flex-col gap-2;
    h1 {
      @apply text-5xl font-bold;
    }
    h2 {
      @apply text-2xl;
    }
  }
  .dashboard__categories {
    @apply flex flex-col gap-4;
    .dashboard__category-title {
      @apply text-4xl  font-bold;
    }
    .dashboard__blocks {
      @apply flex flex-wrap gap-4;
      > a {
        @apply flex flex-row p-6 bg-background-800 rounded-2xl gap-4;
        .block__icon {
          @apply text-app-400;
        }
        h1 {
          @apply font-app font-bold text-xl text-app-400;
        }
        &:hover {
          @apply bg-background-600;
        }
      }
    }
  }
}
</style>
