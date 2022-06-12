<template>
  <div class="q-mt-xl">
    <h3 class="text-weight-bold text-center">Застраховать машину</h3>

    <div class="flex justify-center">
      <div class="" style="width: 700px">

        <div class="q-pb-md">
          <label class="text-body1 text-weight-medium">Рыночная стоимость</label>
          <q-input type="tel" outlined label="Стоимость" class="q-mt-sm" v-model="carData.priceOfCar"/>
        </div>

        <div class="q-pb-md">
          <label class="text-body1 text-weight-medium">Дата выпуска</label>
          <q-input type="tel" outlined label="Стоимость" class="q-mt-sm" v-model="carData.yearOfRelease"/>
        </div>

        <div class="q-mt-md">
          <q-banner class="bg-green bannerr text-center q-mb-md text-white" v-if="isFinish">Вы успешно застроховались!</q-banner>
          <q-btn @click="setCar" label="Book Appointment" type="submit" color="primary" class="full-width q-pa-sm " size="md"/>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CreateCar",
  computed: {
    ...mapGetters({
      profile: 'getProfile'
    })
  },
  methods:{
    ...mapActions({
      car: 'car'
    }),

    setCar(){
      this.car({car: this.carData, callback: ()=>{
        this.isFinish = true
        } } )

    }
  },

  data(){
    return{
    carData: {
      priceOfCar: '',
      yearOfRelease: '',
      userId: null,
    },
      isFinish: false
    }
  },
  mounted() {
    this.carData.userId = this.profile.user.id
    console.log(this.profile)
    console.log(this.carData)
  }

}
</script>

<style scoped  lang="scss">
.bannerr{
  border-radius: 15px;
}
</style>