<template>
  <view class="page-topics">

    <!-- 分类切换 -->
    <scroll-view scroll-x class="cat-bar">
      <view
        v-for="cat in categories"
        :key="cat.id"
        class="cat-tab"
        :class="{ 'cat-tab--active': activeCat === cat.id }"
        @click="activeCat = cat.id"
      >
        <text class="cat-tab__text">{{ cat.name }}</text>
      </view>
    </scroll-view>

    <!-- 分类内容 -->
    <view v-for="cat in filteredCategories" :key="cat.id" class="cat-section">
      <view class="cat-header">
        <text class="cat-header__title">{{ cat.name }}</text>
        <text class="cat-header__desc">{{ cat.desc }}</text>
      </view>

      <view class="content-list">
        <YwCard
          v-for="item in cat.items"
          :key="item.id"
          class="content-card"
          :no-padding="true"
          @click="goDetail(item)"
        >
          <view class="content-card__row">
            <image class="content-card__cover" :src="item.cover" mode="aspectFill" />
            <view class="content-card__body">
              <text class="content-card__title">{{ item.title }}</text>
              <view class="content-card__tags">
                <YwTag v-for="tag in item.tags" :key="tag" :label="tag" type="primary" />
                <YwTag :label="item.type" type="default" />
              </view>
              <view class="content-card__bottom">
                <view class="content-card__price-group">
                  <text class="content-card__symbol">¥</text>
                  <text class="content-card__price">{{ item.price }}</text>
                </view>
                <text class="content-card__readers">{{ item.readCount }}人已读</text>
              </view>
            </view>
          </view>
        </YwCard>
      </view>
    </view>

    <view class="safe-bottom" />
  </view>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useMockStore } from '@/store/mock'
import YwCard from '@/components/YwCard.vue'
import YwTag from '@/components/YwTag.vue'

const store = useMockStore()
const categories = ref(store.topicCategories)
const activeCat = ref('all')

const filteredCategories = computed(() => {
  if (activeCat.value === 'all') return categories.value
  return categories.value.filter((c) => c.id === activeCat.value)
})

function goDetail(item) {
  console.log('navigate to detail:', item.id, item.type)
}
</script>

<style scoped>
.page-topics {
  padding-bottom: 0;
}

.safe-bottom {
  height: calc(var(--spacing-8) + env(safe-area-inset-bottom));
}

/* 分类切换 */
.cat-bar {
  display: flex;
  white-space: nowrap;
  padding: var(--spacing-3) var(--spacing-5);
  gap: var(--spacing-2);
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-bg-page);
  position: sticky;
  top: 0;
  z-index: 10;
}

.cat-tab {
  display: inline-flex;
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-xl);
  background-color: var(--color-bg-card);
  flex-shrink: 0;
}

.cat-tab--active {
  background-color: var(--color-primary-900);
}

.cat-tab__text {
  font-size: var(--font-body-sm);
  color: var(--color-text-secondary);
}

.cat-tab--active .cat-tab__text {
  color: #ffffff;
}

/* 分类区块 */
.cat-section {
  padding: var(--spacing-5);
}

.cat-header {
  margin-bottom: var(--spacing-4);
}

.cat-header__title {
  display: block;
  font-size: var(--font-h3);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-1);
}

.cat-header__desc {
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
}

/* 内容卡片 */
.content-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.content-card {
  overflow: hidden;
}

.content-card__row {
  display: flex;
}

.content-card__cover {
  width: 240rpx;
  height: 280rpx;
  flex-shrink: 0;
}

.content-card__body {
  flex: 1;
  padding: var(--spacing-3) var(--spacing-4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
}

.content-card__title {
  display: block;
  font-size: var(--font-body);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: var(--spacing-2);
}

.content-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-1);
  margin-bottom: var(--spacing-2);
}

.content-card__bottom {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.content-card__price-group {
  display: flex;
  align-items: baseline;
  gap: 1px;
}

.content-card__symbol {
  font-size: var(--font-body-sm);
  font-weight: var(--weight-semibold);
  color: var(--color-accent-cinnabar);
}

.content-card__price {
  font-size: var(--font-h3);
  font-weight: var(--weight-bold);
  color: var(--color-accent-cinnabar);
  line-height: 1;
}

.content-card__readers {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
}
</style>
