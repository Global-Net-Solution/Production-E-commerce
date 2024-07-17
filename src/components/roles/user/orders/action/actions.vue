<template>
  <div class="w-full flex border-y py-4">
    <div class="w-1/5 flex justify-center relative items-center">
      <img
        :src="searchIcon"
        alt=""
        class="w-6 h-6 absolute top-3 left-[40px] z-10"
      />
      <base-autocomplete
        :style="{ width: '85%' }"
        :size="'small'"
        :class="'custom-input'"
        :placeholder="'Find items...'"
        :rounded="'medium'"
      ></base-autocomplete>
    </div>
    <div class="flex gap-3 justify-between contryInfo w-[25%] items-center">
      <div class="flex w-full items-center">
        <label class="w-[20%]">Duration</label>
        <base-combobox
          :data="countries"
          v-model="country"
          class="bg-white h-10 bg-boxShadow-custom !w-[80%]"
          :placeholder="'All'"
        />
      </div>
    </div>
    <div class="flex gap-3 justify-between contryInfo w-[25%] items-center">
      <div class="flex w-full items-center">
        <label class="w-[20%]">Filter by</label>
        <base-combobox
          :data="countries"
          v-model="country"
          class="bg-white h-10 bg-boxShadow-custom !w-[80%]"
          :placeholder="'All'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import searchIcon from "../../../../../assets/icons/h-search.svg";
export default {
  data() {
    return {
      searchIcon,
    };
  },
};
</script>

<style lang="scss" scoped></style>
