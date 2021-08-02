<template>
  <div class="home flex flex-col items-center">
    <Todo :list="todoList" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import 'vant/lib/popup/style';

import Todo from '@/components/Todo'


export default {
  components: {
    Todo,
  },
  setup() {
    const store = useStore()

    const todoList = computed(() => store.state.todoList)
    if (todoList.value.length === 0) store.dispatch('CreateSampleList')

    return {
      todoList,
    }
  },
}
</script>

<style lang="stylus" scoped>
.home
  width 100%
  height 100%
  min-width 375px
  max-width 600px
  padding 12px
</style>
