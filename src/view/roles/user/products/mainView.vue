<template>
  <div class="px-28 flex justify-between">
    <div class="basis-[18%]">
      <div class="w-full flex justify-between items-center">
        <h2>Filter</h2>
        <p class="text-xs cursor-pointer text-red-500">Clear All Filter</p>
      </div>
      <div class="w-full flex justify-between items-center relative my-8">
        <KInput
          :style="{ width: '100%' }"
          :size="'small'"
          :class="'custom-input'"
          :placeholder="'Search Categories...'"
          :rounded="'large'"
        ></KInput>
      </div>
      <div class="w-full">
        <h1>Category</h1>
        <ul class="my-5">
          <li
            class="text-sm mb-3"
            v-for="category in categories"
            :key="category.id"
          >
            <div class="flex items-center justify-between">
              <checkbox
                :value="category.isChecked"
                :label="category.name"
                @click="changeMainCategoryChecked(category)"
              />
              <div @click="category.isOpened = !category.isOpened">
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>

            <ul
              class="flex flex-col justify-start px-5 mt-1"
              v-for="subCategory in category.subCategories"
              :key="subCategory.id"
              v-if="category.isOpened"
            >
              <checkbox
                class="mb-1"
                :value="subCategory.isChecked"
                :label="subCategory.name"
                @change="subCategory.isChecked = !subCategory.isChecked"
                @click="changeSubCategoryChecked(category, subCategory)"
              />
            </ul>
          </li>
        </ul>
        <p class="text-xs" v-if="categories.length > 5">
          Show More <i class="fa-solid fa-chevron-down"></i>
        </p>
      </div>

      <div class="w-full my-8">
        <h2 class="text-lg mb-3">Color</h2>
        <Tooltip :position="position" :anchor-element="anchor"> </Tooltip>
        <ul class="flex gap-2 flex-wrap w-full">
          <li
            v-for="color in colors"
            :key="color.id"
            :title="color.name"
            @click="colorsSelected(color)"
            class="rounded-full p-1 relative  border !border-transparent hover:!border-[#000]"
            :class="{
              '!border-[#000] checkColor': colorsSelectedList.some(
                (ele) => ele.id === color.id
              ),
            }"
          >
            <p
              class="w-5 h-5 rounded-full p-2"
              :style="{ backgroundColor: color.code }"
            ></p>
          </li>
        </ul>
      </div>
      <div class="w-full my-8">
        <h2 class="text-lg mb-3">Size</h2>
        <ul class="flex gap-1 flex-wrap w-full items-center">
          <li
            class="text-sm mb-2 border text-center w-10 px-2 py-1 rounded hover:bg-gray-100 hover:text-black duration-100 cursor-pointer"
            v-for="size in sizes"
            :key="size.id"
            @click="sizesSelected(size)"
            :class="{
              'bg-black text-white hover:text-white hover:bg-black':
                sizeSelectedList.some((ele) => ele.id === size.id),
            }"
          >
            {{ size.name }}
          </li>
        </ul>
      </div>
    </div>
    <div class="basis-[80%]">
      <div class="w-full h-16 border-b px-2 flex">
        <div class="basis-[50%] overflow-hidden">
          <ul class="flex gap-3">
            <li
              class="w-fit px-2 py-1 bg-customGray-100 rounded-md hover:bg-customGray-200 cursor-pointer"
            >
              Headphones
            </li>
            <li
              class="w-fit px-2 py-1 bg-customGray-100 rounded-md hover:bg-customGray-200 cursor-pointer"
            >
              Mobiles
            </li>
            <li
              class="w-fit px-2 py-1 bg-customGray-100 rounded-md hover:bg-customGray-200 cursor-pointer"
            >
              Cell Phones
            </li>
          </ul>
        </div>
        <div class="basis-[50%] overflow-hidden flex gap-5 contryInfo">
          <div class="flex w-[50%] gap-2 items-center">
            <p class="text-xs text-customGray-400 w-[30%]">Sort by:</p>
            <base-combobox
              :data="countries"
              v-model="country"
              class="bg-white h-10 bg-boxShadow-custom !w-[100%]"
              :placeholder="'Relevance'"
            />
          </div>
          <div class="flex w-[50%] gap-1 items-center">
            <p class="text-xs text-customGray-400 w-[55%]">Shipping to:</p>
            <base-combobox
              :data="countries"
              v-model="country"
              class="bg-white h-10 bg-boxShadow-custom !w-[100%]"
              :placeholder="'USA'"
            />
          </div>
        </div>
      </div>
      <div class="w-full px-2 py-5">
        <p class="text-xs text-customGray-400">234,567 results</p>
      </div>
      <div class="flex min-h-[220px] items-center w-full gap-8 px-10 flex-wrap">
        <card class="basis-[22%]" @click="GoToProduct" />
        <card class="basis-[22%]" @click="GoToProduct" />
        <card class="basis-[22%]" @click="GoToProduct" />
        <card class="basis-[22%]" @click="GoToProduct" />
        <card class="basis-[22%]" @click="GoToProduct" />
        <card class="basis-[22%]" @click="GoToProduct" />
        <card class="basis-[22%]" @click="GoToProduct" />
        <card class="basis-[22%]" @click="GoToProduct" />
        <card class="basis-[22%]" @click="GoToProduct" />
        <card class="basis-[22%]" @click="GoToProduct" />
        <card class="basis-[22%]" @click="GoToProduct" />
        <card class="basis-[22%]" @click="GoToProduct" />
      </div>
      <div class="w-full px-2 py-5 contryInfo">
        <pager
          :skip="skip"
          :take="take"
          :total="total"
          :button-count="buttonCount"
          :info="info"
          :type="type"
          :page-sizes="pageSizes ? pageSizeDefs : undefined"
          :previous-next="previousNext"
          @pagechange="handlePageChange"
        >
        </pager>
      </div>
    </div>
  </div>
</template>

<script>
import searchIcon from "../../../../assets/icons/h-search.svg";
import card from "../../../../components/roles/user/home/productCard/mainView.vue";
import { Pager } from "@progress/kendo-vue-data-tools";
import categories from "../../../../data-model/categoreis.json";
import colors from "../../../../data-model/colors.json";
import sizes from "../../../../data-model/sizes.json";
import { Tooltip } from "@progress/kendo-vue-tooltip";

export default {
  data() {
    return {
      searchIcon,
      skip: 0,
      take: 5,
      buttonCount: 5,
      type: "numeric",
      info: true,
      pageSizes: [10, 15, 20],
      previousNext: true,
      total: 200,
      pageSizeDefs: [5, 10, 20],
      width: 768,
      categories: categories.mainCategories,
      subCategoriesChecked: [],
      colorsSelectedList: [],
      sizeSelectedList: [],
      colors: colors.colors,
      sizes: sizes.size,
    };
  },
  mounted() {
    this.categories = this.categories.map((category) => {
      return {
        ...category,
        isOpened: false,
        isChecked: false,
        subCategories: category?.subCategories?.map((subCategory) => {
          return {
            ...subCategory,
            isChecked: false,
          };
        }),
      };
    });
  },
  methods: {
    changeMainCategoryChecked(category) {
      category.isChecked = !category.isChecked;
      category.subCategories.forEach((cat) => {
        cat.isChecked = category.isChecked;
      });
      category.isOpened = !category.isOpened;

      if (category.isChecked) {
        category.subCategories?.map((subCategory) => {
          const exists = this.subCategoriesChecked?.some(
            (category) => category.id == subCategory.id
          );

          if (!exists) {
            this.subCategoriesChecked.push(subCategory);
          }
        });
      } else {
        category.subCategories?.map((subCategory) => {
          const exists = this.subCategoriesChecked?.some(
            (category) => category.id === subCategory.id
          );
          if (exists) {
            this.subCategoriesChecked.pop(subCategory);
          }
        });
      }
    },
    changeSubCategoryChecked(category, subCategories) {
      subCategories.isChecked = !subCategories.isChecked;
      this.categories.forEach((item) => {
        if (item.id == category.id) {
          item.subCategories.forEach((ele) => {
            if (ele.id == subCategories.id) {
              console.log("hit");
              ele.isChecked = subCategories.isChecked;
            }
          });
        }
      });
    },
    colorsSelected(color) {
      const exists = this.colorsSelectedList?.some(
        (colorselected) => colorselected.id == color.id
      );
      if (!exists) {
        this.colorsSelectedList.push(color);
      } else {
        this.colorsSelectedList = this.colorsSelectedList.filter(
          (colorselected) => colorselected.id !== color.id
        );
      }
    },
    sizesSelected(size) {
      const exists = this.sizeSelectedList?.some(
        (sizeselected) => sizeselected.id == size.id
      );
      if (!exists) {
        this.sizeSelectedList.push(size);
      } else {
        this.sizeSelectedList = this.sizeSelectedList.filter(
          (sizeselected) => sizeselected.id !== size.id
        );
      }
    },
  },
  components: {
    card,
    Pager,
    Tooltip,
  },
};
</script>

<style>
.k-checkbox:checked {
  border-color: #339ddb !important;
  background-color: #339ddb !important;
}
.k-slider .k-draghandle {
  border-color: #339ddb !important;
  background-color: #339ddb !important;
}
.k-slider-horizontal .k-slider-track-wrap .k-slider-selection {
  border-color: #339ddb !important;
  background-color: #339ddb !important;
}
.k-pager {
  border: none !important;
  justify-content: space-between;
}
.k-pager-md .k-pager-numbers-wrap .k-button {
  color: #000;
}
.k-pager-numbers .k-selected {
  background: #339ddb !important ;
  color: #fff !important;
  border-radius: 50%;
}

.k-pager-sizes.k-label {
  order: 12 !important;
}
.k-pager-info {
  order: -1 !important;
  flex: 0 !important;
}
.checkColor::after {
  content: "✓";
  position: absolute;
  top: 3.5px;
  left: 3px;
  font-size: 10px;
  background-color: #eeeeee78;
  width: 22px;
  height: 21px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
