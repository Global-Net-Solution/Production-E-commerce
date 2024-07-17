<template>
  <div class="flex h-[220px] items-center w-full">
    <div
      class="absolute left-5 z-[999999] bg-white ml-5 min-w-10 min-h-10 border border-1 text-customGray-400 rounded-full flex justify-center items-center shadow-md hover:text-primary-700"
      v-if="!categories?.length < 12 && this.pageNumber > 1 && from != 'all'"
      @click="prev"
    >
      <button
        class="bg-white w-10 h-10 border border-1 text-customGray-400 rounded-full flex justify-center items-center shadow-md"
      >
        <i class="fa-solid fa-angle-left"></i>
      </button>
    </div>
    <Push :appear="true" v-if="animationType === 'push'">
      <div
        class="flex items-center justify-start gap-10 overflow-x-hidden slider px-28 relative z-10 w-[95%]"
        :class="{ 'flex-wrap w-full': from == 'all' }"
      >
        <!-- {{ colors }} -->
        <Slide
          v-for="item in colors"
          :key="item.id"
          :Image="getImageUrl(item.src)"
          :name="item.name"
          :id="item.id"
          @click="GoToProducts"
        />
      </div>
    </Push>
    <div
      v-if="!categories?.length < 12 && from != 'all'"
      @click="next"
      class="absolute right-5 z-[999999]"
    >
      <button
        class="bg-white w-10 h-10 border border-1 text-customGray-400 rounded-full flex justify-center items-center shadow-md mr-5"
      >
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import colorData from "../../../../../data-model/colors.json";
import Slide from "./Slide/Slide.vue";
// import imageSlider from "../../../../../assets/dataImg/colors/";
import { Push } from "@progress/kendo-vue-animation";

export default {
  props: {
    from: String,
  },
  mounted() {
    console.log("color" + this.colors);
  },
  components: {
    Slide,
    Push: Push,
  },
  data() {
    return {
      categories: null,
      pageNumber: 1,
      animationType: "push",
      show: false,
      colors: colorData.colors,
    };
  },

  methods: {
    animate() {
      this.show = !this.show;
    },
    next() {
      this.pageNumber = this.pageNumber + 1;
      this.fetchCategories(this.pageNumber);
      this.show = false;
    },
    prev() {
      if (this.pageNumber > 1) {
        this.pageNumber = this.pageNumber - 1;
        this.fetchCategories(this.pageNumber);
        this.show = false;
      }
    },
    GoToProducts() {
      this.$router.push("/products");
    },
    getImageUrl(imagePath) {
      var url =
        new URL("", import.meta.url).origin +
        "/src/assets/dataImg/colors/" +
        imagePath;

      return url;
    },
  },
};
</script>

<style></style>
