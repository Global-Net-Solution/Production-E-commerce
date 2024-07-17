<template>
  <div class="px-28 py-10">
    <div class="w-full flex flex-col justify-center items-center" v-if="empty">
      <img :src="emptyCart" alt="empty-cart" class="w-[200px] h-[220px]" />
      <h3 class="text-lg font-semibold my-3">Your Cart is empty.</h3>
      <p class="text-sm font-light text-customGray-400 w-96 text-center">
        You don’t have any products in the Cart yet. You will find a lot of
        interesting products on our home page.
      </p>
      <base-button
        :size="'large'"
        class="!bg-primary-500 !text-white !rounded-md !px-5 my-5"
        @click="GoToProducts"
        >Continue Shopping</base-button
      >
    </div>
    <div>
      <h1 class="text-2xl">Shopping cart</h1>
      <p class="py-5 text-sm">
        Sold by: <span class="text-primary-100">seller_username_1</span>
      </p>

      <div class="w-full flex justify-between gap-20">
        <div class="basis-4/6 border-t pt-6">
          <card>
            <div class="flex justify-between h-6">
              <div class="flex gap-2 contryInfo">
                <base-button
                  :size="'small'"
                  class="!bg-primary-500 !text-white !rounded-md"
                  ><i class="fa-solid fa-minus"></i>
                </base-button>
                <div class="flex w-20 gap-1 items-center">
                  <base-combobox
                    :data="countries"
                    v-model="counter"
                    class="bg-white h-10 bg-boxShadow-custom !w-[100%]"
                    :placeholder="'1'"
                  />
                </div>
                <base-button
                  :size="'small'"
                  class="!bg-primary-500 !text-white !rounded-md"
                  ><i class="fa-solid fa-plus"></i
                ></base-button>
              </div>
              <div class="flex gap-2">
                <base-button
                  :size="'small'"
                  class="!bg-white !text-customGray-500 !border-0"
                  ><i class="fa-solid fa-heart mr-1"></i>
                  Move to wishlist
                </base-button>
                <p class="!text-customGray-500 font-extralight">|</p>
                <base-button
                  :size="'small'"
                  class="!bg-white !text-customGray-500 !border-0"
                  ><i class="fa-regular fa-trash-can mr-1"></i>
                  Remove</base-button
                >
              </div>
            </div>
          </card>
        </div>
        <div class="basis-2/6">
          <summarycomponent
            :content="'Proceed to checkout'"
            @confirm="confirm"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emptyCart from "../../../../assets/img/emptyCart.png";
import card from "../../../../components/roles/user/cart/card/card.vue";
import summarycomponent from "../../../../components/roles/user/summary/summary.vue";
export default {
  components: {
    card,
    summarycomponent,
  },
  data() {
    return {
      emptyCart,
      empty: false,
    };
  },
  methods: {
    confirm() {
      this.$router.push("/checkout");
    },
    GoToProducts() {
      this.$router.push("/products");
    },
  },
};
</script>

<style lang="scss" scoped></style>
