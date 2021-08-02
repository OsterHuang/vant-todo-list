<template>
  <TodoItem
    v-for="(item) in displayList "
    :key="item.id"
    :item="item"
    @viewItem="onViewItem"
    @tickStatus="onTickStatus"
  />
</template>

<script>
import { computed } from 'vue'
import TodoItem from './TodoItem.vue'

export default {
  components: {
    TodoItem
  },
  props: {
    list: {
      type: Array,
      default: () => ([])
    },
    group: {
      type: String,
      default: 'done',
      validator: val => ['done', 'none'].includes(val)
    }
  },
  emits: ['viewItem', 'tickStatus'],
  setup(props, context) {
    const displayList = computed(() => {
      if (props.group === 'none') return props.list
      return [...props.list].sort((a, b) => a.done - b.done)
    })

    const onViewItem = item => { context.emit('viewItem', item) } 
    const onTickStatus = item => { context.emit('tickStatus', item) }
    return {
      displayList,
      onViewItem,
      onTickStatus
    }
  }
}
</script>


