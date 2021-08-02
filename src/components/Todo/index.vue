<template>
  <div class="todo-head flex justify-between items-center w-11/12">
    <span class="text-3xl">我的待辦事項</span>
    <ActionBar @addTodo="onShowAddTodo" />
  </div>
  <TodoList :list="list" />
  <TodoPopup :item="todoPopup.editingTodo" :show="todoPopup.showingAddTodo" @close="onCloseAddTodo" />
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
  props: {
    list: {
      type: Array,
      default: () => ([])
    }
  },
  emits: ['addTodo'],
  setup() {
    const store = useStore()

    const todoPopup = reactive({
      showingAddTodo: true,
      editingTodo: {}
    })
    
    const setupTodoPopup = () => {
      console.log('setupTodoPopup')

      const onShowAddTodo = () => {
        todoPopup.editingTodo = { ...computed(() => store.state.newTodoItem).value }
        todoPopup.showingAddTodo = true
      }
      const onCloseAddTodo = () => {
        todoPopup.showingAddTodo = false
      }
      return {
        todoPopup,
        onShowAddTodo,
        onCloseAddTodo
      }
    }

    return {
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