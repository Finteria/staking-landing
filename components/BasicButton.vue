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
  padding: 0 30px;
  font-size: 16px;
  font-weight: 600;
  line-height: 46px;
  color: var(--color-text-primary);
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  background: var(--gradient-primary);
  border: 0;
  border-radius: 146px;
}

@media screen and (min-width: 768px) {
  .basic-button {
    padding: 0 50px;
    font-size: 20px;
    line-height: 70px;
  }
}
</style>
