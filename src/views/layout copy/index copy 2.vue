<script setup>
import { ref, reactive } from 'vue'
import { useCounterStore } from "../../stores/counter"
import { officeStore } from "../../stores/office"
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from "vue";
import yqCom  from "./components/menu/menu";
import {
  getTest,
  postText
} from "../../axios/index";

// getTest()
//   .then((response) => {
//     console.log("结果", response);
//   })
//   .catch((error) => {
//     console.log(error)
//     console.log("获取失败！");
//   });

let params = {
  custName: '123'
};
// postText(params)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error)
//     console.log("获取失败！");
//   });

const router = useRouter()
const route = useRoute()


const isCollapse = ref(false)
const handleClickToggle = () => {
  console.log('ddd')
  isCollapse.value = !isCollapse.value
}

const store = useCounterStore()


const officeStoreInst = officeStore()
officeStoreInst.counter = 3

// const handleClickButton1 = () => {
//   officeStoreInst.increment()
//   router.push({
//     name: 'about1'
//   })
// }

// const handleClickButton2 = () => {
//   officeStoreInst.increment()
//   router.push({
//     name: 'about2'
//   })
// }

// const handleClickButton3 = () => {
//   officeStoreInst.increment()
//   router.push({
//     path: '/'
//   })
// }
const envParam = import.meta.env


const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}


</script>

<template>
  <div class="layout-box">
    <div class="top">
      top
    </div>

    <div class="middle">
      <div class="left">
        <div class="menu-toggle">
          <div class="bar-box">
            <open-icon name="reorder" @click="handleClickToggle"></open-icon>
          </div>
          <div></div>

        </div>
        <div class="menu-item">
          <el-menu default-active="1" class="menu-box" :collapse="isCollapse" @open="handleOpen"
            @close="handleClose">
            <el-sub-menu index="1">
              <template #title>
                <el-icon>
                  <location />
                </el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group>
                <template #title><span>Group One</span></template>
                <el-menu-item index="1-1"><open-icon name="map-marker"></open-icon><span>item one</span></el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title><span>item four</span></template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon>
                <Menu />
              </el-icon>
              <template #title>Navigator Two</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon>
                <document />
              </el-icon>
              <template #title>Navigator Three</template>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <setting />
              </el-icon>
              <template #title>Navigator Four</template>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="menu-parent">
          parent
        </div>
      </div>
      <div class="right">
        <div class="operation">
          operation
        </div>
        <div class="content">
          <div class="content-inner">
            {{ officeStoreInst.counter }} /
            {{ officeStoreInst.doubleCount }} /
            {{ officeStoreInst.doublePlusOne }} /
            {{ officeStoreInst.getUserById(0) }}
            <RouterView></RouterView>
            {{ envParam }}
            <br>a
            <yqCom></yqCom>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>

.layout-box {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  .top {
    height: 48px;
    background-color: #001433;
    flex-grow: 0;
    flex-shrink: 0;
    color: #fff;
  }
  .middle {
    background-color: #F8F7F6;
    // height: 100%;
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
    flex-direction: row;
    .left {
      // width: 200px;
      max-width: 200px;
      overflow: hidden;
      background-color: #EFEFEF;
      display: flex;
      flex-direction: column;
      // flex-grow: 0;
      // flex-shrink: 0;
      .menu-toggle {
        height: 42px;
        flex-grow: 0;
        flex-shrink: 0;
        float: left;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .bar-box {
          height: 32px;
          width: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 5px;
          &:hover {
            background: #fff;
            user-select: none;
            cursor: pointer;
          }
          i {
            font-size: 20px;

          }

        }

      }
      .menu-item {
        background-color: #fff;
        flex-grow: 1;
        flex-shrink: 1;
        max-width: 200px;
        overflow-x: auto;
        overflow-y: auto;
        // overflow-y: hidden;
        .menu-box {
          // height: 100%;
          
        }
      }

      .menu-parent {
        display:  flex;
        height: 48px;
        background-color: green;
        flex-grow: 0;
        flex-shrink: 0;
      }
    }

    .right {
      background-color: lightblue;
      flex-grow: 1;
      flex-shrink: 1;
      display: flex;
      flex-direction: column;
      .operation {
        height: 42px;
        width: 100%;
        background-color: lightcyan;
        flex-grow: 0;
        flex-shrink: 0;
      }

      .content {
        background-color: lightgoldenrodyellow;
        flex-grow: 1;
        flex-shrink: 1;
        display: flex;
        justify-content: center;
        .content-inner {
          width: 90%;
          background-color: #fff;
          // display: flex;
          // flex-grow: 0;
          // flex-shrink: 0;
          // justify-content: center;
          // align-items: flex-start;
        }
      }
    }
  }
}

</style>