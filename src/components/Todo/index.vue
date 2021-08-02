<template>
  <div class="todo-head flex justify-between items-center w-11/12">
    <span class="text-3xl">我的待辦事項</span>
    <ActionBar @addTodo="onShowAddTodo" />
  </div>
  <TodoList :list="todoList.list" @clickItem="onClickViewTodo" />
  <TodoPopup
    :item="todoPopup.editingTodo"
    :show="todoPopup.showingTodoPopup"
    @add="onAddNewTodo"
    @clear="onClearNewTodo"
    @close="onCloseAddTodo"
  />
</template>

<script>
import { reactive, computed } from 'vue'
import { useStore, } from 'vuex'

import ActionBar from './ActionBar.vue'
import TodoList from './TodoList.vue'
import TodoPopup from '@/components/Todo/TodoPopup'

export default {
  name: 'Todo',
  components: {
    ActionBar,
    TodoList,
    TodoPopup
  },
  setup() {
    const store = useStore()

    const todoList = reactive({
      list: []
    })
    const todoPopup = reactive({
      showingTodoPopup: false,
      editingTodo: {}
    })

    // --- todoList ---
    const setupTodoList = () => {

      todoList.list = computed(() => store.state.todoList)

      const onClickViewTodo = item => {
        todoPopup.editingTodo = item
        todoPopup.showingTodoPopup = true
      }

      return {
        todoList,
        onClickViewTodo
      }
    }
    // --- todoPopup ---
    const setupTodoPopup = () => {
      

      const onAddNewTodo = payload => {
        store.commit('ADD_TODO', payload)
        store.commit('CLEAR_NEW_TODO')
        todoPopup.showingTodoPopup = false
      }

      const onClearNewTodo = () => {
        store.commit('CLEAR_NEW_TODO')
        todoPopup.editingTodo = computed(() => store.state.newTodoItem).value
      }

      const onShowAddTodo = () => {
        todoPopup.editingTodo = computed(() => store.state.newTodoItem).value
        todoPopup.showingTodoPopup = true
      }
      const onCloseAddTodo = () => {
        todoPopup.showingTodoPopup = false
      }
      return {
        todoPopup,
        onAddNewTodo,
        onShowAddTodo,
        onClearNewTodo,
        onCloseAddTodo
      }
    }

    return {
      ...setupTodoList(),
      ...setupTodoPopup()
    }
  },
  methods: {
    
  }
}
</script>

<style lang="stylus" scoped>
.todo-head
  padding 6px 0px
</style>