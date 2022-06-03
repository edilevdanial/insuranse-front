<template>
  <div class="back flex column items-center justify-center">
    <q-card bordered class="q-mb-lg card">
      <p class="q-mb-sm">Welcome back! 👋</p>
      <h5 class="text-weight-bold q-mt-none q-mb-lg">Registration your to the platform</h5>
      <q-input class="q-mb-md" value="" label="Your Name" name="Your Name" outlined/>
      <q-input class="q-mb-md" value="" label="Your Email" name="Your Name" outlined/>
      <q-input class="q-mb-md" value="" label="Your Phone Number" name="Your Name" outlined/>
      <q-input class="q-mb-md" value="" label="Your IIN" name="Your Name" outlined/>
      <q-input class="q-mb-lg" value="" label="Password" name="Password" type="password" outlined/>
      <q-btn color="purple" label="Continue" size="lg" class="q-mb-mb full-width"></q-btn>
    </q-card>
    <q-btn label="Have an account ?" flat no-caps><span class="text-accent"> Sign in</span></q-btn>
  </div>
</template>

<script>
export default {
  name: "registration",
}
</script>

<style lang="scss" scoped>
.back {
  padding: 100px 0;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #F8FAFC;
  background-image: url("../../assets/images/backgroundAuth.jpg");

  .card {
    border-radius: 4px;
    padding: 50px;
    box-sizing: border-box;
    width: 445px;
  }
}
</style>