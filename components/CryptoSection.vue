<template>
  <section class="crypto">
    <div class="container">
      <ul class="crypto__list">
        <CryptoCard v-for="(cryptoItem, idx) in crypto" :key="idx" class="crypto__item" :icon="cryptoItem.icon">
          <template #title>
            {{ cryptoItem.title }}
          </template>

          <template #lead>
            {{ cryptoItem.lead }}
          </template>
        </CryptoCard>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import CryptoCard from "@/components/CryptoCard.vue";

interface Crypto {
  title: string;
  lead: string;
  icon: string;
}

const i18n = useI18n();
const crypto = computed<Crypto[]>(() => {
  const i18nSteps = i18n.messages.value[i18n.locale.value].crypto;

  return (i18nSteps as any).items as Crypto[];
});
</script>

<style scoped>
.crypto__list {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 645px;
  height: 214px;
  list-style: none;
  margin: 0 auto;
  padding: 0;
}

@media screen and (min-width: 768px) {
  .crypto__list {
    position: static;
    height: auto;
    align-items: center;
    padding-left: 28px;
    padding-right: 28px;
  }
}

.crypto__item:nth-child(2) {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

@media screen and (min-width: 768px) {
  .crypto__item:nth-child(2) {
    position: static;
    transform: none;
  }
}
</style>
