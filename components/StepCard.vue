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
  grid-template-columns: 70px 1fr;
  grid-template-rows: 24px 1fr;
  column-gap: 20px;
  text-align: left;
  background-color: var(--color-bg-tertiary);
  padding: 20px;
}

@media screen and (min-width: 768px) {
  .step-card {
    width: 220px;
    grid-template-columns: initial;
    grid-template-rows: repeat(3, min-content);
    justify-items: center;
    align-items: center;
    text-align: center;
    padding-top: 30px;
  }
}

@media screen and (min-width: 1024px) {
  .step-card {
    width: 300px;
    padding-bottom: 30px;
  }
}

/* @media screen and (min-width: 1376px) {
  .step-card {
    width: 412px;
  }
} */

.step-card::before {
  content: "";
  grid-row: 1 / 3;
  width: 70px;
  height: 70px;
  background: var(--gradient-secondary);
  background-image-size: 42px, 70px;
  background-position: center;
  background-repeat: no-repeat;
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
  font-size: 18px;
  font-weight: 700;
  line-height: 1.35;
  margin: 0;
}

@media screen and (min-width: 768px) {
  .step-card__title {
    font-size: 24px;
    margin-top: 20px;
  }
}

.step-card__lead {
  font-family: Montserrat, Inter, sans-serif;
  font-size: 15px;
  line-height: 1.35;
  margin: 0;
  margin-top: 3px;
}

@media screen and (min-width: 768px) {
  .step-card__lead {
    font-size: 18px;
  }
}
</style>
