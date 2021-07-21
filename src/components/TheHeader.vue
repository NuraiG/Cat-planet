<template>
  <div class="container-flex">
    <router-link to="/cats">The Cats</router-link>
    <span
      >“A happy arrangement: many people prefer cats to other people, and many
      cats prefer people to other cats.” – Mason Cooley</span
    >
  </div>
</template>
<style scoped>
.container-flex {
  background-color: cornflowerblue;
  display: flex;
  justify-content: space-between;
  height: 100px;
}
a,
span {
  color: rgb(223, 240, 237);
  font-family: monospace;
  padding: 3px;
  margin: auto 10px;
}
a{
  text-decoration: none;
  font-size: 34px;
}
</style>
