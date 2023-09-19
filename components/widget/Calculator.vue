<template>
  <div class="calc">
    <div class="calc__inner">
      <div class="calc__group" v-if="state.loaded">
        <div class="calc__wrapper">
          <div class="calc__col">
            <div class="calc__name">Select asset to trade</div>
            <SelectAsset
              class="calc__select"
              @change="changePair"
              :pairs="pairs"
              :pair="state.activePair"
              :disabled="state.selectDisabled"
            />
          </div>
          <div class="calc__col">
            <label for="input-invest" class="calc__name">Your Investment</label>
            <div class="input-box">
              <div class="input-prefix">$</div>
              <input
                type="text"
                id="input-invest"
                class="input-invest"
                v-model="investment"
                :disabled="state.selectDisabled"
                @keypress="validateWholeNumbers"
              />
            </div>
          </div>
          <div class="calc__col">
            <label for="input-size" class="calc__name">Profitability</label>
            <input type="text" id="input-size" class="calc__input" v-model="profitability" readonly />
          </div>
        </div>

        <div class="calc__content">
          <div class="calc__timer" v-if="selectedButton.length">
            <img src="/svg/calc/clock.svg" alt="icon" class="calc__timer-icon" />
            <span>{{ timer }}</span>
          </div>
          <div class="calc__graph-buttons" v-if="!state.action">
            <button class="calc__graph-button" @click.prevent="selectAction('buy', true)">
              <div class="calc__button-name calc__button-name--mt">BUY</div>
              <div class="calc__button-text">Price will go UP</div>
            </button>
            <button class="calc__graph-button calc__graph-button--red" @click.prevent="selectAction('sell', true)">
              <div class="calc__button-text calc__button-text--mt">Price will go DOWN</div>
              <div class="calc__button-name">SELL</div>
            </button>
          </div>

          <section class="chart__wrapper">
            <Graphic
              :pair="state.activePair"
              :labels-visible="isLabelVisible"
              :action="state.action"
              :investment="investment"
              @predictEnd="showProfit"
              :key="graphicKey"
            />
          </section>

          <div class="calc-modal" :class="{ open: modalCalcVisible }">
            <div class="calc-modal__row" @click="refreshTool">
              <div class="calc-modal__circle">
                <img src="/svg/calc/coins.svg" alt="icon" class="calc-modal__icon" />
              </div>
              <div class="calc-modal__box">
                <div class="calc-modal__overhead">
                  {{ profitSize > 0 ? "Your forecast was correct!" : "Try again!" }}
                </div>
                <div class="calc-modal__title" :class="{ wrong: profitSize < 0 }">
                  {{ profitSize > 0 ? `Profit: $${profitSize}` : `Loss: -$${Math.abs(profitSize)}` }}
                </div>
              </div>
            </div>
            <button class="calc-modal__button" @click.prevent="claimBonus">
              Register
              <span class="hidden-mob">and claim your trading bonus</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getGameCalculator } from "@/helpers/requests";
import Graphic from "./Graphic.vue";
import SelectAsset from "./SelectAsset.vue";
import { validateWholeNumbers } from "@/utils/processNumbers";

const emit = defineEmits(["click-register"]);

const pairs = ref([]);
const state = reactive({
  id: null,
  leverage: null,
  cryptoCurr: "",
  fiatCurr: "",
  price: null,
  loaded: false,
  activePair: null,
  action: null,
  selectDisabled: false,
});

const price = computed(() => state.price);
// Calc graph
const modalCalcVisible = ref(false);
const profitSize = ref(null);
const isLabelVisible = ref(false);
const selectedButton = ref("");
const graphicKey = ref("thisMustBeRandomKey");

onBeforeMount(async () => {
  const { data: data } = await getGameCalculator();
  if (data.success) {
    pairs.value = data.data;
    state.activePair = data.data[0];
    const pairNames = state.activePair.pair.split("/");
    const from = pairNames[0];
    const to = pairNames[1];
    state.activePair.numbersAfterDecimal = state.activePair.visual_divisibility;
    state.leverage = Number(state.activePair?.leverage);
    state.price = Number(state.activePair?.price);
    state.cryptoCurr = from;
    state.fiatCurr = to;
    state.loaded = true;
  }
});

function changePair(pair) {
  state.activePair = pair;
  state.id = pair.id;
  const pairNames = pair.pair.split("/");
  const from = pairNames[0];
  const to = pairNames[1];
  state.activePair.numbersAfterDecimal = state.activePair.numbersAfterDecimal = state.activePair.visual_divisibility;
  state.cryptoCurr = from;
  state.fiatCurr = to;
  state.leverage = pair.leverage;
  if (state.action) {
    refreshTool();
  }
}

function selectAction(type, label) {
  selectedButton.value = type;
  isLabelVisible.value = true;
  state.action = type;
  state.selectDisabled = true;
  const endTimer = setInterval(() => {
    if (timer.value === 9) {
      clearInterval(endTimer);
      modalCalcVisible.value = true;
      state.selectDisabled = false;
    }
    timer.value += 1;
  }, 1000);
}

function showProfit(profit) {
  profitSize.value = profit;
}

function refreshTool() {
  modalCalcVisible.value = false;
  state.action = null;
  isLabelVisible.value = false;
  timer.value = 1;

  graphicKey.value = `thisIsStillRandomNumber +${Date.now()}`;
}

// Calc trade size
const investment = ref(1000);
const profitability = computed(() => {
  return `90 %`;
});
let timer = ref(1);

// Scroll to register
async function claimBonus() {
  emit("click-register");
}
</script>

<style lang="scss">
.chart__wrapper {
  overflow: hidden;

  canvas {
    max-width: 100%;
  }
  .wrong {
    color: #ff8888;
  }
}

.calc__select {
  width: 200px;
}
</style>
