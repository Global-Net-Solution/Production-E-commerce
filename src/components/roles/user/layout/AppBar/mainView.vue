<template>
  <div class="w-full h-[95px] bg-white pt-5 fixed top-0 z-[9999999]">
    <div
      class="h-[30%] pb-10 pt-5 px-10 border-b flex items-center md:justify-between sm:justify-between sm:flex-row-reverse md:flex-row-reverse"
    >
      <div class="w-[200px] h-[60px]">
        <div class="relative w-full h-full logo">
          <router-link to="/" class="">
            <img
              :src="logo"
              alt="logo"
              title="Royal Scrubs"
              class="h-full min-w-[90%] object-contain"
            />
          </router-link>
        </div>
      </div>
      <ul
        class="flex items-center justify-center w-full gap-5 md:hidden sm:hidden"
      >
        <li class="" @mouseover="handleMouseOver">
          <router-link
            to=""
            class="flex items-center px-3 py-2 hover:bg-customGray-300"
          >
            {{ $t("Menu.Categories") }}
            <div v-if="!isHovered">
              <i class="ml-1 text-xs fa-solid fa-chevron-down"></i>
            </div>
            <div v-if="isHovered">
              <i class="ml-1 text-xs fa-solid fa-chevron-up"></i>
            </div>
          </router-link>
          <transition name="fade">
            <HomeMenu
              v-if="isHovered"
              :categories="categories.mainCategories"
              :selectedCategoryid="selectedCategoryid"
            />
          </transition>
          <div
            class="fixed left-0 z-30 w-full h-screen bg-black opacity-50 top-20"
            v-show="isHovered"
            @mouseover="handleOverlayMouseOver"
          ></div>
        </li>
        <li
          class=""
          v-for="(catgory, inx) in categories.mainCategories"
          :key="inx"
          @mouseover="handleMouseOver(catgory.id)"
        >
          <router-link to="/products" class="flex items-center px-3 py-2">{{
            catgory.name
          }}</router-link>
        </li>
      </ul>
      <div class="lg:hidden">
        <div @click="SideMenuTogle" class="cursor-pointer">
          <i class="fa-solid fa-bars"></i>
        </div>
        <div v-if="SideMenuShow">
          <div
            class="fixed left-0 z-30 w-full h-screen bg-black opacity-50 top-0"
          ></div>
          <div
            class="absolute h-screen bg-white left-0 top-0 z-[999] w-[55vw] py-5"
          >
            <ul class="flex gap-4 text-sm px-3 border-b pb-5" v-if="!showItems">
              <li>
                <router-link to="/products" class="flex items-center"
                  >All</router-link
                >
              </li>
              <li
                class=""
                v-for="(catgory, inx) in categories.mainCategories"
                :key="inx"
              >
                <router-link to="/products" class="flex items-center">{{
                  catgory.name
                }}</router-link>
              </li>
            </ul>
            <div class="text-sm border-b pb-5 px-10" v-if="showItems">
              <div class="w-1/2 flex justify-between">
                <div @click="BackToCat">
                  <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div>
                  <p>{{ selectedCategory }}</p>
                </div>
              </div>
            </div>
            <div class="py-5" v-if="!showItems">
              <ul class="w-[95%] flex flex-col gap-1 h-full">
                <li
                  class="my-1"
                  v-for="(catgory, inx) in categories.mainCategories"
                  :key="inx"
                  @click="selectItem(catgory)"
                >
                  <div
                    class="flex items-center justify-between px-5 py-2 pr-10"
                  >
                    <div class="flex items-center gap-5">
                      <img
                        :src="getImageUrl(catgory.img)"
                        alt=""
                        class="w-16 h-16 rounded-full"
                      />
                      <p>{{ catgory.name }}</p>
                    </div>
                    <i class="text-xs fa-solid fa-chevron-right"></i>
                  </div>
                </li>
              </ul>
            </div>
            <div class="flex flex-wrap h-full" v-if="showItems">
              <div
                v-for="(item, index) in selectedItem"
                :key="index"
                class="basis-1/3"
              >
                <item
                  :src="getImageUrl(item.src)"
                  :header="item.name"
                  :product="item"
                />
              </div>
            </div>
          </div>
          <div
            class="absolute px-6 left-[55vw] top-0 z-[99999] py-5 bg-[#00000080] text-white cursor-pointer"
            @click="SideMenuTogle"
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categories from "../../../../../data-model/categoreis.json";
import logo from "../../../../../assets/img/logo.png";
import profileIcon from "../../../../../assets/icons/h-profile.svg";
import cartIcon from "../../../../../assets/icons/h-basket.svg";
import faviorateIcon from "../../../../../assets/icons/h-faviorate.svg";
import notificationIcon from "../../../../../assets/icons/h-notification.svg";
import searchIcon from "../../../../../assets/icons/h-search.svg";
import EmptyCart from "../../../../../assets/img/emptyCart.svg";
import EmptyFaviorate from "../../../../../assets/img/EmptyFaviorate.svg";
import EmptyNotification from "../../../../../assets/img/Nonotification.svg";
import notification from "../../../../../components/roles/user/home/notification/notification.vue";
import cardCart from "../../../../../components/roles/user/home/cartCard/cartCard.vue";
import HomeMenu from "../../HomeMenu/HomeMenu.vue";
import item from "../../HomeMenu/item.vue";
export default {
  components: {
    notification,
    cardCart,
    HomeMenu,
    item,
  },
  watch: {
    selectedCategoryid(newVal, oldVal) {
      if (typeof newVal === "number") {
        this.handleMouseOver(newVal);
      } else {
        this.handleMouseOver(this.categories.mainCategories[0].id);
      }
    },
  },
  data() {
    return {
      categories: categories,
      logo,
      profileIcon,
      cartIcon,
      faviorateIcon,
      notificationIcon,
      searchIcon,
      EmptyCart,
      EmptyFaviorate,
      EmptyNotification,
      placeholder: this.$t("SearchPlaceholder"),
      ToggleUserMenu: false,
      ToggleCartMenu: false,
      TogglefaviorateMenu: false,
      TogglNotificationMenu: false,
      isHovered: false,
      selectedCategoryid: null,
      selectedItem: [],
      selectedCategory: null,
      showItems: false,
      SideMenuShow: false,
    };
  },
  methods: {
    UserMenu(e) {
      e.preventDefault();
      this.ToggleUserMenu = !this.ToggleUserMenu;
    },
    GotoCart() {
      this.$router.push("/cart");
    },
    handleMouseOver(id) {
      this.selectedCategoryid = id;
      this.isHovered = true;
    },
    handleMouseLeave() {
      this.isHovered = false;
    },
    handleOverlayMouseOver() {
      event.stopPropagation();
      this.isHovered = false;
    },
    getImageUrl(imagePath) {
      var url =
        new URL("", import.meta.url).origin +
        "/assets/assets/dataImg/subCategories/" +
        imagePath;

      return url;
    },
    selectItem(items) {
      //console.log(items);
      this.showItems = true;
      this.selectedCategory = items.name;
      this.selectedItem = items.subCategories;
    },
    BackToCat() {
      this.showItems = false;
    },
    SideMenuTogle() {
      //console.log(this.SideMenuShow);
      this.SideMenuShow = !this.SideMenuShow;
    },
  },
};
</script>
<script></script>
<style>
.custom-input {
  background-color: #f4f5f9 !important;
  border: 2px solid #fff !important;
  padding: 10px 10px 10px 45px !important;
}
::placeholder {
  color: #b2b2c2 !important;
  font-size: 12px !important;
}
.triangle-up {
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 40px solid #fff;
}
.k-input-solid:focus-within {
  border-color: #0b80cc !important;
  box-shadow: none !important;
}
input.k-input {
  padding: 10px !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-150px);
}
.logo ::after {
  content: "";
  height: 50px;
  width: 1px;
  background: #e5e7eb;
  position: absolute;
  right: 0;
  top: 5px;
}

</style>
