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

/* ========================================
   电子书详情 Mock 数据
   ======================================== */

export const ebookDetails = {
  'eb-wuqing': {
    id: 'eb-wuqing',
    title: '无情者胜：从《战国策》看人性、权力与分寸',
    subtitle: '不是教你变冷，而是教你别把人性看得太暖',
    author: '一苇堂编辑部',
    authorDesc: '一苇堂核心内容团队，专注用现代视角重读古典，将先秦智慧转化为当代人的实用工具。',
    authorAvatar: 'https://picsum.photos/seed/author-wq/120/120',
    cover: 'https://picsum.photos/seed/eb-wuqing/400/560',
    price: '49.90',
    originalPrice: '89.00',
    tags: ['电子书', '深度解读', '一苇堂代表作'],
    readCount: 6230,
    wordCount: '8.6万字',
    chapterCount: 12,
    theme: '看局',

    /** 书籍亮点 */
    highlights: [
      '精选《战国策》28篇原文，逐段拆解人性博弈',
      '每章配"现代场景映射"，古今对照不说教',
      '附赠"分寸感自检清单"，可反复使用',
    ],

    /** 作者导读音频 */
    audioGuide: {
      title: '为什么要在中年读《战国策》',
      duration: '16:45',
      plays: 4280,
    },

    /** 目录 */
    chapters: [
      { id: 'ech1', index: 1, title: '序章：所谓"无情"', desc: '不是没有感情，是不被感情绑架', isFree: true },
      { id: 'ech2', index: 2, title: '苏秦的逆袭：被至亲羞辱之后', desc: '家人不支持你，是因为你还没成功', isFree: true },
      { id: 'ech3', index: 3, title: '张仪受辱：舌头还在就够了', desc: '忍辱不是软弱，是筹码不够时的生存策略', isFree: false },
      { id: 'ech4', index: 4, title: '冯谖弹铗：会哭的孩子有奶吃', desc: '主动暴露需求，才是高级的合作方式', isFree: false },
      { id: 'ech5', index: 5, title: '触龙说赵太后：最高级的说服', desc: '不是讲道理，是先让对方放下防备', isFree: false },
      { id: 'ech6', index: 6, title: '邹忌讽齐王：照镜子的学问', desc: '你听到的好话，有多少是真的？', isFree: false },
      { id: 'ech7', index: 7, title: '范雎的隐忍：差点被打死的宰相', desc: '真正的强者，擅长在最低处等风来', isFree: false },
      { id: 'ech8', index: 8, title: '田忌赛马：资源少的人怎么赢', desc: '不是比谁资源多，是比谁会排列组合', isFree: false },
      { id: 'ech9', index: 9, title: '完璧归赵：蔺相如的分寸感', desc: '硬气的底线是你有退路', isFree: false },
      { id: 'ech10', index: 10, title: '毛遂自荐：被看见是一种能力', desc: '默默努力不够，还得在对的时候站出来', isFree: false },
      { id: 'ech11', index: 11, title: '商鞅之死：改革者的宿命', desc: '你改变了规则，规则也会反噬你', isFree: false },
      { id: 'ech12', index: 12, title: '终章：做一个清醒的温暖人', desc: '看透不说透，看清不冷漠', isFree: false },
    ],

    /** 试读摘要 */
    trialExcerpt: '战国策里的人物，几乎没有一个是"好人"。他们算计、隐忍、翻脸、背刺。但你把书合上，想想自己经历过的那些事——同事的微妙眼神、领导的话中有话、亲戚饭桌上的旁敲侧击——你会发现：两千年过去了，人性一点都没变……',

    /** 单买 vs 会员对比 */
    comparison: {
      single: {
        label: '单买本书',
        price: '49.90',
        features: ['永久阅读本书', '含全部 12 章', '附赠自检清单'],
      },
      member: {
        label: '开通年度会员',
        price: '199',
        unit: '/年',
        features: ['全站电子书畅读', '每月长文更新', '全部音频畅听', '共读活动优先参加', '新品专属折扣'],
        badge: '更划算',
      },
    },

    /** 用户评价 */
    reviews: [
      {
        id: 'ebr1',
        nickname: '棋局之外',
        avatar: 'https://picsum.photos/seed/ebr1/80/80',
        content: '读到苏秦那章的时候差点落泪。不是因为感动，是因为太真实了——你没成功之前，连亲人都不会认真听你说话。这本书让我看明白了很多关系的本质。',
        tag: '已读完',
      },
      {
        id: 'ebr2',
        nickname: '人间清醒',
        avatar: 'https://picsum.photos/seed/ebr2/80/80',
        content: '开始以为是教人腹黑的，读完才发现恰恰相反。作者说的"无情"不是冷血，是别用情绪替代判断。这个分寸感拿捏得太好了。',
        tag: '已读完',
      },
      {
        id: 'ebr3',
        nickname: '不惑',
        avatar: 'https://picsum.photos/seed/ebr3/80/80',
        content: '自检清单真的好用。每次开会之前看一遍，提醒自己哪些话该说、哪些话到嘴边咽回去。四十多岁才学会这些，但总比不学好。',
        tag: '读了 2 周',
      },
    ],
  },

  'eb-dingxin-shu': {
    id: 'eb-dingxin-shu',
    title: '定心：当庄子遇见你的焦虑',
    subtitle: '写给在深夜问"这一切有什么意义"的人',
    author: '一苇堂编辑部',
    authorDesc: '一苇堂核心内容团队。',
    authorAvatar: 'https://picsum.photos/seed/author-dx/120/120',
    cover: 'https://picsum.photos/seed/eb-dingxin/400/560',
    price: '39.90',
    originalPrice: '69.00',
    tags: ['电子书', '心性修炼', '新中式心理学'],
    readCount: 5120,
    wordCount: '6.2万字',
    chapterCount: 10,
    theme: '定心',

    highlights: [
      '将《庄子》核心篇章转化为可操作的心理练习',
      '每章附"定心五分钟"冥想引导文字',
      '适合睡前阅读，不刺激，不焦虑',
    ],

    audioGuide: {
      title: '庄子其实是最早的心理治疗师',
      duration: '14:20',
      plays: 3650,
    },

    chapters: [
      { id: 'dch1', index: 1, title: '逍遥游：什么是真正的自由', desc: '不是想做什么就做什么，是不被"应该"绑架', isFree: true },
      { id: 'dch2', index: 2, title: '齐物论：万物并作，各有其是', desc: '停止评判，从这一刻开始', isFree: true },
      { id: 'dch3', index: 3, title: '养生主：庖丁解牛的启示', desc: '游刃有余不是技巧高，是找到了缝隙', isFree: false },
      { id: 'dch4', index: 4, title: '人间世：如何在复杂世界中自处', desc: '不是逃离，是带着清醒生活', isFree: false },
      { id: 'dch5', index: 5, title: '德充符：真正的魅力来自内心', desc: '外在残缺，内在丰满的故事', isFree: false },
      { id: 'dch6', index: 6, title: '大宗师：与变化和解', desc: '接受无常，才能获得安宁', isFree: false },
      { id: 'dch7', index: 7, title: '应帝王：领导力的最高境界', desc: '最好的管理是让人忘记管理者的存在', isFree: false },
      { id: 'dch8', index: 8, title: '秋水：知道自己不知道', desc: '河伯见海才知道自己的渺小', isFree: false },
      { id: 'dch9', index: 9, title: '至乐：快乐的本质', desc: '追求快乐本身就是焦虑的来源', isFree: false },
      { id: 'dch10', index: 10, title: '终章：心安即是归处', desc: '你不需要找到意义，你本身就是意义', isFree: false },
    ],

    trialExcerpt: '庄子讲了一个故事：一棵大树，因为木材无用，所以没有被砍伐，活了几百年，成了方圆百里的地标。所有人在它下面乘凉、聚会、许愿。你看——"无用"才是最大的用……',

    comparison: {
      single: {
        label: '单买本书',
        price: '39.90',
        features: ['永久阅读本书', '含全部 10 章', '附赠定心练习'],
      },
      member: {
        label: '开通年度会员',
        price: '199',
        unit: '/年',
        features: ['全站电子书畅读', '每月长文更新', '全部音频畅听', '共读活动优先参加', '新品专属折扣'],
        badge: '更划算',
      },
    },

    reviews: [
      {
        id: 'dxr1',
        nickname: '云淡风轻',
        avatar: 'https://picsum.photos/seed/dxr1/80/80',
        content: '每晚睡前读一章，配合"定心五分钟"，一周后明显感觉入睡快了。这本书不讲大道理，就是陪你安安静静待一会儿。',
        tag: '已读完',
      },
      {
        id: 'dxr2',
        nickname: '大江东去',
        avatar: 'https://picsum.photos/seed/dxr2/80/80',
        content: '齐物论那章看了三遍。原来我大部分焦虑都来自"比较"——跟同龄人比、跟过去的自己比。停下来之后，世界忽然就安静了。',
        tag: '读了 3 周',
      },
    ],
  },
}

/* ========================================
   会员权益页 Mock 数据
   ======================================== */

export const membershipData = {
  /** 价格 */
  price: '149',
  originalPrice: '199',
  unit: '/年',
  priceNote: '首发限时价，恢复后 ¥199/年',

  /** 适合谁 */
  forWhom: [
    { icon: '思', text: '35-60岁，正在经历人生转折或瓶颈的你' },
    { icon: '读', text: '想读古典，但不知从哪本开始、怎么读的你' },
    { icon: '忙', text: '时间有限，希望每天10分钟就能有收获的你' },
    { icon: '伴', text: '独自读书太孤单，想找一群同频之人共读的你' },
  ],

  /** 6 项权益 */
  benefits: [
    {
      icon: '书',
      title: '全站电子书畅读',
      desc: '现有 12 本电子书 + 每月上新，涵盖看局、定心、家常三大主题。购买会员后全部免费阅读。',
      stat: '12+ 本',
    },
    {
      icon: '文',
      title: '每月长文精读',
      desc: '每月 2-4 篇深度长文，从一个现实问题出发，回到古典中寻找答案。',
      stat: '月更 2-4 篇',
    },
    {
      icon: '音',
      title: '全部音频畅听',
      desc: '名师导读、逐章精讲、睡前伴读，所有音频内容会员免费畅听。',
      stat: '60+ 期',
    },
    {
      icon: '友',
      title: '共读社群',
      desc: '加入会员专属共读群，每期共读活动优先报名，与同频读友交流心得。',
      stat: '500+ 人',
    },
    {
      icon: '惠',
      title: '新品专属折扣',
      desc: '所有新上线的微专栏、电子书，会员享专属折扣价，部分内容会员免费。',
      stat: '低至 7 折',
    },
    {
      icon: '礼',
      title: '专属身份标识',
      desc: '会员专属头像框与评论标识，在共读圈和评论区展示你的读书身份。',
      stat: '尊享标识',
    },
  ],

  /** 可读内容示例 */
  contentExamples: [
    { id: 'ce1', title: '无情者胜', type: '电子书', cover: 'https://picsum.photos/seed/ce1/200/280' },
    { id: 'ce2', title: '定心', type: '电子书', cover: 'https://picsum.photos/seed/ce2/200/280' },
    { id: 'ce3', title: '识局', type: '微专栏', cover: 'https://picsum.photos/seed/ce3/200/280' },
    { id: 'ce4', title: '家书里的中国', type: '音频课', cover: 'https://picsum.photos/seed/ce4/200/280' },
    { id: 'ce5', title: '不焦虑的活法', type: '微专栏', cover: 'https://picsum.photos/seed/ce5/200/280' },
    { id: 'ce6', title: '中年觉醒', type: '音频课', cover: 'https://picsum.photos/seed/ce6/200/280' },
  ],

  /** 单买 vs 会员对比 */
  comparison: {
    scenarios: [
      { label: '读 1 本电子书', single: '¥49.9', member: '免费' },
      { label: '读 3 本电子书', single: '¥149.7', member: '免费' },
      { label: '听全部音频课', single: '¥297', member: '免费' },
      { label: '参加共读活动', single: '¥99/期', member: '免费优先' },
      { label: '全年总花费', single: '¥500+', member: '¥149', highlight: true },
    ],
  },

  /** FAQ */
  faqs: [
    {
      q: '会员可以看所有内容吗？',
      a: '会员可畅读全站电子书、长文、音频内容，并可免费参加共读活动。部分限量实体周边需另行购买。',
    },
    {
      q: '会员到期后，已读内容还能看吗？',
      a: '会员期间的阅读记录、笔记、标注永久保留。到期后，会员专属内容需续费后继续阅读，单独购买的内容不受影响。',
    },
    {
      q: '可以先试试再决定吗？',
      a: '当然可以。每本电子书和微专栏都有免费试读章节，你可以先体验内容质量后再决定。我们对内容有信心。',
    },
    {
      q: '支持退款吗？',
      a: '开通后 7 天内，如未使用任何会员权益（未阅读付费内容），可申请全额退款。',
    },
    {
      q: '会员价格会涨吗？',
      a: '当前 ¥149/年是首发限时价，内容库持续扩充后将恢复 ¥199/年。已开通用户续费享原价。',
    },
  ],

  /** 用户评价 */
  reviews: [
    {
      id: 'mr1',
      nickname: '静水流深',
      avatar: 'https://picsum.photos/seed/mr1/80/80',
      content: '算了一笔账：开了会员之后，半年读了 5 本书、听了十几期音频，按单买算省了快 300 块。关键是内容确实好，不是那种凑数的。',
      tag: '会员 6 个月',
    },
    {
      id: 'mr2',
      nickname: '山间明月',
      avatar: 'https://picsum.photos/seed/mr2/80/80',
      content: '最喜欢共读群的氛围，没有广告、没有闲聊，就是一群中年人安安静静地分享读后感。这种社群太难得了。',
      tag: '会员 4 个月',
    },
    {
      id: 'mr3',
      nickname: '大器晚成',
      avatar: 'https://picsum.photos/seed/mr3/80/80',
      content: '本来只是想买一本《无情者胜》，看了会员权益觉得划算就开了。结果发现定心系列也特别适合我，赚到了。',
      tag: '会员 2 个月',
    },
  ],
}

/* ========================================
   阅读器 Mock 数据
   ======================================== */

export const readerArticles = {
  'ech1': {
    id: 'ech1',
    bookTitle: '无情者胜',
    chapterIndex: 1,
    title: '序章：所谓"无情"',
    subtitle: '不是没有感情，是不被感情绑架',
    author: '一苇堂编辑部',
    publishDate: '2026-03-15',
    readTime: '8 分钟',
    hasAudio: true,
    audioTitle: '序章导读音频',
    audioDuration: '12:30',
    isFree: true,
    paragraphs: [
      { type: 'text', content: '人和人之间的对话，表面上是一张平桌，两人对坐。但桌面之下，常常有坡度——有人在上，有人在下。这个坡度不是权力决定的，是"局"决定的。' },
      { type: 'text', content: '什么是局？' },
      { type: 'text', content: '局，不是阴谋，不是套路，不是厚黑学。局，是人与人之间那些没有说出口的东西——期待、立场、利益、面子、情绪——它们交织在一起，形成了一个看不见但真实存在的场域。' },
      { type: 'text', content: '你在单位开会，领导问"大家有什么意见"，你信以为真，噼里啪啦说了一堆。散会后，同事看你的眼神都变了。你不明白——明明是领导让说的啊？' },
      { type: 'text', content: '你不明白的，是局。' },
      { type: 'quote', content: '不知言之谓者，不可与言。知而不以时，不可与处。——《鬼谷子·权篇》' },
      { type: 'text', content: '鬼谷子这句话翻译过来就是：不懂得说话的分寸的人，没法跟他交流；懂得道理但不会把握时机的人，没法跟他共事。' },
      { type: 'text', content: '两千三百年前的话，放到今天的职场、饭局、家庭群里，一字不差地适用。' },
      { type: 'heading', content: '为什么要在中年读这些' },
      { type: 'text', content: '二十多岁的时候，你可能觉得这些东西太"老油条"了，你相信真诚就够了，相信实力说话，相信清者自清。' },
      { type: 'text', content: '到了三十五岁、四十岁，你开始发现：不是这样的。' },
      { type: 'text', content: '你发现那个能力不如你的人升了职，因为他"会来事儿"；你发现你掏心掏肺对朋友好，最后人家跟别人更亲；你发现你在家里付出最多，却最不被尊重。' },
      { type: 'text', content: '不是世界变了，是你终于看到了世界本来的样子。' },
      { type: 'text', content: '这个时候，你需要的不是鸡汤——"做自己就好"——那是一种回避。你也不需要厚黑学——教你算计别人——那是另一种迷失。' },
      { type: 'text', content: '你需要的，是看清。' },
      { type: 'heading', content: '这本书想做的事' },
      { type: 'text', content: '《战国策》是一本奇书。它记录了战国时期纵横家们的游说辞令、政治博弈、人际周旋。书里的人物——苏秦、张仪、范雎、蔺相如——每一个都不是"好人"，但每一个都活得清醒。' },
      { type: 'text', content: '他们忍辱、隐忍、揣摩、进退——不是因为他们没有感情，而是因为他们明白一件事：' },
      { type: 'quote', content: '在人性的棋局里，情绪是最大的破绽。' },
      { type: 'text', content: '所以，这本书叫"无情者胜"。但这个"无情"，不是冷血，不是冷漠，不是没有感情。' },
      { type: 'text', content: '它的意思是——不被感情绑架。' },
      { type: 'text', content: '看清人性不是为了利用人性，而是为了——在看清之后，依然选择做一个善良的人。但这一次，你的善良不再天真，你的真诚不再盲目，你的沉默不再是因为不懂，而是因为你选择了不说。' },
      { type: 'heading', content: '关于阅读这本书' },
      { type: 'text', content: '全书共十二章，每章从一个《战国策》的经典故事出发，落脚到你可能正在经历的现实场景。' },
      { type: 'text', content: '第一章和第二章可以免费试读，让你感受一下这本书的语感和思路。如果觉得对味儿，再决定要不要继续。' },
      { type: 'text', content: '不急。好东西值得慢慢看。' },
      { type: 'divider' },
      { type: 'text', content: '下一章：苏秦的逆袭——被至亲羞辱之后' },
    ],
    chapters: [
      { id: 'ech1', index: 1, title: '序章：所谓"无情"', isFree: true, isCurrent: true },
      { id: 'ech2', index: 2, title: '苏秦的逆袭：被至亲羞辱之后', isFree: true, isCurrent: false },
      { id: 'ech3', index: 3, title: '张仪受辱：舌头还在就够了', isFree: false, isCurrent: false },
      { id: 'ech4', index: 4, title: '冯谖弹铗：会哭的孩子有奶吃', isFree: false, isCurrent: false },
      { id: 'ech5', index: 5, title: '触龙说赵太后：最高级的说服', isFree: false, isCurrent: false },
      { id: 'ech6', index: 6, title: '邹忌讽齐王：照镜子的学问', isFree: false, isCurrent: false },
      { id: 'ech7', index: 7, title: '范雎的隐忍：差点被打死的宰相', isFree: false, isCurrent: false },
      { id: 'ech8', index: 8, title: '田忌赛马：资源少的人怎么赢', isFree: false, isCurrent: false },
      { id: 'ech9', index: 9, title: '完璧归赵：蔺相如的分寸感', isFree: false, isCurrent: false },
      { id: 'ech10', index: 10, title: '毛遂自荐：被看见是一种能力', isFree: false, isCurrent: false },
      { id: 'ech11', index: 11, title: '商鞅之死：改革者的宿命', isFree: false, isCurrent: false },
      { id: 'ech12', index: 12, title: '终章：做一个清醒的温暖人', isFree: false, isCurrent: false },
    ],
  },
}

/* ========================================
   个人中心 Mock 数据
   ======================================== */

export const profileData = {
  /** 用户信息 */
  user: {
    avatar: 'https://picsum.photos/seed/user-yw/120/120',
    nickname: '半山听雨',
    welcome: '欢迎回来，继续把这段读完',
    isMember: true,
    memberExpiry: '2027-04-15',
    readDays: 86,
    totalBooks: 5,
    totalNotes: 23,
  },

  /** 已购内容 */
  purchased: [
    { id: 'p1', title: '无情者胜', type: '电子书', cover: 'https://picsum.photos/seed/p1/200/280' },
    { id: 'p2', title: '识局', type: '微专栏', cover: 'https://picsum.photos/seed/p2/200/280' },
    { id: 'p3', title: '定心', type: '电子书', cover: 'https://picsum.photos/seed/p3/200/280' },
    { id: 'p4', title: '中年觉醒', type: '音频课', cover: 'https://picsum.photos/seed/p4/200/280' },
  ],

  /** 最近阅读 */
  recentReads: [
    {
      id: 'rr1',
      title: '无情者胜',
      chapter: '第5章 触龙说赵太后',
      cover: 'https://picsum.photos/seed/rr1/200/280',
      progress: 42,
      lastReadTime: '今天 09:15',
    },
    {
      id: 'rr2',
      title: '识局',
      chapter: '第3章 韩非子的忠告',
      cover: 'https://picsum.photos/seed/rr2/200/280',
      progress: 71,
      lastReadTime: '昨天 22:30',
    },
    {
      id: 'rr3',
      title: '定心',
      chapter: '第2章 齐物论',
      cover: 'https://picsum.photos/seed/rr3/200/280',
      progress: 28,
      lastReadTime: '3天前',
    },
  ],
}

/* ========================================
   专题列表页 Mock 数据
   ======================================== */

export const topicCategories = [
  {
    id: 'cat-shiju',
    name: '识局处世',
    desc: '看清人事格局，不在关系里吃亏',
    items: [
      { id: 'tc1', title: '识局：桌面是平的，下面常有坡度', type: '微专栏', tags: ['7天读完', '首单推荐'], price: '9.90', cover: 'https://picsum.photos/seed/tc1/400/260', readCount: 3856 },
      { id: 'tc2', title: '无情者胜：从《战国策》看人性与分寸', type: '电子书', tags: ['深度解读', '代表作'], price: '49.90', cover: 'https://picsum.photos/seed/tc2/400/260', readCount: 6230 },
      { id: 'tc3', title: '鬼谷子的说服术，今天还能用吗', type: '音频课', tags: ['18分钟', '名师'], price: '19.90', cover: 'https://picsum.photos/seed/tc3/400/260', readCount: 2340 },
    ],
  },
  {
    id: 'cat-xinxing',
    name: '心性修炼',
    desc: '安顿内心，从容面对不确定',
    items: [
      { id: 'tc4', title: '定心：焦虑的反面不是平静，是笃定', type: '微专栏', tags: ['7天读完', '好评如潮'], price: '9.90', cover: 'https://picsum.photos/seed/tc4/400/260', readCount: 4210 },
      { id: 'tc5', title: '不焦虑的活法：庄子的心灵处方', type: '音频课', tags: ['8讲', '21天练习'], price: '49.00', cover: 'https://picsum.photos/seed/tc5/400/260', readCount: 3120 },
      { id: 'tc6', title: '定心：当庄子遇见你的焦虑', type: '电子书', tags: ['新中式心理学'], price: '39.90', cover: 'https://picsum.photos/seed/tc6/400/260', readCount: 5120 },
    ],
  },
  {
    id: 'cat-jiating',
    name: '家庭教养',
    desc: '经营好最近的关系',
    items: [
      { id: 'tc7', title: '家书里的中国：曾国藩教子之道', type: '音频课', tags: ['10讲', '家书对照'], price: '58.00', cover: 'https://picsum.photos/seed/tc7/400/260', readCount: 1890 },
      { id: 'tc8', title: '颜氏家训：古人怎么教孩子', type: '微专栏', tags: ['5天读完'], price: '9.90', cover: 'https://picsum.photos/seed/tc8/400/260', readCount: 1560 },
    ],
  },
  {
    id: 'cat-lishi',
    name: '历史镜鉴',
    desc: '以史为鉴，看懂周期与规律',
    items: [
      { id: 'tc9', title: '中年觉醒：《论语》里的处世智慧', type: '音频课', tags: ['12讲', '本周上新'], price: '68.00', cover: 'https://picsum.photos/seed/tc9/400/260', readCount: 2780 },
      { id: 'tc10', title: '二十四史导读：精选正史经典篇章', type: '电子书', tags: ['历史', '12本'], price: '59.00', cover: 'https://picsum.photos/seed/tc10/400/260', readCount: 1230 },
    ],
  },
]

/* ========================================
   共读页 Mock 数据
   ======================================== */

export const coreadPageData = {
  /** 当前共读 */
  current: {
    id: 'crd-current',
    title: '《论语》精读 · 第三期',
    subtitle: '逐章逐句品读论语，每周两章，共读十二周',
    cover: 'https://picsum.photos/seed/crd-curr/750/400',
    desc: '配合名家注释与当代解读，体悟圣贤智慧。每周由领读人分享一篇导读文章，群内讨论，期末输出个人读后感。',
    schedule: '每周一、四更新',
    members: 128,
    progress: 45,
    startDate: '2026-03-03',
    endDate: '2026-05-25',
    rules: [
      '每周阅读 2 章原文 + 1 篇导读',
      '群内每周至少参与一次讨论',
      '期末提交 500 字以上读后感',
      '完成全部任务可获"共读证书"',
    ],
    leader: {
      name: '张老师',
      title: '北京大学中文系讲师',
      avatar: 'https://picsum.photos/seed/leader1/100/100',
    },
  },

  /** 即将开始 */
  upcoming: [
    {
      id: 'crd-up1',
      title: '《诗经》风雅颂之旅',
      desc: '从国风到大雅，领略三千年前的诗意中国。',
      cover: 'https://picsum.photos/seed/crd-up1/400/260',
      members: 52,
      startDate: '2026-04-28',
      duration: '8 周',
    },
    {
      id: 'crd-up2',
      title: '《史记》列传选读',
      desc: '精选十篇列传，跟随太史公笔触走进历史深处。',
      cover: 'https://picsum.photos/seed/crd-up2/400/260',
      members: 37,
      startDate: '2026-05-10',
      duration: '10 周',
    },
  ],

  /** 往期精选 */
  past: [
    { id: 'crd-past1', title: '《庄子》内篇导读', members: 86, status: '已结束', cover: 'https://picsum.photos/seed/crd-p1/400/260' },
    { id: 'crd-past2', title: '《孟子》七篇精读', members: 112, status: '已结束', cover: 'https://picsum.photos/seed/crd-p2/400/260' },
    { id: 'crd-past3', title: '《大学》《中庸》合读', members: 95, status: '已结束', cover: 'https://picsum.photos/seed/crd-p3/400/260' },
  ],
}

/* ========================================
   搜索页 Mock 数据
   ======================================== */

export const searchData = {
  hotKeywords: ['鬼谷子', '论语', '焦虑', '庄子', '职场', '中年', '家书', '苏东坡'],
  allItems: [
    { id: 's1', title: '无情者胜：从《战国策》看人性、权力与分寸', type: '电子书', cover: 'https://picsum.photos/seed/s1/200/280' },
    { id: 's2', title: '识局：桌面是平的，下面常有坡度', type: '微专栏', cover: 'https://picsum.photos/seed/s2/200/280' },
    { id: 's3', title: '定心：焦虑的反面不是平静，是笃定', type: '微专栏', cover: 'https://picsum.photos/seed/s3/200/280' },
    { id: 's4', title: '不焦虑的活法：庄子的心灵处方', type: '音频课', cover: 'https://picsum.photos/seed/s4/200/280' },
    { id: 's5', title: '鬼谷子的说服术，今天还能用吗', type: '音频课', cover: 'https://picsum.photos/seed/s5/200/280' },
    { id: 's6', title: '中年觉醒：《论语》里的处世智慧', type: '音频课', cover: 'https://picsum.photos/seed/s6/200/280' },
    { id: 's7', title: '家书里的中国：曾国藩教子之道', type: '音频课', cover: 'https://picsum.photos/seed/s7/200/280' },
    { id: 's8', title: '苏东坡如何面对人生低谷', type: '音频课', cover: 'https://picsum.photos/seed/s8/200/280' },
    { id: 's9', title: '定心：当庄子遇见你的焦虑', type: '电子书', cover: 'https://picsum.photos/seed/s9/200/280' },
  ],
}

/* ========================================
   FAQ Mock 数据
   ======================================== */

export const faqList = [
  { q: '一苇堂是什么？', a: '一苇堂是一个面向 35-60 岁中年人的古典智慧阅读平台。我们将古典经典转化为现代人可理解、可实践的内容，帮助你看清人、看懂局、看稳自己。' },
  { q: '内容需要付费吗？', a: '每本电子书和微专栏都有免费试读章节。单篇微专栏 ¥9.9 起，电子书 ¥39.9 起。开通年度会员（¥149/年）可畅读全部内容。' },
  { q: '会员可以看所有内容吗？', a: '会员可畅读全站电子书、长文、音频内容，并可免费参加共读活动。部分限量实体周边需另行购买。' },
  { q: '如何参加共读活动？', a: '在"共读"页面可查看当前和即将开始的共读活动，点击报名即可。会员可优先参加。每期共读通常持续 8-12 周。' },
  { q: '支持退款吗？', a: '会员开通后 7 天内未使用任何付费权益可全额退款。单独购买的电子书和微专栏因数字内容特性，一经购买不支持退款。' },
  { q: '可以在其他设备上阅读吗？', a: '目前仅支持微信小程序端。登录同一微信账号即可同步阅读进度和购买记录。' },
  { q: '如何联系客服？', a: '在"我的 → 帮助与支持"中可找到在线客服入口，工作时间（周一至周五 9:00-18:00）内通常 30 分钟内回复。' },
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
