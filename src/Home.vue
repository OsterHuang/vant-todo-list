<template>
  <div class="home">
    <h1 class="text-5xl">This is home</h1>
    <VantDemo />
  </div>
</template>

<script>
import { ref, } from 'vue'
import { useStore } from 'vuex'

import VantDemo from '@/components/VantDemo'
import TodoItem from '@/const/TodoItem'

export default {
  components: {
    VantDemo
  },
  // created() {
  //   this.$store.commit('ADD_ITEM', new TodoItem())
  // },
  setup() {
    const store = useStore()
    store.commit('ADD_TODO', new TodoItem())

    const rateNo = ref(3)
    return { rateNo }
  },
}
</script>


<style lang="stylus" scoped>
.home
  padding 12px
</style>