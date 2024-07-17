<template>
  <transition name="item">
    <div class="flex flex-col justify-center items-center gap-1 mb-5" @click="$router.push('/products')">
      <div
        class="w-28 h-28  flex justify-center items-center rounded-full"
      > 
   
        <img :src="src" :alt="'Avatar Image'" class="w-20 h-20 rounded-full" />
      </div>
      <div>
        <h1 class="text-sm">{{ header }}</h1>
      </div>
    </div>
  </transition>
</template>

<script>
import {Avatar} from "@progress/kendo-vue-layout";
export default {
  components: {Avatar},
  data() {
    return {};
  },
  props: {
    src: String,
    header: String,
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
