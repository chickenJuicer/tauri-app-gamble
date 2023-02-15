<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import Greet from "./components/Greet.vue";
import {useRouter} from "vue-router";

const router = useRouter();
const enterGamble = () => {
  router.push('/gamble')
}
const enterGambleConfig = ()=>{
  router.push('/config')
}
</script>

<template>
  <div class="container">
    <h1>Welcome to Tauri!</h1>
    <div class="enter-gamble-container">
      <button class="enter-gamble" @click="enterGamble">点我抽奖</button>
      <button class="enter-gamble-config" @click="enterGambleConfig">点我设置</button>
    </div>

<!--    <Greet/>-->
  </div>
</template>

<style scoped lang="scss">
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}

.enter-gamble-container {
  width: 100vw;
  text-align: center;
  .enter-gamble {
    width: 200pt;
  }
}
</style>
