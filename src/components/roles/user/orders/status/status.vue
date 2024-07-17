<template>
  <div
    class="w-full px-5 py-8 mb-5"
    :class="
      status === 'inprogess'
        ? 'bg-customGray-100'
        : status === 'completed'
        ? 'bg-status-completed'
        : 'bg-status-Cancelled'
    "
  >
    <div class="flex items-center gap-3">
      <img :src="icon" alt="status" />
      <h5 class="text-lg">{{ header }}</h5>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>
