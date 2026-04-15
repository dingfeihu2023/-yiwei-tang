<template>
  <view class="page-coread">

    <!-- 当前共读 -->
    <view class="section">
      <view class="current-hero">
        <image class="current-hero__cover" :src="current.cover" mode="aspectFill" />
        <view class="current-hero__overlay" />
        <view class="current-hero__body">
          <view class="current-hero__badge">
            <text class="current-hero__badge-text">正在进行</text>
          </view>
          <text class="current-hero__title">{{ current.title }}</text>
          <text class="current-hero__subtitle">{{ current.subtitle }}</text>
          <view class="current-hero__meta">
            <text class="current-hero__members">{{ current.members }}人参与</text>
            <text class="current-hero__dot">·</text>
            <text class="current-hero__progress">进度 {{ current.progress }}%</text>
          </view>
        </view>
      </view>

      <!-- 进度条 -->
      <view class="progress-bar-wrap">
        <view class="progress-bar">
          <view class="progress-bar__fill" :style="{ width: current.progress + '%' }" />
        </view>
        <view class="progress-bar__labels">
          <text class="progress-bar__date">{{ current.startDate }}</text>
          <text class="progress-bar__date">{{ current.endDate }}</text>
        </view>
      </view>
    </view>

    <!-- 共读说明 -->
    <view class="section section--padded">
      <YwSectionHeader title="共读说明" />
      <YwCard class="desc-card">
        <text class="desc-card__text">{{ current.desc }}</text>
        <view class="desc-card__schedule">
          <text class="desc-card__schedule-label">更新节奏</text>
          <text class="desc-card__schedule-value">{{ current.schedule }}</text>
        </view>

        <!-- 领读人 -->
        <view class="leader-row">
          <image class="leader-row__avatar" :src="current.leader.avatar" mode="aspectFill" />
          <view class="leader-row__info">
            <text class="leader-row__name">领读人：{{ current.leader.name }}</text>
            <text class="leader-row__title">{{ current.leader.title }}</text>
          </view>
        </view>

        <!-- 规则 -->
        <view class="rules">
          <text class="rules__title">参与规则</text>
          <view v-for="(rule, idx) in current.rules" :key="idx" class="rules__item">
            <text class="rules__bullet">{{ idx + 1 }}</text>
            <text class="rules__text">{{ rule }}</text>
          </view>
        </view>
      </YwCard>
    </view>

    <!-- 即将开始 -->
    <view class="section section--padded">
      <YwSectionHeader title="即将开始" subtitle="报名中" />
      <view class="upcoming-list">
        <YwCard
          v-for="item in upcoming"
          :key="item.id"
          class="upcoming-card"
          @click="handleJoin(item.id)"
        >
          <view class="upcoming-card__row">
            <image class="upcoming-card__cover" :src="item.cover" mode="aspectFill" />
            <view class="upcoming-card__info">
              <text class="upcoming-card__title">{{ item.title }}</text>
              <text class="upcoming-card__desc">{{ item.desc }}</text>
              <view class="upcoming-card__meta">
                <text class="upcoming-card__date">{{ item.startDate }} 开始 · {{ item.duration }}</text>
              </view>
              <view class="upcoming-card__bottom">
                <text class="upcoming-card__members">{{ item.members }}人已报名</text>
                <YwButton type="secondary" class="upcoming-card__btn" @click.stop="handleJoin(item.id)">
                  报名
                </YwButton>
              </view>
            </view>
          </view>
        </YwCard>
      </view>
    </view>

    <!-- 往期精选 -->
    <view class="section section--padded">
      <YwSectionHeader title="往期精选" />
      <scroll-view scroll-x class="past-scroll">
        <view class="past-scroll__inner">
          <view v-for="item in past" :key="item.id" class="past-item">
            <image class="past-item__cover" :src="item.cover" mode="aspectFill" />
            <text class="past-item__title">{{ item.title }}</text>
            <view class="past-item__meta">
              <text class="past-item__members">{{ item.members }}人参与</text>
              <text class="past-item__status">{{ item.status }}</text>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>

    <view class="safe-bottom" />
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { useMockStore } from '@/store/mock'
import YwSectionHeader from '@/components/YwSectionHeader.vue'
import YwCard from '@/components/YwCard.vue'
import YwButton from '@/components/YwButton.vue'

const store = useMockStore()
const current = ref(store.coreadPageData.current)
const upcoming = ref(store.coreadPageData.upcoming)
const past = ref(store.coreadPageData.past)

function handleJoin(id) {
  uni.showToast({ title: '报名成功', icon: 'success' })
}
</script>

<style scoped>
.page-coread {
  background-color: var(--color-bg-page);
}

.safe-bottom {
  height: calc(var(--spacing-8) + env(safe-area-inset-bottom));
}

.section { margin-bottom: var(--spacing-6); }
.section--padded { padding: 0 var(--spacing-5); }

/* 当前共读 Hero */
.current-hero {
  position: relative;
  overflow: hidden;
}

.current-hero__cover {
  width: 100%;
  height: 420rpx;
}

.current-hero__overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 70%;
  background: linear-gradient(to top, rgba(31, 58, 55, 0.9) 0%, transparent 100%);
}

.current-hero__body {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: var(--spacing-5);
}

.current-hero__badge {
  display: inline-flex;
  padding: var(--spacing-1) var(--spacing-2);
  background-color: rgba(255,255,255,0.2);
  border-radius: var(--radius-sm);
  margin-bottom: var(--spacing-2);
}

.current-hero__badge-text {
  font-size: var(--font-caption);
  color: #ffffff;
}

.current-hero__title {
  display: block;
  font-size: var(--font-h2);
  font-weight: var(--weight-bold);
  color: #ffffff;
  margin-bottom: var(--spacing-1);
}

.current-hero__subtitle {
  display: block;
  font-size: var(--font-body-sm);
  color: rgba(255,255,255,0.8);
  margin-bottom: var(--spacing-3);
}

.current-hero__meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.current-hero__members,
.current-hero__progress {
  font-size: var(--font-body-sm);
  color: rgba(255,255,255,0.7);
}

.current-hero__dot {
  color: rgba(255,255,255,0.3);
}

/* 进度条 */
.progress-bar-wrap {
  padding: var(--spacing-4) var(--spacing-5);
}

.progress-bar {
  height: 8rpx;
  background-color: var(--color-primary-100);
  border-radius: 4rpx;
  overflow: hidden;
  margin-bottom: var(--spacing-2);
}

.progress-bar__fill {
  height: 100%;
  background-color: var(--color-primary-700);
  border-radius: 4rpx;
}

.progress-bar__labels {
  display: flex;
  justify-content: space-between;
}

.progress-bar__date {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
}

/* 说明卡片 */
.desc-card {
  padding: var(--spacing-5);
}

.desc-card__text {
  display: block;
  font-size: var(--font-body);
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-4);
}

.desc-card__schedule {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3);
  background-color: var(--color-primary-100);
  border-radius: var(--radius-sm);
  margin-bottom: var(--spacing-4);
}

.desc-card__schedule-label {
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
}

.desc-card__schedule-value {
  font-size: var(--font-body-sm);
  color: var(--color-primary-900);
  font-weight: var(--weight-medium);
}

/* 领读人 */
.leader-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3) 0;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: var(--spacing-4);
}

.leader-row__avatar {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  background-color: var(--color-primary-100);
}

.leader-row__name {
  display: block;
  font-size: var(--font-body);
  font-weight: var(--weight-medium);
  color: var(--color-text-primary);
  margin-bottom: 2px;
}

.leader-row__title {
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
}

/* 规则 */
.rules__title {
  display: block;
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-2);
}

.rules__item {
  display: flex;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-2);
}

.rules__bullet {
  width: 36rpx;
  height: 36rpx;
  border-radius: 50%;
  background-color: var(--color-primary-100);
  color: var(--color-primary-900);
  font-size: var(--font-caption);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 1;
}

.rules__text {
  font-size: var(--font-body-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* 即将开始 */
.upcoming-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.upcoming-card { padding: var(--spacing-4); }

.upcoming-card__row {
  display: flex;
  gap: var(--spacing-3);
}

.upcoming-card__cover {
  width: 180rpx;
  height: 240rpx;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}

.upcoming-card__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
}

.upcoming-card__title {
  display: block;
  font-size: var(--font-body);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-1);
}

.upcoming-card__desc {
  display: block;
  font-size: var(--font-body-sm);
  color: var(--color-text-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: var(--spacing-2);
}

.upcoming-card__date {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
}

.upcoming-card__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: var(--spacing-2);
}

.upcoming-card__members {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
}

.upcoming-card__btn {
  height: 56rpx;
  font-size: var(--font-body-sm);
  padding: 0 var(--spacing-4);
}

/* 往期精选 */
.past-scroll {
  margin: 0 calc(-1 * var(--spacing-5));
  padding: 0 var(--spacing-5);
  white-space: nowrap;
}

.past-scroll__inner {
  display: inline-flex;
  gap: var(--spacing-3);
  padding-right: var(--spacing-5);
}

.past-item {
  width: 280rpx;
  display: inline-flex;
  flex-direction: column;
  flex-shrink: 0;
}

.past-item__cover {
  width: 280rpx;
  height: 180rpx;
  border-radius: var(--radius-sm);
  margin-bottom: var(--spacing-2);
}

.past-item__title {
  display: block;
  font-size: var(--font-body-sm);
  font-weight: var(--weight-medium);
  color: var(--color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
}

.past-item__meta {
  display: flex;
  gap: var(--spacing-2);
}

.past-item__members,
.past-item__status {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
}
</style>
