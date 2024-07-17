<template>
  <div>
    <div>
      <div class="w-full flex justify-between items-center">
        <h1 class="text-2xl mb-8">Profile information</h1>
        <div v-if="!update">
          <base-button
            :size="'large'"
            class="!bg-none !text-primary-500 !rounded-md !px-5 !border-none !hover:bg-none"
            @click="Update"
            >Edit</base-button
          >
        </div>
      </div>
      <div>
        <div class="w-full flex justify-between my-2 flex-col">
          <div class="w-1/3 mb-5">
            <p class="text-customGray-500 text-sm">Full name</p>
            <p class="text-sm" v-if="!update">{{ FullName }}</p>
            <KInput
              v-if="update"
              class="w-full mt-3"
              :size="'small'"
              :class="'custom-input'"
              :placeholder="'Enter Your name.'"
              :rounded="'large'"
            ></KInput>
          </div>
          <div class="w-1/3 mb-5">
            <p class="text-customGray-500 text-sm">Email address</p>
            <p class="text-sm">{{ Email }}</p>
          </div>
          <div class="w-1/3 mb-5">
            <p class="text-customGray-500 text-sm" v-if="!update">Password</p>
            <p class="text-sm" v-if="!update">********</p>
            <div v-if="update">
              <div class="flex flex-col mb-5">
                <p class="text-customGray-500 text-sm">Current Password</p>
                <div class="relative">
                  <KInput
                    v-model="formData.password"
                    class="w-full mt-3 custom-input"
                    :size="'small'"
                    :rounded="'large'"
                    :type="passwordType"
                    :class="{
                      'outline outline-validationColors-error outline-1':
                        this.v$.formData.password.$error,
                    }"
                    :placeholder="'Enter Your Password.'"
                    @inputEnter="signIn"
                  />
                  <div
                    class="text-validationColors-error text-xs"
                    v-if="this.v$.formData.password.$error"
                  >
                    {{ this.v$.formData.password.$errors[0]?.$message }}
                  </div>
                  <div
                    @click="toggleShowPassword"
                    v-if="this.passwordType == 'password' && !isEmptyPass"
                  >
                    <i
                      class="fa-regular fa-eye absolute top-[12px] right-[15px] cursor-pointer z-[99]"
                    />
                  </div>
                  <div
                    @click="toggleShowPassword"
                    v-else-if="this.passwordType == 'text' && !isEmptyPass"
                  >
                    <i
                      class="fa-regular fa-eye-slash absolute top-[12px] right-[15px] cursor-pointer z-[99]"
                    />
                  </div>
                </div>
              </div>
              <div class="mb-5">
                <p class="text-customGray-500 text-sm">New Password</p>
                <div class="relative">
                  <KInput
                    v-model="formData.password"
                    class="w-full mt-3 custom-input"
                    :size="'small'"
                    :rounded="'large'"
                    :type="passwordType"
                    :class="{
                      'outline outline-validationColors-error outline-1':
                        this.v$.formData.password.$error,
                    }"
                    :placeholder="'Enter Your Password.'"
                    @inputEnter="signIn"
                  />
                  <div
                    class="text-validationColors-error text-sm"
                    v-if="this.v$.formData.password.$error"
                  >
                    {{ this.v$.formData.password.$errors[0]?.$message }}
                  </div>
                  <div
                    @click="toggleShowPassword"
                    v-if="this.passwordType == 'password' && !isEmptyPass"
                  >
                    <i
                      class="fa-regular fa-eye absolute top-[12px] right-[15px] cursor-pointer z-[99]"
                    />
                  </div>
                  <div
                    @click="toggleShowPassword"
                    v-else-if="this.passwordType == 'text' && !isEmptyPass"
                  >
                    <i
                      class="fa-regular fa-eye-slash absolute top-[12px] right-[15px] cursor-pointer z-[99]"
                    />
                  </div>
                </div>
              </div>
              <div class="flex flex-col">
                <p class="text-customGray-500 text-sm">Confirm New Password</p>
                <div class="relative">
                  <KInput
                    v-model="formData.password"
                    class="w-full mt-3 custom-input"
                    :size="'small'"
                    :rounded="'large'"
                    :type="passwordType"
                    :class="{
                      'outline outline-validationColors-error outline-1':
                        this.v$.formData.password.$error,
                    }"
                    :placeholder="'Enter Your Password.'"
                    @inputEnter="signIn"
                  />
                  <div
                    class="text-validationColors-error text-xs"
                    v-if="this.v$.formData.password.$error"
                  >
                    {{ this.v$.formData.password.$errors[0]?.$message }}
                  </div>
                  <div
                    @click="toggleShowPassword"
                    v-if="this.passwordType == 'password' && !isEmptyPass"
                  >
                    <i
                      class="fa-regular fa-eye absolute top-[12px] right-[15px] cursor-pointer z-[99]"
                    />
                  </div>
                  <div
                    @click="toggleShowPassword"
                    v-else-if="this.passwordType == 'text' && !isEmptyPass"
                  >
                    <i
                      class="fa-regular fa-eye-slash absolute top-[12px] right-[15px] cursor-pointer z-[99]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-1/3 mb-5">
            <p class="text-customGray-500 text-sm">Phone Number</p>
            <p class="text-sm" v-if="!update">{{ formData.phone }}</p>
            <!-- <KInput
              v-if="update"
              class="w-full mt-3"
              :size="'small'"
              :class="'custom-input'"
              :placeholder="'Enter Your Nickname.'"
              :rounded="'large'"
            ></KInput> -->
            <MazPhoneNumberInput
              v-if="update"
              v-model="phoneNumber"
              v-model:country-code="countryCode"
              show-code-on-list
              :preferred-countries="['FR', 'BE', 'DE', 'US', 'GB']"
              :ignored-countries="['AC']"
              @update="results = $event"
            />
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
  </div>
</template>

<script>
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
import { ref } from "vue";
const phoneNumber = ref();
const countryCode = ref("FR");
const results = ref();
import useValidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
export default {
  components: {
    MazPhoneNumberInput,
  },
  data() {
    return {
      FullName: "User Name",
      Email: "example@domain.com",
      update: false,
      v$: useValidate(),
      formData: {
        username: null,
        password: null,
        phone: "012246563232",
      },
      passwordType: "password",
      isEmptyPass: true,
    };
  },
  validations: {
    formData: {
      username: { required, email },
      password: { required },
    },
  },
  watch: {
    "formData.password"(newvalue) {
      if (newvalue != "") {
        this.isEmptyPass = false;
      } else {
        {
          this.isEmptyPass = true;
          this.passwordType = "password";
        }
      }
    },
  },
  methods: {
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
