<template>
  <div class="main-block">
    <Header/>
    <div class="flex column items-center justify-center container">
      <p class="text-white text-h2 text-weight-bold" style="line-height: 80px">We Ensure A Best <br> Insurance Service</p>
      <p class="text-white text-h6 text-weight-medium text-center">We know how large objects will act, but things on a <br>
        small scale just do not act that way.</p>
      <div class="q-mt-md">
        <q-btn color="primary" rounded no-caps class="text-weight-bold text-caption q-pa-sm q-mr-md">Get Quote Now</q-btn>
        <q-btn outline rounded no-caps class="text-weight-bold text-caption q-pa-sm text-white" style="color: white">Learn More</q-btn>
      </div>
    </div>
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
  .container{
    margin-top: 130px;
  }
</style>