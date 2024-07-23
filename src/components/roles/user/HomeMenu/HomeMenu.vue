<template>
  <div class="absolute left-0 z-40 flex w-full py-5 bg-white top-20 px-28">
    <div
      class="basis-[18%] py-3 border-r flex flex-col text-sm text-customGray-800 overflow-hidden hover:overflow-auto"
    >
      <ul class="w-[95%] flex flex-col gap-1 h-full">
        <li
          v-for="(category, index) in categories"
          :key="index"
          class="p-1 rounded cursor-pointer hover:bg-customGray-700 m-w-full"
          :class="{ 'bg-customGray-700': selectedCategoryId == category.id }"
          @mouseover="showItems(category.subCategories, category.items2)"
   
        >
          <div class="flex items-center justify-between px-3 py-2">
            <p>{{ category.name }}</p>
            <i class="text-xs fa-solid fa-chevron-right"></i>
          </div>
        </li>
      </ul>
    </div>
    <div
      class="basis-[30%] py-3 border-r px-10 overflow-hidden hover:overflow-auto"
    >
      <div class="flex flex-wrap h-full">
        <div
          v-for="(item, index) in selectedItem"
          :key="index"
          class="basis-1/3"
        >
          <item
            :src="getImageUrl(item.src)"
            :header="item.name"
            :product="item"
          />
        </div>
      </div>
    </div>
    <div class="px-12 py-3 overflow-hidden basis-1/2 hover:overflow-auto">
      <div class="flex flex-wrap h-full">
        <div
          v-for="(item, index) in selectedItem2"
          :key="index"
          class="basis-1/5"
        >
          <item :src="src" :header="item.header" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import item from "./item.vue";
import src from "../../../../assets/img/sliderImg.png";
export default {
  watch: {
    selectedCategoryid(newVal, oldVal) {
      this.getCategoriesItems(newVal);
    },
  },
  mounted() {
    this.getCategoriesItems(this.selectedCategoryid);
    this.selectedCategoryId = this.selectedCategoryid;
  },
  computed: {},
  props: {
    categories: Array,
    selectedCategoryid: Number,
  },
  components: {
    item,
  },
  data() {
    return {
      src,
      categories: this.categories,
      selectedItem: this.categories.subCategories,
      selectedItem2: [],
    };
  },
  methods: {
    getCategoriesItems(id) {
      let category;
      category = this.categories.find((cat) => cat.id === id);
      this.showItems(category.subCategories, category.items2);
    },
    getImageUrl(imagePath) {
      var url =
        new URL("", import.meta.url).origin +
        "/assets/assets/dataImg/subCategories/" +
        imagePath;

      return url;
    },

    showItems(items, items2) {
      this.selectedItem = items;
      this.selectedItem2 = items2;
      // this.selectedCategoryId = null;
    },
  },
};
</script>

<style></style>
