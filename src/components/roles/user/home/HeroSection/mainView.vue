<template>
  <div class="flex w-full justify-between gap-5">
    <div class="basis-[20%]">
      <img
        :src="heroImg"
        alt="hero-section-Img"
        class="w-full h-[450px] object-cover"
      />
    </div>
    <scrollView class="basis-[60%]" />
    <div class="basis-[20%]">
      <img
        :src="heroImg"
        alt="hero-section-Img"
        class="w-full h-[450px] object-cover"
      />
    </div>
  </div>
</template>

<script>
import scrollView from "./scrollView/mainView.vue";
import heroImg from "../../../../../assets/img/Hero-section-img.jpeg";
export default {
  data() {
    return {
      heroImg,
    };
  },
  components: {
    scrollView,
  },
};
</script>

<style lang="scss" scoped></style>
