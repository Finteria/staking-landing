<template>
  <section class="advantages">
    <div class="container">
      <h1 class="visually-hidden">
        {{ $t("advantages.title") }}
      </h1>

      <ul class="advantages-list">
        <AdvantageCard v-for="(advantage, idx) in advantages" :key="idx">
          <template #title>{{ advantage.title }}</template>
          <template #lead>{{ advantage.lead }}</template>
          <template #text>{{ advantage.text }}</template>
        </AdvantageCard>
      </ul>

      <BasicButton class="advantages__start" link>{{ $t("startTradingCrypto") }}</BasicButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import BasicButton from "@/components/BasicButton.vue";
import AdvantageCard from "@/components/AdvantageCard.vue";

interface Advantage {
  title: string;
  lead: string;
  text: string;
}

const i18n = useI18n();
const advantages = computed<Advantage[]>(() => {
  const i18nAdvantages = i18n.messages.value[i18n.locale.value].advantages;

  return (i18nAdvantages as any).items as Advantage[];
});
</script>

<style scoped>
.advantages {
  padding: 40px 0 30px;
  text-align: center;
}

.advantages-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.advantages__start {
  margin-top: 30px;
}
</style>
