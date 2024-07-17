<template>
  <div class="w-full border rounded-md px-2 py-3 flex h-fit gap-2 mb-5">
    <div class="w-[18%] h-16">
      <img
        :src="product"
        alt=""
        class="w-full h-full object-cover rounded-sm"
      />
    </div>
    <div class="w-[82%]">
      <div class="flex justify-between items-center">
        <p class="text-sm text-customGray-500 font-light">Out for Delivery</p>
        <p class="text-xs">
          <i class="fa-solid fa-clock mr-2"></i>
          <span class="text-customGray-400">31 minutes ago</span>
        </p>
      </div>
      <div>
        <p class="text-sm my-2">
          Product Name dolor sit amet consectetur. Eget sollicitudin.
        </p>
      </div>
      <div>
        <p class="text-sm">Order #323457897</p>
      </div>
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

<style></style>
