import { mapState } from 'vuex'
import menuMixin from '../mixin/menu'
import { createMenu } from '../libs/util.menu'
import {h} from 'vue';

export default {
  name: 'layout-aside-menu',
  mixins: [
    menuMixin
  ],
  setup() {
    // 返回一个函数
    return () => h( <div class="d2-layout-header-aside-menu-side">
    <d2-scrollbar>
      <el-menu
        collapse={ this.asideCollapse }
        collapseTransition={ this.asideTransition }
        uniqueOpened={ true }
        defaultActive={ this.$route.fullPath }
        ref="menu"
        onSelect={ this.handleMenuSelect }>
        { this.aside.map(menu => createMenu.call(this, h, menu)) }
      </el-menu>
      {
        this.aside.length === 0 && !this.asideCollapse
          ? <div class="d2-layout-header-aside-menu-empty" flex="dir:top main:center cross:center">
            <d2-icon name="inbox"/>
            <span>没有侧栏菜单</span>
          </div>
          : null
      }
    </d2-scrollbar>
  </div>) 
  },

  // render (h) {

  // },
  computed: {
    ...mapState('d2admin/menu', [
      'aside',
      'asideCollapse',
      'asideTransition'
    ])
  }
}
