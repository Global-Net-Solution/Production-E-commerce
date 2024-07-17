<template>
  <div class="example-wrapper">
    <div>
      <combobox
        :style="{ width: '350px' }"
        :data-items="items"
        size="large"
        rounded="large"
        @change="emitcomboboxdropDown($event.target.value)"
        @focus="emitFocuscomboboxdropDown($event.target.value)"
        @blur="emitBlurcomboboxdropDown($event.target.value)"
        :value="value"
        v-bind="$attrs"
        :text-field="'text'"
        :disabled="disabledCombobox"
        :required="required"
        :filterable="true"
        @filterchange="filterChange"
        :item-render="itemRender"
      >
        <template v-slot:myTemplate="{ props }">
          <custom
            :style="props.style"
            :class="props.itemClass"
            :data-item="props.dataItem"
            :index="props.index"
            @click="(ev) => props.onClick(ev)"
            :from="from"
          />
        </template>
      </combobox>
    </div>
  </div>
</template>
<script>
import { ComboBox } from "@progress/kendo-vue-dropdowns";
import { filterBy } from "@progress/kendo-data-query";
// import { nameValidator } from "../validation/validator";
import ItemRender from "./itemRenderCombo.vue";

export default {
  props: [
    "data",
    "value",
    "defaultValue",
    "disabledCombobox",
    "required",
    "type",
    "from",
  ],
  components: {
    combobox: ComboBox,
    custom: ItemRender,
  },
  data: function () {
    return {
      allowCustom: true,
      loading: false,
      items: this.data,
      validationError: "",
      itemRender: "myTemplate",
    };
  },
  watch: {
    data(newValue) {
      this.items = newValue;
    },
  },
  methods: {
    // validateInput(value) {
    //   switch (this.type) {
    //     case "name":
    //       this.validationError = nameValidator(value);
    //       break;

    //     default:
    //       this.validationError = "";
    //   }
    // },
    emitcomboboxdropDown(value) {
      this.$emit("comboboxdropDown", value);
      this.validateInput(value);
    },
    emitFocuscomboboxdropDown(value) {
      this.$emit("comboboxFocusdropDown", value);
      this.validateInput(value);
    },
    emitBlurcomboboxdropDown(value) {
      this.$emit("comboboxBlurdropDown", value);
      this.validateInput(value);
    },
    filterChange(event) {
      this.items = this.filterData(event.filter);
    },
    filterData(filter) {
      const res = this.data.slice();
      if (filterBy(res, filter).length == 0 || filter?.value?.length == 0) {
        this.$emit("searchComboBox", filter.value);
      }

      return filterBy(res, filter);
    },
  },
};
</script>
