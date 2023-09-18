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
        <img
          class="intro__talk intro__talk-avax"
          src="/svg/avax.svg"
          width="118"
          height="91"
          :alt="$t('main.icons.avax')"
        />
        <img
          class="intro__talk intro__talk-dot"
          src="/svg/dot.svg"
          width="94"
          height="109"
          :alt="$t('main.icons.dot')"
        />
        <img
          class="intro__talk intro__talk-ada"
          src="/svg/ada.svg"
          width="118"
          height="104"
          :alt="$t('main.icons.ada')"
        />
      </div>

      <BasicButton class="intro__grow" link href="#limited"> {{ $t("main.growMyCrypto") }} </BasicButton>

      <div class="intro__talks intro__talks-bottom">
        <img
          class="intro__talk intro__talk-sol"
          src="/svg/sol.svg"
          width="120"
          height="99"
          :alt="$t('main.icons.sol')"
        />
        <img
          class="intro__talk intro__talk-eth"
          src="/svg/eth.svg"
          width="120"
          height="103"
          :alt="$t('main.icons.eth')"
        />
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
  align-items: flex-end;
  order: -1;
  height: 132px;
}

@media screen and (min-width: 768px) {
  .intro__talks-top {
    height: 292px;
  }
}

@media screen and (min-width: 1024px) {
  .intro__talks-top {
    height: 350px;
  }
}

@media screen and (min-width: 1376px) {
  .intro__talks-top {
    position: relative;
    display: block;
    height: 245px;
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

@media screen and (min-width: 1024px) {
  .intro__talks-bottom {
    padding-bottom: 180px;
  }
}

@media screen and (min-width: 1376px) {
  .intro__talks-bottom {
    padding-bottom: 110px;
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

@media screen and (min-width: 1376px) {
  .intro__talk-avax {
    position: absolute;
    top: 37px;
    left: 43px;
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

@media screen and (min-width: 1376px) {
  .intro__talk-dot {
    position: absolute;
    top: -63px;
    left: 50%;
    transform: translateX(-50%);
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

@media screen and (min-width: 1376px) {
  .intro__talk-ada {
    position: absolute;
    top: 20px;
    right: 14px;
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
    top: -70px;
    left: -25px;
    width: 285px;
    height: 236px;
  }
}

@media screen and (min-width: 1376px) {
  .intro__talk-sol {
    top: -150px;
    right: -160px;
    left: auto;
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
    top: -85px;
    right: -15px;
    left: auto;
    width: 294px;
    height: 252px;
  }
}

@media screen and (min-width: 1376px) {
  .intro__talk-eth {
    top: -165px;
    left: -160px;
  }
}

.intro__title {
  width: 90%;
  margin: 4px auto 0;
  font-size: 36px;
  font-weight: 700;
  line-height: 1;
}

@media screen and (min-width: 768px) {
  .intro__title {
    margin-top: 30px;
    font-size: 60px;
  }
}

@media screen and (min-width: 1024px) {
  .intro__title {
    margin-top: 20px;
  }
}

@media screen and (min-width: 1376px) {
  .intro__title {
    margin-top: 0;
  }
}

.intro__lead {
  margin: 0;
  margin-top: 10px;
  font-family: Montserrat, Inter, sans-serif;
  font-size: 18px;
  line-height: 1.35;
}

@media screen and (min-width: 768px) {
  .intro__lead {
    margin-top: 20px;
    font-size: 24px;
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
