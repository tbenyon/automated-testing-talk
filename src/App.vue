<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <product-list />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";
export default {
  name: "App",
  components: {
    ProductList
  },
};
</script>

<style lang="scss">
@import "styles/coreStyles";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
