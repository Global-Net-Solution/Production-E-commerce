<template>
  <div>
    <AppBar class="h-[20%]"/>
    <router-view class="h-[1000px] overflow-auto custom-scrollbar " />
    <Footer class="h-[30%]"/>
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
