<template>
  <view class="page-search">

    <!-- 搜索栏 -->
    <view class="search-bar">
      <view class="search-input-wrap">
        <text class="search-input-icon">搜</text>
        <input
          class="search-input"
          v-model="keyword"
          placeholder="搜索书籍、专题、作者…"
          placeholder-class="search-input-placeholder"
          confirm-type="search"
          :focus="true"
          @confirm="doSearch"
        />
        <text v-if="keyword" class="search-clear" @click="clearSearch">✕</text>
      </view>
      <text class="search-cancel" @click="goBack">取消</text>
    </view>

    <!-- 热门搜索 -->
    <view v-if="!keyword && !hasSearched" class="section">
      <text class="section__title">热门搜索</text>
      <view class="hot-tags">
        <view
          v-for="(tag, idx) in hotKeywords"
          :key="idx"
          class="hot-tag"
          @click="searchByTag(tag)"
        >
          <text class="hot-tag__text">{{ tag }}</text>
        </view>
      </view>
    </view>

    <!-- 搜索结果 -->
    <view v-if="keyword || hasSearched" class="section">
      <text class="result-count">{{ results.length }} 个结果</text>
      <view class="result-list">
        <view
          v-for="item in results"
          :key="item.id"
          class="result-item"
          @click="goDetail(item)"
        >
          <image class="result-item__cover" :src="item.cover" mode="aspectFill" />
          <view class="result-item__info">
            <text class="result-item__title">{{ item.title }}</text>
            <YwTag :label="item.type" type="default" />
          </view>
        </view>
      </view>

      <!-- 空状态 -->
      <view v-if="hasSearched && results.length === 0" class="empty">
        <text class="empty__text">没有找到相关内容</text>
        <text class="empty__sub">换个关键词试试</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useMockStore } from '@/store/mock'
import YwTag from '@/components/YwTag.vue'

const store = useMockStore()
const keyword = ref('')
const hasSearched = ref(false)
const hotKeywords = ref(store.searchData.hotKeywords)
const allItems = store.searchData.allItems

const results = computed(() => {
  if (!keyword.value) return []
  const kw = keyword.value.toLowerCase()
  return allItems.filter((item) =>
    item.title.toLowerCase().includes(kw)
  )
})

function doSearch() {
  hasSearched.value = true
}

function searchByTag(tag) {
  keyword.value = tag
  hasSearched.value = true
}

function clearSearch() {
  keyword.value = ''
  hasSearched.value = false
}

function goBack() {
  uni.navigateBack({ delta: 1 })
}

function goDetail(item) {
  console.log('navigate to detail:', item.id, item.type)
}
</script>

<style scoped>
.page-search {
  padding: var(--spacing-4) var(--spacing-5);
  min-height: 100vh;
  background-color: var(--color-bg-page);
}

/* 搜索栏 */
.search-bar {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-5);
}

.search-input-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  height: 72rpx;
  padding: 0 var(--spacing-3);
  background-color: var(--color-bg-card);
  border-radius: var(--radius-xl);
  gap: var(--spacing-2);
}

.search-input-icon {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  font-size: var(--font-body);
  color: var(--color-text-primary);
  height: 72rpx;
}

.search-input-placeholder {
  color: var(--color-text-muted);
}

.search-clear {
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
  flex-shrink: 0;
  padding: var(--spacing-1);
}

.search-cancel {
  font-size: var(--font-body);
  color: var(--color-text-secondary);
  flex-shrink: 0;
}

/* 热门搜索 */
.section {
  margin-bottom: var(--spacing-6);
}

.section__title {
  display: block;
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-3);
}

.hot-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
}

.hot-tag {
  padding: var(--spacing-2) var(--spacing-3);
  background-color: var(--color-bg-card);
  border-radius: var(--radius-xl);
}

.hot-tag__text {
  font-size: var(--font-body-sm);
  color: var(--color-text-secondary);
}

/* 结果 */
.result-count {
  display: block;
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-3);
}

.result-list {
  display: flex;
  flex-direction: column;
}

.result-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3) 0;
  border-bottom: 1px solid var(--color-border);
}

.result-item:last-child {
  border-bottom: none;
}

.result-item__cover {
  width: 100rpx;
  height: 140rpx;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}

.result-item__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  min-width: 0;
}

.result-item__title {
  font-size: var(--font-body);
  font-weight: var(--weight-medium);
  color: var(--color-text-primary);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 空状态 */
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-8) 0;
  gap: var(--spacing-2);
}

.empty__text {
  font-size: var(--font-body);
  color: var(--color-text-secondary);
}

.empty__sub {
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
}
</style>
