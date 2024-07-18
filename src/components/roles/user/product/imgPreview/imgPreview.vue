<template>
  <div class="flex gap-3 h-full w-full">
    <div class="overflow-hidden">
      <!-- {{ ImgList }} -->
      <base-button
        :size="'small'"
        class="!bg-white !border !border-primary-500 !rounded-lg w-full mb-3"
        v-show="false"
        ><i class="fa-solid fa-chevron-down"></i
      ></base-button>
      <ul class="flex flex-col gap-2">
        <li
          class="w-20 h-1/4"
          v-for="(img, index) in ImgList.imgs"
          :key="index"
        >
          <img
            :src="getImageUrl(img)"
            alt="product-Img"
            class="w-full h-full object-cover"
          />
        </li>
      </ul>
      <base-button
        :size="'small'"
        class="!bg-white !border !border-primary-500 !rounded-lg w-full mt-3"
        ><i class="fa-solid fa-chevron-down"></i
      ></base-button>
    </div>
    <div class="w-full h-full">
      <img
        :src="selectedImg"
        alt="product-Img"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script>
// import productImg from "../../../../../assets/img/productImg2.jpeg";
// import productImg from "../../../../../assets/dataImg/products/p4.webp";
export default {
  props: {
    colors: Array,
  },
  data() {
    return {
      // productImg,
      SelectedColorId: 1,
      selectedImg: this.colors[0].imgs[0],
    };
  },
  computed: {
    ImgList() {
      return this.colors.find((color) => color.color === this.SelectedColorId);
    },
  },
  methods: {
    getImageUrl(imagePath) {
      console.log(imagePath);
      var url = "../../../../../assets/dataImg/products/" + imagePath;
      return url;
    },
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

<style></style>
