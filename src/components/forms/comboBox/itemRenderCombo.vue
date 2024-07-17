<template>
  <li @click="handleClick">
    <span v-if="from == 'custom'" class="mr-2">
      <country-flag :iso="dataItem.code" mode="rounded" />
    </span>
    <div v-if="from == 'student'">
      <Img-Con
        :imageURL="dataItem.profilePic"
        id="1"
        :name="dataItem.text"
        :styling="{
          width: '30px',
          height: '30px',
          borderRadius: '9999px',
        }"
        size="30"
      />
    </div>
    <span v-if="from != 'grade' && from != 'subject'">
      {{ dataItem.text }}
      <span class="opacity-70" v-if="from == 'custom'"
        >({{ dataItem.code }})</span
      >
    </span>
    <div class="w-full h-full flex items-center gap-2" v-if="from == 'grade'">
      <div
        class="w-6 h-6 rounded-full flex items-center"
        :style="{ backgroundColor: dataItem.color || 'bg-primary-800' }"
      ></div>
      <h3>{{ dataItem.text }}</h3>
    </div>
    <div class="w-full h-full flex items-center" v-if="from == 'subject'">
      <Img-Con
        :imageURL="dataItem.imageURL"
        id="2"
        :styling="{
          width: '30px',
          height: '30px',
          borderRadius: '9999px',
        }"
        size="30"
      />
      <h3 class="ml-2">{{ dataItem.text }}</h3>
    </div>
  </li>
</template>

<script>
import { Avatar } from "@progress/kendo-vue-layout";
export default {
  components: {
    Avatar,
  },
  emits: {
    click: null,
  },
  props: {
    id: String,
    index: Number,
    dataItem: [Object, String, Number],
    textField: String,
    focused: Boolean,
    selected: Boolean,
    from: String,
  },
  methods: {
    handleClick: function (e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped></style>
