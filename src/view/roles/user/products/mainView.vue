<template>
  <div class="px-28 flex justify-between">
    <div class="basis-[18%]">
      <div class="w-full flex justify-between items-center">
        <h2>Filter</h2>
        <p class="text-xs cursor-pointer text-red-500">Clear All Filter</p>
      </div>
      <div class="w-full flex justify-between items-center relative my-8">
        <!-- <img
          :src="searchIcon"
          alt=""
          class="w-6 h-6 absolute top-3 left-[10px] z-10"
        /> -->
        <KInput
          :style="{ width: '100%' }"
          :size="'small'"
          :class="'custom-input'"
          :placeholder="'Search Categories...'"
          :rounded="'large'"
        ></KInput>
      </div>
      <div class="w-full">
        <h1>Category</h1>
        <ul class="my-5">
          <li class="flex items-center justify-between text-sm mb-3">
            <checkbox
              :default-checked="false"
              :label="'Automotive & Motorcycle'"
            />
            <div><i class="fa-solid fa-plus"></i></div>
          </li>
          <li class="flex items-center justify-between text-sm mb-3">
            <checkbox :default-checked="false" :label="'Baby'" />
            <div><i class="fa-solid fa-plus"></i></div>
          </li>
          <li class="flex items-center justify-between text-sm mb-3">
            <checkbox
              :default-checked="false"
              :label="'Baby Clothing & Accessories'"
            />
            <div><i class="fa-solid fa-plus"></i></div>
          </li>
          <li class="flex items-center justify-between text-sm mb-3">
            <checkbox :default-checked="false" :label="'Camera & Photo'" />
            <div><i class="fa-solid fa-plus"></i></div>
          </li>
          <li class="flex items-center justify-between text-sm mb-3">
            <checkbox
              :default-checked="false"
              :label="'Cell Phones & Accessories'"
            />
            <div><i class="fa-solid fa-plus"></i></div>
          </li>
          <li class="flex items-center justify-between text-sm mb-3">
            <checkbox :default-checked="false" :label="'Boys’ Fashion'" />
            <div><i class="fa-solid fa-plus"></i></div>
          </li>
          <li class="flex items-center justify-between text-sm mb-3">
            <checkbox
              :default-checked="false"
              :label="'Collectibles & Fine Art'"
            />
            <div><i class="fa-solid fa-plus"></i></div>
          </li>
        </ul>
        <p class="text-xs">
          Show More <i class="fa-solid fa-chevron-down"></i>
        </p>
      </div>
      <div class="w-full">
        <h2 class="my-5">Price Range (USD)</h2>
        <slider
          calss="w-full"
          :step="1"
          :default-value="{ start: 1, end: 10 }"
          :min="1"
          :max="10"
        >
          <slider-label :position="1">ُ$10</slider-label>

          <slider-label :position="10">$200</slider-label>
        </slider>
      </div>
      <div class="w-full my-8">
        <h2 class="text-lg mb-3">Color</h2>
        <ul>
          <li class="text-sm mb-2">Red</li>
          <li class="text-sm mb-2">Black</li>
          <li class="text-sm mb-2">yellow</li>
        </ul>
      </div>
      <div class="w-full my-8">
        <h2 class="text-lg mb-3">Size</h2>
        <ul>
          <li class="text-sm mb-2">XS</li>
          <li class="text-sm mb-2">S</li>
          <li class="text-sm mb-2">M</li>
          <li class="text-sm mb-2">L</li>
        </ul>
      </div>
      <div class="w-full my-8">
        <h2 class="text-lg mb-3">Discount</h2>
        <ul>
          <li class="text-sm mb-2">10% Off or More</li>
          <li class="text-sm mb-2">25% Off or More</li>
          <li class="text-sm mb-2">50% Off or More</li>
          <li class="text-sm mb-2">Off or More</li>
        </ul>
      </div>
      <!-- <div class="w-full my-8">
        <h2 class="text-lg mb-3">Ratings</h2>
        <ul>
          <li class="text-sm mb-2">4 Stars or More</li>
          <li class="text-sm mb-2">3 Stars or More</li>
          <li class="text-sm mb-2">2 Stars or More</li>
          <li class="text-sm mb-2">1 Star or More</li>
          <li class="text-sm mb-2">0 Star or More</li>
        </ul>
      </div> -->
    </div>
    <div class="basis-[80%]">
      <div class="w-full h-16 border-b px-2 flex">
        <div class="basis-[50%] overflow-hidden">
          <ul class="flex gap-3">
            <li
              class="w-fit px-2 py-1 bg-customGray-100 rounded-md hover:bg-customGray-200 cursor-pointer"
            >
              Headphones
            </li>
            <li
              class="w-fit px-2 py-1 bg-customGray-100 rounded-md hover:bg-customGray-200 cursor-pointer"
            >
              Mobiles
            </li>
            <li
              class="w-fit px-2 py-1 bg-customGray-100 rounded-md hover:bg-customGray-200 cursor-pointer"
            >
              Cell Phones
            </li>
          </ul>
        </div>
        <div class="basis-[50%] overflow-hidden flex gap-5 contryInfo">
          <div class="flex w-[50%] gap-2 items-center">
            <p class="text-xs text-customGray-400 w-[30%]">Sort by:</p>
            <base-combobox
              :data="countries"
              v-model="country"
              class="bg-white h-10 bg-boxShadow-custom !w-[100%]"
              :placeholder="'Relevance'"
            />
          </div>
          <div class="flex w-[50%] gap-1 items-center">
            <p class="text-xs text-customGray-400 w-[55%]">Shipping to:</p>
            <base-combobox
              :data="countries"
              v-model="country"
              class="bg-white h-10 bg-boxShadow-custom !w-[100%]"
              :placeholder="'USA'"
            />
          </div>
        </div>
      </div>
      <div class="w-full px-2 py-5">
        <p class="text-xs text-customGray-400">234,567 results</p>
      </div>
      <div class="flex min-h-[220px] items-center w-full gap-8 px-10 flex-wrap">
        <card class="basis-[22%]" @click="GoToProduct" />
        <card class="basis-[22%]" @click="GoToProduct" />
        <card class="basis-[22%]" @click="GoToProduct" />
        <card class="basis-[22%]" @click="GoToProduct" />
        <card class="basis-[22%]" @click="GoToProduct" />
        <card class="basis-[22%]" @click="GoToProduct" />
        <card class="basis-[22%]" @click="GoToProduct" />
        <card class="basis-[22%]" @click="GoToProduct" />
        <card class="basis-[22%]" @click="GoToProduct" />
        <card class="basis-[22%]" @click="GoToProduct" />
        <card class="basis-[22%]" @click="GoToProduct" />
        <card class="basis-[22%]" @click="GoToProduct" />
      </div>
      <div class="w-full px-2 py-5 contryInfo">
        <pager
          :skip="skip"
          :take="take"
          :total="total"
          :button-count="buttonCount"
          :info="info"
          :type="type"
          :page-sizes="pageSizes ? pageSizeDefs : undefined"
          :previous-next="previousNext"
          @pagechange="handlePageChange"
        >
        </pager>
      </div>
    </div>
  </div>
</template>

<script>
import searchIcon from "../../../../assets/icons/h-search.svg";
import card from "../../../../components/roles/user/home/productCard/mainView.vue";
import { Pager } from "@progress/kendo-vue-data-tools";
export default {
  data() {
    return {
      searchIcon,
      skip: 0,
      take: 5,
      buttonCount: 5,
      type: "numeric",
      info: true,
      pageSizes: [10, 15, 20],
      previousNext: true,
      total: 200,
      pageSizeDefs: [5, 10, 20],
      width: 768,
    };
  },
  components: {
    card,
    Pager,
  },
};
</script>

<style>
.k-checkbox:checked {
  border-color: #339ddb !important;
  background-color: #339ddb !important;
}
.k-slider .k-draghandle {
  border-color: #339ddb !important;
  background-color: #339ddb !important;
}
.k-slider-horizontal .k-slider-track-wrap .k-slider-selection {
  border-color: #339ddb !important;
  background-color: #339ddb !important;
}
.k-pager {
  border: none !important;
  justify-content: space-between;
}
.k-pager-md .k-pager-numbers-wrap .k-button {
  color: #000;
}
.k-pager-numbers .k-selected {
  background: #339ddb !important ;
  color: #fff !important;
  border-radius: 50%;
}

.k-pager-sizes.k-label {
  order: 12 !important;
}
.k-pager-info {
  order: -1 !important;
  flex: 0 !important;
}
</style>
