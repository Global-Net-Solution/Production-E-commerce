<template>
  <div class="w-full flex justify-between">
    <div>
      <img
        :src="product"
        alt="product"
        class="w-44 h-44 rounded-lg object-cover"
      />
    </div>
    <div class="flex flex-col gap-3 justify-between">
      <div>
        <p class="text-xs text-customGray-500">Order #12345678-123456</p>
        <p class="text-primary-500">luna</p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Commodo quis facilisis id
          ullamcorper aliquet sed porttitor proin morbi. Aliquam cum vel.
        </p>
        <p class="text-xs text-customGray-500">Share your Experience</p>
      </div>
      <slot />
    </div>
    <div>
      <base-button
        :size="'large'"
        class="!bg-white !border-0 !rounded-md !text-primary-500 !px-10"
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
