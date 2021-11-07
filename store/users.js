

export const state = () => ({
  users: [
    {
      id: 1,
      name: "Egor",
      password: "password",
      groupId: 1,
    },
  ]
})

export const getters = {
  getById: state => id => {
    return state.users.find((item, index) => {
      return item.id === id;
    });
  },
}
