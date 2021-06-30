<template>
  <div class="card">
    <img :src="img.url" :alt="name" />
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
    <span>{{ temperament }}</span>
  </div>
</template>
<script>
export default {
  props: ["name", "img", "description", "temperament"],
};
</script>
<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 20rem;
  max-height: 600px;
}
img {
  height: 150px;
}
span {
  color: cornflowerblue;
  font-weight: bolder;
}
</style>
