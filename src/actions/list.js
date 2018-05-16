import { data } from '../data/index'

const reducer = {
  list: (state) => {
    const data = []
    for (let i = 0; i < state.data.length; i++) {
      if (i === state.quantity) {
        break
      }
      data.push(state.data[i])
    }

    return data
  },
}

export default {
  list(quantity) {
    const state = {
      quantity,
      data,
    }
    return reducer.list(state)
  },
}
