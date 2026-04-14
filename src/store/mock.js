import { defineStore } from 'pinia'
import {
  banners,
  recommendBooks,
  coreadList,
  upcomingReads,
  topics,
} from '@/mock/data'

export const useMockStore = defineStore('mock', {
  state: () => ({
    banners,
    recommendBooks,
    coreadList,
    upcomingReads,
    topics,
  }),
})
