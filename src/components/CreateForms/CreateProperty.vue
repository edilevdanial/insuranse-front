<template>
  <div class="q-mt-xl">
    <h3 class="text-weight-bold text-center">Застраховать имущество</h3>

    <div class="flex justify-center">
      <div class="" style="width: 700px">

        <div class="q-pb-md">
          <label class="text-weight-medium text-body1">Тип имущества</label>
          <q-select outlined v-model="type" :options="options" label="Выберите тип" class="q-mt-sm"/>
        </div>

        <div class="q-pb-md">
          <label class="text-body1 text-weight-medium">Период</label>
          <q-select outlined v-model="timeModel" :options="time" label="Выберите период" class="q-mt-sm"/>
        </div>

        <div class="q-pb-md">
          <label class="text-body1 text-weight-medium">Рыночная стоимость</label>
          <q-input type="tel" outlined label="Стоимость" class="q-mt-sm" v-model="price"/>
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
  name: "CreateProperty",
  data(){
    return{
      type: '',
      price: '',
      period: '',
      timeModel: '',
      time: [
          '12 месяцев',
          '1 год',
          '3 года',
          '5 года',
          '10 лет',
      ],
      options: [
          'Жилье', 'Здания'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>