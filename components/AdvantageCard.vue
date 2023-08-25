<template>
  <li class="advantage">
    <h3 class="advantage__title">
      <slot name="title" />
    </h3>

    <p class="advantage__lead">
      <slot name="lead" />
    </p>

    <p class="advantage__text">
      <slot name="text" />
    </p>
  </li>
</template>

<style scoped>
.advantage {
  display: grid;
  text-align: left;
  background-color: var(--color-bg-secondary);
  border-radius: 6px;
  padding: 20px 15px;
}

.advantage__title {
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin: 0;
  margin-top: 10px;
}

.advantage__lead {
  order: -1;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  color: var(--color-accent);
  text-transform: uppercase;
  margin: 0;
}

.advantage__text {
  font-size: 11px;
  line-height: 16px;
  color: var(--color-text-secondary);
  margin: 0;
  margin-top: 3px;
}
</style>
