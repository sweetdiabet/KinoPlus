export const state = () => ([
  {
    session: 1,
    seat: 12,
  },
  {
    session: 2,
    seat: 13,
  },
  {
    session: 3,
    seat: 6,
  },
  {
    session: 4,
    seat: 7,
  },
  {
    session: 4,
    seat: 1,
  },
  {
    session: 2,
    seat: 17,
  },
])

export const getters = {
  getBySessionId: state => id => {
    return state.filter((item, index) => {
      return item.session === id;
    });
  },
}

export const mutations = {
  buy(state, data) {
    if (!data) return;

    return state.push({
      session: data.session,
      seat: data.seat,
    });
  }
}
