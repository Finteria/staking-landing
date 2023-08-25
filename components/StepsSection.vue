<template>
  <section class="steps">
    <div class="container">
      <h1 class="visually-hidden">
        {{ $t("steps.title") }}
      </h1>

      <ul class="step-list">
        <StepCard v-for="(step, idx) in steps" :key="idx" class="step-list__item" :icon="step.icon">
          <template #title>{{ step.title }}</template>
          <template #lead>{{ step.lead }}</template>
        </StepCard>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import StepCard from "@/components/StepCard.vue";

interface Step {
  title: string;
  lead: string;
  icon: string;
}

const i18n = useI18n();
const steps = computed<Step[]>(() => {
  const i18nSteps = i18n.messages.value[i18n.locale.value].steps;

  return (i18nSteps as any).items as Step[];
});
</script>

<style scoped>
.steps {
  padding: 30px 0;
}

.step-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.step-list__item:not(:first-child) {
  margin-top: 10px;
}
</style>
