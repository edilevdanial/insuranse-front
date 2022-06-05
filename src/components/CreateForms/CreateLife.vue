<template>
  <div class="q-mt-xl">
    <h3 class="text-weight-bold text-center">Страхование от несчастных случаев</h3>

    <div class="flex justify-center">
      <div class="" style="width: 700px">

        <div class="q-pb-md">
          <label class="text-body1 text-weight-medium">Введите ИИН</label>
          <q-input type="tel" outlined label="Стоимость" class="q-mt-sm" v-model="IIN"/>
        </div>

        <div class="q-pb-md">
          <label class="text-body1 text-weight-medium"></label>
          <q-select outlined v-model="year" :options="period" label="Выберите период" class="q-mt-sm"/>
        </div>

        <div class="q-mt-md">
          <q-btn label="Book Appointment" type="submit" color="primary" class="full-width q-pa-sm " size="md"/>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "CreateLife",
  data(){
    return{
      IIN: '',
      year: '',
      period: [
        '12 месяцев',
        '2 год',
        '3 года',
        '5 года',
        '10 лет',
      ],
    }
  }
}
</script>

<style scoped>

</style>