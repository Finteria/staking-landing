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
  grid-template-rows: repeat(3, min-content);
  text-align: left;
  background-color: var(--color-bg-secondary);
  border-radius: 6px;
  padding: 20px 15px;
}

@media screen and (min-width: 1024px) {
  .advantage {
    padding: 24px 20px;
  }
}

.advantage__title {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.35;
  margin: 0;
  margin-top: 10px;
}

@media screen and (min-width: 1024px) {
  .advantage__title {
    font-size: 24px;
    margin-top: 14px;
  }
}

.advantage__lead {
  order: -1;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
  color: var(--color-accent);
  text-transform: uppercase;
  margin: 0;
}

@media screen and (min-width: 1024px) {
  .advantage__lead {
    font-size: 32px;
    line-height: 1.2;
  }
}

.advantage__text {
  font-size: 11px;
  line-height: 1.45;
  color: var(--color-text-secondary);
  margin: 0;
  margin-top: 3px;
}

@media screen and (min-width: 1024px) {
  .advantage__text {
    font-size: 14px;
  }
}
</style>
