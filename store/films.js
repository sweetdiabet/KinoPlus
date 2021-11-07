export const state = () => ([
  {
    id: 1,
    name: "GhostRunner 2088",
    adult: true,
    image: "https://newxboxone.ru/wp-content/uploads/2021/08/ghostrunner-2-d18dd0bad181d0bad0bbd18ed0b7d0b8d0b2-d0bdd0bed0b2d0bed0b3d0be-d0bfd0bed0bad0bed0bbd0b5d0bdd0b8d18f-d0b4d0bbd18f-d0bfd0ba-ps5-4.jpg",
    duration: 220,
  },
  {
    id: 2,
    name: "Каролина в стране веселья",
    adult: false,
    image: "https://cdn1.ozone.ru/s3/multimedia-k/wc1200/6064291448.jpg",
    duration: 120,
  },
  {
    id: 3,
    name: "Тортильи-Ниндзя: Восстание",
    adult: true,
    image: "https://www.gastronom.ru/binfiles/images/20170324/b84cdbf4.jpg",
    duration: 300,
  },
])

export const getters = {
  getById: state => id => {
    return state.find((item, index) => {
      return item.id === id;
    });
  },
  get: state => {
    return JSON.parse(JSON.stringify(state)).sort((a, b) => a.name.localeCompare(b.name))
  },
}
