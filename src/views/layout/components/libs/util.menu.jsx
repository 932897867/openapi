import { defineComponent } from "vue"

/**
 * @description 创建菜单
 * @param {Function} h createElement
 * @param {Object} menu 菜单项
 */
export function elMenuItem (menu) {
  console.log("elMenuItem")
  let icon = null
  console.log(menu)
  if (menu.icon) icon = <i class={ `fa fa-${menu.icon}` }/>
  else if (menu.iconSvg) icon = <d2-icon-svg name={ menu.iconSvg }/>
  else icon = <i class="fa fa-file-o"/>
  return <el-menu-item
    key={ menu.path }
    index={ menu.path }>
    { icon }
    <span slot="title">{ menu.title || '未命名菜单' }</span>
  </el-menu-item>
}

/**
 * @description 创建子菜单
 * @param {Function} h createElement
 * @param {Object} menu 菜单项
 */
export function elSubmenu (menu) {
  console.log("elSubmenu")
  let icon = null
  console.log(menu)
  if (menu.icon) icon = <i slot="title" class={ `fa fa-${menu.icon}` }/>
  else if (menu.iconSvg) icon = <d2-icon-svg slot="title" name={ menu.iconSvg }/>
  else icon = <i slot="title" class="fa fa-folder-o"/>
  return <el-submenu
    key={ menu.path }
    index={ menu.path }>
    { icon }
    <span slot="title">{ menu.title || '未命名菜单' }</span>
    { menu.children.map(child => createMenu.call(child)) }
  </el-submenu>
}

/**
 * @description 在组件中调用此方法渲染菜单项目
 * @param {Function} h createElement
 * @param {Object} menu 菜单项
 */
// export function createMenu (h, menu) {
//   if (menu.children === undefined) return elMenuItem.call(this, h, menu)
//   return elSubmenu.call(this, h, menu)
// }

export function createMenu(h) {
    return () => { <div>child</div>
      {subMenu(h)}
  }
}

export function subMenu(h){
  return <div>child123</div>
}