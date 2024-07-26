<template>
  <div
    class="flex flex-col items-center justify-center"
    @click="$router.push('/category/' + id)"
  >
    <div v-if="!isImageLoaded">
      <div class="flex space-x-4 animate-pulse">
        <div class="w-32 h-32 rounded-full bg-primary-600"></div>
      </div>
    </div>
    <div>
      <avatar
        :rounded="'full'"
        :type="'image'"
        class="!w-32 !h-32 flex justify-center items-center cursor-pointer sm:!w-[70px] sm:!h-[70px] md:!w-24 md:!h-24"
        :class="{ hidden: !isImageLoaded }"
      >
        <img
          :src="Image"
          alt="product"
          :eager="true"
          class="!min-w-32 !min-h-32 rounded-full"
          :class="{ hidden: !isImageLoaded }"
          @load="isImageLoaded = true"
          @error="isImageLoaded = true"
        />
      </avatar>
    </div>
    <div>
      <h3 class="mt-1 font-bold sm:text-xs min-w-max">{{ name }}</h3>
    </div>
  </div>
</template>

<script>
import { Avatar } from "@progress/kendo-vue-layout";
// import imageSlider from "../../../../../../assets/img/sliderImg.png";
export default {
  components: {
    avatar: Avatar,
  },
  props: {
    Image: String,
    name: String,
    id: Number,
  },
  data() {
    return {
      isImageLoaded: false,
      // dummy,
    };
  },
  methods: {},
};
</script>

<style>
.k-avatar-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
.k-avatar-solid-primary {
  border-color: #f3f0f0 !important;
  background-color: #f3f0f0 !important;
}
</style>
