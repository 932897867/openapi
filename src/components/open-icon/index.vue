<template>
  <i class="fa" :class="`fa-${name}`" aria-hidden="true"></i>
</template>

<script>
// import './font-awesome-3.2.1/css/font-awesome.min.css'
import './font-awesome-4.7.0/css/font-awesome.min.css'
export default {
  name: 'open-icon',
  props: {
    name: {
      type: String,
      required: false,
      default: 'font-awesome'
    }
  }
}
</script>
