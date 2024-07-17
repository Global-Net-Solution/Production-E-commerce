<template>
  <div class="bg-customGray-100 flex px-20 py-10 gap-10">
    <div class="basis-1/5 bg-white rounded-lg px-3 py-5 h-fit">
      <ul class="flex flex-col gap-5">
        <li class="cursor-pointer sub-menu">
          <div
            class="flex justify-between items-center"
            @click="toggleDropdown('account')"
          >
            <div class="flex gap-3">
              <img :src="profile" alt="profile" class="w-6 h-6" />
              <p>My Account</p>
            </div>
            <div>
              <i
                :class="accountOpen ? 'fa-solid fa-minus' : 'fa-solid fa-plus'"
              ></i>
            </div>
          </div>
        </li>
        <transition name="slide-fade">
          <li v-if="accountOpen" class="sub-menu">
            <ul class="ml-10 text-sm flex flex-col gap-3">
              <li class="cursor-pointer ml-5" @click="$router.push('/myInfo')">
                <div class="flex gap-1">
                  <img :src="profile2" alt="profile" class="w-5 h-5" />
                  <p>My Profile</p>
                </div>
              </li>
              <li
                class="cursor-pointer ml-5"
                @click="$router.push('/addresses')"
              >
                <div class="flex gap-1">
                  <img :src="address" alt="profile" class="w-5 h-5" />
                  <p>Address Book</p>
                </div>
              </li>
              <li
                class="cursor-pointer ml-5"
                @click="$router.push('/measurements')"
              >
                <div class="flex gap-1">
                  <img :src="measurements" alt="profile" class="w-5 h-5" />
                  <p>My Measurements</p>
                </div>
              </li>
              <li
                class="cursor-pointer ml-5"
                @click="$router.push('/payments')"
              >
                <div class="flex gap-1">
                  <img :src="Payments" alt="profile" class="w-5 h-5" />
                  <p>My Payments</p>
                </div>
              </li>
              <li class="cursor-pointer ml-5" @click="$router.push('/account')">
                <div class="flex gap-1">
                  <img :src="Settings2" alt="profile" class="w-5 h-5" />
                  <p>Manage My Account</p>
                </div>
              </li>
            </ul>
          </li>
        </transition>
        <!-- Orders Dropdown -->
        <li class="cursor-pointer sub-menu">
          <div
            class="flex justify-between items-center"
            @click="toggleDropdown('orders')"
          >
            <div class="flex gap-3">
              <img :src="orders" alt="profile" class="w-6 h-6" />
              <p>Orders</p>
            </div>
            <div>
              <i
                :class="ordersOpen ? 'fa-solid fa-minus' : 'fa-solid fa-plus'"
              ></i>
            </div>
          </div>
        </li>
        <transition name="slide-fade">
          <li v-if="ordersOpen" class="sub-menu">
            <ul class="ml-10 text-sm flex flex-col gap-3">
              <li class="cursor-pointer ml-5" @click="GoToOrders(2)">
                <div class="flex gap-1">
                  <img :src="completed" alt="profile" class="w-5 h-5" />
                  <p>Completed</p>
                </div>
              </li>
              <li class="cursor-pointer ml-5" @click="GoToOrders(3)">
                <div class="flex gap-1">
                  <img :src="cancelled" alt="profile" class="w-5 h-5" />
                  <p>Cancelled</p>
                </div>
              </li>
              <li class="cursor-pointer ml-5" @click="GoToOrders(4)">
                <div class="flex gap-1">
                  <img :src="returned" alt="profile" class="w-5 h-5" />
                  <p>Returned</p>
                </div>
              </li>
            </ul>
          </li>
        </transition>
        <li class="cursor-pointer">
          <div class="flex justify-between items-center">
            <div class="flex gap-3" @click="$router.push('/whishlist')">
              <img :src="wishlist" alt="profile" />
              <p>Wishlist</p>
            </div>
          </div>
        </li>
        <li>
          <div class="flex justify-between items-center">
            <div
              class="flex gap-3 cursor-pointer"
              @click="$router.push('/reviews')"
            >
              <img :src="Reviews" alt="profile" />
              <p>Reviews</p>
            </div>
            <!-- <i class="fa-solid fa-plus"></i> -->
          </div>
        </li>
        <li>
          <div
            class="flex justify-between items-center"
            @click="$router.push('/coupons')"
          >
            <div class="flex gap-3 cursor-pointer">
              <img :src="coupon" alt="profile" />
              <p>Coupons</p>
            </div>
          </div>
        </li>
        <!-- <li>
          <div class="flex justify-between items-center">
            <div class="flex gap-3">
              <img :src="Settings" alt="profile" />
              <p>Settings</p>
            </div>
            <i class="fa-solid fa-plus"></i>
          </div>
        </li> -->
        <li>
          <div class="flex justify-between items-center">
            <div
              class="flex gap-3 cursor-pointer"
              @click="$router.push('/support')"
            >
              <img :src="support" alt="profile" />
              <p>Customer Support</p>
            </div>
            <!-- <i class="fa-solid fa-plus"></i> -->
          </div>
        </li>
      </ul>
    </div>
    <div class="basis-4/5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import profile from "../../../../assets/ProfileIcons/My-account.svg";
import completed from "../../../../assets/ProfileIcons/completed.svg";
import cancelled from "../../../../assets/ProfileIcons/cancelled.svg";
import returned from "../../../../assets/ProfileIcons/returnd.svg";
import profile2 from "../../../../assets/ProfileIcons/profile2.svg";
import address from "../../../../assets/ProfileIcons/address.svg";
import orders from "../../../../assets/ProfileIcons/orders.svg";
import wishlist from "../../../../assets/ProfileIcons/wishlist.svg";
import measurements from "../../../../assets/ProfileIcons/measurements.svg";
import Payments from "../../../../assets/ProfileIcons/Payments.svg";
import Reviews from "../../../../assets/ProfileIcons/views.svg";
import Notifications from "../../../../assets/ProfileIcons/notification.svg";
import Settings from "../../../../assets/ProfileIcons/settings.svg";
import Settings2 from "../../../../assets/ProfileIcons/setting2.svg";
import support from "../../../../assets/ProfileIcons/support.svg";
// import tabs from "../../../../components/roles/user/profile/tabs/tabs.vue";
import coupon from "../../../../assets/ProfileIcons/coupons.svg";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    // tabs,
  },
  data() {
    return {
      dropdownOpen: false,
      accountOpen: false,
      ordersOpen: false,
      profile,
      profile2,
      orders,
      wishlist,
      Reviews,
      Notifications,
      Settings,
      support,
      address,
      measurements,
      Payments,
      Settings2,
      completed,
      cancelled,
      returned,
      coupon
    };
  },
  methods: {
    ...mapActions(["setSelectedOrdersTab"]),
    toggleDropdown(dropdown) {
      if (dropdown === "account") {
        this.accountOpen = !this.accountOpen;
        if (this.accountOpen) this.ordersOpen = false;
      } else if (dropdown === "orders") {
        this.ordersOpen = !this.ordersOpen;
        if (this.ordersOpen) this.accountOpen = false;
      }
    },
    GoToOrders(status) {
      this.setSelectedOrdersTab(status);
      this.$router.push("/orders");
    },
  },
};
</script>

<style>
.sub-menu ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.sub-menu ul li {
  padding: 5px 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
