<template>
  <div class="page-wrapper">
    <div class="page">
      <div class="auth-form">
        <div class="auth-field">
          <img src="@/icon/logo.png" alt="" class="auth-field__logo" />
          <h1 class="auth-field__title">Авторизация</h1>
          <input
            type="text"
            name="login"
            class="auth-field__input-block login-block"
            placeholder="Логин"
          />
          <input
            type="password"
            name="password"
            class="auth-field__input-block password-block"
            placeholder="Пароль"
          />
          <button class="auth-field__login-button" @click="login">Вход</button>
        </div>
        <div class="about-field">
          <p class="about-field__text">Если возникла проблема, то можете</p>
          <p class="about-field__text problem-text">
            написать <a href="./" class="about-field__link">Алёне из Сибтеха</a>
          </p>
          <p class="about-field__text">
            С любовью, ваш <a href="./" class="about-field__link">Сибтех</a>
          </p>
        </div>
      </div>
      <div class="green-zone">
        <img
          src="@/icon/top-left-cube.png"
          alt=""
          class="green-zone__top-left-cube"
        />
        <img
          src="@/icon/top-right-cube.png"
          alt=""
          class="green-zone__top-right-cube"
        />
        <img
          src="@/icon/top-right-cube.png"
          alt=""
          class="green-zone__middle-left-cube"
        />
        <img
          src="@/icon/middle-cube.png"
          alt=""
          class="green-zone__middle-cube"
        />
        <img
          src="@/icon/bottom-left-cube.png"
          alt=""
          class="green-zone__bottom-left-cube"
        />
        <img
          src="@/icon/top-right-cube.png"
          alt=""
          class="green-zone__middle-right-cube"
        />
        <img
          src="@/icon/bottom-right-cube.png"
          alt=""
          class="green-zone__bottom-right-cube"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/fonts/CeraPro-Regular.woff";
export default {
  methods: {
    login() {
      localStorage.setItem("loginInfo", "logined");
      this.$router.push({ name: "form" });
    },
  },
};
</script>

<style scoped>
.page-wrapper {
}
.page {
  display: flex;
  font-family: "Cera Pro", sans-serif;
  height: 100vh;
  position: relative;
  overflow: hidden;
  /* height: 100%; */
}
@media only screen and (min-width: 1728px) {
  .auth-form {
    display: flex;
    flex-direction: column;
    width: 43.33%;
    justify-content: space-between;
    background-color: #fff;
    padding: 80px 95px 62px 180px;
    border-radius: 0px 10px 10px 0px;
    position: relative;
    z-index: 2;
  }
  .auth-field {
    display: flex;
    flex-direction: column;
  }
  .auth-field__logo {
    max-width: 117px;
    height: auto;
  }
  .auth-field__title {
    font-size: 40px;
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .auth-field__input-block {
    padding: 30px 0px 30px 30px;
    background-color: #f6f6f6;
    border-radius: 10px;
    max-width: 550px;
  }
  .login-block {
    margin-bottom: 10px;
  }
  .password-block {
    margin-bottom: 30px;
  }
  .auth-field__login-button {
    color: white;
    background-color: #3ea748;
    max-width: 160px;
    height: 50px;
    border-radius: 10px;
    font-size: 16px;
  }
  .about-field__link {
    color: #3ea748;
    text-decoration: underline #3ea748;
  }
  .about-field__text {
    color: #676767;
    line-height: 24px;
  }
  .problem-text {
    margin-bottom: 8px;
  }
  .green-zone {
    background-color: #3ea748;
    width: 56.67%;
  }
  .green-zone__top-left-cube {
    margin-top: 70px;
    margin-left: 200px;
    margin-right: 289px;
    position: absolute;
    max-width: 100%;
    height: auto;
  }
  .green-zone__top-right-cube {
    position: absolute;
    margin-left: 1000px;
    margin-top: 120px;
    transform: scale(1.2);
    max-width: 100%;
    height: auto;
  }
  .green-zone__middle-left-cube {
    position: absolute;
    margin-left: 230px;
    margin-top: 750px;
    max-width: 100%;
    height: auto;
  }
  .green-zone__middle-cube {
    position: absolute;
    margin-left: 450px;
    margin-top: 300px;
    max-width: 100%;
    height: auto;
  }
  .green-zone__bottom-left-cube {
    position: absolute;
    margin-top: 970px;
    margin-left: -180px;
    max-width: 100%;
    height: auto;
  }
  .green-zone__middle-right-cube {
    margin-left: 1200px;
    position: absolute;
    margin-top: 650px;
    transform: scale(0.7);
    max-width: 100%;
    height: auto;
  }
  .green-zone__bottom-right-cube {
    position: absolute;
    margin-left: 950px;
    margin-top: 1077px;
    max-width: 100%;
    height: auto;
  }
}
@media only screen and (min-width: 551px) and (max-width: 1100px) {
  .auth-form {
    display: flex;
    flex-direction: column;
    width: 74%;
    justify-content: space-between;
    background-color: #fff;
    padding: 80px 95px 62px 80px;
    border-radius: 0px 10px 10px 0px;
    position: relative;
    z-index: 2;
  }
  .auth-field {
    display: flex;
    flex-direction: column;
  }
  .auth-field__logo {
    max-width: 117px;
    height: auto;
  }
  .auth-field__title {
    font-size: 40px;
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .auth-field__input-block {
    padding: 30px 0px 30px 30px;
    background-color: #f6f6f6;
    border-radius: 10px;
    min-width: 312px;
    max-width: 480px;
  }
  .login-block {
    margin-bottom: 10px;
  }
  .password-block {
    margin-bottom: 30px;
  }
  .auth-field__login-button {
    color: white;
    background-color: #3ea748;
    max-width: 160px;
    height: 50px;
    border-radius: 10px;
    font-size: 16px;
  }
  .about-field__link {
    color: #3ea748;
    text-decoration: underline #3ea748;
  }
  .about-field__text {
    color: #676767;
    line-height: 24px;
  }
  .problem-text {
    margin-bottom: 8px;
  }
  .green-zone {
    background-color: #3ea748;
    width: 26%;
  }
  .green-zone__top-left-cube {
    margin-top: 70px;
    margin-left: 200px;
    margin-right: 289px;
    position: absolute;
    max-width: 100%;
    height: auto;
  }
  .green-zone__top-right-cube {
    position: absolute;
    margin-left: 1000px;
    margin-top: 120px;
    transform: scale(1.2);
    max-width: 100%;
    height: auto;
  }
  .green-zone__middle-left-cube {
    position: absolute;
    margin-left: 230px;
    margin-top: 750px;
    max-width: 100%;
    height: auto;
  }
  .green-zone__middle-cube {
    position: absolute;
    margin-left: 450px;
    margin-top: 300px;
    max-width: 100%;
    height: auto;
  }
  .green-zone__bottom-left-cube {
    position: absolute;
    margin-top: 970px;
    margin-left: -180px;
    max-width: 100%;
    height: auto;
  }
  .green-zone__middle-right-cube {
    margin-left: 1200px;
    position: absolute;
    margin-top: 650px;
    transform: scale(0.7);
    max-width: 100%;
    height: auto;
  }
  .green-zone__bottom-right-cube {
    position: absolute;
    margin-left: 950px;
    margin-top: 1077px;
    max-width: 100%;
    height: auto;
  }
}
@media only screen and (min-width: 1101px) and (max-width: 1727px) {
  .auth-form {
    display: flex;
    flex-direction: column;
    width: 53%;
    justify-content: space-between;
    background-color: #fff;
    padding: 80px 95px 62px 80px;
    border-radius: 0px 10px 10px 0px;
    position: relative;
    z-index: 2;
  }
  .auth-field {
    display: flex;
    flex-direction: column;
  }
  .auth-field__logo {
    max-width: 117px;
    height: auto;
  }
  .auth-field__title {
    font-size: 40px;
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .auth-field__input-block {
    padding: 30px 0px 30px 30px;
    background-color: #f6f6f6;
    border-radius: 10px;
  }
  .login-block {
    margin-bottom: 10px;
  }
  .password-block {
    margin-bottom: 30px;
  }
  .auth-field__login-button {
    color: white;
    background-color: #3ea748;
    max-width: 160px;
    height: 50px;
    border-radius: 10px;
    font-size: 16px;
  }
  .about-field__link {
    color: #3ea748;
    text-decoration: underline #3ea748;
  }
  .about-field__text {
    color: #676767;
    line-height: 24px;
  }
  .problem-text {
    margin-bottom: 8px;
  }
  .green-zone {
    background-color: #3ea748;
    width: 47%;
  }
  .green-zone__top-left-cube {
    margin-top: 70px;
    margin-left: 200px;
    margin-right: 289px;
    position: absolute;
    max-width: 100%;
    height: auto;
  }
  .green-zone__top-right-cube {
    position: absolute;
    margin-left: 1000px;
    margin-top: 120px;
    transform: scale(1.2);
    max-width: 100%;
    height: auto;
  }
  .green-zone__middle-left-cube {
    position: absolute;
    margin-left: 230px;
    margin-top: 750px;
    max-width: 100%;
    height: auto;
  }
  .green-zone__middle-cube {
    position: absolute;
    margin-left: 450px;
    margin-top: 300px;
    max-width: 100%;
    height: auto;
  }
  .green-zone__bottom-left-cube {
    position: absolute;
    margin-top: 970px;
    margin-left: -180px;
    max-width: 100%;
    height: auto;
  }
  .green-zone__middle-right-cube {
    margin-left: 1200px;
    position: absolute;
    margin-top: 650px;
    transform: scale(0.7);
    max-width: 100%;
    height: auto;
  }
  .green-zone__bottom-right-cube {
    position: absolute;
    margin-left: 950px;
    margin-top: 1077px;
    max-width: 100%;
    height: auto;
  }
}

@media only screen and (min-width: 371px) and (max-width: 550px) {
  .auth-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
    padding: 40px 70px 62px 80px;
    position: relative;
    z-index: 2;
  }
  .auth-field {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }
  .auth-field__logo {
    max-width: 117px;
    height: auto;
  }
  .auth-field__title {
    font-size: 40px;
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .auth-field__input-block {
    padding: 30px 0px 30px 30px;
    background-color: #f6f6f6;
    border-radius: 10px;
    max-width: 368px;
    min-width: 230px;
  }
  .login-block {
    margin-bottom: 10px;
  }
  .password-block {
    margin-bottom: 30px;
  }

  .auth-field__login-button {
    color: white;
    background-color: #3ea748;
    max-width: 160px;
    height: 50px;
    border-radius: 10px;
    font-size: 16px;
  }

  .about-field__link {
    color: #3ea748;
    text-decoration: underline #3ea748;
  }
  .about-field__text {
    color: #676767;
    line-height: 24px;
    overflow-wrap: break-word;
    hyphens: auto;
  }
  .problem-text {
    margin-bottom: 8px;
  }
  .green-zone {
    display: none;
  }
}
@media only screen and (max-width: 370px) {
  .auth-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
    padding: 40px 20px 62px 20px;
    position: relative;
    z-index: 2;
    align-items: center;
  }
  .auth-field {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }
  .auth-field__logo {
    max-width: 117px;
    height: auto;
  }
  .auth-field__title {
    font-size: 40px;
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .auth-field__input-block {
    padding: 30px 0px 30px 30px;
    background-color: #f6f6f6;
    border-radius: 10px;
    max-width: 368px;
    min-width: 230px;
  }
  .login-block {
    margin-bottom: 10px;
  }
  .password-block {
    margin-bottom: 30px;
  }

  .auth-field__login-button {
    color: white;
    background-color: #3ea748;
    max-width: 160px;
    height: 50px;
    border-radius: 10px;
    font-size: 16px;
  }

  .about-field__link {
    color: #3ea748;
    text-decoration: underline #3ea748;
  }
  .about-field__text {
    color: #676767;
    line-height: 24px;
    overflow-wrap: break-word;
    hyphens: auto;
  }
  .problem-text {
    margin-bottom: 8px;
  }
  .green-zone {
    display: none;
  }
}
</style>
