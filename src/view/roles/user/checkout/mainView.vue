<template>
  <div v-if="check">
    <div class="px-28 py-8">
      <div>
        <div class="w-full text-sm">
          <p>
            <span class="text-customGray-500">Shipment ID</span>
            <span> NEGFHJSNKN0-S1 </span>
          </p>
        </div>
        <div class="flex mt-10 justify-between gap-20">
          <div class="max-w-1/5">
            <h1 class="text-xl mb-3">Delivery address</h1>
            <h4 class="text-lg mb-3">Sara Tarek</h4>
            <div class="text-sm text-customGray-500 flex flex-col gap-2">
              <p>2 Saviy road</p>
              <p>Reading, Berkshire RB3 7LU</p>
              <p>United Kingdom</p>
              <p>Phone: 12 3456 78900</p>
            </div>
            <div class="mt-3">
              <base-button
                :size="'large'"
                class="!bg-white !text-primary-500 !rounded-md !px-5 !border-none !hover:bg-none"
                @click="toggleDialog"
                >Update address</base-button
              >
            </div>
          </div>
          <div class="max-w-2/5 overflow-hidden">
            <h1 class="text-xl mb-3">Pay with</h1>
            <div class="w-[85%] h-fit flex gap-10 overflow-hidden">
              <Card :selected="true" />
              <Card :selected="false" />
              <Card :selected="true" />
              <Card :selected="false" />
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-between gap-20">
        <div class="basis-4/6 border-t pt-6">
          <productCard />
        </div>
        <div class="basis-2/6">
          <summarycomponent :content="'Place Order'" @confirm="confirm" />
        </div>
      </div>
    </div>
    <k-dialog v-if="visibleDialog" :title="''" @close="toggleDialog">
      <div class="w-full flex text-lg pb-3 border-b justify-end gap-20">
        <h1>Update Address</h1>
        <div @click="toggleDialog" class="cursor-pointer">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div class="my-5 pb-3 border-b">
        <div class="flex items-center gap-8">
          <radiobutton
            :name="'group1'"
            :value="'first'"
            :checked="selectedValue === 'first'"
            @change="handleChange"
            :label="''"
          />
          <div class="text-sm text-customGray-500">
            <p class="text-black text-lg mb-2">Sara Tarek</p>
            <p>SUNNYVALE CA 98765-4321</p>
            <p>1234 EL CAMINO REAL,America</p>
            <p>
              <span class="">Phone:</span>
              +1234-5678-900
            </p>
          </div>
        </div>
      </div>
      <dialog-actions-bar>
        <base-button
          :size="'large'"
          class="!bg-primary-500 !text-white !rounded-md !px-5 !w-[70%] my-5"
          @click="toggleDialog"
          >Continue</base-button
        >
      </dialog-actions-bar>
    </k-dialog>
  </div>
  <div
    class="px-28 py-8 flex justify-center items-center flex-col"
    v-if="!check"
  >
    <img :src="checkicon" alt="check icon" />
    <h1 class="text-xl my-3">Thank you!</h1>
    <p class="my-1 text-lg">Your order has been placed.</p>
    <p class="my-1 text-sm">We’ve sent you a confirmation email.</p>
    <p class="my-1 text-sm">Order ID: <span>#12345678-123456</span></p>
    <p class="my-1 text-sm">
      Est. delivery:
      <span class="font-semibold">Sat.Apr. 18 and Wed. May. 6</span>
    </p>
  </div>
</template>

<script>

import Card from "../../../../components/roles/user/paymentCard/paymentCard.vue";
import productCard from "../../../../components/roles/user/cart/card/card.vue";
import summarycomponent from "../../../../components/roles/user/summary/summary.vue";
import checkicon from "../../../../assets/img/Checkicon.png";
export default {
  components: {
    Card,
    summarycomponent,
    productCard,
  },
  data() {
    return {
      checkicon,
      visibleDialog: false,
      check: true,
    };
  },
  methods: {
    toggleDialog() {
      this.visibleDialog = !this.visibleDialog;
    },
    confirm() {
      setTimeout(() => {
        this.check = false;
      }, 1000);
      this.check = true;
    },
  },
};
</script>

<style>
.k-dialog-wrapper .k-dialog {
  width: 22%;
  height: 60%;
  border-radius: 18px;
}
.k-dialog-actions {
  border: none !important;
}
</style>
