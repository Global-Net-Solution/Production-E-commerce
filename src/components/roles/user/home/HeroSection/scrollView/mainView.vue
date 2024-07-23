<template>
  <div>
    <ScrollView
      :style="{
        width: '100%',
        height: '100%',
      }"
      :data-items="items"
      :content="'content'"
    >
      <template v-slot:content="{ props }">
        <div class="image-with-text w-full h-full">
          <!-- <p>
            Showing image {{ props.item.position }} of {{ props.items.length }}.
          </p> -->
          <img
            class="cursor-pointer sm:object-fill md:object-fill"
            :src="GetImg(props.item)"
            :alt="`Photo ${props.item.position}`"
            :style="{
              width: '100%',
              height: '100%',
            }"
            :draggable="false"
          />
        </div>
      </template>
    </ScrollView>
  </div>
</template>

<script>
import { ScrollView } from "@progress/kendo-vue-scrollview";
import mainHeroImg from "../../../../../../assets/img/1.png";
import mainHeroImgSm from "../../../../../../assets/img/3sm.png";
import HeroImgSm from "../../../../../../assets/img/2sm.png";
export default {
  components: {
    ScrollView,
  },
  data() {
    return {
      mainHeroImg,
      mainHeroImgSm,
      items: [
        {
          position: 1,
          url: mainHeroImg,
          urlSm: HeroImgSm,
        },
        {
          position: 2,
          url: mainHeroImg,
          urlSm: mainHeroImgSm,
        },
        {
          position: 3,
          url: mainHeroImg,
          urlSm: HeroImgSm,
        },
      ],
    };
  },
  mounted() {
    // this.GetImg(this.items[0]);
    // window.addEventListener("resize", this.GetImg(this.items[0]));
  },
  methods: {
    // GoToProducts() {
    //   this.$router.push("/products");
    // },
    GetImg(item) {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1150) {
        return item.urlSm;
      } else {
        return item.url;
      }
    },
  },
};
</script>
<style>
.k-scrollview-nav > .k-link.k-primary {
  background: #000 !important;
  border: 2px solid#fff !important;
}
</style>
