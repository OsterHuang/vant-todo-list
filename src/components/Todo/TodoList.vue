<template>
  <TodoItem v-for="(item) in list " :key="item.id" :item="item" />
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  components: {
    TodoItem
  },
  props: {
    list: {
      type: Array,
      default: () => ([])
    }
  },
  setup() {
    
  }
}
</script>


