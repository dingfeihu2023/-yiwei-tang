<template>
  <view class="page-reader" :class="[`theme--${theme}`]">

    <!-- 顶部导航栏 -->
    <view
      class="nav-bar"
      :class="{ 'nav-bar--hidden': toolbarHidden }"
      :style="{ paddingTop: statusBarHeight + 'px' }"
    >
      <view class="nav-bar__inner">
        <view class="nav-bar__back" @click="goBack">
          <text class="nav-bar__back-icon">‹</text>
        </view>
        <text class="nav-bar__title">{{ article ? article.bookTitle : '' }}</text>
        <view class="nav-bar__fav" @click="toggleFavorite">
          <text class="nav-bar__fav-icon">{{ isFavorited ? '★' : '☆' }}</text>
        </view>
      </view>
    </view>

    <!-- 导航栏占位 -->
    <view :style="{ height: (statusBarHeight + 44) + 'px' }" />

    <view v-if="article" class="reader-body" @click="toggleToolbar">

      <!-- 标题区 -->
      <view class="article-header">
        <text class="article-header__chapter">第{{ article.chapterIndex }}章</text>
        <text class="article-header__title">{{ article.title }}</text>
        <text class="article-header__subtitle">{{ article.subtitle }}</text>
        <view class="article-header__meta">
          <text class="article-header__author">{{ article.author }}</text>
          <text class="article-header__dot">·</text>
          <text class="article-header__date">{{ article.publishDate }}</text>
          <text class="article-header__dot">·</text>
          <text class="article-header__time">{{ article.readTime }}</text>
        </view>
      </view>

      <!-- 音频入口条 -->
      <view v-if="article.hasAudio" class="audio-entry" @click.stop="playAudio">
        <view class="audio-entry__play">
          <text class="audio-entry__play-icon">▶</text>
        </view>
        <view class="audio-entry__info">
          <text class="audio-entry__title">{{ article.audioTitle }}</text>
          <text class="audio-entry__duration">{{ article.audioDuration }}</text>
        </view>
        <text class="audio-entry__label">听本章</text>
      </view>

      <!-- 正文内容区 -->
      <view class="article-content" :style="{ fontSize: fontSize + 'px' }">
        <block v-for="(p, idx) in article.paragraphs" :key="idx">
          <text v-if="p.type === 'text'" class="p-text">{{ p.content }}</text>
          <text v-else-if="p.type === 'heading'" class="p-heading">{{ p.content }}</text>
          <view v-else-if="p.type === 'quote'" class="p-quote">
            <text class="p-quote__text">{{ p.content }}</text>
          </view>
          <view v-else-if="p.type === 'divider'" class="p-divider">
            <view class="p-divider__line" />
            <text class="p-divider__dot">·</text>
            <view class="p-divider__line" />
          </view>
        </block>
      </view>

      <!-- 章末 -->
      <view class="chapter-end">
        <view class="chapter-end__divider">
          <view class="chapter-end__line" />
          <text class="chapter-end__ornament">一</text>
          <view class="chapter-end__line" />
        </view>
        <text class="chapter-end__text">本章完</text>
      </view>

      <!-- 底部工具栏占位 -->
      <view class="toolbar-placeholder" />
    </view>

    <!-- 底部工具栏 -->
    <view class="toolbar" :class="{ 'toolbar--hidden': toolbarHidden }">
      <view class="toolbar__inner">
        <view class="toolbar__item" @click.stop="showTocPanel = true">
          <text class="toolbar__icon">☰</text>
          <text class="toolbar__label">目录</text>
        </view>
        <view class="toolbar__item" @click.stop="addBookmark">
          <text class="toolbar__icon">⚑</text>
          <text class="toolbar__label">书签</text>
        </view>
        <view class="toolbar__item" @click.stop="showFontPanel = true">
          <text class="toolbar__icon">Aa</text>
          <text class="toolbar__label">字号</text>
        </view>
        <view class="toolbar__item" @click.stop="toggleFavorite">
          <text class="toolbar__icon">{{ isFavorited ? '★' : '☆' }}</text>
          <text class="toolbar__label">收藏</text>
        </view>
        <view v-if="article && article.hasAudio" class="toolbar__item" @click.stop="playAudio">
          <text class="toolbar__icon">♫</text>
          <text class="toolbar__label">听书</text>
        </view>
      </view>
      <view class="toolbar__safe" />
    </view>

    <!-- 目录弹层 -->
    <view v-if="showTocPanel" class="overlay" @click="showTocPanel = false">
      <view class="panel panel--toc" @click.stop>
        <view class="panel__header">
          <text class="panel__title">目录</text>
          <text class="panel__close" @click="showTocPanel = false">✕</text>
        </view>
        <scroll-view scroll-y class="panel__body">
          <view
            v-for="ch in article.chapters"
            :key="ch.id"
            class="toc-row"
            :class="{
              'toc-row--current': ch.isCurrent,
              'toc-row--locked': !ch.isFree && !ch.isCurrent,
            }"
            @click="goChapter(ch)"
          >
            <text class="toc-row__index">{{ String(ch.index).padStart(2, '0') }}</text>
            <text class="toc-row__title">{{ ch.title }}</text>
            <text v-if="ch.isCurrent" class="toc-row__badge">当前</text>
            <text v-else-if="!ch.isFree" class="toc-row__lock">🔒</text>
          </view>
        </scroll-view>
      </view>
    </view>

    <!-- 字号/主题弹层 -->
    <view v-if="showFontPanel" class="overlay" @click="showFontPanel = false">
      <view class="panel panel--font" @click.stop>
        <view class="panel__header">
          <text class="panel__title">阅读设置</text>
          <text class="panel__close" @click="showFontPanel = false">✕</text>
        </view>
        <view class="setting-group">
          <text class="setting-group__label">字号</text>
          <view class="font-options">
            <view
              v-for="opt in fontOptions"
              :key="opt.value"
              class="font-opt"
              :class="{ 'font-opt--active': fontSize === opt.value }"
              @click="setFontSize(opt.value)"
            >
              <text class="font-opt__text" :style="{ fontSize: opt.value + 'px' }">文</text>
              <text class="font-opt__label">{{ opt.label }}</text>
            </view>
          </view>
        </view>
        <view class="setting-group">
          <text class="setting-group__label">背景</text>
          <view class="theme-options">
            <view
              class="theme-opt theme-opt--light"
              :class="{ 'theme-opt--active': theme === 'light' }"
              @click="setTheme('light')"
            >
              <text class="theme-opt__label">浅色</text>
            </view>
            <view
              class="theme-opt theme-opt--dark"
              :class="{ 'theme-opt--active': theme === 'dark' }"
              @click="setTheme('dark')"
            >
              <text class="theme-opt__label">深色</text>
            </view>
          </view>
        </view>
      </view>
    </view>

  </view>
</template>

<script setup>
import { ref } from 'vue'
import { onLoad, onHide } from '@dcloudio/uni-app'
import { useMockStore } from '@/store/mock'

const store = useMockStore()

const article = ref(null)
const statusBarHeight = ref(0)
const toolbarHidden = ref(false)
const showTocPanel = ref(false)
const showFontPanel = ref(false)
const isFavorited = ref(false)

// 阅读设置
const fontSize = ref(17)
const theme = ref('light')

const fontOptions = [
  { label: '小', value: 14 },
  { label: '中', value: 17 },
  { label: '大', value: 20 },
]

onLoad((query) => {
  const sysInfo = uni.getSystemInfoSync()
  statusBarHeight.value = sysInfo.statusBarHeight || 44

  const id = query.id || 'ech1'
  article.value = store.readerArticles[id] || store.readerArticles['ech1']

  // 恢复阅读设置
  const savedFont = uni.getStorageSync('reader_font_size')
  if (savedFont) fontSize.value = Number(savedFont)
  const savedTheme = uni.getStorageSync('reader_theme')
  if (savedTheme) theme.value = savedTheme

  // 恢复滚动位置
  const savedPos = uni.getStorageSync(`reader_pos_${id}`)
  if (savedPos) {
    setTimeout(() => {
      uni.pageScrollTo({ scrollTop: Number(savedPos), duration: 0 })
    }, 300)
  }
})

onHide(() => {
  // 保存阅读位置
  // #ifdef MP-WEIXIN
  if (article.value) {
    const query = uni.createSelectorQuery()
    query.selectViewport().scrollOffset((res) => {
      uni.setStorageSync(`reader_pos_${article.value.id}`, res.scrollTop)
    }).exec()
  }
  // #endif
})

function toggleToolbar() {
  toolbarHidden.value = !toolbarHidden.value
}

function goBack() {
  uni.navigateBack({ delta: 1 })
}

function toggleFavorite() {
  isFavorited.value = !isFavorited.value
  uni.showToast({
    title: isFavorited.value ? '已收藏' : '已取消收藏',
    icon: 'none',
  })
}

function addBookmark() {
  uni.showToast({ title: '已添加书签', icon: 'success' })
}

function playAudio() {
  uni.showToast({ title: '音频播放功能开发中', icon: 'none' })
}

function setFontSize(size) {
  fontSize.value = size
  uni.setStorageSync('reader_font_size', size)
}

function setTheme(t) {
  theme.value = t
  uni.setStorageSync('reader_theme', t)
}

function goChapter(ch) {
  showTocPanel.value = false
  if (ch.isCurrent) return
  if (!ch.isFree) {
    uni.showToast({ title: '购买后解锁', icon: 'none' })
    return
  }
  uni.redirectTo({ url: `/pages/reader/index?id=${ch.id}` })
}
</script>

<style scoped>
/* ===== 主题变量 ===== */
.page-reader {
  min-height: 100vh;
  transition: background-color 0.3s, color 0.3s;
}

.theme--light {
  --reader-bg: #F7F3EC;
  --reader-text: #1F1F1C;
  --reader-text-secondary: #4A4944;
  --reader-text-muted: #7B776F;
  --reader-border: #DDD5C8;
  --reader-card-bg: #FBF8F3;
  --reader-quote-bg: #EAF1EF;
  --reader-quote-border: #355A55;
  background-color: #F7F3EC;
  color: #1F1F1C;
}

.theme--dark {
  --reader-bg: #1A1A18;
  --reader-text: #D4D0C8;
  --reader-text-secondary: #A8A49C;
  --reader-text-muted: #706C64;
  --reader-border: #333330;
  --reader-card-bg: #242420;
  --reader-quote-bg: #1E2A28;
  --reader-quote-border: #355A55;
  background-color: #1A1A18;
  color: #D4D0C8;
}

/* ===== 导航栏 ===== */
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: var(--reader-bg);
  transition: transform 0.3s ease, background-color 0.3s;
}

.nav-bar--hidden {
  transform: translateY(-100%);
}

.nav-bar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  padding: 0 var(--spacing-4);
}

.nav-bar__back {
  width: 64rpx;
  height: 64rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-bar__back-icon {
  font-size: 28px;
  color: var(--reader-text);
  line-height: 1;
  margin-top: -2px;
}

.nav-bar__title {
  font-size: var(--font-body-sm);
  color: var(--reader-text-muted);
  max-width: 400rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.nav-bar__fav {
  width: 64rpx;
  height: 64rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-bar__fav-icon {
  font-size: 22px;
  color: var(--color-accent-bronze);
}

/* ===== 阅读主体 ===== */
.reader-body {
  padding: 0 var(--spacing-5);
  min-height: 100vh;
}

/* 标题区 */
.article-header {
  padding: var(--spacing-6) 0 var(--spacing-8);
  border-bottom: 1px solid var(--reader-border);
  margin-bottom: var(--spacing-6);
}

.article-header__chapter {
  display: block;
  font-size: var(--font-caption);
  color: var(--reader-text-muted);
  letter-spacing: 2px;
  margin-bottom: var(--spacing-3);
}

.article-header__title {
  display: block;
  font-size: var(--font-h1);
  font-weight: var(--weight-bold);
  color: var(--reader-text);
  font-family: 'Noto Serif SC', 'Source Han Serif CN', 'STSong', serif;
  line-height: 1.5;
  margin-bottom: var(--spacing-2);
}

.article-header__subtitle {
  display: block;
  font-size: var(--font-body);
  color: var(--reader-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-4);
}

.article-header__meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.article-header__author,
.article-header__date,
.article-header__time {
  font-size: var(--font-caption);
  color: var(--reader-text-muted);
}

.article-header__dot {
  font-size: var(--font-caption);
  color: var(--reader-border);
}

/* 音频入口 */
.audio-entry {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3) var(--spacing-4);
  background-color: var(--reader-card-bg);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-6);
}

.audio-entry__play {
  width: 56rpx;
  height: 56rpx;
  border-radius: 50%;
  background-color: var(--color-primary-900);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.audio-entry__play-icon {
  font-size: 10px;
  color: #ffffff;
  margin-left: 2px;
}

.audio-entry__info {
  flex: 1;
  min-width: 0;
}

.audio-entry__title {
  display: block;
  font-size: var(--font-body-sm);
  color: var(--reader-text);
  margin-bottom: 2px;
}

.audio-entry__duration {
  font-size: var(--font-caption);
  color: var(--reader-text-muted);
}

.audio-entry__label {
  font-size: var(--font-body-sm);
  color: var(--color-primary-700);
  font-weight: var(--weight-medium);
  flex-shrink: 0;
}

/* ===== 正文排版 ===== */
.article-content {
  line-height: 1.75;
  padding-bottom: var(--spacing-8);
}

.p-text {
  display: block;
  color: var(--reader-text);
  margin-bottom: 1.5em;
  text-align: justify;
}

.p-heading {
  display: block;
  font-size: 1.15em;
  font-weight: var(--weight-semibold);
  color: var(--reader-text);
  font-family: 'Noto Serif SC', 'Source Han Serif CN', 'STSong', serif;
  margin-top: 2em;
  margin-bottom: 1em;
  padding-left: var(--spacing-3);
  border-left: 4rpx solid var(--color-primary-700);
}

.p-quote {
  margin: 1.5em 0;
  padding: var(--spacing-4) var(--spacing-5);
  background-color: var(--reader-quote-bg);
  border-left: 6rpx solid var(--reader-quote-border);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
}

.p-quote__text {
  font-size: 0.95em;
  color: var(--reader-text-secondary);
  line-height: 1.8;
  font-style: italic;
  font-family: 'Noto Serif SC', 'Source Han Serif CN', 'STSong', serif;
}

.p-divider {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  margin: 2em 0;
}

.p-divider__line {
  flex: 1;
  height: 1px;
  background-color: var(--reader-border);
}

.p-divider__dot {
  font-size: var(--font-body-sm);
  color: var(--reader-text-muted);
}

/* 章末 */
.chapter-end {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-8) 0;
}

.chapter-end__divider {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  width: 60%;
  margin-bottom: var(--spacing-4);
}

.chapter-end__line {
  flex: 1;
  height: 1px;
  background-color: var(--reader-border);
}

.chapter-end__ornament {
  font-size: var(--font-body-sm);
  color: var(--reader-text-muted);
  font-family: 'Noto Serif SC', 'Source Han Serif CN', 'STSong', serif;
}

.chapter-end__text {
  font-size: var(--font-body-sm);
  color: var(--reader-text-muted);
}

.toolbar-placeholder {
  height: 120rpx;
}

/* ===== 底部工具栏 ===== */
.toolbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: var(--reader-bg);
  box-shadow: 0 -1px 8px rgba(31, 31, 28, 0.06);
  transition: transform 0.3s ease, background-color 0.3s;
}

.toolbar--hidden {
  transform: translateY(100%);
}

.toolbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: var(--spacing-2) 0;
}

.toolbar__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: var(--spacing-1) var(--spacing-3);
}

.toolbar__icon {
  font-size: 20px;
  color: var(--reader-text-secondary);
  line-height: 1.2;
}

.toolbar__label {
  font-size: 10px;
  color: var(--reader-text-muted);
}

.toolbar__safe {
  padding-bottom: env(safe-area-inset-bottom);
}

/* ===== 弹层通用 ===== */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: flex-end;
}

.panel {
  width: 100%;
  background-color: var(--reader-bg);
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
  transition: background-color 0.3s;
}

.panel__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-4) var(--spacing-5);
  border-bottom: 1px solid var(--reader-border);
}

.panel__title {
  font-size: var(--font-body-lg);
  font-weight: var(--weight-semibold);
  color: var(--reader-text);
}

.panel__close {
  font-size: var(--font-body);
  color: var(--reader-text-muted);
  width: 56rpx;
  height: 56rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ===== 目录弹层 ===== */
.panel--toc .panel__body {
  max-height: 60vh;
  padding-bottom: env(safe-area-inset-bottom);
}

.toc-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-4) var(--spacing-5);
  border-bottom: 1px solid var(--reader-border);
}

.toc-row:last-child {
  border-bottom: none;
}

.toc-row__index {
  font-size: var(--font-body-sm);
  color: var(--reader-border);
  font-family: 'Georgia', serif;
  width: 48rpx;
  flex-shrink: 0;
}

.toc-row--current .toc-row__index {
  color: var(--color-primary-700);
  font-weight: var(--weight-bold);
}

.toc-row__title {
  flex: 1;
  font-size: var(--font-body);
  color: var(--reader-text-secondary);
  line-height: 1.4;
}

.toc-row--current .toc-row__title {
  color: var(--color-primary-700);
  font-weight: var(--weight-medium);
}

.toc-row--locked .toc-row__title {
  color: var(--reader-text-muted);
}

.toc-row__badge {
  font-size: var(--font-caption);
  color: var(--color-primary-700);
  background-color: var(--reader-quote-bg);
  padding: 2px var(--spacing-2);
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}

.toc-row__lock {
  font-size: var(--font-body-sm);
  opacity: 0.4;
  flex-shrink: 0;
}

/* ===== 字号/主题弹层 ===== */
.panel--font {
  padding-bottom: env(safe-area-inset-bottom);
}

.setting-group {
  padding: var(--spacing-4) var(--spacing-5);
}

.setting-group__label {
  display: block;
  font-size: var(--font-body-sm);
  color: var(--reader-text-muted);
  margin-bottom: var(--spacing-3);
}

.font-options {
  display: flex;
  gap: var(--spacing-3);
}

.font-opt {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-1);
  padding: var(--spacing-3) 0;
  background-color: var(--reader-card-bg);
  border-radius: var(--radius-md);
  border: 2rpx solid transparent;
}

.font-opt--active {
  border-color: var(--color-primary-700);
  background-color: var(--reader-quote-bg);
}

.font-opt__text {
  color: var(--reader-text);
  font-weight: var(--weight-medium);
}

.font-opt__label {
  font-size: var(--font-caption);
  color: var(--reader-text-muted);
}

.theme-options {
  display: flex;
  gap: var(--spacing-3);
}

.theme-opt {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80rpx;
  border-radius: var(--radius-md);
  border: 2rpx solid transparent;
}

.theme-opt--light {
  background-color: #F7F3EC;
  border-color: var(--reader-border);
}

.theme-opt--dark {
  background-color: #1A1A18;
  border-color: #333330;
}

.theme-opt--active {
  border-color: var(--color-primary-700);
  border-width: 4rpx;
}

.theme-opt__label {
  font-size: var(--font-body-sm);
  font-weight: var(--weight-medium);
}

.theme-opt--light .theme-opt__label {
  color: #1F1F1C;
}

.theme-opt--dark .theme-opt__label {
  color: #D4D0C8;
}
</style>
