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

    <div class="flex cards justify-center">
      <template v-for="card in cards">
        <UserCard :key="card.title" :title="card.title" :text="card.text"></UserCard>
      </template>
    </div>

    <div class="flex cards justify-center">
      <template v-for="item in items">
        <QueCard :key="item.title" :icon="item.icon" :text="item.text" :title="item.title"/>
      </template>
    </div>

    <div class="flex cards justify-around items-start">
      <template v-for="spons in sponsor" class="items-start">
        <Sponsor :key="spons" :icon="spons.icon"/>
      </template>
    </div>

    <div class="flex justify-around q-pl-md q-pr-md cards">
      <h3 class="text-weight-bold" style="line-height: 32px; margin: 0">Subscribe For Latest<br>
        Newsletter</h3>
      <div class="flex" style="width: 450px">
        <q-input outlined v-model="text" label="text" aria-placeholder="Your Email" />
        <div style="height: 56px;">Subscribe</div>
      </div>
    </div>

  </div>
</template>

<script>
import Header from "./Header";
import UserCard from "./UserCard";
import QueCard from "./QueCard";
import Sponsor from "./Sponsor";
export default {
  name: "MainBlock",
  components: {Header, UserCard, QueCard, Sponsor},
  data(){
    return{
      cards: [
        {
          title: 'Peace of Mind',
          text: 'the quick fox jumps over the lazy dog'
        },
        {
          title: 'Set For Life',
          text: 'the quick fox jumps over the lazy dog'
        },
        {
          title: '100% Satisfaction',
          text: 'the quick fox jumps over the lazy dog'
        }
      ],
      items:[
        {
          title: 'Peace of Mind',
          text: 'So it really behaves like neither. \n' +
              'Now we have given up. ',
          icon: 'set'
        },
        {
          title: 'Set For Life',
          text: 'They were used to create the \n' +
              'machines that launched ',
          icon: 'peace'
        },
        {
          title: '100% Satisfaction',
          text: 'So it really behaves like neither. \n' +
              'Now we have given up. ',
          icon: 'users'
        }
      ],
      sponsor: [
        {
          icon: 'hooli'
        },
        {
          icon: 'lyft'
        },{
          icon: 'piperHat'
        },
        {
          icon: 'stripe'
        },
        {
          icon: 'aws'
        },
        {
          icon: 'reddit'
        }
      ],
      text: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-block{
    padding: 0 200px 50px 200px;
    background-image: url("../../src/assets/images/background.png");
    background-repeat: no-repeat;
    background-size: 100%;
    height: 800px;
    .cards{
      margin-top: 200px;
      gap: 30px;
    }
  }
  .container{
    margin-top: 130px;
  }

</style>