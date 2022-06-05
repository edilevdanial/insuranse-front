<template>
  <div class="q-mt-xl">
    <h3 class="text-weight-bold text-center">Застраховать имущество</h3>

    <div class="flex justify-center">
      <div class="" style="width: 700px">

        <div class="q-pb-md">
          <label class="text-weight-medium text-body1">Тип имущества</label>
          <q-select outlined v-model="PropertyData.type" :options="PropertyData.options" label="Выберите тип" class="q-mt-sm"/>
        </div>

        <div class="q-pb-md">
          <label class="text-body1 text-weight-medium">Период</label>
          <q-select outlined v-model="PropertyData.period" :options="PropertyData.time" label="Выберите период" class="q-mt-sm"/>
        </div>

        <div class="q-pb-md">
          <label class="text-body1 text-weight-medium">Рыночная стоимость</label>
          <q-input outlined label="Стоимость" class="q-mt-sm" v-model="PropertyData.price"/>
        </div>

        <div class="q-mt-md">
          <q-btn @click="setProperty" label="Book Appointment" type="submit" color="primary" class="full-width q-pa-sm " size="md"/>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CreateProperty",
  computed: {
    ...mapGetters({
      profile: 'getProfile'
    })
  },
  methods: {
    ...mapActions({
      property: 'property'
    }),
    setProperty(){
      this.property(this.PropertyData)
    }
  },
  data(){
    return{
      PropertyData:{
        type: '',
        price: '',
        period: '',
        userId: null,
        time: [
          '12 месяцев',
          '2 год',
          '3 года',
          '5 лет',
          '10 лет',
        ],
        options: [
          'Жилье', 'Здания'
        ]
      },
    }
  },
  mounted() {
    this.PropertyData.userId = this.profile.user.id
    console.log(this.profile)
    console.log(this.PropertyData)
  }
}
</script>

<style lang="scss" scoped>

</style>