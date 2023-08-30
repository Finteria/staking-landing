<template>
  <section class="how-it-work">
    <div class="container how-it-work__container">
      <h2 class="how-it-work__title">{{ $t("howItWork.title") }}</h2>

      <Calculator @click-register="onClickRegister" />
    </div>
  </section>
</template>

<script setup lang="ts">
import Calculator from "@/components/widget/Calculator.vue";

const onClickRegister = () => {
  document.querySelector("#limited")?.scrollIntoView({
    behavior: "smooth",
  });
};
</script>

<style scoped lang="scss">
@import "@/assets/style/calc/calc.scss";

.how-it-work__container {
  background-color: rgba(17, 2, 45, 0.7);
}

.how-it-work__title {
  padding: 42px 0;
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
}

@media screen and (min-width: 768px) {
  .how-it-work__title {
    font-size: 32px;
  }
}
</style>
