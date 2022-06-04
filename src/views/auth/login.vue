<template>
  <div class="back flex column items-center justify-center">
    <q-card bordered class="q-mb-lg card">
      <p class="q-mb-sm">Welcome back! 👋</p>
      <h5 class="text-weight-bold q-mt-none q-mb-lg">Sign in to your account</h5>
      <q-input v-model="user.email" class="q-mb-md" value="" label="Your Email" name="Your Email" outlined/>
      <q-input v-model="user.password" class="q-mb-lg" value="" label="Password" name="Password" type="password"
               outlined/>
      <q-btn @click="authUser" color="purple" label="Continue" size="lg" class="q-mb-mb full-width"></q-btn>
      <div class="flex justify-center">
        <q-btn flat no-caps label="Forgot your password?" text-color="purple"></q-btn>
      </div>
    </q-card>
    <q-btn to="registration" label="Don't have an account ?" flat no-caps><span class="text-accent">Sign up</span></q-btn>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "login",
  data: () => ({
    user: {
      email: '',
      password: ''
    }
  }),
  methods: {
    ...mapActions({
      login: 'login'
    }),
    authUser() {
      console.log('yes')
      this.login(this.user)
    }
  }
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