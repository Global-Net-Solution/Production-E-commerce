<template>
  <div class="w-[80%] h-[400px] border rounded-lg px-8">
    <h3 class="py-3 border-b">Cart Summary</h3>
    <div>
      <p
        class="text-customGray-500 text-sm flex w-full justify-between font-semibold pt-3"
      >
        <span>Subtotal</span><span>US $ 10, 234.56</span>
      </p>
      <ul class="flex flex-col justify-between h-[70%] text-sm py-5 border-b">
        <li
          class="text-customGray-500 text-xs flex w-full justify-between font-medium mb-3"
        >
          <span>Shipping</span>
          <span>US $ 80.09</span>
        </li>
        <li
          class="text-customGray-500 text-xs flex w-full justify-between font-medium mb-3"
        >
          <span>Discount</span>
          <span>US $ 2, 234.56</span>
        </li>
        <li
          class="text-customGray-500 text-xs flex w-full justify-between font-medium mb-3"
        >
          <span>Estimated Tax</span>
          <span>-</span>
        </li>
      </ul>
      <p class="text-sm flex w-full justify-between font-semibold pt-3">
        <span>Subtotal</span><span>US $ 10, 234.56</span>
      </p>
      <base-button
        :size="'large'"
        class="!bg-primary-500 !text-white !rounded-md !px-5 !w-full my-10"
        @click="action"
        >{{ content }}</base-button
      >
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  props:{
    content:String,
  },
  methods:{
    action(){
      this.$emit("confirm")
    }
  }
};
</script>

<style lang="scss" scoped></style>
