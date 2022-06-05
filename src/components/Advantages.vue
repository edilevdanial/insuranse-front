<template>
  <q-card class="user-card flex justify-center" flat>
    <BaseIcon class="q-mb-sm text-center" :class="{'ic-125':isCar,'user-group ic-25':!isCar}">{{ icon }}</BaseIcon>
    <h6 class="q-mt-none q-mb-sm">{{ title }}</h6>
    <p class="q-mb-none text-center">{{ text }}</p>
  </q-card>
</template>

<script>
import BaseIcon from "./Base/BaseIcon";

export default {
  name: "advantages",
  components: {BaseIcon},
  props: {
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    icon: {
      type: String,
      required: true
    },
    isCar: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.user-card {
  max-width: 200px;
  width: 100%;
  padding: 15px 20px;
  box-sizing: border-box;
  transition: all 0.6s ease;

  .user-group {
    width: 68px;
    height: 59px;
  }
}
</style>