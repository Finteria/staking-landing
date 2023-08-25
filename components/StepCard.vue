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

.step-card::before {
  content: "";
  grid-row: 1 / 3;
  width: 70px;
  height: 70px;
  background: var(--gradient-secondary);
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

.step-card__title {
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin: 0;
}

.step-card__lead {
  font-family: Montserrat, Inter, sans-serif;
  font-size: 15px;
  line-height: 21px;
  margin: 0;
  margin-top: 3px;
}
</style>
