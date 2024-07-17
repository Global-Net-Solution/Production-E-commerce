<template>
  <div class="border-t w-full">
    <div class="px-28 py-5">
      <div class="flex justify-between pb-5 border-b">
        <div class="w-1/4">
          <h5 class="mb-3 font-semibold">{{ $t("BuyMenu.title") }}</h5>
          <ul class="inter">
            <li class="w-fit">
              <a href="" class="animated-link">{{
                $t("BuyMenu.Registration")
              }}</a>
            </li>
            <li class="w-fit">
              <a href="" class="animated-link">{{
                $t("BuyMenu.Protection")
              }}</a>
            </li>
            <li class="w-fit">
              <a href="" class="animated-link">{{ $t("BuyMenu.Help") }}</a>
            </li>
          </ul>
        </div>
        <!-- <div class="w-1/4">
          <h5 class="mb-3 font-semibold">Sell</h5>
          <ul class="inter">
            <li>
              <a href="">Start selling</a>
            </li>
            <li>
              <a href="">Shopin Seller Protection</a>
            </li>
            <li>
              <a href="">Learn to sell</a>
            </li>
          </ul>
        </div> -->
        <div class="w-1/4">
          <h5 class="mb-3 font-semibold">{{ $t("about.title") }}</h5>
          <ul class="inter">
            <li class="w-fit">
              <a href="" class="animated-link">{{ $t("about.info") }}</a>
            </li>
            <li class="w-fit">
              <a href="" class="animated-link">{{ $t("about.news") }}</a>
            </li>
            <li class="w-fit">
              <a href="" class="animated-link">{{ $t("about.Careers") }}</a>
            </li>
            <li class="w-fit">
              <a href="" class="animated-link">{{ $t("about.Policies") }}</a>
            </li>
          </ul>
        </div>
        <div class="w-1/4">
          <h5 class="mb-3 font-semibold">{{ $t("help.title") }}</h5>
          <ul class="inter">
            <li class="w-fit">
              <a href="" class="animated-link">{{ $t("help.topics") }}</a>
            </li>
            <li class="w-fit">
              <a href="" class="animated-link">{{ $t("help.Contact") }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full flex py-4 border-b justify-between items-center">
        <div>
          <ul class="flex gap-2">
            <li>
              <a href="" class="px-3 py-1 border rounded-lg text-sm"
                ><i class="fa-brands fa-facebook-f"></i
              ></a>
            </li>
            <li>
              <a href="" class="px-2 py-1 border rounded-lg text-sm"
                ><i class="fa-brands fa-twitter"></i
              ></a>
            </li>
            <li>
              <a href="" class="px-2 py-1 border rounded-lg text-sm"
                ><i class="fa-brands fa-instagram"></i
              ></a>
            </li>
            <li>
              <a href="" class="px-2 py-1 border rounded-lg text-sm"
                ><i class="fa-brands fa-youtube"></i
              ></a>
            </li>
          </ul>
        </div>
        <div class="flex gap-1 justify-between contryInfo">
          <div>
            <base-combobox
              :data="countries"
              v-model="country"
              class="bg-white h-10 bg-boxShadow-custom !w-[90%]"
              :placeholder="'Country'"
            />
          </div>
          <div>
            <base-combobox
              :data="countries"
              v-model="country"
              class="bg-white h-10 bg-boxShadow-custom !w-[90%]"
              :placeholder="'Currency'"
            />
          </div>
        </div>
      </div>
      <div class="w-full text-center py-5 inter text-xs text-customGray-500">
        <p>
          Copyright 2017 NichoShop Inc. All rights reserved.
          <span class="text-primary-100">User agreement</span>,
          <span class="text-primary-100">Privacy</span> and
          <span class="text-primary-100">Cookies</span>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.contryInfo .k-input-lg .k-input-button.k-button-solid-base {
  background: none !important;
}
.contryInfo .k-button-solid-base {
  border: none !important;
  border-inline-start-width: 0px !important;
}
.animated-link::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: #000;
  transition: width 0.3s;
}

.animated-link:hover::after {
  width: 100%;
}
</style>
