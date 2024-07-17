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
            class="object-cover"
            :src="props.item.url"
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
import mainHeroImg from "../../../../../../assets/img/main-hero-section-img.png";

export default {
  components: {
    ScrollView,
  },
  data() {
    return {
      mainHeroImg,
      items: [
        {
          position: 1,
          url: mainHeroImg,
        },
        {
          position: 2,
          url: mainHeroImg,
        },
        {
          position: 3,
          url: mainHeroImg,
        },
        {
          position: 4,
          url: mainHeroImg,
        },
        {
          position: 5,
          url: mainHeroImg,
        },
      ],
    };
  },
};
</script>
<style>
.k-scrollview-nav > .k-link.k-primary {
  background: #000 !important;
  border: 2px solid#fff !important;
}
</style>
