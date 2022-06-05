<template>
  <div class="main">

    <div class="main-block">
      <div class="wrapper">
        <div class="inner">
          <Header/>
          <div class="flex column items-center justify-center container">
            <p class="text-white text-h2 text-weight-bold" style="line-height: 80px">Страхование от несчастных случаев</p>
            <p class="text-white text-h6 text-weight-medium text-center" style="width: 700px">Круглосуточная защита для взрослых и детей — компенсируем расходы на лечение в результате несчастного случая.</p>
            <div class="q-mt-md">
              <q-btn color="primary" rounded no-caps class="text-weight-bold text-caption q-pa-sm q-mr-md">Рассчитать и оформить</q-btn>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="advantages">

      <div class="wrapper">
        <h4 class="text-weight-bold text-center q-mt-xl">Наши преимущества</h4>

        <div class="flex cards justify-around">
          <template v-for="item in items">
            <Advantages :key="item.text" :icon="item.icon" :text="item.text"/>
          </template>
        </div>

      </div>

    </div>

    <div class="trust">
      <div class="wrapper flex column items-center">
        <div class="content q-mt-xl">
          <h4>Возместим ущерб при физической травме, наступлении инвалидности, уходу из жизни.</h4>
          <div class="q-mt-md">
            <q-btn color="primary" no-caps class="text-weight-bold text-caption q-pa-sm q-mr-md">Рассчитать и оформить</q-btn>
          </div>
        </div>

      </div>
    </div>


    <div class="create">
      <CreateLife class="wrapper"/>
    </div>



    <Footer/>

  </div>
</template>

<script>
import Header from "../../components/Header";
import Advantages from "../../components/Advantages";
import Footer from "../../components/Footer";
import CreateLife from "../../components/CreateForms/CreateLife";

export default {
  name: "Life",
  components: {CreateLife, Footer, Advantages, Header},
  data(){
    return{
      items: [
        {
          icon: 'time' ,
          text: 'Рекордно быстрые и удобные страховые выплаты'
        },
        {
          icon: 'srok' ,
          text: 'Срок действия договора от 1 дня до 1 года'
        },
        {
          icon: 'umbrella' ,
          text: 'Защита на территории любого государства'
        },
        {
          icon: 'money' ,
          text: 'Высокие страховые суммы, до 5 000 000 тенге'
        },
        {
          icon: 'hands' ,
          text: 'Заключение договора без предварительного медицинского осмотра'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.main-block{
  background-image: url('https://www.nsk.kz/media/products/nk/1544522295t9t79.jpg');
  background-repeat: no-repeat;
  position: relative;
  background-size: 100%;
  height: 750px;

  &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.5);
    z-index: 2;
  }
  .inner{
    position: relative;
    z-index: 3;
    color: #fff;
    text-align: center;
  }
  .container{
    margin-top: 130px;
  }

}
.wrapper{
  padding: 0 200px 50px 200px;
}
.content{
  width: 675px;
}
.cards{
  gap: 30px;
}
.trust{
  background-image: url("https://www.nsk.kz/media/products/ou/1544522304oadw5.png");
  background-repeat: no-repeat;
  position: relative;
  background-size: 100%;
  height: 420px;
}
</style>