<template>
  <view
    class="yw-tag"
    :class="[`yw-tag--${type}`]"
    @click="handleClick"
  >
    <text class="yw-tag__text">{{ label }}</text>
  </view>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  /** 标签类型: default / primary / accent */
  type: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'primary', 'accent'].includes(v),
  },
})

const emit = defineEmits(['click'])

function handleClick(e) {
  emit('click', e)
}
</script>

<style scoped>
.yw-tag {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-sm);
  line-height: 1;
}

.yw-tag__text {
  font-size: var(--font-caption);
  font-weight: var(--weight-medium);
}

/* 默认灰色标签 */
.yw-tag--default {
  background-color: var(--color-primary-100);
}
.yw-tag--default .yw-tag__text {
  color: var(--color-text-secondary);
}

/* 主色标签 */
.yw-tag--primary {
  background-color: var(--color-primary-100);
}
.yw-tag--primary .yw-tag__text {
  color: var(--color-primary-900);
}

/* 点缀色标签（暗朱砂） */
.yw-tag--accent {
  background-color: rgba(123, 58, 50, 0.08);
}
.yw-tag--accent .yw-tag__text {
  color: var(--color-accent-cinnabar);
}
</style>
