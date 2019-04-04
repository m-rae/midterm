import mapView from '../../shared/map-view/map-view.component.vue'

export default {
  name: 'listPage',
  components: {
    mapView
  },
  data() {
    return {
      addressList: null,
    }
  },
  mounted() {
    /*eslint-disable*/
    console.log('mounted...');
    
    this.$store.dispatch('GET_ADDRESS_LIST').then(addressList => {
      this.addressList = addressList;
      console.log(addressList);
    });
  }
};
