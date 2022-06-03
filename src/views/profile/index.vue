<template>
  <div>
    <q-tabs
        v-model="tab"
        class="text-teal"
    >
      <q-tab name="mails" icon="heart" label="Жизнь" />
      <q-tab name="alarms" icon="alarm" label="Жилье" />
      <q-tab name="movies" icon="car" label="Машина" />
    </q-tabs>
  </div>

</template>

<script>
export default {
  name: "index",
  data:()=>({
    tab:'mails'
  })
}
</script>

<style scoped>

</style>