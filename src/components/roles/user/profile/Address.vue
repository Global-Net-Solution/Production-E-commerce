<template>
  <div
    class="flex items-center justify-between border-b pb-5 mb-5"
    :class="{ ' border-b': last }"
  >
    <div class="flex items-center gap-8" v-if="!update">
      <radiobutton
        :name="'group1'"
        :value="'first'"
        :checked="selectedValue === 'first'"
        @change="handleChange"
        :label="''"
      />
      <div class="text-sm text-customGray-500">
        <p>Sara Tarek</p>
        <p>SUNNYVALE CA 98765-4321</p>
        <p>1234 EL CAMINO REAL,America</p>
        <p>
          +1234-5678-900
          <span class="text-validationColors-sucess">Verified</span>
        </p>
      </div>
    </div>
    <div v-if="!update">
      <base-button
        :size="'large'"
        class="!bg-none !text-primary-500 !rounded-md !px-5 !border-none !hover:bg-none"
        @click="Update"
        >Edit</base-button
      >
    </div>
    <div class="flex flex-col w-full" v-if="update">
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
        v-if="update"
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
</template>

<script>
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
import useValidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  props: {
    last: Boolean,
  },
  components: {
    MazPhoneNumberInput,
  },
  data: function () {
    return {
      update: false,
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
  methods: {
    handleChange: function (e) {
      this.selectedValue = e.value;
    },
    Update() {
      this.update = true;
    },
    cancel() {
      this.update = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
