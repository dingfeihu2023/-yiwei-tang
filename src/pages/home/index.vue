<template>
  <view class="page-home">

    <!-- ① 搜索栏 -->
    <view class="search-bar" @click="goSearch">
      <view class="search-bar__icon">
        <text class="search-bar__icon-text">搜</text>
      </view>
      <text class="search-bar__placeholder">搜索书籍、专题、作者…</text>
    </view>

    <!-- ② 品牌区 -->
    <view class="brand">
      <text class="brand__name">一 苇 堂</text>
      <text class="brand__headline">用古典智慧，解决中年人的现实困局</text>
      <text class="brand__subline">看清人 · 看懂局 · 看稳自己</text>
      <view class="brand__actions">
        <YwButton type="primary" @click="goTrial">立即试读</YwButton>
        <YwButton type="secondary" @click="goMember">会员权益</YwButton>
      </view>
    </view>

    <!-- ③ 今日一读 -->
    <view class="section">
      <YwSectionHeader title="今日一读" />
      <YwCard class="daily-card" @click="goReader(daily.id)">
        <view class="daily-card__header">
          <text class="daily-card__source">{{ daily.source }}</text>
          <text class="daily-card__time">{{ daily.readTime }}</text>
        </view>
        <text class="daily-card__title">{{ daily.title }}</text>
        <text class="daily-card__excerpt">{{ daily.excerpt }}</text>
        <view class="daily-card__footer">
          <text class="daily-card__cta">开始阅读 →</text>
        </view>
      </YwCard>
    </view>

    <!-- ④ 三大主题入口 -->
    <view class="section">
      <YwSectionHeader title="找到你的读法" subtitle="三条路径，对症下药" />
      <view class="themes">
        <view
          v-for="theme in themes"
          :key="theme.id"
          class="theme-entry"
          @click="goTheme(theme.key)"
        >
          <view class="theme-entry__icon-wrap">
            <text class="theme-entry__icon">{{ theme.icon }}</text>
          </view>
          <text class="theme-entry__title">{{ theme.title }}</text>
          <text class="theme-entry__subtitle">{{ theme.subtitle }}</text>
          <text class="theme-entry__desc">{{ theme.desc }}</text>
        </view>
      </view>
    </view>

    <!-- ⑤ 本周推荐 -->
    <view class="section">
      <YwSectionHeader title="本周推荐" action-text="查看全部" @action="goMore('weekly')" />
      <view class="weekly-list">
        <YwCard
          v-for="item in weeklyPicks"
          :key="item.id"
          class="weekly-card"
          :no-padding="true"
          @click="goDetail(item.id)"
        >
          <view class="weekly-card__cover-wrap">
            <image class="weekly-card__cover" :src="item.cover" mode="aspectFill" />
            <view v-if="item.badge" class="weekly-card__badge">
              <text class="weekly-card__badge-text">{{ item.badge }}</text>
            </view>
          </view>
          <view class="weekly-card__body">
            <text class="weekly-card__title">{{ item.title }}</text>
            <text class="weekly-card__subtitle">{{ item.subtitle }}</text>
            <view class="weekly-card__tags">
              <YwTag
                v-for="tag in item.tags"
                :key="tag"
                :label="tag"
                type="primary"
              />
            </view>
            <view class="weekly-card__price-row">
              <view class="weekly-card__price-group">
                <text class="weekly-card__symbol">¥</text>
                <text class="weekly-card__price">{{ item.price }}</text>
                <text class="weekly-card__original">¥{{ item.originalPrice }}</text>
              </view>
            </view>
          </view>
        </YwCard>
      </view>
    </view>

    <!-- ⑥ 作者导读音频 -->
    <view class="section">
      <YwSectionHeader title="名师导读" subtitle="听见经典的声音" action-text="更多" @action="goMore('audio')" />
      <view class="audio-list">
        <YwCard
          v-for="audio in audioGuides"
          :key="audio.id"
          class="audio-card"
          @click="playAudio(audio.id)"
        >
          <view class="audio-card__row">
            <image class="audio-card__avatar" :src="audio.avatar" mode="aspectFill" />
            <view class="audio-card__info">
              <text class="audio-card__title">{{ audio.title }}</text>
              <view class="audio-card__meta">
                <text class="audio-card__author">{{ audio.author }}</text>
                <text class="audio-card__dot">·</text>
                <text class="audio-card__author-title">{{ audio.authorTitle }}</text>
              </view>
            </view>
          </view>
          <view class="audio-card__bottom">
            <view class="audio-card__play-btn">
              <text class="audio-card__play-icon">▶</text>
            </view>
            <text class="audio-card__duration">{{ audio.duration }}</text>
            <text class="audio-card__plays">{{ formatPlays(audio.plays) }}次播放</text>
          </view>
        </YwCard>
      </view>
    </view>

    <!-- ⑦ 会员权益 -->
    <view class="section">
      <YwSectionHeader title="成为会员" subtitle="年卡 ¥198/年" />
      <YwCard class="member-card">
        <view class="member-grid">
          <view v-for="item in memberBenefits" :key="item.id" class="member-item">
            <view class="member-item__icon-wrap">
              <text class="member-item__icon">{{ item.icon }}</text>
            </view>
            <text class="member-item__title">{{ item.title }}</text>
            <text class="member-item__desc">{{ item.desc }}</text>
          </view>
        </view>
        <view class="member-card__action">
          <YwButton type="primary" block @click="goMember">了解会员权益</YwButton>
        </view>
      </YwCard>
    </view>

    <!-- ⑧ 信任补强（用户评价） -->
    <view class="section">
      <YwSectionHeader title="读友心声" subtitle="来自真实用户" />
      <view class="reviews">
        <YwCard
          v-for="review in userReviews"
          :key="review.id"
          class="review-card"
        >
          <view class="review-card__header">
            <image class="review-card__avatar" :src="review.avatar" mode="aspectFill" />
            <view class="review-card__user">
              <text class="review-card__name">{{ review.nickname }}</text>
              <YwTag :label="review.tag" type="default" />
            </view>
          </view>
          <text class="review-card__content">{{ review.content }}</text>
        </YwCard>
      </view>
    </view>

    <!-- ⑨ 底部行动区 -->
    <view class="section bottom-cta">
      <view class="bottom-cta__divider">
        <view class="bottom-cta__line" />
        <text class="bottom-cta__ornament">一</text>
        <view class="bottom-cta__line" />
      </view>
      <text class="bottom-cta__text">
        古典不远，智慧常新
      </text>
      <text class="bottom-cta__sub">
        每天十分钟，给忙碌的你一点清凉
      </text>
      <view class="bottom-cta__actions">
        <YwButton type="primary" block @click="goTrial">开始免费试读</YwButton>
      </view>
      <text class="bottom-cta__footer">一苇堂 · 与经典同行</text>
    </view>

    <!-- 底部安全区占位 -->
    <view class="safe-bottom" />
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { useMockStore } from '@/store/mock'
import YwButton from '@/components/YwButton.vue'
import YwCard from '@/components/YwCard.vue'
import YwTag from '@/components/YwTag.vue'
import YwSectionHeader from '@/components/YwSectionHeader.vue'

const store = useMockStore()

const daily = ref(store.dailyReading)
const themes = ref(store.themeEntries)
const weeklyPicks = ref(store.weeklyPicks)
const audioGuides = ref(store.audioGuides)
const memberBenefits = ref(store.memberBenefits)
const userReviews = ref(store.userReviews)

function formatPlays(n) {
  if (n >= 10000) return (n / 10000).toFixed(1) + '万'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
  return String(n)
}

function goSearch() {
  console.log('navigate to search')
}

function goTrial() {
  console.log('navigate to trial reading')
}

function goMember() {
  console.log('navigate to membership')
}

function goReader(id) {
  console.log('navigate to reader:', id)
}

function goTheme(key) {
  console.log('navigate to theme:', key)
}

function goMore(type) {
  console.log('navigate to more:', type)
}

function goDetail(id) {
  console.log('navigate to detail:', id)
}

function playAudio(id) {
  console.log('play audio:', id)
}
</script>

<style scoped>
/* ===== 页面容器 ===== */
.page-home {
  padding: 0 var(--spacing-5);
  padding-top: var(--spacing-4);
}

.safe-bottom {
  height: calc(var(--spacing-8) + var(--spacing-8) + env(safe-area-inset-bottom));
}

/* ===== ① 搜索栏 ===== */
.search-bar {
  display: flex;
  align-items: center;
  height: 80rpx;
  padding: 0 var(--spacing-4);
  background-color: var(--color-bg-card);
  border-radius: var(--radius-xl);
  margin-bottom: var(--spacing-6);
  gap: var(--spacing-2);
}

.search-bar__icon {
  width: 40rpx;
  height: 40rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-bar__icon-text {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
}

.search-bar__placeholder {
  font-size: var(--font-body);
  color: var(--color-text-muted);
}

/* ===== ② 品牌区 ===== */
.brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--spacing-8) 0;
  margin-bottom: var(--spacing-6);
}

.brand__name {
  font-size: 36px;
  font-weight: var(--weight-bold);
  color: var(--color-primary-900);
  letter-spacing: 8px;
  font-family: 'Noto Serif SC', 'Source Han Serif CN', 'STSong', serif;
  margin-bottom: var(--spacing-5);
}

.brand__headline {
  font-size: var(--font-h1);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
  line-height: 1.5;
  margin-bottom: var(--spacing-3);
}

.brand__subline {
  font-size: var(--font-body-lg);
  color: var(--color-text-secondary);
  letter-spacing: 2px;
  margin-bottom: var(--spacing-8);
}

.brand__actions {
  display: flex;
  gap: var(--spacing-3);
}

/* ===== ③ 今日一读 ===== */
.section {
  margin-bottom: var(--spacing-8);
}

.daily-card {
  padding: var(--spacing-5);
}

.daily-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-4);
}

.daily-card__source {
  font-size: var(--font-body-sm);
  color: var(--color-accent-bronze);
  font-weight: var(--weight-medium);
}

.daily-card__time {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
}

.daily-card__title {
  display: block;
  font-size: var(--font-h1);
  font-weight: var(--weight-bold);
  color: var(--color-primary-900);
  font-family: 'Noto Serif SC', 'Source Han Serif CN', 'STSong', serif;
  margin-bottom: var(--spacing-4);
  line-height: 1.4;
}

.daily-card__excerpt {
  display: block;
  font-size: var(--font-body-lg);
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-5);
}

.daily-card__footer {
  display: flex;
  justify-content: flex-end;
}

.daily-card__cta {
  font-size: var(--font-body);
  color: var(--color-primary-700);
  font-weight: var(--weight-medium);
}

/* ===== ④ 三大主题入口 ===== */
.themes {
  display: flex;
  gap: var(--spacing-3);
}

.theme-entry {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--color-bg-card);
  border-radius: var(--radius-lg);
  padding: var(--spacing-5) var(--spacing-2);
  box-shadow: var(--shadow-card);
}

.theme-entry__icon-wrap {
  width: 88rpx;
  height: 88rpx;
  border-radius: 50%;
  background-color: var(--color-primary-100);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-3);
}

.theme-entry__icon {
  font-size: var(--font-h1);
  color: var(--color-primary-900);
  font-family: 'Noto Serif SC', 'Source Han Serif CN', 'STSong', serif;
}

.theme-entry__title {
  display: block;
  font-size: var(--font-h3);
  font-weight: var(--weight-semibold);
  color: var(--color-primary-900);
  margin-bottom: var(--spacing-1);
}

.theme-entry__subtitle {
  display: block;
  font-size: 11px;
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-2);
}

.theme-entry__desc {
  display: block;
  font-size: var(--font-caption);
  color: var(--color-text-secondary);
  line-height: 1.4;
}

/* ===== ⑤ 本周推荐 ===== */
.weekly-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.weekly-card {
  overflow: hidden;
}

.weekly-card__cover-wrap {
  position: relative;
}

.weekly-card__cover {
  width: 100%;
  height: 360rpx;
}

.weekly-card__badge {
  position: absolute;
  top: var(--spacing-3);
  left: var(--spacing-3);
  background-color: var(--color-accent-cinnabar);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-sm);
}

.weekly-card__badge-text {
  font-size: var(--font-caption);
  color: #ffffff;
  font-weight: var(--weight-medium);
}

.weekly-card__body {
  padding: var(--spacing-4);
}

.weekly-card__title {
  display: block;
  font-size: var(--font-body-lg);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
  line-height: 1.5;
  margin-bottom: var(--spacing-2);
}

.weekly-card__subtitle {
  display: block;
  font-size: var(--font-body-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-3);
}

.weekly-card__tags {
  display: flex;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-3);
}

.weekly-card__price-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.weekly-card__price-group {
  display: flex;
  align-items: baseline;
  gap: 2px;
}

.weekly-card__symbol {
  font-size: var(--font-body-sm);
  font-weight: var(--weight-semibold);
  color: var(--color-accent-cinnabar);
}

.weekly-card__price {
  font-size: var(--font-h1);
  font-weight: var(--weight-bold);
  color: var(--color-accent-cinnabar);
  line-height: 1;
}

.weekly-card__original {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
  text-decoration: line-through;
  margin-left: var(--spacing-2);
}

/* ===== ⑥ 作者导读音频 ===== */
.audio-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.audio-card {
  padding: var(--spacing-4);
}

.audio-card__row {
  display: flex;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-3);
}

.audio-card__avatar {
  width: 88rpx;
  height: 88rpx;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: var(--color-primary-100);
}

.audio-card__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}

.audio-card__title {
  display: block;
  font-size: var(--font-body);
  font-weight: var(--weight-medium);
  color: var(--color-text-primary);
  line-height: 1.5;
  margin-bottom: var(--spacing-1);
}

.audio-card__meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
}

.audio-card__author {
  font-size: var(--font-body-sm);
  color: var(--color-text-secondary);
}

.audio-card__dot {
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
}

.audio-card__author-title {
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
}

.audio-card__bottom {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding-top: var(--spacing-3);
  border-top: 1px solid var(--color-border);
}

.audio-card__play-btn {
  width: 56rpx;
  height: 56rpx;
  border-radius: 50%;
  background-color: var(--color-primary-900);
  display: flex;
  align-items: center;
  justify-content: center;
}

.audio-card__play-icon {
  font-size: 10px;
  color: #ffffff;
  margin-left: 2px;
}

.audio-card__duration {
  font-size: var(--font-body-sm);
  color: var(--color-text-secondary);
  font-weight: var(--weight-medium);
}

.audio-card__plays {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
}

/* ===== ⑦ 会员权益 ===== */
.member-card {
  padding: var(--spacing-5);
}

.member-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-5);
}

.member-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.member-item__icon-wrap {
  width: 80rpx;
  height: 80rpx;
  border-radius: var(--radius-md);
  background-color: var(--color-primary-100);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-2);
}

.member-item__icon {
  font-size: var(--font-h2);
  color: var(--color-primary-900);
  font-family: 'Noto Serif SC', 'Source Han Serif CN', 'STSong', serif;
}

.member-item__title {
  display: block;
  font-size: var(--font-body);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: 2px;
}

.member-item__desc {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
}

.member-card__action {
  padding-top: var(--spacing-4);
  border-top: 1px solid var(--color-border);
}

/* ===== ⑧ 用户评价 ===== */
.reviews {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.review-card {
  padding: var(--spacing-4);
}

.review-card__header {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-3);
}

.review-card__avatar {
  width: 72rpx;
  height: 72rpx;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: var(--color-primary-100);
}

.review-card__user {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.review-card__name {
  font-size: var(--font-body);
  font-weight: var(--weight-medium);
  color: var(--color-text-primary);
}

.review-card__content {
  display: block;
  font-size: var(--font-body);
  color: var(--color-text-secondary);
  line-height: 1.8;
}

/* ===== ⑨ 底部行动区 ===== */
.bottom-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: var(--spacing-8);
  padding-bottom: var(--spacing-4);
}

.bottom-cta__divider {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-6);
  width: 100%;
}

.bottom-cta__line {
  flex: 1;
  height: 1px;
  background-color: var(--color-border);
}

.bottom-cta__ornament {
  font-size: var(--font-body);
  color: var(--color-text-muted);
  font-family: 'Noto Serif SC', 'Source Han Serif CN', 'STSong', serif;
}

.bottom-cta__text {
  display: block;
  font-size: var(--font-h2);
  font-weight: var(--weight-semibold);
  color: var(--color-primary-900);
  font-family: 'Noto Serif SC', 'Source Han Serif CN', 'STSong', serif;
  margin-bottom: var(--spacing-2);
}

.bottom-cta__sub {
  display: block;
  font-size: var(--font-body);
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-6);
}

.bottom-cta__actions {
  width: 100%;
  margin-bottom: var(--spacing-6);
}

.bottom-cta__footer {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
  letter-spacing: 2px;
}
</style>
