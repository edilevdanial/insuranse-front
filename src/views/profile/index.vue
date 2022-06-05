<template>
  <div class="q-mx-lg q-py-lg row">
    <div class="col-4">
      <ProfileCard></ProfileCard>
    </div>
    <div class="col-8">
      <q-tabs
          v-model="tab"
          class="q-mb-xl text-teal"
      >
        <q-tab name="mails" icon="mail" label="Mails"/>
        <q-tab name="alarms" icon="alarm" label="Alarms"/>
        <q-tab name="movies" icon="movie" label="Movies"/>
      </q-tabs>

    </div>
  </div>

</template>

<script>
import ProfileCard from "@/components/ProfileCard";

export default {
  name: "index",
  components: {ProfileCard},
  data: () => ({
    tab: 'mails'
  })
}
</script>

<style scoped>

</style>