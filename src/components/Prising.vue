<template>
  <q-card class="flex column items-center q-pa-xl prising" @mouseenter="isHover=true" @mouseleave="isHover=false">
    <h4 class="text-capitalize text-weight-bold" :class="{'text-white':isHover}">{{ title }}</h4>
    <p class="text-body1 q-mt-sm q-mb-sm text-center text-h3 text-weight-medium" :class="{'text-white':isHover}">
      {{ text }}</p>
    <div class="q-mt-md q-mb-sm text-h5" style="color: #23A6F0">{{ price }}<span>  $<br>Per Month</span></div>
    <ul class="q-pa-none">
      <li :key="desc+index" v-for="(desc,index) in description" class="items-center flex q-mb-sm"
          style="list-style: none" :class="{'text-white':isHover}">
        <BaseIcon class="ic-32 q-mr-sm">circle</BaseIcon>
        {{ desc }}
      </li>
    </ul>
    <q-btn color="primary" class="full-width q-pa-sm " size="sm" unelevated>Details</q-btn>
  </q-card>
</template>

<script>
import BaseIcon from "./Base/BaseIcon";

export default {
  name: "Prising",
  components: {BaseIcon},
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: Array,
      required: true,
    },
  },
  data: () => (
      {
        isHover: false
      }
  )
}
</script>

<style lang="scss" scoped>
.prising {
  border: 1px solid #23A6F0;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.7s;

  &:hover {
    background: #252B42;
    transition: 0.7s;
    transform: translateY(-50px);
  }
}
</style>