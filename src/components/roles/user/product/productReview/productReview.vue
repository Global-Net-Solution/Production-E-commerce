<template>
  <div class="w-full flex gap-5">
    <div class="w-[85%]">
      <h3 class="text-lg font-semibold mb-2">{{ name }}</h3>
      <p class="text-sm text-customGray-400 mb-2">{{ date }}</p>
      <p>{{ Discription }}</p>
    </div>
    <div class="w-[15%]">
      <div>
        <h2 class="flex gap-3 items-center">
          <rating
            :star="rate"
            :disabled="true"
            :maxstars="maxStars"
            starsize="md"
          />
          <span class="text-xs font-semibold">4.5</span>
        </h2>
      </div>
      <div class="w-full h-28" v-if="img">
        <img :src="img" alt="" class="w-full h-full rounded-md object-cover" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    name: String,
    date: String,
    Discription: String,
    rate: Number,
    rateValue: String,
    img: String,
  },
};
</script>

<style lang="scss" scoped></style>
