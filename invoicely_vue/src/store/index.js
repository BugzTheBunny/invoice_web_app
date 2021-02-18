import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      username: ''
    },
    isAuthenticated: false,
    token: ''
  },
  mutations: {
    initializeStore(state) { // initializaing when we open the app for the first time
      if (localStorage.getItem('token')) { // using browser to store information
        state.token = localStorage.getItem('token') // so we dont have to get it every time from the storage
        state.isAuthenticated=true // if we get a token, we are authenticated
      }else{ // if no token found, we are not authenticated
        state.token = ''
        state.isAuthenticated = false
      }
    },
    setToken(state, token){ // Setting token after we login
      state.token=token
      state.isAuthenticated=true
    },
    removeToken(state){ // for logging out?
      state.token=''
      state.isAuthenticated = false
    }
  },
  actions: {
  },
  modules: {
  }
})
