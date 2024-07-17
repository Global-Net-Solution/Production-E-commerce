<template>
  <div class="coupon-container w-[30%] overflow-hidden rounded-lg border-b-2">
    <div
      class="coupon-content w-full flex px-5 py-3 gap-3 bg-white h-24 items-center"
    >
      <div class="w-[20%]">
        <img :src="coupon" alt="coupon" />
      </div>
      <hr />
      <div
        class="h-full border-dashed pl-4 !border-customGray-[#eee] border-l-2"
      >
        <p>1 Free Coffee</p>
        <p class="text-sm">Starbucks</p>
        <p class="text-[10px] w-full mt-2 text-[#0000004D]">
          Valid until 11 September 2022
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import coupon from "../../../../../assets/img/coupon.png";
export default {
  data() {
    return {
      coupon,
    };
  },
};
</script>
<style lang="scss">
.coupon-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 4px 2px rgba(0, 0, 0, 0.1);

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: #f4f5f9;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.2);
    // z-index: 10000000;
  }

  &::before {
    left: -10px;
  }

  &::after {
    right: -10px;
  }
}
</style>
