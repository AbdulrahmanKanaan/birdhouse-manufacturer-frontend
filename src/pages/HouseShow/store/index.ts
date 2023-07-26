import axios from '@/lib/axios'
import type { House, Residency } from '@/types'
import { AxiosError } from 'axios'
import { defineStore } from 'pinia'

type State = {
  history: Residency[]
  historyLoading: boolean
  house: House | null
  houseLoading: boolean
  error: null | string
  total: number
  perPage: number
}

const useHouseStore = defineStore('house', {
  state: (): State => ({
    history: [],
    house: null,
    historyLoading: false,
    houseLoading: false,
    error: null,
    total: 0,
    perPage: 7
  }),
  getters: {
    loading: (state) => state.historyLoading || state.houseLoading
  },
  actions: {
    async fetchHistory(id: string, page: number) {
      this.historyLoading = true
      try {
        const response = await axios.get(`houses/${id}/history`, {
          params: { page, perPage: this.perPage }
        })
        const { data, total } = response.data
        this.history = data
        this.total = total
      } catch (error) {
        if (error instanceof AxiosError) this.error = error.message
        console.log(error)
      } finally {
        this.historyLoading = false
      }
    },
    async fetchHouse(id: string) {
      this.houseLoading = true
      try {
        const response = await axios.get(`houses/${id}`)
        this.house = response.data
      } catch (error) {
        if (error instanceof AxiosError) this.error = error.message
        console.log(error)
      } finally {
        this.houseLoading = false
      }
    }
  }
})

export default useHouseStore
