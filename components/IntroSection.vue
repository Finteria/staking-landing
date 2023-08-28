<template>
  <section class="intro">
    <div class="container intro__container">
      <h1 class="intro__title">
        {{ $t("main.title") }}
      </h1>

      <p class="intro__lead">
        {{ $t("main.lead") }}
      </p>

      <div class="intro__talks intro__talks-top">
        <img class="intro__talk intro__talk-avax" src="svg/avax.svg" width="118" height="91" alt="" />
        <img class="intro__talk intro__talk-dot" src="svg/dot.svg" width="94" height="109" alt="" />
        <img class="intro__talk intro__talk-ada" src="svg/ada.svg" width="118" height="104" alt="" />
      </div>

      <BasicButton class="intro__grow" link href="#limited"> {{ $t("main.growMyCrypto") }} </BasicButton>

      <div class="intro__talks intro__talks-bottom">
        <img class="intro__talk intro__talk-sol" src="svg/sol.svg" width="120" height="99" alt="" />
        <img class="intro__talk intro__talk-eth" src="svg/eth.svg" width="120" height="103" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BasicButton from "@/components/BasicButton.vue";
</script>

<style scoped>
.intro__container {
  display: grid;
  text-align: center;
}

.intro__talks {
  display: flex;
  justify-content: space-between;
}

.intro__talks-top {
  order: -1;
  height: 132px;
  align-items: flex-end;
}

@media screen and (min-width: 768px) {
  .intro__talks-top {
    height: 290px;
  }
}

.intro__talks-bottom {
  margin-top: 20px;
}

@media screen and (min-width: 768px) {
  .intro__talks-bottom {
    position: relative;
    padding-bottom: 200px;
    margin: 0;
  }
}

.intro__talk-avax {
  width: 118px;
  height: 91px;
}

@media screen and (min-width: 768px) {
  .intro__talk-avax {
    width: 250px;
    height: 193px;
  }
}

@media screen and (min-width: 1024px) {
  .intro__talk-avax {
    width: 293px;
    height: 226px;
  }
}

.intro__talk-dot {
  align-self: start;
  width: 94px;
  height: 110px;
}

@media screen and (min-width: 768px) {
  .intro__talk-dot {
    width: 190px;
    height: 220px;
  }
}

@media screen and (min-width: 1024px) {
  .intro__talk-dot {
    width: 225px;
    height: 261px;
  }
}

.intro__talk-ada {
  width: 118px;
  height: 104px;
}

@media screen and (min-width: 768px) {
  .intro__talk-ada {
    width: 242px;
    height: 214px;
  }
}

@media screen and (min-width: 1024px) {
  .intro__talk-ada {
    width: 294px;
    height: 259px;
  }
}

.intro__talk-sol {
  width: 120px;
  height: 99px;
}

@media screen and (min-width: 768px) {
  .intro__talk-sol {
    position: absolute;
    top: -15px;
    left: 0;
    width: 242px;
    height: 200px;
  }
}

@media screen and (min-width: 1024px) {
  .intro__talk-sol {
    width: 285px;
    height: 236px;
  }
}

.intro__talk-eth {
  width: 120px;
  height: 103px;
}

@media screen and (min-width: 768px) {
  .intro__talk-eth {
    position: absolute;
    top: -30px;
    right: 0;
    width: 250px;
    height: 215px;
  }
}

@media screen and (min-width: 1024px) {
  .intro__talk-eth {
    width: 294px;
    height: 252px;
  }
}

.intro__title {
  width: 90%;
  font-size: 36px;
  font-weight: 700;
  line-height: 1;
  margin: 4px auto 0;
}

@media screen and (min-width: 768px) {
  .intro__title {
    font-size: 60px;
    margin-top: 30px;
  }
}

.intro__lead {
  font-family: Montserrat, Inter, sans-serif;
  font-size: 18px;
  line-height: 1.35;
  margin: 0;
  margin-top: 10px;
}

@media screen and (min-width: 768px) {
  .intro__lead {
    font-size: 24px;
    margin-top: 20px;
  }
}

.intro__grow {
  justify-self: center;
  margin-top: 10px;
}

@media screen and (min-width: 768px) {
  .intro__grow {
    margin-top: 30px;
  }
}
</style>
