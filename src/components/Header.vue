<template>
  <div class="header">
    <div class="flex items-center">
      <h3 class="header-title text-weight-bold">
        SlnSave
      </h3>
      <nav>
        <ul class="nav">
          <li class="nav-bar">
            <router-link to="/" class="nav-link text-weight-medium">Главная</router-link>
          </li>
          <li class="nav-bar">
            <router-link to="/car" class="nav-link text-weight-medium">Машина</router-link>
          </li>
          <li class="nav-bar">
            <router-link to="/life" class="nav-link text-weight-medium">Страхование жизни</router-link>
          </li>
          <li class="nav-bar">
            <router-link to="/property" class="nav-link text-weight-medium">Жилье</router-link>
          </li>
          <li class="nav-bar">
            <a href="#footer" class="nav-link text-weight-medium">Контакты</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="right">
      <router-link v-if="!profile" to="/auth/login" class="nav-link text-weight-medium q-mr-xl">
        Login
      </router-link>
      <router-link to="/profile" v-else class="nav-link text-weight-medium q-mr-xl q-my-none">{{
          profile.name
        }}
      </router-link>
      <q-btn to="/auth/registration" color="primary">Стать участником
        <base-icon class="ic-12 q-ml-md">arrow</base-icon>
      </q-btn>
    </div>


  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import BaseIcon from "./Base/BaseIcon";

export default {
  name: "Header",
  components: {BaseIcon},
  computed: {
    ...mapGetters({
      profile: 'getProfile'
    })
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  padding-top: 30px;
  justify-content: space-between;
}

.header-title {
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.1px;
  color: white;
  margin: 0;
}

.nav-link {
  font-size: 14px;
  text-align: center;
  line-height: 24px;
  letter-spacing: 0.2px;
  text-decoration: none;
  color: white;
}

.nav-bar {
  margin-right: 21px;
  list-style-type: none;
}

.nav-bar:last-child {
  margin-right: 0;
}

.nav {
  display: flex;
  margin: 0 0 0 76px;
  align-items: center;
}


</style>