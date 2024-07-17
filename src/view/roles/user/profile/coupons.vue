<template>
  <div>
    <h1 class="text-2xl mb-8">My Coupons</h1>
    <div class="w-full flex gap-5 flex-wrap">
      <coupon />
      <coupon />
      <coupon />
      <coupon />
      <coupon />
      <coupon />
    </div>
  </div>
</template>

<script>
import coupon from "../../../../components/roles/user/profile/coupon/coupon.vue";
export default {
  components: {
    coupon,
  },
};
</script>

<style></style>
