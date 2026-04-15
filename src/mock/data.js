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

/* ========================================
   首页专属 Mock 数据
   ======================================== */

/** 今日一读 */
export const dailyReading = {
  id: 'dr1',
  title: '君子不器',
  source: '《论语 · 为政篇》',
  excerpt: '君子不器。——真正有修养的人，不会把自己局限为某一种固定的角色或工具。在中年之后重读这句话，才真正懂得：放下标签，才能看见更辽阔的自己。',
  readTime: '5 分钟',
}

/** 三大主题入口 */
export const themeEntries = [
  {
    id: 'theme1',
    key: 'kanju',
    title: '看局',
    subtitle: '职场 · 关系 · 博弈',
    desc: '以古观今，看清人事格局',
    icon: '棋',
  },
  {
    id: 'theme2',
    key: 'dingxin',
    title: '定心',
    subtitle: '情绪 · 焦虑 · 心性',
    desc: '安顿内心，从容不迫',
    icon: '茶',
  },
  {
    id: 'theme3',
    key: 'jiachang',
    title: '家常',
    subtitle: '家庭 · 教育 · 传承',
    desc: '经营好最近的关系',
    icon: '灯',
  },
]

/** 本周推荐 */
export const weeklyPicks = [
  {
    id: 'wp1',
    title: '中年觉醒：《论语》里的处世智慧',
    subtitle: '12讲音频 + 逐句精读手册',
    tags: ['看局', '人际'],
    price: '68.00',
    originalPrice: '128.00',
    cover: 'https://picsum.photos/seed/wp1/400/260',
    badge: '本周上新',
  },
  {
    id: 'wp2',
    title: '不焦虑的活法：庄子的心灵处方',
    subtitle: '8讲音频 + 21天定心练习',
    tags: ['定心', '减压'],
    price: '49.00',
    originalPrice: '99.00',
    cover: 'https://picsum.photos/seed/wp2/400/260',
    badge: '口碑之选',
  },
  {
    id: 'wp3',
    title: '家书里的中国：曾国藩教子之道',
    subtitle: '10讲音频 + 家书原文对照',
    tags: ['家常', '教育'],
    price: '58.00',
    originalPrice: '108.00',
    cover: 'https://picsum.photos/seed/wp3/400/260',
    badge: '',
  },
]

/** 作者导读音频 */
export const audioGuides = [
  {
    id: 'ag1',
    title: '鬼谷子的说服术，今天还能用吗？',
    author: '张其成',
    authorTitle: '北京中医药大学教授',
    avatar: 'https://picsum.photos/seed/au1/100/100',
    duration: '18:32',
    plays: 2340,
  },
  {
    id: 'ag2',
    title: '中年读《易经》：变化中找到不变的锚',
    author: '曾仕强',
    authorTitle: '国学大师',
    avatar: 'https://picsum.photos/seed/au2/100/100',
    duration: '22:15',
    plays: 5680,
  },
  {
    id: 'ag3',
    title: '苏东坡如何面对人生低谷',
    author: '康震',
    authorTitle: '北京师范大学教授',
    avatar: 'https://picsum.photos/seed/au3/100/100',
    duration: '15:48',
    plays: 3920,
  },
]

/** 会员权益 */
export const memberBenefits = [
  { id: 'mb1', icon: '书', title: '全站畅读', desc: '200+ 精解内容免费看' },
  { id: 'mb2', icon: '音', title: '音频畅听', desc: '所有导读音频无限听' },
  { id: 'mb3', icon: '友', title: '共读圈', desc: '加入专属共读社群' },
  { id: 'mb4', icon: '惠', title: '专属折扣', desc: '新品享会员价' },
]

/** 用户评价 */
export const userReviews = [
  {
    id: 'rv1',
    nickname: '静水流深',
    avatar: 'https://picsum.photos/seed/rv1/80/80',
    content: '四十五岁重读论语，字字句句都有了不同的感悟。一苇堂的解读切中了中年人的心事，不说教，不鸡汤，是真正有温度的陪伴。',
    tag: '读了 6 个月',
  },
  {
    id: 'rv2',
    nickname: '半山听雨',
    avatar: 'https://picsum.photos/seed/rv2/80/80',
    content: '职场遇到瓶颈后开始听鬼谷子的课，慢慢找到了和同事、领导相处的分寸感。古人的智慧，比那些成功学管用多了。',
    tag: '读了 3 个月',
  },
  {
    id: 'rv3',
    nickname: '岁月如歌',
    avatar: 'https://picsum.photos/seed/rv3/80/80',
    content: '孩子青春期叛逆，我在曾国藩家书里找到了答案。原来教育的本质是以身作则，而不是一味的说教。',
    tag: '读了 4 个月',
  },
]
