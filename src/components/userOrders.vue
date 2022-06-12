<template>
  <div class="order-container">
    <div class="order-container__header">
      <h1 class="order-container__header-title">История страховок</h1>
    </div>
    <div class="order-container__body">
      <div class="order-container__body__history" v-if="insuranceList.length >= 1">
        <!--        <h1 class="order-container__body__history-title">-->
        <!--          Декабрь 2021-->
        <!--        </h1>-->
        <OrderHistoryItem
            :type-house="insurance.type"
            :iin="insurance.IIN"
            :period="insurance.period"
            :year="insurance.year"
            :type="insurance.name"
            :year-of-release="insurance.yearOfRelease"
            :insurance-count="1"
            :price-of-car="insurance.priceOfCar"
            :sale="insurance.price"
            v-for="insurance in insuranceList" :key="insurance.id"
        />
      </div>
      <div class="flex items-center justify-center" v-else>
        <h4>У вас пока ещё нет старховки</h4>
      </div>
    </div>
  </div>
</template>

<script>
import OrderHistoryItem from "@/components/OrderHistoryItem";

export default {
  name: "userOrders",
  props: {
    insuranceList: {
      type: Array,
      required: true
    }
  },
  components: {
    OrderHistoryItem,
  },
  data() {
    return {
      showSettings: true,
      tabsIndex: 0,
      tabs: ["Все", "Доставлено", "Доставляется", "В обработке"],
    };
  },
  methods: {
    toProduct(i) {
      this.$router.push({name: "orderDetails", params: {id: i}});
    },
  },
};
</script>

<style scoped lang="scss">
.order-container {
  padding: 50px 0;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    &-title {
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      line-height: 41px;
      color: #283039;
      margin: 0;
    }

    .tabs {
      position: relative;
      width: max-content;
      display: flex;
      align-items: center;
      background: #f7f8fa;
      border-radius: 8px;
      padding: 4px;

      .tab {
        border-radius: 4px;
        cursor: pointer;
        width: 136px;

        &.active {
          background: #215fce;
          border-radius: 8px;

          p {
            color: #ffffff;
          }
        }

        &:first-child {
          width: 116px;
        }
      }

      p {
        margin: 0;
        padding: 15px 0;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #283039;
      }
    }
  }

  &__body {
    &__history {
      margin-bottom: 40px;

      &:last-child {
        margin: 0;
      }

      &-title {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        text-align: left;
        line-height: 20px;
        color: #b4b8be;
        margin: 0 0 24px;
      }
    }
  }
}

@media screen and (max-width: 1680px) {
  .order-container {
    padding: 30px 0;
  }
}
</style>
