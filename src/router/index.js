import { createWebHistory, createRouter } from "vue-router";
import Layout from "../components/roles/user/layout/mainView.vue";
import Home from "../view/roles/user/home/mainView.vue";
import Product from "../view/roles/user/product/mainView.vue";
import Products from "../view/roles/user/products/mainView.vue";
import Cart from "../view/roles/user/cart/mainView.vue";
import whishList from "../view/roles/user/whislist/mainView.vue";
import Checkout from "../view/roles/user/checkout/mainView.vue";
import Orders from "../view/roles/user/orders/mainView.vue";
import SignIn from "../view/Auth/signIn.vue";
import SignUp from "../view/Auth/signup.vue";
import forgetpassword from "../view/Auth/forgetPassword.vue";
import resetpassword from "../view/Auth/resetPassword.vue";
import Profile from "../view/roles/user/profile/mainView.vue";
import Addresses from "../view/roles/user/profile/Addresses.vue";
import Order from "../view/roles/user/order/mainView.vue";
import Measurements from "../view/roles/user/profile/Measurements.vue";
import profile from "../view/roles/user/profile/profile.vue";
import Payments from "../view/roles/user/profile/payment.vue";
import Account from "../view/roles/user/profile/account.vue";
import Reviews from "../view/roles/user/profile/reviews.vue";
import Coupons from "../view/roles/user/profile/coupons.vue";
import tabs from "../components/roles/user/profile/tabs/tabs.vue";
import support from "../view/roles/user/support/support.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    // meta: {
    //   requireAuth: true,
    // },
    children: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/product",
        component: Product,
      },
      {
        path: "/cart",
        component: Cart,
      },
      {
        path: "/whishlist",
        component: whishList,
      },
      {
        path: "/products",
        component: Products,
      },
      {
        path: "/profile",
        component: Profile,
        children: [
          {
            path: "/profile",
            component: tabs,
          },
          {
            path: "/myInfo",
            component: profile,
          },
          {
            path: "/addresses",
            component: Addresses,
          },
          {
            path: "/measurements",
            component: Measurements,
          },
          {
            path: "/payments",
            component: Payments,
          },
          {
            path: "/account",
            component: Account,
          },
          {
            path: "/reviews",
            component: Reviews,
          },
          {
            path: "/coupons",
            component: Coupons,
          },
        ],
      },
      {
        path: "/checkout",
        component: Checkout,
      },
      {
        path: "/orders",
        component: Orders,
      },
      {
        path: "/order",
        component: Order,
      },
      {
        path: "/support",
        component: support,
      },
      {
        path: "/signIn",
        component: SignIn,
      },
      {
        path: "/signup",
        component: SignUp,
      },
      {
        path: "/forgetpassword",
        component: forgetpassword,
      },
      {
        path: "/resetpassword",
        component: resetpassword,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    const token = localStorage.getItem("token");
    if (token) {
      next();
    } else {
      next("/signin");
      localStorage.clear();
    }
  } else {
    next();
  }
});
// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAdmin) {
//     const isAdmin =
//       store.getters.getRoleName != null
//         ? store.getters.getRoleName
//         : localStorage.getItem("roles");
//     const adminRoles = [
//       "Axa_Med_Admin",
//       "Account_Admin",
//       "Facility_Admin",
//       "Job_Poster",
//     ];
//     if (adminRoles.includes(isAdmin)) {
//       next();
//     } else {
//       localStorage.clear();
//       next("/login");
//     }
//   } else {
//     next();
//   }
// });

export default router;
