<template>
  <h2>Details</h2>
</template>
<script>
const axios = require("axios").default;

axios.defaults.headers.common["api_key"] =
  "813c2681-0d2c-475d-b296-fad6abcfcd39";

const baseURL = "https://api.thecatapi.com/v1";
export default {
  props: ["id"],

  async created() {
    try {
      const response = await axios.get(
        `${baseURL}/breeds`
      );
      console.log(response.data);
    //   const dt = filter(response.data => response.data.id=$route.params)
    } catch (err) {
      throw new Error("Unable to fetch data.");
    }
  },
};
</script>
<style scoped></style>
