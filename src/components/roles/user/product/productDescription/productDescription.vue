<template>
  <div class="flex mt-5 h-7 mb-7">
    <div class="bg-primary-500 h-full w-1.5 rounded text-primary-500"></div>
    <h3 class="pl-3 text-2xl font-extrabold">Product Description</h3>
  </div>
  <hr />
  <div class="mt-5">
    <h2 class="text-lg font-semibold">Item description</h2>
    <p class="mt-5">
      {{ description }}
    </p>
  </div>
  <!-- <div class="mt-20">
    <h2 class="text-lg font-semibold">Business seller information</h2>
    <ul class="mt-8">
      <li class="flex items-center gap-3">
        <p class="text-sm text-customGray-400">Business name:</p>
        <p class="text-sm font-semibold">Amet minim</p>
      </li>
      <li class="flex items-center gap-3">
        <p class="text-sm text-customGray-400">Business address:</p>
        <p class="text-sm font-semibold">
          2715 Ash Dr. San Jose, South Dakota 83475
        </p>
      </li>
    </ul>
  </div> -->
  <!-- <TabStrip :selected="selected" @select="onSelect" :tabs="tabs">
    <template v-slot:Description>
      <div class="mt-5">
        <h2 class="text-lg font-semibold">Item specifics</h2>
        <ul class="mt-8">
          <li class="flex items-center gap-3">
            <p class="text-sm text-customGray-400">Condition:</p>
            <p class="text-sm font-semibold">New</p>
          </li>
          <li class="flex items-center gap-3">
            <p class="text-sm text-customGray-400">Brand:</p>
            <p class="text-sm font-semibold">Symantec</p>
          </li>
          <li class="flex items-center gap-3">
            <p class="text-sm text-customGray-400">Type:</p>
            <p class="text-sm font-semibold">
              Anti-Spyware, Antivitus/Internet Security, Firewall Software
            </p>
          </li>
          <li class="flex items-center gap-3">
            <p class="text-sm text-customGray-400">MPN:</p>
            <p class="text-sm font-semibold">1234567890</p>
          </li>
        </ul>
      </div>
      <div class="mt-20">
        <h2 class="text-lg font-semibold">Item description</h2>
        <p class="mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like
        </p>
      </div>
      <div class="mt-20">
        <h2 class="text-lg font-semibold">Business seller information</h2>
        <ul class="mt-8">
          <li class="flex items-center gap-3">
            <p class="text-sm text-customGray-400">Business name:</p>
            <p class="text-sm font-semibold">Amet minim</p>
          </li>
          <li class="flex items-center gap-3">
            <p class="text-sm text-customGray-400">Business address:</p>
            <p class="text-sm font-semibold">
              2715 Ash Dr. San Jose, South Dakota 83475
            </p>
          </li>
        </ul>
      </div>
    </template>
    <template v-slot:Userreviews>
      <div class="mt-5">
        <h2 class="flex items-center gap-3">
          <span class="text-xl font-semibold">4.5</span>
          <rating
            :star="star"
            :disabled="true"
            :maxstars="maxStars"
            starsize="md"
          />
        </h2>
      </div>
      <div class="mt-10 w-80">
        <div class="flex items-center w-full gap-5 mb-5">
          <span>small</span>
          <ProgressBar :value="value" :label-visible="false" class="w-full" />
          <span>50%</span>
        </div>
        <div class="flex items-center w-full gap-5 mb-5">
          <span>small</span>
          <ProgressBar :value="value2" :label-visible="false" class="w-full" />
          <span>30%</span>
        </div>
        <div class="flex items-center w-full gap-5 mb-5">
          <span>small</span>
          <ProgressBar :value="value3" :label-visible="false" class="w-full" />
          <span>100%</span>
        </div>
      </div>
      <div class="w-full mt-10">
        <Review
          :name="'Sara Tarek'"
          :date="'1 Week ago'"
          :rate="4"
          :rateValue="'4.5'"
          :Discription="'Lorem ipsum dolor sit amet consectetur. Morbi tempor vulputate enim donec faucibus dui eu. Et nibh a pulvinar nec orci dictumst. Mi odio viverra accumsan et turpis risus. Sodales augue tortor lorem eget. Ultrices augue proin ac pellentesque euismod. Mauris lorem odio nisl proin elementum pharetra egestas. At quis eget eu fermentum pretium fringilla nisi. Laoreet dui id tempus auctor nullam at bibendum feugiat. Vulputate arcu habitant nulla aliquet diam nibh porttitor accumsan. Est sit feugiat sem semper.'"
        />
      </div>
    </template>
    <template v-slot:Images>
      <div class="mt-5">
        <h2 class="flex items-center gap-3">
          <span class="text-xl font-semibold">4.5</span>
          <rating
            :star="star"
            :disabled="true"
            :maxstars="maxStars"
            starsize="md"
          />
        </h2>
      </div>
      <div class="mt-10 w-80">
        <div class="flex items-center w-full gap-5 mb-5">
          <span>small</span>
          <ProgressBar :value="value" :label-visible="false" class="w-full" />
          <span>50%</span>
        </div>
        <div class="flex items-center w-full gap-5 mb-5">
          <span>small</span>
          <ProgressBar :value="value2" :label-visible="false" class="w-full" />
          <span>30%</span>
        </div>
        <div class="flex items-center w-full gap-5 mb-5">
          <span>small</span>
          <ProgressBar :value="value3" :label-visible="false" class="w-full" />
          <span>100%</span>
        </div>
      </div>
      <div class="w-full mt-10">
        <Review
          :name="'Sara Tarek'"
          :date="'1 Week ago'"
          :rate="4"
          :rateValue="'4.5'"
          :img="img"
          :Discription="'Lorem ipsum dolor sit amet consectetur. Morbi tempor vulputate enim donec faucibus dui eu. Et nibh a pulvinar nec orci dictumst. Mi odio viverra accumsan et turpis risus. Sodales augue tortor lorem eget. Ultrices augue proin ac pellentesque euismod. Mauris lorem odio nisl proin elementum pharetra egestas. At quis eget eu fermentum pretium fringilla nisi. Laoreet dui id tempus auctor nullam at bibendum feugiat. Vulputate arcu habitant nulla aliquet diam nibh porttitor accumsan. Est sit feugiat sem semper.'"
        />
      </div>
    </template>
  </TabStrip> -->
</template>

<script>
import { TabStrip } from "@progress/kendo-vue-layout";
import { ProgressBar } from "@progress/kendo-vue-progressbars";
import Review from "../../../../../components/roles/user/product/productReview/productReview.vue";
import img from "../../../../../assets/img/review-img.jpeg";
export default {
  components: {
    TabStrip,
    ProgressBar,
    Review,
  },
  props: {
    product: Object,
    description: String,
  },
  data: function () {
    return {
      img,
      selected: 0,
      tabs: [
        {
          title: "Description",
          content: "Description",
        },
        {
          title: "User reviews",
          content: "Userreviews",
        },
        {
          title: "Images",
          content: "Images",
        },
      ],
      maxStars: 1,
      star: 1,
      value: 50,
      value2: 30,
      value3: 100,
    };
  },
  watch: {
    description(newVal) {
      //console.log(newVal);
    },
  },
  methods: {
    onSelect: function (e) {
      this.selected = e.selected;
    },
  },
};
</script>

<style>
.k-tabstrip > .k-content {
  border: none;
  padding-inline: 30px;
}
.k-tabstrip-top > .k-tabstrip-items-wrapper {
  border-bottom-width: 0px;
}
.k-tabstrip-items-wrapper .k-item,
.k-tabstrip-items-wrapper .k-item:hover {
  color: #807d7e;
}
.k-tabstrip-top > .k-tabstrip-items-wrapper .k-item.k-active {
  /* border: none; */
  color: #339ddb;
  border: 2px solid#339DDB;
}
.k-progressbar .k-selected {
  border-color: #f5bf55 !important;
  background-color: #f5bf55 !important;
}
.k-tabstrip-items-wrapper .k-item {
  color: #000 !important;
}
</style>
