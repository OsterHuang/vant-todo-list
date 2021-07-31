<template>
  <div class="home">
    <h1 class="text-5xl">This is home</h1>
    <VantDemo />
  </div>
</template>

<script>
import { ref } from 'vue'
import VantDemo from '@/components/vantDemo'

export default {
  components: {
    VantDemo
  },
  setup() {
    const rateNo = ref(3)
    return { rateNo }
  },
}
</script>


<style lang="stylus" scoped>
.home
  padding 12px
</style>