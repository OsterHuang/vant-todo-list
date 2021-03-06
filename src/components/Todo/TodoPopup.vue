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
      <div class="title">
        <span v-if="!editingItem.id">新增待辦</span>
        <span v-else>編輯待辦</span>
      </div>
      <VantCellGroup>
        <VantField label="標題" v-model="editingItem.title" />
        <VantField
          v-model="editingItem.description"
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
            <VantRate v-model="editingItem.priority" />
          </template>
        </VantField>
          
        <VantField label="狀態">
          <template #input>
            <VantCheckbox v-model="editingItem.done">
              已完成
            </VantCheckbox>
          </template>
        </VantField>
        <VantField label="創建時間">
          <template #input> {{ editingItem.createTime }} </template>
        </VantField>
        <VantField label="更新時間">
          <template #input> {{ editingItem.updateTime }} </template>
        </VantField>
      </VantCellGroup>

      <div class="flex-grow" />

      <VantRow type="flex" justify="space-around" class="button-area">
        <VantCol span="7">
          <VantButton v-if="!item.id" type="primary" round class="w-full" @click="$emit('add', editingItem)">新增</VantButton>
          <VantButton v-else type="primary" round class="w-full" @click="$emit('update', editingItem)">修改</VantButton>
        </VantCol>
        <VantCol span="7">
          <VantButton v-if="!item.id" type="warning" round class="w-full" @click="$emit('clear')">清空</VantButton>
          <VantButton v-else type="danger" round class="w-full" @click="onConfirmToDelete">刪除</VantButton>
        </VantCol>
        <VantCol span="7">
          <VantButton type="primary" plain round class="w-full" @click="$emit('close')">取消</VantButton>
        </VantCol>
      </VantRow>
    </div>
  </VantPopup>


</template>

<script>
import { Checkbox, CellGroup, Rate, Row, Col, Button } from 'vant'
import { reactive, watch } from 'vue'
import { Popup, Field, Dialog } from 'vant'

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
  setup(props, context) {
    const editingItem = reactive({})

    watch(() => props.item, (newVal, oldVal) => {
      Object.assign(editingItem, newVal)
    })

    const onConfirmToDelete = () => {
      Dialog.confirm({
        message: '是否要刪除？',
      })
      .then(() => {
        context.emit('delete', editingItem)
        // on confirm
      })
      .catch(() => {
        // on cancel
      });
    }

    return {
      editingItem,
      onConfirmToDelete
    }
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