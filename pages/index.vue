<template>
  <header class="header">
    <div class="container">
      <img class="logo" src="svg/logo.svg" width="124" height="30" alt="" />
    </div>
  </header>

  <main class="main">
    <IntroSection />
    <HowItWorkSection class="main__how-it-work" />
    <AdvantagesSection />
    <StepsSection class="main__steps" />
    <CryptoSection class="main__crypto" />
    <LimitedOfferSection class="main__limited-offer" />
  </main>

  <footer class="footer">
    <div class="container footer__container">
      <p class="footer__copy">&copy; {{ $t("footer.copy") }}</p>
      <p class="footer__registered">{{ $t("footer.registered") }}</p>

      <p class="footer__privacy">
        <a>{{ $t("footer.privacyPolicy") }}</a>
      </p>
      <p class="footer__terms">
        <a>{{ $t("footer.termsConditions") }}</a>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import IntroSection from "@/components/IntroSection.vue";
import HowItWorkSection from "@/components/HowItWorkSection.vue";
import AdvantagesSection from "@/components/AdvantagesSection.vue";
import StepsSection from "@/components/StepsSection.vue";
import CryptoSection from "@/components/CryptoSection.vue";
import LimitedOfferSection from "@/components/LimitedOfferSection.vue";
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
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  color: var(--color-text-tertiary);
  background-color: var(--color-bg-tertiary);
  padding: 23px 0 27px;
}

@media screen and (min-width: 768px) {
  .footer {
    font-size: 14px;
    text-align: left;
    margin-top: 120px;
  }

  .footer__container {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 130px;
    grid-template-rows: 20px 20px;
  }
}

.footer__copy {
  font-weight: 700;
  margin: 0;
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
</style>
