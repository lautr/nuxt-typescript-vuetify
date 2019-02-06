export const state = () => ({
  count: 15
})

export const mutations = {
  add (state: any, increment: Number) {
    state.count += increment
  }
}

export const getters = {
  getCount (state: any) {
    return state.count
  }
}

export const actions = {
  add (context: any, increment: Number) {
    context.commit('add', increment)
  }
}
