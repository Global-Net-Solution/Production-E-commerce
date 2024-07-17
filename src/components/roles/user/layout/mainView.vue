<template>
  <div>
    <AppBar />
    <router-view />
    <Footer />
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
