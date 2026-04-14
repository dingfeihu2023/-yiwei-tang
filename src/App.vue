<script setup>
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'

onLaunch(() => {
  console.log('App Launch')
  // 初始化微信云开发
  // #ifdef MP-WEIXIN
  if (wx.cloud) {
    wx.cloud.init({
      env: 'your-env-id', // 替换为你的云开发环境ID
      traceUser: true,
    })
  }
  // #endif
})

onShow(() => {
  console.log('App Show')
})

onHide(() => {
  console.log('App Hide')
})
</script>

<style>
@import './styles/tokens.css';

page {
  background-color: var(--color-bg-page);
  color: var(--color-text-primary);
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC',
    'Helvetica Neue', 'Microsoft YaHei', sans-serif;
  font-size: var(--font-body);
  line-height: 1.6;
}
</style>
