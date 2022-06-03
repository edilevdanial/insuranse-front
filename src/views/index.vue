<template>
  <div class="flex justify-between">
    <template v-for="card in cards">
      <UserCard :key="card.title" :title="card.title" :text="card.text"></UserCard>
    </template>
  </div>
</template>

<script>
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
}
</script>

<style scoped>

</style>