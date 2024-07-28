<template>
  <div class="flex justify-between w-full gap-5">
    <scrollView class="basis-full h-[60vh] sm:basis-full sm:h-[350px]" />
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
