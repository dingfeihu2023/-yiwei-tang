<template>
  <view class="page-ebook-detail">

    <!-- 自定义导航栏 -->
    <view class="nav-bar" :style="{ paddingTop: statusBarHeight + 'px' }">
      <view class="nav-bar__inner">
        <view class="nav-bar__back" @click="goBack">
          <text class="nav-bar__back-icon">‹</text>
        </view>
        <text class="nav-bar__title">电子书</text>
        <view class="nav-bar__placeholder" />
      </view>
    </view>
    <view :style="{ height: (statusBarHeight + 44) + 'px' }" />

    <view v-if="detail" class="content">

      <!-- ① 书封面区 -->
      <view class="book-hero">
        <view class="book-hero__shelf">
          <view class="book-cover-wrap">
            <image class="book-cover" :src="detail.cover" mode="aspectFill" />
            <view class="book-cover__spine" />
            <view class="book-cover__shadow" />
          </view>
        </view>
        <text class="book-hero__title">{{ detail.title }}</text>
        <text class="book-hero__subtitle">{{ detail.subtitle }}</text>
        <view class="book-hero__tags">
          <YwTag v-for="tag in detail.tags" :key="tag" :label="tag" type="primary" />
        </view>
        <view class="book-hero__meta">
          <text class="book-hero__meta-item">{{ detail.wordCount }}</text>
          <text class="book-hero__meta-dot">·</text>
          <text class="book-hero__meta-item">{{ detail.chapterCount }} 章</text>
          <text class="book-hero__meta-dot">·</text>
          <text class="book-hero__meta-item">{{ detail.readCount }} 人已读</text>
        </view>
      </view>

      <!-- 书籍亮点 -->
      <view class="section">
        <YwCard class="highlights-card">
          <view v-for="(h, idx) in detail.highlights" :key="idx" class="highlight-item">
            <text class="highlight-item__bullet">✦</text>
            <text class="highlight-item__text">{{ h }}</text>
          </view>
        </YwCard>
      </view>

      <!-- ② 作者导读音频 -->
      <view class="section">
        <view class="section__header">
          <view class="section__ornament" />
          <text class="section__title">作者导读</text>
        </view>
        <YwCard class="author-card">
          <view class="author-card__top">
            <image class="author-card__avatar" :src="detail.authorAvatar" mode="aspectFill" />
            <view class="author-card__info">
              <text class="author-card__name">{{ detail.author }}</text>
              <text class="author-card__desc">{{ detail.authorDesc }}</text>
            </view>
          </view>
          <view class="audio-bar" @click="playAudio">
            <view class="audio-bar__play">
              <text class="audio-bar__play-icon">▶</text>
            </view>
            <view class="audio-bar__info">
              <text class="audio-bar__title">{{ detail.audioGuide.title }}</text>
              <view class="audio-bar__meta">
                <text class="audio-bar__duration">{{ detail.audioGuide.duration }}</text>
                <text class="audio-bar__plays">{{ formatPlays(detail.audioGuide.plays) }}次播放</text>
              </view>
            </view>
          </view>
        </YwCard>
      </view>

      <!-- 内容目录 -->
      <view class="section">
        <view class="section__header">
          <view class="section__ornament" />
          <text class="section__title">目录</text>
          <text class="section__count">共 {{ detail.chapters.length }} 章</text>
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

      <!-- 试读入口 -->
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

      <!-- ③ 单买 vs 会员对比 -->
      <view class="section">
        <view class="section__header">
          <view class="section__ornament" />
          <text class="section__title">购买方式</text>
        </view>
        <view class="compare">
          <!-- 单买 -->
          <YwCard class="compare-col">
            <text class="compare-col__label">{{ detail.comparison.single.label }}</text>
            <view class="compare-col__price-row">
              <text class="compare-col__symbol">¥</text>
              <text class="compare-col__price">{{ detail.comparison.single.price }}</text>
            </view>
            <view class="compare-col__features">
              <view v-for="(f, i) in detail.comparison.single.features" :key="i" class="compare-feature">
                <text class="compare-feature__icon">·</text>
                <text class="compare-feature__text">{{ f }}</text>
              </view>
            </view>
            <YwButton type="ghost" block @click="handleBuy">单独购买</YwButton>
          </YwCard>
          <!-- 会员 -->
          <YwCard class="compare-col compare-col--recommended">
            <view v-if="detail.comparison.member.badge" class="compare-col__badge">
              <text class="compare-col__badge-text">{{ detail.comparison.member.badge }}</text>
            </view>
            <text class="compare-col__label">{{ detail.comparison.member.label }}</text>
            <view class="compare-col__price-row">
              <text class="compare-col__symbol compare-col__symbol--accent">¥</text>
              <text class="compare-col__price compare-col__price--accent">{{ detail.comparison.member.price }}</text>
              <text class="compare-col__unit">{{ detail.comparison.member.unit }}</text>
            </view>
            <view class="compare-col__features">
              <view v-for="(f, i) in detail.comparison.member.features" :key="i" class="compare-feature">
                <text class="compare-feature__icon compare-feature__icon--accent">✓</text>
                <text class="compare-feature__text">{{ f }}</text>
              </view>
            </view>
            <YwButton type="primary" block @click="goMember">开通会员</YwButton>
          </YwCard>
        </view>
      </view>

      <!-- 用户评价 -->
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

      <view class="bottom-placeholder" />
    </view>

    <!-- ④ 底部操作栏 -->
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
          <button class="purchase-bar__btn purchase-bar__btn--member" @click="goMember">会员免费读</button>
          <button class="purchase-bar__btn purchase-bar__btn--buy" @click="handleBuy">立即购买 ¥{{ detail.price }}</button>
        </view>
      </view>
      <view class="purchase-bar__safe" />
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { useMockStore } from '@/store/mock'
import YwCard from '@/components/YwCard.vue'
import YwTag from '@/components/YwTag.vue'
import YwButton from '@/components/YwButton.vue'

const store = useMockStore()
const detail = ref(null)
const statusBarHeight = ref(0)

onLoad((query) => {
  const sysInfo = uni.getSystemInfoSync()
  statusBarHeight.value = sysInfo.statusBarHeight || 44
  const id = query.id || 'eb-wuqing'
  detail.value = store.ebookDetails[id] || store.ebookDetails['eb-wuqing']
})

function formatPlays(n) {
  if (n >= 10000) return (n / 10000).toFixed(1) + '万'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
  return String(n)
}

function goBack() { uni.navigateBack({ delta: 1 }) }
function goChapter(ch) {
  if (ch.isFree) console.log('open reader:', ch.id)
  else uni.showToast({ title: '购买后解锁', icon: 'none' })
}
function goTrial() { console.log('open trial reader') }
function goMember() { uni.navigateTo({ url: '/pages/membership/index' }) }
function handleBuy() { uni.showToast({ title: '购买功能开发中', icon: 'none' }) }
function playAudio() { console.log('play audio guide') }
</script>

<style scoped>
.page-ebook-detail {
  min-height: 100vh;
  background-color: var(--color-bg-page);
}
.content { padding: 0 var(--spacing-5); }

/* 导航栏 */
.nav-bar { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background-color: var(--color-bg-page); }
.nav-bar__inner { display: flex; align-items: center; justify-content: space-between; height: 44px; padding: 0 var(--spacing-4); }
.nav-bar__back { width: 64rpx; height: 64rpx; display: flex; align-items: center; justify-content: center; border-radius: 50%; background-color: var(--color-bg-card); }
.nav-bar__back-icon { font-size: 24px; color: var(--color-text-primary); line-height: 1; margin-top: -2px; }
.nav-bar__title { font-size: var(--font-body); font-weight: var(--weight-medium); color: var(--color-text-primary); }
.nav-bar__placeholder { width: 64rpx; }

/* ① 书封面区 */
.book-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--spacing-6) 0 var(--spacing-8);
}

.book-hero__shelf {
  margin-bottom: var(--spacing-6);
  padding-bottom: var(--spacing-3);
  position: relative;
}

.book-cover-wrap {
  position: relative;
  width: 360rpx;
  height: 500rpx;
}

.book-cover {
  width: 100%;
  height: 100%;
  border-radius: 4rpx 12rpx 12rpx 4rpx;
  box-shadow: 6px 6px 20px rgba(31, 31, 28, 0.15), 1px 1px 4px rgba(31, 31, 28, 0.08);
}

.book-cover__spine {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 10rpx;
  background: linear-gradient(to right, rgba(0,0,0,0.15), rgba(0,0,0,0.02));
  border-radius: 4rpx 0 0 4rpx;
}

.book-cover__shadow {
  position: absolute;
  bottom: -12rpx;
  left: 20rpx;
  right: 20rpx;
  height: 24rpx;
  background: radial-gradient(ellipse at center, rgba(31,31,28,0.12) 0%, transparent 70%);
}

.book-hero__title {
  display: block;
  font-size: var(--font-h2);
  font-weight: var(--weight-bold);
  color: var(--color-text-primary);
  line-height: 1.5;
  margin-bottom: var(--spacing-2);
  padding: 0 var(--spacing-4);
}

.book-hero__subtitle {
  display: block;
  font-size: var(--font-body);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-4);
  padding: 0 var(--spacing-4);
}

.book-hero__tags {
  display: flex;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-3);
}

.book-hero__meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.book-hero__meta-item {
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
}

.book-hero__meta-dot {
  font-size: var(--font-body-sm);
  color: var(--color-border);
}

/* 亮点 */
.highlights-card { padding: var(--spacing-4); }
.highlight-item { display: flex; gap: var(--spacing-2); margin-bottom: var(--spacing-2); }
.highlight-item:last-child { margin-bottom: 0; }
.highlight-item__bullet { color: var(--color-accent-bronze); font-size: var(--font-body-sm); flex-shrink: 0; line-height: 1.6; }
.highlight-item__text { font-size: var(--font-body); color: var(--color-text-secondary); line-height: 1.6; }

/* 通用区块标题 */
.section { margin-bottom: var(--spacing-8); }
.section__header { display: flex; align-items: center; gap: var(--spacing-2); margin-bottom: var(--spacing-4); }
.section__ornament { width: 6rpx; height: 32rpx; background-color: var(--color-primary-900); border-radius: 3rpx; }
.section__title { font-size: var(--font-h3); font-weight: var(--weight-semibold); color: var(--color-text-primary); }
.section__count { font-size: var(--font-caption); color: var(--color-text-muted); margin-left: auto; }

/* ② 作者导读 */
.author-card { padding: var(--spacing-5); }
.author-card__top { display: flex; gap: var(--spacing-3); margin-bottom: var(--spacing-4); }
.author-card__avatar { width: 96rpx; height: 96rpx; border-radius: 50%; flex-shrink: 0; background-color: var(--color-primary-100); }
.author-card__info { flex: 1; }
.author-card__name { display: block; font-size: var(--font-body); font-weight: var(--weight-semibold); color: var(--color-text-primary); margin-bottom: 2px; }
.author-card__desc { font-size: var(--font-body-sm); color: var(--color-text-muted); line-height: 1.5; }

.audio-bar {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3);
  background-color: var(--color-primary-100);
  border-radius: var(--radius-md);
}
.audio-bar__play { width: 64rpx; height: 64rpx; border-radius: 50%; background-color: var(--color-primary-900); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.audio-bar__play-icon { font-size: 11px; color: #ffffff; margin-left: 2px; }
.audio-bar__info { flex: 1; min-width: 0; }
.audio-bar__title { display: block; font-size: var(--font-body-sm); font-weight: var(--weight-medium); color: var(--color-text-primary); margin-bottom: 2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.audio-bar__meta { display: flex; gap: var(--spacing-3); }
.audio-bar__duration { font-size: var(--font-caption); color: var(--color-text-secondary); }
.audio-bar__plays { font-size: var(--font-caption); color: var(--color-text-muted); }

/* 目录 */
.toc-card { padding: 0; overflow: hidden; }
.toc-item { display: flex; align-items: center; justify-content: space-between; padding: var(--spacing-4); border-bottom: 1px solid var(--color-border); }
.toc-item:last-child { border-bottom: none; }
.toc-item__left { display: flex; gap: var(--spacing-3); flex: 1; min-width: 0; }
.toc-item__index { font-size: var(--font-h2); font-weight: var(--weight-bold); color: var(--color-border); font-family: 'Georgia', serif; width: 56rpx; flex-shrink: 0; line-height: 1.2; }
.toc-item--free .toc-item__index { color: var(--color-primary-700); }
.toc-item__info { flex: 1; min-width: 0; }
.toc-item__title { display: block; font-size: var(--font-body); font-weight: var(--weight-medium); color: var(--color-text-primary); margin-bottom: 2px; line-height: 1.5; }
.toc-item__desc { display: block; font-size: var(--font-body-sm); color: var(--color-text-muted); line-height: 1.4; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.toc-item__right { flex-shrink: 0; margin-left: var(--spacing-2); }
.toc-item__lock { font-size: var(--font-body-sm); opacity: 0.4; }

/* 试读 */
.trial-card { padding: var(--spacing-5); border: 2rpx solid var(--color-primary-700); background-color: var(--color-primary-100); }
.trial-card__header { display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--spacing-3); }
.trial-card__label { font-size: var(--font-body); font-weight: var(--weight-semibold); color: var(--color-primary-900); }
.trial-card__arrow { font-size: var(--font-h3); color: var(--color-primary-700); }
.trial-card__excerpt { display: block; font-size: var(--font-body); color: var(--color-text-secondary); line-height: 1.8; margin-bottom: var(--spacing-4); display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.trial-card__cta { font-size: var(--font-body-sm); color: var(--color-primary-700); font-weight: var(--weight-medium); }

/* ③ 对比 */
.compare { display: flex; gap: var(--spacing-3); }
.compare-col { flex: 1; padding: var(--spacing-4); position: relative; }
.compare-col--recommended { border: 2rpx solid var(--color-primary-700); }
.compare-col__badge { position: absolute; top: -1rpx; right: var(--spacing-3); background-color: var(--color-accent-cinnabar); padding: var(--spacing-1) var(--spacing-2); border-radius: 0 0 var(--radius-sm) var(--radius-sm); }
.compare-col__badge-text { font-size: 11px; color: #ffffff; font-weight: var(--weight-medium); }
.compare-col__label { display: block; font-size: var(--font-body-sm); color: var(--color-text-muted); margin-bottom: var(--spacing-2); }
.compare-col__price-row { display: flex; align-items: baseline; margin-bottom: var(--spacing-4); }
.compare-col__symbol { font-size: var(--font-body-sm); font-weight: var(--weight-bold); color: var(--color-text-primary); }
.compare-col__symbol--accent { color: var(--color-accent-cinnabar); }
.compare-col__price { font-size: var(--font-h1); font-weight: var(--weight-bold); color: var(--color-text-primary); line-height: 1; }
.compare-col__price--accent { color: var(--color-accent-cinnabar); }
.compare-col__unit { font-size: var(--font-body-sm); color: var(--color-text-muted); margin-left: 2px; }
.compare-col__features { margin-bottom: var(--spacing-4); }
.compare-feature { display: flex; align-items: flex-start; gap: var(--spacing-1); margin-bottom: var(--spacing-2); }
.compare-feature:last-child { margin-bottom: 0; }
.compare-feature__icon { font-size: var(--font-body-sm); color: var(--color-text-muted); flex-shrink: 0; line-height: 1.5; }
.compare-feature__icon--accent { color: var(--color-primary-700); }
.compare-feature__text { font-size: var(--font-body-sm); color: var(--color-text-secondary); line-height: 1.5; }

/* 评价 */
.reviews { display: flex; flex-direction: column; gap: var(--spacing-3); }
.review-card { padding: var(--spacing-4); }
.review-card__header { display: flex; align-items: center; gap: var(--spacing-3); margin-bottom: var(--spacing-3); }
.review-card__avatar { width: 72rpx; height: 72rpx; border-radius: 50%; flex-shrink: 0; background-color: var(--color-primary-100); }
.review-card__user { flex: 1; display: flex; align-items: center; justify-content: space-between; }
.review-card__name { font-size: var(--font-body); font-weight: var(--weight-medium); color: var(--color-text-primary); }
.review-card__content { display: block; font-size: var(--font-body); color: var(--color-text-secondary); line-height: 1.8; }

/* ④ 底部栏 */
.bottom-placeholder { height: 140rpx; }
.purchase-bar { position: fixed; left: 0; right: 0; bottom: 0; z-index: 999; background-color: var(--color-bg-card); box-shadow: 0 -2px 12px rgba(31, 31, 28, 0.08); }
.purchase-bar__inner { display: flex; align-items: center; justify-content: space-between; padding: var(--spacing-3) var(--spacing-4); }
.purchase-bar__left { flex-shrink: 0; }
.purchase-bar__price-group { display: flex; align-items: baseline; gap: 2px; }
.purchase-bar__symbol { font-size: var(--font-body-sm); font-weight: var(--weight-bold); color: var(--color-accent-cinnabar); }
.purchase-bar__price { font-size: var(--font-h1); font-weight: var(--weight-bold); color: var(--color-accent-cinnabar); line-height: 1; }
.purchase-bar__original { font-size: var(--font-caption); color: var(--color-text-muted); text-decoration: line-through; margin-left: var(--spacing-1); }
.purchase-bar__right { display: flex; gap: var(--spacing-2); flex-shrink: 0; }
.purchase-bar__btn { display: flex; align-items: center; justify-content: center; height: 76rpx; padding: 0 var(--spacing-4); font-size: var(--font-body-sm); font-weight: var(--weight-medium); border-radius: var(--radius-md); border: none; line-height: 1; }
.purchase-bar__btn::after { border: none; }
.purchase-bar__btn--member { background-color: var(--color-primary-100); color: var(--color-primary-900); }
.purchase-bar__btn--buy { background-color: var(--color-primary-900); color: #ffffff; }
.purchase-bar__btn:active { opacity: 0.85; }
.purchase-bar__safe { padding-bottom: env(safe-area-inset-bottom); }
</style>
