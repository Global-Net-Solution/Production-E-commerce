<template>
  <div class="mb-5 profile">
    <h3 class="font-semibold">Sara Tarek</h3>
    <span class="text-xs text-customGray-500">@uniqueuser</span>
  </div>
  <TabStrip :selected="selected" @select="onSelect" :tabs="tabs">
    <template v-slot:Overview>
      <div class="w-full">
        <div class="flex w-full bg-white rounded-lg justify-between">
          <div class="px-5 py-3 flex flex-col gap-4">
            <div class="flex gap-3 items-center">
              <p>Coupons</p>
              <img :src="coupon" alt="coupon" />
            </div>
            <p class="text-3xl font-bold">50</p>
          </div>
          <div class="px-5 py-3 flex flex-col gap-4">
            <div class="flex gap-3 items-center">
              <p>Points</p>
              <img :src="Points" alt="Points" />
            </div>
            <p class="text-3xl font-bold">1500</p>
          </div>
          <div class="px-5 py-3 flex flex-col gap-4">
            <div class="flex gap-3 items-center">
              <p>Gift Card</p>
              <img :src="gift" alt="coupon" />
            </div>
            <p class="text-3xl font-bold">12</p>
          </div>
        </div>
        <div class="py-8">
          <ul class="flex flex-col gap-5">
            <li>
              <div class="flex justify-between items-center">
                <div class="flex gap-3">
                  <img :src="offer" alt="profile" />
                  <p>Promotions and Offers</p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex justify-between items-center">
                <div class="flex gap-3">
                  <img :src="Recommendations" alt="profile" />
                  <p>Promotions and Offers</p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex justify-between items-center">
                <div class="flex gap-3">
                  <img :src="cart" alt="profile" />
                  <p>Shopping Cart Summary</p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex justify-between items-center">
                <div class="flex gap-3">
                  <img :src="Activity" alt="profile" />
                  <p>Account Activity</p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex justify-between items-center">
                <div class="flex gap-3">
                  <img :src="app" alt="profile" />
                  <p>App Download Prompt</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </template>
    <template v-slot:Orders> test </template>
    <template v-slot:Wishlist> test </template>
  </TabStrip>
</template>

<script>
import { TabStrip } from "@progress/kendo-vue-layout";
import coupon from "../../../../../assets/ProfileIcons/coupons.svg";
import Points from "../../../../../assets/ProfileIcons/points.svg";
import gift from "../../../../../assets/ProfileIcons/gift.svg";
import offer from "../../../../../assets/ProfileIcons/offers.svg";
import Recommendations from "../../../../../assets/ProfileIcons/recommendations.svg";
import cart from "../../../../../assets/ProfileIcons/cart.svg";
import Activity from "../../../../../assets/ProfileIcons/activity.svg";
import app from "../../../../../assets/ProfileIcons/app.svg";

export default {
  components: {
    TabStrip,
  },
  props: {
    product: Object,
  },
  data: function () {
    return {
      selected: 0,
      coupon,
      Points,
      gift,
      offer,
      Recommendations,
      cart,
      Activity,
      app,
      tabs: [
        {
          title: "Overview",
          content: "Overview",
        },
        {
          title: "Orders",
          content: "Orders",
        },
        {
          title: "Wishlist",
          content: "Wishlist",
        },
      ],
      maxStars: 1,
      star: 1,
      value: 50,
      value2: 30,
      value3: 100,
    };
  },
  methods: {
    onSelect(e) {
      console.log(e);
      if(e.selected == 2 ){
        this.$router.push('/whishlist')
      }
      else if(e.selected == 1 ){
        this.$router.push('/orders')
      }
      this.selected = e.selected;
    },
  },
};
</script>

<style>
.k-tabstrip-top > .k-tabstrip-content {
  background: none;
  border: none;
}
.k-animation-container {
  width: 100%;
}
</style>
