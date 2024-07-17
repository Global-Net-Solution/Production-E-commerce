<template>
  <div class="w-full">
    <div>
      <h1 class="text-2xl mb-8">My Measurements</h1>
      <p class="text-sm mb-3">
        My Measurements helps simplify the process of finding your perfect fit!
        Filling in My Measurements lets you:
      </p>
      <p class="text-primary-500 w-1/2 text-sm">
        Apply your measurements to our size charts Create helpful reviews for
        other buyers to reference
      </p>
    </div>
    <div v-if="!add">
      <base-button
        :size="'large'"
        class="!bg-primary-500 !text-white !rounded-md !px-20 mt-14"
        @click="AddMeasurement"
      >
        <i class="fa-solid fa-plus"></i> Add My Measurements</base-button
      >
    </div>
    <div v-if="add">
      <div class="w-full flex mt-10">
        <div class="basis-1/3 contryInfo">
          <div class="flex justify-between items-center gap-3 mb-10">
            <label for=""> Height</label>
            <base-combobox
              :data="countries"
              v-model="country"
              class="bg-white h-10 bg-boxShadow-custom"
              :placeholder="'Please Select'"
            />
          </div>
          <div class="flex justify-between items-center gap-3 mb-10">
            <label for=""> Weight</label>
            <base-combobox
              :data="countries"
              v-model="country"
              class="bg-white h-10 bg-boxShadow-custom"
              :placeholder="'Please Select'"
            />
          </div>
          <div class="flex justify-between items-center gap-3 mb-10">
            <label for=""> Bust</label>
            <base-combobox
              :data="countries"
              v-model="country"
              class="bg-white h-10 bg-boxShadow-custom"
              :placeholder="'Please Select'"
            />
          </div>
          <div class="flex justify-between items-center gap-3 mb-10">
            <label for=""> Bra Size</label>
            <base-combobox
              :data="countries"
              v-model="country"
              class="bg-white h-10 bg-boxShadow-custom"
              :placeholder="'Please Select'"
            />
          </div>
          <div class="flex justify-between items-center gap-3 mb-10">
            <label for=""> Waist</label>
            <base-combobox
              :data="countries"
              v-model="country"
              class="bg-white h-10 bg-boxShadow-custom"
              :placeholder="'Please Select'"
            />
          </div>
          <div class="flex justify-between items-center gap-3 mb-10">
            <label for=""> Hips</label>
            <base-combobox
              :data="countries"
              v-model="country"
              class="bg-white h-10 bg-boxShadow-custom"
              :placeholder="'Please Select'"
            />
          </div>
          <div class="flex justify-between items-center gap-3 mb-10">
            <label for=""> Preference</label>
            <base-combobox
              :data="countries"
              v-model="country"
              class="bg-white h-10 bg-boxShadow-custom"
              :placeholder="'Please Select'"
            />
          </div>
        </div>
        <div class="basis-2/3 flex px-10 justify-between">
          <div class="w-1/3">
            <img :src="img" alt="" class="w-[600px] h-[620px] object-cover" />
          </div>
          <div class="w-[300px]">
            <div class="mb-10">
              <div class="flex gap-2 items-center mb-2">
                <p class="bg-black text-white rounded-full w-6 h-6 text-center">
                  1
                </p>
                <p>Bust</p>
              </div>
              <p class="text-sm">
                Measure under your arms around the fullest part of your bust.
                Make sure to keep the tape level!
              </p>
            </div>
            <div class="mb-10">
              <div class="flex gap-2 items-center mb-2">
                <p class="bg-black text-white rounded-full w-6 h-6 text-center">
                  2
                </p>
                <p>Waist</p>
              </div>
              <p class="text-sm">
                Make sure the measuring tape fits comfortably as you measure
                around the narrowest part of your natural waist.
              </p>
            </div>
            <div class="mb-10">
              <div class="flex gap-2 items-center mb-2">
                <p class="bg-black text-white rounded-full w-6 h-6 text-center">
                  3
                </p>
                <p>Hips</p>
              </div>
              <p class="text-sm">
                Stand with your feet together, and measure around the widest
                part of your hips.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex gap-5 mt-2 items-center">
        <base-button
          :size="'large'"
          class="!bg-white !border !border-primary-500 !rounded-md !text-primary-500 !px-20"
          @click="AddMeasurement"
        >
          Cancel</base-button
        >
        <base-button
          :size="'large'"
          class="!bg-primary-500 !text-white !rounded-md !px-20"
          >Update</base-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import img from "../../../../assets/img/measurements.png";
export default {
  data() {
    return {
      img,
      add: false,
    };
  },
  methods: {
    AddMeasurement() {
      this.add = !this.add;
    },
  },
};
</script>

<style lang="scss" scoped></style>
