<template>
  <the-header></the-header>
  <the-cats></the-cats>
</template>

<script>
import TheCats from './components/TheCats.vue';
import TheHeader from "./components/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    TheCats,
  },
};
</script>

<style></style>
