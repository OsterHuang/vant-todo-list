<template>
  <VantCell value="..." is-link>
    <!-- 使用 title 插槽来自定义标题 -->
    <template #title>
      <VantCheckbox v-model="checked">
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
    
  },
}
</script>

<style lang="stylus">
.van-cell
  // border-top 1px solid #ccc
  // border-bottom 1px solid #ccc
  .van-cell__title
    .van-cell__label
      text-align left 
</style>