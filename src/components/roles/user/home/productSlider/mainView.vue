<template>
  <div class="flex w-full items-center">
    <!-- <div
      v-if="!products?.length < 12 && this.pageNumber > 1 && from != 'all'"
      class="bg-white w-10 h-10 border border-1 text-customGray-400 rounded-full flex justify-center items-center shadow-md hover:text-primary-700"
      @click="prev"
    >
      <button
        class="bg-white w-10 h-10 border border-1 text-customGray-400 rounded-full flex justify-center items-center shadow-md"
      >
        <i class="fa-solid fa-angle-left"></i>
      </button>
    </div> -->
    <Push :appear="show" v-if="animationType === 'push'">
      <div
        class="flex min-h-[220px] items-center w-[100%] gap-4 px-10 flex-wrap"
      >
        <!-- {{ paginatedProducts[0].colors[0].color}} -->
        <card
          v-for="(product, inx) in paginatedProducts"
          :key="inx"
          class="basis-[19%]"
          :id="product.id"
          :img="getImageUrl(product.src)"
          :name="product.name"
          :price="product.price"
          :discount="product.discount"
        />
      </div>
    </Push>
    <!-- <div>
      <button
        v-if="!products?.length < 12 && from != 'all' && pageNumber < pageCount"
        @click="next"
        class="bg-white w-10 h-10 border border-1 text-customGray-400 rounded-full flex justify-center items-center shadow-md mr-5"
      >
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </div> -->
  </div>
</template>

<script>
import card from "../productCard/mainView.vue";
import { Push } from "@progress/kendo-vue-animation";
import products from "../../../../../data-model/products.json";
export default {
  props: {
    from: String,
  },
  components: {
    card,
    Push: Push,
  },
  data() {
    return {
      categories: null,
      pageNumber: 1,
      animationType: "push",
      show: true,
      products: products.products,
      pageSize: 5,
      selectedColor: 1,
    };
  },
  computed: {
    paginatedProducts() {
      // Filter products based on the color condition
      const filteredProducts = this.products.filter((product) =>
        product.colors.some((color) => color.color === this.selectedColor)
      );

      // Apply pagination to the filtered products
      // const start = (this.pageNumber - 1) * this.pageSize;
      // const end = Math.min(start + this.pageSize, filteredProducts.length);
      // return filteredProducts.slice(start, end);
      return filteredProducts
    },

    pageCount() {
      return Math.ceil(this.products.length / this.pageSize);
    },
  },
  created() {},
  methods: {
    animate() {
      this.show = !this.show;
    },
    next() {
      if (this.pageNumber < this.pageCount) {
        this.pageNumber = this.pageNumber + 1;
        this.show = false;
        setTimeout(() => {
          this.show = true;
        }, 200);
      }
    },
    prev() {
      if (this.pageNumber > 1) {
        this.pageNumber = this.pageNumber - 1;
        this.show = false;
        setTimeout(() => {
          this.show = true;
        }, 200);
      }
    },
    getImageUrl(imagePath) {
      var url =
        new URL("", import.meta.url).origin +
        "/src/assets/dataImg/products/" +
        imagePath;

      return url;
    },
  },
};
</script>

<style></style>
