<template>
  <div class="h-[400px] w-full relative">
    <div>
      <!-- <div
        class="absolute right-2 top-2 w-8 h-8 bg-white rounded-full text-center p-1 cursor-pointer z-10"
        v-if="!faviorate"
        @click="AddToWhishlist"
        :class="{ 'animate-icon': isAnimating }"
        @animationend="isAnimating = false"
      >
        <i class="fa-regular fa-heart"></i>
      </div> -->
      <div
        class="absolute right-2 top-2 w-8 h-8 bg-white rounded-full text-center p-1 cursor-pointer z-10"
        v-if="faviorate"
        @click="AddToWhishlist"
        :class="{ 'animate-icon': isAnimating }"
        @animationend="isAnimating = false"
      >
        <i class="fa-solid fa-heart text-customRed-600"></i>
      </div>
    </div>
    <div class="w-full h-[60%]" @click="GoToProduct">
      <div class="w-full h-full">
        <img
          :src="productImg"
          alt=""
          class="rounded-md w-full h-full object-cover"
        />
      </div>
      <div>
        <div class="py-3">
          <h4>Product Name</h4>
          <div class="flex items-center gap-1">
            <!-- <rating
              :star="star"
              :disabled="true"
              :maxstars="maxStars"
              starsize="md"
            /> -->
            <span class="text-xs">(100+)</span>
          </div>
          <div class="flex flex-col justify-between">
            <div class="flex flex-col">
              <div class="flex items-center gap-5">
                <p class="line-through text-customGray-400 text-sm">$999.00</p>
                <p
                  class="bg-customRed-500 text-white rounded-md px-1 py-[2px] font-thin text-xs"
                >
                  12%
                </p>
              </div>
            </div>
            <div class="flex mt-1 justify-between items-center">
              <div>
                <p class="text-base">$899.00</p>
              </div>
              <!-- <base-button
                :size="'small'"
                class="!bg-white !border !border-primary-500 !rounded-lg"
                ><i
                  class="fa-solid fa-cart-shopping text-primary-500 px-1 py-1 pt-2 text-base"
                ></i
              ></base-button> -->
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import productImg from "../../../../../assets/img/productImg.jpeg";
import rating from "../../../../../components/rating/rating.vue";
export default {
  data() {
    return {
      productImg,
      maxStars: 5,
      star: 1,
      faviorate: false,
      isAnimating: false,
    };
  },
  components: {
    rating,
  },
  methods: {
    AddToWhishlist() {
      this.faviorate = !this.faviorate;
      this.isAnimating = true;
    },
    GoToProduct() {
      this.$router.push("/product");
    },
  },
};
</script>

<style>
@keyframes scale-up {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}

.animate-icon {
  animation: scale-up 0.3s ease-in-out;
}
</style>
