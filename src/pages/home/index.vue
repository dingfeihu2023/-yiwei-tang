<template>
  <view class="page-home">
    <!-- 搜索栏 -->
    <view class="search-bar" @click="goSearch">
      <text class="search-bar__placeholder">搜索书籍、专题、作者…</text>
    </view>

    <!-- Banner -->
    <swiper class="banner" indicator-dots autoplay circular>
      <swiper-item v-for="item in banners" :key="item.id">
        <image class="banner__img" :src="item.image" mode="aspectFill" />
      </swiper-item>
    </swiper>

    <!-- 今日推荐 -->
    <view class="section">
      <YwSectionHeader title="今日推荐" subtitle="每日精选" action-text="更多" @action="goMore('recommend')" />
      <scroll-view scroll-x class="scroll-row">
        <YwCard
          v-for="book in recommendBooks"
          :key="book.id"
          class="book-card"
          @click="goBookDetail(book.id)"
        >
          <image class="book-card__cover" :src="book.cover" mode="aspectFill" />
          <text class="book-card__title">{{ book.title }}</text>
          <text class="book-card__author">{{ book.author }}</text>
          <view class="book-card__price-row">
            <text class="book-card__price">¥{{ book.price }}</text>
            <YwTag v-if="book.tag" :label="book.tag" type="accent" />
          </view>
        </YwCard>
      </scroll-view>
    </view>

    <!-- 共读进行中 -->
    <view class="section">
      <YwSectionHeader title="共读进行中" action-text="全部" @action="goMore('coread')" />
      <YwCard v-for="item in coreadList" :key="item.id" class="coread-card" @click="goCoread(item.id)">
        <view class="coread-card__body">
          <image class="coread-card__cover" :src="item.cover" mode="aspectFill" />
          <view class="coread-card__info">
            <text class="coread-card__title">{{ item.title }}</text>
            <text class="coread-card__desc">{{ item.desc }}</text>
            <view class="coread-card__meta">
              <YwTag :label="`${item.members}人参与`" type="primary" />
              <text class="coread-card__progress">进度 {{ item.progress }}%</text>
            </view>
          </view>
        </view>
      </YwCard>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { useMockStore } from '@/store/mock'
import YwSectionHeader from '@/components/YwSectionHeader.vue'
import YwCard from '@/components/YwCard.vue'
import YwTag from '@/components/YwTag.vue'

const mockStore = useMockStore()

const banners = ref(mockStore.banners)
const recommendBooks = ref(mockStore.recommendBooks)
const coreadList = ref(mockStore.coreadList)

function goSearch() {
  console.log('navigate to search')
}

function goMore(type) {
  console.log('navigate to more:', type)
}

function goBookDetail(id) {
  console.log('navigate to book detail:', id)
}

function goCoread(id) {
  uni.switchTab({ url: '/pages/coread/index' })
}
</script>

<style scoped>
.page-home {
  padding: var(--spacing-4);
  padding-bottom: calc(var(--spacing-8) + env(safe-area-inset-bottom));
}

.search-bar {
  display: flex;
  align-items: center;
  height: 72rpx;
  padding: 0 var(--spacing-4);
  background-color: var(--color-bg-card);
  border-radius: var(--radius-xl);
  margin-bottom: var(--spacing-4);
}

.search-bar__placeholder {
  font-size: var(--font-body-sm);
  color: var(--color-text-muted);
}

.banner {
  height: 300rpx;
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: var(--spacing-4);
}

.banner__img {
  width: 100%;
  height: 300rpx;
  border-radius: var(--radius-lg);
}

.section {
  margin-bottom: var(--spacing-4);
}

.scroll-row {
  display: flex;
  white-space: nowrap;
  margin: 0 calc(-1 * var(--spacing-4));
  padding: 0 var(--spacing-4);
}

.book-card {
  display: inline-flex;
  flex-direction: column;
  width: 240rpx;
  margin-right: var(--spacing-3);
  flex-shrink: 0;
  padding: var(--spacing-2);
}

.book-card__cover {
  width: 100%;
  height: 300rpx;
  border-radius: var(--radius-sm);
  margin-bottom: var(--spacing-2);
}

.book-card__title {
  font-size: var(--font-body-sm);
  font-weight: var(--weight-medium);
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 2px;
}

.book-card__author {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-1);
}

.book-card__price-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.book-card__price {
  font-size: var(--font-body-sm);
  font-weight: var(--weight-semibold);
  color: var(--color-accent-cinnabar);
}

.coread-card {
  margin-bottom: var(--spacing-3);
}

.coread-card__body {
  display: flex;
  gap: var(--spacing-3);
}

.coread-card__cover {
  width: 160rpx;
  height: 200rpx;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}

.coread-card__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
}

.coread-card__title {
  font-size: var(--font-body);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
}

.coread-card__desc {
  font-size: var(--font-body-sm);
  color: var(--color-text-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.coread-card__meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.coread-card__progress {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
}
</style>
