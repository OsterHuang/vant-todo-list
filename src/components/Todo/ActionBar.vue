<template>
  <VantButton type="primary" plain size="small" round @click="onAddTodo">
    <VantIcon name="add-o" size="20" />
  </VantButton>
</template>

<script>
import { Button, Icon } from 'vant'

export default {
  components: {
    VantIcon: Icon,
    VantButton: Button
  },
  emits: ['addTodo'],
  setup(props, { emit }) {
    const onAddTodo = () => {
      emit('addTodo')
    }
    return {onAddTodo}
  },
}
</script>