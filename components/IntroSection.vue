<template>
  <section class="intro">
    <div class="container intro__container">
      <h1 class="intro__title">
        {{ $t("mainTitle") }}
      </h1>

      <p class="intro__lead">
        {{ $t("mainLead") }}
      </p>

      <div class="intro__talks intro__talks-top">
        <img class="intro__talk" src="svg/avax.svg" width="118" height="91" alt="" />
        <img class="intro__talk intro__talk-dot" src="svg/dot.svg" width="94" height="109" alt="" />
        <img class="intro__talk" src="svg/ada.svg" width="118" height="104" alt="" />
      </div>

      <BasicButton class="intro__grow" link> {{ $t("growMyCrypto") }} </BasicButton>

      <div class="intro__talks intro__talks-bottom">
        <img class="intro__talk" src="svg/sol.svg" width="120" height="99" alt="" />
        <img class="intro__talk" src="svg/eth.svg" width="120" height="103" alt="" />
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
  padding-bottom: 63px;
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

.intro__talks-bottom {
  margin-top: 20px;
}

.intro__talk-dot {
  align-self: start;
}

.intro__title {
  width: 90%;
  font-size: 36px;
  font-weight: 700;
  line-height: 36px;
  margin: 4px auto 0;
}

.intro__lead {
  font-family: Montserrat, Inter, sans-serif;
  font-size: 18px;
  line-height: 24px;
  margin: 0;
  margin-top: 10px;
}

.intro__grow {
  margin-top: 10px;
}
</style>
