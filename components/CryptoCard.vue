<template>
  <li
    class="crypto-card"
    :class="{
      [`crypto-card--${icon}`]: true,
    }"
  >
    <h3 class="crypto-card__title">
      <slot name="title" />
    </h3>

    <p class="crypto-card__lead">
      <slot name="lead" />
    </p>
  </li>
</template>

<script setup lang="ts">
interface Props {
  icon: string;
}

withDefaults(defineProps<Props>(), {
  icon: "cointelegraph",
});
</script>

<style scoped>
.crypto-card {
  display: grid;
  justify-items: center;
  text-align: center;
}

.crypto-card::before {
  width: 60px;
  height: 60px;
  content: "";
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.crypto-card--cointelegraph::before {
  background-image: url("/svg/cointelegraph.svg");
}

.crypto-card--trustpilot::before {
  background-image: url("/svg/trustpilot.svg");
}

.crypto-card--bitgo::before {
  background-image: url("/svg/bitgo.svg");
}

.crypto-card__title {
  margin: 0;
  margin-top: 10px;
  font-family: Montserrat, Inter, sans-serif;
  font-size: 15px;
  line-height: 1.3;
}

@media screen and (min-width: 768px) {
  .crypto-card__title {
    font-size: 18px;
  }
}

.crypto-card__lead {
  margin: 0;
  font-size: 11px;
  line-height: 1.45;
  color: var(--color-text-secondary);
}

@media screen and (min-width: 768px) {
  .crypto-card__lead {
    margin-top: 4px;
    font-size: 14px;
  }
}
</style>
