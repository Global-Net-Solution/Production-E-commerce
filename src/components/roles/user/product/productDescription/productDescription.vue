<template>
  <div class="flex mt-5 h-7 mb-7">
    <div class="bg-primary-500 h-full w-1.5 rounded text-primary-500"></div>
    <h3 class="pl-3 text-2xl font-extrabold">Product Description</h3>
  </div>
  <hr />
  <div class="mt-5">
    <h2 class="text-lg font-semibold">Item description</h2>
    <p class="mt-5 opacity-70 sm:hidden">
      {{ description }}
    </p>
    <div class="hidden sm:block">
      <p
        class="w-4/5 text-gray-400 cursor-pointer hover:text-ellipsis"
        v-if="!showMore && description?.length >= 80"
      >
        {{ description?.slice(0, 80) }} ...
        <span
          class="text-sm cursor-pointer more-text text-black"
          @click="addMore"
          >Read more</span
        >
      </p>
      <p
        class="w-4/5 text-gray-400 cursor-pointer hover:text-ellipsis"
        v-if="!showMore && description?.length < 80"
      >
        {{ description }}
      </p>
      <p
        class="w-full min-h-[50] overflow-y-auto text-gray-400 cursor-pointer hover:text-ellipsis"
        v-if="showMore"
      >
        {{ description }}
        <span
          class="text-sm cursor-pointer ml-5 less-text text-black"
          @click="viewLess"
          >View less</span
        >
      </p>
    </div>
  </div>
</template>

<script>
import {TabStrip} from "@progress/kendo-vue-layout";
import {ProgressBar} from "@progress/kendo-vue-progressbars";
import Review from "../../../../../components/roles/user/product/productReview/productReview.vue";
import img from "../../../../../assets/img/review-img.jpeg";
export default {
  components: {
    TabStrip,
    ProgressBar,
    Review,
  },
  props: {
    product: Object,
    description: String,
  },
  data: function () {
    return {
      img,
      selected: 0,
      tabs: [
        {
          title: "Description",
          content: "Description",
        },
        {
          title: "User reviews",
          content: "Userreviews",
        },
        {
          title: "Images",
          content: "Images",
        },
      ],
      maxStars: 1,
      star: 1,
      value: 50,
      value2: 30,
      value3: 100,
      showMore: false,
    };
  },
  watch: {
    description(newVal) {
      //console.log(newVal);
    },
  },
  methods: {
    onSelect: function (e) {
      this.selected = e.selected;
    },
    addMore() {
      this.showMore = true;
    },
    viewLess() {
      this.showMore = false;
    },
  },
};
</script>

<style>
.k-tabstrip > .k-content {
  border: none;
  padding-inline: 30px;
}
.k-tabstrip-top > .k-tabstrip-items-wrapper {
  border-bottom-width: 0px;
}
.k-tabstrip-items-wrapper .k-item,
.k-tabstrip-items-wrapper .k-item:hover {
  color: #807d7e;
}
.k-tabstrip-top > .k-tabstrip-items-wrapper .k-item.k-active {
  /* border: none; */
  color: #339ddb;
  border: 2px solid#339DDB;
}
.k-progressbar .k-selected {
  border-color: #f5bf55 !important;
  background-color: #f5bf55 !important;
}
.k-tabstrip-items-wrapper .k-item {
  color: #000 !important;
}
</style>
