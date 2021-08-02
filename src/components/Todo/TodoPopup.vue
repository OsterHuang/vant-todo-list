<template>
  <VantPopup
    :show="show"
    :close-on-click-overlay="false"
    :lazy-render="false"
    :style="{ height: '80%', width: '90%' }"
    class="flex flex-col items-center"
    overlay
    transition-appear
    closeable
    round
    @close="$emit('close')"
  >
    <div class="wrapper flex flex-col">
      <div class="title">內容是啥？</div>
      <VantCellGroup>
        <VantField label="標題" value="title" />
        <VantField
          v-model="editingItem.title"
          rows="4"
          autosize
          label="詳情"
          type="textarea"
          maxlength="100"
          placeholder="请输入留言"
          show-word-limit
        />
        <VantField label="優先度">
          <template #input>
            <VantRate v-model="rate" />
          </template>
        </VantField>
          
        <VantField label="狀態">
          <template #input>
            <VantCheckbox v-model="checked">
              已完成
            </VantCheckbox>
          </template>
        </VantField>
        <VantField label="創建時間">
          <template #input> 2021-04-05 12:12 </template>
        </VantField>
        <VantField label="更新時間" value="2021-04-13" />
      </VantCellGroup>

      <div class="flex-grow" />

      <VantRow type="flex" justify="space-around" class="button-area">
        <VantCol span="7">
          <VantButton type="primary" round class="w-full">新增</VantButton>
        </VantCol>
        <VantCol span="7">
          <VantButton type="warning" round class="w-full">清空</VantButton>
        </VantCol>
        <VantCol span="7">
          <VantButton type="primary" plain round class="w-full">取消</VantButton>
        </VantCol>
      </VantRow>
    </div>
  </VantPopup>
</template>

<script>
import { Checkbox, CellGroup, Rate, Row, Col, Button } from 'vant'
import { toRefs } from 'vue'
import { Popup, Field } from 'vant'

export default {
  components: {
    VantCellGroup: CellGroup,
    VantCheckbox: Checkbox,
    VantRate: Rate,
    VantPopup: Popup,
    VantField: Field,
    VantRow: Row,
    VantCol: Col,
    VantButton: Button
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const editingItem = toRefs(props.item)
    return { editingItem }
  },
}
</script>

<style lang="stylus" scoped>
.wrapper
  width 100%
  max-width 600px
  min-width 340px
  height 100%

.title
  font-size 24px
  padding 12px
.label-done
  color var(--van-field-label-color)
.button-area
  padding 12px 6px
</style>