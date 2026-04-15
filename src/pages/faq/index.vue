<template>
  <view class="page-faq">

    <view class="faq-header">
      <text class="faq-header__title">有什么可以帮到你？</text>
      <text class="faq-header__desc">以下是用户常见的问题</text>
    </view>

    <view class="faq-list">
      <view
        v-for="(item, idx) in faqList"
        :key="idx"
        class="faq-item"
        :class="{ 'faq-item--open': openIdx === idx }"
      >
        <view class="faq-item__header" @click="toggleFaq(idx)">
          <text class="faq-item__q">{{ item.q }}</text>
          <text class="faq-item__arrow">{{ openIdx === idx ? '−' : '+' }}</text>
        </view>
        <view v-if="openIdx === idx" class="faq-item__body">
          <text class="faq-item__a">{{ item.a }}</text>
        </view>
      </view>
    </view>

    <!-- 底部联系 -->
    <view class="contact-section">
      <text class="contact-title">没找到答案？</text>
      <YwButton type="secondary" class="contact-btn" @click="handleContact">
        联系客服
      </YwButton>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { useMockStore } from '@/store/mock'
import YwButton from '@/components/YwButton.vue'

const store = useMockStore()
const faqList = ref(store.faqList)
const openIdx = ref(-1)

function toggleFaq(idx) {
  openIdx.value = openIdx.value === idx ? -1 : idx
}

function handleContact() {
  uni.showToast({ title: '客服功能开发中', icon: 'none' })
}
</script>

<style scoped>
.page-faq {
  min-height: 100vh;
  background-color: var(--color-bg-page);
  padding: var(--spacing-5);
}

/* 顶部 */
.faq-header {
  margin-bottom: var(--spacing-6);
}

.faq-header__title {
  display: block;
  font-size: var(--font-h2);
  font-weight: var(--weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-2);
}

.faq-header__desc {
  font-size: var(--font-body);
  color: var(--color-text-muted);
}

/* 列表 */
.faq-list {
  margin-bottom: var(--spacing-8);
}

.faq-item {
  background-color: var(--color-bg-card);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-3);
  overflow: hidden;
}

.faq-item__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-4);
  gap: var(--spacing-3);
}

.faq-item__q {
  flex: 1;
  font-size: var(--font-body);
  font-weight: var(--weight-medium);
  color: var(--color-text-primary);
  line-height: 1.5;
}

.faq-item__arrow {
  font-size: var(--font-h3);
  color: var(--color-text-muted);
  flex-shrink: 0;
  width: 40rpx;
  text-align: center;
}

.faq-item__body {
  padding: 0 var(--spacing-4) var(--spacing-4);
}

.faq-item__a {
  font-size: var(--font-body-sm);
  color: var(--color-text-secondary);
  line-height: 1.8;
}

.faq-item--open {
  border: 1px solid var(--color-primary-100);
}

/* 联系客服 */
.contact-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-6) 0;
}

.contact-title {
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
}

.contact-btn {
  height: 72rpx;
  font-size: var(--font-body-sm);
  padding: 0 var(--spacing-6);
}
</style>
