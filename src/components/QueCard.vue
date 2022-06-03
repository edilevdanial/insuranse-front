<template>
  <q-card class="user-card" flat>
    <BaseIcon class="q-mb-sm user-group">{{icon}}</BaseIcon>
    <h6 class="q-mt-none q-mb-sm">{{title}}</h6>
    <p class="q-mb-none">{{text}}</p>
  </q-card>
</template>

<script>
import BaseIcon from "./Base/BaseIcon";
export default {
  name: "QueCard",
  components: {BaseIcon},
  props:{
    title:{
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    icon:{
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.user-card{
  max-width: 328px;
  width: 100%;
  padding: 35px 40px;
  box-sizing: border-box;
  transition: all 0.6s ease;
  .user-group{
    width: 68px;
    height: 59px;
  }
}
</style>