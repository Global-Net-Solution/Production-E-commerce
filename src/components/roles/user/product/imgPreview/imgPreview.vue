<template>
  <div class="flex w-full h-full gap-3">
    <div class="overflow-hidden">
      <base-button
        :size="'small'"
        class="!bg-white !border !border-primary-500 !rounded-lg w-full mb-3"
        v-show="false"
        ><i class="fa-solid fa-chevron-down"></i
      ></base-button>
      <ul class="flex flex-col gap-2">
        <li
          class="relative w-20 cursor-pointer h-1/4 "
          v-for="(img, index) in ImageListPreview.imgs"
          :key="index"
          :class="{'imageLayer':currentIndex!=index}"
          @click="currentImg(img,index)"
        >
          <img
            :src="getImageUrl(img)"
            alt="product-Img"
            class="object-cover w-full h-full"
          />
        </li>
      </ul>
      <!-- <base-button
        :size="'small'"
        class="!bg-white !border !border-primary-500 !rounded-lg w-full mt-3"
        ><i class="fa-solid fa-chevron-down"></i
      ></base-button> -->
    </div>
    <div class="w-full h-full">
      <img
        :src="getImageUrl(selectedImg)"
        alt="product-Img"
        class="object-cover w-full h-full"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    colors: Array,
    currentColor: Object,
  },
  data() {
    return {
      SelectedColorId: 8,
      selectedImg:
        this.colors &&
        this.colors[
          this.colors.findIndex((item) => item.color === this.colors[0].color)
        ].imgs[0],
      colorsSelected: null,
      ImageListPreview: [],
      currentIndex: 0,
    };
  },
  watch: {
    currentColor(newValue) {
      this.ImgList(newValue.id);
      this.selectedImg =
        this.colors &&
        this.colors[this.colors.findIndex((item) => item.color === newValue.id)]
          .imgs[0];
    },
  },

  computed: {},
  mounted() {
    this.ImgList();
  },
  methods: {
    ImgList(currentColor = this.colors[0].color) {
      console.log(this.colors);
      this.ImageListPreview = this.colors?.find(
        (color) => color.color === currentColor
      );
    },
    getImageUrl(imagePath) {
      var url =
        new URL("", import.meta.url).origin +
        "/assets/assets/dataImg/products/" +
        imagePath;

      return url;
    },
    colorsSelected(color) {
      this.colorsSelected = color;
    },
    currentImg(img, index) {
      console.log(img);
      this.currentIndex = index;
      this.selectedImg = img;
    },
  },
};
</script>

<style>
.imageLayer::after {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #eeeeeea2;
}
</style>
