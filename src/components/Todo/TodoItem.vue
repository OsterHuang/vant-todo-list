<template>
  <VantCell value="..." is-link class="todo-cell" @click="onClickViewTodo">
    <!-- 使用 title 插槽来自定义标题 -->
    <template #title>
      <VantCheckbox v-model="checked" style="width:fit-content">
        <span class="custom-title">{{ item.title }}</span>
      </VantCheckbox>
    </template>
    <template #label>
      <span class="custom-label">{{ item.description }}</span>
    </template>
  </VantCell>
</template>

<script>
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
  data() {
    return {
      checked: this.item.done
    }
  },
  setup() {
    const onClickViewTodo = () => {
      console.log('Click還會傳下去嗎？')
    }
    return {
      onClickViewTodo
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