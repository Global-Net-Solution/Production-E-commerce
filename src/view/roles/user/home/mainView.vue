<template>
  <div class="relative top-20">
    <div class="px-28 sm:px-5">
      <HeroSection />
    </div>
    <div class="relative z-10 flex justify-center w-full sm:px-10">
      <imgSlider />
    </div>
    <div class="w-full px-8 py-20 sm:px-0 sm:py-0">
      <div class="flex items-center justify-between px-20 mb-5 sm:px-2">
        <h2 class="text-2xl font-semibold sm:text-base">Today’s Deals</h2>
        <router-link
          to="/products"
          @click="goToProducts"
          class="text-sm text-primary-100"
          >See More</router-link
        >
      </div>
      <productSlider />
    </div>
  </div>
</template>

<script>
import HeroSection from "../../../../components/roles/user/home/HeroSection/mainView.vue";
import imgSlider from "../../../../components/roles/user/home/ImgSlider/mainView.vue";
import productSlider from "../../../../components/roles/user/home/productSlider/mainView.vue";
export default {
  setup() {
    return {};
  },
  components: {
    HeroSection,
    imgSlider,
    productSlider,
  },
  methods: {
    goToProducts() {
      this.$store.dispatch("setfilterBySubCategory", null);
      localStorage.clear("filterBySubCategory");
      this.$store.dispatch("setfilterByColor", null);
    },
  },
};
</script>

<style lang="scss" scoped></style>
