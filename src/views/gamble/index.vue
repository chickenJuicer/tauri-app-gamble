<template>
  <div class='gamble-container'>
    <div class="f-center-center">
      <NumScroll
          ref="NS_shi"
          :delay="0.2"
          :during="2.2"
          :start-num="shi_start_num"
          style="margin-right: 40px;"
      ></NumScroll>
      <NumScroll
          ref="NS_ge"
          :delay="0"
          :during="2"
          :start-num="ge_start_num"
      ></NumScroll>
    </div>
    <div class="mt40">
      <div class="winner-item">
        <span>一等奖：</span>
        <span class="winner-list">{{ gamble_winner_list.one.join() }}</span>
      </div>
      <div class="winner-item">
        <span>二等奖：</span>
        <span class="winner-list">{{ gamble_winner_list.two.join() }}</span>
      </div>
      <div class="winner-item">
        <span>三等奖：</span>
        <span class="winner-list">{{ gamble_winner_list.three.join() }}</span>
      </div>
    </div>
    <div class="f-center-center mt40">
      <button class="start-btn" @click="start" :disabled="startBtnDisable">{{ btn_label }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import NumScroll from "@/views/gamble/components/numScroll.vue";
import {computed, reactive, ref} from 'vue'


let shi_start_num = 0
let ge_start_num = 0

interface gamble_winner_list_itf {
  one: String[],
  two: String[],
  three: String[],
}

let gamble_winner_list: gamble_winner_list_itf = reactive({
  one: [],
  two: [],
  three: [],
})
// 行则，恭喜发财 嘻嘻嘻
const gamble_winner_negative = ["66"]

let startBtnDisable = ref(false)
let btn_label = ref('💪开始抽奖💪')

const NS_shi = ref(null)
const NS_ge = ref(null)

const isEndGamble = computed(() => {
  return gamble_winner_list.one.length === 1 &&
      gamble_winner_list.two.length === 3 &&
      gamble_winner_list.three.length === 5
})


const start = () => {
  startBtnDisable.value = true
  const [shi, ge] = getRandomNum();
  console.log(NS_shi.value, 'NS_shi.value');
  if (isEndGamble.value) {
    btn_label.value = '🎉🎉🎉🎉🎉🎉'
    return
  }
  btn_label.value = "🧨好运降临🧨"
  NS_shi.value.startAnimation(Number(shi))
  NS_ge.value.startAnimation(Number(ge))
  setTimeout(() => {
    if (gamble_winner_list.three.length < 5)
      gamble_winner_list.three.push(`${shi}${ge}`)
    else if (gamble_winner_list.two.length < 3)
      gamble_winner_list.two.push(`${shi}${ge}`)
    else if (gamble_winner_list.one.length < 1)
      gamble_winner_list.one.push(`${shi}${ge}`)
    startBtnDisable.value = false;

    btn_label.value = isEndGamble.value ? '🎉🎉🎉🎉🎉🎉' : "💪开始抽奖💪"

  }, 3000)
};

type RandomFunc = () => [String, String];
const getRandomNum: RandomFunc = () => {
  let numStr = '00'
  do {
    numStr = Math.ceil(Math.random() * 71).toString().padStart(2, '0')
  } while (
      gamble_winner_list.one.includes(numStr) ||
      gamble_winner_list.two.includes(numStr) ||
      gamble_winner_list.three.includes(numStr) ||
      gamble_winner_negative.includes(numStr)
      )
  return [numStr[0], numStr[1]]
}


</script>

<style scoped lang="scss">
.gamble-container {
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("@/views/assets/gamble/gamble_bg.png") center center;
  background-size: cover;
  color: white;
  font-size: 48px;
}

.start-btn {
  background-color: #930000;
  padding: 0 40px;
  border: 1px solid gold;
  border-radius: 40px;
  color: white;
}
.winner-item{
  line-height: 1.5;
}
.winner-list {
  display: inline-block;
  line-height: 1;
  width: 30vw;
}
</style>
