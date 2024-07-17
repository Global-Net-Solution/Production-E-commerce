<template>
  <div class="w-full flex items-center justify-between mb-10">
    <div class="flex gap-10">
      <div class="flex gap-5">
        <div>
          <img
            :src="product"
            alt="product"
            class="w-20 h-20 rounded-lg object-cover"
          />
        </div>
        <div>
          <p>Black Printed T-shirt</p>
          <p>Color : Pink</p>
          <p>Qty : 1</p>
          <p>$100</p>
        </div>
      </div>
      <div class="flex gap-5">
        <div>
          <img
            :src="product"
            alt="product"
            class="w-20 h-20 rounded-lg object-cover"
          />
        </div>
        <div>
          <p>Black Printed T-shirt</p>
          <p>Color : Pink</p>
          <p>Qty : 1</p>
          <p>$100</p>
        </div>
      </div>
      <div class="flex gap-5">
        <div>
          <img
            :src="product"
            alt="product"
            class="w-20 h-20 rounded-lg object-cover"
          />
        </div>
        <div>
          <p>Black Printed T-shirt</p>
          <p>Color : Pink</p>
          <p>Qty : 1</p>
          <p>$100</p>
        </div>
      </div>
    </div>
    <div class="flex gap-5">
      <base-button
        :size="'large'"
        class="!bg-white !border !border-primary-500 !rounded-md !text-primary-500 !px-10"
        @click="$router.push('/order')"
      >
        View Details</base-button
      >
    </div>
  </div>
</template>

<script>
import product from "../../../../../assets/img/productImg2.jpeg";
export default {
  data() {
    return {
      product,
    };
  },
};
</script>

<style lang="scss" scoped></style>
