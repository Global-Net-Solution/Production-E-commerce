<template>
  <div class="w-full flex flex-col items-center my-10">
    <div class="text-center">
      <h1 class="text-xl font-semibold">Hi Sara. How can we help you ?</h1>
      <p>Contact us</p>
    </div>
    <div class="mt-10 text-center">
      <p>What can we help you with today? Please select one</p>
      <div class="w-full flex gap-5 mt-2 justify-center">
        <base-button
          :size="'large'"
          class="!bg-white !border !border-primary-500 !rounded-md !text-primary-500 !px-10"
          @click="GotoCart"
        >
          Buying</base-button
        >
        <base-button
          :size="'large'"
          class="!bg-white !border !border-primary-500 !rounded-md !text-primary-500 !px-10"
          @click="GotoCart"
        >
          returning</base-button
        >
        <base-button
          :size="'large'"
          class="!bg-white !border !border-primary-500 !rounded-md !text-primary-500 !px-10"
          @click="GotoCart"
        >
          Account</base-button
        >
      </div>
    </div>
    <div class="mt-10">
      <p>Select the topic you need help with.</p>
      <div class="mt-6 flex flex-col gap-3">
        <label class="text-xs text-customGray-500">Support topic</label>
        <base-autocomplete
          :style="{ width: '600px' }"
          :size="'small'"
          :class="'custom-input'"
          :placeholder="'Please make a selection'"
          :rounded="'medium'"
          class=""
        ></base-autocomplete>
      </div>
    </div>
    <div class="">
      <p class="w-full text-center my-5">
        What can we help you with today? Please select one
      </p>
      <div class="flex flex-wrap max-w-[600px] justify-between">
        <div
          class="flex items-center gap-5 border !border-primary-500 rounded-md px-3 py-5 basis-[49%] mb-5"
        >
          <div>
            <div
              class="w-14 h-14 bg-primary-200 rounded-full flex justify-center items-center"
            >
              <img :src="call1" alt="call" />
            </div>
          </div>
          <div>
            <p class="text-primary-500 font-semibold">Call us</p>
            <p class="text-xs text-customGray-500">Estimated waiting time:</p>
            <p class="text-xs text-customGray-800">1 minute</p>
          </div>
        </div>
        <div
          class="flex items-center gap-5 border !border-primary-500 rounded-md px-3 py-5 basis-[49%] mb-5"
        >
          <div>
            <div
              class="w-14 h-14 bg-primary-200 rounded-full flex justify-center items-center"
            >
              <img :src="call2" alt="call" />
            </div>
          </div>
          <div>
            <p class="text-primary-500 font-semibold">Have us call you</p>
            <p class="text-xs text-customGray-500">Estimated waiting time:</p>
            <p class="text-xs text-customGray-800">42 minute</p>
          </div>
        </div>
        <div
          class="flex items-center gap-5 border !border-primary-500 rounded-md px-3 py-5 basis-[49%] mb-5"
        >
          <div>
            <div
              class="w-14 h-14 bg-primary-200 rounded-full flex justify-center items-center"
            >
              <img :src="chat" alt="chat" />
            </div>
          </div>
          <div>
            <p class="text-primary-500 font-semibold">Chat</p>
            <p class="text-xs text-customGray-500">Estimated waiting time:</p>
            <p class="text-xs text-customGray-800">4 minute</p>
          </div>
        </div>
        <div
          class="flex items-center gap-5 border !border-primary-500 rounded-md px-3 py-5 basis-[49%] mb-5"
        >
          <div>
            <div
              class="w-14 h-14 bg-primary-200 rounded-full flex justify-center items-center"
            >
              <img :src="email" alt="call" />
            </div>
          </div>
          <div>
            <p class="text-primary-500 font-semibold">Call us</p>
            <p class="text-xs text-customGray-500">Estimated waiting time:</p>
            <p class="text-xs text-customGray-800">24 hours</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import call1 from "../../../../assets/icons/call-1.svg";
import call2 from "../../../../assets/icons/call-2.svg";
import chat from "../../../../assets/icons/chat.svg";
import email from "../../../../assets/icons/email.svg";
export default {
  data() {
    return {
      call1,
      call2,
      chat,
      email,
    };
  },
};
</script>

<style></style>
