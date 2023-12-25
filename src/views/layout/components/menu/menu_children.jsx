import {  defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: false
    }
  },
  setup() {
    // const render = () => {
    //   return <div>jsx文件
    //     {tast.name}
    //   </div>
    // }
    // return render
    console.log(this.modelValue)
      return () =>  <div>jsx文件
        {/* { modelValue } */}
      </div>
  }
})