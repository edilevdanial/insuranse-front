<template>
<<<<<<< HEAD
  <div>
    <MainBlock/>
=======
  <div class="flex justify-between">
    <template v-for="card in cards">
      <UserCard :key="card.title" :title="card.title" :text="card.text"></UserCard>
    </template>
>>>>>>> 705657e923bae91235b7d9872cfd1dba36e13fc8
  </div>
</template>

<script>
<<<<<<< HEAD
import MainBlock from "../components/MainBlock";
export default {
  name: "index",
  components: {MainBlock}
=======
import UserCard from "@/components/UserCard";

export default {
  name: "index",
  components: {UserCard},
  data: () => ({
    cards: [
      {
        title: 'Peace of Mind',
        text: 'the quick fox jumps over the lazy dog'
      },
      {
        title: 'Set For Life',
        text: 'the quick fox jumps over the lazy dog'
      },
      {
        title: '100% Satisfaction',
        text: 'the quick fox jumps over the lazy dog'
      }
    ]
  })
>>>>>>> 705657e923bae91235b7d9872cfd1dba36e13fc8
}
</script>

<style scoped>

</style>