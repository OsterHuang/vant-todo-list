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
    UPDATE_TODO (state, payload) {
      const foundIdx = state.todoList.findIndex(item => item.id === payload.id)
      if (foundIdx) state.todoList[foundIdx] = { ...payload, updateTime: new Date() }
    },
    DELETE_TODO (state, payload) {
      const foundIdx = state.todoList.findIndex(item => item.id === payload.id)
      state.todoList.splice(foundIdx, 1)
    },
    CLEAR_NEW_TODO (state) {
      state.newTodoItem = new TodoItem(
        undefined, `輸入要做的事 ${state.seq}`, `請輸入您要做的事的詳細內容 ${state.seq}`
      )
    },
  },
  actions: {
    CreateSampleList ({ commit }) {
      createSampleList().forEach(item => { commit('ADD_TODO', item) })
    }
  }
})
