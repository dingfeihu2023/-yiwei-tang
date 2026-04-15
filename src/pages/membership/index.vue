<template>
  <view class="page-membership">

    <!-- 自定义导航栏 -->
    <view class="nav-bar" :style="{ paddingTop: statusBarHeight + 'px' }">
      <view class="nav-bar__inner">
        <view class="nav-bar__back" @click="goBack">
          <text class="nav-bar__back-icon">‹</text>
        </view>
        <text class="nav-bar__title">会员</text>
        <view class="nav-bar__placeholder" />
      </view>
    </view>
    <view :style="{ height: (statusBarHeight + 44) + 'px' }" />

    <!-- ① 顶部价值主张区 -->
    <view class="hero">
      <view class="hero__badge">
        <text class="hero__badge-text">年度会员</text>
      </view>
      <text class="hero__brand">一苇堂会员</text>
      <text class="hero__headline">不只买一本到两本，而是给自己留一处稳定之地</text>
      <view class="hero__price-area">
        <view class="hero__price-row">
          <text class="hero__symbol">¥</text>
          <text class="hero__price">{{ data.price }}</text>
          <text class="hero__unit">{{ data.unit }}</text>
        </view>
        <text class="hero__original">原价 ¥{{ data.originalPrice }}/年</text>
        <text class="hero__note">{{ data.priceNote }}</text>
      </view>
    </view>

    <!-- ② 会员适合谁 -->
    <view class="section">
      <view class="section__header">
        <view class="section__ornament" />
        <text class="section__title">这张会员卡，为谁准备</text>
      </view>
      <view class="for-whom">
        <view v-for="(item, idx) in data.forWhom" :key="idx" class="for-whom-item">
          <view class="for-whom-item__icon-wrap">
            <text class="for-whom-item__icon">{{ item.icon }}</text>
          </view>
          <text class="for-whom-item__text">{{ item.text }}</text>
        </view>
      </view>
    </view>

    <!-- ③ 权益清单 -->
    <view class="section">
      <view class="section__header">
        <view class="section__ornament" />
        <text class="section__title">会员权益</text>
        <text class="section__subtitle">6 项专属</text>
      </view>
      <view class="benefits">
        <YwCard v-for="b in data.benefits" :key="b.title" class="benefit-card">
          <view class="benefit-card__top">
            <view class="benefit-card__icon-wrap">
              <text class="benefit-card__icon">{{ b.icon }}</text>
            </view>
            <view class="benefit-card__stat-wrap">
              <text class="benefit-card__stat">{{ b.stat }}</text>
            </view>
          </view>
          <text class="benefit-card__title">{{ b.title }}</text>
          <text class="benefit-card__desc">{{ b.desc }}</text>
        </YwCard>
      </view>
    </view>

    <!-- ④ 当前可读内容示例 -->
    <view class="section">
      <view class="section__header">
        <view class="section__ornament" />
        <text class="section__title">开通即可阅读</text>
        <text class="section__subtitle">持续更新中</text>
      </view>
      <scroll-view scroll-x class="content-scroll">
        <view class="content-scroll__inner">
          <view v-for="item in data.contentExamples" :key="item.id" class="content-item">
            <image class="content-item__cover" :src="item.cover" mode="aspectFill" />
            <text class="content-item__title">{{ item.title }}</text>
            <text class="content-item__type">{{ item.type }}</text>
          </view>
        </view>
      </scroll-view>
    </view>

    <!-- ⑤ 单买 vs 会员对比 -->
    <view class="section">
      <view class="section__header">
        <view class="section__ornament" />
        <text class="section__title">算一笔账</text>
      </view>
      <YwCard class="compare-card">
        <!-- 表头 -->
        <view class="compare-row compare-row--header">
          <text class="compare-cell compare-cell--label">使用场景</text>
          <text class="compare-cell compare-cell--single">单买</text>
          <text class="compare-cell compare-cell--member">会员</text>
        </view>
        <!-- 行 -->
        <view
          v-for="(row, idx) in data.comparison.scenarios"
          :key="idx"
          class="compare-row"
          :class="{ 'compare-row--highlight': row.highlight }"
        >
          <text class="compare-cell compare-cell--label">{{ row.label }}</text>
          <text class="compare-cell compare-cell--single">{{ row.single }}</text>
          <text class="compare-cell compare-cell--member" :class="{ 'compare-cell--accent': true }">{{ row.member }}</text>
        </view>
      </YwCard>
    </view>

    <!-- ⑥ FAQ -->
    <view class="section">
      <view class="section__header">
        <view class="section__ornament" />
        <text class="section__title">常见问题</text>
      </view>
      <view class="faq-list">
        <YwCard
          v-for="(faq, idx) in data.faqs"
          :key="idx"
          class="faq-card"
          @click="toggleFaq(idx)"
        >
          <view class="faq-card__header">
            <text class="faq-card__question">{{ faq.q }}</text>
            <text class="faq-card__arrow" :class="{ 'faq-card__arrow--open': openFaqIdx === idx }">›</text>
          </view>
          <view v-if="openFaqIdx === idx" class="faq-card__body">
            <text class="faq-card__answer">{{ faq.a }}</text>
          </view>
        </YwCard>
      </view>
    </view>

    <!-- ⑦ 用户评价 -->
    <view class="section">
      <view class="section__header">
        <view class="section__ornament" />
        <text class="section__title">会员心声</text>
      </view>
      <view class="reviews">
        <YwCard v-for="review in data.reviews" :key="review.id" class="review-card">
          <view class="review-card__header">
            <image class="review-card__avatar" :src="review.avatar" mode="aspectFill" />
            <view class="review-card__user">
              <text class="review-card__name">{{ review.nickname }}</text>
              <YwTag :label="review.tag" type="primary" />
            </view>
          </view>
          <text class="review-card__content">{{ review.content }}</text>
        </YwCard>
      </view>
    </view>

    <!-- 底部信任文案 -->
    <view class="trust-footer">
      <view class="trust-footer__divider">
        <view class="trust-footer__line" />
        <text class="trust-footer__ornament">一</text>
        <view class="trust-footer__line" />
      </view>
      <text class="trust-footer__text">安静读书，从容生活</text>
      <text class="trust-footer__sub">一苇堂 · 7 天无理由退款</text>
    </view>

    <view class="bottom-placeholder" />

    <!-- ⑧ 底部固定开通按钮 -->
    <view class="action-bar">
      <view class="action-bar__inner">
        <view class="action-bar__left">
          <view class="action-bar__price-row">
            <text class="action-bar__symbol">¥</text>
            <text class="action-bar__price">{{ data.price }}</text>
            <text class="action-bar__unit">{{ data.unit }}</text>
          </view>
          <text class="action-bar__note">约 ¥{{ (data.price / 12).toFixed(1) }}/月</text>
        </view>
        <button class="action-bar__btn" @click="handleSubscribe">
          立即开通会员
        </button>
      </view>
      <view class="action-bar__safe" />
    </view>

  </view>
</template>

<script setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { useMockStore } from '@/store/mock'
import YwCard from '@/components/YwCard.vue'
import YwTag from '@/components/YwTag.vue'

const store = useMockStore()
const data = ref(store.membershipData)
const statusBarHeight = ref(0)
const openFaqIdx = ref(-1)

onLoad(() => {
  const sysInfo = uni.getSystemInfoSync()
  statusBarHeight.value = sysInfo.statusBarHeight || 44
})

function toggleFaq(idx) {
  openFaqIdx.value = openFaqIdx.value === idx ? -1 : idx
}

function goBack() {
  uni.navigateBack({ delta: 1 })
}

function handleSubscribe() {
  uni.showToast({ title: '开通功能开发中', icon: 'none' })
}
</script>

<style scoped>
.page-membership {
  min-height: 100vh;
  background-color: var(--color-bg-page);
}

/* ===== 导航栏 ===== */
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: var(--color-primary-900);
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
  background-color: rgba(255, 255, 255, 0.12);
}

.nav-bar__back-icon {
  font-size: 24px;
  color: #ffffff;
  line-height: 1;
  margin-top: -2px;
}

.nav-bar__title {
  font-size: var(--font-body);
  font-weight: var(--weight-medium);
  color: #ffffff;
}

.nav-bar__placeholder {
  width: 64rpx;
}

/* ===== ① 价值主张区 ===== */
.hero {
  background-color: var(--color-primary-900);
  padding: var(--spacing-6) var(--spacing-5) var(--spacing-8);
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 0 0 var(--radius-xl) var(--radius-xl);
  margin-bottom: var(--spacing-8);
}

.hero__badge {
  padding: var(--spacing-1) var(--spacing-3);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--radius-xl);
  margin-bottom: var(--spacing-5);
}

.hero__badge-text {
  font-size: var(--font-caption);
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 2px;
}

.hero__brand {
  display: block;
  font-size: 32px;
  font-weight: var(--weight-bold);
  color: #ffffff;
  font-family: 'Noto Serif SC', 'Source Han Serif CN', 'STSong', serif;
  letter-spacing: 4px;
  margin-bottom: var(--spacing-4);
}

.hero__headline {
  display: block;
  font-size: var(--font-body-lg);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.8;
  margin-bottom: var(--spacing-6);
  padding: 0 var(--spacing-4);
}

.hero__price-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-1);
}

.hero__price-row {
  display: flex;
  align-items: baseline;
}

.hero__symbol {
  font-size: var(--font-body);
  font-weight: var(--weight-bold);
  color: #ffffff;
}

.hero__price {
  font-size: 48px;
  font-weight: var(--weight-bold);
  color: #ffffff;
  line-height: 1;
  font-family: 'Georgia', serif;
}

.hero__unit {
  font-size: var(--font-body);
  color: rgba(255, 255, 255, 0.7);
  margin-left: 2px;
}

.hero__original {
  font-size: var(--font-body-sm);
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through;
}

.hero__note {
  font-size: var(--font-caption);
  color: rgba(255, 255, 255, 0.5);
  margin-top: var(--spacing-1);
}

/* ===== 通用区块 ===== */
.section {
  padding: 0 var(--spacing-5);
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

.section__subtitle {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
  margin-left: auto;
}

/* ===== ② 适合谁 ===== */
.for-whom {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.for-whom-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  background-color: var(--color-bg-card);
  border-radius: var(--radius-md);
  padding: var(--spacing-4);
  box-shadow: var(--shadow-card);
}

.for-whom-item__icon-wrap {
  width: 72rpx;
  height: 72rpx;
  border-radius: 50%;
  background-color: var(--color-primary-100);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.for-whom-item__icon {
  font-size: var(--font-h3);
  color: var(--color-primary-900);
  font-family: 'Noto Serif SC', 'Source Han Serif CN', 'STSong', serif;
}

.for-whom-item__text {
  font-size: var(--font-body);
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* ===== ③ 权益清单 ===== */
.benefits {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.benefit-card {
  padding: var(--spacing-4);
}

.benefit-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-3);
}

.benefit-card__icon-wrap {
  width: 72rpx;
  height: 72rpx;
  border-radius: var(--radius-md);
  background-color: var(--color-primary-100);
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-card__icon {
  font-size: var(--font-h2);
  color: var(--color-primary-900);
  font-family: 'Noto Serif SC', 'Source Han Serif CN', 'STSong', serif;
}

.benefit-card__stat-wrap {
  padding: var(--spacing-1) var(--spacing-2);
  background-color: var(--color-primary-100);
  border-radius: var(--radius-sm);
}

.benefit-card__stat {
  font-size: var(--font-caption);
  color: var(--color-primary-700);
  font-weight: var(--weight-medium);
}

.benefit-card__title {
  display: block;
  font-size: var(--font-body-lg);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-2);
}

.benefit-card__desc {
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
  line-height: 1.7;
}

/* ===== ④ 可读内容 ===== */
.content-scroll {
  margin: 0 calc(-1 * var(--spacing-5));
  padding: 0 var(--spacing-5);
  white-space: nowrap;
}

.content-scroll__inner {
  display: inline-flex;
  gap: var(--spacing-3);
  padding-right: var(--spacing-5);
}

.content-item {
  width: 200rpx;
  display: inline-flex;
  flex-direction: column;
  flex-shrink: 0;
}

.content-item__cover {
  width: 200rpx;
  height: 280rpx;
  border-radius: var(--radius-sm);
  margin-bottom: var(--spacing-2);
  box-shadow: 2px 2px 8px rgba(31, 31, 28, 0.08);
}

.content-item__title {
  display: block;
  font-size: var(--font-body-sm);
  font-weight: var(--weight-medium);
  color: var(--color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
}

.content-item__type {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
}

/* ===== ⑤ 对比表格 ===== */
.compare-card {
  padding: 0;
  overflow: hidden;
}

.compare-row {
  display: flex;
  align-items: center;
  padding: var(--spacing-3) var(--spacing-4);
  border-bottom: 1px solid var(--color-border);
}

.compare-row:last-child {
  border-bottom: none;
}

.compare-row--header {
  background-color: var(--color-primary-100);
}

.compare-row--highlight {
  background-color: var(--color-primary-100);
}

.compare-cell {
  font-size: var(--font-body-sm);
  line-height: 1.5;
}

.compare-cell--label {
  flex: 1;
  color: var(--color-text-secondary);
}

.compare-row--header .compare-cell--label {
  color: var(--color-text-primary);
  font-weight: var(--weight-semibold);
}

.compare-cell--single {
  width: 140rpx;
  text-align: center;
  color: var(--color-text-muted);
}

.compare-row--header .compare-cell--single {
  color: var(--color-text-secondary);
  font-weight: var(--weight-medium);
}

.compare-cell--member {
  width: 160rpx;
  text-align: center;
  font-weight: var(--weight-medium);
}

.compare-cell--accent {
  color: var(--color-primary-700);
}

.compare-row--header .compare-cell--member {
  color: var(--color-primary-900);
  font-weight: var(--weight-semibold);
}

.compare-row--highlight .compare-cell--label {
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
}

.compare-row--highlight .compare-cell--single {
  text-decoration: line-through;
  color: var(--color-text-muted);
}

.compare-row--highlight .compare-cell--member {
  color: var(--color-accent-cinnabar);
  font-weight: var(--weight-bold);
  font-size: var(--font-body);
}

/* ===== ⑥ FAQ ===== */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.faq-card {
  padding: var(--spacing-4);
}

.faq-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.faq-card__question {
  flex: 1;
  font-size: var(--font-body);
  font-weight: var(--weight-medium);
  color: var(--color-text-primary);
  line-height: 1.5;
}

.faq-card__arrow {
  font-size: 22px;
  color: var(--color-text-muted);
  transform: rotate(90deg);
  transition: transform 0.25s ease;
  flex-shrink: 0;
  margin-left: var(--spacing-2);
  line-height: 1;
}

.faq-card__arrow--open {
  transform: rotate(270deg);
}

.faq-card__body {
  padding-top: var(--spacing-3);
  margin-top: var(--spacing-3);
  border-top: 1px solid var(--color-border);
}

.faq-card__answer {
  font-size: var(--font-body);
  color: var(--color-text-secondary);
  line-height: 1.8;
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

/* ===== 底部信任 ===== */
.trust-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--spacing-8) var(--spacing-5) var(--spacing-4);
}

.trust-footer__divider {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-5);
  width: 100%;
}

.trust-footer__line {
  flex: 1;
  height: 1px;
  background-color: var(--color-border);
}

.trust-footer__ornament {
  font-size: var(--font-body);
  color: var(--color-text-muted);
  font-family: 'Noto Serif SC', 'Source Han Serif CN', 'STSong', serif;
}

.trust-footer__text {
  display: block;
  font-size: var(--font-h3);
  font-weight: var(--weight-semibold);
  color: var(--color-primary-900);
  font-family: 'Noto Serif SC', 'Source Han Serif CN', 'STSong', serif;
  margin-bottom: var(--spacing-2);
}

.trust-footer__sub {
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
}

/* ===== ⑧ 底部操作栏 ===== */
.bottom-placeholder {
  height: 160rpx;
}

.action-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: var(--color-bg-card);
  box-shadow: 0 -2px 12px rgba(31, 31, 28, 0.08);
}

.action-bar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-3) var(--spacing-4);
}

.action-bar__left {
  display: flex;
  flex-direction: column;
}

.action-bar__price-row {
  display: flex;
  align-items: baseline;
}

.action-bar__symbol {
  font-size: var(--font-body-sm);
  font-weight: var(--weight-bold);
  color: var(--color-accent-cinnabar);
}

.action-bar__price {
  font-size: var(--font-h1);
  font-weight: var(--weight-bold);
  color: var(--color-accent-cinnabar);
  line-height: 1;
  font-family: 'Georgia', serif;
}

.action-bar__unit {
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
  margin-left: 2px;
}

.action-bar__note {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
  margin-top: 2px;
}

.action-bar__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 84rpx;
  padding: 0 var(--spacing-8);
  background-color: var(--color-primary-900);
  color: #ffffff;
  font-size: var(--font-body);
  font-weight: var(--weight-semibold);
  border-radius: var(--radius-md);
  border: none;
  line-height: 1;
}

.action-bar__btn::after {
  border: none;
}

.action-bar__btn:active {
  opacity: 0.85;
}

.action-bar__safe {
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
