<template>
  <div class="view-container">
    <div class="main-content">
      <div class="filter">
        <p>Filter:</p>
        <label for="selector">
          <select v-model="select" id="selector">
            <option value="all" selected>All</option>
            <option value="purchased">Purchased</option>
            <option value="unpurchased">Unpurchased</option>
            <option value="oneTimePurchases">One time purchases</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </label>
      </div>

      <div class="products-container">
        <product
          v-for="product in products"
          :key="product.id"
          :product="product"
        ></product>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/PricingCard";
const productItems = require("@/assets/products.json");

export default {
  name: "ProductList",
  components: { Product },
  computed: {
    products() {
      switch (this.selectedFilter) {
        case "all":
          return productItems;
        case "purchased":
          return productItems.filter(productItem => productItem.purchased);
        case "unpurchased":
          return productItems.filter(productItem => !productItem.purchased);
        case "oneTimePurchases":
          return productItems.filter(
            productItem => productItem.type === "onetime"
          );
        case "subscriptions":
          return productItems.filter(
            productItem => productItem.type === "recurring"
          );
        default:
          return productItems;
      }
    }
  },
  data() {
    return {
      select: "all",
      selectedFilter: "all"
    };
  },
  watch: {
    select: function(newVal) {
      this.selectedFilter = newVal;
    }
  }
};
</script>

<style lang="scss">
@import "../styles/variables";

.view-container {
  display: flex;
  justify-content: center;
  width: 100%;
  .main-content {
    max-width: $size-content-max-width;
    width: 100%;
  }
}

.filter {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-weight: bold;
    margin-right: 5px;
  }
}

.products-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: -5px;
  overflow: hidden;
}
</style>
