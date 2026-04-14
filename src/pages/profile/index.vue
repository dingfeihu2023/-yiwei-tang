<template>
  <view class="page-profile">
    <!-- 用户信息 -->
    <YwCard class="user-card">
      <view class="user-row">
        <image class="user-avatar" :src="user.avatar" mode="aspectFill" />
        <view class="user-info">
          <text class="user-name">{{ user.nickname }}</text>
          <text class="user-desc">{{ user.signature }}</text>
        </view>
      </view>
      <view class="user-stats">
        <view class="stat-item">
          <text class="stat-num">{{ user.readDays }}</text>
          <text class="stat-label">阅读天数</text>
        </view>
        <view class="stat-item">
          <text class="stat-num">{{ user.books }}</text>
          <text class="stat-label">已读书籍</text>
        </view>
        <view class="stat-item">
          <text class="stat-num">{{ user.notes }}</text>
          <text class="stat-label">读书笔记</text>
        </view>
      </view>
    </YwCard>

    <!-- 功能列表 -->
    <YwCard class="menu-card">
      <view v-for="item in menuItems" :key="item.id" class="menu-item" @click="goPage(item.path)">
        <text class="menu-item__label">{{ item.label }}</text>
        <text class="menu-item__arrow">›</text>
      </view>
    </YwCard>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import YwCard from '@/components/YwCard.vue'

const user = ref({
  avatar: '/static/avatar-default.png',
  nickname: '未登录',
  signature: '点击登录，开始你的阅读之旅',
  readDays: 0,
  books: 0,
  notes: 0,
})

const menuItems = ref([
  { id: 'orders', label: '我的订单', path: '/pages/profile/orders' },
  { id: 'favorites', label: '我的收藏', path: '/pages/profile/favorites' },
  { id: 'notes', label: '读书笔记', path: '/pages/profile/notes' },
  { id: 'history', label: '阅读历史', path: '/pages/profile/history' },
  { id: 'settings', label: '设置', path: '/pages/profile/settings' },
])

function goPage(path) {
  console.log('navigate to:', path)
}
</script>

<style scoped>
.page-profile {
  padding: var(--spacing-4);
  padding-bottom: calc(var(--spacing-8) + env(safe-area-inset-bottom));
}

.user-card {
  margin-bottom: var(--spacing-4);
}

.user-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-4);
}

.user-avatar {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  background-color: var(--color-primary-100);
}

.user-info {
  flex: 1;
}

.user-name {
  font-size: var(--font-h3);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
  display: block;
  margin-bottom: 2px;
}

.user-desc {
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
}

.user-stats {
  display: flex;
  justify-content: space-around;
  padding-top: var(--spacing-4);
  border-top: 1px solid var(--color-border);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.stat-num {
  font-size: var(--font-h2);
  font-weight: var(--weight-bold);
  color: var(--color-primary-900);
}

.stat-label {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
}

.menu-card {
  padding: 0;
}

.menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-4);
  border-bottom: 1px solid var(--color-border);
}

.menu-item:last-child {
  border-bottom: none;
}

.menu-item__label {
  font-size: var(--font-body);
  color: var(--color-text-primary);
}

.menu-item__arrow {
  font-size: var(--font-h2);
  color: var(--color-text-muted);
}
</style>
