
// import { defineComponent, h } from "vue"
// // export const Foo = defineComponent()
// import menuMixin from '../mixin/menu'
import { createMenu } from '../libs/util.menu'
import menus from './demo-playground'

// export default defineComponent({ 
//   render() { 
//     return <div class="d2-layout-header-aside-menu-side">
//         asdasd
//   </div>
//   }
// })
// export default defineComponent({ 
//   render() { 
//     return h('div', { style: { color: 'red' } }, 'asdsad')
//   }
// })

// import { defineComponent, onMounted, ref } from 'vue';

// console.log(menus)


// const yq =  defineComponent({
//   // props: ['xx'],
//   setup(props,{ emit }) {
//     onMounted(() => {
//     })
//     return () => (
//       <div>aaasaasaddfaa</div>
      
//     )
//   }
// })

// export {
//   yq
// }


const Child = ({ title, setTitle }) => {
  return (
    <div>
      <h3>jsx -- {title}</h3>
      <button onClick={() => setTitle(Date.now() + '')}>jsx</button>
      {createMenu(menus)}
    </div>
  )
}

export default Child