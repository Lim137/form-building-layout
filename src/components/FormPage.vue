<template>
  <div class="page-wrapper">
    <div class="side-menu">
      <div class="side-menu__main-content">
        <img src="@/icon/logo.png" alt="" class="side-menu__logo" />
        <div v-for="(sideMenuItem, key) in sideMenuItems" :key="key">
          <div
            class="side-menu__item"
            @click="selectedItem = sideMenuItem"
            :class="{
              'side-menu__selectedItem': selectedItem === sideMenuItem,
            }"
          >
            {{ sideMenuItem }}
          </div>
        </div>
      </div>
      <div class="side-menu__exit-button" @click="logout">Выход</div>
    </div>
    <div class="forms-list">
      <div class="forms-list__header">
        <div class="forms-list__title">Формы</div>
        <div class="forms-list__create-form-button">Создать форму</div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/fonts/CeraPro-Regular.woff";
export default {
  data() {
    return {
      sideMenuItems: ["Формы", "Пользователи"],
      selectedItem: "",
    };
  },
  mounted() {
    this.selectedItem = this.sideMenuItems[0];
  },
  methods: {
    logout() {
      localStorage.removeItem("loginInfo");
      this.$router.push({ name: "login" });
    },
  },
};
</script>
<style scoped>
.page-wrapper {
  display: flex;
  font-family: "Cera Pro", sans-serif;
  font-size: 16px;
}
.side-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 80px 0px 72px 179px;
  height: 100vh;
  width: 30.14%;
}
.side-menu__main-content {
  display: flex;
  flex-direction: column;
}
.side-menu__logo {
  max-width: 117px;
  margin-bottom: 30px;
}
.side-menu__item {
  margin-bottom: 16px;
}
.side-menu__exit-button {
  color: #3ea748;
  border-radius: 10px;
  border: 1px solid #3ea748;
  padding: 16px 0px;
  max-width: 160px;
  text-align: center;
  font-weight: 500;
}
.forms-list {
  width: 69.86%;
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  padding: 80px 165px 90px 30px;
}
.forms-list__header {
  display: flex;
  justify-content: space-between;
}
.forms-list__title {
  font-size: 40px;
  font-weight: 500;
}
.forms-list__create-form-button {
  border-radius: 10px;
  border: 1px solid #3ea748;
  padding: 16px 0px;
  width: 160px;
  text-align: center;
  font-weight: 500;
  background-color: #3ea748;
  color: #fff;
}
.side-menu__selectedItem {
  color: #3ea748;
}
</style>
