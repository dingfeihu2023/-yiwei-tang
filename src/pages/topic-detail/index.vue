<template>
  <view class="page-topic-detail">

    <!-- 自定义导航栏 -->
    <view class="nav-bar" :style="{ paddingTop: statusBarHeight + 'px' }">
      <view class="nav-bar__inner">
        <view class="nav-bar__back" @click="goBack">
          <text class="nav-bar__back-icon">‹</text>
        </view>
        <text class="nav-bar__title">{{ navTitle }}</text>
        <view class="nav-bar__placeholder" />
      </view>
    </view>

    <!-- 占位 -->
    <view :style="{ height: (statusBarHeight + 44) + 'px' }" />

    <view v-if="detail" class="content">

      <!-- ① 封面区 -->
      <view class="hero">
        <image class="hero__cover" :src="detail.cover" mode="aspectFill" />
        <view class="hero__overlay" />
        <view class="hero__body">
          <view class="hero__tags">
            <YwTag v-for="tag in detail.tags" :key="tag" :label="tag" type="primary" />
          </view>
          <text class="hero__title">{{ detail.title }}</text>
          <text class="hero__subtitle">{{ detail.subtitle }}</text>
          <view class="hero__meta">
            <view class="hero__price-group">
              <text class="hero__symbol">¥</text>
              <text class="hero__price">{{ detail.price }}</text>
              <text class="hero__original">¥{{ detail.originalPrice }}</text>
            </view>
            <text class="hero__readers">{{ detail.readCount }}人已读</text>
          </view>
        </view>
      </view>

      <!-- ② 核心问题区 -->
      <view class="section">
        <view class="section__header">
          <view class="section__ornament" />
          <text class="section__title">这套内容，解决什么问题</text>
        </view>
        <YwCard class="problems-card">
          <view v-for="(problem, idx) in detail.coreProblems" :key="idx" class="problem-item">
            <text class="problem-item__bullet">{{ idx + 1 }}</text>
            <text class="problem-item__text">{{ problem }}</text>
          </view>
        </YwCard>
      </view>

      <!-- ③ 适合谁 / 不适合谁 -->
      <view class="section">
        <view class="section__header">
          <view class="section__ornament" />
          <text class="section__title">适合谁读</text>
        </view>
        <YwCard class="fit-card">
          <view class="fit-group">
            <text class="fit-group__label fit-group__label--yes">适合你，如果你是</text>
            <view v-for="(item, idx) in detail.forWhom" :key="'y' + idx" class="fit-item">
              <text class="fit-item__icon fit-item__icon--yes">✓</text>
              <text class="fit-item__text">{{ item }}</text>
            </view>
          </view>
          <view class="fit-divider" />
          <view class="fit-group">
            <text class="fit-group__label fit-group__label--no">可能不适合，如果你是</text>
            <view v-for="(item, idx) in detail.notForWhom" :key="'n' + idx" class="fit-item">
              <text class="fit-item__icon fit-item__icon--no">✗</text>
              <text class="fit-item__text">{{ item }}</text>
            </view>
          </view>
        </YwCard>
      </view>

      <!-- ④ 你将获得什么 -->
      <view class="section">
        <view class="section__header">
          <view class="section__ornament" />
          <text class="section__title">你将获得</text>
        </view>
        <view class="gains-grid">
          <YwCard v-for="gain in detail.gains" :key="gain.title" class="gain-card">
            <view class="gain-card__icon-wrap">
              <text class="gain-card__icon">{{ gain.icon }}</text>
            </view>
            <text class="gain-card__title">{{ gain.title }}</text>
            <text class="gain-card__desc">{{ gain.desc }}</text>
          </YwCard>
        </view>
      </view>

      <!-- ⑤ 内容目录 -->
      <view class="section">
        <view class="section__header">
          <view class="section__ornament" />
          <text class="section__title">内容目录</text>
          <text class="section__count">共 {{ detail.chapters.length }} 篇</text>
        </view>
        <YwCard class="toc-card">
          <view
            v-for="ch in detail.chapters"
            :key="ch.id"
            class="toc-item"
            :class="{ 'toc-item--free': ch.isFree }"
            @click="goChapter(ch)"
          >
            <view class="toc-item__left">
              <text class="toc-item__index">{{ String(ch.index).padStart(2, '0') }}</text>
              <view class="toc-item__info">
                <text class="toc-item__title">{{ ch.title }}</text>
                <text class="toc-item__desc">{{ ch.desc }}</text>
              </view>
            </view>
            <view class="toc-item__right">
              <YwTag v-if="ch.isFree" label="试读" type="accent" />
              <text v-else class="toc-item__lock">🔒</text>
            </view>
          </view>
        </YwCard>
      </view>

      <!-- ⑥ 试读入口 -->
      <view class="section">
        <YwCard class="trial-card" @click="goTrial">
          <view class="trial-card__header">
            <text class="trial-card__label">免费试读</text>
            <text class="trial-card__arrow">→</text>
          </view>
          <text class="trial-card__excerpt">{{ detail.trialExcerpt }}</text>
          <text class="trial-card__cta">点击阅读开篇内容</text>
        </YwCard>
      </view>

      <!-- ⑦ 用户评价 -->
      <view class="section">
        <view class="section__header">
          <view class="section__ornament" />
          <text class="section__title">读者评价</text>
        </view>
        <view class="reviews">
          <YwCard v-for="review in detail.reviews" :key="review.id" class="review-card">
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

      <!-- 底部栏占位 -->
      <view class="bottom-placeholder" />
    </view>

    <!-- 加载态 -->
    <view v-else class="loading">
      <text class="loading__text">加载中…</text>
    </view>

    <!-- ⑧ 底部固定购买栏 -->
    <view v-if="detail" class="purchase-bar">
      <view class="purchase-bar__inner">
        <view class="purchase-bar__left">
          <view class="purchase-bar__price-group">
            <text class="purchase-bar__symbol">¥</text>
            <text class="purchase-bar__price">{{ detail.price }}</text>
            <text class="purchase-bar__original">¥{{ detail.originalPrice }}</text>
          </view>
        </view>
        <view class="purchase-bar__right">
          <button class="purchase-bar__btn purchase-bar__btn--member" @click="goMember">
            开通会员免费读
          </button>
          <button class="purchase-bar__btn purchase-bar__btn--buy" @click="handleBuy">
            立即购买
          </button>
        </view>
      </view>
      <view class="purchase-bar__safe" />
    </view>

  </view>
</template>

<script setup>
import { ref, computed } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { useMockStore } from '@/store/mock'
import YwCard from '@/components/YwCard.vue'
import YwTag from '@/components/YwTag.vue'
import YwButton from '@/components/YwButton.vue'

const store = useMockStore()

const detail = ref(null)
const statusBarHeight = ref(0)

// 导航栏标题：滚动后显示简短标题
const navTitle = computed(() => {
  if (!detail.value) return ''
  return detail.value.theme ? `「${detail.value.theme}」微专栏` : '微专栏详情'
})

onLoad((query) => {
  // 获取状态栏高度
  const sysInfo = uni.getSystemInfoSync()
  statusBarHeight.value = sysInfo.statusBarHeight || 44

  // 根据 id 加载数据
  const id = query.id || 'td-shiju'
  const data = store.topicDetails[id]
  if (data) {
    detail.value = data
  } else {
    // fallback 到默认
    detail.value = store.topicDetails['td-shiju']
  }
})

function goBack() {
  uni.navigateBack({ delta: 1 })
}

function goChapter(ch) {
  if (ch.isFree) {
    console.log('navigate to reader, chapter:', ch.id)
  } else {
    uni.showToast({ title: '购买后解锁', icon: 'none' })
  }
}

function goTrial() {
  console.log('navigate to trial reader')
}

function goMember() {
  console.log('navigate to membership')
}

function handleBuy() {
  uni.showToast({ title: '购买功能开发中', icon: 'none' })
}
</script>

<style scoped>
/* ===== 页面 ===== */
.page-topic-detail {
  min-height: 100vh;
  background-color: var(--color-bg-page);
}

.content {
  padding: 0 var(--spacing-5);
}

/* ===== 自定义导航栏 ===== */
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: var(--color-bg-page);
}

.nav-bar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  padding: 0 var(--spacing-4);
}

.nav-bar__back {
  width: 64rpx;
  height: 64rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--color-bg-card);
}

.nav-bar__back-icon {
  font-size: 24px;
  color: var(--color-text-primary);
  line-height: 1;
  margin-top: -2px;
}

.nav-bar__title {
  font-size: var(--font-body);
  font-weight: var(--weight-medium);
  color: var(--color-text-primary);
}

.nav-bar__placeholder {
  width: 64rpx;
}

/* ===== ① 封面区 ===== */
.hero {
  position: relative;
  margin: 0 calc(-1 * var(--spacing-5));
  margin-bottom: var(--spacing-8);
  overflow: hidden;
}

.hero__cover {
  width: 100%;
  height: 520rpx;
}

.hero__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70%;
  background: linear-gradient(to top, rgba(31, 58, 55, 0.92) 0%, rgba(31, 58, 55, 0) 100%);
}

.hero__body {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--spacing-5);
}

.hero__tags {
  display: flex;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-3);
}

.hero__title {
  display: block;
  font-size: var(--font-h2);
  font-weight: var(--weight-bold);
  color: #ffffff;
  line-height: 1.5;
  margin-bottom: var(--spacing-2);
}

.hero__subtitle {
  display: block;
  font-size: var(--font-body);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: var(--spacing-4);
}

.hero__meta {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.hero__price-group {
  display: flex;
  align-items: baseline;
  gap: 2px;
}

.hero__symbol {
  font-size: var(--font-body);
  font-weight: var(--weight-bold);
  color: #ffffff;
}

.hero__price {
  font-size: var(--font-display);
  font-weight: var(--weight-bold);
  color: #ffffff;
  line-height: 1;
}

.hero__original {
  font-size: var(--font-body-sm);
  color: rgba(255, 255, 255, 0.5);
  text-decoration: line-through;
  margin-left: var(--spacing-2);
}

.hero__readers {
  font-size: var(--font-body-sm);
  color: rgba(255, 255, 255, 0.7);
}

/* ===== 通用区块标题 ===== */
.section {
  margin-bottom: var(--spacing-8);
}

.section__header {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-4);
}

.section__ornament {
  width: 6rpx;
  height: 32rpx;
  background-color: var(--color-primary-900);
  border-radius: 3rpx;
}

.section__title {
  font-size: var(--font-h3);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
}

.section__count {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
  margin-left: auto;
}

/* ===== ② 核心问题 ===== */
.problems-card {
  padding: var(--spacing-5);
}

.problem-item {
  display: flex;
  gap: var(--spacing-3);
  padding: var(--spacing-3) 0;
}

.problem-item:not(:last-child) {
  border-bottom: 1px solid var(--color-border);
}

.problem-item__bullet {
  width: 44rpx;
  height: 44rpx;
  border-radius: 50%;
  background-color: var(--color-primary-100);
  color: var(--color-primary-900);
  font-size: var(--font-body-sm);
  font-weight: var(--weight-semibold);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 1;
}

.problem-item__text {
  font-size: var(--font-body-lg);
  color: var(--color-text-primary);
  line-height: 1.6;
  flex: 1;
}

/* ===== ③ 适合谁 ===== */
.fit-card {
  padding: var(--spacing-5);
}

.fit-group {
  padding: var(--spacing-2) 0;
}

.fit-group__label {
  display: block;
  font-size: var(--font-body);
  font-weight: var(--weight-semibold);
  margin-bottom: var(--spacing-3);
}

.fit-group__label--yes {
  color: var(--color-primary-900);
}

.fit-group__label--no {
  color: var(--color-text-muted);
}

.fit-divider {
  height: 1px;
  background-color: var(--color-border);
  margin: var(--spacing-4) 0;
}

.fit-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-3);
}

.fit-item:last-child {
  margin-bottom: 0;
}

.fit-item__icon {
  font-size: var(--font-body);
  font-weight: var(--weight-bold);
  line-height: 1.6;
  flex-shrink: 0;
  width: 36rpx;
  text-align: center;
}

.fit-item__icon--yes {
  color: var(--color-primary-700);
}

.fit-item__icon--no {
  color: var(--color-text-muted);
}

.fit-item__text {
  font-size: var(--font-body);
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* ===== ④ 你将获得 ===== */
.gains-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3);
}

.gain-card {
  padding: var(--spacing-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.gain-card__icon-wrap {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  background-color: var(--color-primary-100);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-3);
}

.gain-card__icon {
  font-size: var(--font-h2);
  color: var(--color-primary-900);
  font-family: 'Noto Serif SC', 'Source Han Serif CN', 'STSong', serif;
}

.gain-card__title {
  display: block;
  font-size: var(--font-body);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-1);
}

.gain-card__desc {
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
  line-height: 1.5;
}

/* ===== ⑤ 内容目录 ===== */
.toc-card {
  padding: 0;
  overflow: hidden;
}

.toc-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-4);
  border-bottom: 1px solid var(--color-border);
}

.toc-item:last-child {
  border-bottom: none;
}

.toc-item__left {
  display: flex;
  gap: var(--spacing-3);
  flex: 1;
  min-width: 0;
}

.toc-item__index {
  font-size: var(--font-h2);
  font-weight: var(--weight-bold);
  color: var(--color-border);
  font-family: 'Georgia', serif;
  width: 56rpx;
  flex-shrink: 0;
  line-height: 1.2;
}

.toc-item--free .toc-item__index {
  color: var(--color-primary-700);
}

.toc-item__info {
  flex: 1;
  min-width: 0;
}

.toc-item__title {
  display: block;
  font-size: var(--font-body);
  font-weight: var(--weight-medium);
  color: var(--color-text-primary);
  margin-bottom: 2px;
  line-height: 1.5;
}

.toc-item__desc {
  display: block;
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.toc-item__right {
  flex-shrink: 0;
  margin-left: var(--spacing-2);
}

.toc-item__lock {
  font-size: var(--font-body-sm);
  opacity: 0.4;
}

/* ===== ⑥ 试读入口 ===== */
.trial-card {
  padding: var(--spacing-5);
  border: 2rpx solid var(--color-primary-700);
  background-color: var(--color-primary-100);
}

.trial-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-3);
}

.trial-card__label {
  font-size: var(--font-body);
  font-weight: var(--weight-semibold);
  color: var(--color-primary-900);
}

.trial-card__arrow {
  font-size: var(--font-h3);
  color: var(--color-primary-700);
}

.trial-card__excerpt {
  display: block;
  font-size: var(--font-body);
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-4);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.trial-card__cta {
  font-size: var(--font-body-sm);
  color: var(--color-primary-700);
  font-weight: var(--weight-medium);
}

/* ===== ⑦ 用户评价 ===== */
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

/* ===== ⑧ 底部购买栏 ===== */
.bottom-placeholder {
  height: 140rpx;
}

.purchase-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: var(--color-bg-card);
  box-shadow: 0 -2px 12px rgba(31, 31, 28, 0.08);
}

.purchase-bar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-3) var(--spacing-4);
}

.purchase-bar__left {
  flex-shrink: 0;
}

.purchase-bar__price-group {
  display: flex;
  align-items: baseline;
  gap: 2px;
}

.purchase-bar__symbol {
  font-size: var(--font-body-sm);
  font-weight: var(--weight-bold);
  color: var(--color-accent-cinnabar);
}

.purchase-bar__price {
  font-size: var(--font-h1);
  font-weight: var(--weight-bold);
  color: var(--color-accent-cinnabar);
  line-height: 1;
}

.purchase-bar__original {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
  text-decoration: line-through;
  margin-left: var(--spacing-1);
}

.purchase-bar__right {
  display: flex;
  gap: var(--spacing-2);
  flex-shrink: 0;
}

.purchase-bar__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 76rpx;
  padding: 0 var(--spacing-4);
  font-size: var(--font-body-sm);
  font-weight: var(--weight-medium);
  border-radius: var(--radius-md);
  border: none;
  line-height: 1;
}

.purchase-bar__btn::after {
  border: none;
}

.purchase-bar__btn--member {
  background-color: var(--color-primary-100);
  color: var(--color-primary-900);
}

.purchase-bar__btn--buy {
  background-color: var(--color-primary-900);
  color: #ffffff;
}

.purchase-bar__btn:active {
  opacity: 0.85;
}

.purchase-bar__safe {
  padding-bottom: env(safe-area-inset-bottom);
}

/* ===== 加载态 ===== */
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40vh;
}

.loading__text {
  font-size: var(--font-body);
  color: var(--color-text-muted);
}
</style>
