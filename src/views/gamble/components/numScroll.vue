<template>
  <div class="num-container">
    <div
        :class="[
          'num-ul',
           animateStart ? animation_N : '',
           animateStart ? 'num-ul-animation':''
           ]"
        ref="num_ul"
        @animationcancel="resetNumList"
        @animationend="resetNumList"
    >
      <div v-for="num in num_list" class="num-li">{{ num }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gambleIndex",
  props: {
    delay: {default: 0, type: Number},
    during: {default: 2, type: Number},
    startNum: {default: 3, type: Number},
  },
  data() {
    return {
      animateStart: false,
      num_list: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,

        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,

        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,

        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,

        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      ],
      animation_N: '',
      restart: false,
      newStartNum: 0,
      lastEndNum: 9,
    }
  },
  mounted() {
    if (this.startNum !== 0) {
      for (let i = 9; i >= this.startNum; i--)
        this.num_list.unshift(i);
    }
  },
  methods: {
    startAnimation(endNum) {
      this.lastEndNum = endNum;
      if (endNum !== 9) {
        for (let i = 0; i <= endNum; i++) {
          this.num_list.push(i);
        }
      }
      this.animation_N = 'num-ul-animation-' + this.num_list.length;
      this.$refs['num_ul'].style.animationDelay = this.delay + 's'
      this.$refs['num_ul'].style.animationDuration = this.during + 's'
      this.animateStart = true
    },
    resetNumList() {
      this.animateStart = false
      this.num_list = [];
      if (this.lastEndNum !== 0) {
        for (let i = 9; i >= this.lastEndNum; i--)
          this.num_list.unshift(i);
      }
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          this.num_list.push(j);
        }
      }
    },

  }
}
</script>

<style scoped lang="scss">

.num-container {
  position: relative;
  width: 180px;
  height: 240px;
  overflow: hidden;
  .num-ul {
    position: absolute;

    .num-li {
      width: 180px;
      height: 240px;
      line-height: 240px;
      text-align: center;
      font-size: 200px;
      color: gold;
    }
  }

  .num-ul-animation {
    animation-timing-function: cubic-bezier(0.95, 0.0, 0.0, 0.95);
    animation-fill-mode: forwards;
  }

  .num-ul-animation-100 {
    animation-name: scrollme100
  }

  .num-ul-animation-101 {
    animation-name: scrollme101
  }

  .num-ul-animation-102 {
    animation-name: scrollme102
  }

  .num-ul-animation-103 {
    animation-name: scrollme103
  }

  .num-ul-animation-104 {
    animation-name: scrollme104
  }

  .num-ul-animation-105 {
    animation-name: scrollme105
  }

  .num-ul-animation-106 {
    animation-name: scrollme106
  }

  .num-ul-animation-107 {
    animation-name: scrollme107
  }

  .num-ul-animation-108 {
    animation-name: scrollme108
  }

  .num-ul-animation-109 {
    animation-name: scrollme109
  }

  .num-ul-animation-110 {
    animation-name: scrollme110
  }

  .num-ul-animation-111 {
    animation-name: scrollme111
  }

  .num-ul-animation-112 {
    animation-name: scrollme112
  }

  .num-ul-animation-113 {
    animation-name: scrollme113
  }

  .num-ul-animation-114 {
    animation-name: scrollme114
  }

  .num-ul-animation-115 {
    animation-name: scrollme115
  }

  .num-ul-animation-116 {
    animation-name: scrollme116
  }

  .num-ul-animation-117 {
    animation-name: scrollme117
  }

  .num-ul-animation-118 {
    animation-name: scrollme118
  }

}

@keyframes scrollme100 {
  0% {
    top: 0;
  }
  100% {
    top: calc(99 * -240px);
  }
}

@keyframes scrollme101 {
  0% {
    top: 0;
  }
  100% {
    top: calc(100 * -240px);
  }
}

@keyframes scrollme102 {
  0% {
    top: 0;
  }
  100% {
    top: calc(101 * -240px);
  }
}

@keyframes scrollme103 {
  0% {
    top: 0;
  }
  100% {
    top: calc(102 * -240px);
  }
}

@keyframes scrollme104 {
  0% {
    top: 0;
  }
  100% {
    top: calc(103 * -240px);
  }
}

@keyframes scrollme105 {
  0% {
    top: 0;
  }
  100% {
    top: calc(104 * -240px);
  }
}

@keyframes scrollme106 {
  0% {
    top: 0;
  }
  100% {
    top: calc(105 * -240px);
  }
}

@keyframes scrollme107 {
  0% {
    top: 0;
  }
  100% {
    top: calc(106 * -240px);
  }
}

@keyframes scrollme108 {
  0% {
    top: 0;
  }
  100% {
    top: calc(107 * -240px);
  }
}

@keyframes scrollme109 {
  0% {
    top: 0;
  }
  100% {
    top: calc(108 * -240px);
  }
}

@keyframes scrollme110 {
  0% {
    top: 0;
  }
  100% {
    top: calc(109 * -240px);
  }
}

@keyframes scrollme111 {
  0% {
    top: 0;
  }
  100% {
    top: calc(110 * -240px);
  }
}

@keyframes scrollme112 {
  0% {
    top: 0;
  }
  100% {
    top: calc(111 * -240px);
  }
}

@keyframes scrollme113 {
  0% {
    top: 0;
  }
  100% {
    top: calc(112 * -240px);
  }
}

@keyframes scrollme114 {
  0% {
    top: 0;
  }
  100% {
    top: calc(113 * -240px);
  }
}

@keyframes scrollme115 {
  0% {
    top: 0;
  }
  100% {
    top: calc(114 * -240px);
  }
}

@keyframes scrollme116 {
  0% {
    top: 0;
  }
  100% {
    top: calc(115 * -240px);
  }
}

@keyframes scrollme117 {
  0% {
    top: 0;
  }
  100% {
    top: calc(116 * -240px);
  }
}

@keyframes scrollme118 {
  0% {
    top: 0;
  }
  100% {
    top: calc(117 * -240px);
  }
}
</style>
