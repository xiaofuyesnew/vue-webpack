<template>
  <div class="box">
    <p>{{ greeting }}</p>
    <Index/>
  </div>
  
</template>

<style>
  .box {
    border: 1px solid #333;
  }
</style>

<script>
import Index from './components/Index.vue'

export default {
  data () {
    return {
      greeting: 'Hello'
    }
  },
  components: {
    Index
  }
}
</script>

