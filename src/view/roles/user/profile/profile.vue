<template>
  <div class="w-full info">
    <div>
      <h1 class="text-2xl mb-8">My Profile</h1>
      <p>information</p>
      <div class="w-full flex justify-between items-center my-2">
        <div>
          <p class="text-customGray-500 text-sm">Nickname</p>
          <p class="text-sm" v-if="!updateName">{{ nickName }}</p>
          <KInput
            v-if="updateName"
            class="w-full mt-3 !bg-white"
            :size="'small'"
            :class="'custom-input'"
            :placeholder="'Enter Your Nickname.'"
            :rounded="'large'"
          ></KInput>
        </div>
        <div v-if="!updateName">
          <base-button
            :size="'large'"
            class="!bg-none !text-primary-500 !rounded-md !px-5 !border-none !hover:bg-none"
            @click="UpdateNickName"
            >Edit</base-button
          >
        </div>
        <div class="flex gap-5 mt-2 items-center" v-if="updateName">
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
      <div class="w-full">
        <PanelBar :expand-mode="'single'" :items="items">
          <template v-slot:first>
            <div class="px-10 w-1/2">
              <div class="my-4">
                <h1>Which are your favorite Categories?</h1>
                <div class="text-xs mt-3">
                  <ul class="flex gap-2">
                    <li
                      v-for="(Category, index) in Categories"
                      :key="index"
                      class="px-2 py-1 bg-white basis-1/6 cursor-pointer"
                      :class="{
                        'border border-primary-500 text-primary-500':
                          selectedIndex === index,
                      }"
                      @click="selectItem(index)"
                    >
                      {{ Category }}
                    </li>
                  </ul>
                </div>
                <div class="flex gap-5 mt-10 items-center">
                  <base-button
                    :size="'large'"
                    class="!bg-white !border !border-primary-500 !rounded-md !text-primary-500 !px-5"
                  >
                    Cancel</base-button
                  >
                  <base-button
                    :size="'large'"
                    class="!bg-primary-500 !text-white !rounded-md !px-5"
                    >Save changes</base-button
                  >
                </div>
              </div>
            </div>
          </template>
        </PanelBar>
      </div>
      <div class="w-full mt-3">
        <p class="text-xs text-customGray-500">
          We will keep the information you filled in above confidential.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { PanelBar } from "@progress/kendo-vue-layout";
export default {
  components: {
    PanelBar,
  },
  data() {
    return {
      nickName: "saratarekxx",
      updateName: false,
      items: [
        {
          title: "Preference (Categories & Sub Categories)",
          content: "first",
          expanded: false,
        },
      ],
      selectedIndex: null,
      Categories: [
        "Electronics",
        "Electronics",
        "Electronics",
        "Electronics",
        "Electronics",
        "Electronics",
      ],
    };
  },
  methods: {
    UpdateNickName() {
      this.updateName = true;
    },
    cancel() {
      this.updateName = false;
    },
    selectItem(index) {
      this.selectedIndex = index;
    },
  },
};
</script>

<style>
.k-panelbar-item-text {
  color: #000;
}
.k-panelbar {
  background-color: transparent !important;
  border-left: none !important;
  border-right: none !important;
  padding: 10px !important;
  color: #000 !important;
}
.k-panelbar > .k-panelbar-header > .k-link.k-selected {
  background-color: transparent !important;
  color: #000 !important;
}
input.k-input {
  background-color: white !important;
  border-color: #eaeaea !important;
  border-width: 1px !important;
}
</style>
