<script setup>
import { ref, reactive } from 'vue'
defineProps({
  title: Object,
  likes: Number
})

</script>

<template>
  <div>hello {{ title.name }}</div>
</template>

<style lang='scss' scoped>

</style>