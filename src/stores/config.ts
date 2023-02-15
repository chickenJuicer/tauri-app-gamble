import {defineStore} from "pinia"


export const configStore = defineStore("config", {
  state: () => ({
    start_num: 1,
    end_num: 99,
    winners_num_list: [1, 3, 5], // [1等奖人数, 2等奖人数, 3等奖人数]
    negative_winner_list: [] as Array<string>, // 得不到的永远在骚动
    positive_winner_list: [] as Array<string>, // 被疼爱的都有恃无恐
  }),
  getters: {
    winner_num_1st: (state) => state.winners_num_list[0],
    winner_num_2nd: (state) => state.winners_num_list[1],
    winner_num_3rd: (state) => state.winners_num_list[2],
  },
  actions: {
    setStartNum(v: number) {
      this.start_num = v
    },
    setEndNum(v: number) {
      this.end_num = v
    },
    setWinnersNumList(v: number[]) {
      this.winners_num_list = v
    },
    setNegativeWinnerList(v: string[]) {
      this.negative_winner_list = v
    },
    setPositiveWinnerList(v: string[]) {
      this.positive_winner_list = v
    }
  },
})
