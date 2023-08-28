<template>
  <section id="limited" class="limited-offer">
    <div class="container limited-offer__container">
      <div class="limited-offer__wrapper">
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
    </div>
  </section>
</template>

<style scoped>
.limited-offer {
  text-align: center;
}

.limited-offer__container {
  position: relative;
}

.limited-offer__container::before {
  position: absolute;
  top: 50%;
  left: 50%;
  content: "";
  width: 768px;
  height: 346px;
  border-radius: 768px;
  background: var(--shadow-primary);
  filter: blur(140px);
  transform: translateX(-50%) translateY(-50%);
}

@media screen and (min-width: 1024px) {
  .limited-offer__container::before {
    width: 1024px;
    height: 461px;
    border-radius: 1024px;
  }
}

.limited-offer__wrapper {
  position: relative;
  background-color: var(--color-bg-opacity);
  padding: 20px 0 30px;
}

@media screen and (min-width: 768px) {
  .limited-offer__wrapper {
    padding: 42px 24px 60px;
  }
}

@media screen and (min-width: 1024px) {
  .limited-offer__wrapper {
    padding-left: 16px;
    padding-right: 16px;
  }
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

@media screen and (min-width: 768px) {
  .limited-offer__title {
    font-size: 20px;
    line-height: 28px;
  }
}

.limited-offer__lead {
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 30px;
  margin: 0;
  margin-top: 30px;
}

@media screen and (min-width: 768px) {
  .limited-offer__lead {
    width: 86%;
    font-size: 32px;
    line-height: 38px;
    margin: 24px auto 0;
  }
}

@media screen and (min-width: 1024px) {
  .limited-offer__lead {
    width: 100%;
    font-size: 32px;
    line-height: 38px;
    margin: 24px auto 0;
  }
}

.limited-offer__form {
  width: 223px;
  margin: 20px auto 0;
}

@media screen and (min-width: 768px) {
  .limited-offer__form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 28px;
  }
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
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.limited-offer__form-group--email::before {
  background-image: url("/svg/email.svg");
}

.limited-offer__form-group--password::before {
  background-image: url("/svg/password.svg");
}

@media screen and (min-width: 768px) {
  .limited-offer__form-group {
    width: 223px;
    height: 50px;
    box-sizing: border-box;
  }

  .limited-offer__form-group:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .limited-offer__form-group:nth-child(2) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .limited-offer__form-group:not(:first-child) {
    margin: 0;
    margin-left: 2px;
  }

  .limited-offer__form-group::before {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
}

.limited-offer__input {
  width: 90%;
  font-family: Montserrat, Inter, sans-serif;
  font-size: 15px;
  color: var(--color-text-secondary);
  background-color: transparent;
  border: 0;
  padding: 0;
  outline: none;
}

.limited-offer__input:-webkit-autofill,
.limited-offer__input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 40rem var(--color-bg-accent) inset;
}

.limited-offer__input::placeholder {
  color: var(--color-text-secondary);
}

@media screen and (min-width: 768px) {
  .limited-offer__input {
    font-size: 18px;
  }
}

.limited-offer__submit {
  width: 100%;
  font-size: 12px;
  margin-top: 10px;
}

@media screen and (min-width: 768px) {
  .limited-offer__submit {
    width: auto;
    flex-shrink: 0;
    font-size: 15px;
    line-height: 50px;
    margin-top: 0;
    margin-left: 10px;
  }
}
</style>
