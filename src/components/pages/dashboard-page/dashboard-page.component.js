import mapView from '../../shared/map-view/map-view.component.vue'

export default {
  name: 'dashboardPage',
  components: {
    mapView
  },
  data() {
    return {
      addressList: null,
    }
  },
  mounted() {
    this.$store.dispatch('GET_ADDRESS_LIST').then(addressList => {
      this.addressList = addressList;
    });
    this.activeLink = this.$route.path;
  },
  watch: {
    $route(newVal) {
      this.activeLink = newVal.path;
    }
  },
  methods: {
    showForm() {
      this.$refs.formAddress.toggleForm(true);
    }
  }
};
