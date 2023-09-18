<template>
  <header class="header">
    <div class="container">
      <img class="logo" src="/svg/logo.svg" width="124" height="30" alt="Finteria Cryptoverse" />
    </div>
  </header>

  <main class="main">
    <IntroSection />
    <HowItWorkSection class="main__how-it-work" />
    <AdvantagesSection class="main__advantages" />
    <StepsSection class="main__steps" />
    <CryptoSection class="main__crypto" />
    <LimitedOfferSection class="main__limited-offer" />
  </main>

  <footer class="footer">
    <div class="container footer__container">
      <p class="footer__copy">&copy; {{ $t("footer.copy") }}</p>
      <p class="footer__registered">{{ $t("footer.registered") }}</p>

      <p class="footer__privacy">
        <a class="footer__link" href="https://finteria.pro/files/documents/privacy-policy.pdf" target="_blank">
          {{ $t("footer.privacyPolicy") }}
        </a>
      </p>
      <p class="footer__terms">
        <a class="footer__link" href="https://finteria.pro/files/documents/terms-and-conditions.pdf" target="_blank">
          {{ $t("footer.termsConditions") }}
        </a>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import IntroSection from "@/components/IntroSection.vue";
import HowItWorkSection from "@/components/HowItWorkSection.vue";

const AdvantagesSection = defineAsyncComponent(() => import("@/components/AdvantagesSection.vue"));
const StepsSection = defineAsyncComponent(() => import("@/components/StepsSection.vue"));
const CryptoSection = defineAsyncComponent(() => import("@/components/CryptoSection.vue"));
const LimitedOfferSection = defineAsyncComponent(() => import("@/components/LimitedOfferSection.vue"));
</script>

<style scoped>
.header {
  padding: 20px 10px;
}

@media screen and (min-width: 768px) {
  .header {
    padding: 30px 0;
  }
}

@media screen and (min-width: 1376px) {
  .header {
    padding: 33px 0;
  }
}

.logo {
  width: 124px;
  height: 30px;
}

@media screen and (min-width: 768px) {
  .logo {
    width: 182px;
    height: 44px;
  }
}

.main__how-it-work {
  margin-top: 63px;
}

@media screen and (min-width: 768px) {
  .main__how-it-work {
    margin-top: 38px;
  }
}

.main__advantages {
  margin-top: 60px;
}

@media screen and (min-width: 768px) {
  .main__advantages {
    margin-top: 120px;
  }
}

.main__steps {
  margin-top: 60px;
}

@media screen and (min-width: 768px) {
  .main__steps {
    margin-top: 120px;
  }
}

.main__crypto {
  margin-top: 30px;
}

@media screen and (min-width: 768px) {
  .main__crypto {
    margin-top: 120px;
  }
}

.main__limited-offer {
  margin-top: 60px;
}

@media screen and (min-width: 768px) {
  .main__limited-offer {
    margin-top: 120px;
  }
}

.footer {
  padding: 23px 0 27px;
  font-size: 11px;
  line-height: 16px;
  color: var(--color-text-tertiary);
  text-align: center;
  background-color: var(--color-bg-tertiary);
}

@media screen and (min-width: 768px) {
  .footer {
    margin-top: 120px;
    font-size: 14px;
    text-align: left;
  }

  .footer__container {
    display: grid;
    grid-template-rows: 20px 20px;
    grid-template-columns: 1fr 130px;
    grid-auto-flow: column;
  }
}

.footer__copy {
  margin: 0;
  font-weight: 700;
}

.footer__registered {
  margin: 0;
  margin-top: 4px;
}

@media screen and (min-width: 768px) {
  .footer__registered {
    margin: 0;
  }
}

.footer__privacy {
  margin: 0;
  margin-top: 20px;
}

@media screen and (min-width: 768px) {
  .footer__privacy {
    margin: 0;
  }
}

.footer__terms {
  margin: 0;
}

.footer__link {
  color: var(--color-text-tertiary);
  text-decoration: none;
}
</style>
