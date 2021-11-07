export const state = () => ([
  {
    id: 1,
    type: 1,
    seats: 30,
  },
  {
    id: 2,
    type: 2,
    seats: 40,
  },
  {
    id: 3,
    type: 1,
    seats: 20,
  }
])

export const getters = {
  getById: (state, getters, rootState, rootGetters) => (id, sessionId) => {
    const hall = JSON.parse(JSON.stringify(state.find((item, index) => {
      return item.id === id;
    })));

    if (!hall) return null;

    if (sessionId) {
      hall.places = [];
      const places = rootGetters["places/getBySessionId"](sessionId);
      places.forEach((place) => {
        if(place) hall.places.push(place.seat)
      })

      hall.seats = {
        max: hall.seats,
        left: hall.seats - places.length
      }

      hall.places.sort((a, b) => a - b)
    }

    return hall;
  },
}
