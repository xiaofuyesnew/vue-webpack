<template>
  <p>Hello, {{ name }}!</p>
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
      name: 'whatever'
    }
  },
  test: () => {
    console.log('NOOK')
  }
}
</script>
