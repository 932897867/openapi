import tt from './tt.vue'
export default {
  data() {
    return {
      title1: {
        name: 'yq'
      }
    }
  },
  setup() {
    return () => <tt title="title1" />;
  },
};