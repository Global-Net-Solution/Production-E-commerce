<template>
  <div class="flex w-full items-center">
    <Push :appear="show" v-if="animationType === 'push'">
      <div
        class="flex min-h-[220px] items-center w-[100%] gap-4 px-10 flex-wrap"
      >
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
    // importAllImages() {
    //   const images = import.meta.glob('@/assets/*.jpg');
    //   const webpImages = import.meta.glob('@/assets/*.webp');
    //   for (const path in images) {
    //     images[path]().then((mod) => {
    //       const fileName = path.split('/').pop();
    //       this.$set(this.imageMap, fileName, mod.default);
    //     });
    //   }
    //   for (const path in webpImages) {
    //     webpImages[path]().then((mod) => {
    //       const fileName = path.split('/').pop();
    //       this.$set(this.imageMap, fileName, mod.default);
    //     });
    //   }
    // },
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
