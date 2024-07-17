<template>
  <div class="contryInfo">
    <div class="w-full flex justify-between items-center">
      <h3 class="text-2xl font-semibold mb-10">Addresses</h3>
      <base-button
        :size="'large'"
        class="!bg-primary-500 !text-white !rounded-md !px-5"
        @click="Add"
        >Add new Address</base-button
      >
    </div>
    <div class="w-full flex flex-col">
      <div class="flex flex-col w-full" v-if="add">
        <div class="flex gap-10 w-full">
          <div class="mb-5 mt-3 flex flex-col w-[30%]">
            <base-label class="text-sm"> Country </base-label>
            <base-combobox
              :data="countries"
              v-model="country"
              class="bg-white h-12 !rounded-xl bg-boxShadow-custom !w-[100%]"
              :placeholder="'Country'"
            />
            <div
              class="text-validationColors-error text-xs"
              v-if="this.v$?.formData.name.$error"
            >
              {{ this.v$?.formData.name.$errors[0]?.$message }}
            </div>
          </div>
          <div class="mb-5 mt-3 flex flex-col w-[33%]">
            <base-label class="text-sm"> Full name </base-label>
            <KInput
              v-model="formData.name"
              type="email"
              class="bg-white h-12 !rounded-xl !w-full !px-2"
              :class="{
                'outline outline-validationColors-error outline-1':
                  this.v$?.formData.name.$error,
              }"
              :placeholder="'eg. Suhila Khaled'"
              @inputEnter="signIn"
            />
            <div
              class="text-validationColors-error text-xs"
              v-if="this.v$?.formData.name.$error"
            >
              {{ this.v$?.formData.name.$errors[0]?.$message }}
            </div>
          </div>
          <div class="mb-5 mt-3 flex flex-col w-[30%]">
            <base-label class="text-sm"> Address </base-label>
            <KInput
              v-model="formData.name"
              type="email"
              class="bg-white h-12 !rounded-xl !w-full !px-2"
              :class="{
                'outline outline-validationColors-error outline-1':
                  this.v$?.formData.name.$error,
              }"
              :placeholder="'eg. Suhila Khaled'"
              @inputEnter="signIn"
            />
            <div
              class="text-validationColors-error text-xs"
              v-if="this.v$?.formData.name.$error"
            >
              {{ this.v$?.formData.name.$errors[0]?.$message }}
            </div>
          </div>
        </div>
        <div class="flex gap-10 w-full">
          <div class="mb-5 mt-3 flex flex-col w-[30%]">
            <base-label class="text-sm"> State </base-label>
            <base-combobox
              :data="countries"
              v-model="country"
              class="bg-white h-12 !rounded-xl bg-boxShadow-custom !w-[100%]"
              :placeholder="'Country'"
            />
            <div
              class="text-validationColors-error text-xs"
              v-if="this.v$?.formData.name.$error"
            >
              {{ this.v$?.formData.name.$errors[0]?.$message }}
            </div>
          </div>
          <div class="mb-5 mt-3 flex flex-col w-[33%]">
            <base-label class="text-sm"> City </base-label>
            <KInput
              v-model="formData.name"
              type="email"
              class="bg-white h-12 !rounded-xl !w-full !px-2"
              :class="{
                'outline outline-validationColors-error outline-1':
                  this.v$?.formData.name.$error,
              }"
              :placeholder="'eg. Suhila Khaled'"
              @inputEnter="signIn"
            />
            <div
              class="text-validationColors-error text-xs"
              v-if="this.v$?.formData.name.$error"
            >
              {{ this.v$?.formData.name.$errors[0]?.$message }}
            </div>
          </div>
          <div class="mb-5 mt-3 flex flex-col w-[30%]">
            <base-label class="text-sm"> Address 2 </base-label>
            <KInput
              v-model="formData.name"
              type="email"
              class="bg-white h-12 !rounded-xl !w-full !px-2"
              :class="{
                'outline outline-validationColors-error outline-1':
                  this.v$?.formData.name.$error,
              }"
              :placeholder="'eg. Suhila Khaled'"
              @inputEnter="signIn"
            />
            <div
              class="text-validationColors-error text-xs"
              v-if="this.v$?.formData.name.$error"
            >
              {{ this.v$?.formData.name.$errors[0]?.$message }}
            </div>
          </div>
        </div>
        <div class="flex gap-10 w-full">
          <div class="mb-5 mt-3 flex flex-col w-[30%]">
            <base-label class="text-sm"> Zip code </base-label>
            <KInput
              v-model="formData.name"
              type="email"
              class="bg-white h-12 !rounded-xl !w-full !px-2"
              :class="{
                'outline outline-validationColors-error outline-1':
                  this.v$?.formData.name.$error,
              }"
              :placeholder="'eg. Suhila Khaled'"
              @inputEnter="signIn"
            />
            <div
              class="text-validationColors-error text-xs"
              v-if="this.v$?.formData.name.$error"
            >
              {{ this.v$?.formData.name.$errors[0]?.$message }}
            </div>
          </div>
          <div class="mb-5 mt-3 flex flex-col w-[30%]">
            <base-label class="text-sm"> Address 2 </base-label>
            <MazPhoneNumberInput
              :exclude-selectors="['#input-flag-element']"
              v-model="formData.mobileNumber"
              v-model:country-code="countryCode"
              @update="handlePhoneNumberUpdate"
            >
              <template #selector-flag="{ countryCode }">
                <span
                  id="input-flag-element"
                  style="
                    width: 100%;
                    font-size: 0.8rem;
                    background-color: var(--maz-color-secondary);
                    color: var(--maz-color-secondary-contrast);
                    border-radius: 100px;
                    padding: 2px;
                  "
                >
                  {{ countryCode }}
                </span>
              </template>
              <template #country-list-flag="{ countryCode }">
                <MazBadge size="0.8rem" style="margin-right: 10px; width: 26px">
                  {{ countryCode }}
                </MazBadge>
              </template>
            </MazPhoneNumberInput>
            {{ formData.phoneNumber }}
            <base-error
              v-if="this.v$.formData.mobileNumber.$error"
              class="error-message text-validationColors-error text-xs font-semibold absolute"
            >
              {{ this.v$.formData.mobileNumber.$errors[0].$message }}
            </base-error>
          </div>
        </div>
        <div
          class="w-full flex gap-5 mt-2 items-center justify-center"
          v-if="add"
        >
          <base-button
            :size="'large'"
            class="!bg-white !border !border-primary-500 !rounded-md !text-primary-500 !px-5"
            @click="cancel"
          >
            Cancel</base-button
          >
          <base-button
            :size="'large'"
            class="!bg-primary-500 !text-white !rounded-md !px-5"
            >Update</base-button
          >
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col">
      <addressComponent :last="false" />
      <addressComponent :last="false" />
      <addressComponent :last="true" />
    </div>
  </div>
</template>

<script>
import addressComponent from "../../../../components/roles/user/profile/Address.vue";
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
import useValidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
export default {
  data() {
    return {
      add: false,
      selectedValue: "first",
      v$: useValidate(),
      formData: {
        name: null,
        password: null,
        mobileNumber: null,
      },
      passwordType: "password",
      isEmptyPass: true,
    };
  },
  validations: {
    formData: {
      name: { required, email },
      password: { required },
      mobileNumber: { required },
    },
  },
  components: {
    addressComponent,
    MazPhoneNumberInput,
  },
  methods: {
    Add() {
      this.add = true;
    },
    cancel() {
      this.add = false;
    },
  },
};
</script>

<style>
.k-radio:checked,
.k-radio.k-checked {
  border-color: #000 !important;
  background-color: #000 !important;
}
:focus {
  box-shadow: none !important;
}
</style>
