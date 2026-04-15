<template>
  <view class="page-pay-success">

    <!-- 成功图标 -->
    <view class="success-hero">
      <view class="success-icon">
        <text class="success-icon__check">✓</text>
      </view>
      <text class="success-title">购买成功</text>
      <text class="success-subtitle">内容已加入书架，开始阅读吧</text>
    </view>

    <!-- 购买内容 -->
    <view class="purchased-card">
      <image class="purchased-card__cover" :src="orderInfo.cover" mode="aspectFill" />
      <view class="purchased-card__info">
        <text class="purchased-card__title">{{ orderInfo.title }}</text>
        <text class="purchased-card__type">{{ orderInfo.type }}</text>
        <view class="purchased-card__price-row">
          <text class="purchased-card__symbol">¥</text>
          <text class="purchased-card__price">{{ orderInfo.price }}</text>
        </view>
      </view>
    </view>

    <!-- 操作按钮 -->
    <view class="actions">
      <YwButton type="primary" block @click="goRead">
        立即阅读
      </YwButton>
      <YwButton type="ghost" block @click="goHome">
        返回首页
      </YwButton>
    </view>

    <!-- 会员推荐 -->
    <view v-if="!isMember" class="member-tip">
      <view class="member-tip__card">
        <view class="member-tip__header">
          <text class="member-tip__title">开通会员，畅读更划算</text>
          <text class="member-tip__desc">年费会员 ¥149/年，全站内容免费阅读</text>
        </view>
        <YwButton type="secondary" class="member-tip__btn" @click="goMembership">
          了解会员
        </YwButton>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import YwButton from '@/components/YwButton.vue'

const orderInfo = ref({
  title: '识局：鬼谷子的博弈智慧',
  type: '微专栏 · 12讲',
  price: '9.90',
  cover: 'https://picsum.photos/seed/topic1/400/560',
})

const isMember = ref(false)

onLoad((options) => {
  if (options.title) orderInfo.value.title = decodeURIComponent(options.title)
  if (options.price) orderInfo.value.price = options.price
  if (options.cover) orderInfo.value.cover = decodeURIComponent(options.cover)
  if (options.type) orderInfo.value.type = decodeURIComponent(options.type)
})

function goRead() {
  uni.navigateTo({ url: '/pages/reader/index' })
}

function goHome() {
  uni.switchTab({ url: '/pages/home/index' })
}

function goMembership() {
  uni.navigateTo({ url: '/pages/membership/index' })
}
</script>

<style scoped>
.page-pay-success {
  min-height: 100vh;
  background-color: var(--color-bg-page);
  padding: var(--spacing-8) var(--spacing-5);
}

/* 成功图标 */
.success-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--spacing-6);
  padding-top: var(--spacing-6);
}

.success-icon {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  background-color: var(--color-primary-100);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-4);
}

.success-icon__check {
  font-size: 48rpx;
  color: var(--color-primary-900);
  font-weight: var(--weight-bold);
}

.success-title {
  display: block;
  font-size: var(--font-h1);
  font-weight: var(--weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-2);
}

.success-subtitle {
  font-size: var(--font-body);
  color: var(--color-text-secondary);
}

/* 购买内容卡片 */
.purchased-card {
  display: flex;
  gap: var(--spacing-4);
  padding: var(--spacing-4);
  background-color: var(--color-bg-card);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-6);
}

.purchased-card__cover {
  width: 160rpx;
  height: 220rpx;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}

.purchased-card__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}

.purchased-card__title {
  display: block;
  font-size: var(--font-body);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
  line-height: 1.5;
  margin-bottom: var(--spacing-1);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.purchased-card__type {
  display: block;
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-3);
}

.purchased-card__price-row {
  display: flex;
  align-items: baseline;
  gap: 2px;
}

.purchased-card__symbol {
  font-size: var(--font-body-sm);
  font-weight: var(--weight-semibold);
  color: var(--color-accent-cinnabar);
}

.purchased-card__price {
  font-size: var(--font-h2);
  font-weight: var(--weight-bold);
  color: var(--color-accent-cinnabar);
  line-height: 1;
}

/* 操作按钮 */
.actions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-6);
}

/* 会员推荐 */
.member-tip__card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-4);
  background-color: var(--color-bg-card);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-primary-100);
}

.member-tip__title {
  display: block;
  font-size: var(--font-body);
  font-weight: var(--weight-medium);
  color: var(--color-text-primary);
  margin-bottom: 2px;
}

.member-tip__desc {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
}

.member-tip__btn {
  height: 64rpx;
  font-size: var(--font-body-sm);
  padding: 0 var(--spacing-4);
  flex-shrink: 0;
}
</style>
