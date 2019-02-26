export default {
  name: 'app',
  components: {},
  computed: {
    isLogIn() {
      return this.$store.getters.IS_LOGIN
    }
  },
};


