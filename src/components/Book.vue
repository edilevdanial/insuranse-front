<template>
  <div class="flex justify-center q-mt-xl">
    <div class="book flex row">
      <div class="lef col-4">
        <img src="../../src/assets/images/media.png" style="width: 100%">
      </div>
      <div class="right col-8">
        <h3 class="text-weight-bold text-center">Book Appointment</h3>

        <div class="q-mt-xl q-ml-xl q-mr-xl">
          <div class="q-pb-md">
            <label class=" text-weight-medium text-body1">Name</label>
            <q-input filled v-model="text" label="Full Name*" class="q-mt-sm"/>
          </div>
          <div class="q-mb-md">
            <label class="text-body1  text-weight-medium">Email</label>
            <q-input filled v-model="email" label="Email*" class="q-mt-sm"/>
          </div >
          <div class="q-mb-md">
            <label class="text-body1 text-weight-medium">Insurance</label>
            <q-select filled v-model="type" :options="options" label="Please select" class="q-mt-sm"/>
          </div>
          <div class="q-mb-md">
            <label class="text-body1  text-weight-medium">Time</label>
            <q-select filled v-model="timeModel" :options="time" label="Time" class="q-mt-sm" />
          </div>
          <div class="q-mt-xl">
            <q-btn label="Book Appointment" type="submit" color="primary" class="full-width q-pa-sm " size="md"/>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: "Book",
  setup(){
    return{
      type: '',
      text: '',
      email: '',
      timeModel: '',
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      time:[
          '10AM',
          '11AM',
          '12AM',
          '1PM',
          '2PM',
          '3PM',
          '4PM',
          '5PM',
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.book{
  background: white;
  width: 950px;
}
</style>