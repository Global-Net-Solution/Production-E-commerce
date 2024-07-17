<template>
  <div>
    <p class="text-xs">
      <i class="fa-solid fa-check"></i>
      <span class="text-validationColors-sucess">Added to cart</span>
    </p>
    <div class="w-full px-2 py-3 flex h-fit gap-2 mb-5 border-b">
      <div class="w-[18%] h-16">
        <img
          :src="product"
          alt=""
          class="w-full h-full object-cover rounded-sm"
        />
      </div>
      <div class="w-[82%]">
        <div>
          <p class="text-sm font-semibold">
            Product Name dolor sit amet consectetur. Eget sollicitudin.
          </p>
        </div>
        <div class="py-2">
          <div class="flex items-center gap-2">
            <p class="line-through text-customGray-400 text-sm">$999.00</p>
            <div>
              <p class="text-base">$899.00</p>
            </div>
            <p
              class="bg-customRed-500 text-white rounded-md px-1 py-[2px] font-thin text-xs"
            >
              12%
            </p>
          </div>
        </div>
        <div class="py-2">
          <ul>
            <li class="text-xs font-light text-customGray-400">Q-ty: 2</li>
            <li class="text-xs font-light text-customGray-400">
              Black, Satin, XS
            </li>
          </ul>
        </div>
        <div>
          <p class="text-sm font-light">
            Cart summary (2 items): <span class="font-medium">US $220</span>
          </p>
        </div>
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

<style lang="scss" scoped></style>
