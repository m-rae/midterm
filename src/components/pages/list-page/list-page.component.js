import mapView from '../../shared/map-view/map-view.component.vue'
import formAddAddress from './form-add-address/form-add-address.component.vue'

export default {
  name: 'listPage',
  components: {
    mapView,
    formAddAddress
  },
  data() {
    return {
      addressList: null,
    }
  },
  mounted() {
    this.$store.dispatch("GET_ADDRESS_LIST").then(addressList => {
      this.addressList = addressList;
    });
  },
  methods: {
    showForm() {
      this.$refs.formAddress.toggleForm(true);
    }
  }
};
