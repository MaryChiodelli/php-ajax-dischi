const app = new Vue({
  el: '#app',
  data: {
    dischi: [],
    selected: ''
  },
  computed: {
    genres() {
      const genreList = [];
      this.dischi.forEach((disco) => {
        const { genre } = disco;
        if (!genreList.includes(genre)) {
          genreList.push(genre);
        }
      });
      return genreList;
    }
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