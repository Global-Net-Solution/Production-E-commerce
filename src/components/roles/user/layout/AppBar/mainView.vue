<template>
  <div class="w-full h-[95px] bg-white pt-5 relative">
    <div class="h-[30%] pb-10 pt-5 px-10 border-b flex items-center">
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
      <ul class="flex items-center justify-center w-full gap-5">
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
export default {
  components: {
    notification,
    cardCart,
    HomeMenu,
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
