<template>
  <li
    class="step-card"
    :class="{
      [`step-card--${icon}`]: true,
    }"
  >
    <h3 class="step-card__title">
      <slot name="title" />
    </h3>

    <p class="step-card__lead">
      <slot name="lead" />
    </p>
  </li>
</template>

<script setup lang="ts">
interface Props {
  icon: string;
}

withDefaults(defineProps<Props>(), {
  icon: "flag",
});
</script>

<style scoped>
.step-card {
  display: grid;
  grid-template-rows: 24px 1fr;
  grid-template-columns: 70px 1fr;
  column-gap: 20px;
  padding: 20px;
  text-align: left;
  background-color: var(--color-bg-tertiary);
}

@media screen and (min-width: 768px) {
  .step-card {
    grid-template-rows: repeat(3, min-content);
    grid-template-columns: initial;
    align-items: center;
    justify-items: center;
    width: 220px;
    padding-top: 30px;
    text-align: center;
  }
}

@media screen and (min-width: 1024px) {
  .step-card {
    width: 300px;
    padding-bottom: 30px;
  }
}

@media screen and (min-width: 1376px) {
  .step-card {
    width: 412px;
  }
}

.step-card::before {
  grid-row: 1 / 3;
  width: 70px;
  height: 70px;
  content: "";
  background: var(--gradient-secondary);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 42px, 70px;
  border-radius: 50%;
}

.step-card--flag::before {
  background-image: url("/svg/flag.svg"), var(--gradient-secondary);
}

.step-card--wallet::before {
  background-image: url("/svg/wallet.svg"), var(--gradient-secondary);
}

.step-card--chart::before {
  background-image: url("/svg/chart.svg"), var(--gradient-secondary);
}

@media screen and (min-width: 768px) {
  .step-card::before {
    width: 100px;
    height: 100px;
    background-size: 60px, 100px;
  }
}

.step-card__title {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.35;
}

@media screen and (min-width: 768px) {
  .step-card__title {
    margin-top: 20px;
    font-size: 24px;
  }
}

.step-card__lead {
  margin: 0;
  margin-top: 3px;
  font-family: Montserrat, Inter, sans-serif;
  font-size: 15px;
  line-height: 1.35;
}

@media screen and (min-width: 768px) {
  .step-card__lead {
    font-size: 18px;
  }
}
</style>
