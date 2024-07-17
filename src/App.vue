<template>
  <div :dir="isRtl ? 'rtl' : 'ltr'">
    <router-view></router-view>
  </div>
</template>
<script setup>
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyA2EyNAPsk62EHMV5x56hge13A0ZdXRGcE",
  authDomain: "gns-e-commerce.firebaseapp.com",
  projectId: "gns-e-commerce",
  storageBucket: "gns-e-commerce.appspot.com",
  messagingSenderId: "670568499342",
  appId: "1:670568499342:web:ef12c493d22af4256ca1df",
  measurementId: "G-ZL152PTXDR",
};

const app = initializeApp(firebaseConfig);
console.log(app);
const messaging = getMessaging();

onMessage(messaging, (payload) => {
  console.log(payload);
});
</script>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    isRtl() {
      return this.$i18n.locale === "ar";
    },
  },
  methods: {},
};
</script>
<style scoped></style>
