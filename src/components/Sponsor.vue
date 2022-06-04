<template>
  <div>
      <q-card flat>
        <BaseIcon class="q-mb-sm sponsor">{{icon}}</BaseIcon>
      </q-card>
  </div>
</template>

<script>
import BaseIcon from "./Base/BaseIcon";
export default {
  name: "Sponsor",
  components: {BaseIcon},
  data:()=>({}),
  props:{
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.sponsor{
  width: 104px;
  height: 72px;
}
</style>