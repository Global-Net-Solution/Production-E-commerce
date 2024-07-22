<template>
  <div class="flex">
    <div class="w-[25%] h-full overflow-auto px-8 pt-28 sm:hidden md:hidden">
      <div class="w-full">
        <!-- <div
          class="relative flex items-center justify-between w-full mb-5 -left-2"
        >
          <KInput
            :style="{ width: '100%' }"
            :size="'small'"
            :class="'custom-input'"
            :placeholder="'Search Categories...'"
            :rounded="'large'"
          ></KInput>
        </div> -->
        <h1>Category</h1>
        <ul class="my-5">
          <li
            class="mb-3 text-sm"
            v-for="category in categories"
            :key="category.id"
          >
            <div class="flex items-center justify-between">
              <li
                @click="changeMainCategoryChecked(category)"
                class="flex items-center gap-1 cursor-pointer"
              >
                <checkbox class="mb-1" :value="category.isChecked" />
                <p>{{ category.name }}</p>
              </li>

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
              <li
                @click="changeSubCategoryChecked(category, subCategory)"
                class="flex items-center gap-1 cursor-pointer"
              >
                <checkbox class="mb-1" :value="subCategory.isChecked" />
                <p>{{ subCategory.name }}</p>
              </li>
            </ul>
          </li>
        </ul>
        <p class="text-xs" v-if="categories.length > 5">
          Show More <i class="fa-solid fa-chevron-down"></i>
        </p>
      </div>

      <div class="w-full my-8">
        <h2 class="mb-3 text-lg">Color</h2>
        <Tooltip :position="position" :anchor-element="anchor"> </Tooltip>
        <ul class="flex flex-wrap w-full gap-2">
          <li
            v-for="color in colors"
            :key="color.id"
            :title="color.name"
            @click="colorsSelected(color)"
            class="rounded-full p-1 relative border !border-transparent hover:!border-[#000]"
            :class="{
              '!border-[#000] checkColor': colorsSelectedObj?.id === color?.id,
            }"
          >
            <p
              class="w-5 h-5 p-2 rounded-full"
              :style="{ backgroundColor: color.code }"
            ></p>
          </li>
        </ul>
      </div>
      <div class="w-full my-8">
        <h2 class="mb-3 text-lg">Size</h2>
        <ul class="flex flex-wrap items-center w-full gap-1">
          <li
            class="w-10 px-2 py-1 mb-2 text-sm text-center duration-100 border rounded cursor-pointer hover:bg-gray-100 hover:text-black"
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
      <div
        class="p-2 px-3 mb-5 text-sm border rounded cursor-pointer w-fit"
        @click="resetAllFilters"
        v-if="
          sizeSelectedList.length > 0 ||
          colorsSelectedObj != null ||
          subCategoriesChecked.length > 0
        "
      >
        Reset Filter
      </div>
    </div>
    <div class="relative w-full h-full pt-8 overflow-auto top-20">
      <div
        class="flex w-full px-2 fixed z-[9999] py-5 items-center top-20 bg-white"
      >
        <div class="flex items-center justify-between w-full overflow-hidden">
          <ul class="flex gap-3">
            <li
              class="px-2 py-1 text-sm rounded-md cursor-pointer w-fit bg-customGray-200 hover:bg-customGray-300"
              v-for="item in subCategoriesChecked"
              :key="item?.id"
            >
              {{ item?.name }}
            </li>
          </ul>
          <div
            class="flex items-center justify-end gap-3 px-3 py-2 text-xs border rounded-lg cursor-pointer w-fit"
            @click="SideMenuTogle"
          >
            <img :src="filterIcon" alt="filter-Icon" class="w-4 h-4" />
            <p>Filter</p>
          </div>
        </div>
      </div>
      <div
        class="flex min-h-[220px] items-center justify-center w-full gap-7 px-10 flex-wrap"
      >
        <card
          class="basis-[22%]"
          @click="GoToProduct(product.id)"
          :product="product"
          v-for="product in filteredProducts?.slice(
            $store.getters.getSkipPage,
            $store.getters.getPageSize *
              ($store.getters.getSkipPage / $store.getters.getPageSize + 1)
          )"
          :key="product.id"
          :colorsSelectedObj="colorsSelectedObj"
        />
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
    <transition name="fade">
      <div v-if="SideMenuShow" class="lg:hidden">
        <div
          class="fixed right-0 z-[9999999999999] w-full h-screen bg-black opacity-50 top-0"
        ></div>
        <div
          class="absolute h-screen bg-white right-0 top-20 z-[999999999999] w-[55vh] py-5 overflow-x-auto"
        >
          <div class="px-10 py-5">
            <div class="w-full">
              <div
                class="relative flex items-center justify-between w-full mb-5 -left-2"
              >
                <KInput
                  :style="{ width: '100%' }"
                  :size="'small'"
                  :class="'custom-input'"
                  :placeholder="'Search Categories...'"
                  :rounded="'large'"
                ></KInput>
              </div>
              <h1>Category</h1>
              <ul class="my-5">
                <li
                  class="mb-3 text-sm"
                  v-for="category in categories"
                  :key="category.id"
                >
                  <div class="flex items-center justify-between">
                    <li
                      @click="changeMainCategoryChecked(category)"
                      class="flex items-center gap-1 cursor-pointer"
                    >
                      <checkbox class="mb-1" :value="category.isChecked" />
                      <p>{{ category.name }}</p>
                    </li>

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
                    <li
                      @click="changeSubCategoryChecked(category, subCategory)"
                      class="flex items-center gap-1 cursor-pointer"
                    >
                      <checkbox class="mb-1" :value="subCategory.isChecked" />
                      <p>{{ subCategory.name }}</p>
                    </li>
                  </ul>
                </li>
              </ul>
              <p class="text-xs" v-if="categories.length > 5">
                Show More <i class="fa-solid fa-chevron-down"></i>
              </p>
            </div>

            <div class="w-full my-8">
              <h2 class="mb-3 text-lg">Color</h2>
              <Tooltip :position="position" :anchor-element="anchor"> </Tooltip>
              <ul class="flex flex-wrap w-full gap-2">
                <li
                  v-for="color in colors"
                  :key="color.id"
                  :title="color.name"
                  @click="colorsSelected(color)"
                  class="rounded-full p-1 relative border !border-transparent hover:!border-[#000]"
                  :class="{
                    '!border-[#000] checkColor':
                      colorsSelectedObj?.id === color?.id,
                  }"
                >
                  <p
                    class="w-5 h-5 p-2 rounded-full"
                    :style="{ backgroundColor: color.code }"
                  ></p>
                </li>
              </ul>
            </div>
            <div class="w-full my-8">
              <h2 class="mb-3 text-lg">Size</h2>
              <ul class="flex flex-wrap items-center w-full gap-1">
                <li
                  class="w-10 px-2 py-1 mb-2 text-sm text-center duration-100 border rounded cursor-pointer hover:bg-gray-100 hover:text-black"
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
            <div
              class="p-2 px-3 mb-5 text-sm border rounded cursor-pointer w-fit"
              @click="resetAllFilters"
              v-if="
                sizeSelectedList.length > 0 ||
                colorsSelectedObj != null ||
                subCategoriesChecked.length > 0
              "
            >
              Reset Filter
            </div>
          </div>
        </div>
        <div
          class="absolute px-6 right-[58vw] top-20 z-[999999999999] py-5 bg-[#00000080] text-white cursor-pointer"
          @click="SideMenuTogle"
        >
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import searchIcon from "../../../../assets/icons/h-search.svg";
import filterIcon from "../../../../assets/icons/filter.svg";
import card from "../../../../components/roles/user/home/productCard/mainView.vue";
import { Pager } from "@progress/kendo-vue-data-tools";
import categories from "../../../../data-model/categoreis.json";
import colors from "../../../../data-model/colors.json";
import sizes from "../../../../data-model/sizes.json";
import products from "../../../../data-model/products.json";
import { Tooltip } from "@progress/kendo-vue-tooltip";
export default {
  data() {
    return {
      testData: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
        { id: 4, name: "Item 4" },
        { id: 5, name: "Item 5" },
        { id: 6, name: "Item 6" },
        { id: 7, name: "Item 7" },
        { id: 8, name: "Item 8" },
        { id: 9, name: "Item 9" },
        { id: 10, name: "Item 10" },
      ],
      searchIcon,
      filterIcon,
      skip: 0,
      take: 8,
      buttonCount: 5,
      type: "numeric",
      info: true,
      previousNext: true,
      skip: this.$store.getters["getSkipPage"],
      take: this.$store.getters["getPageSize"],
      buttonCount: 5,
      type: "numeric",
      info: false,
      pageSizes: true,
      previousNext: true,
      total: this.$store.getters["getTotalCount"],
      pageSizeDefs: [5, 10, 20],
      width: 768,
      categories: categories.mainCategories,
      subCategoriesChecked: [],
      colorsSelectedObj: null,
      sizeSelectedList: [],
      colors: colors.colors,
      sizes: sizes.size,
      products: products.products,
      SideMenuShow: false,
    };
  },

  mounted() {
    //console.log("mounted",localStorage.getItem('filterBySubCategory'))
    this.$store.dispatch(
      "setfilterBySubCategory",
      JSON.parse(localStorage.getItem("filterBySubCategory"))
    );
    //console.log("dispt",this.$store.getters.getfilterBySubCategory)
    if (this.$store.getters.getfilterBySubCategory != undefined) {
      // //console.log(
      //   "hit this.$store.getters.getfilterBySubCategory",
      //   this.$store.getters.getfilterBySubCategory
      // );
      this.subCategoriesChecked.push(
        this.$store.getters.getfilterBySubCategory
      );
    }
    if (this.$store.getters.getfilterByColor != undefined) {
      this.colorsSelectedObj = this.$store.getters.getfilterByColor;
    }
    this.categories = this.categories.map((category) => {
      return {
        ...category,
        isOpened: category?.subCategories?.some(
          (subCategory) =>
            subCategory.id === this.$store.getters.getfilterBySubCategory?.id
        ),
        isChecked: false,
        subCategories: category?.subCategories?.map((subCategory) => {
          return {
            ...subCategory,
            isChecked:
              this.$store.getters.getfilterBySubCategory?.id == subCategory.id
                ? true
                : false,
          };
        }),
      };
    });
  this.total=this.products.length;
  
  
  },
  methods: {
    changeMainCategoryChecked(category) {
      category.isChecked = !category.isChecked;
      category.subCategories.forEach((cat) => {
        cat.isChecked = category.isChecked;
      });
      category.isOpened = category.isChecked;

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
            this.subCategoriesChecked = this.subCategoriesChecked.filter(
              (sub) => sub.id !== subCategory.id
            );
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
              ele.isChecked = subCategories.isChecked;
            }
          });
          var isCheckedFalse = item.subCategories.some((cat) => {
            return cat.isChecked == false;
          });

          if (isCheckedFalse) {
            item.isChecked = false;
          } else {
            item.isChecked = true;
          }
        }
      });
      if (subCategories.isChecked) {
        const exists = this.subCategoriesChecked?.some(
          (category) => category.id == subCategories.id
        );

        if (!exists) {
          this.subCategoriesChecked.push(subCategories);
        }
      } else {
        const exists = this.subCategoriesChecked?.some(
          (category) => category.id === subCategories.id
        );
        if (exists) {
          this.subCategoriesChecked = this.subCategoriesChecked.filter(
            (sub) => sub.id !== subCategories.id
          );
        }
      }
    },
    colorsSelected(color) {
      this.colorsSelectedObj = color;
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
    resetAllFilters() {
      this.subCategoriesChecked = [];
      this.colorsSelectedObj = null;
      this.sizeSelectedList = [];
      this.categories.forEach((item) => {
        item.isChecked = false;
        item.isOpened = false;
        item.subCategories?.forEach((ele) => {
          ele.isChecked = false;
        });
      });
    },
  
    GoToProduct(id) {
      this.$router.push(`/product/${id}`);
    },
    handlePageChange: function (event) {
      this.skip = event.skip;
      this.take = event.take;
      this.$store.dispatch("setSkipPage", event.skip);
      this.$store.dispatch("setPageSize", event.take);
    },
    SideMenuTogle() {
      //console.log(this.SideMenuShow);
      this.SideMenuShow = !this.SideMenuShow;
    },
  },
  components: {
    card,
    Pager,
    Tooltip,
  },
  computed: {
    filteredProducts() {
      var allfiltered = this.products.filter((product) => {
        if (
          this.subCategoriesChecked.length > 0 &&
          !this.subCategoriesChecked.some((subcategory) =>
            product.subCategoryzId.includes(subcategory?.id)
          )
        ) {
          return false;
        }

        if (
          this.colorsSelectedObj != null &&
          !product.colors.some(
            (color) => this.colorsSelectedObj?.id === color.color
          )
        ) {
          return false;
        }

        if (
          this.sizeSelectedList.length > 0 &&
          !this.sizeSelectedList.some((selectedSize) =>
            product.sizes.includes(selectedSize.id)
          )
        ) {
          return false;
        }

        return true;
      });
      this.total = allfiltered.length;
      this.$store.dispatch("setTotalCount", allfiltered.length);

      return allfiltered;
    },
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
