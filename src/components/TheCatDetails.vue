<template>
  <section>
    <the-loader class="container-flex" v-if="isLoading"></the-loader>

    <div v-if="!isLoading && currentCat.length != 0">
      <h3>{{ currentCat[0].name }}</h3>
      <span>From: {{ currentCat[0].from }}</span>
      <img :src="currentCat[0].imageUrl" :alt="currentCat[0].name" />
      <p>{{ currentCat[0].description }}</p>
      <h4>Temperament:</h4>
      <span>{{ currentCat[0].temperament }}</span>
      <h4>How long {{ currentCat[0].name }} lives?</h4>
      <span> {{ currentCat[0].life }} ages </span>
      <h4>Other characteristics</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          Adaptability
          <span class="badge bg-info rounded-pill">{{
            currentCat[0].adaptability
          }}</span>
          /
          <span class="badge bg-success rounded-pill"> 5</span>
        </li>
        <li class="list-group-item">
          Intelligence
          <span class="badge bg-info rounded-pill">
            {{ currentCat[0].intelligence }}
          </span>
          / <span class="badge bg-success rounded-pill"> 5</span>
        </li>
        <li class="list-group-item">
          Affection level
          <span class="badge bg-info rounded-pill">{{
            currentCat[0].affection_level
          }}</span>
          / <span class="badge bg-success rounded-pill"> 5 </span>
        </li>
        <li class="list-group-item">
          Energy
          <span class="badge bg-info rounded-pill"
            >{{ currentCat[0].energy_level }}
          </span>
          / <span class="badge bg-success rounded-pill"> 5 </span>
        </li>
        <li class="list-group-item">
          Child friendly
          <span class="badge bg-info rounded-pill">
            {{ currentCat[0].child_friendly }}
          </span>
          / <span class="badge bg-success rounded-pill"> 5 </span>
        </li>
        <li class="list-group-item">
          Dog friendly
          <span class="badge bg-info rounded-pill"
            >{{ currentCat[0].dog_friendly }}
          </span>
          / <span class="badge bg-success rounded-pill"> 5 </span>
        </li>
        <li class="list-group-item">
          Stranger friendly
          <span class="badge bg-info rounded-pill"
            >{{ currentCat[0].stranger_friendly }}
          </span>
          / <span class="badge bg-success rounded-pill"> 5 </span>
        </li>
      </ul>
    </div>
    <not-found v-if="!isLoading && currentCat.length === 0"></not-found>
  </section>
</template>
<script>
import NotFound from "../pages/NotFound.vue";
import TheLoader from "./TheLoader.vue";
const axios = require("axios").default;

axios.defaults.headers.common["api_key"] =
  "813c2681-0d2c-475d-b296-fad6abcfcd39";

const baseURL = "https://api.thecatapi.com/v1";
export default {
  components: { TheLoader, NotFound },
  props: ["id"],
  data() {
    return {
      currentCat: {},
      isLoading: true,
    };
  },

  async created() {
    try {
      const response = await axios.get(`${baseURL}/breeds`);
      const dt = response.data.filter(
        (item) => item.id === this.$route.params.id
      );
      this.isLoading = false;
      this.currentCat = dt.map((item) => {
        return {
          name: item.name,
          from: item.origin,
          imageUrl: item.image.url,
          life: item.life_span,
          temperament: item.temperament,
          description: item.description,
          adaptability: item.adaptability,
          intelligence: item.intelligence,
          affection_level: item.affection_level,
          energy_level: item.energy_level,
          child_friendly: item.child_friendly,
          dog_friendly: item.dog_friendly,
          stranger_friendly: item.stranger_friendly,
        };
      });
    } catch (err) {
      this.isLoading = false;
      throw new Error("Unable to fetch data.");
    }
  },
};
</script>
<style scoped>
.container-flex {
  display: flex;
  justify-content: center;
}
</style>
