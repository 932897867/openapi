<script setup>

// 外部引入jsx文件

import Data from './child.jsx'
console.log(Data)
import { ref } from 'vue'

    //     setup() {

            const count = ref(100);

            const getjsx = ()=>{

                count.value += 1

            }

            // return () => (

            //     <div>

            //         <el-button onClick={getjsx}>加一</el-button>

            //         <div>{count.value}</div>

            //        // 使用jsx文件

            //         <Data></Data>

            //     </div>
            // )
            
    // };

</script>


<template>
  <div>
    <div>
      <el-button @click="getjsx">加一</el-button>
      <div>{{count}}</div>
      // 使用jsx文件
      <Data></Data>
    </div>
  </div>
</template>

<style lang='scss' scoped>

</style>
