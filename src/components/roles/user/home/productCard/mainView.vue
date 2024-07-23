<template>
  <div class="min-h-[650px] sm:min-h-[465px] w-full relative h-auto">
    <div>
      <div
        class="absolute z-10 w-8 h-8 p-1 text-center bg-white rounded-full cursor-pointer right-2 top-2"
        v-if="faviorate"
        @click="AddToWhishlist"
        :class="{ 'animate-icon': isAnimating }"
        @animationend="isAnimating = false"
      >
        <i class="fa-solid fa-heart text-customRed-600"></i>
      </div>
    </div>
    <div class="w-[390px] h-[560px] sm:w-[285px] sm:h-[380px] pl-[13px] " @click="GoToProduct(product?.id)">
      <div class="w-full h-full">
        <img
          :src="
            getImageUrl(
              colorsSelectedObj == null ? product?.src : colorsArray?.imgs[0]
            )
          "
          alt=""
          class="object-cover w-full h-full rounded-md"
        />
      </div>
      <div>
        <div class="py-3">
          <h4 class="sm:text-xs">{{ product?.name }}</h4>
          <div class="flex items-center gap-1"></div>
          <div class="flex flex-col justify-between">
            <div class="flex flex-col" v-if="discount">
              <div class="flex items-center gap-5">
                <p class="text-sm sm:text-xs line-through text-customGray-400">
                  ${{ product?.price }}
                </p>
                <p
                  class="bg-customRed-500 text-white rounded-md px-1 py-[2px] font-thin text-xs"
                >
                  {{ product?.discount }}%
                </p>
              </div>
            </div>
            <div class="flex items-center justify-between mt-1">
              <div>
                <p class="text-sm sm:text-xs opacity-60">
                  ${{
                    product?.price - product?.price * (product?.discount / 100)
                  }}
                </p>
              </div>
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
  props: {
    id: Number,
    img: String,
    name: String,
    price: String,
    discount: String,
    product: Object,
    colorsSelectedObj: Object,
  },
  data() {
    return {
      productImg,
      maxStars: 5,
      star: 1,
      faviorate: false,
      isAnimating: false,
      colorsArray: null,
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
    GoToProduct(id) {
      //console.log(id);
      this.$router.push(`/product/${id}`);
    },
    getImageUrl(imagePath) {
      var url =
        new URL("", import.meta.url).origin +
        "/assets/assets/dataImg/products/" +
        imagePath;
      return url;
    },
  },
  watch: {
    colorsSelectedObj(newVal) {
      this.colorsArray = this.product.colors.find(
        (color) => color.color === this.colorsSelectedObj?.id
      );
    },
  },
  mounted() {
    this.colorsArray = this.product.colors.find(
      (color) => color.color === this.colorsSelectedObj?.id
    );
  },
};
</script>

<style >
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
