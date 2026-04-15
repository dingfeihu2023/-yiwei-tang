<template>
  <view class="page-profile">

    <!-- ① 用户信息区 -->
    <view class="user-header">
      <view class="user-row">
        <image class="user-avatar" :src="user.avatar" mode="aspectFill" />
        <view class="user-info">
          <text class="user-name">{{ user.nickname }}</text>
          <text class="user-welcome">{{ user.welcome }}</text>
        </view>
      </view>
      <view class="user-stats">
        <view class="stat-item">
          <text class="stat-num">{{ user.readDays }}</text>
          <text class="stat-label">阅读天</text>
        </view>
        <view class="stat-divider" />
        <view class="stat-item">
          <text class="stat-num">{{ user.totalBooks }}</text>
          <text class="stat-label">在读</text>
        </view>
        <view class="stat-divider" />
        <view class="stat-item">
          <text class="stat-num">{{ user.totalNotes }}</text>
          <text class="stat-label">笔记</text>
        </view>
      </view>
    </view>

    <!-- ② 会员状态区 -->
    <YwCard class="member-card" @click="goMember">
      <view v-if="user.isMember" class="member-card__body">
        <view class="member-card__left">
          <view class="member-card__badge">
            <text class="member-card__badge-text">年度会员</text>
          </view>
          <text class="member-card__expiry">有效期至 {{ user.memberExpiry }}</text>
        </view>
        <text class="member-card__action">查看权益 ›</text>
      </view>
      <view v-else class="member-card__body member-card__body--inactive">
        <view class="member-card__left">
          <text class="member-card__prompt">开通会员，全站畅读</text>
          <text class="member-card__expiry">¥149/年 · 12本电子书 + 全部音频</text>
        </view>
        <view class="member-card__cta">
          <text class="member-card__cta-text">去开通</text>
        </view>
      </view>
    </YwCard>

    <!-- ③ 我的已购 -->
    <view class="section">
      <YwSectionHeader title="我的已购" :action-text="`共${purchased.length}项`" />
      <scroll-view scroll-x class="purchased-scroll">
        <view class="purchased-scroll__inner">
          <view
            v-for="item in purchased"
            :key="item.id"
            class="purchased-item"
            @click="goDetail(item)"
          >
            <image class="purchased-item__cover" :src="item.cover" mode="aspectFill" />
            <text class="purchased-item__title">{{ item.title }}</text>
            <text class="purchased-item__type">{{ item.type }}</text>
          </view>
        </view>
      </scroll-view>
    </view>

    <!-- ④ 最近阅读 -->
    <view class="section">
      <YwSectionHeader title="最近阅读" />
      <view class="recent-list">
        <YwCard
          v-for="item in recentReads"
          :key="item.id"
          class="recent-card"
          @click="continueRead(item)"
        >
          <view class="recent-card__row">
            <image class="recent-card__cover" :src="item.cover" mode="aspectFill" />
            <view class="recent-card__info">
              <text class="recent-card__title">{{ item.title }}</text>
              <text class="recent-card__chapter">{{ item.chapter }}</text>
              <view class="recent-card__progress-bar">
                <view class="recent-card__progress-fill" :style="{ width: item.progress + '%' }" />
              </view>
              <view class="recent-card__bottom">
                <text class="recent-card__time">{{ item.lastReadTime }}</text>
                <text class="recent-card__cta">继续阅读 →</text>
              </view>
            </view>
          </view>
        </YwCard>
      </view>
    </view>

    <!-- ⑤⑥⑦⑧ 功能入口 -->
    <view class="section">
      <YwCard class="menu-group">
        <view class="menu-item" @click="goPage('/pages/profile/favorites')">
          <text class="menu-item__icon">☆</text>
          <text class="menu-item__label">收藏与书签</text>
          <text class="menu-item__arrow">›</text>
        </view>
        <view class="menu-item" @click="goPage('/pages/profile/orders')">
          <text class="menu-item__icon">☐</text>
          <text class="menu-item__label">订单记录</text>
          <text class="menu-item__arrow">›</text>
        </view>
      </YwCard>

      <YwCard class="menu-group">
        <view class="menu-item" @click="goPage('/pages/profile/help')">
          <text class="menu-item__icon">?</text>
          <text class="menu-item__label">帮助与支持</text>
          <text class="menu-item__arrow">›</text>
        </view>
        <view class="menu-item" @click="goPage('/pages/profile/settings')">
          <text class="menu-item__icon">⚙</text>
          <text class="menu-item__label">设置</text>
          <text class="menu-item__arrow">›</text>
        </view>
      </YwCard>
    </view>

    <!-- 底部版权 -->
    <view class="footer">
      <text class="footer__text">一苇堂 · 与经典同行</text>
      <text class="footer__version">v1.0.0</text>
    </view>

    <!-- 安全区占位 -->
    <view class="safe-bottom" />
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { useMockStore } from '@/store/mock'
import YwCard from '@/components/YwCard.vue'
import YwSectionHeader from '@/components/YwSectionHeader.vue'

const store = useMockStore()

const user = ref(store.profileData.user)
const purchased = ref(store.profileData.purchased)
const recentReads = ref(store.profileData.recentReads)

function goMember() {
  uni.navigateTo({ url: '/pages/membership/index' })
}

function goDetail(item) {
  console.log('navigate to detail:', item.id)
}

function continueRead(item) {
  console.log('continue reading:', item.id, item.chapter)
}

function goPage(path) {
  console.log('navigate to:', path)
  uni.showToast({ title: '功能开发中', icon: 'none' })
}
</script>

<style scoped>
.page-profile {
  padding: 0 var(--spacing-5);
  padding-top: var(--spacing-4);
  background-color: var(--color-bg-page);
}

.safe-bottom {
  height: calc(var(--spacing-8) + var(--spacing-8) + env(safe-area-inset-bottom));
}

/* ===== ① 用户信息 ===== */
.user-header {
  padding: var(--spacing-5) 0 var(--spacing-6);
}

.user-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-5);
}

.user-avatar {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  background-color: var(--color-primary-100);
  flex-shrink: 0;
}

.user-info {
  flex: 1;
}

.user-name {
  display: block;
  font-size: var(--font-h2);
  font-weight: var(--weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-1);
}

.user-welcome {
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
  line-height: 1.5;
}

.user-stats {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--color-bg-card);
  border-radius: var(--radius-lg);
  padding: var(--spacing-4) 0;
  box-shadow: var(--shadow-card);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  flex: 1;
}

.stat-num {
  font-size: var(--font-h1);
  font-weight: var(--weight-bold);
  color: var(--color-primary-900);
  line-height: 1.2;
  font-family: 'Georgia', serif;
}

.stat-label {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
}

.stat-divider {
  width: 1px;
  height: 32rpx;
  background-color: var(--color-border);
}

/* ===== ② 会员状态 ===== */
.member-card {
  margin-bottom: var(--spacing-6);
  padding: var(--spacing-4) var(--spacing-5);
  background: linear-gradient(135deg, var(--color-primary-900) 0%, var(--color-primary-700) 100%);
}

.member-card__body {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.member-card__left {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.member-card__badge {
  display: inline-flex;
  padding: var(--spacing-1) var(--spacing-2);
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: var(--radius-sm);
  align-self: flex-start;
}

.member-card__badge-text {
  font-size: var(--font-caption);
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 1px;
}

.member-card__expiry {
  font-size: var(--font-body-sm);
  color: rgba(255, 255, 255, 0.65);
}

.member-card__action {
  font-size: var(--font-body-sm);
  color: rgba(255, 255, 255, 0.8);
  font-weight: var(--weight-medium);
  flex-shrink: 0;
}

.member-card__prompt {
  display: block;
  font-size: var(--font-body);
  font-weight: var(--weight-semibold);
  color: #ffffff;
}

.member-card__body--inactive {
  background: none;
}

.member-card__cta {
  padding: var(--spacing-1) var(--spacing-3);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}

.member-card__cta-text {
  font-size: var(--font-body-sm);
  color: #ffffff;
  font-weight: var(--weight-medium);
}

/* ===== ③ 已购 ===== */
.section {
  margin-bottom: var(--spacing-6);
}

.purchased-scroll {
  margin: 0 calc(-1 * var(--spacing-5));
  padding: 0 var(--spacing-5);
  white-space: nowrap;
}

.purchased-scroll__inner {
  display: inline-flex;
  gap: var(--spacing-3);
  padding-right: var(--spacing-5);
}

.purchased-item {
  width: 180rpx;
  display: inline-flex;
  flex-direction: column;
  flex-shrink: 0;
}

.purchased-item__cover {
  width: 180rpx;
  height: 250rpx;
  border-radius: var(--radius-sm);
  margin-bottom: var(--spacing-2);
  box-shadow: 2px 2px 8px rgba(31, 31, 28, 0.08);
}

.purchased-item__title {
  display: block;
  font-size: var(--font-body-sm);
  font-weight: var(--weight-medium);
  color: var(--color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
}

.purchased-item__type {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
}

/* ===== ④ 最近阅读 ===== */
.recent-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.recent-card {
  padding: var(--spacing-4);
}

.recent-card__row {
  display: flex;
  gap: var(--spacing-3);
}

.recent-card__cover {
  width: 120rpx;
  height: 168rpx;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
  box-shadow: 1px 1px 4px rgba(31, 31, 28, 0.08);
}

.recent-card__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
}

.recent-card__title {
  display: block;
  font-size: var(--font-body);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: 2px;
}

.recent-card__chapter {
  display: block;
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-2);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.recent-card__progress-bar {
  height: 6rpx;
  background-color: var(--color-primary-100);
  border-radius: 3rpx;
  overflow: hidden;
  margin-bottom: var(--spacing-2);
}

.recent-card__progress-fill {
  height: 100%;
  background-color: var(--color-primary-700);
  border-radius: 3rpx;
  transition: width 0.3s;
}

.recent-card__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.recent-card__time {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
}

.recent-card__cta {
  font-size: var(--font-body-sm);
  color: var(--color-primary-700);
  font-weight: var(--weight-medium);
}

/* ===== ⑤⑥⑦⑧ 功能入口 ===== */
.menu-group {
  padding: 0;
  margin-bottom: var(--spacing-3);
}

.menu-group:last-child {
  margin-bottom: 0;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: var(--spacing-4) var(--spacing-4);
  border-bottom: 1px solid var(--color-border);
}

.menu-item:last-child {
  border-bottom: none;
}

.menu-item__icon {
  width: 48rpx;
  font-size: var(--font-body-lg);
  color: var(--color-text-muted);
  text-align: center;
  flex-shrink: 0;
}

.menu-item__label {
  flex: 1;
  font-size: var(--font-body);
  color: var(--color-text-primary);
  margin-left: var(--spacing-2);
}

.menu-item__arrow {
  font-size: var(--font-h2);
  color: var(--color-text-muted);
  flex-shrink: 0;
}

/* ===== 底部版权 ===== */
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-1);
  padding: var(--spacing-6) 0 var(--spacing-2);
}

.footer__text {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
  letter-spacing: 2px;
}

.footer__version {
  font-size: 10px;
  color: var(--color-border);
}
</style>
