<template>
  <div class="order">
    <div class="order__item">
      <div class="order__item__id">
        <h1 class="order__item__id-name">Заказ №13455</h1>
        <p class="order__item__id-date">Дата создания: 25.12.21</p>
      </div>
      <div class="order__item__count">
        <h1 class="order__item__count-name">Кол-во страховок</h1>
        <p class="order__item__count-piece">105 шт.</p>
      </div>
      <div class="order__item__price">
        <h1 class="order__item__price-name">Стоимость</h1>
        <p class="order__item__price-price">11 548 852₸</p>
      </div>
<!--      <div class="order__item__status">-->
<!--        &lt;!&ndash;                <h1 class="order__item__status-name order__item__status-success">Доставлен</h1>&ndash;&gt;-->
<!--        <h1 class="order__item__status-name order__item__status-process">Доставляется {{ getProcess }}</h1>-->
<!--        &lt;!&ndash;        <h1 class="order__item__status-name order__item__status-treatment">В обработке</h1>&ndash;&gt;-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderHistoryItem",
  data() {
    return {
      finish: 5,
      all: 7
    }
  },
  computed: {
    getProcess() {
      return `${this.finish}/${this.all}`
    }
  }
}
</script>

<style scoped lang="scss">
.order {
  width: 100%;
  background: #F7F8FA;
  border-radius: 8px;
  margin-bottom: 24px;
  cursor: pointer;

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 31px 40px;

    &__id {
      &-name {
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 31px;
        color: #283039;
        margin: 0 0 3px;
      }

      &-date {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #B4B8BE;
        margin: 0;
      }
    }

    &__count {
      &-name {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #B4B8BE;
        margin: 0 0 4px;
      }

      &-piece {
        font-size: 16px;
        line-height: 20px;

        color: #283039;
        margin: 0;
      }
    }

    &__price {
      &-name {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #B4B8BE;
        margin: 0 0 4px;
      }

      &-price {
        font-size: 16px;
        line-height: 20px;

        color: #283039;
        margin: 0;
      }
    }

    &__status {
      &-name {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 25px;
        margin: 0;
      }

      &-success {
        color: #215FCE;
      }

      &-process {
        color: #ED8230;
      }

      &-treatment {
        color: #B4B8BE;
      }
    }

  }
}
</style>
