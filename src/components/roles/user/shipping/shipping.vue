<template>
  <div class="steps-container">
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="step"
      :class="{ completed: index <= currentStep }"
    >
      <div class="circle" :class="{ animatedCircle: index === currentStep }">
        <i class="fa-solid fa-check"></i>
      </div>
      <div class="label">{{ step }}</div>
      <div
        v-if="index < steps.length - 1"
        class="line"
        :class="{
          completed: index < currentStep,
          animated: index === currentStep,
        }"
        @animationend="handleAnimationEnd"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    steps: {
      type: Array,
      required: true,
    },
    currentStep: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handleAnimationEnd(event) {
      if (event.animationName === "changeColor") {
        event.target.nextElementSibling.classList.add("animatedCircle");
      }
    },
  },
};
</script>

<style scoped>
.steps-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1;
}

.circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.step.completed .circle {
  background-color: #2aac27;
}

.label {
  margin-top: 10px;
  text-align: center;
}

.line {
  position: absolute;
  top: 15px;
  left: calc(50% + 15px);
  width: calc(100% - 30px);
  height: 2px;
  background-color: #e0e0e0;
  z-index: -1;
}

.line.completed {
  background-color: #2aac27;
}

.line.animated {
  animation: changeColor 2s infinite;
}

.circle.animatedCircle {
  animation: highlightCircle 2s infinite;
}

@keyframes changeColor {
  0% {
    background-color: #2aac27;
    width: 0%;
  }
  100% {
    background-color: #2aac27;
    width: 100%;
  }
}

@keyframes highlightCircle {
  0% {
    transform: scale(1);
    background-color: #2aac27;
  }
  50% {
    transform: scale(1.4);
    background-color: #34eb37;
  }
  100% {
    transform: scale(1);
    background-color: #2aac27;
  }
}
</style>
