<template>
  <div class="w-full px-2 py-5 flex h-[180px] gap-5 mb-5 border-b">
    <div class="w-[20%] h-full">
      <img
        :src="product"
        alt=""
        class="w-full h-full object-cover rounded-sm"
      />
    </div>
    <div class="w-[80%] h-full flex flex-col justify-between">
      <div class="flex justify-between">
        <p class="text-sm font-semibold">
          Product Name dolor sit amet consectetur. Eget sollicitudin.
        </p>
        <div class="flex items-center gap-2">
          <p class="line-through text-customGray-400 text-sm">$999.00</p>
          <div>
            <p class="text-base">$899.00</p>
          </div>
        </div>
      </div>
      <div class="py-2 flex justify-between">
        <div class="text-sm">
          <ul>
            <li>
              <span class="text-customGray-400">Condition: </span
              ><span>New</span>
            </li>
          </ul>
        </div>
        <div class="flex flex-col justify-end items-end text-xs">
          <p>
            <span class="text-customGray-400">Delivery: </span
            ><span>US $8.00</span>
          </p>
          <p class="text-validationColors-sucess">Est delivery 22Jan - 29Jan</p>
        </div>
      </div>
      <slot/>
    </div>
  </div>
</template>

<script>
import product from "../../../../../assets/img/productImg2.jpeg";
export default {
  data() {
    return {
      product,
      counter: 1,
    };
  },
};
</script>

<style lang="scss" scoped></style>
