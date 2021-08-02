<template>
  <div class="todo-head flex justify-between items-center w-11/12">
    <span class="text-3xl">我的待辦事項</span>
    <ActionBar @addTodo="onShowAddTodo" />
  </div>
  <TodoList :list="list" />
  <TodoPopup :item="editingTodo" :show="showingAddTodo" @close="onCloseAddTodo" />
</template>

<script>
import { ref, reactive, computed } from 'vue'
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
    const data = reactive({ editingTodo: {} })

    const setupTodoPopup = () => {
      console.log('setupTodoPopup')

      const showingAddTodo = ref(true)
      const onShowAddTodo = () => {
        data.editingTodo = computed(() => store.state.newTodoItem)
        showingAddTodo.value = true
      }
      const onCloseAddTodo = () => {
        showingAddTodo.value = false
      }
      return {
        showingAddTodo,
        onShowAddTodo,
        onCloseAddTodo
      }
    }

    return {
      ...setupTodoPopup(),
      editingTodo: data.editingTodo
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