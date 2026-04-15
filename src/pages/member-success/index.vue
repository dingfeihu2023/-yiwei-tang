<template>
  <view class="page-member-success">

    <!-- 成功区域 -->
    <view class="success-hero">
      <view class="success-badge">
        <text class="success-badge__text">年度会员</text>
      </view>
      <text class="success-title">会员开通成功</text>
      <text class="success-subtitle">欢迎成为一苇堂年度会员</text>

      <!-- 有效期 -->
      <view class="validity">
        <text class="validity__label">有效期至</text>
        <text class="validity__date">{{ expiryDate }}</text>
      </view>
    </view>

    <!-- 权益概览 -->
    <view class="benefits-section">
      <text class="benefits-title">你已获得以下权益</text>
      <view class="benefits-grid">
        <view v-for="(item, idx) in benefits" :key="idx" class="benefit-item">
          <text class="benefit-item__icon">{{ item.icon }}</text>
          <text class="benefit-item__name">{{ item.name }}</text>
        </view>
      </view>
    </view>

    <!-- 推荐阅读 -->
    <view class="recommend-section">
      <text class="recommend-title">推荐你开始阅读</text>
      <view class="recommend-list">
        <view
          v-for="item in recommends"
          :key="item.id"
          class="recommend-item"
          @click="goDetail(item)"
        >
          <image class="recommend-item__cover" :src="item.cover" mode="aspectFill" />
          <text class="recommend-item__title">{{ item.title }}</text>
        </view>
      </view>
    </view>

    <!-- 操作按钮 -->
    <view class="actions">
      <YwButton type="primary" block @click="goExplore">
        开始探索
      </YwButton>
      <YwButton type="ghost" block @click="goProfile">
        查看我的会员
      </YwButton>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import YwButton from '@/components/YwButton.vue'

const expiryDate = ref(() => {
  const d = new Date()
  d.setFullYear(d.getFullYear() + 1)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
})()

const benefits = ref([
  { icon: '书', name: '全站畅读' },
  { icon: '声', name: '音频解读' },
  { icon: '友', name: '共读优先' },
  { icon: '藏', name: '专属书签' },
  { icon: '问', name: '优先客服' },
  { icon: '礼', name: '会员周边' },
])

const recommends = ref([
  {
    id: 'td-shiju',
    type: 'topic',
    title: '识局：鬼谷子的博弈智慧',
    cover: 'https://picsum.photos/seed/topic1/400/560',
  },
  {
    id: 'eb-wuqing',
    type: 'ebook',
    title: '人情世故的分寸感',
    cover: 'https://picsum.photos/seed/book1/400/560',
  },
  {
    id: 'td-dingxin',
    type: 'topic',
    title: '定心：王阳明的心学实修',
    cover: 'https://picsum.photos/seed/topic2/400/560',
  },
])

function goDetail(item) {
  if (item.type === 'topic') {
    uni.navigateTo({ url: `/pages/topic-detail/index?id=${item.id}` })
  } else {
    uni.navigateTo({ url: `/pages/ebook-detail/index?id=${item.id}` })
  }
}

function goExplore() {
  uni.switchTab({ url: '/pages/home/index' })
}

function goProfile() {
  uni.switchTab({ url: '/pages/profile/index' })
}
</script>

<style scoped>
.page-member-success {
  min-height: 100vh;
  background-color: var(--color-bg-page);
  padding: var(--spacing-8) var(--spacing-5);
}

/* 成功区域 */
.success-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--spacing-6);
  margin-bottom: var(--spacing-6);
}

.success-badge {
  padding: var(--spacing-2) var(--spacing-4);
  background-color: var(--color-primary-900);
  border-radius: var(--radius-xl);
  margin-bottom: var(--spacing-4);
}

.success-badge__text {
  font-size: var(--font-body-sm);
  color: #ffffff;
  font-weight: var(--weight-medium);
}

.success-title {
  display: block;
  font-size: var(--font-h1);
  font-weight: var(--weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-2);
}

.success-subtitle {
  display: block;
  font-size: var(--font-body);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-4);
}

.validity {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-4);
  background-color: var(--color-bg-card);
  border-radius: var(--radius-sm);
}

.validity__label {
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
}

.validity__date {
  font-size: var(--font-body-sm);
  font-weight: var(--weight-medium);
  color: var(--color-text-primary);
}

/* 权益 */
.benefits-section {
  margin-bottom: var(--spacing-6);
}

.benefits-title {
  display: block;
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-3);
}

.benefits-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-3);
}

.benefit-item {
  width: calc(33.33% - 8px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3);
  background-color: var(--color-bg-card);
  border-radius: var(--radius-md);
}

.benefit-item__icon {
  width: 64rpx;
  height: 64rpx;
  border-radius: 50%;
  background-color: var(--color-primary-100);
  color: var(--color-primary-900);
  font-size: var(--font-body-sm);
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-item__name {
  font-size: var(--font-caption);
  color: var(--color-text-secondary);
}

/* 推荐 */
.recommend-section {
  margin-bottom: var(--spacing-6);
}

.recommend-title {
  display: block;
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-3);
}

.recommend-list {
  display: flex;
  gap: var(--spacing-3);
}

.recommend-item {
  flex: 1;
  min-width: 0;
}

.recommend-item__cover {
  width: 100%;
  height: 280rpx;
  border-radius: var(--radius-sm);
  margin-bottom: var(--spacing-2);
}

.recommend-item__title {
  display: block;
  font-size: var(--font-body-sm);
  font-weight: var(--weight-medium);
  color: var(--color-text-primary);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 按钮 */
.actions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  padding-bottom: calc(var(--spacing-6) + env(safe-area-inset-bottom));
}
</style>
