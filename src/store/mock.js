import { defineStore } from 'pinia'
import {
  banners,
  recommendBooks,
  coreadList,
  upcomingReads,
  topics,
  dailyReading,
  themeEntries,
  weeklyPicks,
  audioGuides,
  memberBenefits,
  userReviews,
  topicDetails,
} from '@/mock/data'

export const useMockStore = defineStore('mock', {
  state: () => ({
    banners,
    recommendBooks,
    coreadList,
    upcomingReads,
    topics,
    dailyReading,
    themeEntries,
    weeklyPicks,
    audioGuides,
    memberBenefits,
    userReviews,
    topicDetails,
  }),
})
