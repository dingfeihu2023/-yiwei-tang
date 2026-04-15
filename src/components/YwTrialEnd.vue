<template>
  <view v-if="visible" class="trial-end-mask" @click.self="handleClose">
    <view class="trial-end-panel">
      <!-- 顶部提示 -->
      <view class="trial-end__header">
        <text class="trial-end__icon">bookmark</text>
        <text class="trial-end__title">这部分先看到这里</text>
        <text class="trial-end__desc">解锁完整内容，继续你的阅读之旅</text>
      </view>

      <!-- 内容预览 -->
      <view class="trial-end__preview">
        <text class="trial-end__preview-label">已试读</text>
        <view class="trial-end__progress">
          <view class="trial-end__progress-bar">
            <view class="trial-end__progress-fill" :style="{ width: progress + '%' }" />
          </view>
          <text class="trial-end__progress-text">{{ progress }}%</text>
        </view>
      </view>

      <!-- 按钮组 -->
      <view class="trial-end__actions">
        <YwButton type="primary" block @click="handleBuy">
          购买此内容
        </YwButton>
        <YwButton type="secondary" block @click="handleMember">
          开通会员 · 畅读全部
        </YwButton>
      </view>

      <!-- 关闭 -->
      <text class="trial-end__close" @click="handleClose">返回目录</text>
    </view>
  </view>
</template>

<script setup>
import YwButton from '@/components/YwButton.vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  progress: {
    type: Number,
    default: 15,
  },
})

const emit = defineEmits(['close', 'buy', 'member'])

function handleClose() {
  emit('close')
}

function handleBuy() {
  emit('buy')
}

function handleMember() {
  emit('member')
}
</script>

<style scoped>
.trial-end-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(31, 31, 28, 0.6);
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.trial-end-panel {
  width: 100%;
  background-color: var(--color-bg-page);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  padding: var(--spacing-6) var(--spacing-5);
  padding-bottom: calc(var(--spacing-6) + env(safe-area-inset-bottom));
}

.trial-end__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--spacing-5);
}

.trial-end__icon {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  background-color: var(--color-primary-100);
  color: var(--color-primary-900);
  font-size: var(--font-body-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-3);
}

.trial-end__title {
  display: block;
  font-size: var(--font-h2);
  font-weight: var(--weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-2);
  text-align: center;
}

.trial-end__desc {
  font-size: var(--font-body);
  color: var(--color-text-secondary);
  text-align: center;
}

/* 进度 */
.trial-end__preview {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-4);
  background-color: var(--color-bg-card);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-5);
}

.trial-end__preview-label {
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
  flex-shrink: 0;
}

.trial-end__progress {
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.trial-end__progress-bar {
  flex: 1;
  height: 8rpx;
  background-color: var(--color-primary-100);
  border-radius: 4rpx;
  overflow: hidden;
}

.trial-end__progress-fill {
  height: 100%;
  background-color: var(--color-primary-700);
  border-radius: 4rpx;
}

.trial-end__progress-text {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
  flex-shrink: 0;
}

/* 按钮 */
.trial-end__actions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-4);
}

.trial-end__close {
  display: block;
  text-align: center;
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
  padding: var(--spacing-2) 0;
}
</style>
