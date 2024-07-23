<template>
  <div class="flex justify-between w-full gap-5">
    <!-- <div class="basis-[20%] sm:hidden">
      <img
        :src="heroImg"
        alt="hero-section-Img"
        class="w-full h-[450px] border-b object-cover"
      />
    </div> -->
    <scrollView class="basis-full h-[450px] sm:basis-full sm:h-[350px]" />
    <!-- <div class="basis-[20%] sm:hidden">
      <img
        :src="heroImg"
        alt="hero-section-Img"
        class="w-full h-[450px] border-b object-cover "
      />
    </div> -->
  </div>
</template>

<script>
import scrollView from "./scrollView/mainView.vue";
import heroImg from "../../../../../assets/img/3.png";
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
