<!--<template>-->
<!--  <BaseModal class="base-modal" v-if="show">-->
<!--    <div class="modal__content" v-click-outside="closeModal">-->
<!--      <div class="add-personal">-->
<!--        <BaseButton-->
<!--          variant="icon"-->
<!--          @click="closeModal"-->
<!--          class="add-personal-close"-->
<!--        >-->
<!--          <BaseIcon class="ic-19">close</BaseIcon>-->
<!--        </BaseButton>-->
<!--        <p class="add-personal-title">Редактирование профиля</p>-->
<!--        <div class="add-personal__new">-->
<!--          <div class="add-personal__new__images">-->
<!--            <div class="add-personal__new__images-block">-->
<!--              <img-->
<!--                class="add-personal__new__images-block-img"-->
<!--                src="@/assets/images/addPersonal.png"-->
<!--                alt=""-->
<!--                srcset=""-->
<!--              />-->
<!--            </div>-->
<!--            <p class="add-personal__new__images-text">-->
<!--              Загрузить фото-->
<!--            </p>-->
<!--          </div>-->
<!--          <div class="add-personal__new__info">-->
<!--            <BaseTextField-->
<!--              class="add-personal__new__info-input"-->
<!--              with-label-->
<!--              label="Ф.И.О"-->
<!--              placeholder="Иван Иванович"-->
<!--            />-->
<!--            <BaseTextField-->
<!--              class="add-personal__new__info-input"-->
<!--              with-label-->
<!--              label="Телефон"-->
<!--              placeholder="+7 707 00 00"-->
<!--            />-->
<!--            <BaseTextField-->
<!--              class="add-personal__new__info-input"-->
<!--              with-label-->
<!--              label="Email"-->
<!--              placeholder="Введите адрес"-->
<!--            />-->
<!--            <BaseTextField-->
<!--              class="add-personal__new__info-input"-->
<!--              with-label-->
<!--              label="Сменить пароль"-->
<!--              placeholder="Старый пароль"-->
<!--            />-->
<!--            <BaseTextField-->
<!--              class="add-personal__new__info-input"-->
<!--              placeholder="Придумайте новый пароль"-->
<!--            />-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="add-personal__button">-->
<!--          <BaseButton variant="blue full-width"-->
<!--          >Сохранить-->
<!--          </BaseButton-->
<!--          >-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </BaseModal>-->
<!--</template>-->

<!--<script>-->
<!--import BaseModal from "@/components/base/BaseModal";-->
<!--import vClickOutside from "v-click-outside";-->
<!--import BaseButton from "@/components/base/BaseButton";-->
<!--import BaseIcon from "@/components/base/BaseIcon";-->

<!--export default {-->
<!--  name: "ProfileEditModal",-->
<!--  components: {BaseIcon, BaseButton, BaseModal},-->
<!--  props: {-->
<!--    show: {-->
<!--      type: Boolean,-->
<!--      default: false,-->
<!--    },-->
<!--  },-->
<!--  methods: {-->
<!--    closeModal() {-->
<!--      this.show = false;-->
<!--      this.$emit("close");-->
<!--    },-->
<!--    resetAddress() {-->
<!--      this.show = false;-->
<!--      this.$emit("reset");-->
<!--    },-->
<!--  },-->
<!--  directives: {-->
<!--    clickOutside: vClickOutside.directive,-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style scoped lang="scss">-->
<!--.base-modal {-->
<!--  z-index: 1000;-->
<!--}-->

<!--.modal__content {-->
<!--  max-width: 616px;-->
<!--  padding: 0;-->
<!--  position: relative;-->
<!--  display: block;-->

<!--  .add-personal {-->
<!--    padding: 42px 40px 40px 44px;-->

<!--    &-close {-->
<!--      position: absolute;-->
<!--      right: 34px;-->
<!--      top: 34px;-->
<!--    }-->

<!--    &-title {-->
<!--      font-family: GoogleSans-Medium;-->
<!--      font-style: normal;-->
<!--      font-weight: 400;-->
<!--      font-size: 40px;-->
<!--      line-height: 51px;-->
<!--      color: #283039;-->
<!--      margin: 0 0 40px 0;-->
<!--      text-align: left;-->
<!--    }-->

<!--    &__new {-->
<!--      display: flex;-->
<!--      justify-content: space-between;-->
<!--      margin-bottom: 60px;-->

<!--      &__images {-->
<!--        flex: 0 0 25%;-->

<!--        &-block {-->
<!--          width: 128px;-->
<!--          height: 128px;-->
<!--          background: #f7f8fa;-->
<!--          border-radius: 50%;-->
<!--          display: flex;-->
<!--          align-items: center;-->
<!--          justify-content: center;-->
<!--          margin-bottom: 12px;-->

<!--          &-img {-->
<!--            width: 42px;-->
<!--            height: 42px;-->
<!--          }-->
<!--        }-->

<!--        &-text {-->
<!--          font-family: GoogleSans-Medium;-->
<!--          font-style: normal;-->
<!--          font-weight: 400;-->
<!--          font-size: 16px;-->
<!--          line-height: 20px;-->
<!--          color: #215fce;-->
<!--          margin: 0;-->
<!--          width: 128px;-->
<!--        }-->
<!--      }-->

<!--      &__info {-->
<!--        flex: 0 0 75%;-->
<!--        max-width: 358px;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->

<!--@media screen and (max-width: 1680px) {-->
<!--  .modal__content {-->
<!--    .add-personal {-->
<!--      padding: 22px 40px 20px 44px;-->

<!--      &-title {-->
<!--        font-size: 28px;-->
<!--        margin: 0 0 20px 0;-->
<!--      }-->

<!--      &__new {-->
<!--        padding-bottom: 15px;-->
<!--        margin-bottom: 18px;-->
<!--      }-->

<!--      &__privilege {-->
<!--        margin-bottom: 18px;-->

<!--        &-title {-->
<!--          font-size: 18px;-->
<!--          margin: 0 0 16px 0;-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
