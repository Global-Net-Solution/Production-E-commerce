<template>
  <div class="flex h-[220px] items-center w-full">
    <div
      class="absolute top-[40%] left-7 z-[999999] bg-white ml-5 min-w-10 min-h-10 border border-1 text-customGray-400 rounded-full flex justify-center items-center shadow-md hover:text-primary-700"
      v-if="!categories?.length < 12 && this.pageNumber > 1 && from != 'all'"
      @click="prev"
    >
      <button
        class="flex items-center justify-center w-10 h-10 bg-white border rounded-full shadow-md border-1 text-customGray-400"
      >
        <i class="fa-solid fa-angle-left"></i>
      </button>
    </div>
    <Push :appear="show" v-if="animationType === 'push'">
      <div
        class="relative z-10 flex items-center justify-start w-full gap-10 overflow-x-hidden md:w-[600px] md:overflow-x-scroll sm:w-[300px] sm:overflow-x-scroll slider px-28"
        :class="{ 'flex-wrap w-full': from == 'all' }"
      >
        <!-- {{ colors.length }} -->
        <Slide
          v-for="item in paginatedColors"
          :key="item.id"
          :Image="getImageUrl(item.src)"
          :name="item.name"
          :id="item.id"
          @click="GoToProducts(item)"
        />
      </div>
    </Push>
    <div
      v-if="!categories?.length < 12 && from != 'all' && pageNumber < pageCount"
      @click="next"
      class="absolute right-3 z-[999999] top-[40%]"
    >
      <button
        class="flex items-center justify-center w-10 h-10 mr-5 bg-white border rounded-full shadow-md border-1 text-customGray-400"
      >
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import colorData from "../../../../../data-model/colors.json";
import Slide from "./Slide/Slide.vue";
import { Push } from "@progress/kendo-vue-animation";
import { p1 } from "../../../../../images.js";
export default {
  props: {
    from: String,
  },
  mounted() {
    // console.log("color" + this.colors);
  },
  components: {
    Slide,
    Push: Push,
  },
  data() {
    return {
      p1,
      categories: null,
      pageNumber: 1,
      animationType: "push",
      show: true,
      colors: colorData.colors,
      pageSize: 8,
    };
  },

  methods: {
    animate() {
      this.show = !this.show;
    },
    next() {
      if (this.pageNumber < this.pageCount) {
        this.pageNumber = this.pageNumber + 1;
        this.show = false;
        setTimeout(() => {
          this.show = true;
        }, 200);
      }
    },
    prev() {
      if (this.pageNumber > 1) {
        this.pageNumber = this.pageNumber - 1;
        this.show = false;
        setTimeout(() => {
          this.show = true;
        }, 200);
      }
    },
    GoToProducts(item) {
      this.$store.dispatch("setfilterByColor", item);
      this.$router.push("/products");
    },
    getImageUrl(imagePath) {
      var url =
        new URL("", import.meta.url).origin +
        "/assets/assets/dataImg/colors/" +
        imagePath;
      console.log(url);
      // var url = "../../../../../../src/assets/dataImg/colors/" + imagePath;
      return url;
    },
  },
  computed: {
    paginatedColors() {
      const start = (this.pageNumber - 1) * this.pageSize;
      const end = Math.min(start + this.pageSize, this.colors.length);
      return this.colors?.slice(start, end);
    },

    pageCount() {
      return Math.ceil(this.colors.length / this.pageSize);
    },
  },
};
</script>

<style></style>
