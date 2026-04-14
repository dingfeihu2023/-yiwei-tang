/**
 * 一苇堂 Mock 数据
 */

/** Banner 轮播 */
export const banners = [
  {
    id: 'b1',
    image: 'https://picsum.photos/seed/yw1/750/360',
    link: '/pages/topics/detail?id=t1',
  },
  {
    id: 'b2',
    image: 'https://picsum.photos/seed/yw2/750/360',
    link: '/pages/topics/detail?id=t2',
  },
  {
    id: 'b3',
    image: 'https://picsum.photos/seed/yw3/750/360',
    link: '',
  },
]

/** 推荐书籍 */
export const recommendBooks = [
  {
    id: 'book1',
    title: '论语译注',
    author: '杨伯峻',
    cover: 'https://picsum.photos/seed/book1/240/320',
    price: '39.00',
    tag: '经典',
  },
  {
    id: 'book2',
    title: '道德经注释',
    author: '陈鼓应',
    cover: 'https://picsum.photos/seed/book2/240/320',
    price: '35.00',
    tag: '哲学',
  },
  {
    id: 'book3',
    title: '唐诗三百首详析',
    author: '喻守真',
    cover: 'https://picsum.photos/seed/book3/240/320',
    price: '42.00',
    tag: '',
  },
  {
    id: 'book4',
    title: '古文观止',
    author: '吴楚材',
    cover: 'https://picsum.photos/seed/book4/240/320',
    price: '48.00',
    tag: '名篇',
  },
  {
    id: 'book5',
    title: '人间词话',
    author: '王国维',
    cover: 'https://picsum.photos/seed/book5/240/320',
    price: '28.00',
    tag: '诗词',
  },
]

/** 正在进行的共读 */
export const coreadList = [
  {
    id: 'cr1',
    title: '《论语》精读 · 第三期',
    desc: '逐章逐句品读论语，每周两章，共读十二周。配合名家注释与当代解读，体悟圣贤智慧。',
    cover: 'https://picsum.photos/seed/cr1/240/320',
    members: 128,
    progress: 45,
  },
  {
    id: 'cr2',
    title: '《庄子》内篇导读',
    desc: '深入庄子内七篇，感受道家哲学的自由与逍遥。',
    cover: 'https://picsum.photos/seed/cr2/240/320',
    members: 86,
    progress: 30,
  },
]

/** 即将开始的共读 */
export const upcomingReads = [
  {
    id: 'ur1',
    title: '《诗经》风雅颂之旅',
    desc: '从国风到大雅，领略三千年前的诗意中国。',
    cover: 'https://picsum.photos/seed/ur1/240/320',
    members: 52,
    startDate: '04/28',
  },
  {
    id: 'ur2',
    title: '《史记》列传选读',
    desc: '精选十篇列传，跟随太史公笔触走进历史深处。',
    cover: 'https://picsum.photos/seed/ur2/240/320',
    members: 37,
    startDate: '05/10',
  },
]

/** 专题列表 */
export const topics = [
  {
    id: 't1',
    title: '儒学入门必读',
    desc: '从《论语》到《孟子》，从《大学》到《中庸》，四书精读带你走进儒家思想殿堂。',
    cover: 'https://picsum.photos/seed/tp1/750/400',
    category: '经典',
    categoryId: 'classics',
    bookCount: 8,
  },
  {
    id: 't2',
    title: '道家智慧',
    desc: '老庄哲学的当代启示：在纷繁世界中寻找内心的宁静与自由。',
    cover: 'https://picsum.photos/seed/tp2/750/400',
    category: '哲学',
    categoryId: 'philosophy',
    bookCount: 6,
  },
  {
    id: 't3',
    title: '宋词之美',
    desc: '从晏殊到辛弃疾，从婉约到豪放，品味宋词的千年韵味。',
    cover: 'https://picsum.photos/seed/tp3/750/400',
    category: '诗词',
    categoryId: 'poetry',
    bookCount: 5,
  },
  {
    id: 't4',
    title: '二十四史导读',
    desc: '以史为鉴，精选各朝正史经典篇章，纵览中华文明脉络。',
    cover: 'https://picsum.photos/seed/tp4/750/400',
    category: '历史',
    categoryId: 'history',
    bookCount: 12,
  },
]
