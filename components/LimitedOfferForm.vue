<template>
  <form class="limited-offer__form" @submit.prevent="validate" autocomplete="off">
    <div class="limited-offer__form-wrapper">
      <label class="limited-offer__form-group limited-offer__form-group--email">
        <input
          v-model="formData.email"
          class="limited-offer__input"
          :class="{
            'limited-offer__input--error': v$.email.$errors.length,
          }"
          type="email"
          :placeholder="$t('limitedOffer.email')"
        />
      </label>

      <label class="limited-offer__form-group limited-offer__form-group--password">
        <input
          v-model="formData.password"
          class="limited-offer__input"
          :class="{
            'limited-offer__input--error': v$.email.$errors.length,
          }"
          type="password"
          :placeholder="$t('limitedOffer.password')"
        />
      </label>

      <p v-if="errors && errors.email" class="limited-offer__error">
        {{ errors.email }}
      </p>
    </div>

    <div ref="root" />

    <BasicButton class="limited-offer__submit" type="submit">
      {{ $t("limitedOffer.getBonus") }}
    </BasicButton>
  </form>
</template>

<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { registerUser } from "@/helpers/requests";
import { setCookie } from "@/utils/utilsCookies";
import { cookieMeta, getUrlParts } from "@/helpers/constants";
import { useChallengeV2, useRecaptchaProvider } from "vue-recaptcha";

const config = useRuntimeConfig();
useRecaptchaProvider();

const { root, execute, onVerify } = useChallengeV2({
  options: {
    size: "invisible",
  },
});

const formData = reactive<{
  email: string;
  password: string;
  recaptcha_token: string | null;
}>({
  email: "",
  password: "",
  recaptcha_token: null,
});

const isLoad = ref(false);
const errors = ref<{ email: string } | null>(null);
const rules = {
  email: { required, email },
  password: {
    required,
    minLength: minLength(6),
  },
};

const v$ = useVuelidate(rules, formData);

const validate = async () => {
  v$.value.$reset();

  const isValidate = await v$.value.$validate();
  if (!isValidate) return;

  isLoad.value = true;

  execute();
};

onVerify(async (recaptchaToken: string) => {
  try {
    formData.recaptcha_token = recaptchaToken;
    const { user, token } = await registerUser(formData).then((response) => response.data);
    const tokenName = cookieMeta[config.public.SENTRY_ENV].name;

    const envDomain = getUrlParts(config.public.PLATFORM_URL).domainroot;
    const currentDomain = getUrlParts(window.location.href).domainroot;

    const processedUrlForCurrentDomain = config.public.PLATFORM_URL.replace(envDomain, currentDomain);

    setCookie(tokenName, token, { "max-age": 86400 });
    await navigateTo(`${processedUrlForCurrentDomain}redirect?userID=${user.id}`, {
      external: true,
    });
  } catch (error) {
    errors.value = {
      email: error.response?.data?.message,
    };
    isLoad.value = false;
  }
});
</script>

<style>
.grecaptcha-badge {
  visibility: hidden;
}
</style>

<style scoped>
.limited-offer__form {
  width: 223px;
  margin: 20px auto 0;
}

@media screen and (min-width: 768px) {
  .limited-offer__form {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    margin-top: 28px;
  }

  .limited-offer__form-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
}

.limited-offer__form-group {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 15px;
  background-color: var(--color-bg-accent);
  border-radius: 143px;
}

.limited-offer__form-group:not(:first-child) {
  margin-top: 10px;
}

.limited-offer__form-group::before {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  margin-right: 14px;
  content: "";
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.limited-offer__form-group--email::before {
  background-image: url("/svg/email.svg");
}

.limited-offer__form-group--password::before {
  background-image: url("/svg/password.svg");
}

@media screen and (min-width: 768px) {
  .limited-offer__form-group {
    box-sizing: border-box;
    width: 49%;
    max-width: 223px;
    height: 50px;
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
  padding: 0;
  font-family: Montserrat, Inter, sans-serif;
  font-size: 15px;
  color: var(--color-text-secondary);
  background-color: transparent;
  border: 0;
  outline: none;
}

.limited-offer__input--error {
  color: var(--color-error);
}

.limited-offer__input:-webkit-autofill,
.limited-offer__input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 40rem var(--color-bg-accent) inset;
}

.limited-offer__input::placeholder {
  color: var(--color-text-secondary);
}

.limited-offer__input--error::placeholder {
  color: var(--color-error);
}

@media screen and (min-width: 768px) {
  .limited-offer__input {
    font-size: 18px;
  }
}

.limited-offer__submit {
  width: 100%;
  margin-top: 10px;
  font-size: 12px;
}

@media screen and (min-width: 768px) {
  .limited-offer__submit {
    flex-shrink: 0;
    width: auto;
    margin-top: 0;
    margin-left: 10px;
    font-size: 15px;
    line-height: 50px;
  }
}

.limited-offer__error {
  width: 100%;
  margin: 0;
  margin-top: 10px;
  color: var(--color-error);
  text-align: left;
}
</style>
