<template>
  <a v-if="link" class="basic-button">
    <slot />
  </a>

  <button
    v-else
    class="basic-button"
    :class="{
      'basic-button--loading': loading,
    }"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  link?: boolean;
  loading?: boolean;
}

withDefaults(defineProps<Props>(), {
  link: false,
});
</script>

<style scoped>
.basic-button {
  display: inline-flex;
  align-items: center;
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

.basic-button--loading::before {
  width: 40px;
  height: 40px;
  content: "";
  background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='L9' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 0 0' xml:space='preserve'%3E%3Cpath fill='%23fff' d='M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50'%3E%3CanimateTransform attributeName='transform' attributeType='XML' type='rotate' dur='1s' from='0 50 50' to='360 50 50' repeatCount='indefinite' /%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

@media screen and (min-width: 768px) {
  .basic-button {
    padding: 0 50px;
    font-size: 20px;
    line-height: 70px;
  }

  .basic-button--loading {
    padding-right: 35px;
    padding-left: 25px;
  }
}
</style>
