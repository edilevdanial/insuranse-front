<template>
  <div class="q-mx-lg q-py-lg row">
    <div class="col-3">
      <ProfileCard></ProfileCard>
    </div>
    <div class="col-9">
      <UserOrders :insurance-list="insurances"></UserOrders>
    </div>
  </div>

</template>

<script>
import ProfileCard from "@/components/ProfileCard";
import UserOrders from "@/components/userOrders";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "index",
  components: {UserOrders, ProfileCard},
  data: () => ({
    tabs: [
      {
        id: 0,
        title: 'Мои заказы',
        to: '/userOrders',
      }, {
        id: 1,
        title: 'Заказы под реализацию',
        to: '/ordersRealization'
      }, {
        id: 2,
        title: 'Способы оплаты',
        to: '/payMethods'
      }, {
        id: 3,
        title: 'Адреса доставки',
        to: '/addressDelivery'
      }, {
        id: 4,
        title: 'Персонал',
        to: '/personal'
      },
    ],
    tab: 'mails',
    showSettings: true,
    tabsIndex: 0,
  }),
  mounted() {
    this.allInsurances()
  },
  methods: {
    ...mapActions({
      allInsurances: 'allInsurance'
    }),
    toProduct(i) {
      this.$router.push({name: "orderDetails", params: {id: i}});
    },
  },
  computed: {
    ...mapGetters({
      insurances: 'getInsurances'
    })
  }
}
</script>

<style scoped>

</style>