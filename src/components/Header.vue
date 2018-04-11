<template>
  <header @click="getData"></header>
</template>

<style scoped>
  header {
    position: fixed;
    left: 0;
    top: 0;
    height: 60px;
    width: 100%;
    background-color: #007acc;
  }
</style>

<script>
import axios from 'axios'

export default {
  data () {
    return {
    }
  },
  methods: {
    getData: () => {
      axios.get('http://localhost:3000/api/products')
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>
