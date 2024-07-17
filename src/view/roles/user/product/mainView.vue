<template>
  <div class="px-28 py-10">
    <div class="w-full flex gap-10 h-screen">
      <imgPreview class="w-[50%]" />
      <productDetails class="w-[30%] h-screen" />
      <!-- <paymentInfo class="" /> -->
    </div>
    <div class="w-full">
      <productDescription />
    </div>
  </div>
</template>

<script>
import imgPreview from "../../../../components/roles/user/product/imgPreview/imgPreview.vue";
import productDetails from "../../../../components/roles/user/product/productDetails/productDetails.vue";
import paymentInfo from "../../../../components/roles/user/product/paymentInfo/paymentInfo.vue";
import productDescription from "../../../../components/roles/user/product/productDescription/productDescription.vue";

export default {
  setup() {
    return {};
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
