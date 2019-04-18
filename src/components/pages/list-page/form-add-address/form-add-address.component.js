export default {
  name: "formAddAddress",
  data () {
    return {
      showForm: false,
      place: null,
      formData: {},
      rules: {},
      isFormValidated: false
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("ADD_ADDRESS", this.formData).then(address => {
        this.toggleForm(false);
      });
    },
    toggleForm(showForm) {
        this.showForm = showForm;
    },
    setPlace(place) {
      /*eslint-disable */
      console.log(place);
      const { address_components, geometry } = place;
      const address = this.buildAddressData(address_components, geometry);
      console.log(address);

      if (address) {
        this.place = address;
        this.formData.street = `${address.streetNumber} ${address.streetName}`;
        this.formData.city = address.city;
        this.formData.province = address.province;
        this.formData.postalCode = address.postalCode;
        this.formData.lat = address.lat;
        this.formData.lng = address.lng;
      }
    },
    buildAddressData(components, geometry) {
      const address = {};
      address.lat = geometry.location.lat().toString();
      address.lng = geometry.location.lng().toString();

      components.forEach(component => {
        if (component.type[0] === "street_number") {
          address.streetNumber = component.short_name;
        }

        if (component.type[0] === "route") {
          address.streetName = component.short_name;
        }

        if (component.type[0] === "locality") {
          address.city = component.short_name;
        }

        if (component.type[0] === "administrative_area_level_1") {
          address.province = component.short_name;
        }

        if (component.type[0] === "postal_code") {
          address.postalCode = component.short_name;
        }
      });

      return address
    }
  }
};
