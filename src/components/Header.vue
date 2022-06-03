<template>
  <div class="header">
    <div class="flex items-center">
      <h3 class="header-title text-weight-bold">
        SlnSave
      </h3>
      <nav>
        <ul class="nav">
          <li class="nav-bar">
            <a href="#" class="nav-link text-weight-medium">Home</a>
          </li>
          <li class="nav-bar">
            <a href="#" class="nav-link text-weight-medium">Product</a>
          </li>
          <li class="nav-bar">
            <a href="#" class="nav-link text-weight-medium">Pricing</a>
          </li>
          <li class="nav-bar">
            <a href="#" class="nav-link text-weight-medium">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="right">
      <a href="#" class="nav-link text-weight-medium q-mr-xl">
        Login
      </a>
      <q-btn color="primary">Become a member
        <base-icon class="ic-12 q-ml-md">arrow</base-icon>
      </q-btn>
    </div>


  </div>
</template>

<script>
import BaseIcon from "./Base/BaseIcon";
export default {
  name: "Header",
  components: {BaseIcon},
  data(){}
}
</script>

<style lang="scss" scoped>
  .header{
    display: flex;
    padding-top: 30px;
    justify-content: space-between;
  }
  .header-title{
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.1px;
    color: white;
    margin: 0;
  }
  .nav-link{
    font-size: 14px;
    text-align: center;
    line-height: 24px;
    letter-spacing: 0.2px;
    text-decoration: none;
    color: white;
  }
  .nav-bar{
    margin-right: 21px;
    list-style-type: none;
  }
  .nav-bar:last-child{
    margin-right: 0;
  }
  .nav{
    display: flex;
    margin: 0 0 0 76px;
    align-items: center;
  }


</style>