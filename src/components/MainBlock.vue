<template>
  <div class="main-block">
    <Header/>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: "MainBlock",
  components: {Header},
  data(){
    return{
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-block{
    padding: 0 200px;
    background-image: url("../../src/assets/images/background.png");
    background-repeat: no-repeat;
    background-size: 100%;
    height: 800px;
  }
</style>