<template>
  <div class="q-mt-xl">
    <h3 class="text-weight-bold text-center">Страхование от несчастных случаев</h3>

    <div class="flex justify-center">
      <div class="" style="width: 700px">

        <div class="q-pb-md">
          <label class="text-body1 text-weight-medium">Введите ИИН</label>
          <q-input mask="############" outlined label="Стоимость" class="q-mt-sm" v-model="LifeData.IIN"/>
        </div>

        <div class="q-pb-md">
          <label class="text-body1 text-weight-medium"></label>
          <q-select outlined v-model="LifeData.year" :options="LifeData.period" label="Выберите период" class="q-mt-sm"/>
        </div>

        <div class="q-mt-md">
          <q-btn label="Book Appointment" @click="setLife" type="submit" color="primary" class="full-width q-pa-sm " size="md"/>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      profile: 'getProfile'
    })
  },
  methods: {
    ...mapActions({
      life: 'life'
    }),

    setLife(){
      this.life(this.LifeData)
    }
  },
  name: "CreateLife",
  data(){
    return{
      LifeData:{
        IIN: '',
        year: '',
        userId: null,
        period: [
          '12 месяцев',
          '2 год',
          '3 года',
          '5 лет',
          '10 лет',
        ],
      }

    }
  },
  mounted() {
    this.LifeData.userId = this.profile.user.id
    console.log(this.LifeData)
    console.log(this.profile)
  }
}
</script>

<style scoped>

</style>