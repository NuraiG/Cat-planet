<template>
  <section class="container-flex">
    <the-loader v-if="isLoading"></the-loader>
    <router-link :to="gotoLink" v-else>
      <the-cat-item
        v-for="cat in cats"
        :name="cat.name"
        :img="cat.image"
        :description="cat.desc"
        :temperament="cat.temperament"
        :key="cat.id"
        :id="cat.id"
        @click="getCat"
      ></the-cat-item>
    </router-link>
  </section>
</template>
<script>
import TheLoader from "./TheLoader.vue";
import TheCatItem from "./TheCatItem.vue";

const axios = require("axios").default;

axios.defaults.headers.common["api_key"] =
  "813c2681-0d2c-475d-b296-fad6abcfcd39";

const baseURL = "https://api.thecatapi.com/v1";

export default {
  components: {
    TheCatItem,
    TheLoader,
  },
  data() {
    return {
      cats: [],
      isLoading: false,
      selectedId: "selectedId",
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      this.isLoading = true;
      try {
        const response = await axios.get(`${baseURL}/breeds`);
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
        this.isLoading = false;
      } catch (err) {
        this.isLoading = false;
        throw new Error("Unable to fetch data.");
      }
    },
    getCat(ev) {
      this.selectedId = ev.currentTarget.id;
    },
  },
  computed: {
    gotoLink() {
      if (this.selectedId == "selectedId") return "/";
      return `/${this.selectedId}`;
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
a {
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: baseline;
}
</style>
