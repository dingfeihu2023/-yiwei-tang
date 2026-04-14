<template>
  <view
    class="yw-card"
    :class="{ 'yw-card--no-padding': noPadding }"
    @click="handleClick"
  >
    <slot />
  </view>
</template>

<script setup>
defineProps({
  noPadding: {
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
.yw-card {
  background-color: var(--color-bg-card);
  border-radius: var(--radius-lg);
  padding: var(--spacing-4);
  box-shadow: var(--shadow-card);
}

.yw-card--no-padding {
  padding: 0;
}
</style>
