<template>
  <div>
    <q-card>
      <h3 class="text-caption"></h3>
      <p class=""></p>
      <span></span>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "Prising",
  props:{
    title: {
      type: String,
      required: true
    },
    text:{
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

  }
}
</script>

<style scoped>

</style>