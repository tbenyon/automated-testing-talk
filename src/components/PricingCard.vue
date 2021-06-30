<template>
  <div
    class="product-outer-container"
    :class="product.discount ? 'discounted' : ''"
  >
    <div class="product-aspect-ratio-container">
      <div class="product">
        <div class="product-inner-container">
          <div class="corner-ribbon">
            ???
          </div>
          <img class="key-photo" :src="product.image" :alt="product.title" />
          <div class="details-container">
            <h4 class="text focus-text">{{ product.title }}</h4>

            <div class="text focus-text price">
              <span>{{ price }}</span>
            </div>
            <p class="text">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pricingStringBuilder from "@/utilities/pricingStringBuilder";
export default {
  name: "Product",
  props: {
    product: Object
  },
  computed: {
    price() {
      return pricingStringBuilder(this.product)
    }
  },
};
</script>

<style lang="scss">
@import "../styles/variables";
.product-outer-container {
  width: percentage(1/4);

  @media screen and (max-width: $breakpoint-desktop) {
    width: percentage(1/3);
  }

  @media screen and (max-width: $breakpoint-tablet) {
    width: percentage(1/2);
  }

  @media screen and (max-width: $breakpoint-mobile) {
    width: 100%;
  }

  .product-aspect-ratio-container {
    padding: 5px;

    .product {
      padding: 0 0 percentage(3/4) 0;
      position: relative;

      .product-inner-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $transparent-dark;
        border: 2px solid $color-dark;
        display: flex;
        align-items: flex-end;
        border-radius: 10px;
        overflow: hidden;

        img.key-photo {
          width: 100%;
        }

        .details-container {
          position: absolute;
          padding: 5px;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 70px;
          background-color: $transparent-dark;

          .text {
            color: $color-light;
            margin: 0;
            font-size: 12px;

            &.focus-text {
              font-weight: bold;
              font-size: 14px;
              margin-bottom: 5px;
            }
          }
        }
      }
    }
  }

  &.discounted {
    .base-price {
      text-decoration: line-through;
    }
  }
}

.corner-ribbon {
  $bannerSize: 150px;
  width: $bannerSize;
  background: blue;
  position: absolute;
  top: $bannerSize / 8;
  left: -$bannerSize / 4;
  text-align: center;
  line-height: $bannerSize / 4;
  letter-spacing: 1px;
  color: lightblue;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
</style>
