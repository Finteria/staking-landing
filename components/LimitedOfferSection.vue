<template>
  <section id="limited" class="limited-offer">
    <div class="container limited-offer__container">
      <div class="limited-offer__wrapper">
        <h2 class="limited-offer__title">
          {{ $t("limitedOffer.title") }}
        </h2>

        <p class="limited-offer__lead">
          {{ $t("limitedOffer.lead") }}
        </p>

        <LimitedOfferForm />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import LimitedOfferForm from "@/components/LimitedOfferForm.vue";
</script>

<style scoped>
.limited-offer {
  text-align: center;
}

.limited-offer__container {
  position: relative;
}

.limited-offer__container::before {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 768px;
  height: 346px;
  content: "";
  background: var(--shadow-primary);
  filter: blur(140px);
  border-radius: 768px;
  transform: translateX(-50%) translateY(-50%);
}

@media screen and (min-width: 1024px) {
  .limited-offer__container::before {
    width: 1024px;
    height: 461px;
    border-radius: 1024px;
  }
}

@media screen and (min-width: 1376px) {
  .limited-offer__container::before {
    width: 1117px;
    height: 503px;
    border-radius: 1117px;
  }
}

.limited-offer__wrapper {
  position: relative;
  padding: 20px 0 30px;
  background-color: var(--color-bg-opacity);
}

@media screen and (min-width: 768px) {
  .limited-offer__wrapper {
    padding: 42px 24px 60px;
  }
}

@media screen and (min-width: 1024px) {
  .limited-offer__wrapper {
    padding-right: 16px;
    padding-left: 16px;
  }
}

.limited-offer__title {
  display: grid;
  justify-items: center;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
}

.limited-offer__title::before {
  width: 40px;
  height: 40px;
  margin-bottom: 2px;
  content: "";
  background-image: url("/svg/timer.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

@media screen and (min-width: 768px) {
  .limited-offer__title {
    font-size: 20px;
    line-height: 28px;
  }
}

.limited-offer__lead {
  margin: 0;
  margin-top: 30px;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  text-transform: uppercase;
}

@media screen and (min-width: 768px) {
  .limited-offer__lead {
    width: 86%;
    margin: 24px auto 0;
    font-size: 32px;
    line-height: 38px;
  }
}

@media screen and (min-width: 1024px) {
  .limited-offer__lead {
    width: 100%;
    margin: 24px auto 0;
    font-size: 32px;
    line-height: 38px;
  }
}
</style>
