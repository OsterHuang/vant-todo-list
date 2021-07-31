<template>
  <div class="flex flex-col items-center">
    <VantIcon name="star-o" />
    <VantIcon name="cart-circle-o" />
    <VantRate v-model="rateNo" />
  </div>
</template>

<script>
import { Icon, Rate } from 'vant'

export default {
  components: {
    VantIcon: Icon,
    VantRate: Rate
  },
  setup() {
    
  },
}
</script>