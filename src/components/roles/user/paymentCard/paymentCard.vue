<template>
  <div
    class="w-[400px] h-[290px] rounded-md bg-contain bg-no-repeat flex flex-col px-5 py-3 gap-4"
    :style="{ backgroundImage: `url(${selected === false ? unselectedBG : selectedBG })` }"
  >
    <div class="w-full flex justify-between items-center h-10">
      <img :src="VisaLogo" alt="Visa logo" class="w-10 h-10" />
      <div class="cursor-pointer">
        <i class="fa-solid fa-ellipsis-vertical text-primary-500"></i>
      </div>
    </div>
    <div class="flex w-full gap-10 h-10 items-center justify-between">
      <div class="flex gap-1">
        <div class="w-2 h-2 rounded-full bg-black"></div>
        <div class="w-2 h-2 rounded-full bg-black"></div>
        <div class="w-2 h-2 rounded-full bg-black"></div>
        <div class="w-2 h-2 rounded-full bg-black"></div>
      </div>
      <div class="flex gap-1">
        <div class="w-2 h-2 rounded-full bg-black"></div>
        <div class="w-2 h-2 rounded-full bg-black"></div>
        <div class="w-2 h-2 rounded-full bg-black"></div>
        <div class="w-2 h-2 rounded-full bg-black"></div>
      </div>
      <div class="flex gap-1">
        <div class="w-2 h-2 rounded-full bg-black"></div>
        <div class="w-2 h-2 rounded-full bg-black"></div>
        <div class="w-2 h-2 rounded-full bg-black"></div>
        <div class="w-2 h-2 rounded-full bg-black"></div>
      </div>
      <div>1234</div>
    </div>
    <div class="text-sm font-normal">
      <p class="mb-1">Marcus Stanton</p>
      <p>06/2019</p>
    </div>
  </div>
</template>

<script>
import selectedBG from "../../../../assets/img/selectedCard.png";
import unselectedBG from "../../../../assets/img/unSelectedCard.png";
import VisaLogo from "../../../../assets/img/visa-logo.svg";

export default {
  props: {
    selected: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      VisaLogo,
      selectedBG,
      unselectedBG,
    };
  },
};
</script>
