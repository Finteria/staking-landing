<template>
  <a v-if="link" class="basic-button">
    <slot />
  </a>

  <button v-else class="basic-button">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  link?: boolean;
}

withDefaults(defineProps<Props>(), {
  link: false,
});
</script>

<style scoped>
.basic-button {
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 46px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  color: var(--color-text-primary);
  background: var(--gradient-primary);
  border: 0;
  border-radius: 146px;
  padding: 0 30px;
  cursor: pointer;
}
</style>
