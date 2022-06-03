<template>
  <q-card @mouseenter="isHover = true" @mouseleave="isHover = false" class="cursor-pointer user-card" bordered>
    <BaseIcon class="q-mb-sm user-group">{{isHovered}}</BaseIcon>
    <h5 class="q-mt-none q-mb-sm" :class="{'text-white':isHover}">{{ title }}</h5>
    <p class="q-mb-none" :class="{'text-white':isHover}">{{ text }}</p>
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
  },
  computed:{
    isHovered(){
      return this.isHover ? 'user-group-black' : 'user-group-blue'
    }
  },
  data:()=>({
    isHover:false
  })
}
</script>

<style scoped lang="scss">
.user-card{
  max-width: 328px;
  width: 100%;
  padding: 35px 40px;
  box-sizing: border-box;
  transition: all 0.6s ease;
  &:hover{
    background-color: #23A6F0;
  }
  .user-group{
    width: 49px;
    height: 39px;
  }
}
</style>