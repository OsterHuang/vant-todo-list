import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

import TodoItem from '@/const/TodoItem'

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
      state.todoList.push(payload)
    },
    CLEAR_NEW_TODO (state) {
      state.newTodoItem = new TodoItem()
    }
  }
})
