<template>
  <TodoItem v-for="(item) in list " :key="item.id" :item="item" @viewItem="onViewItem" @tickStatus="onTickStatus" />
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
  emits: ['viewItem', 'tickStatus'],
  setup(props, context) {
    const onViewItem = item => { context.emit('viewItem', item) } 
    const onTickStatus = item => { context.emit('tickStatus', item) }
    return {
      onViewItem,
      onTickStatus
    }
  }
}
</script>


