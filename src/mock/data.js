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

/* ========================================
   微专栏详情 Mock 数据
   ======================================== */

export const topicDetails = {
  'td-shiju': {
    id: 'td-shiju',
    title: '识局：人和人说话，桌面是平的，下面常常有坡度',
    subtitle: '写给总在关系里吃亏、在局里后知后觉的人',
    cover: 'https://picsum.photos/seed/td-shiju/750/480',
    price: '9.90',
    originalPrice: '29.90',
    tags: ['7天读完', '问题型微专栏', '首单推荐'],
    readCount: 3856,
    theme: '看局',

    /** 核心问题 */
    coreProblems: [
      '为什么同一句话，有人听着舒服，有人听着刺耳？',
      '为什么你掏心掏肺说了真话，反而得罪了人？',
      '为什么有些人什么都没说，却已经赢了半局？',
      '为什么你明明做得最多，升职的永远不是你？',
    ],

    /** 适合谁 */
    forWhom: [
      '在职场或社交中常感到"后知后觉"的人',
      '说话容易得罪人、不知道哪句话说错了的人',
      '感觉自己付出多却总被忽视的人',
      '想理解人际潜规则但不想变得"油腻"的人',
    ],

    /** 不适合谁 */
    notForWhom: [
      '想学"厚黑学"或操控术的人——这里没有',
      '不愿意反思自己的人——改变从自省开始',
      '期待一篇文章就改变命运的人——需要持续修炼',
    ],

    /** 你将获得 */
    gains: [
      { icon: '观', title: '一套观局思维', desc: '从《鬼谷子》《韩非子》中提炼的现代识人框架' },
      { icon: '言', title: '一组说话策略', desc: '在不同场景下，哪些话该说、怎么说、什么时候说' },
      { icon: '守', title: '一种自保意识', desc: '不是变得圆滑，而是学会在复杂关系中保护自己' },
      { icon: '定', title: '一份清醒从容', desc: '看清局势之后，不焦虑、不讨好、不被带节奏' },
    ],

    /** 内容目录 */
    chapters: [
      { id: 'ch1', index: 1, title: '开篇：什么是"局"', desc: '日常里那些你没注意到的博弈', isFree: true },
      { id: 'ch2', index: 2, title: '鬼谷子说的"揣摩"到底是什么', desc: '读懂对方没说出口的话', isFree: true },
      { id: 'ch3', index: 3, title: '韩非子的忠告：不要替别人做决定', desc: '职场中最常见的越界', isFree: false },
      { id: 'ch4', index: 4, title: '为什么"实在人"总吃亏', desc: '好意与好结果之间的距离', isFree: false },
      { id: 'ch5', index: 5, title: '饭局、会议、群聊里的隐形秩序', desc: '从座位到发言顺序的潜规则', isFree: false },
      { id: 'ch6', index: 6, title: '如何在不撕破脸的情况下说"不"', desc: '温和而坚定的拒绝艺术', isFree: false },
      { id: 'ch7', index: 7, title: '终章：看清局，不入局', desc: '做一个清醒的善良人', isFree: false },
    ],

    /** 试读摘要 */
    trialExcerpt: '人和人之间的对话，表面上是一张平桌，两人对坐。但桌面之下，常常有坡度——有人在上，有人在下。这个坡度不是权力决定的，是"局"决定的……',

    /** 该专栏的用户评价 */
    reviews: [
      {
        id: 'tdr1',
        nickname: '山高水远',
        avatar: 'https://picsum.photos/seed/tdr1/80/80',
        content: '看完第二章就恍然大悟，原来我跟领导汇报工作时犯了那么多"揣摩"的忌讳。短短七篇，胜过读十本职场书。',
        tag: '已读完',
      },
      {
        id: 'tdr2',
        nickname: '清风徐来',
        avatar: 'https://picsum.photos/seed/tdr2/80/80',
        content: '本来以为又是教人"套路"的，没想到写得这么诚恳。不是教你变滑头，而是教你看清楚之后，选择做一个善良但不天真的人。',
        tag: '已读完',
      },
      {
        id: 'tdr3',
        nickname: '一杯清茗',
        avatar: 'https://picsum.photos/seed/tdr3/80/80',
        content: '第六章关于拒绝的内容太实用了。我照着试了一次，对方居然没生气，反而更尊重我了。',
        tag: '读了 5 天',
      },
    ],
  },

  'td-dingxin': {
    id: 'td-dingxin',
    title: '定心：焦虑的反面不是平静，是"笃定"',
    subtitle: '写给在深夜辗转、白天强撑的你',
    cover: 'https://picsum.photos/seed/td-dingxin/750/480',
    price: '9.90',
    originalPrice: '29.90',
    tags: ['7天读完', '心性修炼', '好评如潮'],
    readCount: 4210,
    theme: '定心',

    coreProblems: [
      '为什么越努力越焦虑，停下来又心慌？',
      '为什么总在跟别人比，却越比越不安？',
      '为什么道理都懂，情绪还是控制不住？',
      '为什么拥有了很多，心里还是空的？',
    ],

    forWhom: [
      '长期处于焦虑、失眠、内耗状态的人',
      '事业有成但内心空虚的中年人',
      '容易被外界评价影响情绪的人',
      '想要找到内心安定力量的人',
    ],

    notForWhom: [
      '有严重心理疾病需要专业治疗的人',
      '寻找速效"鸡汤"的人——这里讲的是慢功夫',
      '不愿面对自己内心的人',
    ],

    gains: [
      { icon: '静', title: '一套安心方法', desc: '从《庄子》《心经》中提取的日常定心练习' },
      { icon: '观', title: '一种观照视角', desc: '学会跳出焦虑，站在更高处看自己的处境' },
      { icon: '舍', title: '一份断舍勇气', desc: '分清哪些是真需要，哪些是被贩卖的焦虑' },
      { icon: '安', title: '一种笃定心态', desc: '不是没有困难，而是面对困难时心不散' },
    ],

    chapters: [
      { id: 'dch1', index: 1, title: '开篇：焦虑不是病，是信号', desc: '重新理解你的不安', isFree: true },
      { id: 'dch2', index: 2, title: '庄子的逍遥：不是逃避，是看开', desc: '学会与不确定共处', isFree: true },
      { id: 'dch3', index: 3, title: '为什么"比较"让我们痛苦', desc: '放下社会时钟的绑架', isFree: false },
      { id: 'dch4', index: 4, title: '三个古人的至暗时刻', desc: '苏轼、王阳明、陶渊明如何度过低谷', isFree: false },
      { id: 'dch5', index: 5, title: '中年断舍离：不是扔东西，是清理内心', desc: '一次深度的自我整理', isFree: false },
      { id: 'dch6', index: 6, title: '每天十分钟的"观心"练习', desc: '一套可操作的日常功课', isFree: false },
      { id: 'dch7', index: 7, title: '终章：笃定不是没有恐惧', desc: '而是带着恐惧依然前行', isFree: false },
    ],

    trialExcerpt: '焦虑的反面不是平静——平静太轻了，风一吹就散。焦虑真正的反面是"笃定"。笃定是什么？是你知道日子难，事情多，前路不确定，但你心里有一个锚……',

    reviews: [
      {
        id: 'ddr1',
        nickname: '云淡风轻',
        avatar: 'https://picsum.photos/seed/ddr1/80/80',
        content: '失眠了大半年，看完这个专栏后试着做"观心练习"，第三天晚上居然睡着了。不是灵丹妙药，但确实有用。',
        tag: '已读完',
      },
      {
        id: 'ddr2',
        nickname: '不惑之年',
        avatar: 'https://picsum.photos/seed/ddr2/80/80',
        content: '第四章写三个古人低谷的部分，我读了三遍。原来苏东坡也焦虑过，王阳明也迷茫过。突然觉得自己的困难没那么大了。',
        tag: '已读完',
      },
    ],
  },
}

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
