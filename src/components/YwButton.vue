<template>
  <button
    class="yw-button"
    :class="[`yw-button--${type}`, { 'yw-button--disabled': disabled, 'yw-button--block': block }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  /** 按钮类型: primary / secondary / ghost */
  type: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'ghost'].includes(v),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])

function handleClick(e) {
  emit('click', e)
}
</script>

<style scoped>
.yw-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 88rpx;
  padding: 0 var(--spacing-6);
  font-size: var(--font-body);
  font-weight: var(--weight-medium);
  border-radius: var(--radius-md);
  border: none;
  line-height: 1;
  transition: opacity 0.2s;
}

.yw-button::after {
  border: none;
}

.yw-button--block {
  display: flex;
  width: 100%;
}

/* 主按钮 */
.yw-button--primary {
  background-color: var(--color-primary-900);
  color: #ffffff;
}

/* 次按钮 */
.yw-button--secondary {
  background-color: var(--color-primary-100);
  color: var(--color-primary-900);
}

/* 弱按钮 */
.yw-button--ghost {
  background-color: transparent;
  color: var(--color-text-secondary);
  border: 2rpx solid var(--color-border);
}

/* 禁用态 */
.yw-button--disabled {
  opacity: 0.4;
  pointer-events: none;
}

.yw-button:active {
  opacity: 0.8;
}
</style>
