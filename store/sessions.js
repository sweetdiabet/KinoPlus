

export const state = () => ([
  {
    id: 1,
    filmId: 1,
    hallId: 1,
    starts: "20:00",
    price: 1000,
  },
  {
    id: 2,
    filmId: 1,
    hallId: 2,
    starts: "20:00",
    price: 800,
  },
  {
    id: 3,
    filmId: 2,
    hallId: 2,
    starts: "16:00",
    price: 900,
  },
  {
    id: 4,
    filmId: 3,
    hallId: 1,
    starts: "22:00",
    price: 800,
  }
])

export const getters = {
  getById: (state, getters, rootState, rootGetters) => id => {
    const session = JSON.parse(JSON.stringify(state.find((item, index) => {
      return item.id === id;
    })));

    if (!session) return null;

    session.hall = rootGetters['halls/getById'](session.hallId, session.id);
    session.film = rootGetters['films/getById'](session.filmId);

    return session;
  },
  get: (state, getters, rootState, rootGetters) => {
    const sessions = JSON.parse(JSON.stringify(state));

    if (!sessions) return null;

    sessions.forEach((session) => {
      session.hall = rootGetters['halls/getById'](session.hallId, session.id);
      session.film = rootGetters['films/getById'](session.filmId);
    })

    sessions.sort((a, b) => a.film.name.localeCompare(b.film.name))

    return sessions;
  },
}
