<template>
  <section class="container-flex">
    <the-cat-item
      v-for="cat in cats"
      :name="cat.name"
      :img="cat.image"
      :description="cat.desc"
      :temperament="cat.temperament"
      :key="cat.id"
    ></the-cat-item>
  </section>
</template>
<script>
const axios = require("axios").default;
axios.defaults.headers.common["api_key"] =
  "813c2681-0d2c-475d-b296-fad6abcfcd39";
const url = "https://api.thecatapi.com/v1";
import TheCatItem from "./TheCatItem.vue";
export default {
  components: {
    TheCatItem,
  },
  data() {
    return {
      cats: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get(`${url}/breeds`);
        this.cats = response.data
          .filter((res) => res.image)
          .map((res) => {
            return {
              id: res.id,
              desc: res.description,
              image: res.image,
              temperament: res.temperament,
              name: res.name,
            };
          });
        console.log(this.cats.length);
      } catch (err) {
        // throw new Error("Unable to fetch data.");
        console.log(err);
      }
    },
  },
};
</script>
<style scoped>
.container-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: baseline;
}
</style>
