<template>
  <section class="limited-offer">
    <div class="container">
      <h2 class="limited-offer__title">
        {{ $t("limitedOffer.title") }}
      </h2>

      <p class="limited-offer__lead">
        {{ $t("limitedOffer.lead") }}
      </p>

      <form class="limited-offer__form" action="">
        <div class="limited-offer__form-group limited-offer__form-group--email">
          <input class="limited-offer__input" type="email" :placeholder="$t('limitedOffer.email')" />
        </div>

        <div class="limited-offer__form-group limited-offer__form-group--password">
          <input class="limited-offer__input" type="password" :placeholder="$t('limitedOffer.password')" />
        </div>

        <BasicButton class="limited-offer__submit" type="submit">
          {{ $t("limitedOffer.getBonus") }}
        </BasicButton>
      </form>
    </div>
  </section>
</template>

<style scoped>
.limited-offer {
  text-align: center;
  background-color: var(--color-bg-opacity);
  padding: 20px 0 30px;
}

.limited-offer__title {
  display: grid;
  justify-items: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
}

.limited-offer__title::before {
  content: "";
  width: 40px;
  height: 40px;
  background-image: url("/svg/timer.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 2px;
}

.limited-offer__lead {
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 30px;
  margin: 0;
  margin-top: 30px;
}

.limited-offer__form {
  width: 223px;
  margin: 20px auto 0;
}

.limited-offer__form-group {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 15px;
  border-radius: 143px;
  background-color: var(--color-bg-accent);
}

.limited-offer__form-group:not(:first-child) {
  margin-top: 10px;
}

.limited-offer__form-group::before {
  content: "";
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  margin-right: 14px;
}

.limited-offer__form-group--email::before {
  background-image: url("/svg/email.svg");
}

.limited-offer__form-group--password::before {
  background-image: url("/svg/password.svg");
}

.limited-offer__input {
  font-family: Montserrat, Inter, sans-serif;
  font-size: 15px;
  line-height: 40px;
  color: var(--color-text-secondary);
  background-color: transparent;
  border: 0;
  padding: 0;
  outline: none;
}

.limited-offer__submit {
  width: 100%;
  font-size: 12px;
  margin-top: 10px;
}
</style>
