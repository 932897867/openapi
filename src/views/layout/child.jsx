// const Child = props => {
  //   return (
  //     <div>
  //       <h3>jsx -- {props.title}</h3>
  //       <button onClick={() => props.setTitle(Date.now() + '')}>jsx</button>
  //     </div>
  //   )
  // }
  
  // 解构写法

  import menu from './components/menu/demo-playground'

  import {ref} from vue

  console.log(menu)
  
  const Child = ({ title, setTitle }) => {
    const clickFun = function () {
      return setTitle(Date.now() + '')
    }

    const activeIndex2 = ref(1)

    return (
      <div>
        <h3>jsx -- {title}</h3>
        <button onClick={clickFun}>jsx</button>
        {/* <button onClick={() => changeTitle(setTitle)}>jsx</button> */}
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
        >
          <el-menu-item index="1">Processing Center</el-menu-item>
          <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="3" disabled>Info</el-menu-item>
          <el-menu-item index="4">Orders</el-menu-item>
        </el-menu>
      </div>
    )
  }


  
  export default Child
  