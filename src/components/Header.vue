<template>
  <div class="header">
    <div class="left">
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
      <a href="#" class="nav-link text-weight-medium">
        Login
      </a>
      <q-btn icon-right=""></q-btn>
    </div>


  </div>
</template>

<script>
export default {
  name: "Header",
  data(){}
}
</script>

<style lang="scss" scoped>
  .header{
    display: flex;
    padding-top: 30px;
  }
  .left{
    display: flex;
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
    margin: 7px 0 0 76px;

  }

</style>