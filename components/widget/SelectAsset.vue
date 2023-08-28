<template>
  <div class="select" @click="open" :class="{ open: selectOpen }" ref="$select">
    <div class="select__el" v-if="pair">
      <div class="select__text">
        <img class="select__icon" height="20" :src="`./svg/calc/${pairNames[0]}.svg`" alt="currency icon" />
        {{ pairNames[0] }} <span class="select__line">/</span>
        <img class="select__icon" height="20" :src="`./svg/calc/${pairNames[1]}.svg`" alt="currency icon" />
        {{ pairNames[1] }}
      </div>
      <div class="select__arrow"></div>
    </div>
    <div class="select__dropdown">
      <div
        class="select__row"
        v-for="item in props.pairs"
        :key="item.id"
        @click="setItem(item)"
        :class="{ active: item === pair }"
      >
        <div class="select__text">
          <img
            class="select__icon"
            height="20"
            :src="`./svg/calc/${extractName(item, 'to')}.svg`"
            alt="currency icon"
          />
          {{ extractName(item, "to") }} <span class="select__line">/</span>
          <img
            class="select__icon"
            height="20"
            :src="`./svg/calc/${extractName(item, 'from')}.svg`"
            alt="currency icon"
          />
          {{ extractName(item, "from") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useClickOutside } from "@/utils/useClickOutside";
const $select = ref(null);
useClickOutside($select, () => {
  selectOpen.value = false;
});
const emits = defineEmits(["change"]);
const props = defineProps({
  pairs: {
    type: Array,
    default: [],
  },
  pair: {
    type: Object,
    required: true,
  },
  disabled: {
    type: Boolean,
    required: true,
  },
});
const selectOpen = ref(false);
const pairNames = computed(() => {
  return props.pair.pair.split("/");
});
const extractName = (pair, slug) => {
  const currencyNames = pair.pair?.split("/");
  return slug === "from" ? currencyNames[1] : currencyNames[0];
};
function open() {
  if (props.disabled) {
    return;
  }
  selectOpen.value = !selectOpen.value;
}

function setItem(item) {
  emits("change", item);
}

onMounted(() => {
  emits("change", props.pairs[0]);
});
</script>

<style scoped lang="scss">
.select {
  position: relative;
  border: 1px solid rgb(50, 50, 57);
  border-radius: 6px;
  padding: 8px 12px 8px 9px;
  cursor: pointer;
  height: 36px;
  transition: 0.2s linear;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  align-items: center;
  background-color: transparent;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: 40px;
  }

  &.open {
    border-radius: 8px 8px 0 0;
    border-color: $sky;
    .select__dropdown {
      opacity: 1;
      visibility: visible;
    }
    .select__arrow {
      transform: rotate(180deg);
    }
  }

  &__dropdown {
    position: absolute;
    left: -2px;
    top: 100%;
    padding: 0 9px 5px 9px;
    background: #09001a;
    border: 1px solid $sky;
    border-top: 0;
    border-radius: 0 0 8px 8px;
    width: calc(100% + 4px);
    opacity: 0;
    visibility: hidden;
    transition: 0.2s linear;
    box-sizing: border-box;
  }

  &__text {
    font-weight: 700;
    font-size: 15px;
    line-height: 140%;
    text-transform: uppercase;
    color: #fff;
    -webkit-tap-highlight-color: transparent;
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }

  &__row {
    margin: 0 -9px;
    width: calc(100% + 18px);
    padding: 5px 9px;
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
      background: $sky;
    }
    &.active {
      background: $sky-dark;
    }
  }

  &__el {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    -webkit-tap-highlight-color: transparent;
  }

  &__arrow {
    margin-left: auto;
    flex-shrink: 0;
    width: 12px;
    height: 12px;
    background: url("/svg/calc/arrow.svg") center / contain no-repeat;
  }

  &__icon {
    margin-right: 5px;
    @media (max-width: 767px) {
      width: 15px !important;
      height: 15px !important;
    }
  }

  &__line {
    margin: 0 8px 0 4px;
  }
}
</style>
