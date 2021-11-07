<template>
  <div class="users">
    <div class="controls">
      <button class="ui-button" @click="$router.go(-1)">
        <chevron-left-icon size="1.5x" class="custom-class"></chevron-left-icon>
      </button>
      <h1>Список пользователей</h1>
    </div>
    <div class="users__table">
      <vue-good-table style-class="vgt-table striped" :columns="columns" :rows="rows" theme="green" />
    </div>
  </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table'
import { ChevronLeftIcon } from 'vue-feather-icons'

export default {
  components: {
    VueGoodTable,
    ChevronLeftIcon,
  },
  middleware: ['auth'],
  meta: {
    groupId: [1, 4],
  },
  data() {
    return {
      columns: [
        {
          label: 'ФИО',
          field: 'name',
        },
        {
          label: 'Пароль',
          field: 'password',
        },
        {
          label: 'Группа',
          field: 'groupId',
          formatFn: (value) => {
            return this.$store.getters['groups/getById'](value).name
          },
        },
      ],
    }
  },
  computed: {
    rows() {
      return this.$store.state.users.users
    },
  },
}
</script>

<style lang="scss" scoped>
.users {
  .controls {
    @apply flex flex-row items-center gap-2;
    .ui-button {
      @apply p-3;
    }
  }
  h1 {
    @apply text-2xl font-bold;
  }
  @apply flex flex-col gap-4;
}
</style>
