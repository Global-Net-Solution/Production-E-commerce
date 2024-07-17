<template>
  <div class="px-28 py-8 tooltip">
    <div class="w-full">
      <div>
        <div class="flex gap-3">
          <p class="text-xl">
            <span class="font-extralight">Shipment ID : </span>N3354654654526
          </p>
          <div class="flex justify-between items-center tooltip">
            <Tooltip
              :anchor-element="'target'"
              :open="open"
              :target-element="targetElement"
              :open-delay="1"
              :append-to="wrapper"
              :position="'top'"
            >
              <div ref="wrapper"  class="">
                <p class="">
                  <a
                  class="!w-10"
                    ref="SecoundElement"
                    title="Copied"
                  >
                  </a>
                  <base-button @click="Copy($refs.SecoundElement)" class="!bg-white !border-0 ">
                    <div class="w-8 h-8 flex">
                      <i class="fa-regular fa-copy text-primary-500"></i>
                    </div>
                  </base-button>
                </p>
              </div>
            </Tooltip>
          </div>
        </div>
        <div class="w-full flex justify-between items-center">
          <h1 class="my-5">
            Delivery Address <span class="text-customGray-400">(Home)</span>
          </h1>
          <base-button
            :size="'large'"
            class="!bg-primary-200 !border-0 !rounded-md !text-primary-500 !px-10"
            @click="toggleDialog"
          >
            Update Address</base-button
          >
        </div>
        <div class="text-sm text-customGray-500 my-3">
          <p>Sara Tarek</p>
          <p>SUNNYVALE CA 98765-4321</p>
          <p>1234 EL CAMINO REAL,America</p>
          <p>
            +1234-5678-900
            <span class="text-validationColors-sucess">Verified</span>
          </p>
        </div>
      </div>
    </div>
    <div class="w-full pb-10">
      <div class="w-full flex justify-end pb-10">
        <base-button
          :size="'large'"
          class="!bg-primary-200 !border-0 !rounded-md !text-primary-500 !px-10"
          @click="toggleShipmentDialog"
        >
          Reschedule order</base-button
        >
      </div>
      <shipping-steps
        :steps="steps"
        :current-step="currentStep"
      ></shipping-steps>
    </div>
    <div class="w-full">
      <h1 class="w-full bg-customGray-300 px-2 py-3 text-sm">
        Item(s) Summary
      </h1>
      <div class="w-full py-10 flex justify-start">
        <div class="w-1/2">
          <div class="flex justify-between items-center py-5">
            <div class="flex gap-5 items-center">
              <div>
                <img
                  :src="product"
                  alt="product"
                  class="w-20 h-20 rounded-lg object-cover"
                />
              </div>
              <div class="flex flex-col justify-between h-1/2">
                <p>Black Printed T-shirt</p>
                <div class="flex gap-2 text-xs text-customGray-500">
                  <p>Color : Pink</p>
                  <p>| Qty : 1 |</p>
                  <p>$100</p>
                </div>
              </div>
            </div>
            <div>
              <p>$2599.00</p>
              <p class="text-xs text-customGray-500">Oty: 1</p>
            </div>
          </div>
          <div class="flex justify-between items-center py-5">
            <div class="flex gap-5 items-center">
              <div>
                <img
                  :src="product"
                  alt="product"
                  class="w-20 h-20 rounded-lg object-cover"
                />
              </div>
              <div class="flex flex-col justify-between h-1/2">
                <p>Black Printed T-shirt</p>
                <div class="flex gap-2 text-xs text-customGray-500">
                  <p>Color : Pink</p>
                  <p>| Qty : 1 |</p>
                  <p>$100</p>
                </div>
              </div>
            </div>
            <div>
              <p>$2599.00</p>
              <p class="text-xs text-customGray-500">Oty: 1</p>
            </div>
          </div>
          <div class="flex justify-between items-center py-5">
            <div class="flex gap-5 items-center">
              <div>
                <img
                  :src="product"
                  alt="product"
                  class="w-20 h-20 rounded-lg object-cover"
                />
              </div>
              <div class="flex flex-col justify-between h-1/2">
                <p>Black Printed T-shirt</p>
                <div class="flex gap-2 text-xs text-customGray-500">
                  <p>Color : Pink</p>
                  <p>| Qty : 1 |</p>
                  <p>$100</p>
                </div>
              </div>
            </div>
            <div>
              <p>$2599.00</p>
              <p class="text-xs text-customGray-500">Oty: 1</p>
            </div>
          </div>
        </div>
        <div class="w-1/2 h-10 flex justify-end">
          <base-button
            :size="'large'"
            class="!bg-primary-200 !border-0 !rounded-md !text-primary-500 !px-10"
            @click="toggleCancelDialog"
          >
            Cancel Shipment</base-button
          >
        </div>
      </div>
    </div>
  </div>
  <k-dialog v-if="visibleDialog" :title="''" @close="toggleDialog">
    <div class="w-full">
      <div class="w-full">
        <div class="w-full flex justify-end">
          <div
            @click="toggleDialog"
            class="cursor-pointer w-5 h-5 rounded-full bg-customGray-700 flex justify-center items-center p-2"
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div class="w-full flex justify-center">
          <h1 class="text-black font-semibold mt-1 text-lg">Are you sure?</h1>
        </div>
      </div>
    </div>
    <div class="my-4 pb-1 border-b">
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
    <div class="my-4 pb-1 border-b">
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
    <div class="my-4 pb-1 border-b">
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
        class="!bg-white !border !border-primary-500 !text-primary-500 !rounded-md !px-5 !w-[70%] my-5"
        @click="toggleDialog"
        >Cancel</base-button
      >
      <base-button
        :size="'large'"
        class="!bg-primary-500 !text-white !rounded-md !px-5 !w-[70%] my-5"
        @click="toggleDialog"
        >Continue</base-button
      >
    </dialog-actions-bar>
  </k-dialog>
  <k-dialog
    v-if="cancelDialog"
    :title="''"
    @close="toggleCancelDialog"
    class="cancelDialog"
  >
    <div class="w-full">
      <div class="w-full flex justify-end">
        <div
          @click="toggleCancelDialog"
          class="cursor-pointer w-5 h-5 rounded-full bg-customGray-700 flex justify-center items-center p-2"
        >
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div class="w-full flex justify-center">
        <h1 class="text-black font-semibold mt-3 text-lg">Are you sure?</h1>
      </div>
    </div>
    <div class="mt-6">
      <div
        class="flex items-center gap-8 flex-col text-center justify-center text-black"
      >
        <p>
          As your items have been packed, all items in this shipment will be
          canceled
        </p>
        <p>this may take a few minutes to reflect on the app</p>
      </div>
    </div>
    <dialog-actions-bar>
      <base-button
        :size="'large'"
        class="!bg-primary-500 !text-white !rounded-md !px-5 !w-[70%] my-5"
        @click="toggleCancelDialog"
        >Cancel</base-button
      >
    </dialog-actions-bar>
  </k-dialog>
  <k-dialog
    v-if="shipmentDialog"
    :title="''"
    @close="toggleShipmentDialog"
    class="shipmentDialog"
  >
    <div class="w-full flex flex-col gap-2 px-8 py-3 bg-customGray-300">
      <h1 class="text-black font-bold">
        <i class="fa-regular fa-clock mr-2"></i> Reschedule delivery date
      </h1>
      <p class="text-sm">once rescheduled you can not undo</p>
    </div>
    <div class="mt-6">
      <div class="flex gap-3 p-3">
        <div
          v-for="date in dates"
          :key="date.id"
          class="flex flex-col gap-3 rounded-2xl items-center text-customGray-600 cursor-pointer w-20 px-5 py-2 justify-center"
          :style="{
            backgroundColor: selectedDate === date.id ? '#0072BC' : '',
            color: selectedDate === date.id ? '#fff' : '',
          }"
          @click="selectDate(date.id)"
        >
          <p>{{ date.day }}</p>
          <p>{{ date.shortName }}</p>
        </div>
      </div>
    </div>
    <dialog-actions-bar>
      <base-button
        :size="'large'"
        class="!bg-white !text-primary-500 !border-primary-500 !rounded-md !px-5 my-5"
        @click="toggleShipmentDialog"
        >Cancel</base-button
      >
      <base-button
        :size="'large'"
        class="!bg-primary-500 !text-white !rounded-md !px-5 my-5"
        @click="toggleShipmentDialog"
        >Confirm</base-button
      >
    </dialog-actions-bar>
  </k-dialog>
</template>

<script>
import ShippingSteps from "../../../../components/roles/user/shipping/shipping.vue";
import {Dialog, DialogActionsBar} from "@progress/kendo-vue-dialogs";
import product from "../../../../assets/img/productImg2.jpeg";
import {Tooltip} from "@progress/kendo-vue-tooltip";
export default {
  components: {
    ShippingSteps,
    "k-dialog": Dialog,
    "dialog-actions-bar": DialogActionsBar,
    Tooltip,
  },
  data() {
    return {
      steps: [
        "Order Placed",
        "Processing",
        "Shipped",
        "Out for Delivery",
        "Delivered",
      ],
      currentStep: 0,
      product,
      visibleDialog: false,
      cancelDialog: false,
      shipmentDialog: false,
      selectedDate: null,
      selectedValue: "first",
      dates: [
        {id: 1, day: 12, shortName: "Tue"},
        {id: 2, day: 13, shortName: "Wed"},
        {id: 3, day: 14, shortName: "Thu"},
        {id: 4, day: 15, shortName: "Fri"},
        {id: 5, day: 16, shortName: "Sat"},
        {id: 6, day: 17, shortName: "Sun"},
        {id: 7, day: 18, shortName: "Mon"},
      ],
      wrapper: this.$refs.wrapper,
      open: false,
      targetElement: null,
    };
  },
  methods: {
    toggleDialog() {
      this.visibleDialog = !this.visibleDialog;
    },
    toggleCancelDialog() {
      this.cancelDialog = !this.cancelDialog;
    },
    toggleShipmentDialog() {
      this.shipmentDialog = !this.shipmentDialog;
    },
    selectDate(dateId) {
      this.selectedDate = dateId;
    },
    Copy(element) {
      console.log(element)
      this.open = true;
      // navigator.clipboard.writeText(this.key);
      this.showTooltip(element);
    },
    showTooltip(element) {
      let that = this;
      setTimeout(() => {
        that.open = false;
      }, 400);
      this.open = true;
      this.targetElement = element;
      // console.log(element.text);
    },
  },
};
</script>

<style scoped>
.cancelDialog.k-dialog-wrapper .k-dialog {
  width: 31%;
  height: 30%;
  overflow: hidden;
}
.shipmentDialog.k-dialog-wrapper .k-dialog {
  width: 30%;
  height: 33%;
  overflow: hidden;
}
cancelDialog .k-window-content {
  overflow: hidden;
}
.shipmentDialog .k-actions-stretched > * {
  flex: 0;
}
.shipmentDialog .k-dialog-actions {
  justify-content: flex-end;
}
.tooltip .k-animation-container {
  width: fit-content
}
</style>
