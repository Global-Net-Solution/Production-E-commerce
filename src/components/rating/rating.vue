<template>
  <div class="rating mt-1 flex">
    <ul class="list" :class="{ disabled: disabled }">
      <li
        :key="star"
        v-for="star in maxstars"
        @mouseover="hoverStar(star)"
        @mouseleave="mouseLeftStar"
        :class="[{ active: star <= stars }]"
        @click="rate($event, star)"
        class="star"
      >
        <font-awesome-icon
          :class="`fa-${starsize}`"
          :icon="
            star <= Math.floor(this.stars)
              ? ['fas', 'star']
              : star == Math.ceil(this.stars) && this.stars % 1 !== 0
              ? ['fas', 'star-half-stroke']
              : ['far', 'star']
          "
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas);
library.add(far);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "vue_star_rating",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      stars: this.star,
      star_desc: this.getRatingDesc(this.star),
    };
  },

  emits: ["newRate"],
  props: {
    star: {
      type: Number,
    },
    maxstars: {
      type: Number,
      default: 5,
    },
    hasresults: {
      type: Boolean,
      default: true,
    },
    hasdescription: {
      type: Boolean,
      default: true,
    },
    ratingdescription: {
      type: Array,
      default: () => {
        return [
          {
            text: "Poor",
            class: "star-poor",
          },
          {
            text: "Below Average",
            class: "star-belowAverage",
          },
          {
            text: "Average",
            class: "star-average",
          },
          {
            text: "Good",
            class: "star-good",
          },
          {
            text: "Excellent",
            class: "star-excellent",
          },
        ];
      },
      //default: ["Poor", "Below Average", "Average", "Good", "Excellent"]
    },
    starsize: {
      type: String,
      default: "2x",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    rate(e, star) {
      if (this.disabled) {
        return;
      }
      if (star <= this.maxstars && star >= 0) {
        const pointer = e.clientX - e.target.getBoundingClientRect().left;
        const starWidth = e.target.getBoundingClientRect().width;
        if (Math.ceil(pointer) < Math.ceil(starWidth / 2)) {
          this.stars = star - 0.5;
        } else {
          this.stars = star;
        }
        this.$emit("newRate", this.stars);
      }
    },
    hoverStar(star) {
      if (this.disabled) {
        return;
      }
      if (star <= this.maxstars && star >= 0) {
        this.star_desc = this.ratingdescription[star - 1];
      }
    },
    mouseLeftStar() {
      if (this.disabled) {
        return;
      }
      if (this.stars) {
        this.star_desc = this.ratingdescription[this.stars - 1];
        return this.star_desc;
      } else {
        this.star_desc = "";
      }
    },
    getRatingDesc(star) {
      if (star) {
        this.star_desc = this.ratingdescription[star - 1];
      }
      return this.star_desc;
    },
  },
};
</script>

<style lang="scss" scoped>
$active-color: #f3d23e;
$white-color: #fff;
$poor-color: rgb(186, 186, 186);
$below-average-color: rgb(245, 195, 87);
$average-color: rgb(255, 172, 90);
$good-color: rgb(193, 215, 89);
$excellent-color: rgb(72, 150, 77);
$no-star-desc-color: rgb(00, 00, 00);
.rating {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
ul.list li,
span {
  display: inline-block;
  margin: 2px 1px;
  color: #fbb36d;
}
.fa-lg {
  font-size: 20px;
}
.fa-xl {
  font-size: 35px;
}
.list {
  margin: 0 0 5px 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  &:hover {
    .star {
      color: $active-color;
    }
  }
  span {
    width: 130px;
    margin-left: 5px;
    padding: 5px;
    color: $white-color;
    border-radius: 2px;
    font-size: 13px;
    text-align: center;
    font-weight: bold;
    transition: 0.2s;
    line-height: 25px;
  }
}
.list.disabled {
  &:hover {
    .star {
      color: #ffb74d;
      cursor: default;
    }
    .star.active {
      color: $active-color;
    }
  }
}
.star {
  cursor: pointer;
  &:hover {
    & ~ .star {
      &:not(.active) {
        color: #ffb74d;
      }
    }
  }
}
.active {
  color: $active-color;
}
.star-poor {
  background: $poor-color;
}
.star-belowAverage {
  background: $below-average-color;
}
.star-average {
  background: $active-color;
}
.star-good {
  background: $good-color;
}
.star-excellent {
  background: $excellent-color;
}
.nostar_desc {
  background: $no-star-desc-color;
}
</style>
