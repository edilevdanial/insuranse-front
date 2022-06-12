<template>
  <div class="profile-card">
    <div class="profile-card__settings">
      <!--      <ProfileEditModal :show="showSettings" @close="showSettings = false"/>-->
      <button class="profile-card__settings-button" @click="showSettings = true">
        <BaseIcon class="ic-24">settings</BaseIcon>
      </button>
    </div>
    <div class="profile-card__info">
      <img src="@/assets/images/AvaBg.svg" alt="ava"/>
      <h1 class="profile-card__info-name">{{ profile.name }}</h1>
      <hr class="profile-card__info-line"/>
      <p class="profile-card__info-number">
        Телефон: <strong>
        {{ profile.number }}
      </strong>
      </p>
      <!--      +7 (707) 421-56-22-->
      <p class="profile-card__info-email">
        Email: <strong>{{ profile.email }}</strong>
      </p>
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/Base/BaseIcon";
import {mapGetters} from "vuex";

export default {
  name: "ProfileCard",
  components: {BaseIcon},
  data: () => ({
    showSettings: false
  }),
  computed: {
    ...mapGetters({
      profile: 'getProfile'
    }),
  }
};
</script>

<style scoped lang="scss">
.profile-card {
  z-index: 100;
  width: 320px;
  height: 329px;
  background: #f7f8fa;
  border-radius: 16px;
  position: sticky !important;
  top: 130px;

  &__settings {
    position: absolute;
    top: 17px;
    right: 17px;

    &-button {
      border: none;
    }
  }

  &__info {
    padding: 46px 58px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 95px;
      height: 95px;
      object-fit: contain;
      margin-bottom: 24px;
    }

    &-name {
      //font-family: GoogleSans-Regular;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 31px;
      color: #283039;
      margin: 0;
    }

    &-line {
      width: 32px;
      border: 1px solid #ebeef2;
      margin: 16px 0;
    }

    &-number,
    &-email {
      display: flex;
      align-items: center;
      //font-family: GoogleSans-Regular;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;
      text-align: center;
      color: #b4b8be;
      margin: 0;

      strong {
        color: #283039;
      }
    }

    &-number {
      margin-bottom: 7px;
    }
  }
}
</style>
