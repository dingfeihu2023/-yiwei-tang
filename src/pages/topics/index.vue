<template>
  <view class="page-topics">
    <!-- 分类筛选 -->
    <scroll-view scroll-x class="filter-bar">
      <view
        v-for="cat in categories"
        :key="cat.id"
        class="filter-item"
        :class="{ 'filter-item--active': activeCat === cat.id }"
        @click="activeCat = cat.id"
      >
        <text>{{ cat.name }}</text>
      </view>
    </scroll-view>

    <!-- 专题列表 -->
    <view class="topics-list">
      <YwCard v-for="topic in filteredTopics" :key="topic.id" class="topic-card" @click="goDetail(topic.id)">
        <image class="topic-card__cover" :src="topic.cover" mode="aspectFill" />
        <view class="topic-card__body">
          <text class="topic-card__title">{{ topic.title }}</text>
          <text class="topic-card__desc">{{ topic.desc }}</text>
          <view class="topic-card__footer">
            <YwTag :label="topic.category" type="primary" />
            <text class="topic-card__count">{{ topic.bookCount }}本</text>
          </view>
        </view>
      </YwCard>
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useMockStore } from '@/store/mock'
import YwCard from '@/components/YwCard.vue'
import YwTag from '@/components/YwTag.vue'

const mockStore = useMockStore()
const activeCat = ref('all')

const categories = ref([
  { id: 'all', name: '全部' },
  { id: 'classics', name: '经典' },
  { id: 'philosophy', name: '哲学' },
  { id: 'poetry', name: '诗词' },
  { id: 'history', name: '历史' },
])

const filteredTopics = computed(() => {
  if (activeCat.value === 'all') return mockStore.topics
  return mockStore.topics.filter((t) => t.categoryId === activeCat.value)
})

function goDetail(id) {
  console.log('navigate to topic detail:', id)
}
</script>

<style scoped>
.page-topics {
  padding: var(--spacing-4);
  padding-bottom: calc(var(--spacing-8) + env(safe-area-inset-bottom));
}

.filter-bar {
  display: flex;
  white-space: nowrap;
  margin-bottom: var(--spacing-4);
  gap: var(--spacing-2);
}

.filter-item {
  display: inline-flex;
  padding: var(--spacing-1) var(--spacing-3);
  font-size: var(--font-body-sm);
  color: var(--color-text-secondary);
  background-color: var(--color-bg-card);
  border-radius: var(--radius-xl);
}

.filter-item--active {
  background-color: var(--color-primary-900);
  color: #ffffff;
}

.topics-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.topic-card {
  overflow: hidden;
  padding: 0;
}

.topic-card__cover {
  width: 100%;
  height: 320rpx;
}

.topic-card__body {
  padding: var(--spacing-3) var(--spacing-4);
}

.topic-card__title {
  font-size: var(--font-body-lg);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-1);
}

.topic-card__desc {
  font-size: var(--font-body-sm);
  color: var(--color-text-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: var(--spacing-2);
}

.topic-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.topic-card__count {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
}
</style>
