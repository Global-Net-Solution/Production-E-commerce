<template>
  <div class="flex flex-col gap-3">
    <p>
      Lorem ipsum dolor sit amet consectetur. Pellentesque tellus volutpat vitae
      elit.
    </p>
    <div class="flex gap-3 items-center">
      <p class="text-customGray-400 text-sm">SKU:</p>
      <p class="text-customGray-400 text-sm">sz2312293660779979</p>
      <div>
        <i class="fa-regular fa-copy text-primary-500"></i>
      </div>
      <!-- <rating
        :star="star"
        :disabled="true"
        :maxstars="maxStars"
        starsize="md"
      /> -->
    </div>
    <div>
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
    <div>
      <ul class="flex flex-col gap-3">
        <li class="flex items-center gap-3">
          <p class="text-customGray-400 text-sm">Condition:</p>
          <p class="text-sm font-semibold">New</p>
        </li>
        <li class="flex flex-col gap-3">
          <div class="flex gap-3">
            <p class="text-customGray-400 text-sm">Color:</p>
            <p class="text-sm font-semibold">Red</p>
          </div>
          <ul class="flex gap-2 flex-wrap w-full">
            <li
              v-for="color in colors"
              :key="color.id"
              :title="color.name"
              @click="colorsSelected(color)"
              class="rounded-full p-1 relative border !border-transparent hover:!border-[#000]"
              :class="{
                '!border-[#000] checkColor': colorsSelectedList.some(
                  (ele) => ele.id === color.id
                ),
              }"
            >
              <p
                class="w-5 h-5 rounded-full p-2"
                :style="{ backgroundColor: color.code }"
              ></p>
            </li>
          </ul>
          <!-- <ul class="flex gap-3">
            <li>
              <p class="w-6 h-6 bg-red-950 rounded-full p-2"></p>
            </li>
            <li>
              <p class="w-6 h-6 bg-[#AC5067] rounded-full p-2"></p>
            </li>
            <li>
              <p class="w-6 h-6 bg-[#EB84B0] rounded-full p-2"></p>
            </li>
          </ul> -->
        </li>
        <li>
          <div class="contryInfo flex items-center gap-6">
            <p class="text-customGray-400 text-sm">Model:</p>
            <p class="text-sm font-semibold">Lorem Lorem</p>
          </div>
        </li>
        <li>
          <div class="contryInfo flex items-center gap-3">
            <p class="text-customGray-400 text-sm">Material:</p>
            <p class="text-sm font-semibold">Satin</p>
            <!-- <base-combobox
              :data="countries"
              v-model="country"
              class="bg-white h-10 bg-boxShadow-custom !w-[90%]"
              :placeholder="'Material'"
            /> -->
          </div>
        </li>
        <!-- <li>
          <div class="contryInfo flex items-center gap-3 qty">
            <p class="text-customGray-400 text-sm">Quantity:</p>
            <NumericTextBox
              :style="{ width: '60px' }"
              :icon-name="'gear'"
              :value="computedValue"
              @change="ChangeMiles"
            >
            </NumericTextBox>
            <span class="text-customGray-400 text-sm">35 available</span>
          </div>
        </li> -->
        <li class="flex gap-3 items-center">
          <p class="text-customGray-400 text-sm">Size:</p>
          <ul class="flex">
            <li class="w-10 h-10 flex justify-center items-center">
              <p class="border px-2 py-1 text-xs rounded-md">XS</p>
            </li>
            <li class="w-10 h-10 flex justify-center items-center">
              <p class="border px-2 py-1 text-xs rounded-md">S</p>
            </li>
            <li class="w-10 h-10 flex justify-center items-center">
              <p class="border px-2 py-1 text-xs rounded-md">M</p>
            </li>
            <li class="w-10 h-10 flex justify-center items-center">
              <p class="border px-2 py-1 text-xs rounded-md">L</p>
            </li>
            <li class="w-10 h-10 flex justify-center items-center">
              <p class="border px-2 py-1 text-xs rounded-md">XL</p>
            </li>
            <li class="w-10 h-10 flex justify-center items-center">
              <p class="border px-2 py-1 text-xs rounded-md">2XL</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import colors from "../../../../../data-model/colors.json";
export default {
  data() {
    return {
      colors: colors.colors,
      colorsSelectedList: [],
    };
  },
  methods: {
    colorsSelected(color) {
      const exists = this.colorsSelectedList?.some(
        (colorselected) => colorselected.id == color.id
      );
      if (!exists) {
        this.colorsSelectedList.push(color);
      } else {
        this.colorsSelectedList = this.colorsSelectedList.filter(
          (colorselected) => colorselected.id !== color.id
        );
      }
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
