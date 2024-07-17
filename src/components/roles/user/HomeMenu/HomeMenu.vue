<template>
  <div class="absolute w-full top-20 bg-white z-40 left-0 flex px-28 py-5">
    <div
      class="basis-[18%] py-3 border-r flex flex-col text-sm text-customGray-800 overflow-hidden hover:overflow-auto"
    >
      <ul class="w-[95%] flex flex-col gap-1 h-full">
        <li
          v-for="(category, index) in categories"
          :key="index"
          class="cursor-pointer hover:bg-customGray-700 m-w-full p-1 rounded"
          :class="{ 'bg-customGray-700': selectedCategoryid == category.id }"
          @mouseover="showItems(category.subCategories, category.items2)"
        >
          <div class="flex justify-between items-center px-3 py-2">
            <p>{{ category.name }}</p>
            <i class="fa-solid fa-chevron-right text-xs"></i>
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
          <item :src="getImageUrl(item.src)" :header="item.name" />
        </div>
      </div>
    </div>
    <div class="basis-1/2 py-3 px-12 overflow-hidden hover:overflow-auto">
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
        "/src/assets/dataImg/subCategories/" +
        imagePath;

      return url;
    },

    showItems(items, items2) {
      this.selectedItem = items;
      this.selectedItem2 = items2;
    },
  },
};
</script>

<style></style>
