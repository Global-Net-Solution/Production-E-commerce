<template>
  <div class="flex gap-3 h-full w-full">
    <div class="overflow-hidden">
      <base-button
        :size="'small'"
        class="!bg-white !border !border-primary-500 !rounded-lg w-full mb-3"
        v-show="false"
        ><i class="fa-solid fa-chevron-down"></i
      ></base-button>
      <ul class="flex flex-col gap-2">
        <li class="w-20 h-1/4">
          <img
            :src="productImg"
            alt="product-Img"
            class="w-full h-full object-cover"
          />
        </li>
        <li class="w-20 h-1/4">
          <img
            :src="productImg"
            alt="product-Img"
            class="w-full h-full object-cover"
          />
        </li>
        <li class="w-20 h-1/4">
          <img
            :src="productImg"
            alt="product-Img"
            class="w-full h-full object-cover"
          />
        </li>
        <li class="w-20 h-1/4">
          <img
            :src="productImg"
            alt="product-Img"
            class="w-full h-full object-cover"
          />
        </li>
      </ul>
      <base-button
        :size="'small'"
        class="!bg-white !border !border-primary-500 !rounded-lg w-full mt-3"
        ><i class="fa-solid fa-chevron-down"></i
      ></base-button>
    </div>
    <div class="w-full h-full">
      <img
        :src="productImg"
        alt="product-Img"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script>
import productImg from "../../../../../assets/img/productImg2.jpeg";
export default {
  data() {
    return {
      productImg,
    };
  },
};
</script>

<style lang="scss" scoped></style>
