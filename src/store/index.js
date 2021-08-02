import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

import TodoItem from '@/const/TodoItem'
import createSampleList from '@/const/SampleList'

// Create a new store instance.
export default createStore({
  plugins: [createPersistedState()],
  state () {
    return {
      seq: 1,
      todoList: [],
      newTodoItem: new TodoItem()
    }
  },
  mutations: {
    ADD_TODO (state, payload) {
      state.todoList.push({...payload, id: state.seq })
      state.seq = state.seq + 1
    },
    CLEAR_NEW_TODO (state) {
      state.newTodoItem = new TodoItem()
    },
  },
  actions: {
    CreateSampleList ({ commit }) {
      console.log('CreateSampleList')
      createSampleList().forEach(item => { commit('ADD_TODO', item) })
    }
  }
})
