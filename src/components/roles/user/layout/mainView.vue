<template>
  <div>
    <AppBar class="h-[20%]" />
    <div class="h-[80%]">
      <router-view class="custom-scrollbar" />
      <Footer class="mt-[90px]"/>
    </div>
  </div>
</template>
<script setup>
import AppBar from "./AppBar/mainView.vue";
import Footer from "./Footer/mainView.vue";
</script>
<script>
export default {
  data() {
    return {};
  },
  components: {
    Footer,
    AppBar,
  },
  methods: {},
};
</script>
<style scoped></style>
