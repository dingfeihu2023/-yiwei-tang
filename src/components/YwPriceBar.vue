<template>
  <view class="yw-price-bar">
    <view class="yw-price-bar__inner">
      <view class="yw-price-bar__left">
        <text v-if="label" class="yw-price-bar__label">{{ label }}</text>
        <view class="yw-price-bar__price-wrap">
          <text class="yw-price-bar__symbol">¥</text>
          <text class="yw-price-bar__price">{{ price }}</text>
          <text v-if="originalPrice" class="yw-price-bar__original">¥{{ originalPrice }}</text>
        </view>
      </view>
      <view class="yw-price-bar__right">
        <button class="yw-price-bar__btn" @click="handleAction">
          {{ actionText }}
        </button>
      </view>
    </view>
    <!-- 底部安全区 -->
    <view class="yw-price-bar__safe-area" />
  </view>
</template>

<script setup>
defineProps({
  price: {
    type: [String, Number],
    required: true,
  },
  originalPrice: {
    type: [String, Number],
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  actionText: {
    type: String,
    default: '立即购买',
  },
})

const emit = defineEmits(['action'])

function handleAction() {
  emit('action')
}
</script>

<style scoped>
.yw-price-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: var(--color-bg-card);
  box-shadow: 0 -2px 8px rgba(31, 31, 28, 0.06);
}

.yw-price-bar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-3) var(--spacing-4);
}

.yw-price-bar__left {
  display: flex;
  flex-direction: column;
}

.yw-price-bar__label {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
  margin-bottom: 2px;
}

.yw-price-bar__price-wrap {
  display: flex;
  align-items: baseline;
  gap: 2px;
}

.yw-price-bar__symbol {
  font-size: var(--font-body-sm);
  font-weight: var(--weight-semibold);
  color: var(--color-accent-cinnabar);
}

.yw-price-bar__price {
  font-size: var(--font-h1);
  font-weight: var(--weight-bold);
  color: var(--color-accent-cinnabar);
  line-height: 1.2;
}

.yw-price-bar__original {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
  text-decoration: line-through;
  margin-left: var(--spacing-1);
}

.yw-price-bar__right {
  flex-shrink: 0;
}

.yw-price-bar__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80rpx;
  padding: 0 var(--spacing-6);
  background-color: var(--color-primary-900);
  color: #ffffff;
  font-size: var(--font-body);
  font-weight: var(--weight-medium);
  border-radius: var(--radius-md);
  border: none;
  line-height: 1;
}

.yw-price-bar__btn::after {
  border: none;
}

.yw-price-bar__btn:active {
  opacity: 0.85;
}

.yw-price-bar__safe-area {
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
