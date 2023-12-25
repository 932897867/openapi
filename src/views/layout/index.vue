<template>
  <div>
    <child :title="title" :setTitle="setTitle" />
    <router-view></router-view>
  </div>
</template>

<script>
import { ref } from 'vue'
// 如果你用的是.jsx或.tsx，则引入时，扩展名不要写
import child from './child'
export default {
  components: { child },
  setup() {
    let title = ref('测试')
    // const setTitle = titleStr => (title.value = titleStr)
    const setTitle = function (titleStr) {
      return (title.value = titleStr)
    } 
    console.log(setTitle(112323))
    return { title, setTitle }
  }
}
</script>

<style lang="scss" scoped>
</style>
