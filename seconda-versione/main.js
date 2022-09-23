const app = new Vue({
  el: '#app',
  data: {
    dischi: []
  },
  methods: {
    fetchDischi() {
      axios
        .get('http://localhost:8888/boolean/php-ajax-dischi/api/dischi.php')
        .then((res) => {
          const { response } = res.data;
          this.dischi = response;
        });
    }
  },
  created() {
    this.fetchDischi();
  }
});