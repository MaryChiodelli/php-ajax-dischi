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
        .get('./api/dischi.php', {
          params: {
            genre: this.selected
          }
        })
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