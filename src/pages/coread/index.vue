<template>
  <view class="page-coread">
    <YwSectionHeader title="进行中" />

    <YwCard v-for="item in activeReads" :key="item.id" class="coread-item" @click="goDetail(item.id)">
      <view class="coread-item__row">
        <image class="coread-item__cover" :src="item.cover" mode="aspectFill" />
        <view class="coread-item__info">
          <text class="coread-item__title">{{ item.title }}</text>
          <text class="coread-item__desc">{{ item.desc }}</text>
          <view class="coread-item__progress-bar">
            <view class="coread-item__progress-fill" :style="{ width: item.progress + '%' }" />
          </view>
          <view class="coread-item__meta">
            <text class="coread-item__members">{{ item.members }}人参与</text>
            <text class="coread-item__progress-text">{{ item.progress }}%</text>
          </view>
        </view>
      </view>
    </YwCard>

    <YwSectionHeader title="即将开始" />

    <YwCard v-for="item in upcomingReads" :key="item.id" class="coread-item">
      <view class="coread-item__row">
        <image class="coread-item__cover" :src="item.cover" mode="aspectFill" />
        <view class="coread-item__info">
          <text class="coread-item__title">{{ item.title }}</text>
          <text class="coread-item__desc">{{ item.desc }}</text>
          <view class="coread-item__meta">
            <YwTag :label="item.startDate + ' 开始'" type="primary" />
            <text class="coread-item__members">{{ item.members }}人报名</text>
          </view>
          <YwButton type="secondary" class="coread-item__join" @click="handleJoin(item.id)">
            报名参加
          </YwButton>
        </view>
      </view>
    </YwCard>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { useMockStore } from '@/store/mock'
import YwSectionHeader from '@/components/YwSectionHeader.vue'
import YwCard from '@/components/YwCard.vue'
import YwTag from '@/components/YwTag.vue'
import YwButton from '@/components/YwButton.vue'

const mockStore = useMockStore()

const activeReads = ref(mockStore.coreadList)
const upcomingReads = ref(mockStore.upcomingReads)

function goDetail(id) {
  console.log('navigate to coread detail:', id)
}

function handleJoin(id) {
  uni.showToast({ title: '报名成功', icon: 'success' })
}
</script>

<style scoped>
.page-coread {
  padding: var(--spacing-4);
  padding-bottom: calc(var(--spacing-8) + env(safe-area-inset-bottom));
}

.coread-item {
  margin-bottom: var(--spacing-3);
}

.coread-item__row {
  display: flex;
  gap: var(--spacing-3);
}

.coread-item__cover {
  width: 160rpx;
  height: 200rpx;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}

.coread-item__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
  min-width: 0;
}

.coread-item__title {
  font-size: var(--font-body);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
}

.coread-item__desc {
  font-size: var(--font-body-sm);
  color: var(--color-text-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.coread-item__progress-bar {
  height: 6rpx;
  background-color: var(--color-primary-100);
  border-radius: 3rpx;
  overflow: hidden;
}

.coread-item__progress-fill {
  height: 100%;
  background-color: var(--color-primary-700);
  border-radius: 3rpx;
  transition: width 0.3s;
}

.coread-item__meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.coread-item__members {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
}

.coread-item__progress-text {
  font-size: var(--font-caption);
  color: var(--color-primary-700);
  font-weight: var(--weight-medium);
}

.coread-item__join {
  margin-top: var(--spacing-2);
  height: 64rpx;
  font-size: var(--font-body-sm);
}
</style>
