<template>
  <div class="relative top-20">
    <div class="px-28">
      <HeroSection />
    </div>
    <div class="w-full flex justify-center relative z-10">
      <imgSlider />
    </div>
    <div class="w-full px-8  py-20">
      <div class="px-20 mb-5 flex items-center justify-between">
        <h2 class="text-2xl font-semibold">Today’s Deals</h2>
        <router-link to="/products" class="text-sm text-primary-100"
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
};
</script>

<style lang="scss" scoped></style>
