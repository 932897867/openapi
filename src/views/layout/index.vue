<script setup>
import { ref, reactive } from 'vue'
let count = ref(0)
const handleClickToggle = () => {
  console.log(count.value++)
  console.log(count)
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
            <open-icon name="bars" @click="handleClickToggle"></open-icon>
          </div>
          <div></div>
        </div>
        <div class="menu-item">
          menu-item
        </div>
        <div class="menu-parent">
          menu-parent
        </div>
      </div>
      <div class="right">
        <div class="operation">
          operation
        </div>

        <div class="content">
          content
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
  }
  .middle {
    background-color: #F8F7F6;
    // height: 100%;
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
    flex-direction: row;
    .left {
      width: 200px;
      background-color: #EFEFEF;
      display: flex;
      flex-direction: column;
      flex-grow: 0;
      flex-shrink: 0;
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
      }
    }
  }
}

</style>