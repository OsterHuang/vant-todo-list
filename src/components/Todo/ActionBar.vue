<template>
  <VantButton type="primary" plain size="small" round @click="onAddTodo">
    <VantIcon name="add-o" size="20" />
  </VantButton>
  <VantButton type="primary" plain size="small" round @click="onChangeGroup">
    <VantIcon v-if="group === 'done'" name="descending" size="20" />
    <VantIcon v-else name="wap-nav" size="20" />
  </VantButton>
</template>

<script>
import { Button, Icon } from 'vant'

export default {
  components: {
    VantIcon: Icon,
    VantButton: Button
  },
  emits: ['addTodo', 'changeGroup'],
  props: {
    group: {
      type: String,
      default: 'done',
      validator: val => ['done', 'none'].includes(val)
    }
  },
  setup(props, { emit }) {
    const onAddTodo = () => {
      emit('addTodo')
    }
    const onChangeGroup = () => {
      emit('changeGroup', props.group === 'done' ? 'none' : 'done')
    }
    return {
      onAddTodo,
      onChangeGroup
    }
  },
}
</script>