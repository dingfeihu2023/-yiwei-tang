<template>
  <view class="yw-section-header">
    <view class="yw-section-header__left">
      <text class="yw-section-header__title">{{ title }}</text>
      <text v-if="subtitle" class="yw-section-header__subtitle">{{ subtitle }}</text>
    </view>
    <view v-if="actionText" class="yw-section-header__right" @click="handleAction">
      <text class="yw-section-header__action">{{ actionText }}</text>
    </view>
  </view>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  actionText: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['action'])

function handleAction() {
  emit('action')
}
</script>

<style scoped>
.yw-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-4) 0;
}

.yw-section-header__left {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-2);
}

.yw-section-header__title {
  font-size: var(--font-h3);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
}

.yw-section-header__subtitle {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
}

.yw-section-header__action {
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
}
</style>
