<template>
  <div
    class="flex flex-col justify-center items-center"
    @click="$router.push('/category/' + id)"
  >
    <div v-if="!isImageLoaded">
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full w-32 h-32 bg-primary-600"></div>
      </div>
    </div>
    <div>
      <avatar
        :rounded="'full'"
        :type="'image'"
        class="!w-28 !h-28 flex justify-center items-center  cursor-pointer"
        :class="{ hidden: !isImageLoaded }"
      >
        <img
          :src="Image"
          alt="product"
          :eager="true"
          class="!min-w-28 !min-h-28 rounded-full"
          :class="{ hidden: !isImageLoaded }"
          @load="isImageLoaded = true"
          @error="isImageLoaded = true"
        />
      </avatar>
    </div>
    <div>
      <h3 class="font-bold">{{ name }}</h3>
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
