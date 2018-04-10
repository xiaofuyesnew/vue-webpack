<template>
  <p v-on:click="test">{{ name }}</p>
</template>

<style scoped>
p {
  color: #999;
  font-size: 40px;
}
</style>

<script>
export default {
  data () {
    return {
      name: 'allen'
    }
  },
  methods: {
    test: () => {
      let that = this
      console.log('test ok !')
      console.log(this)
    }
  }
}
</script>
