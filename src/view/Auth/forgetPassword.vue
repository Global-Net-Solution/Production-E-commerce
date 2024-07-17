<template>
  <div class="flex py-5 justify-between">
    <div
      class="basis-full flex flex-col justify-center items-center sm:basis-full md:basis-full"
    >
      <div class="w-96 h-fit flex items-center px-2 justify-center">
        <div
          class="w-1/2 text-primary-100 py-4 flex justify-center items-center text-xl"
        >
          <h3> Forget Password</h3>
        </div>
      </div>

      <div class="mb-5 mt-3 flex flex-col">
        <base-label class="text-base font-medium"> Email* </base-label>
        <KInput
          v-model="formData.username"
          type="email"
          class="bg-white h-10 rounded-md !w-96 !px-2"
          :class="{
            'outline outline-validationColors-error outline-1':
              this.v$?.formData.username.$error,
          }"
          :placeholder="'eg. Suhila Khaled'"
          @inputEnter="signIn"
        />
        <div
          class="text-validationColors-error text-xs"
          v-if="this.v$?.formData.username.$error"
        >
          {{ this.v$?.formData.username.$errors[0]?.$message }}
        </div>
      </div>

      <base-button
        :size="'large'"
        class="!bg-primary-500 !border !border-primary-500 !rounded-md !text-white w-96"
        @click="signIn"
      >
        Reset Password</base-button
      >
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
import useValidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
export default {
  data: function () {
    return {
      v$: useValidate(),
      formData: {
        username: null,
        password: null,
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
    // ...mapActions(["setRoleStatus"]),

    toggleShowPassword() {
      if (this.passwordType == "password") {
        this.passwordType = "text";
      } else {
        this.passwordType = "password";
      }
    },
    async signIn() {
      this.v$.$validate();
      if (!this.v$.$error) {
        // try {
        //   this.$authService.login(
        //     "Authentication/Login",
        //     {
        //       userName: this.formData.username,
        //       password: this.formData.password,
        //       deviceToken: this.$store.getters.getTokenBrowser,
        //       deviceType: 2,
        //     },
        //     (res) => {
        //       localStorage.setItem("token", res.token);
        //       localStorage.setItem("id", res.id);
        //       localStorage.setItem("gender", res.gender);
        //       localStorage.setItem("userName", res.userName);
        //       this.$store.dispatch("setUserName", res.userName);
        //       if (res.profilePicUrl) {
        //         localStorage.setItem("profilePic", res.profilePicUrl);
        //         this.$store.dispatch("setProfilePic", res.profilePicUrl);
        //       }
        //       localStorage.setItem("userSendNumber", res.userNumber);
        //       localStorage.setItem(
        //         "userSend",
        //         JSON.stringify({
        //           id: res.userNumber,
        //           name: res.userName,
        //           profilePic: res.profilePicUrl,
        //         })
        //       );
        //       res;
        //       this.$store.dispatch("setUserSend", {
        //         id: res.userNumber,
        //         name: res.userName,
        //         profilePic: res.profilePic,
        //       });
        //       localStorage.setItem("roles", res.userType);
        //       this.$store.dispatch("setRoleName", res.userType);
        //       this.$router.push("/");
        //     },
        //     (error) => {
        //       error;
        //     }
        //   );
        // } catch (e) {
        // } finally {
        // }
      }
    },
  },
};
</script>

<style>
.active {
  background: #fff;
  color: #0b80cc;
  height: 80%;
  -webkit-box-shadow: 10px 10px 25px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 10px 10px 25px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 10px 10px 25px 0px rgba(0, 0, 0, 0.2);
}
</style>
