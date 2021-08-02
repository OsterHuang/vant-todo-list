<template>
  <VantCell value="..." is-link class="todo-cell" @click="$emit('viewItem', item)">
    <!-- 使用 title 插槽来自定义标题 -->
    <template #title>
      <VantCheckbox v-model="checked" style="width:fit-content" @click.stop="onTickStatus">
        <span class="custom-title">{{ item.title }}</span>
      </VantCheckbox>
    </template>
    <template #label>
      <span class="custom-label">{{ item.description }}</span>
    </template>
  </VantCell>
</template>

<script>
import { ref, watch } from 'vue'
import { Checkbox, Cell } from 'vant'

export default {
  components: {
    VantCell: Cell,
    VantCheckbox: Checkbox
  },
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, context) {
    const checked = ref(props.item.done)

    watch(() => props.item.done, newVal => { checked.value = newVal })

    const onTickStatus = () => {
      context.emit('tickStatus', { ...props.item, done: checked })
    }

    return {
      checked,
      onTickStatus
    }
  },
}
</script>

<style lang="stylus">
.todo-cell
  max-height 62px
  &.van-cell
    &.van-cell--clickable
      // border-top 1px solid #ccc
      // border-bottom 1px solid #ccc
      .van-cell__title
        flex 5
        .van-cell__label
          text-align left
          overflow-y: hidden;
          max-height: 20px;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 300px;

</style>