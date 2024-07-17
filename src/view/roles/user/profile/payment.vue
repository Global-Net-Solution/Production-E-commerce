<template>
  <div class="w-full payment">
    <div>
      <h1 class="text-2xl mb-8">Payment Method</h1>
    </div>
    <div class="w-full flex gap-8">
      <Card :selected="true" />
      <Card :selected="false" />
    </div>
    <div>
      <base-button
        :size="'large'"
        class="!bg-primary-500 !text-white !rounded-md !px-10 mt-5"
        @click="toggleDialog"
      >
        <i class="fa-solid fa-plus"></i> Add Payment method</base-button
      >
    </div>
    <k-dialog v-if="visibleDialog" :title="''" @close="toggleDialog">
      <div class="w-full text-black">
        <div>
          <h1 class="text-2xl mb-3">Pay with</h1>
          <p class="mb-5">Credit or Debit Cards</p>
          <p>NichoShop accepts all major credit and debit cards.</p>
        </div>
        <div class="w-1/2 mt-5">
          <ul class="w-full flex gap-3">
            <li class="border px-2 py-2 flex justify-center items-center w-16">
              <img :src="visa" alt="img" />
            </li>
            <li class="border px-2 py-2 flex justify-center items-center w-16">
              <img :src="masterCard" alt="img" />
            </li>
          </ul>
        </div>
        <hr class="my-5" />
        <div>
          <h1 class="text-xl mb-3">Add a card</h1>
        </div>
      </div>
      <dialog-actions-bar>
        <base-button
          :size="'large'"
          class="!bg-primary-500 !text-white !rounded-md !px-20 !w-1/2"
          >Add</base-button
        >
        <base-button
          :size="'large'"
          class="!bg-white !border !border-primary-500 !rounded-md !text-primary-500 !px-20 !w-1/2"
          @click="toggleDialog"
        >
          Cancel</base-button
        >
      </dialog-actions-bar>
    </k-dialog>
  </div>
</template>

<script>
import Card from "../../../../components/roles/user/paymentCard/paymentCard.vue";
import visa from "../../../../assets/img/visa-logo.svg";
import masterCard from "../../../../assets/img/mastercard.svg";
export default {
  components: {
    Card,
  },
  data() {
    return {
      visibleDialog: false,
      visa,
      masterCard,
    };
  },
  methods: {
    toggleDialog() {
      this.visibleDialog = !this.visibleDialog;
    },
  },
};
</script>

<style>
.payment .k-dialog-wrapper .k-dialog {
  width: 45%;
  height: 70%;
  border-radius: 18px;
}
</style>
