/**
 * 微信云开发封装
 * 使用前需在 App.vue 中完成 wx.cloud.init()
 */

/**
 * 调用云函数
 * @param {string} name 云函数名
 * @param {object} data 参数
 */
export function callFunction(name, data = {}) {
  return new Promise((resolve, reject) => {
    // #ifdef MP-WEIXIN
    wx.cloud.callFunction({
      name,
      data,
      success: (res) => resolve(res.result),
      fail: (err) => reject(err),
    })
    // #endif
    // #ifndef MP-WEIXIN
    reject(new Error('云函数仅在微信小程序环境可用'))
    // #endif
  })
}

/**
 * 查询云数据库集合
 * @param {string} collection 集合名
 * @param {object} where 查询条件
 * @param {number} limit 条数
 */
export function dbGet(collection, where = {}, limit = 20) {
  return new Promise((resolve, reject) => {
    // #ifdef MP-WEIXIN
    const db = wx.cloud.database()
    db.collection(collection)
      .where(where)
      .limit(limit)
      .get()
      .then((res) => resolve(res.data))
      .catch((err) => reject(err))
    // #endif
    // #ifndef MP-WEIXIN
    reject(new Error('云数据库仅在微信小程序环境可用'))
    // #endif
  })
}
