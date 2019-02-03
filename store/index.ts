import Vuex from 'vuex'

import Car from './modules/Car';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      Car
    }
  })
}

export default createStore
