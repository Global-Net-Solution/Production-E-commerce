<template>
  <div class="px-28 py-8">
    <h1 class="text-xl mb-8">Orders</h1>
    <TabStrip :selected="selected" @select="onSelect" :tabs="tabs">
      <template v-slot:All>
        <actions />
        <div>
          <h1 class="px-5 text-lg py-10">In Progress</h1>
          <status
            :header="'Order no: #123456789'"
            :icon="inprogress"
            :status="'inprogess'"
          >
            <div class="flex w-full justify-between py-1 items-center">
              <p>
                Order Status :
                <span class="text-sm text-customGray-500">Inprogress</span>
              </p>
              <div>
                <p>
                  Order Date :
                  <span class="text-sm text-customGray-500"
                    >2 June 2023 2:40 PM</span
                  >
                </p>
                <p>
                  Estimated Delivery Date :
                  <span class="text-sm text-customGray-500">8 June 2024</span>
                </p>
              </div>
            </div>
          </status>
          <inprogressCard />
        </div>
        <div>
          <h1 class="px-5 text-lg py-10">Completed Orders</h1>
          <status :header="'Delivered'" :icon="check" :status="'completed'">
            <div class="w-full py-2">
              <p>
                <span class="text-sm text-customGray-500"
                  >On Sat, 25th May, 04:40pm</span
                >
              </p>
            </div>
          </status>
          <orderCard>
            <div class="flex gap-10">
              <base-button
                :size="'large'"
                class="!bg-white !border !border-primary-500 !rounded-md !text-primary-500 !px-10"
                @click="GotoCart"
              >
                View Details</base-button
              >
              <base-button
                :size="'large'"
                class="!bg-white !border !border-primary-500 !rounded-md !text-primary-500 !px-10"
                @click="GotoCart"
              >
                View Details</base-button
              >
              <base-button
                :size="'large'"
                class="!bg-white !border !border-primary-500 !rounded-md !text-primary-500 !px-10"
                @click="GotoCart"
              >
                View Details</base-button
              >
            </div>
          </orderCard>
        </div>
        <div>
          <h1 class="px-5 text-lg py-10">Cancelled Orders</h1>
          <status
            :header="'Cancelled'"
            :icon="cancelled"
            :status="'Cancelled'"
          />
          <orderCard>
            <div class="flex flex-col gap-1">
              <p>
                <span class="text-customGray-500">Quantity:</span>
                2
              </p>
              <p>
                <span class="text-customGray-500">Item price:</span>
                US $1,234.56
              </p>
              <p>
                <span class="text-customGray-500">Shipping:</span>
                US $1,234.56
              </p>
            </div>
          </orderCard>
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
      </template>
      <template v-slot:InProgress>
        <actions />
        <div>
          <h1 class="px-5 text-lg py-10">In Progress</h1>
          <status
            :header="'Order no: #123456789'"
            :icon="inprogress"
            :status="'inprogess'"
          >
            <div class="flex w-full justify-between py-1 items-center">
              <p>
                Order Status :
                <span class="text-sm text-customGray-500">Inprogress</span>
              </p>
              <div>
                <p>
                  Order Date :
                  <span class="text-sm text-customGray-500"
                    >2 June 2023 2:40 PM</span
                  >
                </p>
                <p>
                  Estimated Delivery Date :
                  <span class="text-sm text-customGray-500">8 June 2024</span>
                </p>
              </div>
            </div>
          </status>
          <inprogressCard />
          <status
            :header="'Order no: #123456789'"
            :icon="inprogress"
            :status="'inprogess'"
          >
            <div class="flex w-full justify-between py-1 items-center">
              <p>
                Order Status :
                <span class="text-sm text-customGray-500">Inprogress</span>
              </p>
              <div>
                <p>
                  Order Date :
                  <span class="text-sm text-customGray-500"
                    >2 June 2023 2:40 PM</span
                  >
                </p>
                <p>
                  Estimated Delivery Date :
                  <span class="text-sm text-customGray-500">8 June 2024</span>
                </p>
              </div>
            </div>
          </status>
          <inprogressCard />
        </div>
      </template>
      <template v-slot:Completedorders>
        <div>
          <h1 class="px-5 text-lg py-10">Completed Orders</h1>
          <status :header="'Delivered'" :icon="check" :status="'completed'">
            <div class="w-full py-2">
              <p>
                <span class="text-sm text-customGray-500"
                  >On Sat, 25th May, 04:40pm</span
                >
              </p>
            </div>
          </status>
          <orderCard>
            <div class="flex gap-10">
              <base-button
                :size="'large'"
                class="!bg-white !border !border-primary-500 !rounded-md !text-primary-500 !px-10"
                @click="GotoCart"
              >
                View Details</base-button
              >
              <base-button
                :size="'large'"
                class="!bg-white !border !border-primary-500 !rounded-md !text-primary-500 !px-10"
                @click="GotoCart"
              >
                View Details</base-button
              >
              <base-button
                :size="'large'"
                class="!bg-white !border !border-primary-500 !rounded-md !text-primary-500 !px-10"
                @click="GotoCart"
              >
                View Details</base-button
              >
            </div>
          </orderCard>
        </div>
      </template>
      <template v-slot:Canceledorders>
        <div>
          <h1 class="px-5 text-lg py-10">Cancelled Orders</h1>
          <status
            :header="'Cancelled'"
            :icon="cancelled"
            :status="'Cancelled'"
          />
          <orderCard>
            <div class="flex flex-col gap-1">
              <p>
                <span class="text-customGray-500">Quantity:</span>
                2
              </p>
              <p>
                <span class="text-customGray-500">Item price:</span>
                US $1,234.56
              </p>
              <p>
                <span class="text-customGray-500">Shipping:</span>
                US $1,234.56
              </p>
            </div>
          </orderCard>
        </div>
      </template>
      <template v-slot:Returnedorders>
        <div>
          <h1 class="px-5 text-lg py-10">Cancelled Orders</h1>
          <status
            :header="'Cancelled'"
            :icon="cancelled"
            :status="'Cancelled'"
          />
          <orderCard>
            <div class="flex flex-col gap-1">
              <p>
                <span class="text-customGray-500">Quantity:</span>
                2
              </p>
              <p>
                <span class="text-customGray-500">Item price:</span>
                US $1,234.56
              </p>
              <p>
                <span class="text-customGray-500">Shipping:</span>
                US $1,234.56
              </p>
            </div>
          </orderCard>
        </div>
      </template>
    </TabStrip>
  </div>
</template>

<script>
import { TabStrip } from "@progress/kendo-vue-layout";
import actions from "../../../../components/roles/user/orders/action/actions.vue";
import status from "../../../../components/roles/user/orders/status/status.vue";
import inprogress from "../../../../assets/icons/inprogress.svg";
import check from "../../../../assets/icons/check2.svg";
import cancelled from "../../../../assets/icons/cancelled.svg";
import { Pager } from "@progress/kendo-vue-data-tools";
import inprogressCard from "../../../../components/roles/user/orders/inprogress/inprogress.vue";
import orderCard from "../../../../components/roles/user/orders/order/order.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      selected: 0,
      inprogress,
      check,
      cancelled,
      tabs: [
        {
          title: "All",
          content: "All",
        },
        {
          title: "In Progress",
          content: "InProgress",
        },
        {
          title: "Completed orders",
          content: "Completedorders",
        },
        {
          title: "Canceled orders",
          content: "Canceledorders",
        },
        {
          title: "Returned orders",
          content: "Returnedorders",
        },
      ],
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
    };
  },
  mounted() {
    this.selected = this.getSelectedOrdersTab;
  },
  computed: {
    ...mapGetters(["getSelectedOrdersTab"]),
  },
  components: {
    TabStrip,
    actions,
    status,
    Pager,
    inprogressCard,
    orderCard,
  },
  methods: {
    ...mapActions(["setSelectedOrdersTab"]),
    onSelect: function (e) {
      this.selected = e.selected;
      this.setSelectedOrdersTab(e.selected);
    },
  },
};
</script>

<style></style>
