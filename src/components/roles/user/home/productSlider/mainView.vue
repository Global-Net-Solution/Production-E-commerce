<template>
  <div class="flex w-full items-center">
    <div
      class="bg-white w-10 h-10 border border-1 text-customGray-400 rounded-full flex justify-center items-center shadow-md hover:text-primary-700"
      @click="prev"
    >
      <button
        class="bg-white w-10 h-10 border border-1 text-customGray-400 rounded-full flex justify-center items-center shadow-md"
      >
        <i class="fa-solid fa-angle-left"></i>
      </button>
    </div>
    <div
      class="flex min-h-[220px] items-center w-[95%] justify-between px-10 flex-wrap"
    >
      <card class="basis-[19%]" />
      <card class="basis-[19%]" />
      <card class="basis-[19%]" />
      <card class="basis-[19%]" />
      <card class="basis-[19%]" />
    </div>
    <div>
      <button
        class="bg-white w-10 h-10 border border-1 text-customGray-400 rounded-full flex justify-center items-center shadow-md mr-5"
      >
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import card from "../productCard/mainView.vue";
import { Push } from "@progress/kendo-vue-animation";

export default {
  props: {
    from: String,
  },
  data() {
    return {
      imageSlider,
    };
  },
  components: {
    card,
    Push: Push,
  },
  data() {
    return {
      categories: null,
      pageNumber: 1,
      animationType: "push",
      show: false,
    };
  },

  created() {},
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
  },
};
</script>

<style></style>
