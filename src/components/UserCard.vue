<template>
  <q-card class="user-card" bordered>
    <BaseIcon class="q-mb-sm user-group">user-group-blue</BaseIcon>
    <h4 class="q-mt-none q-mb-sm">{{ title }}</h4>
    <p class="q-mb-none">{{ text }}</p>
  </q-card>
</template>

<script>
import BaseIcon from "@/components/Base/BaseIcon";
export default {
  name: "UserCard",
  components: {BaseIcon},
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.user-card{
  &:hover{
    background-color: #23A6F0;
  }
  .user-group{
    width: 49px;
    height: 39px;
  }
}
</style>