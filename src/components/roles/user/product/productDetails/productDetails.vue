<template>
  <div class="flex flex-col gap-3">
    <p>
      {{ product?.name }}
    </p>
    <div class="flex items-center gap-3">
      <p class="text-sm text-customGray-400">SKU:</p>
      <p class="text-sm text-customGray-400">{{ product?.skus }}</p>
      <div>
        <i class="fa-regular fa-copy text-primary-500"></i>
      </div>
    </div>
    <div>
      <div class="flex items-center gap-2">
        <p class="text-sm line-through text-customGray-400">
          ${{ product?.price }}
        </p>
        <div>
          <p class="text-base">
            ${{ product?.price - product?.price * (product?.discount / 100) }}
          </p>
        </div>
        <p
          class="bg-customRed-500 text-white rounded-md px-1 py-[2px] font-thin text-xs"
        >
          {{ product?.discount }}%
        </p>
      </div>
    </div>
    <div>
      <ul class="flex flex-col gap-3">
        <li class="flex items-center gap-3">
          <p class="text-sm text-customGray-400">Condition:</p>
          <p class="text-sm font-semibold">New</p>
        </li>
        <li class="flex flex-col gap-3">
          <div class="flex gap-3">
            <p class="text-sm text-customGray-400">Color:</p>
            <p class="text-sm font-semibold">{{ colorsSelectedObj?.name }}</p>
          </div>
          <ul class="flex flex-wrap w-full gap-2">
            <li
              v-for="color in listColors"
              :key="color.id"
              :title="color.name"
              @click="colorsSelected(color)"
              class="rounded-full p-1 relative border !border-transparent hover:!border-[#000]"
              :class="{
                '!border-[#000] checkColor': colorsSelectedObj?.id == color?.id,
              }"
            >
              <p
                class="w-5 h-5 p-2 rounded-full"
                :style="{ backgroundColor: color.code }"
              ></p>
            </li>
          </ul>
        </li>
        <li>
          <div class="flex items-center gap-6 contryInfo">
            <p class="text-sm text-customGray-400">Model:</p>
            <p class="text-sm font-semibold">{{ product?.model }}</p>
          </div>
        </li>
        <!-- <li>
          <div class="flex items-center gap-3 contryInfo">
            <p class="text-sm text-customGray-400">Material:</p>
            <p class="text-sm font-semibold">Satin</p>
          </div>
        </li> -->
        <li class="flex items-center gap-3">
          <p class="text-sm text-customGray-400">Size:</p>
          <ul class="flex flex-wrap items-center w-full gap-1 mt-2">
            <li
              class="w-10 px-2 py-1 mb-2 text-sm text-center duration-100 border rounded cursor-pointer hover:bg-gray-100 hover:text-black"
              v-for="size in sizesProduct"
              :key="size.id"
              @click="sizesSelected(size)"
              :class="{
                'bg-black text-white hover:text-white hover:bg-black':
                  sizeSelectedObj?.id == size?.id,
              }"
            >
              {{ size.name }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import allColors from "../../../../../data-model/colors.json";
import allSizes from "../../../../../data-model/sizes.json";
export default {
  props: {
    colors: Object,
    product: Object,
  },
  data() {
    return {
      allColors,
      allSizes,
      colorsSelectedObj: null,
      sizeSelectedObj: null,
      sizesProduct: null,
    };
  },
  mounted() {
  
   
    if(this.$store.getters.getfilterByColor!=null){
      this.colorsSelectedObj = this.allColors.colors.filter((color) =>
      this.colors.some((productColor) => productColor.color === color.id)
    )[this.colors.findIndex(item => item.color === this.$store.getters.getfilterByColor.id)];
    }else{
      this.colorsSelectedObj = this.allColors.colors.filter((color) =>
      this.colors.some((productColor) => productColor.color === color.id)
    )[0];
    }
    this.sizesProduct = this.allSizes.size.filter((size) =>
      this.product.sizes.some((productSize) => productSize === size.id)
    );
  },
  methods: {
    colorsSelected(color) {
      this.colorsSelectedObj = color;
      this.$emit("colorSelected", color);
    },
    sizesSelected(size) {
      this.sizeSelectedObj = size;
    },
  },
  computed: {
    listColors() {
      return this.allColors.colors.filter((color) =>
        this.colors.some((productColor) => productColor.color === color.id)
      );
    },
  },
};
</script>

<style>
.k-input-md {
  padding: 0 !important;
}
.checkColor::after {
  content: "✓";
  position: absolute;
  top: 3.5px;
  left: 3px;
  font-size: 10px;
  background-color: #eeeeee78;
  width: 22px;
  height: 21px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
