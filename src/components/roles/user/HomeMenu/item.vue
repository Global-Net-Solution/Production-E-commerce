<template>
  <transition name="item">
    <div
      class="flex flex-col items-center justify-center gap-1 mb-5"
      @click="goToProducts"
    >
      <div class="flex items-center justify-center rounded-full w-28 h-28 sm:w-24 sm:h-24">
        <img :src="src" :alt="'Avatar Image'" class="w-20 h-20 rounded-full" />
      </div>
      <div>
        <h1 class="text-sm sm:text-xs">{{ header }}</h1>
      </div>
    </div>
  </transition>
</template>

<script>
import { Avatar } from "@progress/kendo-vue-layout";
export default {
  components: { Avatar },
  data() {
    return {};
  },
  props: {
    src: String,
    header: String,
    product: Object,
  },
  methods: {
    goToProducts() {
      this.$store.dispatch("setfilterBySubCategory", this.product);

      if (this.$route.path != "/products") {
        this.$router.push("/products");
      } else {
        window.location.reload();
      }
    },
  },
};
</script>

<style>
.k-avatar {
  background-color: #eee;
  padding: 11px;
}
.item-enter-active,
.item-leave-active {
  transition: all 0.5s;
}

.item-leave-to {
  opacity: 0;
  transform: translateY(-150px);
}
.item-enter-to {
  opacity: 0;
  transform: translateY(-150px);
}
</style>
