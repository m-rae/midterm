export default {
  name: 'dashboardPage',
  data() {
    return {
      activeLink: null
    };
  },
  mounted() {
    this.activeLink = this.$route.path;
  },
  watch: {
    $route(newVal) {
      this.activeLink = newVal.path;
    }
  }
};
