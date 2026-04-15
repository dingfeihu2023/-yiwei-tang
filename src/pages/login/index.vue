<template>
  <view class="page-login">

    <!-- 品牌区域 -->
    <view class="brand-area">
      <view class="brand-logo">
        <text class="brand-logo__text">一苇堂</text>
      </view>
      <text class="brand-slogan">古典智慧 · 当代生活</text>
      <text class="brand-desc">看清人 · 看懂局 · 看稳自己</text>
    </view>

    <!-- 登录按钮区 -->
    <view class="login-actions">
      <!-- #ifdef MP-WEIXIN -->
      <button
        class="wx-login-btn"
        open-type="getPhoneNumber"
        @getphonenumber="handlePhoneLogin"
      >
        <text class="wx-login-btn__icon">微</text>
        <text class="wx-login-btn__text">微信一键登录</text>
      </button>
      <!-- #endif -->

      <!-- #ifndef MP-WEIXIN -->
      <YwButton type="primary" block @click="handleMockLogin">
        体验登录
      </YwButton>
      <!-- #endif -->

      <text class="login-tip">登录即表示你同意以下协议</text>

      <view class="agreement-row">
        <text class="agreement-link" @click="viewAgreement('user')">《用户协议》</text>
        <text class="agreement-sep">和</text>
        <text class="agreement-link" @click="viewAgreement('privacy')">《隐私政策》</text>
      </view>
    </view>

    <!-- 底部装饰 -->
    <view class="login-footer">
      <text class="login-footer__text">一苇可航 · 智慧渡人</text>
    </view>
  </view>
</template>

<script setup>
// #ifndef MP-WEIXIN
import YwButton from '@/components/YwButton.vue'
// #endif

function handlePhoneLogin(e) {
  if (e.detail.errMsg === 'getPhoneNumber:ok') {
    // 调用云函数获取手机号并登录
    uni.showLoading({ title: '登录中…' })
    setTimeout(() => {
      uni.hideLoading()
      uni.showToast({ title: '登录成功', icon: 'success' })
      setTimeout(() => {
        uni.switchTab({ url: '/pages/home/index' })
      }, 1000)
    }, 800)
  }
}

function handleMockLogin() {
  uni.showToast({ title: '登录成功', icon: 'success' })
  setTimeout(() => {
    uni.switchTab({ url: '/pages/home/index' })
  }, 1000)
}

function viewAgreement(type) {
  console.log('查看协议:', type)
}
</script>

<style scoped>
.page-login {
  min-height: 100vh;
  background-color: var(--color-bg-page);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-8) var(--spacing-5);
}

/* 品牌区域 */
.brand-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120rpx;
}

.brand-logo {
  width: 160rpx;
  height: 160rpx;
  border-radius: 50%;
  background-color: var(--color-primary-900);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-5);
}

.brand-logo__text {
  font-size: 44rpx;
  color: #ffffff;
  font-weight: var(--weight-bold);
  letter-spacing: 4rpx;
}

.brand-slogan {
  display: block;
  font-size: var(--font-h2);
  font-weight: var(--weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-2);
  letter-spacing: 2rpx;
}

.brand-desc {
  font-size: var(--font-body);
  color: var(--color-text-muted);
  letter-spacing: 2rpx;
}

/* 登录按钮 */
.login-actions {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wx-login-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  width: 100%;
  height: 96rpx;
  background-color: var(--color-primary-900);
  color: #ffffff;
  border-radius: var(--radius-md);
  border: none;
  font-size: var(--font-body);
  font-weight: var(--weight-medium);
  margin-bottom: var(--spacing-5);
}

.wx-login-btn::after {
  border: none;
}

.wx-login-btn:active {
  opacity: 0.8;
}

.wx-login-btn__icon {
  width: 44rpx;
  height: 44rpx;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-body-sm);
  color: #ffffff;
}

.wx-login-btn__text {
  font-size: var(--font-body);
  color: #ffffff;
}

.login-tip {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-1);
}

.agreement-row {
  display: flex;
  align-items: center;
  gap: 2px;
}

.agreement-link {
  font-size: var(--font-caption);
  color: var(--color-primary-700);
}

.agreement-sep {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
}

/* 底部 */
.login-footer {
  position: absolute;
  bottom: calc(var(--spacing-8) + env(safe-area-inset-bottom));
}

.login-footer__text {
  font-size: var(--font-caption);
  color: var(--color-text-muted);
  letter-spacing: 4rpx;
}
</style>
