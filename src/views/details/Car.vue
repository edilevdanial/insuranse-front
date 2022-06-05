<template>

  <div class="main">

    <div class="main-block">
      <div class="wrapper">
        <div class="inner">
          <Header/>
          <div class="flex column items-center justify-center container">
            <p class="text-white text-h2 text-weight-bold" style="line-height: 80px">Страхование машины</p>
            <p class="text-white text-h6 text-weight-medium text-center" style="width: 700px">Защищаем ваш автомобиль от всего — от мелких царапин до угона. Если случилось ДТП, вашу машину испортили или угнали хулиганы, то мы оплатим ремонт и восстановим ваше авто, либо выплатим хорошую компенсацию.</p>
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
          <h4>Более 100 000 Казахстанцев уже доверили нам свои квартиры, дома и дачи.</h4>
          <div class="q-mt-md">
            <q-btn color="primary" no-caps class="text-weight-bold text-caption q-pa-sm q-mr-md">Рассчитать и оформить</q-btn>
          </div>
        </div>

      </div>
    </div>

    <div class="create">
      <CreateProperty class="wrapper"/>
    </div>

    <Footer/>

  </div>
</template>

<script>
import Header from "../../components/Header";
import Advantages from "../../components/Advantages";
import CreateProperty from "../../components/CreateForms/CreateProperty";
import Footer from "../../components/Footer";
export default {
  name: "Car",
  components: {Footer, CreateProperty, Advantages, Header},
  data(){
    return{
      items: [
        {
          icon: 'dtp',
          text: 'Ущерб после ДТП'
        },
        {
          icon: 'robber',
          text: 'Угон автомобиля'
        },
        {
          icon: 'mirror',
          text: 'Хищение частей автомобиля'
        },
        {
          icon: 'brick',
          text: 'Падение или попадание инородного объекта'
        },
        {
          icon: 'tornado',
          text: 'Стихийные бедствия'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.main-block{
  background-image: url('https://www.nsk.kz/media/products/2t/1487074363kily1.jpg');
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
  background-image: url("https://www.nsk.kz/media/products/i3/1481561068hkakp.jpg");
  background-repeat: no-repeat;
  position: relative;
  background-size: 100%;
  height: 420px;
}
</style>