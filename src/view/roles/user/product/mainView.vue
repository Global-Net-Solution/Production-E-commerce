<template>
  <div class="relative py-10 px-28 top-20 sm:px-5">
    <div class="flex w-full h-screen gap-10 sm:flex-col">
      <imgPreview
        class="w-[50%]"
        :colors="product?.colors"
        :currentColor="currentColor"
      />
      <productDetails
        class="w-[30%] h-screen sm:w-full"
        :product="product"
        :colors="product?.colors"
        @colorSelected="colorSelected"
      />
    </div>
    <div class="w-full">
      <productDescription :description="product?.decription" />
    </div>
  </div>
</template>

<script>
import imgPreview from "../../../../components/roles/user/product/imgPreview/imgPreview.vue";
import productDetails from "../../../../components/roles/user/product/productDetails/productDetails.vue";
import paymentInfo from "../../../../components/roles/user/product/paymentInfo/paymentInfo.vue";
import productDescription from "../../../../components/roles/user/product/productDescription/productDescription.vue";
import products from "../../../../data-model/products.json";
export default {
  created() {
    const productId = this.$route.params.id;
    this.product = this.products.find((product) => product.id == productId);
  },
  data() {
    return {
      products: products.products,
      product: null,
      currentColor: null,
    };
  },
  methods: {
    colorSelected(color) {
      this.currentColor = color;
    },
  },
  components: {
    imgPreview,
    productDetails,
    paymentInfo,
    productDescription,
  },
};
</script>

<style></style>
