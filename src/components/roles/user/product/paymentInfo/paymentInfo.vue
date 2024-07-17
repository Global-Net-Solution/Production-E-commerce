<template>
  <div class="w-full flex flex-col">
    <div class="border-2 px-4 py-5 rounded-md">
      <h3 class="text-lg font-semibold">Sold by</h3>
      <p class="text-sm mt-5 text-primary-500">DanyShop</p>
      <p class="font-thin mt-2">98.7% Positive feedback</p>
      <div class="flex gap-5 mt-5 w-full">
        <base-button
          :size="'large'"
          class="!bg-white !border !border-primary-500 !rounded-md !text-primary-500 w-[50%]"
        >
          Seller’s other items</base-button
        >
        <base-button
          :size="'large'"
          class="!bg-white !border !border-primary-500 !rounded-md !text-primary-500 w-[50%]"
        >
          Follow DanyShop</base-button
        >
      </div>
    </div>
    <div class="mt-10">
      <ul>
        <li>
          <div class="contryInfo flex gap-3">
            <p class="text-customGray-400 text-sm">Shipping:</p>
            <div class="text-sm font-semibold">
              Free express shipping on orders over $129.00 Estimated to be
              delivered on 06/21/2024 - 06/28/2024.
              <p class="mt-2">
                Item location:
                <span class="text-customGray-400 text-xs">
                  Hamtramck, Michigan, United States
                </span>
              </p>
              <p class="mt-2">
                Ship to:
                <span class="text-customGray-400 text-xs">
                  United Kingdom and many other countries
                </span>
              </p>
            </div>
          </div>
        </li>
        <li class="flex items-center gap-3">
          <p class="text-customGray-400 text-sm">Delivery:</p>
          <p class="text-sm font-semibold">- -</p>
        </li>
        <li class="flex items-center gap-3">
          <p class="text-customGray-400 text-sm">Condition:</p>
          <p class="text-sm font-semibold">New</p>
        </li>
        <li class="flex items-center gap-3">
          <p class="text-customGray-400 text-sm">Returns:</p>
          <p class="text-sm font-semibold">
            Seller does not accept returns |
            <span>
              <a href="" class="text-primary-500 font-semibold"> See details</a>
            </span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
