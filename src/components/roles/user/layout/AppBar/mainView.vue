<template>
  <div class="w-full h-[120px] bg-white pt-5 relative">
    <!-- <div class="w-full h-1/2 flex justify-between items-center relative pb-5">
      <div class="w-3/5 flex justify-center relative items-center">
        <img
          :src="searchIcon"
          alt=""
          class="w-6 h-6 absolute top-3 left-20 z-10"
        />
        <base-autocomplete
          :style="{ width: '85%' }"
          :size="'small'"
          :class="'custom-input'"
          :placeholder="placeholder"
          :rounded="'medium'"
          class="pl-10"
        ></base-autocomplete>
      </div> 
      <div class="w-1/5 flex justify-end">
        <ul
          class="flex justify-center items-center gap-6"
          :dir="isRtl ? 'rtl' : 'ltr'"
        >
          <li
            class="relative cursor-pointer"
            @mouseover="ToggleUserMenu = true"
            @mouseleave="ToggleUserMenu = false"
          >
            <a
              ><img :src="profileIcon" alt="" class="w-5 h-5 cursor-pointer"
            /></a>
            <div
              class="absolute -bottom-[320px] w-52 h-80 bg-white p-2 z-10 shadow-2xl -left-20 rounded-md"
              v-show="ToggleUserMenu"
            >
              <div class="py-3 w-full h-full">
                <p class="px-4 border-b pb-2 mb-2">username</p>
                <ul class="flex flex-col justify-between h-[90%] text-sm">
                  <li>
                    <router-link to="/profile">My Profile</router-link>
                  </li>
                  <li>
                    <router-link to="/orders">My Orders</router-link>
                  </li>
                  <li>
                    <router-link to="/coupons">Coupons</router-link>
                  </li>
                  <li>
                    <a href="">Points</a>
                  </li>
                  <li>
                    <a href="">Recently viewed</a>
                  </li>
                  <li class="border-t pt-2 flex gap-2 items-center">
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                    <a href="">Sign Out</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li
            class="relative cursor-pointer"
            @mouseover="ToggleCartMenu = true"
            @mouseleave="ToggleCartMenu = false"
          >
            <router-link to="/cart"
              ><img :src="cartIcon" alt="" class="w-6 h-6"
            /></router-link>
            <div
              class="absolute -bottom-[295px] w-96 max-h-[500px] bg-white p-2 z-10 shadow-2xl -right-20 rounded-md overflow-auto"
              v-show="ToggleCartMenu"
            >
              <div class="triangle-up absolute -top-5 shadow-2xl"></div> 
            <div
                class="py-3 w-full h-full flex flex-col justify-center items-center"
              >
                <img :src="EmptyCart" alt="EmptyCart" class="h-15 w-15 mb-2" />
                <p class="pt-2 border-t text-sm w-full text-center">
                  Shopping cart is Empty.
                </p>
              </div>
              <div class="py-3 w-full h-fit flex flex-col">
                <cardCart />
              </div>
              <div class="w-full flex gap-5 mt-2 justify-center">
                <base-button
                  :size="'large'"
                  class="!bg-white !border !border-primary-500 !rounded-md !text-primary-500 !px-10"
                  @click="GotoCart"
                >
                  View cart</base-button
                >
                <base-button
                  :size="'large'"
                  class="!bg-primary-500 !text-white !rounded-md !px-5"
                  @click="$router.push('/checkout')"
                  >Proceed to checkout</base-button
                >
              </div>
            </div>
          </li>
          <li
            class="relative cursor-pointer"
            @mouseover="TogglefaviorateMenu = true"
            @mouseleave="TogglefaviorateMenu = false"
          >
            <router-link to="/whishlist"
              ><img :src="faviorateIcon" alt="" class="w-6 h-6"
            /></router-link>
            <div
              class="absolute -bottom-32 w-52 h-50 bg-white p-2 z-10 shadow-2xl -left-20 rounded-md"
              v-show="TogglefaviorateMenu"
            >
             
              <div
                class="py-3 w-full h-full flex flex-col justify-center items-center"
              >
                <img
                  :src="EmptyFaviorate"
                  alt="EmptyCart"
                  class="h-10 w-10 mb-2"
                />
                <p class="pt-2 border-t text-sm w-full text-center">
                  No Wishlist Yet.
                </p>
              </div>
            </div>
          </li>
          <li
            class="relative cursor-pointer"
            @mouseover="TogglNotificationMenu = true"
            @mouseleave="TogglNotificationMenu = false"
          >
            <a href=""
              ><img :src="notificationIcon" alt="" class="w-7.5 h-7.5"
            /></a>
            <div
              class="absolute -bottom-[500px] w-96 h-[500px] bg-white p-2 z-10 shadow-2xl -right-20 rounded-md overflow-auto"
              v-show="TogglNotificationMenu"
            >
      
              <div class="py-3 w-full h-full flex flex-col items-center">
                <img
                  :src="EmptyNotification"
                  alt="EmptyCart"
                  class="h-10 w-10 mb-2"
                />
                <p class="pt-2 border-t text-sm w-full text-center">
                  No Notifications Yet.
                </p>
                <div class="w-full">
                  <notification />
                  <notification />
                  <notification />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div> -->
    <div class="h-[30%] pb-10 pt-5 px-10 border-b flex items-center">
      <div class="w-[200px] h-[60px]">
        <div class="w-full h-full relative logo">
          <router-link to="/" class="">
            <!-- {{ $t("SiteName") }} -->
            <!-- {{ categories }} -->
            <img
              :src="logo"
              alt="logo"
              title="Royal Scrubs"
              class="h-full min-w-[90%] object-contain"
            />
          </router-link>
        </div>
      </div>
      <ul class="flex w-full gap-5 items-center justify-center">
        <li class="" @mouseover="handleMouseOver">
          <router-link
            to=""
            class="hover:bg-customGray-300 px-3 py-2 flex items-center"
          >
            {{ $t("Menu.Categories") }}
            <div v-if="!isHovered">
              <i class="fa-solid fa-chevron-down text-xs ml-1"></i>
            </div>
            <div v-if="isHovered">
              <i class="fa-solid fa-chevron-up text-xs ml-1"></i>
            </div>
          </router-link>
          <transition name="fade">
            <HomeMenu
              v-if="isHovered"
              :categories="categories.mainCategories"
              :selectedCategoryid="selectedCategoryid"
            />
          </transition>
          <!-- <transition name="fade"> -->
          <div
            class="fixed left-0 w-full h-screen bg-black opacity-50 z-30 top-20"
            v-show="isHovered"
            @mouseover="handleOverlayMouseOver"
          ></div>
          <!-- </transition> -->
        </li>
        <li
          class=""
          v-for="(catgory, inx) in categories.mainCategories"
          :key="inx"
          @mouseover="handleMouseOver(catgory.id)"
        >
          <!-- <router-link
            to="/products"
            class="text-sm px-3 py-2 flex items-center"
            >{{ $t("Menu.Electronics") }}</router-link
          > -->
          <router-link to="/products" class="px-3 py-2 flex items-center">{{
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
      console.log(id);
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
