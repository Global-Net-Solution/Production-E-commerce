<template>
  <div class="px-28 py-10">
    <div class="w-full flex flex-col justify-center items-center">
      <img :src="emptyCart" alt="empty-cart" class="w-[150px] h-[150px]" />
      <h3 class="text-lg font-semibold my-3">Your Wishlist is empty.</h3>
      <p class="text-sm font-light text-customGray-400 w-96 text-center">
        You don’t have any products in the wishlist yet. You will find a lot of
        interesting products on our home page.
      </p>
      <base-button
        :size="'large'"
        class="!bg-primary-500 !text-white !rounded-md !px-5 my-5"
        @click="GoToProducts"
        >Continue Shopping</base-button
      >
    </div>
  </div>
</template>

<script>
import emptyCart from "../../../../assets/img/emptyWhislist.png";
export default {
  data() {
    return {
      emptyCart,
    };
  },
  methods: {
    GoToProducts() {
      this.$router.push("/products");
    },
  },
};
</script>

<style lang="scss" scoped></style>
