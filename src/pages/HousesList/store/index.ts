import axios from '@/lib/axios'
import type { House } from '@/types'
import { AxiosError } from 'axios'
import { defineStore } from 'pinia'

type State = {
  houses: House[]
  loading: boolean
  error: null | string
  total: number
  perPage: number
}

const useHousesStore = defineStore('houses', {
  state: (): State => ({
    houses: [],
    loading: false,
    error: null,
    total: 0,
    perPage: 10
  }),
  actions: {
    async fetchHouses(page: number) {
      this.loading = true
      try {
        const response = await axios.get(`houses`, {
          params: { page, perPage: this.perPage }
        })
        const { data, total } = response.data
        this.houses = data
        this.total = total
      } catch (error) {
        if (error instanceof AxiosError) this.error = error.message
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  }
})

export default useHousesStore
