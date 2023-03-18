export const total = 2672

export interface IconItem {
    kind: 'header' | 'icon'
    key: string
    name: string
    category: string
    keywords: string[]
    count: number
}

export const allCategoryCounts: Record<string, number> = {
    Base: 56,
    Safe: 18,
    Office: 215,
    Edit: 364,
    Emoji: 37,
    Measurement: 13,
    Abstract: 121,
    Money: 84,
    Animals: 36,
    Music: 57,
    Clothes: 72,
    Character: 33,
    Industry: 26,
    Makeups: 46,
    Graphics: 19,
    Build: 70,
    Arrows: 139,
    Communicate: 27,
    Travel: 101,
    Components: 8,
    Connect: 52,
    Operate: 31,
    Baby: 47,
    Energy: 32,
    Brand: 89,
    Life: 25,
    Time: 17,
    Foods: 121,
    Hands: 66,
    Datas: 24,
    Charts: 68,
    Sports: 84,
    Weather: 16,
    Constellation: 12,
    Health: 70,
    Hardware: 223,
    Peoples: 50,
    Game: 36,
    Others: 67
}

export const allCategoryItems: Record<string, IconItem> = {
    Base: {
        kind: 'header',
        key: 'Base',
        name: '基础',
        category: 'Base',
        keywords: ['base', '基础'],
        count: 56
    },
    Safe: {
        kind: 'header',
        key: 'Safe',
        name: '安全 & 防护',
        category: 'Safe',
        keywords: ['safe', '安全', '防护'],
        count: 18
    },
    Office: {
        kind: 'header',
        key: 'Office',
        name: '办公文档',
        category: 'Office',
        keywords: ['office', '办公文档'],
        count: 215
    },
    Edit: {
        kind: 'header',
        key: 'Edit',
        name: '编辑',
        category: 'Edit',
        keywords: ['edit', '编辑'],
        count: 364
    },
    Emoji: {
        kind: 'header',
        key: 'Emoji',
        name: '表情',
        category: 'Emoji',
        keywords: ['emoji', '表情'],
        count: 37
    },
    Measurement: {
        kind: 'header',
        key: 'Measurement',
        name: '测量 & 试验',
        category: 'Measurement',
        keywords: ['measurement', '测量', '试验'],
        count: 13
    },
    Abstract: {
        kind: 'header',
        key: 'Abstract',
        name: '抽象图形',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形'],
        count: 121
    },
    Money: {
        kind: 'header',
        key: 'Money',
        name: '电商财产',
        category: 'Money',
        keywords: ['money', '电商财产'],
        count: 84
    },
    Animals: {
        kind: 'header',
        key: 'Animals',
        name: '动物',
        category: 'Animals',
        keywords: ['animals', '动物'],
        count: 36
    },
    Music: {
        kind: 'header',
        key: 'Music',
        name: '多媒体音乐',
        category: 'Music',
        keywords: ['music', '多媒体音乐'],
        count: 57
    },
    Clothes: {
        kind: 'header',
        key: 'Clothes',
        name: '服饰',
        category: 'Clothes',
        keywords: ['clothes', '服饰'],
        count: 72
    },
    Character: {
        kind: 'header',
        key: 'Character',
        name: '符号标识',
        category: 'Character',
        keywords: ['character', '符号标识'],
        count: 33
    },
    Industry: {
        kind: 'header',
        key: 'Industry',
        name: '工业',
        category: 'Industry',
        keywords: ['industry', '工业'],
        count: 26
    },
    Makeups: {
        kind: 'header',
        key: 'Makeups',
        name: '化妆美妆',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆'],
        count: 46
    },
    Graphics: {
        kind: 'header',
        key: 'Graphics',
        name: '几何图形',
        category: 'Graphics',
        keywords: ['graphics', '几何图形'],
        count: 19
    },
    Build: {
        kind: 'header',
        key: 'Build',
        name: '建筑',
        category: 'Build',
        keywords: ['build', '建筑'],
        count: 70
    },
    Arrows: {
        kind: 'header',
        key: 'Arrows',
        name: '箭头方向',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向'],
        count: 139
    },
    Communicate: {
        kind: 'header',
        key: 'Communicate',
        name: '交流沟通',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通'],
        count: 27
    },
    Travel: {
        kind: 'header',
        key: 'Travel',
        name: '交通旅游',
        category: 'Travel',
        keywords: ['travel', '交通旅游'],
        count: 101
    },
    Components: {
        kind: 'header',
        key: 'Components',
        name: '界面组件',
        category: 'Components',
        keywords: ['components', '界面组件'],
        count: 8
    },
    Connect: {
        kind: 'header',
        key: 'Connect',
        name: '链接',
        category: 'Connect',
        keywords: ['connect', '链接'],
        count: 52
    },
    Operate: {
        kind: 'header',
        key: 'Operate',
        name: '美颜调整',
        category: 'Operate',
        keywords: ['operate', '美颜调整'],
        count: 31
    },
    Baby: {
        kind: 'header',
        key: 'Baby',
        name: '母婴儿童',
        category: 'Baby',
        keywords: ['baby', '母婴儿童'],
        count: 47
    },
    Energy: {
        kind: 'header',
        key: 'Energy',
        name: '能源 & 生命',
        category: 'Energy',
        keywords: ['energy', '能源', '生命'],
        count: 32
    },
    Brand: {
        kind: 'header',
        key: 'Brand',
        name: '品牌',
        category: 'Brand',
        keywords: ['brand', '品牌'],
        count: 89
    },
    Life: {
        kind: 'header',
        key: 'Life',
        name: '生活',
        category: 'Life',
        keywords: ['life', '生活'],
        count: 25
    },
    Time: {
        kind: 'header',
        key: 'Time',
        name: '时间日期',
        category: 'Time',
        keywords: ['time', '时间日期'],
        count: 17
    },
    Foods: {
        kind: 'header',
        key: 'Foods',
        name: '食品',
        category: 'Foods',
        keywords: ['foods', '食品'],
        count: 121
    },
    Hands: {
        kind: 'header',
        key: 'Hands',
        name: '手势动作',
        category: 'Hands',
        keywords: ['hands', '手势动作'],
        count: 66
    },
    Datas: {
        kind: 'header',
        key: 'Datas',
        name: '数据',
        category: 'Datas',
        keywords: ['datas', '数据'],
        count: 24
    },
    Charts: {
        kind: 'header',
        key: 'Charts',
        name: '数据图表',
        category: 'Charts',
        keywords: ['charts', '数据图表'],
        count: 68
    },
    Sports: {
        kind: 'header',
        key: 'Sports',
        name: '体育运动',
        category: 'Sports',
        keywords: ['sports', '体育运动'],
        count: 84
    },
    Weather: {
        kind: 'header',
        key: 'Weather',
        name: '天气',
        category: 'Weather',
        keywords: ['weather', '天气'],
        count: 16
    },
    Constellation: {
        kind: 'header',
        key: 'Constellation',
        name: '星座',
        category: 'Constellation',
        keywords: ['constellation', '星座'],
        count: 12
    },
    Health: {
        kind: 'header',
        key: 'Health',
        name: '医疗健康',
        category: 'Health',
        keywords: ['health', '医疗健康'],
        count: 70
    },
    Hardware: {
        kind: 'header',
        key: 'Hardware',
        name: '硬件',
        category: 'Hardware',
        keywords: ['hardware', '硬件'],
        count: 223
    },
    Peoples: {
        kind: 'header',
        key: 'Peoples',
        name: '用户人名',
        category: 'Peoples',
        keywords: ['peoples', '用户人名'],
        count: 50
    },
    Game: {
        kind: 'header',
        key: 'Game',
        name: '游戏',
        category: 'Game',
        keywords: ['game', '游戏'],
        count: 36
    },
    Others: {
        kind: 'header',
        key: 'Others',
        name: '其它',
        category: 'Others',
        keywords: ['others', '其它'],
        count: 67
    }
}

const allIconItems: IconItem[] = [
    {
        kind: 'header',
        key: 'Base',
        name: '基础',
        category: 'Base',
        keywords: ['base', '基础'],
        count: 56
    },
    {
        kind: 'icon',
        key: 'aiming',
        name: '瞄准',
        category: 'Base',
        keywords: ['base', '基础', 'aiming', '瞄准', '聚焦', '关注', '锁定', '定位'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'all-application',
        name: '全部',
        category: 'Base',
        keywords: ['base', '基础', 'all-application', '全部', '管理', '四块', '更多', '应用', '导航', '四宫格', '矩阵', '米亚格', '全部应用', '分类'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bill',
        name: '法案',
        category: 'Base',
        keywords: ['base', '基础', 'bill', '法案', '标签', '书签', '文本', '订单', '合同', '文档', '规则'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bookmark',
        name: '书签',
        category: 'Base',
        keywords: ['base', '基础', 'bookmark', '书签', '标签', '记录', '图书', '书本'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bookmark-one',
        name: '书签',
        category: 'Base',
        keywords: ['base', '基础', 'bookmark-one', '书签', '便签', '标记', '标签'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'camera',
        name: '相机',
        category: 'Base',
        keywords: ['base', '基础', 'camera', '相机', '拍照', '照片', '图像', '摄影'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'config',
        name: '配置',
        category: 'Base',
        keywords: ['base', '基础', 'config', '配置', '设置', '工具', '螺丝', '螺母', '齿轮'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'delete-two',
        name: '删除',
        category: 'Base',
        keywords: ['base', '基础', 'delete-two', '删除', '清除', '消除', '关闭'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dislike',
        name: '不喜欢',
        category: 'Base',
        keywords: ['base', '基础', 'dislike', '不喜欢', '喜欢', '讨厌', '心碎', '裂痕'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dislike-two',
        name: '不喜欢',
        category: 'Base',
        keywords: ['base', '基础', 'dislike-two', '不喜欢', '讨厌', '爱心'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'equalizer',
        name: '均衡器',
        category: 'Base',
        keywords: ['base', '基础', 'equalizer', '均衡器', '音量调节', '设置调整', '音频'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'female',
        name: '女性',
        category: 'Base',
        keywords: ['base', '基础', 'female', '女性', '女', '性别', '符号'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hamburger-button',
        name: '汉堡图标',
        category: 'Base',
        keywords: ['base', '基础', 'hamburger-button', '汉堡图标', '导航', '菜单', '更多', '展开'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'home',
        name: '首页',
        category: 'Base',
        keywords: ['base', '基础', 'home', '首页', '房子', '主页', '家'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hourglass-full',
        name: '沙漏满',
        category: 'Base',
        keywords: ['base', '基础', 'hourglass-full', '沙漏满', '沙漏', '等待', '时间', '加载'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hourglass-null',
        name: '沙漏空',
        category: 'Base',
        keywords: ['base', '基础', 'hourglass-null', '沙漏空', '沙漏', '等待', '时间', '加载'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'lightning',
        name: '闪电',
        category: 'Base',
        keywords: ['base', '基础', 'lightning', '闪电', '天气预报', '打雷', '下雨'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'like',
        name: '喜欢',
        category: 'Base',
        keywords: ['base', '基础', 'like', '喜欢', '关注', '收藏', '爱心', '热爱'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'loading',
        name: '加载',
        category: 'Base',
        keywords: ['base', '基础', 'loading', '加载', '等待', '转圈', '循环'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'loading-four',
        name: '加载4',
        category: 'Base',
        keywords: ['base', '基础', 'loading-four', '加载4', '等待', '加载', '转圈', '循环'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'male',
        name: '男性',
        category: 'Base',
        keywords: ['base', '基础', 'male', '男性', '男', '性别', '符号'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'more',
        name: '更多',
        category: 'Base',
        keywords: ['base', '基础', 'more', '更多', '点', '三点'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'more-app',
        name: '更多',
        category: 'Base',
        keywords: ['base', '基础', 'more-app', '更多', '全部', '应用'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'more-one',
        name: '更多1',
        category: 'Base',
        keywords: ['base', '基础', 'more-one', '更多1', '点', '三点', '更多'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'more-two',
        name: '更多2',
        category: 'Base',
        keywords: ['base', '基础', 'more-two', '更多2', '更多', '圆形', '三点'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pic',
        name: '照片',
        category: 'Base',
        keywords: ['base', '基础', 'pic', '照片', '图片', '画面', '图形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'power',
        name: '开关',
        category: 'Base',
        keywords: ['base', '基础', 'power', '开关', '关闭', '启动', '阀门', 'switch', '退出', '注销'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'preview-close',
        name: '预览-关闭',
        category: 'Base',
        keywords: ['base', '基础', 'preview-close', '预览-关闭', '隐藏', '不可见', '眼睛', '关闭'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'preview-close-one',
        name: '预览-关闭',
        category: 'Base',
        keywords: ['base', '基础', 'preview-close-one', '预览-关闭', '隐藏', '不可见', '眼睛', '关闭'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'preview-open',
        name: '预览-打开',
        category: 'Base',
        keywords: ['base', '基础', 'preview-open', '预览-打开', '可见', '眼睛', '打开', '展现', '睁开'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'radar',
        name: '雷达',
        category: 'Base',
        keywords: ['base', '基础', 'radar', '雷达', '瞄准', '聚焦', '关注', '锁定', '定位'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'refresh',
        name: '刷新',
        category: 'Base',
        keywords: ['base', '基础', 'refresh', '刷新', '旋转', '切换', '重置', '更新'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rss',
        name: '订阅',
        category: 'Base',
        keywords: ['base', '基础', 'rss', '订阅', '关注', '标记', '便签', '标签'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'save',
        name: '保存',
        category: 'Base',
        keywords: ['base', '基础', 'save', '保存', '存储', '暂存', '草稿', '文件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'save-one',
        name: '保存硬盘',
        category: 'Base',
        keywords: ['base', '基础', 'save-one', '保存硬盘', '保存', '存储', '暂存', '硬盘', '文件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'search',
        name: '搜索',
        category: 'Base',
        keywords: ['base', '基础', 'search', '搜索', '查找', '放大镜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'setting',
        name: '设置',
        category: 'Base',
        keywords: ['base', '基础', 'setting', '设置', '齿轮', '螺丝', '螺母', '配置', '工具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'setting-config',
        name: '设置配置',
        category: 'Base',
        keywords: ['base', '基础', 'setting-config', '设置配置', '调节', '音量调节', '设置调节', '音频'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'setting-one',
        name: '设置',
        category: 'Base',
        keywords: ['base', '基础', 'setting-one', '设置', '齿轮', '螺丝', '螺母', '配置', '工具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'setting-three',
        name: '设置',
        category: 'Base',
        keywords: ['base', '基础', 'setting-three', '设置', '太阳能', '阳光', '配置'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'setting-two',
        name: '设置',
        category: 'Base',
        keywords: ['base', '基础', 'setting-two', '设置', '齿轮', '螺丝', '螺母', '配置', '工具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'share',
        name: '分享',
        category: 'Base',
        keywords: ['base', '基础', 'share', '分享', '转发', '跳转', '打开', '窗口', '外链'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'share-three',
        name: '分享3',
        category: 'Base',
        keywords: ['base', '基础', 'share-three', '分享3', '分享', '跳转', '转发', '返回'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sleep',
        name: '睡眠',
        category: 'Base',
        keywords: ['base', '基础', 'sleep', '睡眠', '夜晚', '打呼噜', '酣睡', '休息', '黑夜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'system',
        name: '系统',
        category: 'Base',
        keywords: ['base', '基础', 'system', '系统', '更多', '四块'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tag',
        name: '标签',
        category: 'Base',
        keywords: ['base', '基础', 'tag', '标签', '标记', '便签', '不关注', '取消订阅'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tag-one',
        name: '标签',
        category: 'Base',
        keywords: ['base', '基础', 'tag-one', '标签', '便签', '折扣', '标记', '价签'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tips',
        name: '提示',
        category: 'Base',
        keywords: ['base', '基础', 'tips', '提示', '灯泡', '创意', '灯光', '灵感'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tool',
        name: '工具',
        category: 'Base',
        keywords: ['base', '基础', 'tool', '工具', '优化', '扳手', '设置', '维修'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'translate',
        name: '翻译',
        category: 'Base',
        keywords: ['base', '基础', 'translate', '翻译', '多语言', '国际化', '中文', '英文'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'unlike',
        name: '不喜欢',
        category: 'Base',
        keywords: ['base', '基础', 'unlike', '不喜欢', '取消关注', '取消收藏', '爱心'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'waterfalls-h',
        name: '瀑布流横向',
        category: 'Base',
        keywords: ['base', '基础', 'waterfalls-h', '瀑布流横向', '瀑布', '流程', '布局', '排版', '界面', '顺序', '列表'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'waterfalls-v',
        name: '瀑布流纵向',
        category: 'Base',
        keywords: ['base', '基础', 'waterfalls-v', '瀑布流纵向', '瀑布', '流程', '布局', '排版', '界面', '顺序', '列表'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'zoom-in',
        name: '放大',
        category: 'Base',
        keywords: ['base', '基础', 'zoom-in', '放大', '搜索', '查找'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'zoom-out',
        name: '缩小',
        category: 'Base',
        keywords: ['base', '基础', 'zoom-out', '缩小', '搜索', '查找'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'suspended-window',
        name: '悬浮窗',
        category: 'Base',
        keywords: ['base', '基础', 'suspended-window', '悬浮窗', '悬浮框', '悬浮', '画中画', 'float'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Safe',
        name: '安全 & 防护',
        category: 'Safe',
        keywords: ['safe', '安全', '防护'],
        count: 18
    },
    {
        kind: 'icon',
        key: 'alarm',
        name: '警报',
        category: 'Safe',
        keywords: ['safe', '安全', '防护', 'alarm', '警报', '警灯', '灯', '警示', '灵感', '提示'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'balance-two',
        name: '天平',
        category: 'Safe',
        keywords: ['safe', '安全', '防护', 'balance-two', '天平', '公平', '法律', '平衡', '衡量', '比重'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bug',
        name: '程序问题',
        category: 'Safe',
        keywords: ['safe', '安全', '防护', 'bug', '程序问题', '甲壳虫', '问题', '损坏', '事故', 'BUG', '报错'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'caution',
        name: '报错',
        category: 'Safe',
        keywords: ['safe', '安全', '防护', 'caution', '报错', '错误', '警示', '提示', '报警'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fire-extinguisher',
        name: '灭火器',
        category: 'Safe',
        keywords: ['safe', '安全', '防护', 'fire-extinguisher', '灭火器', '救火', '扑灭', '消防队'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'harm',
        name: '危害',
        category: 'Safe',
        keywords: ['safe', '安全', '防护', 'harm', '危害', '危险', '盾牌', '防护失败'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'imbalance',
        name: '失衡天平',
        category: 'Safe',
        keywords: ['safe', '安全', '防护', 'imbalance', '失衡天平', '比重', '测量', '衡量', '不公平'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'key',
        name: '钥匙',
        category: 'Safe',
        keywords: ['safe', '安全', '防护', 'key', '钥匙', '答案', '开锁', '方法', '密码'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'keyhole',
        name: '钥匙孔',
        category: 'Safe',
        keywords: ['safe', '安全', '防护', 'keyhole', '钥匙孔'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'protect',
        name: '保护',
        category: 'Safe',
        keywords: ['safe', '安全', '防护', 'protect', '保护', '防卫', '盾牌', '安全通过', '安保'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'protection',
        name: '保护',
        category: 'Safe',
        keywords: ['safe', '安全', '防护', 'protection', '保护', '雨伞', '下雨', '庇护', '天气', '护盾'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'radiation',
        name: '辐射',
        category: 'Safe',
        keywords: ['safe', '安全', '防护', 'radiation', '辐射', '有害', '毒害', '危险', '警示', '风扇'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'report',
        name: '举报',
        category: 'Safe',
        keywords: ['safe', '安全', '防护', 'report', '举报', '检举', '告发', '报告', '警报', '灯', '警示', '灵感'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shield',
        name: '安全',
        category: 'Safe',
        keywords: ['safe', '安全', '防护', 'shield', '保护', '护盾', '安保'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shield-add',
        name: '安全增加',
        category: 'Safe',
        keywords: ['safe', '安全', '防护', 'shield-add', '安全增加', '保护', '增加防护', '医疗', '安保'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'umbrella',
        name: '雨伞',
        category: 'Safe',
        keywords: ['safe', '安全', '防护', 'umbrella', '雨伞', '保护', '下雨', '庇护', '天气', '护盾'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'umbrella-one',
        name: '雨伞',
        category: 'Safe',
        keywords: ['safe', '安全', '防护', 'umbrella-one', '雨伞', '保护', '下雨', '庇护', '天气', '护盾'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'umbrella-two',
        name: '雨伞',
        category: 'Safe',
        keywords: ['safe', '安全', '防护', 'umbrella-two', '雨伞', '防潮', '保护', '下雨', '庇护', '天气', '护盾'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Office',
        name: '办公文档',
        category: 'Office',
        keywords: ['office', '办公文档'],
        count: 215
    },
    {
        kind: 'icon',
        key: 'abnormal',
        name: '异常',
        category: 'Office',
        keywords: ['office', '办公文档', 'abnormal', '异常', '报错', '提示', '提醒'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'accept-email',
        name: '接受邮件',
        category: 'Office',
        keywords: ['office', '办公文档', 'accept-email', '接受邮件', '邮件', '收件箱', '转发邮件', '回复邮件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'add-picture',
        name: '图片添加',
        category: 'Office',
        keywords: ['office', '办公文档', 'add-picture', '图片添加'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'add-print',
        name: '加印',
        category: 'Office',
        keywords: ['office', '办公文档', 'add-print', '加印', '印记', '印章', '打印', '印刷'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'add-web',
        name: '添加网页',
        category: 'Office',
        keywords: ['office', '办公文档', 'add-web', '添加网页'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'agreement',
        name: '协议',
        category: 'Office',
        keywords: ['office', '办公文档', 'agreement', '协议', '文档', '规则', '详情', '文章', '短文', '合同'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'announcement',
        name: '公告',
        category: 'Office',
        keywords: ['office', '办公文档', 'announcement', '公告'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'application-effect',
        name: '应用效果',
        category: 'Office',
        keywords: ['office', '办公文档', 'application-effect', '应用效果', '效果', '圆环', '圆形', '连接', '关联'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'audio-file',
        name: '音频文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'audio-file', '音频文件', '歌曲', '音乐', '音频', '声音'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'book',
        name: '书籍',
        category: 'Office',
        keywords: ['office', '办公文档', 'book', '书籍', '书本', '笔记', '文件', '知识', '图书', '学习', '信息'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'book-one',
        name: '书籍1',
        category: 'Office',
        keywords: ['office', '办公文档', 'book-one', '书籍1', '书本', '笔记', '文件', '知识', '图书', '书籍', '学习', '信息'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'book-open',
        name: '书籍-打开',
        category: 'Office',
        keywords: ['office', '办公文档', 'book-open', '书籍-打开', '书本', '笔记', '文件', '打开书本', '知识', '图书', '书籍', '学习', '信息'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bookshelf',
        name: '书籍',
        category: 'Office',
        keywords: ['office', '办公文档', 'bookshelf', '书籍', '知识', '书架', '学习', '信息'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'box',
        name: '盒子',
        category: 'Office',
        keywords: ['office', '办公文档', 'box', '盒子', '箱子', '纸盒', '容器', '办公用品', '收纳'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chinese',
        name: '中文',
        category: 'Office',
        keywords: ['office', '办公文档', 'chinese', '中文', '中', '汉语', '汉字', '语文'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chinese-one',
        name: '中文1',
        category: 'Office',
        keywords: ['office', '办公文档', 'chinese-one', '中文1'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'clipboard',
        name: '剪切板',
        category: 'Office',
        keywords: ['office', '办公文档', 'clipboard', '剪切板', '画板', '黏贴板', '公告板', '电池', '没电了', '记录', '账单', '条例'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'collect-picture',
        name: '图片收集',
        category: 'Office',
        keywords: ['office', '办公文档', 'collect-picture', '图片收集'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'collection-files',
        name: '收藏文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'collection-files', '收藏文件', '收藏', '星星', '评级', '级别'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'compression',
        name: '压缩',
        category: 'Office',
        keywords: ['office', '办公文档', 'compression', '压缩', '挤压', '文章', '文档', '小说', '合同', '规则', '详情'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'copy-one',
        name: '复制',
        category: 'Office',
        keywords: ['office', '办公文档', 'copy-one', '复制', '文章', '文档', '小说', '合同', '规则', '详情'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'data-file',
        name: '数据文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'data-file', '数据文件', '数据', '指标', '增长', '趋势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'date-comes-back',
        name: '回传数据',
        category: 'Office',
        keywords: ['office', '办公文档', 'date-comes-back', '回传数据', '数据', '指标', '增长', '趋势', '回传', '传送', '连接'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'disabaled-web',
        name: '网页禁用',
        category: 'Office',
        keywords: ['office', '办公文档', 'disabaled-web', '网页禁用'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'disabled-picture',
        name: '图片禁用',
        category: 'Office',
        keywords: ['office', '办公文档', 'disabled-picture', '图片禁用'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'doc-add',
        name: '文档添加',
        category: 'Office',
        keywords: ['office', '办公文档', 'doc-add', '文档添加', '文本', '文件', '添加'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'doc-detail',
        name: '文档详情',
        category: 'Office',
        keywords: ['office', '办公文档', 'doc-detail', '文档详情', '文本', '文件', '排版'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'doc-fail',
        name: '文档失败',
        category: 'Office',
        keywords: ['office', '办公文档', 'doc-fail', '文档失败', '文本', '文件', '失败'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'doc-search',
        name: '文档搜索',
        category: 'Office',
        keywords: ['office', '办公文档', 'doc-search', '文档搜索', '文件', '查找内容', '文本'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'doc-search-two',
        name: '文档搜索',
        category: 'Office',
        keywords: ['office', '办公文档', 'doc-search-two', '文档搜索', '文本', '文件', '查找'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'doc-success',
        name: '文档成功',
        category: 'Office',
        keywords: ['office', '办公文档', 'doc-success', '文档成功', '文本', '文件', '成功'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'document-folder',
        name: '文档架子',
        category: 'Office',
        keywords: ['office', '办公文档', 'document-folder', '文档架子', '文档', '书架', '办公', '图书', '文件', '资料'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'down-picture',
        name: '图片下载',
        category: 'Office',
        keywords: ['office', '办公文档', 'down-picture', '图片下载'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'download-web',
        name: '网页下载',
        category: 'Office',
        keywords: ['office', '办公文档', 'download-web', '网页下载'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'editor',
        name: '编辑',
        category: 'Office',
        keywords: ['office', '办公文档', 'editor', '编辑', '修改', '撰写', '书写', '写作', '抄袭', '文章', '文档', '小说', '合同', '规则', '详情'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'email-block',
        name: '邮件屏蔽',
        category: 'Office',
        keywords: ['office', '办公文档', 'email-block', '邮件屏蔽', '邮件', '信件', '文件夹', '禁止查看', '错误提示'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'email-delect',
        name: '邮件删除',
        category: 'Office',
        keywords: ['office', '办公文档', 'email-delect', '邮件删除', '邮件', '信件', '文件夹', '删除邮件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'email-down',
        name: '邮件下载',
        category: 'Office',
        keywords: ['office', '办公文档', 'email-down', '邮件下载', '邮件', '信件', '文件夹', '下载邮件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'email-fail',
        name: '邮件发送失败',
        category: 'Office',
        keywords: ['office', '办公文档', 'email-fail', '邮件发送失败', '邮件', '信件', '文件夹', '删除邮件', '关闭邮件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'email-lock',
        name: '邮件锁定',
        category: 'Office',
        keywords: ['office', '办公文档', 'email-lock', '邮件锁定', '邮件', '信件', '文件夹', '保密邮件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'email-push',
        name: '邮件推送',
        category: 'Office',
        keywords: ['office', '办公文档', 'email-push', '邮件推送', '邮件', '信件', '文件夹', '转发邮件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'email-search',
        name: '邮件搜索',
        category: 'Office',
        keywords: ['office', '办公文档', 'email-search', '邮件搜索', '邮件', '信件', '文件夹', '搜索邮件', '查找邮件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'email-security',
        name: '邮件安全',
        category: 'Office',
        keywords: ['office', '办公文档', 'email-security', '邮件安全', '邮件', '信件', '文件夹', '保护邮件', '安全'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'email-successfully',
        name: '邮件发送成功',
        category: 'Office',
        keywords: ['office', '办公文档', 'email-successfully', '邮件发送成功', '邮件', '信件', '文件夹', '发送成功'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'english',
        name: '英文',
        category: 'Office',
        keywords: ['office', '办公文档', 'english', '英文', '英', '英语', '西文'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'envelope',
        name: '信封',
        category: 'Office',
        keywords: ['office', '办公文档', 'envelope', '信封', '邮件', '袋子', '纸袋', '折叠'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'envelope-one',
        name: '信封1',
        category: 'Office',
        keywords: ['office', '办公文档', 'envelope-one', '信封1', '邮件', '信件', '文件夹', '多封邮件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'error-picture',
        name: '图片错误',
        category: 'Office',
        keywords: ['office', '办公文档', 'error-picture', '图片错误'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'excel',
        name: '数据统计工具',
        category: 'Office',
        keywords: ['office', '办公文档', 'excel', '数据统计工具', '表格', '文档', '统计', '分析', '汇总'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fail-picture',
        name: '图片错误',
        category: 'Office',
        keywords: ['office', '办公文档', 'fail-picture', '图片错误'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-addition',
        name: '文件添加',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-addition', '文件添加', '文件', '添加'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-addition-one',
        name: '文件添加1',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-addition-one', '文件添加1', '文件', '添加'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-cabinet',
        name: '文件柜',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-cabinet', '文件柜', '文件', '柜子', '抽屉'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-code',
        name: '代码文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-code', '代码文件', '文件', '代码'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-code-one',
        name: '代码文件1',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-code-one', '代码文件1', '文件', '代码'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-collection',
        name: '收藏文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-collection', '收藏文件', '文件', '爱心', '收藏'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-collection-one',
        name: '收藏文件1',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-collection-one', '收藏文件1', '文件', '爱心', '收藏'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-conversion',
        name: '转换文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-conversion', '转换文件', '文件', '转换'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-conversion-one',
        name: '转换文件1',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-conversion-one', '转换文件1', '文件', '转换'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-date',
        name: '到期文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-date', '到期文件', '文件', '时间'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-date-one',
        name: '到期文件1',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-date-one', '到期文件1', '文件', '时间'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-display',
        name: '显示文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-display', '显示文件', '文件', '显示', '展示'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-display-one',
        name: '显示文件1',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-display-one', '显示文件1', '文件', '显示', '展示'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-doc',
        name: '文档',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-doc', '文档', '文章', '小说', '合同', '规则', '详情'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-editing',
        name: '编辑文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-editing', '编辑文件', '文件', '编辑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-editing-one',
        name: '编辑文件1',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-editing-one', '编辑文件1', '文件', '编辑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-excel',
        name: '文件-excel',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-excel', '文件-excel', '文件', '表格', '数据', '办公', '文稿'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-failed',
        name: '文件失败',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-failed', '文件失败', '文件', '关闭', '失败'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-failed-one',
        name: '文件失败1',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-failed-one', '文件失败1', '文件', '关闭', '失败'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-focus',
        name: '重点文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-focus', '重点文件', '文件', '重点', '星星'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-focus-one',
        name: '重点文件1',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-focus-one', '重点文件1', '文件', '重点', '星星'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-gif',
        name: '文件-gif',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-gif', '文件-gif', '文件', '动图', 'GIF'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-hash',
        name: '井号文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-hash', '井号文件', '文件', '井号'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-hash-one',
        name: '井号文件1',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-hash-one', '井号文件1', '文件', '井号'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-hiding',
        name: '隐藏文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-hiding', '隐藏文件', '文件', '隐藏'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-hiding-one',
        name: '隐藏文件1',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-hiding-one', '隐藏文件1', '文件', '隐藏'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-jpg',
        name: '文件-jpg',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-jpg', '文件-jpg', '文件', '图像', '照片', 'JPG'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-lock',
        name: '加密文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-lock', '加密文件', '文件', '锁定'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-lock-one',
        name: '加密文件1',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-lock-one', '加密文件1', '文件', '锁定'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-music',
        name: '音乐文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-music', '音乐文件', '文件', '音乐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-music-one',
        name: '音乐文件1',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-music-one', '音乐文件1', '文件', '音乐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-pdf',
        name: '文件-pdf',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-pdf', '文件-pdf', '文件', 'PDF'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-pdf-one',
        name: 'pdf文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-pdf-one', 'pdf文件', 'pdf文档', '文件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-ppt',
        name: 'ppt文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-ppt', 'ppt文件', '幻灯片', '展示', '预览', '汇报', '演示'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-protection',
        name: '文件保护',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-protection', '文件保护', '文件', '安全', '保护'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-protection-one',
        name: '文件保护1',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-protection-one', '文件保护1', '文件', '安全', '保护'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-quality',
        name: '优质文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-quality', '优质文件', '文件', '优质'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-quality-one',
        name: '优质文件1',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-quality-one', '优质文件1', '文件', '优质'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-question',
        name: '存疑文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-question', '存疑文件', '疑问', '问好'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-removal',
        name: '移除文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-removal', '移除文件', '文件', '移除'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-removal-one',
        name: '移除文件1',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-removal-one', '移除文件1', '文件', '移除'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-search',
        name: '文件查找',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-search', '文件查找', '查找', '搜索', '检索'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-search-one',
        name: '文件搜索1',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-search-one', '文件搜索1', '文件', '搜索'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-search-two',
        name: '文件搜索',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-search-two', '文件搜索', '文件', '搜索'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-settings',
        name: '文件设置',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-settings', '文件设置', '文件', '设置'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-settings-one',
        name: '文件设置1',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-settings-one', '文件设置1', '文件', '设置'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-staff',
        name: '人事文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-staff', '人事文件', '文件', '人员', '人力'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-staff-one',
        name: '人事文件1',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-staff-one', '人事文件1', '文件', '人员', '人力'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-success',
        name: '成功文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-success', '成功文件', '文件', '成功', '正确'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-success-one',
        name: '成功文件1',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-success-one', '成功文件1', '文件', '成功', '正确'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-text',
        name: '文本文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-text', '文本文件', '文件', '字体', '文本'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-text-one',
        name: '文本文件1',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-text-one', '文本文件1', '文件', '字体', '文本'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-tips',
        name: '警示文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-tips', '警示文件', '提示', '报错'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-tips-one',
        name: '警示文件1',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-tips-one', '警示文件1', '提示', '报错'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-txt',
        name: '文件-txt',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-txt', '文件-txt', '文本文件', '文稿', '写字', '文字'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-txt-one',
        name: 'txt文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-txt-one', 'txt文件', '文章', '文档', '小说', '合同', '规则', '详情'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-withdrawal',
        name: '文件撤销',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-withdrawal', '文件撤销', '撤销', '返回'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-withdrawal-one',
        name: '文件撤销1',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-withdrawal-one', '文件撤销1', '撤销', '返回'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-word',
        name: '文件-word',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-word', '文件-word', '文件', '文档', '文字', 'Word', '办公', '文案'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'file-zip',
        name: '压缩文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'file-zip', '压缩文件', '文件', '压缩', '解压包', '下载', '资料', '文档', '资源包'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'find-one',
        name: '搜查',
        category: 'Office',
        keywords: ['office', '办公文档', 'find-one', '搜查', '扫描', '检索', '搜索', '查找', '寻找'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder',
        name: '文件夹',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder', '文件夹', '文件本', '机密文件', '信封'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-block',
        name: '禁用文件夹',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-block', '禁用文件夹', '禁用文件', '文件夹'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-block-one',
        name: '禁用文件夹1',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-block-one', '禁用文件夹1', '禁用文件', '文件夹'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-close',
        name: '文件夹-关',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-close', '文件夹-关', '文件夹', '关闭', '私密文件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-code',
        name: '代码文件夹',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-code', '代码文件夹', '代码文件', '文件夹', '展开文件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-code-one',
        name: '代码文件夹1',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-code-one', '代码文件夹1', '代码文件', '文件夹', '展开文件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-conversion',
        name: '转换文件夹',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-conversion', '转换文件夹', '转换文件', '文件夹'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-conversion-one',
        name: '转换文件夹1',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-conversion-one', '转换文件夹1', '转换文件', '文件夹'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-download',
        name: '文件夹-下载',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-download', '文件夹-下载', '文件夹', '下载文件', '保存本地'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-failed',
        name: '失败文件夹',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-failed', '失败文件夹', '失败文件', '文件夹', '关闭', '删除'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-failed-one',
        name: '失败文件夹1',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-failed-one', '失败文件夹1', '失败文件', '文件夹', '关闭', '删除'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-focus',
        name: '收藏文件夹',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-focus', '收藏文件夹', '收藏文件', '文件夹', '星级文件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-focus-one',
        name: '收藏文件夹1',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-focus-one', '收藏文件夹1', '收藏文件', '文件夹', '星级文件', '标记'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-lock',
        name: '加密文件夹',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-lock', '加密文件夹', '加密文件', '文件夹'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-lock-one',
        name: '加密文件夹1',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-lock-one', '加密文件夹1', '加密文件', '私密文件', '文件夹'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-minus',
        name: '文件夹-删除',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-minus', '文件夹-删除', '文件夹', '删除', '办公', '减去'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-music',
        name: '音乐文件夹',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-music', '音乐文件夹', '音乐文件', '文件夹'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-music-one',
        name: '音乐文件夹1',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-music-one', '音乐文件夹1', '音乐文件', '文件夹'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-open',
        name: '文件夹-开',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-open', '文件夹-开', '文件夹', '办公', '打开', '文档'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-plus',
        name: '文件夹-添加',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-plus', '文件夹-添加', '文件夹', '添加', '办公', '编辑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-protection',
        name: '文件夹保护',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-protection', '文件夹保护', '文件保护', '文件夹'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-protection-one',
        name: '文件夹保护1',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-protection-one', '文件夹保护1', '文件保护', '文件夹'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-quality',
        name: '高质量文件夹',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-quality', '高质量文件夹', '钻石文件', '文件夹'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-quality-one',
        name: '高质量文件夹1',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-quality-one', '高质量文件夹1', '钻石文件', '文件夹'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-search',
        name: '搜索文件夹',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-search', '搜索文件夹', '搜索文件', '文件夹'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-search-one',
        name: '搜索文件夹1',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-search-one', '搜索文件夹1', '搜索文件', '文件夹'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-settings',
        name: '文件夹设置',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-settings', '文件夹设置', '文件设置', '文件夹'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-settings-one',
        name: '文件夹设置1',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-settings-one', '文件夹设置1', '文件设置', '文件夹'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-success',
        name: '成功文件夹',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-success', '成功文件夹', '成功文件', '文件夹', '完成'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-success-one',
        name: '成功文件夹1',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-success-one', '成功文件夹1', '成功文件', '文件夹', '完成'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-upload',
        name: '文件夹-上传',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-upload', '文件夹-上传', '文件夹', '上传文件', '本地上传'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-withdrawal',
        name: '退出文件夹',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-withdrawal', '退出文件夹', '退出文件', '文件夹', '转发'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-withdrawal-one',
        name: '退出文件夹1',
        category: 'Office',
        keywords: ['office', '办公文档', 'folder-withdrawal-one', '退出文件夹1', '退出文件', '文件夹', '转发'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'font-search',
        name: '字体搜索',
        category: 'Office',
        keywords: ['office', '办公文档', 'font-search', '字体搜索', '字体', '检索', '搜索', '查找'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'form-one',
        name: '形式',
        category: 'Office',
        keywords: ['office', '办公文档', 'form-one', '形式', '布局', '样式', '模块', '单元'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'format',
        name: '格式',
        category: 'Office',
        keywords: ['office', '办公文档', 'format', '格式', '类型', '分类', '清除', '刷子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'healthy-recognition',
        name: '健康认知',
        category: 'Office',
        keywords: ['office', '办公文档', 'healthy-recognition', '健康认知', '心', '健康', '收藏', '喜欢'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hourglass',
        name: '沙漏',
        category: 'Office',
        keywords: ['office', '办公文档', 'hourglass', '沙漏', '沙子', '时间', '计时'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'image-files',
        name: '图片文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'image-files', '图片文件', '图片', '图形', '图像', '影相'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'inbox',
        name: '收件箱',
        category: 'Office',
        keywords: ['office', '办公文档', 'inbox', '收件箱', '信箱', '邮箱', '邮件', '信件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'inbox-download-r',
        name: '收件箱下载',
        category: 'Office',
        keywords: ['office', '办公文档', 'inbox-download-r', '收件箱下载', '收件箱', '下载', '下传'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'inbox-in',
        name: '收件下载',
        category: 'Office',
        keywords: ['office', '办公文档', 'inbox-in', '收件下载', '收件箱', '信箱', '邮箱', '邮件', '信件', '下载', '接收'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'inbox-out',
        name: '收件上载',
        category: 'Office',
        keywords: ['office', '办公文档', 'inbox-out', '收件上载', '收件箱', '信箱', '邮箱', '邮件', '信件', '上传', '上载', '发送'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'inbox-r',
        name: '收件箱',
        category: 'Office',
        keywords: ['office', '办公文档', 'inbox-r', '收件箱', '文件', '信封', '邮件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'inbox-success',
        name: '收件成功',
        category: 'Office',
        keywords: ['office', '办公文档', 'inbox-success', '收件成功', '收件箱', '收件', '成功', '完成', '邮件', '信件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'inbox-success-r',
        name: '收件箱成功',
        category: 'Office',
        keywords: ['office', '办公文档', 'inbox-success-r', '收件箱成功', '收件箱', '成功', '发送成功'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'inbox-upload-r',
        name: '收件箱上传',
        category: 'Office',
        keywords: ['office', '办公文档', 'inbox-upload-r', '收件箱上传', '收件箱', '上载', '上传'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'increase',
        name: '涨幅',
        category: 'Office',
        keywords: ['office', '办公文档', 'increase', '涨幅', '增长', '上升', '提升', '升高'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'inspection',
        name: '检查',
        category: 'Office',
        keywords: ['office', '办公文档', 'inspection', '检查', '查找', '精确', '日历'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'instruction',
        name: '指令',
        category: 'Office',
        keywords: ['office', '办公文档', 'instruction', '指令', '代码', '编程', '命令'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'invalid-files',
        name: '失效文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'invalid-files', '失效文件', '失效', '禁用', '无效', '终止'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'label',
        name: '标签',
        category: 'Office',
        keywords: ['office', '办公文档', 'label', '标签', '标记', '页签'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'level',
        name: '级别',
        category: 'Office',
        keywords: ['office', '办公文档', 'level', '级别', '层次', '等级', '高度'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'link',
        name: '链接',
        category: 'Office',
        keywords: ['office', '办公文档', 'link', '链接', '回形针', '附件', '文件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'list-view',
        name: '列表视图',
        category: 'Office',
        keywords: ['office', '办公文档', 'list-view', '列表视图', '列表', '表单'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'locking-picture',
        name: '图片锁定',
        category: 'Office',
        keywords: ['office', '办公文档', 'locking-picture', '图片锁定'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'locking-web',
        name: '锁定网页',
        category: 'Office',
        keywords: ['office', '办公文档', 'locking-web', '锁定网页'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'log',
        name: '日志',
        category: 'Office',
        keywords: ['office', '办公文档', 'log', '日志', '笔记本', '记录', '文档', '文本'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mail',
        name: '邮件',
        category: 'Office',
        keywords: ['office', '办公文档', 'mail', '邮件', '信封', '消息', '文件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mail-download',
        name: '邮件下载',
        category: 'Office',
        keywords: ['office', '办公文档', 'mail-download', '邮件下载', '信封', '邮件', '邮寄', '文件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mail-edit',
        name: '邮件编辑',
        category: 'Office',
        keywords: ['office', '办公文档', 'mail-edit', '邮件编辑', '邮件', '信件', '文件夹', '编辑邮件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mail-open',
        name: '已读邮件',
        category: 'Office',
        keywords: ['office', '办公文档', 'mail-open', '已读邮件', '邮箱', '邮件', '信息', '打开', '收件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mail-package',
        name: '邮件包',
        category: 'Office',
        keywords: ['office', '办公文档', 'mail-package', '邮件包', '邮件', '信件', '文件夹', '邮件组'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mail-review',
        name: '邮件查阅',
        category: 'Office',
        keywords: ['office', '办公文档', 'mail-review', '邮件查阅', '邮件', '信件', '文件夹', '查看'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mail-unpacking',
        name: '邮件打开',
        category: 'Office',
        keywords: ['office', '办公文档', 'mail-unpacking', '邮件打开', '邮件', '信件', '文件夹', '打开'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'market-analysis',
        name: '市场分析',
        category: 'Office',
        keywords: ['office', '办公文档', 'market-analysis', '市场分析', '分析', '数据', '趋势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'moving-picture',
        name: '图片',
        category: 'Office',
        keywords: ['office', '办公文档', 'moving-picture', '图片'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'new-picture',
        name: '新图片',
        category: 'Office',
        keywords: ['office', '办公文档', 'new-picture', '新图片'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'newspaper-folding',
        name: '报纸折叠',
        category: 'Office',
        keywords: ['office', '办公文档', 'newspaper-folding', '报纸折叠', '纸张', '折页', '传单'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'notebook',
        name: '笔记本',
        category: 'Office',
        keywords: ['office', '办公文档', 'notebook', '笔记本', '文档', '通讯录', '文本', '文件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'notebook-and-pen',
        name: '笔记本和笔',
        category: 'Office',
        keywords: ['office', '办公文档', 'notebook-and-pen', '笔记本和笔', '学习用品', '办公用品'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'notebook-one',
        name: '笔记本',
        category: 'Office',
        keywords: ['office', '办公文档', 'notebook-one', '笔记本', '文档', '通讯录', '文件', '文本'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'notepad',
        name: '记事本',
        category: 'Office',
        keywords: ['office', '办公文档', 'notepad', '记事本', '记录', '账单', '条例', '画板', '黏贴板', '公告板'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'notes',
        name: '笔记',
        category: 'Office',
        keywords: ['office', '办公文档', 'notes', '笔记', '文件', '纸张', '文本', '列表', '文档'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'optimize',
        name: '美化',
        category: 'Office',
        keywords: ['office', '办公文档', 'optimize', '美化', '魔棒', '优化', '星星', '幸运棒'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'order',
        name: '订单',
        category: 'Office',
        keywords: ['office', '办公文档', 'order', '订单', '抢单', '文档', '发票', '记录', '计分牌', '电磁', '充电中'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'paperclip',
        name: '回形针',
        category: 'Office',
        keywords: ['office', '办公文档', 'paperclip', '回形针', '夹子', '针', '页签'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'permissions',
        name: '权限',
        category: 'Office',
        keywords: ['office', '办公文档', 'permissions', '权限', '限制', '身份', '角色', '账户', '个人中心'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'picture',
        name: '图片',
        category: 'Office',
        keywords: ['office', '办公文档', 'picture', '图片', '图形', '图像', '影相'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'picture-album',
        name: '相册',
        category: 'Office',
        keywords: ['office', '办公文档', 'picture-album', '相册'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'play-two',
        name: '播放器',
        category: 'Office',
        keywords: ['office', '办公文档', 'play-two', '播放器', '播放', '视频'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'receive',
        name: '接收库',
        category: 'Office',
        keywords: ['office', '办公文档', 'receive', '接收库', '收纳', '容纳', '接收', '回收箱'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'schedule',
        name: '日程表',
        category: 'Office',
        keywords: ['office', '办公文档', 'schedule', '日程表', '时间', '日历', '课程表', '日程', '记录', '牌子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'security',
        name: '安全',
        category: 'Office',
        keywords: ['office', '办公文档', 'security', '安全', '保护伞', '雨伞'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'send-email',
        name: '发送邮件',
        category: 'Office',
        keywords: ['office', '办公文档', 'send-email', '发送邮件', '邮件', '信件', '文件夹', '转发'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'seo-folder',
        name: '文件夹',
        category: 'Office',
        keywords: ['office', '办公文档', 'seo-folder', '文件夹', '收藏', '整理', '收纳', '代码文件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'setting-web',
        name: '网页设置',
        category: 'Office',
        keywords: ['office', '办公文档', 'setting-web', '网页设置'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'source-code',
        name: '网页代码',
        category: 'Office',
        keywords: ['office', '办公文档', 'source-code', '网页代码'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'success-picture',
        name: '图片成功',
        category: 'Office',
        keywords: ['office', '办公文档', 'success-picture', '图片成功'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'table',
        name: '表格',
        category: 'Office',
        keywords: ['office', '办公文档', 'table', '表格', '笔记本', '纸张', '文件', '文本'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'termination-file',
        name: '终止文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'termination-file', '终止文件', '无效', '失效', '禁用'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'text-message',
        name: '文字讯息',
        category: 'Office',
        keywords: ['office', '办公文档', 'text-message', '文字讯息', '音讯', '消息', '文字', '资讯'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'text-recognition',
        name: '文字识别',
        category: 'Office',
        keywords: ['office', '办公文档', 'text-recognition', '文字识别', '识别', '文字', '字体'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ticket',
        name: '券',
        category: 'Office',
        keywords: ['office', '办公文档', 'ticket', '券', '饭票', '电影票', '活动票', '门票', '优惠券'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ticket-one',
        name: '票',
        category: 'Office',
        keywords: ['office', '办公文档', 'ticket-one', '票', '饭票', '电影票', '活动票', '门票', '优惠券'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'timed-mail',
        name: '定时发送',
        category: 'Office',
        keywords: ['office', '办公文档', 'timed-mail', '定时发送', '邮件', '信件', '文件夹', '定时转发'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'transform',
        name: '转变',
        category: 'Office',
        keywords: ['office', '办公文档', 'transform', '转变', '转化', '连接', '旋转', '回旋', '回传'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'upload-picture',
        name: '图片上传',
        category: 'Office',
        keywords: ['office', '办公文档', 'upload-picture', '图片上传'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'upload-web',
        name: '网页上传',
        category: 'Office',
        keywords: ['office', '办公文档', 'upload-web', '网页上传'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'video-conference',
        name: '视频会议',
        category: 'Office',
        keywords: ['office', '办公文档', 'video-conference', '视频会议'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'video-file',
        name: '视频文件',
        category: 'Office',
        keywords: ['office', '办公文档', 'video-file', '视频文件', '影视', '影片', '录像', '资料'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'video-one',
        name: '视频',
        category: 'Office',
        keywords: ['office', '办公文档', 'video-one', '视频', '摄像', '电影', '投影', '影像'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'view-list',
        name: '详情列表',
        category: 'Office',
        keywords: ['office', '办公文档', 'view-list', '详情列表', 'list', '列表', '表格', '文件', '文本'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'web-page',
        name: '网页',
        category: 'Office',
        keywords: ['office', '办公文档', 'web-page', '网页'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Edit',
        name: '编辑',
        category: 'Edit',
        keywords: ['edit', '编辑'],
        count: 364
    },
    {
        kind: 'icon',
        key: 'add-four',
        name: '添加',
        category: 'Edit',
        keywords: ['edit', '编辑', 'add-four', '添加', '聚焦', '精准', '扫描', '识别'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'add-item',
        name: '添加同级条目',
        category: 'Edit',
        keywords: ['edit', '编辑', 'add-item', '添加同级条目', '拖拽', '复制'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'add-mode',
        name: '增加模式',
        category: 'Edit',
        keywords: ['edit', '编辑', 'add-mode', '增加模式', '模式', '亮度', '对比度', '增加'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'add-pic',
        name: '增加图片',
        category: 'Edit',
        keywords: ['edit', '编辑', 'add-pic', '增加图片', '添加', '图片', '相册'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'add-subset',
        name: '添加子条目',
        category: 'Edit',
        keywords: ['edit', '编辑', 'add-subset', '添加子条目', '创建'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'add-text',
        name: '文字大小',
        category: 'Edit',
        keywords: ['edit', '编辑', 'add-text', '文字大小', '书写', '文案'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'add-text-two',
        name: '文字',
        category: 'Edit',
        keywords: ['edit', '编辑', 'add-text-two', '文字', '书写', '文案'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'add-three',
        name: '添加',
        category: 'Edit',
        keywords: ['edit', '编辑', 'add-three', '添加', '聚焦', '精准', '扫描', '识别'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'adjacent-item',
        name: '相邻条目',
        category: 'Edit',
        keywords: ['edit', '编辑', 'adjacent-item', '相邻条目', '链接', '排序'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'adjustment',
        name: '加减调整',
        category: 'Edit',
        keywords: ['edit', '编辑', 'adjustment', '加减调整', '计算'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'afferent',
        name: '传入',
        category: 'Edit',
        keywords: ['edit', '编辑', 'afferent', '传入', '传送', '传输', '向左', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'afferent-two',
        name: '传入',
        category: 'Edit',
        keywords: ['edit', '编辑', 'afferent-two', '传入', '传送', '传输', '向左', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-bottom',
        name: '底对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-bottom', '底对齐', '下对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-bottom-two',
        name: '下对齐2',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-bottom-two', '下对齐2', '底对齐', '排版方式'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-horizontal-center-two',
        name: '水平居中对齐2',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-horizontal-center-two', '水平居中对齐2', '居中对齐', '排版方式', '横向居中'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-horizontally',
        name: '水平对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-horizontally', '水平对齐', '左右居中对齐', '中间对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-left',
        name: '左对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-left', '左对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-left-one',
        name: '文字左对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-left-one', '文字左对齐', '文字', '左对其', '排版'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-left-two',
        name: '左对齐2',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-left-two', '左对齐2', '左对齐', '排版方式'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-right',
        name: '右对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-right', '右对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-right-one',
        name: '文字右对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-right-one', '文字右对齐', '文字', '右对其', '排版'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-right-two',
        name: '右对齐2',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-right-two', '右对齐2', '右对齐', '排版方式'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-text-both',
        name: '文字两边对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-text-both', '文字两边对齐', '两端对齐', '文字对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-text-both-one',
        name: '文字两边对齐1',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-text-both-one', '文字两边对齐1', '文字对齐', '左右对齐', '两边对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-text-bottom',
        name: '文字底对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-text-bottom', '文字底对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-text-bottom-one',
        name: '文字底对齐1',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-text-bottom-one', '文字底对齐1', '文字对齐', '左底对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-text-center',
        name: '文字居中',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-text-center', '文字居中', '居中对齐', '文字对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-text-center-one',
        name: '文字居中1',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-text-center-one', '文字居中1', '文字对齐', '中对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-text-left',
        name: '文字居左',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-text-left', '文字居左', '左对齐', '文字对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-text-left-one',
        name: '文字居左1',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-text-left-one', '文字居左1', '文字对齐', '左对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-text-middle',
        name: '文字中间对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-text-middle', '文字中间对齐', '居中对齐', '居中', '聚集'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-text-middle-one',
        name: '文字中间对齐1',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-text-middle-one', '文字中间对齐1', '文字对齐', '左居中对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-text-right',
        name: '文字居右',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-text-right', '文字居右', '右对齐', '文字对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-text-right-one',
        name: '文字居右1',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-text-right-one', '文字居右1', '文字对齐', '右对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-text-top',
        name: '文字顶对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-text-top', '文字顶对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-text-top-one',
        name: '文字顶对齐1',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-text-top-one', '文字顶对齐1', '文字对齐', '左顶对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-top',
        name: '顶对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-top', '顶对齐', '顶部对齐', '上对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-top-two',
        name: '上对齐2',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-top-two', '上对齐2', '顶对齐', '上对齐', '排版方式', '纵向居中'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-vertical-center-two',
        name: '垂直居中对齐2',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-vertical-center-two', '垂直居中对齐2', '居中对齐', '排版方式', '纵向居中'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'align-vertically',
        name: '垂直对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'align-vertically', '垂直对齐', '中间随其', '上下居中对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'alignment-bottom-center',
        name: '底部中心对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'alignment-bottom-center', '底部中心对齐', '排版方式', '布局'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'alignment-bottom-left',
        name: '底部左对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'alignment-bottom-left', '底部左对齐', '排版方式', '布局'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'alignment-bottom-right',
        name: '底部右对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'alignment-bottom-right', '底部右对齐', '排版方式', '布局'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'alignment-horizontal-bottom',
        name: '水平下对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'alignment-horizontal-bottom', '水平下对齐', '排版方式', '布局'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'alignment-horizontal-center',
        name: '水平居中对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'alignment-horizontal-center', '水平居中对齐', '排版方式', '布局'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'alignment-horizontal-top',
        name: '水平上对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'alignment-horizontal-top', '水平上对齐', '排版方式', '布局'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'alignment-left-bottom',
        name: '左侧下对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'alignment-left-bottom', '左侧下对齐', '排版方式', '布局'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'alignment-left-center',
        name: '左侧居中对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'alignment-left-center', '左侧居中对齐', '排版方式', '布局'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'alignment-left-top',
        name: '左侧上对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'alignment-left-top', '左侧上对齐', '排版方式', '布局'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'alignment-right-bottom',
        name: '右侧下对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'alignment-right-bottom', '右侧下对齐', '排版方式', '布局'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'alignment-right-center',
        name: '右侧居中对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'alignment-right-center', '右侧居中对齐', '排版方式', '布局'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'alignment-right-top',
        name: '右侧上对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'alignment-right-top', '右侧上对齐', '排版方式', '布局'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'alignment-top-center',
        name: '顶部居中对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'alignment-top-center', '顶部居中对齐', '排版方式', '布局'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'alignment-top-left',
        name: '顶部左对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'alignment-top-left', '顶部左对齐', '排版方式', '布局'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'alignment-top-right',
        name: '顶部右对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'alignment-top-right', '顶部右对齐', '排版方式', '布局'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'alignment-vertical-center',
        name: '垂直居中对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'alignment-vertical-center', '垂直居中对齐', '排版方式', '布局'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'alignment-vertical-left',
        name: '垂直左对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'alignment-vertical-left', '垂直左对齐', '排版方式', '布局'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'alignment-vertical-right',
        name: '垂直右对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'alignment-vertical-right', '垂直右对齐', '排版方式', '布局'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'alphabetical-sorting',
        name: '字母顺序',
        category: 'Edit',
        keywords: ['edit', '编辑', 'alphabetical-sorting', '字母顺序', '排序', '顺序'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'alphabetical-sorting-two',
        name: '字母倒序',
        category: 'Edit',
        keywords: ['edit', '编辑', 'alphabetical-sorting-two', '字母倒序', '排序', '顺序'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'aperture-priority',
        name: '光圈优先',
        category: 'Edit',
        keywords: ['edit', '编辑', 'aperture-priority', '光圈优先', '相机', '光圈', '照相'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'application-menu',
        name: '应用菜单',
        category: 'Edit',
        keywords: ['edit', '编辑', 'application-menu', '应用菜单', '菜单', '应用', '更多'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'application-two',
        name: '应用',
        category: 'Edit',
        keywords: ['edit', '编辑', 'application-two', '应用', '其他', '分类'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'auto-focus',
        name: '自定对焦',
        category: 'Edit',
        keywords: ['edit', '编辑', 'auto-focus', '自定对焦', '对焦', '中心', '靶心', '旋转'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'auto-height-one',
        name: '自动高度1',
        category: 'Edit',
        keywords: ['edit', '编辑', 'auto-height-one', '自动高度1', '高度自适应', '上下自动', '固定宽'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'auto-line-height',
        name: '自动行高',
        category: 'Edit',
        keywords: ['edit', '编辑', 'auto-line-height', '自动行高', '文字', '高度自适应', '固定高'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'auto-line-width',
        name: '自动列宽',
        category: 'Edit',
        keywords: ['edit', '编辑', 'auto-line-width', '自动列宽', '文字', '宽度自适应', '固定宽'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'auto-width',
        name: '自动宽度',
        category: 'Edit',
        keywords: ['edit', '编辑', 'auto-width', '自动宽度', '宽度自适应', '左右自动', '双向箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'auto-width-one',
        name: '自动宽度1',
        category: 'Edit',
        keywords: ['edit', '编辑', 'auto-width-one', '自动宽度1', '宽度自适应', '左右自动', '固定高'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'back',
        name: '上一步',
        category: 'Edit',
        keywords: ['edit', '编辑', 'back', '上一步', '撤销', '返回', '上一层', '快退', '后退', '跳转', '向左'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'background-color',
        name: '背景颜色',
        category: 'Edit',
        keywords: ['edit', '编辑', 'background-color', '背景颜色', '油漆桶', '粉刷', '上色', '染料'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'block',
        name: '块公式',
        category: 'Edit',
        keywords: ['edit', '编辑', 'block', '块公式', '公式'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bottom-bar',
        name: '底栏',
        category: 'Edit',
        keywords: ['edit', '编辑', 'bottom-bar', '底栏', '布局', '排版', '下'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'brightness',
        name: '亮度',
        category: 'Edit',
        keywords: ['edit', '编辑', 'brightness', '亮度', '显示', '显示屏', '明暗', '太阳'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bring-forward',
        name: '上层',
        category: 'Edit',
        keywords: ['edit', '编辑', 'bring-forward', '上层', '顶层', '向上'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bring-to-front',
        name: '最上层',
        category: 'Edit',
        keywords: ['edit', '编辑', 'bring-to-front', '最上层', '图层', '层级', '顶层'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bring-to-front-one',
        name: '移到前面',
        category: 'Edit',
        keywords: ['edit', '编辑', 'bring-to-front-one', '移到前面', '置于顶层', '路径查找器', '移动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bytedance-applets',
        name: '字节跳动小程序',
        category: 'Edit',
        keywords: ['edit', '编辑', 'bytedance-applets', '字节跳动小程序', '小程序', '字节跳动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'calendar',
        name: '日历',
        category: 'Edit',
        keywords: ['edit', '编辑', 'calendar', '日历', '日期', '时间', '排期'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'center-alignment',
        name: '居中对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'center-alignment', '居中对齐', '居中', '对齐方式', '排版方式'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chart-pie-one',
        name: '数据图',
        category: 'Edit',
        keywords: ['edit', '编辑', 'chart-pie-one', '数据图', '圆形图', '饼状图', '图表'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'check-correct',
        name: '对勾',
        category: 'Edit',
        keywords: ['edit', '编辑', 'check-correct', '对勾', '正确', '复选', '多选', '选中'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'checkbox',
        name: '多选框',
        category: 'Edit',
        keywords: ['edit', '编辑', 'checkbox', '多选框'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'clear',
        name: '清除',
        category: 'Edit',
        keywords: ['edit', '编辑', 'clear', '清除', '删除', '擦除', '扫把', '清理', '环保', '卫生'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'clear-format',
        name: '清除格式',
        category: 'Edit',
        keywords: ['edit', '编辑', 'clear-format', '清除格式', '清除', '恢复', '字体格式', '橡皮擦'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'code',
        name: '代码',
        category: 'Edit',
        keywords: ['edit', '编辑', 'code', '代码', '代码序列', '字段'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'code-brackets',
        name: '大括号',
        category: 'Edit',
        keywords: ['edit', '编辑', 'code-brackets', '大括号', '代码括号', '代码块', '开发'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'code-download',
        name: '下载代码',
        category: 'Edit',
        keywords: ['edit', '编辑', 'code-download', '下载代码', '下载', '代码'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'column',
        name: '列',
        category: 'Edit',
        keywords: ['edit', '编辑', 'column', '列', '列表', '表格', '左右布局'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'components',
        name: '组件',
        category: 'Edit',
        keywords: ['edit', '编辑', 'components', '组件', '组合', '图形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'copy',
        name: '复制',
        category: 'Edit',
        keywords: ['edit', '编辑', 'copy', '复制', '拷贝', '克隆', '叠加', '重叠'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'copy-link',
        name: '复制链接',
        category: 'Edit',
        keywords: ['edit', '编辑', 'copy-link', '复制链接', '地址', '绑定', '关联'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'curve-adjustment',
        name: '曲线调整',
        category: 'Edit',
        keywords: ['edit', '编辑', 'curve-adjustment', '曲线调整', '调整', '曲线', '动效'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cutting',
        name: '裁切',
        category: 'Edit',
        keywords: ['edit', '编辑', 'cutting', '裁切', '裁剪', '剪切'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cutting-one',
        name: '裁切',
        category: 'Edit',
        keywords: ['edit', '编辑', 'cutting-one', '裁切', '裁剪', '剪切', '剪刀'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'damage-map',
        name: '故障图',
        category: 'Edit',
        keywords: ['edit', '编辑', 'damage-map', '故障图', '图片', '故障', '断裂', '破坏'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dark-mode',
        name: '夜晚模式',
        category: 'Edit',
        keywords: ['edit', '编辑', 'dark-mode', '夜晚模式', '模式', '亮度', '对比度', '黑暗'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'deeplink',
        name: '链接',
        category: 'Edit',
        keywords: ['edit', '编辑', 'deeplink', '链接', '深度链接', '连接', '联系'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'delete',
        name: '删除',
        category: 'Edit',
        keywords: ['edit', '编辑', 'delete', '删除', '垃圾桶', '勒色桶', '回收'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'delete-five',
        name: '删除5',
        category: 'Edit',
        keywords: ['edit', '编辑', 'delete-five', '删除5'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'delete-four',
        name: '删除4',
        category: 'Edit',
        keywords: ['edit', '编辑', 'delete-four', '删除4'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'delete-mode',
        name: '删除模式',
        category: 'Edit',
        keywords: ['edit', '编辑', 'delete-mode', '删除模式', '模式', '亮度', '对比度', '减少'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'delete-one',
        name: '删除',
        category: 'Edit',
        keywords: ['edit', '编辑', 'delete-one', '删除', '垃圾桶', '勒色桶', '回收'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'delete-themes',
        name: '删除主题',
        category: 'Edit',
        keywords: ['edit', '编辑', 'delete-themes', '删除主题', '删除', '清理', '移至废纸篓', '垃圾桶'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'delete-three',
        name: '删除',
        category: 'Edit',
        keywords: ['edit', '编辑', 'delete-three', '删除', '关闭', '错误', '乘号'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'difference-set',
        name: '差异集',
        category: 'Edit',
        keywords: ['edit', '编辑', 'difference-set', '差异集', '交集', '路径查找器', '排除'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'direction',
        name: '方向',
        category: 'Edit',
        keywords: ['edit', '编辑', 'direction', '方向', '游戏', '左右', '手柄'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'direction-adjustment',
        name: '方向校准',
        category: 'Edit',
        keywords: ['edit', '编辑', 'direction-adjustment', '方向校准', '方向箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'direction-adjustment-three',
        name: '方向校准',
        category: 'Edit',
        keywords: ['edit', '编辑', 'direction-adjustment-three', '方向校准', '方向箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'direction-adjustment-two',
        name: '方向校准',
        category: 'Edit',
        keywords: ['edit', '编辑', 'direction-adjustment-two', '方向校准', '方向箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'distortion',
        name: '扭曲',
        category: 'Edit',
        keywords: ['edit', '编辑', 'distortion', '扭曲', '不规则', '网格'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'distribute-horizontal-spacing',
        name: '水平间距分布',
        category: 'Edit',
        keywords: ['edit', '编辑', 'distribute-horizontal-spacing', '水平间距分布', '横向居中对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'distribute-horizontally',
        name: '水平分布',
        category: 'Edit',
        keywords: ['edit', '编辑', 'distribute-horizontally', '水平分布', '间距'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'distribute-vertical-spacing',
        name: '垂直间距分布',
        category: 'Edit',
        keywords: ['edit', '编辑', 'distribute-vertical-spacing', '垂直间距分布', '纵向居中对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'distribute-vertically',
        name: '垂直分布',
        category: 'Edit',
        keywords: ['edit', '编辑', 'distribute-vertically', '垂直分布', '间距'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dividing-line',
        name: '分界线',
        category: 'Edit',
        keywords: ['edit', '编辑', 'dividing-line', '分界线', '分割线', '界线', '马路', '道路'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dividing-line-one',
        name: '分割线',
        category: 'Edit',
        keywords: ['edit', '编辑', 'dividing-line-one', '分割线', '区分', '线段'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'done-all',
        name: '完成全部',
        category: 'Edit',
        keywords: ['edit', '编辑', 'done-all', '完成全部', '全部完成', '打勾', '勾选', '全选'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dot',
        name: '点',
        category: 'Edit',
        keywords: ['edit', '编辑', 'dot', '点', '圆点', '黑点', '圈', '实心'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'download-four',
        name: '下载',
        category: 'Edit',
        keywords: ['edit', '编辑', 'download-four', '下载', '向下', '指向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'drag',
        name: '拖拽',
        category: 'Edit',
        keywords: ['edit', '编辑', 'drag', '拖拽', '拉', '位移', '移动', '六点'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'drop-down-list',
        name: '下拉列表',
        category: 'Edit',
        keywords: ['edit', '编辑', 'drop-down-list', '下拉列表', '下拉', '列表', '表单', '向下', '下展'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'drop-shadow-down',
        name: '下投影',
        category: 'Edit',
        keywords: ['edit', '编辑', 'drop-shadow-down', '下投影', '圆', '阴影'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'drop-shadow-left',
        name: '左投影',
        category: 'Edit',
        keywords: ['edit', '编辑', 'drop-shadow-left', '左投影', '圆', '阴影'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'drop-shadow-right',
        name: '右投影',
        category: 'Edit',
        keywords: ['edit', '编辑', 'drop-shadow-right', '右投影', '圆', '阴影'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'drop-shadow-up',
        name: '上投影',
        category: 'Edit',
        keywords: ['edit', '编辑', 'drop-shadow-up', '上投影', '圆', '阴影'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'edit',
        name: '编辑',
        category: 'Edit',
        keywords: ['edit', '编辑', '撰写', '修改', '输入'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'edit-movie',
        name: '影片剪辑',
        category: 'Edit',
        keywords: ['edit', '编辑', 'edit-movie', '影片剪辑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'edit-one',
        name: '编辑1',
        category: 'Edit',
        keywords: ['edit', '编辑', 'edit-one', '编辑1', '撰写', '修改', '文本', '输入'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'edit-two',
        name: '编辑2',
        category: 'Edit',
        keywords: ['edit', '编辑', 'edit-two', '编辑2', '撰写', '修改', '输入'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'editing',
        name: '剪辑',
        category: 'Edit',
        keywords: ['edit', '编辑', 'editing', '剪辑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'electric-wave',
        name: '电波',
        category: 'Edit',
        keywords: ['edit', '编辑', 'electric-wave', '电波', '电流', '心电图', '股票', '浮动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'endpoint-displacement',
        name: '端点位移',
        category: 'Edit',
        keywords: ['edit', '编辑', 'endpoint-displacement', '端点位移'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'endpoint-flat',
        name: '方头端点',
        category: 'Edit',
        keywords: ['edit', '编辑', 'endpoint-flat', '方头端点', '端点类型'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'endpoint-round',
        name: '圆头端点',
        category: 'Edit',
        keywords: ['edit', '编辑', 'endpoint-round', '圆头端点', '端点类型', '圆头断点'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'endpoint-square',
        name: '平头端点',
        category: 'Edit',
        keywords: ['edit', '编辑', 'endpoint-square', '平头端点', '端点类型'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'enter-the-keyboard',
        name: '输入键盘',
        category: 'Edit',
        keywords: ['edit', '编辑', 'enter-the-keyboard', '输入键盘', '输入', '录入', '键盘', '打字'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'equal-ratio',
        name: '等比',
        category: 'Edit',
        keywords: ['edit', '编辑', 'equal-ratio', '等比', '一比一', '还原'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'excel-one',
        name: '表格',
        category: 'Edit',
        keywords: ['edit', '编辑', 'excel-one', '表格', '电子文件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'exclude-selection',
        name: '排除选择',
        category: 'Edit',
        keywords: ['edit', '编辑', 'exclude-selection', '排除选择', '剪切', '相交'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'expand-down',
        name: '展开',
        category: 'Edit',
        keywords: ['edit', '编辑', 'expand-down', '展开', '向下展开', '浮层', '抽屉', '示例'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'expand-left',
        name: '展开',
        category: 'Edit',
        keywords: ['edit', '编辑', 'expand-left', '展开', '向右展开', '浮层', '抽屉', '示例'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'expand-left-and-right',
        name: '左右扩大',
        category: 'Edit',
        keywords: ['edit', '编辑', 'expand-left-and-right', '左右扩大', '间距'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'expand-right',
        name: '展开',
        category: 'Edit',
        keywords: ['edit', '编辑', 'expand-right', '展开', '向左展开', '浮层', '抽屉', '示例'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'expand-up',
        name: '展开',
        category: 'Edit',
        keywords: ['edit', '编辑', 'expand-up', '展开', '向上展开', '浮层', '抽屉', '示例'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'extend',
        name: '拓展',
        category: 'Edit',
        keywords: ['edit', '编辑', 'extend', '拓展', '扩大', '全屏'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'filter',
        name: '筛选',
        category: 'Edit',
        keywords: ['edit', '编辑', 'filter', '筛选', '漏斗', '过滤'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'filter-one',
        name: '筛选1',
        category: 'Edit',
        keywords: ['edit', '编辑', 'filter-one', '筛选1', '过滤', '筛查', '箭头', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'find',
        name: '查找',
        category: 'Edit',
        keywords: ['edit', '编辑', 'find', '查找', '查询', '搜索', '搜寻', '放大镜', '搜索列表'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'flashlamp',
        name: '闪光模式',
        category: 'Edit',
        keywords: ['edit', '编辑', 'flashlamp', '闪光模式', '闪电', '闪光', '快速', '能量', '电池'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'flip-horizontally',
        name: '水平翻转',
        category: 'Edit',
        keywords: ['edit', '编辑', 'flip-horizontally', '水平翻转', '调整', '左右镜像', '软件功能'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'flip-vertically',
        name: '垂直翻转',
        category: 'Edit',
        keywords: ['edit', '编辑', 'flip-vertically', '垂直翻转', '调整', '上下镜像', '软件功能'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'focus',
        name: '对焦',
        category: 'Edit',
        keywords: ['edit', '编辑', 'focus', '对焦', '精准', '镜头', '瞄准'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'focus-one',
        name: '对焦1',
        category: 'Edit',
        keywords: ['edit', '编辑', 'focus-one', '对焦1', '定位', '扫描'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'font-size',
        name: '字号大小',
        category: 'Edit',
        keywords: ['edit', '编辑', 'font-size', '字号大小', '文字', '字体样式'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'format-brush',
        name: '格式刷',
        category: 'Edit',
        keywords: ['edit', '编辑', 'format-brush', '格式刷', '格式', '刷子', '粉刷', '上色', '装修'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'formula',
        name: '公式',
        category: 'Edit',
        keywords: ['edit', '编辑', 'formula', '公式', '算法', '计算', '复杂', '数学'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'freeze-column',
        name: '冻结列',
        category: 'Edit',
        keywords: ['edit', '编辑', 'freeze-column', '冻结列', '固定首列', '阴影', '范围', '排版'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'freeze-line',
        name: '冻结行',
        category: 'Edit',
        keywords: ['edit', '编辑', 'freeze-line', '冻结行', '固定首行', '阴影', '范围', '排版'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'freezing-line-column',
        name: '冻结行列',
        category: 'Edit',
        keywords: ['edit', '编辑', 'freezing-line-column', '冻结行列', '固定首行首列', '阴影', '范围', '排版'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'full-screen',
        name: '全局放大',
        category: 'Edit',
        keywords: ['edit', '编辑', 'full-screen', '全局放大', '全屏', '放大', '扩展'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'full-selection',
        name: '选择',
        category: 'Edit',
        keywords: ['edit', '编辑', 'full-selection', '选择', '更换文件', '全部选择'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fullwidth',
        name: '全宽',
        category: 'Edit',
        keywords: ['edit', '编辑', 'fullwidth', '全宽', '满宽', '扩大'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'go-on',
        name: '继续',
        category: 'Edit',
        keywords: ['edit', '编辑', 'go-on', '继续', '箭头', '下一步', '前进'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'grid-four',
        name: '四宫格',
        category: 'Edit',
        keywords: ['edit', '编辑', 'grid-four', '四宫格', '网格'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'grid-nine',
        name: '九宫格',
        category: 'Edit',
        keywords: ['edit', '编辑', 'grid-nine', '九宫格', '表格', '插入表格', '网格'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'grid-sixteen',
        name: '16宫格',
        category: 'Edit',
        keywords: ['edit', '编辑', 'grid-sixteen', '16宫格', '十六宫格', '网格'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'grid-three',
        name: '网格3',
        category: 'Edit',
        keywords: ['edit', '编辑', 'grid-three', '网格3', '网格', '三个格子', '分布', '布局', '排版'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'grid-two',
        name: '网格2',
        category: 'Edit',
        keywords: ['edit', '编辑', 'grid-two', '网格2', '网格', '四个格子', '方格'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'group',
        name: '成组',
        category: 'Edit',
        keywords: ['edit', '编辑', 'group', '成组', '组合', '打组', '选中'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'h',
        name: 'h',
        category: 'Edit',
        keywords: ['edit', '编辑', 'h', '字号', '字体', '标题'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'h1',
        name: '标题',
        category: 'Edit',
        keywords: ['edit', '编辑', 'h1', '标题', '标题1', '文字', '文本', '第一级别标题'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'h2',
        name: '标题1',
        category: 'Edit',
        keywords: ['edit', '编辑', 'h2', '标题1', '标题2', '文字', '文本', '第二级别标题'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'h3',
        name: '标题2',
        category: 'Edit',
        keywords: ['edit', '编辑', 'h3', '标题2', '标题3', '文字', '文本', '第三级别标题'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'helpcenter',
        name: '帮助中心',
        category: 'Edit',
        keywords: ['edit', '编辑', 'helpcenter', '帮助中心', '问题', '疑问', '帮助'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'high-light',
        name: '高亮',
        category: 'Edit',
        keywords: ['edit', '编辑', 'high-light', '高亮', '荧光笔', '划重点', '突出', '口红'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'horizontal-spacing-between-items',
        name: '水平间距',
        category: 'Edit',
        keywords: ['edit', '编辑', 'horizontal-spacing-between-items', '水平间距', '平行'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'horizontal-tidy-up',
        name: '水平整理',
        category: 'Edit',
        keywords: ['edit', '编辑', 'horizontal-tidy-up', '水平整理', '水平间距', '平行'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'horizontally-centered',
        name: '水平居中对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'horizontally-centered', '水平居中对齐', '水平间距', '平行', '居中对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'import-and-export',
        name: '进出口',
        category: 'Edit',
        keywords: ['edit', '编辑', 'import-and-export', '进出口', '进口', '出口'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'increase-the-scale',
        name: '增加小数位',
        category: 'Edit',
        keywords: ['edit', '编辑', 'increase-the-scale', '增加小数位', '小数位', '增加', '增加位数'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'indent-left',
        name: '左缩进',
        category: 'Edit',
        keywords: ['edit', '编辑', 'indent-left', '左缩进'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'indent-right',
        name: '右缩进',
        category: 'Edit',
        keywords: ['edit', '编辑', 'indent-right', '右缩进'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'inline',
        name: '行内公式',
        category: 'Edit',
        keywords: ['edit', '编辑', 'inline', '行内公式', '公式'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'inner-shadow-bottom-left',
        name: '内左下投影',
        category: 'Edit',
        keywords: ['edit', '编辑', 'inner-shadow-bottom-left', '内左下投影', '圆', '左下投影', '内阴影'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'inner-shadow-bottom-right',
        name: '内右下投影',
        category: 'Edit',
        keywords: ['edit', '编辑', 'inner-shadow-bottom-right', '内右下投影', '圆', '右下投影'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'inner-shadow-down',
        name: '内下投影',
        category: 'Edit',
        keywords: ['edit', '编辑', 'inner-shadow-down', '内下投影', '圆', '下投影', '内阴影'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'inner-shadow-left',
        name: '内左投影',
        category: 'Edit',
        keywords: ['edit', '编辑', 'inner-shadow-left', '内左投影', '圆', '左投影', '内阴影'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'inner-shadow-right',
        name: '内右投影',
        category: 'Edit',
        keywords: ['edit', '编辑', 'inner-shadow-right', '内右投影', '圆', '右投影', '内阴影'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'inner-shadow-top-left',
        name: '内左上投影',
        category: 'Edit',
        keywords: ['edit', '编辑', 'inner-shadow-top-left', '内左上投影', '圆', '左上投影', '内阴影'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'inner-shadow-top-right',
        name: '内右上投影',
        category: 'Edit',
        keywords: ['edit', '编辑', 'inner-shadow-top-right', '内右上投影', '圆', '右上投影', '内阴影'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'inner-shadow-up',
        name: '内上投影',
        category: 'Edit',
        keywords: ['edit', '编辑', 'inner-shadow-up', '内上投影', '圆', '上投影', '内阴影'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'insert-table',
        name: '插入表',
        category: 'Edit',
        keywords: ['edit', '编辑', 'insert-table', '插入表', '表格', '图表', '插入', '网格'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'intermediate-mode',
        name: '半自动模式',
        category: 'Edit',
        keywords: ['edit', '编辑', 'intermediate-mode', '半自动模式', '模式', '亮度', '对比度'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'internal-expansion',
        name: '内部扩大',
        category: 'Edit',
        keywords: ['edit', '编辑', 'internal-expansion', '内部扩大', '内部缩小'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'internal-reduction',
        name: '内部缩小',
        category: 'Edit',
        keywords: ['edit', '编辑', 'internal-reduction', '内部缩小', '内部扩大'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'intersect-selection',
        name: '相交选择',
        category: 'Edit',
        keywords: ['edit', '编辑', 'intersect-selection', '相交选择', '合并', '并拢', '交集', '相交'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'intersection',
        name: '交集',
        category: 'Edit',
        keywords: ['edit', '编辑', 'intersection', '交集', '复制', '粘贴', '重合'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'invert-camera',
        name: '反转镜头',
        category: 'Edit',
        keywords: ['edit', '编辑', 'invert-camera', '反转镜头', '旋转'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'key-one',
        name: '钥匙1',
        category: 'Edit',
        keywords: ['edit', '编辑', 'key-one', '钥匙1'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'key-two',
        name: '钥匙2',
        category: 'Edit',
        keywords: ['edit', '编辑', 'key-two', '钥匙2'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'layers',
        name: '图层',
        category: 'Edit',
        keywords: ['edit', '编辑', 'layers', '图层', '推广管理', '管理', '集合', '多层', '叠加'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'layout-five',
        name: '布局5',
        category: 'Edit',
        keywords: ['edit', '编辑', 'layout-five', '布局5', '布局', '排版'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'layout-four',
        name: '布局4',
        category: 'Edit',
        keywords: ['edit', '编辑', 'layout-four', '布局4', '布局', '排版', '交错'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'layout-one',
        name: '布局1',
        category: 'Edit',
        keywords: ['edit', '编辑', 'layout-one', '布局1', '布局', '排版'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'layout-three',
        name: '布局3',
        category: 'Edit',
        keywords: ['edit', '编辑', 'layout-three', '布局3', '布局', '排版'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'layout-two',
        name: '布局2',
        category: 'Edit',
        keywords: ['edit', '编辑', 'layout-two', '布局2', '布局', '排版', '中间'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'left-alignment',
        name: '左对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'left-alignment', '左对齐', '靠左', '左边', '对齐方式', '排版方式'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'left-bar',
        name: '左栏',
        category: 'Edit',
        keywords: ['edit', '编辑', 'left-bar', '左栏', '布局', '排版', '左'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'left-expand',
        name: '向左展开',
        category: 'Edit',
        keywords: ['edit', '编辑', 'left-expand', '向左展开', '展开', '收起', '左展开'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'lens-alignment',
        name: '镜头对准',
        category: 'Edit',
        keywords: ['edit', '编辑', 'lens-alignment', '镜头对准', '瞄准', '选中'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'level-adjustment',
        name: '水平校准',
        category: 'Edit',
        keywords: ['edit', '编辑', 'level-adjustment', '水平校准', '裁切', '分割'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'level-eight-title',
        name: '八级标题',
        category: 'Edit',
        keywords: ['edit', '编辑', 'level-eight-title', '八级标题', '8号字体', '第八级别标题', '八级'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'level-five-title',
        name: '五级标题',
        category: 'Edit',
        keywords: ['edit', '编辑', 'level-five-title', '五级标题', '5号字体', '第五级别标题', '五级'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'level-four-title',
        name: '四级标题',
        category: 'Edit',
        keywords: ['edit', '编辑', 'level-four-title', '四级标题', '4号字体', '第四级别标题', '四级'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'level-nine-title',
        name: '九级标题',
        category: 'Edit',
        keywords: ['edit', '编辑', 'level-nine-title', '九级标题', '9号字体', '第九级别标题', '九级'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'level-seven-title',
        name: '七级标题',
        category: 'Edit',
        keywords: ['edit', '编辑', 'level-seven-title', '七级标题', '7号字体', '第七级别标题', '七级'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'level-six-title',
        name: '六级标题',
        category: 'Edit',
        keywords: ['edit', '编辑', 'level-six-title', '六级标题', '6号字体', '第六级别标题', '六级'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'link-in',
        name: '接入链接',
        category: 'Edit',
        keywords: ['edit', '编辑', 'link-in', '接入链接', '接入', '锁定', '双向接入'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'link-left',
        name: '左链接',
        category: 'Edit',
        keywords: ['edit', '编辑', 'link-left', '左链接', '返回', '向左', '上一步', '移出'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'link-one',
        name: '链接',
        category: 'Edit',
        keywords: ['edit', '编辑', 'link-one', '链接', '链条', '锁链', '绑定'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'link-out',
        name: '向外连接',
        category: 'Edit',
        keywords: ['edit', '编辑', 'link-out', '向外连接', '链接', '左右', '数据', '向外', '双向移出'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'link-right',
        name: '右连接',
        category: 'Edit',
        keywords: ['edit', '编辑', 'link-right', '右连接', '导出', '向右', '下一步', '移出'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'link-two',
        name: '链接',
        category: 'Edit',
        keywords: ['edit', '编辑', 'link-two', '链接', '关联', '绑定'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'list',
        name: '列表',
        category: 'Edit',
        keywords: ['edit', '编辑', 'list', '列表', '目录', '清单', '完成目录', '任务清单'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'list-alphabet',
        name: '字母列表',
        category: 'Edit',
        keywords: ['edit', '编辑', 'list-alphabet', '字母列表', '段落', '文字排列'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'list-bottom',
        name: '列表',
        category: 'Edit',
        keywords: ['edit', '编辑', 'list-bottom', '列表', '底部', '最后', '目录'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'list-checkbox',
        name: '多选列表',
        category: 'Edit',
        keywords: ['edit', '编辑', 'list-checkbox', '多选列表', '序列', '图文'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'list-fail',
        name: '失败列表',
        category: 'Edit',
        keywords: ['edit', '编辑', 'list-fail', '失败列表'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'list-middle',
        name: '列表',
        category: 'Edit',
        keywords: ['edit', '编辑', 'list-middle', '列表', '中间', '居中', '目录'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'list-numbers',
        name: '数字列表',
        category: 'Edit',
        keywords: ['edit', '编辑', 'list-numbers', '数字列表', '段落', '文字排列'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'list-one',
        name: '列表',
        category: 'Edit',
        keywords: ['edit', '编辑', 'list-one', '列表', '排列', '左对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'list-success',
        name: '成功列表',
        category: 'Edit',
        keywords: ['edit', '编辑', 'list-success', '成功列表'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'list-top',
        name: '列表',
        category: 'Edit',
        keywords: ['edit', '编辑', 'list-top', '列表', '顶部', '最前', '目录'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'list-two',
        name: '列表2',
        category: 'Edit',
        keywords: ['edit', '编辑', 'list-two', '列表2', '目录', '清单', '完成目录', '任务清单'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'lock',
        name: '锁定',
        category: 'Edit',
        keywords: ['edit', '编辑', 'lock', '锁定', '锁死', '关闭', '保密'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'lock-one',
        name: '关锁',
        category: 'Edit',
        keywords: ['edit', '编辑', 'lock-one', '关锁', '锁定', '锁死', '关闭', '保密'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'magic-wand',
        name: '魔法棒',
        category: 'Edit',
        keywords: ['edit', '编辑', 'magic-wand', '魔法棒', '滤镜', '特效', '美颜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'many-to-many',
        name: '多对多',
        category: 'Edit',
        keywords: ['edit', '编辑', 'many-to-many', '多对多', 'n:n', 'N:N'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'margin',
        name: '垂直居中',
        category: 'Edit',
        keywords: ['edit', '编辑', 'margin', '垂直居中', '布局', '排版', '垂直'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'margin-one',
        name: '水平居中',
        category: 'Edit',
        keywords: ['edit', '编辑', 'margin-one', '水平居中', '布局', '排版', '水平'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mask-two',
        name: '遮罩',
        category: 'Edit',
        keywords: ['edit', '编辑', 'mask-two', '遮罩', '蒙版', '阴影'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'merge',
        name: '合并',
        category: 'Edit',
        keywords: ['edit', '编辑', 'merge', '合并', '交叉', '交集'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'merge-cells',
        name: '合并单元格',
        category: 'Edit',
        keywords: ['edit', '编辑', 'merge-cells', '合并单元格', '表格', '操作'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mind-mapping',
        name: '脑图',
        category: 'Edit',
        keywords: ['edit', '编辑', 'mind-mapping', '脑图', '思维导图', '结构图', '框架图'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mindmap-list',
        name: '大纲视图',
        category: 'Edit',
        keywords: ['edit', '编辑', 'mindmap-list', '大纲视图', '列表'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mindmap-map',
        name: '思维导图',
        category: 'Edit',
        keywords: ['edit', '编辑', 'mindmap-map', '思维导图', '脑图', '逻辑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'minus-the-bottom',
        name: '移到底部',
        category: 'Edit',
        keywords: ['edit', '编辑', 'minus-the-bottom', '移到底部', '置于底部', '下移', '复制'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'minus-the-top',
        name: '移到顶部',
        category: 'Edit',
        keywords: ['edit', '编辑', 'minus-the-top', '移到顶部', '置于顶部', '上移', '复制'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'modify',
        name: '修改',
        category: 'Edit',
        keywords: ['edit', '编辑', 'modify', '修改', '错误', '直尺'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'modify-two',
        name: '修改',
        category: 'Edit',
        keywords: ['edit', '编辑', 'modify-two', '修改', '橡皮', '涂抹', '擦除'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'more-four',
        name: '更多',
        category: 'Edit',
        keywords: ['edit', '编辑', 'more-four', '更多', '其他', '分类'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mosaic',
        name: '马赛克',
        category: 'Edit',
        keywords: ['edit', '编辑', 'mosaic', '马赛克', '模糊', '虚化', '遮盖', '擦除'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'move-in-one',
        name: '移动',
        category: 'Edit',
        keywords: ['edit', '编辑', 'move-in-one', '移动', '指向', '拉伸', '点击'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'move-one',
        name: '移动',
        category: 'Edit',
        keywords: ['edit', '编辑', 'move-one', '移动', '飞机', '选中', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'multi-picture-carousel',
        name: '多图轮播',
        category: 'Edit',
        keywords: ['edit', '编辑', 'multi-picture-carousel', '多图轮播'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'natural-mode',
        name: '自然模式',
        category: 'Edit',
        keywords: ['edit', '编辑', 'natural-mode', '自然模式', '花朵', '植物'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'newlybuild',
        name: '创建',
        category: 'Edit',
        keywords: ['edit', '编辑', 'newlybuild', '创建', '新建', '增加'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'next',
        name: '下一步',
        category: 'Edit',
        keywords: ['edit', '编辑', 'next', '下一步', '进一步', '向右', '下一级'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'no-shooting',
        name: '禁止拍照',
        category: 'Edit',
        keywords: ['edit', '编辑', 'no-shooting', '禁止拍照', '禁止'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'node-flat',
        name: '方头节点',
        category: 'Edit',
        keywords: ['edit', '编辑', 'node-flat', '方头节点', '端点类型'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'node-round',
        name: '圆头节点',
        category: 'Edit',
        keywords: ['edit', '编辑', 'node-round', '圆头节点', '端点类型', '圆点节点'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'node-square',
        name: '平头节点',
        category: 'Edit',
        keywords: ['edit', '编辑', 'node-square', '平头节点', '端点类型'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'off-screen',
        name: '全局缩小',
        category: 'Edit',
        keywords: ['edit', '编辑', 'off-screen', '全局缩小', '退出全屏', '收起', '缩进', '缩放'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'one-to-many',
        name: '一对多',
        category: 'Edit',
        keywords: ['edit', '编辑', 'one-to-many', '一对多', '1:n', '比例'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'one-to-one',
        name: '一对一',
        category: 'Edit',
        keywords: ['edit', '编辑', 'one-to-one', '一对一', '1:1', '等比', '等比例', '一比一', '比例'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ordered-list',
        name: '有序列表',
        category: 'Edit',
        keywords: ['edit', '编辑', 'ordered-list', '有序列表', '列表', '序列', '排序'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'overall-reduction',
        name: '整体缩小',
        category: 'Edit',
        keywords: ['edit', '编辑', 'overall-reduction', '整体缩小', '缩放'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'paragraph-alphabet',
        name: '字母段落',
        category: 'Edit',
        keywords: ['edit', '编辑', 'paragraph-alphabet', '字母段落', '文案'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'paragraph-break',
        name: '段落折行',
        category: 'Edit',
        keywords: ['edit', '编辑', 'paragraph-break', '段落折行', '段落', '表格排版', '内容折行'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'paragraph-break-two',
        name: '段落折行',
        category: 'Edit',
        keywords: ['edit', '编辑', 'paragraph-break-two', '段落折行'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'paragraph-cut',
        name: '段落截断',
        category: 'Edit',
        keywords: ['edit', '编辑', 'paragraph-cut', '段落截断', '段落', '表格排版', '内容截断'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'paragraph-rectangle',
        name: '矩形段落',
        category: 'Edit',
        keywords: ['edit', '编辑', 'paragraph-rectangle', '矩形段落'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'paragraph-round',
        name: '圆形段落',
        category: 'Edit',
        keywords: ['edit', '编辑', 'paragraph-round', '圆形段落'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'paragraph-triangle',
        name: '三角段落',
        category: 'Edit',
        keywords: ['edit', '编辑', 'paragraph-triangle', '三角段落'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'paragraph-unfold',
        name: '段落溢出',
        category: 'Edit',
        keywords: ['edit', '编辑', 'paragraph-unfold', '段落溢出', '段落', '表格排版', '内容溢出'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'perspective',
        name: '透视',
        category: 'Edit',
        keywords: ['edit', '编辑', 'perspective', '透视', '网格'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'picture-one',
        name: '图片',
        category: 'Edit',
        keywords: ['edit', '编辑', 'picture-one', '图片', '照片'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pin',
        name: '大头钉',
        category: 'Edit',
        keywords: ['edit', '编辑', 'pin', '大头钉', '钉子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'plan',
        name: '计划',
        category: 'Edit',
        keywords: ['edit', '编辑', 'plan', '计划', '日期', '排期', '日历', '规划'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pound',
        name: '井号',
        category: 'Edit',
        keywords: ['edit', '编辑', 'pound', '井号', '符号', '字符', '话题', '裁切'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pound-sign',
        name: '井号',
        category: 'Edit',
        keywords: ['edit', '编辑', 'pound-sign', '井号', '网格'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'powerpoint',
        name: '幻灯片',
        category: 'Edit',
        keywords: ['edit', '编辑', 'powerpoint', '幻灯片'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'proportional-scaling',
        name: '比例缩放',
        category: 'Edit',
        keywords: ['edit', '编辑', 'proportional-scaling', '比例缩放', '三角', '层次'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pushpin',
        name: '图钉',
        category: 'Edit',
        keywords: ['edit', '编辑', 'pushpin', '图钉'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'quote',
        name: '引用',
        category: 'Edit',
        keywords: ['edit', '编辑', 'quote', '引用', '引号', '附言'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'radio-two',
        name: '单选',
        category: 'Edit',
        keywords: ['edit', '编辑', 'radio-two', '单选'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'reduce-decimal-places',
        name: '减少小数位',
        category: 'Edit',
        keywords: ['edit', '编辑', 'reduce-decimal-places', '减少小数位', '小数位', '减少位数'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'reduce-two',
        name: '收缩',
        category: 'Edit',
        keywords: ['edit', '编辑', 'reduce-two', '收缩', '游戏', '方向', '左右', '手柄'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'refresh-one',
        name: '刷新',
        category: 'Edit',
        keywords: ['edit', '编辑', 'refresh-one', '刷新', '旋转', '循环', '逆转', '转动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'repair',
        name: '编辑',
        category: 'Edit',
        keywords: ['edit', '编辑', 'repair', '代码', '文案', '写字', '输入'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'return',
        name: '返回',
        category: 'Edit',
        keywords: ['edit', '编辑', 'return', '返回', '重做', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'reverse-lens',
        name: '镜头反转',
        category: 'Edit',
        keywords: ['edit', '编辑', 'reverse-lens', '镜头反转', '相机', '镜头', '反转'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'reverse-lens-one',
        name: '反转相机',
        category: 'Edit',
        keywords: ['edit', '编辑', 'reverse-lens-one', '反转相机', '镜头', '相机', '反转'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'right-bar',
        name: '右栏',
        category: 'Edit',
        keywords: ['edit', '编辑', 'right-bar', '右栏', '布局', '排版', '右'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'right-expand',
        name: '向右展开',
        category: 'Edit',
        keywords: ['edit', '编辑', 'right-expand', '向右展开', '展开', '收起', '右展开'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rotate-one',
        name: '旋转',
        category: 'Edit',
        keywords: ['edit', '编辑', 'rotate-one', '旋转', '中心', '焦点', '雷达', '转动', '统计', '图表', '铃铛'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rotation-one',
        name: '角度',
        category: 'Edit',
        keywords: ['edit', '编辑', 'rotation-one', '角度', '90度', '数学', '测量'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'row-height',
        name: '行高度',
        category: 'Edit',
        keywords: ['edit', '编辑', 'row-height', '行高度', '行高', '高度', '行间距'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'scale',
        name: '等比缩放',
        category: 'Edit',
        keywords: ['edit', '编辑', 'scale', '等比缩放'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'scan',
        name: '扫描',
        category: 'Edit',
        keywords: ['edit', '编辑', 'scan', '扫描', '识别', '扫码', '聚焦', '添加'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'scanning',
        name: '扫描',
        category: 'Edit',
        keywords: ['edit', '编辑', 'scanning', '扫描', '聚焦', '识别', '扫码'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'scanning-two',
        name: '扫描',
        category: 'Edit',
        keywords: ['edit', '编辑', 'scanning-two', '扫描', '聚焦', '识别', '扫码'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'scatter-alignment',
        name: '分散对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'scatter-alignment', '分散对齐', '文本对齐', '对齐方式', '排版方式', '分散'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'screenshot',
        name: '截屏',
        category: 'Edit',
        keywords: ['edit', '编辑', 'screenshot', '截屏', '录频', '裁剪', '截图', '剪刀'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'screenshot-one',
        name: '截图',
        category: 'Edit',
        keywords: ['edit', '编辑', 'screenshot-one', '截图', '聚焦', '对准', '扩展', '扫描'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'screenshot-two',
        name: '截屏',
        category: 'Edit',
        keywords: ['edit', '编辑', 'screenshot-two', '截屏', '录屏', '界面', '剪刀'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'selected',
        name: '选中',
        category: 'Edit',
        keywords: ['edit', '编辑', 'selected', '选中', '命中', '缩放'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'selected-focus',
        name: '选中焦点',
        category: 'Edit',
        keywords: ['edit', '编辑', 'selected-focus', '选中焦点', '锚点', '图形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'send-backward',
        name: '下层',
        category: 'Edit',
        keywords: ['edit', '编辑', 'send-backward', '下层', '底层', '向下'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'send-to-back',
        name: '移到后面',
        category: 'Edit',
        keywords: ['edit', '编辑', 'send-to-back', '移到后面', '置顶', '筛选', '分类', '分离', '移动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sent-to-back',
        name: '最下层',
        category: 'Edit',
        keywords: ['edit', '编辑', 'sent-to-back', '最下层', '图层', '层级', '底层'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'share-two',
        name: '分享2',
        category: 'Edit',
        keywords: ['edit', '编辑', 'share-two', '分享2', '分享', '跳转', '转发', '返回'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shutter-priority',
        name: '快门优先',
        category: 'Edit',
        keywords: ['edit', '编辑', 'shutter-priority', '快门优先', '相机', '快门', '照相'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sort-amount-down',
        name: '降序排序',
        category: 'Edit',
        keywords: ['edit', '编辑', 'sort-amount-down', '降序排序', '筛选', '排序', '降序', '顺序'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sort-amount-up',
        name: '升序排序',
        category: 'Edit',
        keywords: ['edit', '编辑', 'sort-amount-up', '升序排序', '筛选', '排序', '升序', '顺序'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'split',
        name: '分裂',
        category: 'Edit',
        keywords: ['edit', '编辑', 'split', '分裂', '图层', '双层', '上层'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'split-cells',
        name: '拆分单元格',
        category: 'Edit',
        keywords: ['edit', '编辑', 'split-cells', '拆分单元格', '表格', '操作'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'stamp',
        name: '邮票',
        category: 'Edit',
        keywords: ['edit', '编辑', 'stamp', '邮票'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'star',
        name: '星星',
        category: 'Edit',
        keywords: ['edit', '编辑', 'star', '星星', '收藏', '已收藏', '取消收藏', '评分', '评价', '打分', '星级', '五角星'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'stretching',
        name: '伸展',
        category: 'Edit',
        keywords: ['edit', '编辑', 'stretching', '伸展', '拉伸', '扩展', '拖大', '放大'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'strikethrough',
        name: '删除线',
        category: 'Edit',
        keywords: ['edit', '编辑', 'strikethrough', '删除线', '删除', '线', '切断', '切割'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'subtract-selection',
        name: '减去下一层',
        category: 'Edit',
        keywords: ['edit', '编辑', 'subtract-selection', '减去下一层', '双层', '减去上层', '排除'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'subtract-selection-one',
        name: '减去上一层',
        category: 'Edit',
        keywords: ['edit', '编辑', 'subtract-selection-one', '减去上一层', '双层', '减去上层', '排除'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sum',
        name: '合并',
        category: 'Edit',
        keywords: ['edit', '编辑', 'sum', '合并', '并集', '合集', '加选', '融合'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'switch-themes',
        name: '切换主题',
        category: 'Edit',
        keywords: ['edit', '编辑', 'switch-themes', '切换主题', '切换', '更换', '主题', '上传文件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'switching-done',
        name: '切换完成',
        category: 'Edit',
        keywords: ['edit', '编辑', 'switching-done', '切换完成', '更换', '完成', '对勾'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tailoring',
        name: '裁剪',
        category: 'Edit',
        keywords: ['edit', '编辑', 'tailoring', '裁剪', '裁切', '裁剪放大'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tailoring-two',
        name: '裁剪放大',
        category: 'Edit',
        keywords: ['edit', '编辑', 'tailoring-two', '裁剪放大', '裁切'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'text',
        name: '文字',
        category: 'Edit',
        keywords: ['edit', '编辑', 'text', '文字', '输入', '文本', '文案'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'text-bold',
        name: '文字加粗',
        category: 'Edit',
        keywords: ['edit', '编辑', 'text-bold', '文字加粗'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'text-italic',
        name: '文字斜体',
        category: 'Edit',
        keywords: ['edit', '编辑', 'text-italic', '文字斜体', '文字倾斜', '斜体'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'text-rotation-down',
        name: '文本旋转-下',
        category: 'Edit',
        keywords: ['edit', '编辑', 'text-rotation-down', '文本旋转-下', '文本', '文字', '旋转', '向下'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'text-rotation-left',
        name: '文本旋转-左',
        category: 'Edit',
        keywords: ['edit', '编辑', 'text-rotation-left', '文本旋转-左', '文本', '文字', '旋转', '向左'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'text-rotation-none',
        name: '文本旋转-无',
        category: 'Edit',
        keywords: ['edit', '编辑', 'text-rotation-none', '文本旋转-无', '文本', '文字', '旋转', '向右'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'text-rotation-up',
        name: '文本旋转-上',
        category: 'Edit',
        keywords: ['edit', '编辑', 'text-rotation-up', '文本旋转-上', '文本', '文字', '旋转', '向上'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'text-style',
        name: '文本样式',
        category: 'Edit',
        keywords: ['edit', '编辑', 'text-style', '文本样式', '文字样式', '文本放大', '选中文字'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'text-style-one',
        name: '文本样式',
        category: 'Edit',
        keywords: ['edit', '编辑', 'text-style-one', '文本样式', '文本', '文字', '样式', '属性'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'text-underline',
        name: '文字下划线',
        category: 'Edit',
        keywords: ['edit', '编辑', 'text-underline', '文字下划线', '下划线', '文字'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'text-wrap-overflow',
        name: '文本换行-溢出',
        category: 'Edit',
        keywords: ['edit', '编辑', 'text-wrap-overflow', '文本换行-溢出', '超出', '溢出', '文本', '换行', '折行'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'text-wrap-truncation',
        name: '文本换行-截断',
        category: 'Edit',
        keywords: ['edit', '编辑', 'text-wrap-truncation', '文本换行-截断', '截断', '省略', '文本省略', '换行'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'textarea',
        name: '文字域',
        category: 'Edit',
        keywords: ['edit', '编辑', 'textarea', '文字域', '文字'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'title-level',
        name: '标题级别',
        category: 'Edit',
        keywords: ['edit', '编辑', 'title-level', '标题级别', '字号', '级别', '文字尺寸', '文字大小'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'top-bar',
        name: '顶栏',
        category: 'Edit',
        keywords: ['edit', '编辑', 'top-bar', '顶栏', '布局', '排版', '上'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'translation',
        name: '翻译',
        category: 'Edit',
        keywords: ['edit', '编辑', 'translation', '翻译', '文本编辑', '文字旋转', '转码'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ungroup',
        name: '解组',
        category: 'Edit',
        keywords: ['edit', '编辑', 'ungroup', '解组', '组合'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'union-selection',
        name: '合并选择',
        category: 'Edit',
        keywords: ['edit', '编辑', 'union-selection', '合并选择', '合并', '并拢', '交集'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'unlink',
        name: '链接断开',
        category: 'Edit',
        keywords: ['edit', '编辑', 'unlink', '链接断开', '链条', '锁链', '无效链接', '解绑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'unlock',
        name: '解锁',
        category: 'Edit',
        keywords: ['edit', '编辑', 'unlock', '解锁', '开锁', '锁定', '打开', '开放'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'unlock-one',
        name: '开锁',
        category: 'Edit',
        keywords: ['edit', '编辑', 'unlock-one', '开锁'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'unordered-list',
        name: '无序列表',
        category: 'Edit',
        keywords: ['edit', '编辑', 'unordered-list', '无序列表', '无序', '列表', '序列'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'upload-logs',
        name: '上传日志',
        category: 'Edit',
        keywords: ['edit', '编辑', 'upload-logs', '上传日志', '日志', '上传文档', '文件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'vertical-spacing-between-items',
        name: '垂直间距',
        category: 'Edit',
        keywords: ['edit', '编辑', 'vertical-spacing-between-items', '垂直间距', '平行'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'vertical-tidy-up',
        name: '垂直整理',
        category: 'Edit',
        keywords: ['edit', '编辑', 'vertical-tidy-up', '垂直整理', '垂直间距', '平行'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'vertically-centered',
        name: '垂直居中对齐',
        category: 'Edit',
        keywords: ['edit', '编辑', 'vertically-centered', '垂直居中对齐', '垂直间距', '平行', '居中对齐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'video-two',
        name: '视频',
        category: 'Edit',
        keywords: ['edit', '编辑', 'video-two', '视频', '影视', '播放', '电影'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'view-grid-card',
        name: '卡片查看模式',
        category: 'Edit',
        keywords: ['edit', '编辑', 'view-grid-card', '卡片查看模式', '列表模式', '宫格', '应用', '网格视图'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'view-grid-detail',
        name: '详情查看模式',
        category: 'Edit',
        keywords: ['edit', '编辑', 'view-grid-detail', '详情查看模式', '列表模式', '排列方式', '排版'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'view-grid-list',
        name: '列表查看模式',
        category: 'Edit',
        keywords: ['edit', '编辑', 'view-grid-list', '列表查看模式', '列表模式', '排列方式', '顺序', '排版', '左图右文'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'viewfinder',
        name: '取景器',
        category: 'Edit',
        keywords: ['edit', '编辑', 'viewfinder', '取景器', '相机', '照相', '拍照', '自动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'word',
        name: '文档',
        category: 'Edit',
        keywords: ['edit', '编辑', 'word', '文档', '文案', '文本'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'write',
        name: '写作',
        category: 'Edit',
        keywords: ['edit', '编辑', 'write', '写作', '协作', '写字', '修改', '输入'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'writing-fluently',
        name: '编辑撰写',
        category: 'Edit',
        keywords: ['edit', '编辑', 'writing-fluently', '编辑撰写', '书写', '书法', '记录', '画图', '输入'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'zip',
        name: '压缩文件',
        category: 'Edit',
        keywords: ['edit', '编辑', 'zip', '压缩文件', '文件', '压缩包', 'ZIP'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Emoji',
        name: '表情',
        category: 'Emoji',
        keywords: ['emoji', '表情'],
        count: 37
    },
    {
        kind: 'icon',
        key: 'angry-face',
        name: '生气',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'angry-face', '生气', '愤怒'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'anguished-face',
        name: '圆嘴',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'anguished-face', '圆嘴', '目瞪口呆'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'astonished-face',
        name: '张大嘴',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'astonished-face', '张大嘴', '惊呆'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'confounded-face',
        name: '抿嘴闭眼',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'confounded-face', '抿嘴闭眼', '害怕'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'confused-face',
        name: '别嘴',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'confused-face', '别嘴', '耍酷'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'disappointed-face',
        name: '失落',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'disappointed-face', '失落', '伤心', '沮丧'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'distraught-face',
        name: '闭眼生气',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'distraught-face', '闭眼生气', '害怕'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dizzy-face',
        name: '张嘴晕',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'dizzy-face', '张嘴晕', '昏倒'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'emotion-happy',
        name: '开心',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'emotion-happy', '开心', '成功', '笑脸', '喜悦'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'emotion-unhappy',
        name: '不开心',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'emotion-unhappy', '不开心', '失败', '哭脸', '悲伤'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'expressionless-face',
        name: '无语脸',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'expressionless-face', '无语脸'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'face-with-smiling-open-eyes',
        name: '大眼笑',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'face-with-smiling-open-eyes', '大眼笑', '惊呆'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'face-without-mouth',
        name: '无嘴脸',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'face-without-mouth', '无嘴脸', '偷看'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'frowning-face-whit-open-mouth',
        name: '别嘴生气',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'frowning-face-whit-open-mouth', '别嘴生气', '惊呆'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'grimacing-face',
        name: '呲牙张嘴',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'grimacing-face', '呲牙张嘴', '害怕', '恐慌'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'grinning-face',
        name: '开心',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'grinning-face', '开心', '笑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'grinning-face-with-open-mouth',
        name: '张嘴笑',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'grinning-face-with-open-mouth', '张嘴笑', '开心'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'grinning-face-with-squinting-eyes',
        name: '笑眯眼',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'grinning-face-with-squinting-eyes', '笑眯眼', '开心', '快乐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'grinning-face-with-tightly-closed-eyes',
        name: '闭眼笑',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'grinning-face-with-tightly-closed-eyes', '闭眼笑', '眯眼'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'grinning-face-with-tightly-closed-eyes-open-mouth',
        name: '张嘴闭眼笑',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'grinning-face-with-tightly-closed-eyes-open-mouth', '张嘴闭眼笑', '开心'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'loudly-crying-face',
        name: '哭',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'loudly-crying-face', '哭', '难过'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'loudly-crying-face-whit-open-mouth',
        name: '张嘴哭',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'loudly-crying-face-whit-open-mouth', '张嘴哭', '痛哭', '难过'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'neutral-face',
        name: '正常标签',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'neutral-face', '正常标签', '无语'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pouting-face',
        name: '愤怒',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'pouting-face', '愤怒', '生气'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'relieved-face',
        name: '笑眯眼',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'relieved-face', '笑眯眼', '羞涩'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'slightly-frowning-face-whit-open-mouth',
        name: '轻微沮丧',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'slightly-frowning-face-whit-open-mouth', '轻微沮丧', '痛苦', '纠结'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'slightly-smiling-face',
        name: '微笑',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'slightly-smiling-face', '微笑', '开心'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sly-face-whit-smile',
        name: '囧笑',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'sly-face-whit-smile', '囧笑', '尴尬'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'smiling-face',
        name: '笑脸',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'smiling-face', '笑脸'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'smiling-face-with-squinting-eyes',
        name: '笑眯眼',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'smiling-face-with-squinting-eyes', '笑眯眼', '开心'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'surprised-face-with-open-big-mouth',
        name: '惊讶张嘴',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'surprised-face-with-open-big-mouth', '惊讶张嘴'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'surprised-face-with-open-mouth',
        name: '惊讶',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'surprised-face-with-open-mouth', '惊讶', '目瞪口呆'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'upside-down-face',
        name: '翻转笑脸',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'upside-down-face', '翻转笑脸'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'weary-face',
        name: '沮丧',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'weary-face', '沮丧', '哭丧着脸'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'winking-face',
        name: '眨眼睛',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'winking-face', '眨眼睛', '调皮'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'winking-face-with-open-eyes',
        name: '眨一个眼睛',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'winking-face-with-open-eyes', '眨一个眼睛', '调皮'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'worried-face',
        name: '担心',
        category: 'Emoji',
        keywords: ['emoji', '表情', 'worried-face', '担心', '失败', '哭脸', '不开心', '悲伤'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Measurement',
        name: '测量 & 试验',
        category: 'Measurement',
        keywords: ['measurement', '测量', '试验'],
        count: 13
    },
    {
        kind: 'icon',
        key: 'color-card',
        name: '色卡',
        category: 'Measurement',
        keywords: ['measurement', '测量', '试验', 'color-card', '色卡', '颜色', '绚丽', '选择', '旋转', '叠加'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'compass',
        name: '圆规',
        category: 'Measurement',
        keywords: ['measurement', '测量', '试验', 'compass', '圆规', '角落', '角度'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cuvette',
        name: '试管',
        category: 'Measurement',
        keywords: ['measurement', '测量', '试验', 'cuvette', '试管', '容器', '化学', '科学'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'experiment',
        name: '实验',
        category: 'Measurement',
        keywords: ['measurement', '测量', '试验', 'experiment', '实验', '测试', '化验', '测验', '蒸馏瓶', '容器', '量杯'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'experiment-one',
        name: '实验',
        category: 'Measurement',
        keywords: ['measurement', '测量', '试验', 'experiment-one', '实验', '测试', '化验', '测验', '蒸馏瓶', '容器', '量杯'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'flask',
        name: '三角杯',
        category: 'Measurement',
        keywords: ['measurement', '测量', '试验', 'flask', '三角杯', '酒杯', '化学'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rule-two',
        name: '尺子2',
        category: 'Measurement',
        keywords: ['measurement', '测量', '试验', 'rule-two', '尺子2'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ruler',
        name: '尺子',
        category: 'Measurement',
        keywords: ['measurement', '测量', '试验', 'ruler', '尺子', '度量', '距离', '长度', '刻度'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ruler-one',
        name: '尺子1',
        category: 'Measurement',
        keywords: ['measurement', '测量', '试验', 'ruler-one', '尺子1', '尺子', '标尺', '拦截', '刻度'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'test-tube',
        name: '试管',
        category: 'Measurement',
        keywords: ['measurement', '测量', '试验', 'test-tube', '试管', '化学', '科学', '容器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'thermometer',
        name: '温度计',
        category: 'Measurement',
        keywords: ['measurement', '测量', '试验', 'thermometer', '温度计', '体温', '冷热'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'triangle-ruler',
        name: '三角尺',
        category: 'Measurement',
        keywords: ['measurement', '测量', '试验', 'triangle-ruler', '三角尺', '长度', '刻度'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'vial',
        name: '试管',
        category: 'Measurement',
        keywords: ['measurement', '测量', '试验', 'vial', '试管', '量管', '测试'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Abstract',
        name: '抽象图形',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形'],
        count: 121
    },
    {
        kind: 'icon',
        key: 'ad-product',
        name: '广告产品',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'ad-product', '广告产品', '抽象', '盒子', '箱子', '立体'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'api-app',
        name: 'API 应用',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'api-app', 'API 应用', 'API', '应用', '抽象', 'AD', '平台'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'app-switch',
        name: '切换',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'app-switch', '切换', '屏幕切换', '轮播', '幻屏'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'application-one',
        name: '应用',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'application-one', '应用', '受众分析', '抽象', '立方体'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'association',
        name: '关联',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'association', '关联', '交集', '联系', 'A', '交叉', '编辑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'asterisk',
        name: '星号',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'asterisk', '星号', '符号', '圆形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'badge',
        name: '徽章提醒',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'badge', '徽章提醒', '抽象', '框选', '提醒'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'benz',
        name: '奔驰',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'benz', '奔驰', '三叉戟', '轮毂', '三角', '饼状'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'blocks-and-arrows',
        name: '模块箭头',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'blocks-and-arrows', '模块箭头', '分类'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'category-management',
        name: '分类管理',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'category-management', '分类管理', '分类', '管理', '整理', '抽象'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'circle-five-line',
        name: '圆圈',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'circle-five-line', '圆圈', '连接', '抽象', '锚点'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'circle-four',
        name: '圆圈',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'circle-four', '圆圈', '抽象', '叠加'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'circle-four-line',
        name: '圆圈',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'circle-four-line', '圆圈', '连接', '抽象', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'circle-three',
        name: '圆圈',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'circle-three', '圆圈', '抽象', '叠加', '关联'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'circle-two-line',
        name: '圆圈',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'circle-two-line', '圆圈', '连接', '抽象', '锚点', '缩放'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'circles-and-triangles',
        name: '圆形和三角',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'circles-and-triangles', '圆形和三角', '形状拼接', '组合'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'circles-seven',
        name: '圆圈',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'circles-seven', '圆圈', '抽象', '六个圆'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'circular-connection',
        name: '圆形连接',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'circular-connection', '圆形连接', '渠道', '关联'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cone',
        name: '圆锥',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'cone', '圆锥', '测量', '锐度'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cones',
        name: '坐标系',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'cones', '坐标系', '三角', '立体'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'converging-gateway',
        name: '汇聚网关',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'converging-gateway', '汇聚网关', '汇聚', '菱形', '抽象', '几何'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'coordinate-system',
        name: '坐标系统',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'coordinate-system', '坐标系统', '3D', '立体', '坐标'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cross-ring',
        name: '交叉环',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'cross-ring', '交叉环', '交叉', '环形', '关系'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cross-ring-two',
        name: '魔比斯环',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'cross-ring-two', '魔比斯环', '循环', '双环', '关联'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'crown-two',
        name: '皇冠',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'crown-two', '皇冠', '王后', '国王', '徽章', '荣耀', '等级'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cube',
        name: '魔方',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'cube', '魔方', '六边形', '立方体', '立体'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cube-five',
        name: '魔方',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'cube-five', '魔方', '六边形', '立方体'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cube-four',
        name: '魔方',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'cube-four', '魔方', '六边形', '立方体', '零件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cube-three',
        name: '魔方',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'cube-three', '魔方', '六边形', '立方体', '零件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cube-two',
        name: '魔方',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'cube-two', '魔方', '六边形', '三角拼接'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cycle-arrow',
        name: '循环箭头',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'cycle-arrow', '循环箭头', '环绕', '连接'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cycle-one',
        name: '循环',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'cycle-one', '循环', '可利用', '周转', '抽象'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cylinder',
        name: '圆柱',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'cylinder', '圆柱', '容器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'display',
        name: '显示屏',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'display', '显示屏', '白板', '展示', '投屏'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'endless',
        name: '无穷尽',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'endless', '无穷尽', '基因', '链接', '无穷大', '闭环', '相交', '循环'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'error-prompt',
        name: '错误提示',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'error-prompt', '错误提示', '声音', '静音', '声音提示'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'exclusive-gateway',
        name: '排他网关',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'exclusive-gateway', '排他网关', '排他', '菱形', '抽象', '几何'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'export',
        name: '导出',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'export', '导出', '输出', '传输', '上传', '下载'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'external-transmission',
        name: '外部传输',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'external-transmission', '外部传输', '传输', '导出文件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'figma-component',
        name: '组件',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'figma-component', '组件', '菱形组合', '四边形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'figma-reset-instance',
        name: '解除组件',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'figma-reset-instance', '解除组件', '转移', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'five-ellipses',
        name: '五个椭圆',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'five-ellipses', '五个椭圆', '排列'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'four-arrows',
        name: '四个箭头',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'four-arrows', '四个箭头', '箭头', '雪花', '旋转', '抽象'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'four-leaves',
        name: '四片叶子',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'four-leaves', '四片叶子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'four-point-connection',
        name: '四点连接',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'four-point-connection', '四点连接', '锚点', '抽象'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'four-round-point-connection',
        name: '四点连接',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'four-round-point-connection', '四点连接', '抽象', '关联', '添加'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'game-emoji',
        name: '游戏表情',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'game-emoji', '游戏表情', '图形拼接', '抽象'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'geometric-flowers',
        name: '几何花',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'geometric-flowers', '几何花', '几何', '圆环', '抽象', '花形', '环绕'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'graphic-design',
        name: '图形设计',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'graphic-design', '图形设计', '图形拼接', '几何', '组合', '叠加'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'graphic-design-two',
        name: '图形组合',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'graphic-design-two', '图形组合', '拼接', '组合', '几何'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'graphic-stitching',
        name: '圆形组合',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'graphic-stitching', '圆形组合', '组合', '拼接', '花形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'graphic-stitching-four',
        name: '圆形组合',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'graphic-stitching-four', '圆形组合', '连接', '抽象', '选中锚点'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'graphic-stitching-three',
        name: '圆形组合',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'graphic-stitching-three', '圆形组合', '方形', '连接', '抽象'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'halo',
        name: '光晕',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'halo', '光晕', '虚线圆环', '光照', '扩散', '焦距'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hexagon-strip',
        name: '六边条',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'hexagon-strip', '六边条', '花形', '组合图形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hexagonal',
        name: '六边立体',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'hexagonal', '六边立体', '花纹'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'inclusive-gateway',
        name: '包容网关',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'inclusive-gateway', '包容网关', '网关', '菱形', '抽象', '几何'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'internal-data',
        name: '内部数据',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'internal-data', '内部数据', '数据', '数据展示', '音调'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'internal-transmission',
        name: '内部传输',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'internal-transmission', '内部传输', '输送文件', '接收文件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'keyline',
        name: '关键线',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'keyline', '关键线', '背景', '底纹', '仅用'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'misaligned-semicircle',
        name: '半圆',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'misaligned-semicircle', '半圆', '切割', '抽象'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'multi-circular',
        name: '多圆形',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'multi-circular', '多圆形', '圆形', '叠加', '缩放', '圆形拼接'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'multi-rectangle',
        name: '多方形',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'multi-rectangle', '多方形', '方形', '叠加', '缩放', '方形拼接'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'multi-ring',
        name: '多圆环',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'multi-ring', '多圆环', '关联', '圆环', '交集', '抽象', '花形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'multi-triangular',
        name: '多三角',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'multi-triangular', '多三角', '锐度', '面积'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'multi-triangular-four',
        name: '多三角',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'multi-triangular-four', '多三角', '三角拼接'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'multi-triangular-three',
        name: '多三角',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'multi-triangular-three', '多三角', '三角拼接', '组合'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'multi-triangular-two',
        name: '多三角',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'multi-triangular-two', '多三角', '三角拼接', '组合'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'multilayer-sphere',
        name: '多层圆球',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'multilayer-sphere', '多层圆球', '阴影', '叠加', '面积'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'nested-arrows',
        name: '嵌套箭头',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'nested-arrows', '嵌套箭头', '关联', '连接'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'nine-points-connected',
        name: '九点连接',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'nine-points-connected', '九点连接', '抽象'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'one-third-rotation',
        name: '旋转',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'one-third-rotation', '旋转', '箭头', '循环', '风扇'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'open-one',
        name: '打开',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'open-one', '打开', '钥匙', '开启'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'outbound',
        name: '出库',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'outbound', '出库', '导出', '传输'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'oval-love',
        name: '椭圆爱心',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'oval-love', '椭圆爱心', '喜欢', '拼接'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'oval-love-two',
        name: '椭圆爱心',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'oval-love-two', '椭圆爱心', '喜欢', '拼接'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'parallel-gateway',
        name: '并行网关',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'parallel-gateway', '并行网关', '并行', '菱形', '抽象', '几何'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'process-line',
        name: '纹路',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'process-line', '纹路', '河流', '小溪', '雾气', '水汽'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'quadrangular-pyramid',
        name: '四棱锥',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'quadrangular-pyramid', '四棱锥', '立体', '钻石'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rectangle-tear',
        name: '矩形撕裂',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'rectangle-tear', '矩形撕裂', '销毁', '扯开'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rectangle-x',
        name: '大X',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'rectangle-x', '大X', '抽象', '关闭', '错误'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rectangular-circular-connection',
        name: '图形连接',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'rectangular-circular-connection', '图形连接', '链接', '抽象'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rectangular-circular-separation',
        name: '图形分割',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'rectangular-circular-separation', '图形分割', '抽象', '分裂', '翘板', '平衡'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rectangular-vertebra',
        name: '矩形椎体',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'rectangular-vertebra', '矩形椎体', '容器', '梯形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'refraction',
        name: '三角形',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'refraction', '三角形', '三菱镜', '多进少出', '抽象', '几何'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'reverse-operation-in',
        name: '同向运行',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'reverse-operation-in', '同向运行', '汇集', '方向', '传递'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'reverse-operation-out',
        name: '逆向运行',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'reverse-operation-out', '逆向运行', '反向', '散发', '左右', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'right-run',
        name: '右运行',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'right-run', '右运行', '右看齐', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'round-caliper',
        name: '圆形卡钳',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'round-caliper', '圆形卡钳', '循环', '风扇', '螺丝帽'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'round-distortion',
        name: '圆形扭曲',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'round-distortion', '圆形扭曲', '风扇', '旋转', '循环'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'round-mask',
        name: '圆形遮罩',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'round-mask', '圆形遮罩', '面积', '比例', '抽象'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'run-left',
        name: '左运行',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'run-left', '左运行', '左看齐', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sales-report',
        name: '销售',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'sales-report', '销售', '售卖', '数据', '抽象', '六边形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'seo',
        name: '搜索引擎',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'seo', '搜索引擎', '组件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'six-circular-connection',
        name: '圆形连接',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'six-circular-connection', '圆形连接', '原子', '抽象'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'six-points',
        name: '六个点',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'six-points', '六个点', '原子', '抽象'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'smart-optimization',
        name: '智能优化',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'smart-optimization', '智能优化', '抽象', '圆环', '花形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sphere',
        name: '圆球',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'sphere', '圆球', '球体', '地球', '纬度'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'split-branch',
        name: '分离',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'split-branch', '分离', '编辑', '对比', '抽象'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'stereo-nesting',
        name: '嵌套图形',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'stereo-nesting', '嵌套图形', '抽象', '标志', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'stereo-perspective',
        name: '立体透视',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'stereo-perspective', '立体透视', '立方体', '容器', '方形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'switch-contrast',
        name: '切换对比',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'switch-contrast', '切换对比', '对称'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'symbol-double-x',
        name: '双X符号',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'symbol-double-x', '双X符号', '抽象', '关闭', '道路', '十字路口'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'symmetry',
        name: '对称',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'symmetry', '对称', '抽象'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sync',
        name: '同步',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'sync', '同步', '对齐', '复制', '十字'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'table-report',
        name: '报表',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'table-report', '报表', '广告报表', '抽象', '文件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'texture',
        name: '纹理',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'texture', '纹理', '面积', '阴影'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'texture-two',
        name: '纹理',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'texture-two', '纹理', '底图', '图案', '抽象'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'three-hexagons',
        name: '三个菱形',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'three-hexagons', '三个菱形', '形状拼接', '组合'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'three-slashes',
        name: '三斜杠',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'three-slashes', '三斜杠', '标志', '平行'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'three-triangles',
        name: '三个三角',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'three-triangles', '三个三角', '三角拼接', '组合'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'treasure-chest',
        name: '宝箱',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'treasure-chest', '宝箱', '箱子', '宝贝', '工具箱'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'triangle-round-rectangle',
        name: '三角圆矩形',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'triangle-round-rectangle', '三角圆矩形', '形状拼接'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'triangular-pyramid',
        name: '三棱锥',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'triangular-pyramid', '三棱锥', '容器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'two-ellipses',
        name: '两个椭圆',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'two-ellipses', '两个椭圆', '交叉', '几何', '环绕'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'two-semicircles',
        name: '双半圆',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'two-semicircles', '双半圆', '抽象', '蘑菇'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'two-triangles',
        name: '星星',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'two-triangles', '星星', '太阳', '标记', '六星'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'two-triangles-two',
        name: '两个三角',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'two-triangles-two', '两个三角', '形状拼接'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'update-rotation',
        name: '更新',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'update-rotation', '更新', '旋转', '下载', '最新', '循环'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'warehousing',
        name: '入库',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'warehousing', '入库', '进入', '输送', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'whirlwind',
        name: '旋风',
        category: 'Abstract',
        keywords: ['abstract', '抽象图形', 'whirlwind', '旋风', '旋转', '循环'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Money',
        name: '电商财产',
        category: 'Money',
        keywords: ['money', '电商财产'],
        count: 84
    },
    {
        kind: 'icon',
        key: 'add-subtract',
        name: '加减',
        category: 'Money',
        keywords: ['money', '电商财产', 'add-subtract', '加减', '算数', '计算'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bank',
        name: '银行',
        category: 'Money',
        keywords: ['money', '电商财产', 'bank', '银行', '钱', '财务', '财富'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bank-card',
        name: '银行卡',
        category: 'Money',
        keywords: ['money', '电商财产', 'bank-card', '银行卡', '卡片', '证件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bank-card-one',
        name: '银行卡',
        category: 'Money',
        keywords: ['money', '电商财产', 'bank-card-one', '银行卡', '钱', '银行', '财务', '财富'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bank-card-two',
        name: '银行卡',
        category: 'Money',
        keywords: ['money', '电商财产', 'bank-card-two', '银行卡', '财富', '前', '金钱', '银行', '卡片'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bank-transfer',
        name: '银行转账',
        category: 'Money',
        keywords: ['money', '电商财产', 'bank-transfer', '银行转账', '银行', '转账'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bar-code',
        name: '条形码',
        category: 'Money',
        keywords: ['money', '电商财产', 'bar-code', '条形码', '扫码', '支付', '结账'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'blockchain',
        name: '区块链',
        category: 'Money',
        keywords: ['money', '电商财产', 'blockchain', '区块链', '区块', '链条', '虚拟网'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'buy',
        name: '购买',
        category: 'Money',
        keywords: ['money', '电商财产', 'buy', '购买', '购物', '采购', '手提包', '购物袋', '袋子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'commodity',
        name: '商品',
        category: 'Money',
        keywords: ['money', '电商财产', 'commodity', '商品', '货品', '购物'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'consume',
        name: '消费',
        category: 'Money',
        keywords: ['money', '电商财产', 'consume', '消费', '总消耗', '花钱', '花费', '钱包'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'coupon',
        name: '优惠券',
        category: 'Money',
        keywords: ['money', '电商财产', 'coupon', '优惠券', '优惠', '卡券', '促销', '电商', '钱', '折扣'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'credit',
        name: '信用卡',
        category: 'Money',
        keywords: ['money', '电商财产', 'credit', '信用卡', '卡片', '银行', '财务', '财富'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'currency',
        name: '货币流通',
        category: 'Money',
        keywords: ['money', '电商财产', 'currency', '货币流通', '钱', '银行', '财务', '财富'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'deposit',
        name: '存款',
        category: 'Money',
        keywords: ['money', '电商财产', 'deposit', '存款', '钱', '银行', '财务', '财富'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'discovery-index',
        name: '发现指数',
        category: 'Money',
        keywords: ['money', '电商财产', 'discovery-index', '发现指数', '阴线', '阳线', '股市图', '指数'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dollar',
        name: '美元',
        category: 'Money',
        keywords: ['money', '电商财产', 'dollar', '美元', '钱', '财富', '货币', '经济'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'exchange',
        name: '货币兑换',
        category: 'Money',
        keywords: ['money', '电商财产', 'exchange', '货币兑换', '钱', '银行', '财务', '财富'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'exchange-four',
        name: '兑换4',
        category: 'Money',
        keywords: ['money', '电商财产', 'exchange-four', '兑换4', '兑换', '交换', '转换'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'exchange-one',
        name: '兑换1',
        category: 'Money',
        keywords: ['money', '电商财产', 'exchange-one', '兑换1', '兑换', '交换', '转换'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'exchange-three',
        name: '兑换3',
        category: 'Money',
        keywords: ['money', '电商财产', 'exchange-three', '兑换3', '兑换', '交换', '转换'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'exchange-two',
        name: '兑换2',
        category: 'Money',
        keywords: ['money', '电商财产', 'exchange-two', '兑换2', '兑换', '交换', '转换'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'expenses',
        name: '转出',
        category: 'Money',
        keywords: ['money', '电商财产', 'expenses', '转出', '消费', '支出', '钱'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'expenses-one',
        name: '支出',
        category: 'Money',
        keywords: ['money', '电商财产', 'expenses-one', '支出', '消费', '钱', '转出'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'finance',
        name: '金融',
        category: 'Money',
        keywords: ['money', '电商财产', 'finance', '金融', '钱', '钱包', '财产', '金钱'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'financing',
        name: '理财',
        category: 'Money',
        keywords: ['money', '电商财产', 'financing', '理财', '货币兑换', '钱币', '金属钱币', '财产', '铜钱'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'financing-one',
        name: '理财',
        category: 'Money',
        keywords: ['money', '电商财产', 'financing-one', '理财', '货币兑换', '财富', '钱袋子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'financing-two',
        name: '融资2',
        category: 'Money',
        keywords: ['money', '电商财产', 'financing-two', '融资2', '汇款', '集资'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'flash-payment',
        name: '闪付',
        category: 'Money',
        keywords: ['money', '电商财产', 'flash-payment', '闪付', '闪电', '快速', '能量', '速度'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'funds',
        name: '基金',
        category: 'Money',
        keywords: ['money', '电商财产', 'funds', '基金', '资金', '财务', '成本', '金币', '存款', '储蓄', '金融', '统计'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'gift',
        name: '礼物',
        category: 'Money',
        keywords: ['money', '电商财产', 'gift', '礼物', '礼盒', '礼品', '惊喜', '神秘'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'gift-bag',
        name: '礼盒',
        category: 'Money',
        keywords: ['money', '电商财产', 'gift-bag', '礼盒'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'gift-box',
        name: '礼物盒',
        category: 'Money',
        keywords: ['money', '电商财产', 'gift-box', '礼物盒', '神秘'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'heavy-metal',
        name: '重金属',
        category: 'Money',
        keywords: ['money', '电商财产', 'heavy-metal', '重金属', '金属', '黄金', '金条', '金融', '财务', '财富'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'history-query',
        name: '历史搜索',
        category: 'Money',
        keywords: ['money', '电商财产', 'history-query', '历史搜索', '搜索'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'income',
        name: '转入',
        category: 'Money',
        keywords: ['money', '电商财产', 'income', '转入', '钱', '消费', '收入', '到账'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'income-one',
        name: '收入',
        category: 'Money',
        keywords: ['money', '电商财产', 'income-one', '收入', '钱', '消费', '到账'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'insert-card',
        name: '插卡',
        category: 'Money',
        keywords: ['money', '电商财产', 'insert-card', '插卡', '插入', '卡槽', '取款机'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ios-face-recognition',
        name: '人脸识别',
        category: 'Money',
        keywords: ['money', '电商财产', 'ios-face-recognition', '人脸识别', '面部识别'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ipo',
        name: 'ipo',
        category: 'Money',
        keywords: ['money', '电商财产', 'ipo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mall-bag',
        name: '购物袋',
        category: 'Money',
        keywords: ['money', '电商财产', 'mall-bag', '购物袋', '袋子', '逛街'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'medication-time',
        name: '准时吃药',
        category: 'Money',
        keywords: ['money', '电商财产', 'medication-time', '准时吃药', '按时', '准时'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'open-an-account',
        name: '开户',
        category: 'Money',
        keywords: ['money', '电商财产', 'open-an-account', '开户', '创建'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'optional',
        name: '自选',
        category: 'Money',
        keywords: ['money', '电商财产', 'optional', '自选', '行情', '趋势', '数据'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'paper-money',
        name: '钞票',
        category: 'Money',
        keywords: ['money', '电商财产', 'paper-money', '钞票', '钱财', '财产', '资金', '金融', '经济'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'paper-money-two',
        name: '钞票',
        category: 'Money',
        keywords: ['money', '电商财产', 'paper-money-two', '钞票', '钱', '财富', '资金', '投资', '美元'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pay-code-one',
        name: '付款码',
        category: 'Money',
        keywords: ['money', '电商财产', 'pay-code-one', '付款码', '二维码', '扫码', '扫描', '识别', '支付'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pay-code-two',
        name: '支付码',
        category: 'Money',
        keywords: ['money', '电商财产', 'pay-code-two', '支付码', '条形码', '扫码', '识别', '支付'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'payment-method',
        name: '币种兑换',
        category: 'Money',
        keywords: ['money', '电商财产', 'payment-method', '币种兑换', '支付', '钱', '兑换', '交易'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'red-envelope',
        name: '红包',
        category: 'Money',
        keywords: ['money', '电商财产', 'red-envelope', '红包', '钱'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'red-envelopes',
        name: '红包',
        category: 'Money',
        keywords: ['money', '电商财产', 'red-envelopes', '红包', '钱'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'scan-code',
        name: '扫码',
        category: 'Money',
        keywords: ['money', '电商财产', 'scan-code', '扫码', '扫一扫', '登录', '二维码', '扫描'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shopping',
        name: '购物车',
        category: 'Money',
        keywords: ['money', '电商财产', 'shopping', '购物车', '买东西', '消费'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shopping-bag',
        name: '购物袋',
        category: 'Money',
        keywords: ['money', '电商财产', 'shopping-bag', '购物袋', '快消品', '逛街', '包包', '手提袋', '购物车', '消费'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shopping-bag-one',
        name: '购物袋1',
        category: 'Money',
        keywords: ['money', '电商财产', 'shopping-bag-one', '购物袋1'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shopping-cart',
        name: '购物车',
        category: 'Money',
        keywords: ['money', '电商财产', 'shopping-cart', '购物车', '购物', '买东西', '购物卡', '消费'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shopping-cart-add',
        name: '添加购物车',
        category: 'Money',
        keywords: ['money', '电商财产', 'shopping-cart-add', '添加购物车', '购物车', '添加', '买东西', '购物'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shopping-cart-del',
        name: '删除购物车',
        category: 'Money',
        keywords: ['money', '电商财产', 'shopping-cart-del', '删除购物车', '购物车', '退货', '删除', '移除'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shopping-cart-one',
        name: '购物车1',
        category: 'Money',
        keywords: ['money', '电商财产', 'shopping-cart-one', '购物车1', '购物车', '消费', '买东西', '电商', '商超'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shopping-cart-two',
        name: '购物车2',
        category: 'Money',
        keywords: ['money', '电商财产', 'shopping-cart-two', '购物车2'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shoulder-bag',
        name: '单肩包',
        category: 'Money',
        keywords: ['money', '电商财产', 'shoulder-bag', '单肩包'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'stock-market',
        name: '股市',
        category: 'Money',
        keywords: ['money', '电商财产', 'stock-market', '股市', '阴线', '阳线', '股市图'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'swipe',
        name: '刷卡',
        category: 'Money',
        keywords: ['money', '电商财产', 'swipe', '刷卡', '支付', '识别'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'transaction',
        name: '成交',
        category: 'Money',
        keywords: ['money', '电商财产', 'transaction', '成交', '成交单'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'transaction-order',
        name: '交易清单',
        category: 'Money',
        keywords: ['money', '电商财产', 'transaction-order', '交易清单', '交易列表'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'trend',
        name: '趋势',
        category: 'Money',
        keywords: ['money', '电商财产', 'trend', '趋势', '上升', '升高', '上调', '调高', '涨幅'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'trend-two',
        name: '趋势',
        category: 'Money',
        keywords: ['money', '电商财产', 'trend-two', '趋势', '数据', '涨幅', '增长'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'two-dimensional-code',
        name: '二维码',
        category: 'Money',
        keywords: ['money', '电商财产', 'two-dimensional-code', '二维码', '扫描', '扫码', '扫一扫', '登录', '付款码', '付款方式'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'two-dimensional-code-one',
        name: '二维码',
        category: 'Money',
        keywords: ['money', '电商财产', 'two-dimensional-code-one', '二维码', '扫描', '扫码', '扫一扫', '登录', '付款码', '付款方式'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'two-dimensional-code-two',
        name: '二维码',
        category: 'Money',
        keywords: ['money', '电商财产', 'two-dimensional-code-two', '二维码', '扫描', '扫码', '扫一扫', '登录', '付款码', '付款方式'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'wallet',
        name: '钱包',
        category: 'Money',
        keywords: ['money', '电商财产', 'wallet', '钱包', '钱', '资金', '金融', '充值'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'wallet-one',
        name: '钱包',
        category: 'Money',
        keywords: ['money', '电商财产', 'wallet-one', '钱包', '消费', '卡包'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'wallet-three',
        name: '钱包3',
        category: 'Money',
        keywords: ['money', '电商财产', 'wallet-three', '钱包3'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'wallet-two',
        name: '钱包',
        category: 'Money',
        keywords: ['money', '电商财产', 'wallet-two', '钱包', '金钱', '财富', '理财', '投资'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'water-level',
        name: '水位线',
        category: 'Money',
        keywords: ['money', '电商财产', 'water-level', '水位线', '水滴'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'water-rate',
        name: '水费',
        category: 'Money',
        keywords: ['money', '电商财产', 'water-rate', '水费', '费用', '钱', '缴费', '交费'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'water-rate-two',
        name: '水电费',
        category: 'Money',
        keywords: ['money', '电商财产', 'water-rate-two', '水电费', '水滴'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'waves',
        name: '电波',
        category: 'Money',
        keywords: ['money', '电商财产', 'waves', '电波', '心跳', '脉搏', '趋势', '路径'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'weixin-market',
        name: '微信电商',
        category: 'Money',
        keywords: ['money', '电商财产', 'weixin-market', '微信电商', '商场', '商城', '电商', '卖东西', '生意', '入口'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'workbench',
        name: '工作台',
        category: 'Money',
        keywords: ['money', '电商财产', 'workbench', '工作台', '电脑', '工作桌', '平台', '行情', '趋势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'paid',
        name: '已付款',
        category: 'Money',
        keywords: ['money', '电商财产', 'paid', '已付款', '已支付', '已结账', '支付成功', '订单完成', 'complete'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pending-payment',
        name: '待付款',
        category: 'Money',
        keywords: ['money', '电商财产', 'pending-payment', '待付款', '等待付款', '待结账', 'pending'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'payment-failed',
        name: '付款失败',
        category: 'Money',
        keywords: ['money', '电商财产', 'payment-failed', '付款失败', '取消', '支付失败', 'canceled'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'refunded',
        name: '已退款',
        category: 'Money',
        keywords: ['money', '电商财产', 'refunded', '已退款', '退钱', '退款'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Animals',
        name: '动物',
        category: 'Animals',
        keywords: ['animals', '动物'],
        count: 36
    },
    {
        kind: 'icon',
        key: 'bat',
        name: '蝙蝠',
        category: 'Animals',
        keywords: ['animals', '动物', 'bat', '蝙蝠'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bear',
        name: '熊',
        category: 'Animals',
        keywords: ['animals', '动物', 'bear', '熊'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bee',
        name: '蜜蜂',
        category: 'Animals',
        keywords: ['animals', '动物', 'bee', '蜜蜂'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bird',
        name: '鸟',
        category: 'Animals',
        keywords: ['animals', '动物', 'bird', '鸟'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'butterfly',
        name: '蝴蝶',
        category: 'Animals',
        keywords: ['animals', '动物', 'butterfly', '蝴蝶'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cat',
        name: '猫',
        category: 'Animals',
        keywords: ['animals', '动物', 'cat', '猫'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cattle',
        name: '牛',
        category: 'Animals',
        keywords: ['animals', '动物', 'cattle', '牛'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cattle-zodiac',
        name: '生肖牛',
        category: 'Animals',
        keywords: ['animals', '动物', 'cattle-zodiac', '生肖牛'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chicken-zodiac',
        name: '生肖鸡',
        category: 'Animals',
        keywords: ['animals', '动物', 'chicken-zodiac', '生肖鸡'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'deer',
        name: '鹿',
        category: 'Animals',
        keywords: ['animals', '动物', 'deer', '鹿'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dog',
        name: '狗',
        category: 'Animals',
        keywords: ['animals', '动物', 'dog', '狗'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dog-zodiac',
        name: '生肖狗',
        category: 'Animals',
        keywords: ['animals', '动物', 'dog-zodiac', '生肖狗'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dolphin',
        name: '海豚',
        category: 'Animals',
        keywords: ['animals', '动物', 'dolphin', '海豚'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dragon-zodiac',
        name: '生肖龙',
        category: 'Animals',
        keywords: ['animals', '动物', 'dragon-zodiac', '生肖龙'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'duck',
        name: '鸭子',
        category: 'Animals',
        keywords: ['animals', '动物', 'duck', '鸭子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'eagle',
        name: '鹰',
        category: 'Animals',
        keywords: ['animals', '动物', 'eagle', '鹰'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'elephant',
        name: '大象',
        category: 'Animals',
        keywords: ['animals', '动物', 'elephant', '大象'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fish-one',
        name: '鱼',
        category: 'Animals',
        keywords: ['animals', '动物', 'fish-one', '鱼'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'frog',
        name: '青蛙',
        category: 'Animals',
        keywords: ['animals', '动物', 'frog', '青蛙'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hippo',
        name: '河马',
        category: 'Animals',
        keywords: ['animals', '动物', 'hippo', '河马'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'horse-zodiac',
        name: '生肖马',
        category: 'Animals',
        keywords: ['animals', '动物', 'horse-zodiac', '生肖马'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'koala-bear',
        name: '树袋熊',
        category: 'Animals',
        keywords: ['animals', '动物', 'koala-bear', '树袋熊'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'monkey',
        name: '猴',
        category: 'Animals',
        keywords: ['animals', '动物', 'monkey', '猴'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'monkey-zodiac',
        name: '生肖猴',
        category: 'Animals',
        keywords: ['animals', '动物', 'monkey-zodiac', '生肖猴'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mouse-zodiac',
        name: '生肖鼠',
        category: 'Animals',
        keywords: ['animals', '动物', 'mouse-zodiac', '生肖鼠'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'owl',
        name: '猫头鹰',
        category: 'Animals',
        keywords: ['animals', '动物', 'owl', '猫头鹰'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'panda',
        name: '熊猫',
        category: 'Animals',
        keywords: ['animals', '动物', 'panda', '熊猫'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pig',
        name: '猪',
        category: 'Animals',
        keywords: ['animals', '动物', 'pig', '猪'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pig-zodiac',
        name: '生肖猪',
        category: 'Animals',
        keywords: ['animals', '动物', 'pig-zodiac', '生肖猪'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pigeon',
        name: '鸽子',
        category: 'Animals',
        keywords: ['animals', '动物', 'pigeon', '鸽子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rabbit',
        name: '兔子',
        category: 'Animals',
        keywords: ['animals', '动物', 'rabbit', '兔子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rabbit-zodiac',
        name: '生肖兔',
        category: 'Animals',
        keywords: ['animals', '动物', 'rabbit-zodiac', '生肖兔'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sheep-zodiac',
        name: '生肖羊',
        category: 'Animals',
        keywords: ['animals', '动物', 'sheep-zodiac', '生肖羊'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'snake-zodiac',
        name: '生肖蛇',
        category: 'Animals',
        keywords: ['animals', '动物', 'snake-zodiac', '生肖蛇'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tiger-zodiac',
        name: '生肖虎',
        category: 'Animals',
        keywords: ['animals', '动物', 'tiger-zodiac', '生肖虎'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'whale',
        name: '鲸鱼',
        category: 'Animals',
        keywords: ['animals', '动物', 'whale', '鲸鱼'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Music',
        name: '多媒体音乐',
        category: 'Music',
        keywords: ['music', '多媒体音乐'],
        count: 57
    },
    {
        kind: 'icon',
        key: 'acoustic',
        name: '声波',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'acoustic', '声波', '音频', '音量', '语音', '录音', '波纹', '声音'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'add-music',
        name: '添加音乐',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'add-music', '添加音乐', '播放', '音乐', '添加'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'airpods',
        name: 'AirPods',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'airpods', 'AirPods', '蓝牙耳机', '苹果耳机', '耳机', '无线耳机'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bell-ring',
        name: '上课铃',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'bell-ring', '上课铃', '铃声', '闹钟', '信号', '上课'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'carousel-video',
        name: '轮播视频',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'carousel-video', '轮播视频', '多个视频', '播放', '叠加'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'close-remind',
        name: '关闭提醒',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'close-remind', '关闭提醒', '提示', '消息', '警示', '警钟', '铃铛', '关闭', '禁止提醒'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'collection-records',
        name: '收藏音乐',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'collection-records', '收藏音乐', '收藏', '喜欢'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'concern',
        name: '关注',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'concern', '关注', '关系', '重视', '喜欢', '爱', '心动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'entertainment',
        name: '娱乐',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'entertainment', '娱乐', '唱歌', '麦克风', '说话', 'KTV'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'film',
        name: '胶片',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'film', '胶片'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fm',
        name: '电台',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'fm', '电台', '收音机', '电台节目', '无线广播', '广播'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'headphone-sound',
        name: '耳机声音',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'headphone-sound', '耳机声音'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'headset',
        name: '耳机',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'headset', '耳机', '耳麦', '客服'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'headset-one',
        name: '耳机',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'headset-one', '耳机', '客服', '二级', '耳麦', '服务'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'list-add',
        name: '添加列表',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'list-add', '添加列表', '列表', '添加', '菜单'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'monitor',
        name: '摄像',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'monitor', '摄像', '拍摄', '录像', '摄像机', '影像', '电影'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'monitor-off',
        name: '关闭摄像',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'monitor-off', '关闭摄像', '拍摄', '录像', '摄像机', '影像', '电影', '关闭'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'monitor-two',
        name: '音波控制',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'monitor-two', '音波控制', '音频', '音量', '语音', '录音', '波纹', '声音'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'movie',
        name: '电影',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'movie', '电影', '视频', '胶片', '电视', '录音机'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'movie-board',
        name: '影视板',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'movie-board', '影视板'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'music',
        name: '音乐',
        category: 'Music',
        keywords: ['music', '多媒体音乐', '音乐', '乐符', '歌曲', '歌声', '播放'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'music-cd',
        name: '音乐cd',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'music-cd', '音乐cd'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'music-list',
        name: '音乐菜单',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'music-list', '音乐菜单', '列表', '菜单'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'music-menu',
        name: '音乐菜单',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'music-menu', '音乐菜单'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'music-one',
        name: '音乐',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'music-one', '音乐', '乐符', '歌曲', '歌声', '播放'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'music-rhythm',
        name: '音乐律动',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'music-rhythm', '音乐律动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mute',
        name: '静音',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'mute', '静音', '安静', '音量'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pause',
        name: '暂停',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'pause', '暂停', '停止播放', '播放中'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pause-one',
        name: '暂停',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'pause-one', '暂停', '停止播放', '播放中'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'performance',
        name: '演出',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'performance', '演出', '音乐', '表演', '娱乐', '歌曲', '播放'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'piano',
        name: '钢琴',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'piano', '钢琴', '键盘', '琴键', '音乐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'play',
        name: '播放',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'play', '播放', '视频', '播放器', '媒体'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'play-one',
        name: '播放',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'play-one', '播放', '视频', '播放器', '媒体'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'play-wrong',
        name: '播放出错',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'play-wrong', '播放出错', '播放', '终止', '出错'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'playback-progress',
        name: '播放进度',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'playback-progress', '播放进度', '视频', '屏幕'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ppt',
        name: '幻灯片',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'ppt', '幻灯片', '播放', '延时', '投影'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'record',
        name: '唱片集',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'record', '唱片集'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'record-disc',
        name: '光盘',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'record-disc', '光盘', '音乐', '磁盘', '播放', '复古'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'remind',
        name: '提醒',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'remind', '提醒', '提示', '消息', '警示', '警钟', '铃铛'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'remind-disable',
        name: '无效提醒',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'remind-disable', '无效提醒', '闹钟', '提醒', '无效', '时间', '超时'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'replay-five',
        name: '播放5次',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'replay-five', '播放5次', '重播', '循环'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'replay-music',
        name: '重新播放',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'replay-music', '重新播放', '循环', '重新', '重复'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'signal-strength',
        name: '信号强度',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'signal-strength', '信号强度'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sound-wave',
        name: '音波',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'sound-wave', '音波', '音频', '音量', '语音', '录音', '波纹', '声音'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tape',
        name: '磁带',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'tape', '磁带', '音乐', '复古', '收音机、'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'video',
        name: '视频',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'video', '视频', '电影', '放映', '播放', '胶片'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'voice',
        name: '录音',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'voice', '录音', '音量', '语音', '麦克风'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'voice-off',
        name: '关闭录音',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'voice-off', '关闭录音', '关闭音量', '关闭语音', '关闭麦克风', 'close'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'voice-one',
        name: '声音',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'voice-one', '声音', '音频', '音量', '语音', '录音', '声波', 'voice'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'voicemail',
        name: '语音信息',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'voicemail', '语音信息', '录音', '磁带', '语音', '语音短信'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'volume-down',
        name: '音量减小',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'volume-down', '音量减小', '音乐', '音量', '声音', '降低', '无声'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'volume-mute',
        name: '静音',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'volume-mute', '静音', '音量关闭', '声音', '音量', '喇叭', '广播'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'volume-notice',
        name: '声音-大',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'volume-notice', '声音-大', '音量', '声音', '喇叭', '小声', '广播'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'volume-small',
        name: '声音-小',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'volume-small', '声音-小', '音量', '声音', '喇叭', '小声', '广播'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'volume-up',
        name: '音量增大',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'volume-up', '音量增大', '音乐', '音量', '声音', '增大', '最大音量'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'waves-left',
        name: '左音波',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'waves-left', '左音波', '音频', '音量', '语音', '录音', '波纹', '声音'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'waves-right',
        name: '右音波',
        category: 'Music',
        keywords: ['music', '多媒体音乐', 'waves-right', '右音波', '音频', '音量', '语音', '录音', '波纹', '声音'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Clothes',
        name: '服饰',
        category: 'Clothes',
        keywords: ['clothes', '服饰'],
        count: 72
    },
    {
        kind: 'icon',
        key: 'a-cane',
        name: '拐杖',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'a-cane', '拐杖', '工具', '登山杖', '木棍'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bachelor-cap',
        name: '学士帽',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'bachelor-cap', '学士帽', '帽子', '学士', '博士帽'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bachelor-cap-one',
        name: '博士帽1',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'bachelor-cap-one', '博士帽1'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bachelor-cap-two',
        name: '博士帽2',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'bachelor-cap-two', '博士帽2'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'backpack',
        name: '背包',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'backpack', '背包', '书包', '双肩包', '运动包', '登山包'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'baseball-cap',
        name: '棒球帽',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'baseball-cap', '棒球帽', '运动帽', '帽子', '潮牌'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'basketball-clothes',
        name: '篮球服',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'basketball-clothes', '篮球服', '运动', '球衣', '衣服', '号码', '背心'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'belt',
        name: '腰带',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'belt', '腰带', '皮带', '皮具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'boots',
        name: '靴子',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'boots', '靴子', '皮靴', '高筒靴', '女士靴子', '雨靴'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bow',
        name: '领结',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'bow', '领结', '饰品', '蝴蝶结', '领带', '发卡'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'briefcase',
        name: '公文包',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'briefcase', '公文包', '办公包', '皮包', '手提包'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chef-hat',
        name: '厨师帽',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'chef-hat', '厨师帽', '厨师', '帽子', '面包师'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'children-cap',
        name: '儿童帽',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'children-cap', '儿童帽', '帽子', '可爱', '耳朵帽', '卡通'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'clothes-briefs',
        name: '内裤',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'clothes-briefs', '内裤', '衣服', '裤子', '女士内裤'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'clothes-cardigan',
        name: '开衫',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'clothes-cardigan', '开衫', '衣服', '服装', '上衣'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'clothes-crew-neck',
        name: '圆领衫',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'clothes-crew-neck', '圆领衫', '衣服', '开衫', '服装', '秋衣'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'clothes-diapers',
        name: '纸尿裤',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'clothes-diapers', '纸尿裤', '衣服', '服装', '婴儿', '小孩', '内裤'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'clothes-gloves',
        name: '手套',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'clothes-gloves', '手套', '五指手套'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'clothes-gloves-two',
        name: '手套',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'clothes-gloves-two', '手套', '工具', '滑雪用品'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'clothes-hoodie',
        name: '卫衣',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'clothes-hoodie', '卫衣', '衣服', '服装', '上衣'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'clothes-pants',
        name: '裤子',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'clothes-pants', '裤子', '衣服', '服装'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'clothes-pants-short',
        name: '短裤',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'clothes-pants-short', '短裤', '衣服', '服装', '裤子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'clothes-pants-sweat',
        name: '运动裤',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'clothes-pants-sweat', '运动裤', '衣服', '服装', '裤子', '运动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'clothes-short-sleeve',
        name: '短裤',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'clothes-short-sleeve', '短裤', '衣服', '服装', '短袖'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'clothes-skates',
        name: '滑冰鞋',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'clothes-skates', '滑冰鞋', '装备', '滑冰', '鞋子', '靴子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'clothes-suit',
        name: '西装',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'clothes-suit', '西装', '衣服', '服装', '正式', '外套'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'clothes-sweater',
        name: '帽衫',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'clothes-sweater', '帽衫', '衣服', '服装', '正式', '外套'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'clothes-turtleneck',
        name: '高领毛衣',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'clothes-turtleneck', '高领毛衣', '衣服', '服装', '正式'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'clothes-windbreaker',
        name: '风衣',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'clothes-windbreaker', '风衣', '衣服', '服装', '正式', '上衣'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'coat-hanger',
        name: '衣架',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'coat-hanger', '衣架', '衣服撑', '衣服架', '晾衣架'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'commuter-bag',
        name: '通勤包',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'commuter-bag', '通勤包', '挎包', '手提包', '小包', '布袋', '女士包'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'crown-three',
        name: '皇冠帽',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'crown-three', '皇冠帽', '皇冠', '权利', '皇帝'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'diamond-necklace',
        name: '钻石项链',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'diamond-necklace', '钻石项链', '项链', '挂件', '宝石', '首饰'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'diamond-ring',
        name: '钻戒',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'diamond-ring', '钻戒', '钻石', '戒指', '首饰'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'diamonds',
        name: '钻石',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'diamonds', '钻石', '钻', '宝石', 'sketch'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'diapers-one',
        name: '尿不湿',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'diapers-one', '尿不湿', '内裤', '短裤'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'full-dress-longuette',
        name: '礼服长裙',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'full-dress-longuette', '礼服长裙', '礼服', '裙子', '婚纱', '服装', '连衣裙'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'glasses',
        name: '眼镜',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'glasses', '眼镜', '近视', '镜片', '观察', '搜索'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'glasses-one',
        name: '眼镜',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'glasses-one', '眼镜', '墨镜', '复古镜', '圆镜', '太阳镜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'handbag',
        name: '手提包',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'handbag', '手提包', '皮包', '公文包', '包包', '电脑包'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hanfu-chinese-style',
        name: '中式汉服',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'hanfu-chinese-style', '中式汉服', '上衣', '服装', '汉服', '外套', '衣服'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hanger-one',
        name: '衣架',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'hanger-one', '衣架', '撑衣架', '衣帽架'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hat',
        name: '帽子',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'hat', '帽子', '服装', '道具', '魔术'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'headwear',
        name: '头饰',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'headwear', '头饰', '装饰', '发夹', '发箍'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'high-heeled-shoes',
        name: '高跟鞋',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'high-heeled-shoes', '高跟鞋', '鞋子', '皮鞋'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'holy-sword',
        name: '圣剑',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'holy-sword', '圣剑', '剑', '刺刀', '刀刃', '武器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'magic-hat',
        name: '魔术帽',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'magic-hat', '魔术帽', '帽子', '魔术', '高帽', '道具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'men-jacket',
        name: '男士外套',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'men-jacket', '男士外套', '上衣', '服装', '汉服', '外套', '衣服'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'necktie',
        name: '领带',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'necktie', '领带', '领结'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'panties',
        name: '内裤',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'panties', '内裤', '裤', '短裤', '泳裤'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'perfume',
        name: '香水',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'perfume', '香水', '瓶子', '容器', '玻璃瓶'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'retro-bag',
        name: '复古包',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'retro-bag', '复古包', '包包', '皮包', '手提包', '小包'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'short-skirt',
        name: '短裙',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'short-skirt', '短裙', '裙子', '舞蹈裙'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shorts',
        name: '短裤',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'shorts', '短裤', '运动裤', '训练裤'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'skates',
        name: '冰鞋',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'skates', '冰鞋', '鞋子', '靴子', '滑冰鞋', '棉鞋'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'slippers',
        name: '拖鞋',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'slippers', '拖鞋', '鞋子', '凉鞋'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'slippers-one',
        name: '拖鞋',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'slippers-one', '拖鞋', '鞋子', '凉鞋'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'socks',
        name: '袜子',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'socks', '袜子', '服装', '儿童袜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sorcerer-hat',
        name: '巫师帽',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'sorcerer-hat', '巫师帽', '帽子', '尖角帽', '哈利波特', '魔法帽'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'straw-hat',
        name: '草帽',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'straw-hat', '草帽', '帽子', '道具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sun-hat',
        name: '太阳帽',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'sun-hat', '太阳帽', '帽子', '道具', '服装', '连衣裙'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sweater',
        name: '毛衣',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'sweater', '毛衣', '毛绒', '上衣', '卫衣', '棉衣'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'swimsuit',
        name: '泳装',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'swimsuit', '泳装', '游泳', '泳裤', '泳衣'],
        count: 0
    },
    {
        kind: 'icon',
        key: 't-shirt',
        name: 'T恤',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 't-shirt', 'T恤', '衣服', '上衣', '短袖'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'the-single-shoulder-bag',
        name: '单肩包',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'the-single-shoulder-bag', '单肩包', '挎包', '小包'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'theme',
        name: '主题',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'theme', '主题', '衣服', '服装'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'three-d-glasses',
        name: '3D眼镜',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'three-d-glasses', '3D眼镜', '眼镜', '三维立体', '3d', '三维'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'trousers-bell-bottoms',
        name: '喇叭裤',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'trousers-bell-bottoms', '喇叭裤', '裤子', '长裤', '7分裤', '九分裤', '阔腿裤'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'trunk',
        name: '行李箱',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'trunk', '行李箱', '行李', '箱子', '皮箱'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'vest',
        name: '背心',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'vest', '背心', '马甲', '衣服', '上衣'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'women-coat',
        name: '女大衣',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'women-coat', '女大衣', '大衣', '上衣', '衣服', '外套'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'woolen-hat',
        name: '呢帽',
        category: 'Clothes',
        keywords: ['clothes', '服饰', 'woolen-hat', '呢帽', '帽子', '顶帽', '道具', '针织帽'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Character',
        name: '符号标识',
        category: 'Character',
        keywords: ['character', '符号标识'],
        count: 33
    },
    {
        kind: 'icon',
        key: 'ad',
        name: '广告',
        category: 'Character',
        keywords: ['character', '符号标识', 'ad', '广告', '广告符号', '标志'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'add',
        name: '添加',
        category: 'Character',
        keywords: ['character', '符号标识', 'add', '添加', '新建', '增加', '创建'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'add-one',
        name: '添加',
        category: 'Character',
        keywords: ['character', '符号标识', 'add-one', '添加', '新建', '增加', '创建'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'at-sign',
        name: '邮件符号',
        category: 'Character',
        keywords: ['character', '符号标识', 'at-sign', '邮件符号', '邮件', '圈人', '提醒用户', '相关人'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'attention',
        name: '注意',
        category: 'Character',
        keywords: ['character', '符号标识', 'attention', '注意', '提示', '警示', '关于', 'about'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'big-x',
        name: '错误',
        category: 'Character',
        keywords: ['character', '符号标识', 'big-x', '错误', '埃克斯', '特步', '叉'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bitcoin',
        name: '比特币',
        category: 'Character',
        keywords: ['character', '符号标识', 'bitcoin', '比特币', '比特币符号', '标志'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ce-marking',
        name: '欧洲市场',
        category: 'Character',
        keywords: ['character', '符号标识', 'ce-marking', '欧洲市场', '标志'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'check',
        name: '校验',
        category: 'Character',
        keywords: ['character', '符号标识', 'check', '校验', '勾选', '对勾', '正确', '成功', '完成', '选中'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'check-one',
        name: '校验',
        category: 'Character',
        keywords: ['character', '符号标识', 'check-one', '校验', '勾选', '对勾', '正确', '成功', '完成', '选中'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'check-small',
        name: '校验-小',
        category: 'Character',
        keywords: ['character', '符号标识', 'check-small', '校验-小', '勾选', '对勾', '正确', '成功', '选中', '完成'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'close',
        name: '关闭',
        category: 'Character',
        keywords: ['character', '符号标识', 'close', '关闭', '删除', '清除', '错误', '取消'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'close-one',
        name: '关闭',
        category: 'Character',
        keywords: ['character', '符号标识', 'close-one', '关闭', '删除', '清除', '错误', '取消'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'close-small',
        name: '关闭-小',
        category: 'Character',
        keywords: ['character', '符号标识', 'close-small', '关闭-小', '删除', '清除', '错误', '关闭', '取消'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'copyright',
        name: '版权符号',
        category: 'Character',
        keywords: ['character', '符号标识', 'copyright', '版权符号', '标志'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'correct',
        name: '正确的',
        category: 'Character',
        keywords: ['character', '符号标识', 'correct', '正确的', '对勾', '成功'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'division',
        name: '除号',
        category: 'Character',
        keywords: ['character', '符号标识', 'division', '除号', '符号', '乘除', '除法'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'error',
        name: '错误',
        category: 'Character',
        keywords: ['character', '符号标识', 'error', '错误', '不正确', '关闭', '叉'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'font-size-two',
        name: '字体大小',
        category: 'Character',
        keywords: ['character', '符号标识', 'font-size-two', '字体大小', '编辑', '调整'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'forbid',
        name: '禁止',
        category: 'Character',
        keywords: ['character', '符号标识', 'forbid', '禁止', '不允许'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'help',
        name: '帮助',
        category: 'Character',
        keywords: ['character', '符号标识', 'help', '帮助', '问题', '疑问'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'info',
        name: '信息',
        category: 'Character',
        keywords: ['character', '符号标识', 'info', '信息', '注解', '提示', '关于', 'about'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'minus',
        name: '减',
        category: 'Character',
        keywords: ['character', '符号标识', 'minus', '减', '减号', '去除', '减少'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'more-three',
        name: '更多3',
        category: 'Character',
        keywords: ['character', '符号标识', 'more-three', '更多3', '更多', '圆形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'percentage',
        name: '百分号',
        category: 'Character',
        keywords: ['character', '符号标识', 'percentage', '百分号', '符号', '算法', '比例', '占比', '百分比'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'plus',
        name: '加',
        category: 'Character',
        keywords: ['character', '符号标识', 'plus', '加', '新建', '增加', '创建'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'plus-cross',
        name: '加号',
        category: 'Character',
        keywords: ['character', '符号标识', 'plus-cross', '加号', '符号', '加法', '红十字', '医疗', '医院'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'reduce',
        name: '减少',
        category: 'Character',
        keywords: ['character', '符号标识', 'reduce', '减少', '未全选', '复选框', '减去', '去除'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'reduce-one',
        name: '减少',
        category: 'Character',
        keywords: ['character', '符号标识', 'reduce-one', '减少', '未全选', '减号', '不允许', '禁止'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'success',
        name: '成功',
        category: 'Character',
        keywords: ['character', '符号标识', 'success', '成功', '完成', '勋章', '胜利', '获胜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'symbol',
        name: '符号',
        category: 'Character',
        keywords: ['character', '符号标识', 'symbol', '符号', '标志性', '阿尔法'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'trademark',
        name: '商标符号',
        category: 'Character',
        keywords: ['character', '符号标识', 'trademark', '商标符号', '标志'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'vip',
        name: 'VIP',
        category: 'Character',
        keywords: ['character', '符号标识', 'vip', 'VIP', '加V', '会员'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Industry',
        name: '工业',
        category: 'Industry',
        keywords: ['industry', '工业'],
        count: 26
    },
    {
        kind: 'icon',
        key: 'electric-drill',
        name: '电钻',
        category: 'Industry',
        keywords: ['industry', '工业', 'electric-drill', '电钻'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'engineering-brand',
        name: '工程牌',
        category: 'Industry',
        keywords: ['industry', '工业', 'engineering-brand', '工程牌'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'engineering-vehicle',
        name: '工程车',
        category: 'Industry',
        keywords: ['industry', '工业', 'engineering-vehicle', '工程车'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fire-extinguisher-one',
        name: '灭火器',
        category: 'Industry',
        keywords: ['industry', '工业', 'fire-extinguisher-one', '灭火器', '灭火'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hammer-and-anvil',
        name: '铁锤',
        category: 'Industry',
        keywords: ['industry', '工业', 'hammer-and-anvil', '铁锤', '锤子', '铁具', '工具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'heater-resistor',
        name: '加热电阻',
        category: 'Industry',
        keywords: ['industry', '工业', 'heater-resistor', '加热电阻', '电阻'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'helmet-one',
        name: '安全帽',
        category: 'Industry',
        keywords: ['industry', '工业', 'helmet-one', '安全帽', '安全', '帽子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'industrial-scales',
        name: '电子秤',
        category: 'Industry',
        keywords: ['industry', '工业', 'industrial-scales', '电子秤', '测量称'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ladder',
        name: '梯子',
        category: 'Industry',
        keywords: ['industry', '工业', 'ladder', '梯子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ladder-one',
        name: '梯子1',
        category: 'Industry',
        keywords: ['industry', '工业', 'ladder-one', '梯子1'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'land-surveying',
        name: '观测仪',
        category: 'Industry',
        keywords: ['industry', '工业', 'land-surveying', '观测仪', '水平仪', '探测仪', '观察器', '勘探器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'led-diode',
        name: '发光二极管',
        category: 'Industry',
        keywords: ['industry', '工业', 'led-diode', '发光二极管', '提示灯', '报警器', '报警灯'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'oil-industry',
        name: '工业油漆',
        category: 'Industry',
        keywords: ['industry', '工业', 'oil-industry', '工业油漆', '油'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'oscillator',
        name: '震荡器',
        category: 'Industry',
        keywords: ['industry', '工业', 'oscillator', '震荡器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'petrol',
        name: '汽油',
        category: 'Industry',
        keywords: ['industry', '工业', 'petrol', '汽油', '机油', '油'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'potentiometer',
        name: '电位器',
        category: 'Industry',
        keywords: ['industry', '工业', 'potentiometer', '电位器', '电'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'resistor',
        name: '电阻器',
        category: 'Industry',
        keywords: ['industry', '工业', 'resistor', '电阻器', '电阻'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'robot-two',
        name: '机器人2',
        category: 'Industry',
        keywords: ['industry', '工业', 'robot-two', '机器人2', '智能', '机床', '机器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'scale-one',
        name: '测量',
        category: 'Industry',
        keywords: ['industry', '工业', 'scale-one', '测量'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'screwdriver',
        name: '螺丝刀',
        category: 'Industry',
        keywords: ['industry', '工业', 'screwdriver', '螺丝刀'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'solar-energy-one',
        name: '太阳能',
        category: 'Industry',
        keywords: ['industry', '工业', 'solar-energy-one', '太阳能', '灯具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'spanner',
        name: '扳手',
        category: 'Industry',
        keywords: ['industry', '工业', 'spanner', '扳手'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'stack-light',
        name: '堆栈灯',
        category: 'Industry',
        keywords: ['industry', '工业', 'stack-light', '堆栈灯', '提示灯', '导向灯'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tape-measure',
        name: '卷尺',
        category: 'Industry',
        keywords: ['industry', '工业', 'tape-measure', '卷尺'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'wind-turbine',
        name: '风力发电机',
        category: 'Industry',
        keywords: ['industry', '工业', 'wind-turbine', '风力发电机', '风车', '发电机'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'worker',
        name: '工人',
        category: 'Industry',
        keywords: ['industry', '工业', 'worker', '工人', '打工者', '劳动者', '打工人'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Makeups',
        name: '化妆美妆',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆'],
        count: 46
    },
    {
        kind: 'icon',
        key: 'afro-pick',
        name: '发簪',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'afro-pick', '发簪', '发箍', '发夹'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'barber-brush',
        name: '理发刷',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'barber-brush', '理发刷', '刷子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'barber-clippers',
        name: '理发剪',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'barber-clippers', '理发剪', '理发'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'beauty-instrument',
        name: '美容仪',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'beauty-instrument', '美容仪', '扫码仪', '扫描', '识别'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'blade',
        name: '刀片',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'blade', '刀片', '刀'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'comb',
        name: '梳子',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'comb', '梳子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'conditioner',
        name: '护发素',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'conditioner', '护发素', '洗护', '日化', '面霜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cosmetic-brush',
        name: '化妆刷',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'cosmetic-brush', '化妆刷', '笔'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'english-mustache',
        name: '胡子',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'english-mustache', '胡子', '胡须'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'eyebrow',
        name: '眼眉',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'eyebrow', '眼眉', '眉毛'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'face-powder',
        name: '脸粉',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'face-powder', '脸粉', '小镜子', '化妆镜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'facial-cleanser',
        name: '洗面奶',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'facial-cleanser', '洗面奶', '洁面', '护手霜', '洗化'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fingernail',
        name: '指甲',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'fingernail', '指甲', '美甲'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'foundation-makeup',
        name: '粉底液',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'foundation-makeup', '粉底液', '泡沫', '乳液'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hair-brush',
        name: '发梳',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'hair-brush', '发梳', '梳子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hair-clip',
        name: '发夹',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'hair-clip', '发夹', '夹子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hand-cream',
        name: '护手霜',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'hand-cream', '护手霜', '面霜', '洗化'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'handwashing',
        name: '洗手',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'handwashing', '洗手', '水资源', '清洁'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'handwashing-fluid',
        name: '洗手液',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'handwashing-fluid', '洗手液', '酒精', '清洁', '滴露'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'health-products',
        name: '保健品',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'health-products', '保健品', '药品', '保健'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'jewelry',
        name: '首饰',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'jewelry', '首饰', '雪花膏', '首饰盒', '面霜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'lip-gloss',
        name: '唇彩',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'lip-gloss', '唇彩', '唇膏'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'lip-tattoo',
        name: '唇纹身',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'lip-tattoo', '唇纹身', '嘴', '唇膏', '护唇'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'lipstick',
        name: '口红',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'lipstick', '口红', '化妆品', '美妆'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'lipstick-one',
        name: '口红1',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'lipstick-one', '口红1'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'lotion',
        name: '乳液',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'lotion', '乳液', '泡沫'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'makeups',
        name: '美容',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', '美容', '面膜', '护肤', '美妆'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mascara',
        name: '睫毛膏',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'mascara', '睫毛膏', '睫毛刷', '美妆', '化妆'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'massage-chair',
        name: '按摩椅',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'massage-chair', '按摩椅', '椅子', '凳子', '办公'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'massage-chair-one',
        name: '按摩椅1',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'massage-chair-one', '按摩椅1', '椅子', '凳子', '办公'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'massage-table',
        name: '按摩椅',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'massage-table', '按摩椅', '椅子', '床'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mirror',
        name: '镜子',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'mirror', '镜子', '化妆镜', '正面', '照'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mirror-two',
        name: '镜子2',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'mirror-two', '镜子2', '镜子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mouth',
        name: '嘴巴',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'mouth', '嘴巴', '美妆', '化妆', '时尚', '器官', '口', '说话'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'nail-polish',
        name: '指甲油',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'nail-polish', '指甲油', '行李箱', '手提箱', '美甲'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'nail-polish-one',
        name: '指甲油1',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'nail-polish-one', '指甲油1'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'paint',
        name: '化妆刷',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'paint', '化妆刷', '刷子', '扫把', '清洁', '扫除'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'perfumer-bottle',
        name: '香水瓶',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'perfumer-bottle', '香水瓶', '瓶子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'razor',
        name: '剃刀',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'razor', '剃刀'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'reel',
        name: '线轮',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'reel', '线轮', '线', '轮', '绳'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'scissors',
        name: '剪刀',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'scissors', '剪刀', '剪切', '裁剪'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shaver-one',
        name: '剃须刀',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'shaver-one', '剃须刀', '标签', '书签', '贴纸'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shaving',
        name: '刮胡泡',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'shaving', '刮胡泡', '泡沫', '乳液'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'soap-bubble',
        name: '泡泡',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'soap-bubble', '泡泡', '泡沫', '气泡'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'spa-candle',
        name: '蜡烛沐浴',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'spa-candle', '蜡烛沐浴', '蜡烛', '烛光'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'straight-razor',
        name: '直剃刀',
        category: 'Makeups',
        keywords: ['makeups', '化妆美妆', 'straight-razor', '直剃刀', '刀'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Graphics',
        name: '几何图形',
        category: 'Graphics',
        keywords: ['graphics', '几何图形'],
        count: 19
    },
    {
        kind: 'icon',
        key: 'diamond-one',
        name: '菱形1',
        category: 'Graphics',
        keywords: ['graphics', '几何图形', 'diamond-one', '菱形1'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'diamond-three',
        name: '菱形3',
        category: 'Graphics',
        keywords: ['graphics', '几何图形', 'diamond-three', '菱形3'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'diamond-two',
        name: '菱形2',
        category: 'Graphics',
        keywords: ['graphics', '几何图形', 'diamond-two', '菱形2'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hexagon-one',
        name: '六边形1',
        category: 'Graphics',
        keywords: ['graphics', '几何图形', 'hexagon-one', '六边形1'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'octagon',
        name: '八边形',
        category: 'Graphics',
        keywords: ['graphics', '几何图形', 'octagon', '八边形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'oval-one',
        name: '椭圆形',
        category: 'Graphics',
        keywords: ['graphics', '几何图形', 'oval-one', '椭圆形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'parallelogram',
        name: '平行四边形',
        category: 'Graphics',
        keywords: ['graphics', '几何图形', 'parallelogram', '平行四边形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pentagon-one',
        name: '五边形',
        category: 'Graphics',
        keywords: ['graphics', '几何图形', 'pentagon-one', '五边形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'quadrilateral',
        name: '四边形',
        category: 'Graphics',
        keywords: ['graphics', '几何图形', 'quadrilateral', '四边形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rectangle',
        name: '矩形',
        category: 'Graphics',
        keywords: ['graphics', '几何图形', 'rectangle', '矩形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rectangle-one',
        name: '矩形1',
        category: 'Graphics',
        keywords: ['graphics', '几何图形', 'rectangle-one', '矩形1'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rectangle-small',
        name: '小矩形',
        category: 'Graphics',
        keywords: ['graphics', '几何图形', 'rectangle-small', '小矩形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'right-angle',
        name: '直角形',
        category: 'Graphics',
        keywords: ['graphics', '几何图形', 'right-angle', '直角形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'round',
        name: '圆形',
        category: 'Graphics',
        keywords: ['graphics', '几何图形', 'round', '圆形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'square',
        name: '方形',
        category: 'Graphics',
        keywords: ['graphics', '几何图形', 'square', '方形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'square-small',
        name: '小方形',
        category: 'Graphics',
        keywords: ['graphics', '几何图形', 'square-small', '小方形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'trapezoid',
        name: '梯形',
        category: 'Graphics',
        keywords: ['graphics', '几何图形', 'trapezoid', '梯形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'triangle',
        name: '三角形',
        category: 'Graphics',
        keywords: ['graphics', '几何图形', 'triangle', '三角形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'line',
        name: '直线',
        category: 'Graphics',
        keywords: ['graphics', '几何图形', 'line', '直线', '线条', '线段', '线'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Build',
        name: '建筑',
        category: 'Build',
        keywords: ['build', '建筑'],
        count: 70
    },
    {
        kind: 'icon',
        key: 'application',
        name: '应用',
        category: 'Build',
        keywords: ['build', '建筑', 'application', '应用', '商店', '店铺', '门店', '商铺', '房子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'arc-de-triomphe',
        name: '凯旋门',
        category: 'Build',
        keywords: ['build', '建筑', 'arc-de-triomphe', '凯旋门', '楼', '门', '古建筑', '景区'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'booth',
        name: '摊位',
        category: 'Build',
        keywords: ['build', '建筑', 'booth', '摊位', '超市', '门店', '作坊'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'brdige-three',
        name: '桥',
        category: 'Build',
        keywords: ['build', '建筑', 'brdige-three', '桥', '大桥', '桥梁', '连接'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bridge-one',
        name: '桥',
        category: 'Build',
        keywords: ['build', '建筑', 'bridge-one', '桥', '大桥', '石拱桥', '连接'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bridge-two',
        name: '桥',
        category: 'Build',
        keywords: ['build', '建筑', 'bridge-two', '桥', '大桥', '立交桥', '连接', '天桥', '玻璃桥'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'building-four',
        name: '建筑',
        category: 'Build',
        keywords: ['build', '建筑', 'building-four', '楼房', '购物', '商城', '城市'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'building-one',
        name: '建筑',
        category: 'Build',
        keywords: ['build', '建筑', 'building-one', '楼房', '高楼', '办公楼', '商城', '城市'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'building-three',
        name: '建筑',
        category: 'Build',
        keywords: ['build', '建筑', 'building-three', '楼房', '家', '房子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'building-two',
        name: '建筑',
        category: 'Build',
        keywords: ['build', '建筑', 'building-two', '楼房', '高楼', '办公楼', '商城', '城市'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'castle',
        name: '城堡',
        category: 'Build',
        keywords: ['build', '建筑', 'castle', '城堡', '城楼', '城门', '堡垒', '游乐场', '宫殿'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chimney',
        name: '烟筒',
        category: 'Build',
        keywords: ['build', '建筑', 'chimney', '烟筒', '烟火', '排烟', '工厂'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chinese-pavilion',
        name: '中国楼阁',
        category: 'Build',
        keywords: ['build', '建筑', 'chinese-pavilion', '中国楼阁', '亭子', '古建筑', '寺庙', '楼阁', '景区'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'church-one',
        name: '教堂',
        category: 'Build',
        keywords: ['build', '建筑', 'church-one', '教堂', '基督教', '宗教', '宫殿', '楼房'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'church-two',
        name: '教堂',
        category: 'Build',
        keywords: ['build', '建筑', 'church-two', '教堂', '基督教', '宗教', '楼房'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'circle-house',
        name: '圈舍',
        category: 'Build',
        keywords: ['build', '建筑', 'circle-house', '圈舍', '房子', '屋子', '阁楼'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'circus',
        name: '马戏团',
        category: 'Build',
        keywords: ['build', '建筑', 'circus', '马戏团', '蒙古包', '营地', '驻扎', '露营'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'city',
        name: '城市',
        category: 'Build',
        keywords: ['build', '建筑', 'city', '城市', '楼房', '办公楼', '小区'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'city-gate',
        name: '城门',
        category: 'Build',
        keywords: ['build', '建筑', 'city-gate', '城门', '城楼', '阁楼', '房子', '楼房', '景区', '古建筑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'city-one',
        name: '城市',
        category: 'Build',
        keywords: ['build', '建筑', 'city-one', '城市', '楼房', '办公楼', '小区'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'clock-tower',
        name: '钟楼',
        category: 'Build',
        keywords: ['build', '建筑', 'clock-tower', '钟楼', '大笨钟', '楼房', '大厦'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'death-star',
        name: '死亡之星',
        category: 'Build',
        keywords: ['build', '建筑', 'death-star', '死亡之星', '星星', '倒映', '球体', '风景'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dome',
        name: '圆顶',
        category: 'Build',
        keywords: ['build', '建筑', 'dome', '圆顶', '地球', '圆球', '纬度', '地理'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dubai',
        name: '迪拜大厦',
        category: 'Build',
        keywords: ['build', '建筑', 'dubai', '迪拜大厦', '迪拜', '大厦', '高楼', '楼宇'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'eiffel-tower',
        name: '埃菲尔铁塔',
        category: 'Build',
        keywords: ['build', '建筑', 'eiffel-tower', '埃菲尔铁塔', '铁塔', '法国建筑', '浪漫'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'elevator',
        name: '电梯',
        category: 'Build',
        keywords: ['build', '建筑', 'elevator', '电梯', '上下楼', '门'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'escalators',
        name: '手扶电梯',
        category: 'Build',
        keywords: ['build', '建筑', 'escalators', '手扶电梯', '上下楼'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'factory-building',
        name: '工厂',
        category: 'Build',
        keywords: ['build', '建筑', 'factory-building', '工厂', '烟囱', '厂房', '工作'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fence-one',
        name: '栏栅',
        category: 'Build',
        keywords: ['build', '建筑', 'fence-one', '栏栅', '护栏', '拦网', '栅栏'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fence-two',
        name: '栅栏',
        category: 'Build',
        keywords: ['build', '建筑', 'fence-two', '栅栏', '护栏', '拦网'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ferris-wheel',
        name: '摩天轮',
        category: 'Build',
        keywords: ['build', '建筑', 'ferris-wheel', '摩天轮', '大转轮', '游乐场'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'future-build-one',
        name: '未来大厦',
        category: 'Build',
        keywords: ['build', '建筑', 'future-build-one', '未来大厦', '城楼', '阁楼', '房子', '大厦', '办公楼'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'future-build-three',
        name: '未来建筑',
        category: 'Build',
        keywords: ['build', '建筑', 'future-build-three', '未来建筑', '城楼', '阁楼', '房子', '楼房', '大厦', '办公楼'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'future-build-two',
        name: '未来魔都',
        category: 'Build',
        keywords: ['build', '建筑', 'future-build-two', '未来魔都', '城楼', '阁楼', '房子', '楼房', '大厦'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'garage',
        name: '车库',
        category: 'Build',
        keywords: ['build', '建筑', 'garage', '车库', '门', '卷帘门', '收缩门', '仓库'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'gate',
        name: '大门',
        category: 'Build',
        keywords: ['build', '建筑', 'gate', '大门', '门', '寺庙', '亭子', '景区'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'great-wall',
        name: '长城',
        category: 'Build',
        keywords: ['build', '建筑', 'great-wall', '长城', '墙壁', '城墙', '景区'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'green-house',
        name: '温室房',
        category: 'Build',
        keywords: ['build', '建筑', 'green-house', '温室房', '城楼', '阁楼', '房子', '楼房', '大厦'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'home-two',
        name: '首页',
        category: 'Build',
        keywords: ['build', '建筑', 'home-two', '首页', '家', '主页', '店铺', '房子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hospital-two',
        name: '医院',
        category: 'Build',
        keywords: ['build', '建筑', 'hospital-two', '医院', '医疗', '药品', '治疗', '护理', '健康'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hotel',
        name: '酒店',
        category: 'Build',
        keywords: ['build', '建筑', 'hotel', '酒店', '城楼', '阁楼', '房子', '大厦', '办公楼'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'light-house',
        name: '灯塔',
        category: 'Build',
        keywords: ['build', '建筑', 'light-house', '灯塔', '阁楼', '房子', '灯塔建筑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'maya',
        name: '玛雅',
        category: 'Build',
        keywords: ['build', '建筑', 'maya', '玛雅', '城楼', '阁楼', '房子', '楼房'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'monument-one',
        name: '纪念碑',
        category: 'Build',
        keywords: ['build', '建筑', 'monument-one', '纪念碑', '石碑、纪念碑', '标志'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'monument-two',
        name: '纪念碑',
        category: 'Build',
        keywords: ['build', '建筑', 'monument-two', '纪念碑', '石碑、纪念碑', '标志'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'museum-one',
        name: '博物馆',
        category: 'Build',
        keywords: ['build', '建筑', 'museum-one', '博物馆', '展览馆', '大会堂', '政府', '机构'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'museum-two',
        name: '博物馆',
        category: 'Build',
        keywords: ['build', '建筑', 'museum-two', '博物馆', '展览馆', '大会堂', '政府', '机构'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'nuclear-plant',
        name: '核电厂',
        category: 'Build',
        keywords: ['build', '建筑', 'nuclear-plant', '核电厂', '厂房', '发电厂', '试验场', '工地', '化工厂'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'open-door',
        name: '开门',
        category: 'Build',
        keywords: ['build', '建筑', 'open-door', '开门', '打开', '立体', '透视', '拉门', '出去'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pagoda',
        name: '宝塔',
        category: 'Build',
        keywords: ['build', '建筑', 'pagoda', '宝塔', '城楼', '阁楼', '房子', '大厦', '塔'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'palace',
        name: '宫殿',
        category: 'Build',
        keywords: ['build', '建筑', 'palace', '宫殿', '银行', '房子', '居住', '亭子', '景区'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pearl-of-the-orient',
        name: '东方明珠',
        category: 'Build',
        keywords: ['build', '建筑', 'pearl-of-the-orient', '东方明珠', '阁楼', '楼房', '大厦', '办公楼', '塔'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'phone-booth',
        name: '电话亭',
        category: 'Build',
        keywords: ['build', '建筑', 'phone-booth', '电话亭', '公共电话', '单间'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'prison',
        name: '监狱',
        category: 'Build',
        keywords: ['build', '建筑', 'prison', '监狱', '囚禁', '牢房', '游戏'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pull-door',
        name: '拉门',
        category: 'Build',
        keywords: ['build', '建筑', 'pull-door', '拉门', '开门', '打开', '出去', '立体', '透视'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'push-door',
        name: '推门',
        category: 'Build',
        keywords: ['build', '建筑', 'push-door', '推门', '开门', '打开', '进入'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pyramid',
        name: '金字塔',
        category: 'Build',
        keywords: ['build', '建筑', 'pyramid', '金字塔', '山脉', '户外', '雪山'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'school',
        name: '学校',
        category: 'Build',
        keywords: ['build', '建筑', 'school', '学校', '政府', '机构', '房子', '办公楼'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'security-stall',
        name: '安全台',
        category: 'Build',
        keywords: ['build', '建筑', 'security-stall', '安全台', '高台', '观景台', '裁判台', '电话亭'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shop',
        name: '商店',
        category: 'Build',
        keywords: ['build', '建筑', 'shop', '商店', '购物', '商场', '门店'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shopping-mall',
        name: '商圈',
        category: 'Build',
        keywords: ['build', '建筑', 'shopping-mall', '商圈', '购物', '商城', '购买', '城市', '楼房'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'signal-tower-one',
        name: '信号塔',
        category: 'Build',
        keywords: ['build', '建筑', 'signal-tower-one', '信号塔', '电塔', '网络塔'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'space-colony',
        name: '太空殖民地',
        category: 'Build',
        keywords: ['build', '建筑', 'space-colony', '太空殖民地', '城楼', '阁楼', '房子', '办公楼'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'taj-mahal',
        name: '泰姬陵',
        category: 'Build',
        keywords: ['build', '建筑', 'taj-mahal', '泰姬陵', '城楼', '阁楼', '寺庙', '教堂', '办公楼'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tower',
        name: '塔楼',
        category: 'Build',
        keywords: ['build', '建筑', 'tower', '塔楼', '城楼', '阁楼', '寺庙', '教堂', '办公楼'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tower-of-babel',
        name: '风笛塔',
        category: 'Build',
        keywords: ['build', '建筑', 'tower-of-babel', '风笛塔', '城楼', '阁楼', '寺庙', '教堂', '办公楼'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tower-of-pisa',
        name: '比萨斜塔',
        category: 'Build',
        keywords: ['build', '建筑', 'tower-of-pisa', '比萨斜塔', '城楼', '阁楼', '寺庙', '教堂', '办公楼'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'up-and-down',
        name: '上下楼',
        category: 'Build',
        keywords: ['build', '建筑', 'up-and-down', '上下楼', '电梯', '楼梯', '步行梯', '台阶'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'windmill-one',
        name: '风车',
        category: 'Build',
        keywords: ['build', '建筑', 'windmill-one', '风车', '车', '发电车'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'xiaodu-home',
        name: '小度在家',
        category: 'Build',
        keywords: ['build', '建筑', 'xiaodu-home', '小度在家', '百度', '小度', '音响', '屏幕音响', '智能音响', '音频'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Arrows',
        name: '箭头方向',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向'],
        count: 139
    },
    {
        kind: 'icon',
        key: 'afferent-four',
        name: '传入4',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'afferent-four', '传入4'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'afferent-three',
        name: '传入3',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'afferent-three', '传入3'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'arrow-circle-down',
        name: '下-箭头',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'arrow-circle-down', '下-箭头', '向下', '箭头', '圆圈箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'arrow-circle-left',
        name: '左-箭头',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'arrow-circle-left', '左-箭头', '上一个', '箭头', '圆圈箭头', '左'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'arrow-circle-right',
        name: '右-箭头',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'arrow-circle-right', '右-箭头', '下一个', '箭头', '圆圈箭头', '右'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'arrow-circle-up',
        name: '上-箭头',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'arrow-circle-up', '上-箭头', '向上', '箭头', '圆圈箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'arrow-down',
        name: '箭头下',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'arrow-down', '箭头下', '向下', '箭头', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'arrow-left',
        name: '箭头左',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'arrow-left', '箭头左', '箭头', '向左', '上一个', '返回', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'arrow-left-down',
        name: '箭头左下',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'arrow-left-down', '箭头左下', '向左下', '箭头', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'arrow-left-up',
        name: '箭头左上',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'arrow-left-up', '箭头左上', '向左上', '箭头', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'arrow-right',
        name: '箭头右',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'arrow-right', '箭头右', '向右', '箭头', '下一个', '跳转', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'arrow-right-down',
        name: '箭头右下',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'arrow-right-down', '箭头右下', '向右下', '箭头', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'arrow-right-up',
        name: '箭头右上',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'arrow-right-up', '箭头右上', '向右上', '箭头', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'arrow-up',
        name: '箭头上',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'arrow-up', '箭头上', '箭头', '向上', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'back-one',
        name: '返回',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'back-one', '返回'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'change',
        name: '更改',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'change', '更改', '修改', '改变', '调整', '数据', '线条'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'circle-double-down',
        name: '圆形双下箭头',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'circle-double-down', '圆形双下箭头', '双箭头', '向下', '圆圈箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'circle-double-left',
        name: '圆形双左箭头',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'circle-double-left', '圆形双左箭头', '双箭头', '向左', '圆圈箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'circle-double-right',
        name: '圆形双右箭头',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'circle-double-right', '圆形双右箭头', '双箭头', '向右', '圆圈箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'circle-double-up',
        name: '圆形双上箭头',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'circle-double-up', '圆形双上箭头', '双箭头', '向上', '圆圈箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'circle-left-down',
        name: '圆形左下',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'circle-left-down', '圆形左下', '箭头', '圆圈箭头', '左下方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'circle-left-up',
        name: '圆形左上',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'circle-left-up', '圆形左上', '箭头', '圆圈箭头', '左上方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'circle-right-down',
        name: '圆形右下',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'circle-right-down', '圆形右下', '箭头', '圆圈箭头', '右下方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'circle-right-up',
        name: '圆形右上',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'circle-right-up', '圆形右上', '箭头', '圆圈箭头', '右上方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'click-to-fold',
        name: '点击缩起',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'click-to-fold', '点击缩起', '缩小', '收起', '聚集'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'collapse-text-input',
        name: '收起文本域',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'collapse-text-input', '收起文本域', '缩小', '收起', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'connection-arrow',
        name: '连接箭头',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'connection-arrow', '连接箭头', '连接', '箭头', '相连', '流程'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'corner-down-left',
        name: '向下左角',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'corner-down-left', '向下左角', '向左', '左边', '方向', '箭头', '拐角', '撤回'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'corner-down-right',
        name: '向下右角',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'corner-down-right', '向下右角', '向右', '右边', '方向', '箭头', '拐角', '下'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'corner-left-down',
        name: '左角向下',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'corner-left-down', '左角向下', '向下', '左边', '方向', '箭头', '拐角', '下'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'corner-left-up',
        name: '左角向上',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'corner-left-up', '左角向上', '向上', '左边', '方向', '箭头', '拐角', '上'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'corner-right-down',
        name: '右角向下',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'corner-right-down', '右角向下', '向下', '右边', '下降', '方向', '箭头', '拐角', '下'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'corner-right-up',
        name: '右角向上',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'corner-right-up', '右角向上', '向上', '右边', '上升', '方向', '箭头', '拐角', '上'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'corner-up-left',
        name: '向上左角',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'corner-up-left', '向上左角', '向左', '左角', '左上角', '左拐', '左侧', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'corner-up-right',
        name: '向上右角',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'corner-up-right', '向上右角', '向右', '右边', '方向', '箭头', '拐角', '上'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cycle',
        name: '循环',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'cycle', '循环', '连续', '持续', '轮回', '圆圈', '抽象'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cycle-movement',
        name: '循环移动',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'cycle-movement', '循环移动', '循环', '移动', '收集', '集合', '汇集'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'double-down',
        name: '双下',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'double-down', '双下', '向下', '双箭头', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'double-left',
        name: '双左',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'double-left', '双左', '倒回', '返回', '双箭头', '向左', '上一个', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'double-right',
        name: '双右',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'double-right', '双右', '快进', '向右', '双箭头', '下一个', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'double-up',
        name: '双上',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'double-up', '双上', '向上', '双箭头', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'down',
        name: '下',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'down', '下', '向下', '箭头', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'down-c',
        name: '下-圆',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'down-c', '下-圆', '向下', '箭头', '圆圈箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'down-one',
        name: '下1',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'down-one', '下1', '向下', '箭头', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'down-small',
        name: '下-小',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'down-small', '下-小', '向下', '箭头', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'down-square',
        name: '下箭头-方',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'down-square', '下箭头-方', '向下', '箭头', '方形箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'down-two',
        name: '下1',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'down-two', '下1', '箭头', '下', '指针', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'download',
        name: '下载',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'download', '下载', '向下', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'download-one',
        name: '下载1',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'download-one', '下载1', '下载', '云下载'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'download-three',
        name: '下载3',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'download-three', '下载3', '向下', '下载'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'download-two',
        name: '下载2',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'download-two', '下载2', '下载', '云下载'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'efferent-four',
        name: '传出4',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'efferent-four', '传出4'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'efferent-three',
        name: '传出3',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'efferent-three', '传出3'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'expand-down-one',
        name: '向下收起',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'expand-down-one', '向下收起', '展开', '收起'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'expand-text-input',
        name: '展开文本域',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'expand-text-input', '展开文本域', '放大', '展开', '撑开', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'figma-flatten-selection',
        name: 'Figma 选择箭头',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'figma-flatten-selection', 'Figma 选择箭头', '向下箭头', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fold-up-one',
        name: '向上收起',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'fold-up-one', '向上收起', '缩小', '收起'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'full-screen-one',
        name: '全局放大1',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'full-screen-one', '全局放大1', '全屏', '打开', '展开', '放大'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'full-screen-two',
        name: '全局放大2',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'full-screen-two', '全局放大2', '放大', '全屏'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'go-ahead',
        name: '前进',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'go-ahead', '前进'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'go-end',
        name: '下一曲',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'go-end', '下一曲', '下一个', '下一首', '右', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'go-start',
        name: '上一曲',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'go-start', '上一曲', '上一个', '上一首', '左', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'incoming',
        name: '输入',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'incoming', '输入', '传入', '数据', '录入', '线', '输入数据'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'install',
        name: '安装',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'install', '安装', '下', '箱子', '盒子', '下载'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'invert-left',
        name: '左转',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'invert-left', '左转'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'invert-right',
        name: '右转',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'invert-right', '右转'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'left',
        name: '左',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'left', '左', '返回', '向左', '箭头', '上一个', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'left-c',
        name: '左-圆',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'left-c', '左-圆', '上一个', '箭头', '左', '圆圈箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'left-one',
        name: '左1',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'left-one', '左1', '返回', '向左', '箭头', '上一个', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'left-small',
        name: '左-小',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'left-small', '左-小', '向左', '箭头', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'left-small-down',
        name: '左下-小',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'left-small-down', '左下-小', '方向', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'left-small-up',
        name: '左上-小',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'left-small-up', '左上-小', '方向', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'left-square',
        name: '左箭头-方',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'left-square', '左箭头-方', '上一个', '箭头', '方形箭头', '左'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'left-two',
        name: '左1',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'left-two', '左1', '箭头', '左', '指针', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'login',
        name: '进入',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'login', '进入', '向左', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'logout',
        name: '退出',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'logout', '退出', '向右', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'loop-once',
        name: '循环一次',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'loop-once', '循环一次', '循环', '单次循环', '播放', '返回', '单曲循环'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'menu-fold',
        name: '收起菜单',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'menu-fold', '收起菜单', '收起', '左侧收起', '侧边收起'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'menu-fold-one',
        name: '收起菜单1',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'menu-fold-one', '收起菜单1', '展开', '侧边展开'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'menu-unfold',
        name: '展开菜单',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'menu-unfold', '展开菜单', '展开', '右侧展开', '侧边展开'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'menu-unfold-one',
        name: '展开菜单1',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'menu-unfold-one', '展开菜单1', '收起', '侧边收起'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'move-in',
        name: '向内移动',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'move-in', '向内移动', '移动', '剧中', '聚合', '合并'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'new-afferent',
        name: '新传入',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'new-afferent', '新传入'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'new-efferent',
        name: '新传出',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'new-efferent', '新传出'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'off-screen-one',
        name: '全局缩小1',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'off-screen-one', '全局缩小1', '缩小', '收起', '缩放'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'off-screen-two',
        name: '全局缩小2',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'off-screen-two', '全局缩小2', '缩小', '小屏'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'outgoing',
        name: '传出',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'outgoing', '传出', '传送', '输出', '数据', '线', '传出数据'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'play-cycle',
        name: '循环播放',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'play-cycle', '循环播放', '刷新', '循环', '播放', '单曲循环'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'play-once',
        name: '播放一次',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'play-once', '播放一次', '箭头', '播放', '循环', '单次循环'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'recycling',
        name: '可回收',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'recycling', '可回收', '组件', '循环', '可持续', '新能源', '环保'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'recycling-pool',
        name: '回收池',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'recycling-pool', '回收池', '聚合', '收拢', '回收', '沉淀'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'redo',
        name: '重新',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'redo', '重新', '重做', '再做', '刷新', '旋转'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'reject',
        name: '驳回',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'reject', '驳回', '拒绝', '不通过', '有问题'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'right',
        name: '右',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'right', '右', '下一个', '向右', '箭头', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'right-c',
        name: '右-圆',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'right-c', '右-圆', '下一个', '箭头', '右', '圆圈箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'right-one',
        name: '右1',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'right-one', '右1', '下一个', '向右', '箭头', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'right-small',
        name: '右-小',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'right-small', '右-小', '箭头', '向右', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'right-small-down',
        name: '右下-小',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'right-small-down', '右下-小', '方向', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'right-small-up',
        name: '右上-小',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'right-small-up', '右上-小', '方向', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'right-square',
        name: '右箭头-方',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'right-square', '右箭头-方', '下一个', '箭头', '方形箭头', '右'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'right-two',
        name: '右1',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'right-two', '右1', '箭头', '右', '指针', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rotate',
        name: '旋转',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'rotate', '旋转', '翻转', '90', '度旋转', '抛出', '移动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rotation-horizontal',
        name: '横向旋转',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'rotation-horizontal', '横向旋转', '旋转', '横向', '水平旋转', '环绕'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rotation-vertical',
        name: '纵向旋转',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'rotation-vertical', '纵向旋转', '旋转', '纵向', '环绕'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'send',
        name: '发送',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'send', '发送', '飞机', '飞书', '导航'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'send-one',
        name: '发送1',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'send-one', '发送1', '飞机', '发送', '飞书', '导航'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shuffle',
        name: '洗牌',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'shuffle', '洗牌', '混合', '回库', '交叉', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shuffle-one',
        name: '洗牌',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'shuffle-one', '洗牌', '刷新', '混合', '回库', '交叉', '随机'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sliding-horizontal',
        name: '水平拖动',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'sliding-horizontal', '水平拖动', '双方向', '方向', '箭头', '左右'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sliding-vertical',
        name: '垂直拖动',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'sliding-vertical', '垂直拖动', '双方向', '方向', '箭头', '上下'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sort',
        name: '排序',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'sort', '排序', '上下', '顺序', '排列'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sort-four',
        name: '排序',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'sort-four', '排序', '序列', '排列', '调整顺序', '顺序', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sort-one',
        name: '排序1',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'sort-one', '排序1', '顺序', '排序', '排列'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sort-three',
        name: '排序3',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'sort-three', '排序3', '排序', '上下', '顺序', '排列'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sort-two',
        name: '排序2',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'sort-two', '排序2', '排序', '上下', '顺序', '排列'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'switch',
        name: '切换',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'switch', '切换', '箭头', '左右箭头', '转换'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'to-bottom',
        name: '去底部',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'to-bottom', '去底部', '下', '底部', '下载', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'to-bottom-one',
        name: '去底部1',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'to-bottom-one', '去底部1', '箭头', '下', '底部'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'to-left',
        name: '去左侧',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'to-left', '去左侧', '箭头', '左'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'to-right',
        name: '去右侧',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'to-right', '去右侧', '箭头', '右'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'to-top',
        name: '去顶部',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'to-top', '去顶部', '上', '顶部', '上传', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'to-top-one',
        name: '去顶部1',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'to-top-one', '去顶部1', '箭头', '上', '顶部'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'transfer-data',
        name: '双向数据互传',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'transfer-data', '双向数据互传', '传输', '传送', '传出', '传入', '互传', '线'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'trending-down',
        name: '趋势下降',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'trending-down', '趋势下降', '下降', '向下', '降低', '下跌', '趋势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'trending-up',
        name: '趋势上升',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'trending-up', '趋势上升', '上升', '向上', '提升', '趋势', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'undo',
        name: '撤销',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'undo', '撤销', '返回', '驳回', '刷新', '旋转'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'up',
        name: '上',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'up', '上', '向上', '箭头', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'up-c',
        name: '上-圆',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'up-c', '上-圆', '向上', '箭头', '圆圈箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'up-one',
        name: '上1',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'up-one', '上1', '向上', '箭头', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'up-small',
        name: '上-小',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'up-small', '上-小', '箭头', '向上', '小箭头', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'up-square',
        name: '上箭头-方',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'up-square', '上箭头-方', '向上', '箭头', '方形箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'up-two',
        name: '上1',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'up-two', '上1', '箭头', '上', '指针', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'upload',
        name: '上传',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'upload', '上传', '向上', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'upload-one',
        name: '上传1',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'upload-one', '上传1', '上传', '云上传', '载入'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'upload-three',
        name: '上传3',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'upload-three', '上传3', '向上', '载入', '上传'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'upload-two',
        name: '上传2',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'upload-two', '上传2', '上传', '云上传'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'zoom-internal',
        name: '缩放',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'zoom-internal', '缩放', '内缩放', '大小'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'expand-all',
        name: '全部展开',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'expand-all', '全部展开', '打开', '张开', '展示'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'collapse-all',
        name: '全部折叠',
        category: 'Arrows',
        keywords: ['arrows', '箭头方向', 'collapse-all', '全部折叠', '收缩', '关闭', '收起', '隐藏'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Communicate',
        name: '交流沟通',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通'],
        count: 27
    },
    {
        kind: 'icon',
        key: 'comment',
        name: '评论',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'comment', '评论', '对话', '聊天', '消息', '通知'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'comment-one',
        name: '评论',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'comment-one', '评论', '对话', '聊天', '消息', '通知'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'comments',
        name: '评论',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'comments', '评论', '信息', '聊天', '通知', '社交', '沟通', '新消息', '合作洽谈', '评论区'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'communication',
        name: '沟通',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'communication', '沟通', '信息', '聊天', '通知', '社交', '新消息', '合作洽谈', '评论'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'message',
        name: '信息',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'message', '信息', '聊天', '消息', '社交', '通讯', '沟通'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'message-emoji',
        name: '表情信息',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'message-emoji', '表情信息', '对话', '评论', '聊天', '消息', '通知'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'message-failed',
        name: '信息失败',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'message-failed', '信息失败', '对话', '评论', '聊天', '消息', '通知', '失败'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'message-one',
        name: '消息',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'message-one', '消息', '信息', '聊天', '通知', '社交', '沟通'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'message-privacy',
        name: '信息加密',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'message-privacy', '信息加密', '对话', '评论', '聊天', '消息', '通知', '加密', '安全'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'message-search',
        name: '信息搜索',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'message-search', '信息搜索', '对话', '评论', '聊天', '消息', '通知', '搜索'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'message-security',
        name: '信息安全',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'message-security', '信息安全', '对话', '评论', '聊天', '消息', '通知', '加密', '安全'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'message-sent',
        name: '信息已发送',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'message-sent', '信息已发送', '发送信息', '消息', '完成'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'message-success',
        name: '信息成功',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'message-success', '信息成功', '对话', '评论', '聊天', '消息', '通知', '发送'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'message-unread',
        name: '未读消息',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'message-unread', '未读消息', '信息', '聊天', '通知', '社交', '沟通', '新消息', '评论'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'online-meeting',
        name: '线上办公室',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'online-meeting', '线上办公室', '语音会议', '视频中'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'phone-call',
        name: '电话呼叫',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'phone-call', '电话呼叫', '通话记录', '电话', '呼叫', '通话'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'phone-incoming',
        name: '电话拨入',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'phone-incoming', '电话拨入', '拨入', '呼叫', '电话', '通话'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'phone-incoming-one',
        name: '电话拨入',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'phone-incoming-one', '电话拨入', '拨入', '电话', '接收', '通话', '呼叫'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'phone-missed',
        name: '电话错过',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'phone-missed', '电话错过', '电话', '呼叫失败', '通话', '错过', '静音'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'phone-off',
        name: '电话关闭',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'phone-off', '电话关闭', '电话', '呼叫', '通话', '关闭通话', '关闭联系'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'phone-outgoing',
        name: '电拨拨出',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'phone-outgoing', '电拨拨出', '拨出', '呼叫', '通话', '电话', '接收'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'phone-outgoing-one',
        name: '电拨拨出',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'phone-outgoing-one', '电拨拨出', '拨出', '电话', '呼叫', '通话'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'phone-telephone',
        name: '电话',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'phone-telephone', '电话', '呼叫', '通话'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'phone-video-call',
        name: '视频电话',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'phone-video-call', '视频电话', '通话'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tips-one',
        name: '提示',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'tips-one', '提示', '信息提示', '警示', '报错', '提示信息', 'message'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'topic',
        name: '话题',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'topic', '话题', '辩论', '讨论', '提示', '气泡'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'topic-discussion',
        name: '话题讨论',
        category: 'Communicate',
        keywords: ['communicate', '交流沟通', 'topic-discussion', '话题讨论', '提示气泡'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Travel',
        name: '交通旅游',
        category: 'Travel',
        keywords: ['travel', '交通旅游'],
        count: 101
    },
    {
        kind: 'icon',
        key: 'acceleration',
        name: '飞机加速',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'acceleration', '飞机加速', '加速', '加速度', '超音速', '快速', '飞行气流'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'airplane',
        name: '飞机',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'airplane', '飞机'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'airplane-window',
        name: '飞机窗口',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'airplane-window', '飞机窗口', '靠窗', '靠边', '座椅', '窗口', '窗户', '窗外'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'airplane-window-one',
        name: '飞机窗口',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'airplane-window-one', '飞机窗口', '靠窗', '靠边', '座椅', '窗口'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'anchor-two',
        name: '抛锚',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'anchor-two', '抛锚', '航行', '出海', '锚点'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'aviation',
        name: '航空',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'aviation', '航空', '飞机', '飞行', '滑行', '飞行中'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'baggage-delay',
        name: '行李延误',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'baggage-delay', '行李延误'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'brake-pads',
        name: '刹车片',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'brake-pads', '刹车片', '汽车'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bus-one',
        name: '公交',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'bus-one', '公交'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bus-two',
        name: '公交车',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'bus-two', '公交车', '运输', '交通', '汽车', '大巴'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cable-car',
        name: '缆车',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'cable-car', '缆车', '电缆车', '观光车'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'camp',
        name: '野营',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'camp', '野营', '宿营', '宿营地', '帐篷', '户外'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'car-battery',
        name: '汽车电瓶',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'car-battery', '汽车电瓶', '发电'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'check-in',
        name: '插入',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'check-in', '插入', '值机', '检票'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cocktail',
        name: '鸡尾酒',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'cocktail', '鸡尾酒', '浪漫', '酒杯', '红酒', '调制酒', '气泡酒'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'coconut-tree',
        name: '椰子树',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'coconut-tree', '椰子树', '海边', '沙滩', '棕榈树'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'compass-one',
        name: '指南针',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'compass-one', '指南针', '方向', '位置'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'consignment',
        name: '托运',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'consignment', '托运', '运输', '运送', '行李托运', '传送'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cruise',
        name: '航海',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'cruise', '航海', '邮轮', '轮船', '轮渡'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'descend',
        name: '下降',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'descend', '下降', '降落'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'diving',
        name: '潜水',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'diving', '潜水', '游泳镜', '游泳'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'earth',
        name: '地球仪',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'earth', '地球仪', '网路', '语言', '全球', '互联网'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'enquire',
        name: '安检',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'enquire', '安检', '问询', '检票', '人工', '沟通'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fishing',
        name: '垂钓',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'fishing', '垂钓', '钓鱼', '平静'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'flag',
        name: '旗子',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'flag', '旗子', '旗帜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'flight-airflow',
        name: '飞行气流',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'flight-airflow', '飞行气流', '飞行中', '飞行平稳'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'flight-safety',
        name: '飞行安全',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'flight-safety', '飞行安全', '飞行保险'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'frigate',
        name: '军舰',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'frigate', '军舰'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'gate-machine',
        name: '检票机',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'gate-machine', '检票机', '闸机', '检票', '过关'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'globe',
        name: '全球',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'globe', '全球', '地球仪', '玩具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'gps',
        name: '汽车导航',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'gps', '汽车导航'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'guide-board',
        name: '指示牌',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'guide-board', '指示牌', '方向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'high-speed-rail',
        name: '高铁',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'high-speed-rail', '高铁'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'homestay',
        name: '民宿',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'homestay', '民宿', '酒店', '度假', '农家乐', '度假村'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hot-air-balloon',
        name: '热气球',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'hot-air-balloon', '热气球', '气球', '氢气球'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'in-flight',
        name: '飞行巡航',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'in-flight', '飞行巡航', '环球旅行', '周游世界', '飞行'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'international',
        name: '国际化',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'international', '国际化', '非中国区', '全球', '地球', '国际', '地图'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'journey',
        name: '旅行',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'journey', '旅行', '环球旅行', '周游世界', '绕地飞行'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'landing',
        name: '降落',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'landing', '降落'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'landscape',
        name: '风景区',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'landscape', '风景区', '山水', '风景', '景区', '景点', '自然', '户外', '环境'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'local',
        name: '已定位',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'local', '已定位', '位置', '坐标', '地点'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'local-pin',
        name: '本地',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'local-pin', '本地', '游戏', '摇杆', '图钉', '出行', '交通'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'local-two',
        name: '本地',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'local-two', '本地', '地表', '地点', '地图', '出行', '交通', '运输'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'luggage',
        name: '行李箱',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'luggage', '行李箱', '行李'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'manual-gear',
        name: '手动挡',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'manual-gear', '手动挡', '汽车'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'map-distance',
        name: '地图距离',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'map-distance', '地图距离', '地图', '距离', '出行', '交通', '方向', '位置', '路线', '导航'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'map-draw',
        name: '地图',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'map-draw', '地图', '位置', '地理', '方位', '方向', '交通', '定位'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'map-road',
        name: '地图道路',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'map-road', '地图道路', '地图', '道路', '交通', '出行'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'map-road-two',
        name: '地图',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'map-road-two', '地图', '地点', '出行', '交通', '运输'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'map-two',
        name: '地图',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'map-two', '地图', '地点', '出行', '交通', '运输'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mark',
        name: '标记',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'mark', '标记', '旗帜', '旗子', '记号', '活动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mountain',
        name: '山',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'mountain', '山'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mounted',
        name: '摩托',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'mounted', '摩托'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'navigation',
        name: '导航',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'navigation', '导航', '指针', '方向', '指引'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'parachute',
        name: '降落伞',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'parachute', '降落伞', '跳伞', '运动', '体育', '危险'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'parking',
        name: '停车场',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'parking', '停车场', '停车', '坐标', '地图', '停车位', '标记'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'passport-one',
        name: '护照',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'passport-one', '护照', '护照夹', '证件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pennant',
        name: '三角旗',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'pennant', '三角旗', '旗帜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'photograph',
        name: '旅行照',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'photograph', '旅行照', '照片', '风景照', '摄影', '拍照'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'planet',
        name: '星球',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'planet', '星球', '地球', '环绕', '卫星', '宇宙', '浏览器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pyramid-one',
        name: '金字塔',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'pyramid-one', '金字塔', '日出', '景点'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'railway',
        name: '铁路',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'railway', '铁路', '陆运', '运输'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'repositioning',
        name: '重新定位',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'repositioning', '重新定位', '定位', '位置', '刷新位置'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'resting',
        name: '休闲',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'resting', '休闲', '遮阳伞', '躺椅', '遮阳', '休息', '小憩'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'riding-one',
        name: '骑术',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'riding-one', '骑术', '骑马', '游玩', '户外'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'road',
        name: '道路',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'road', '道路', '交通', '运输'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'road-cone',
        name: '路锥',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'road-cone', '路锥', '道路', '警示', '安全', '交通'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'road-one',
        name: '马路1',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'road-one', '马路1'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'road-sign',
        name: '方向标识',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'road-sign', '方向标识', '方向', '指示牌', '单方向', '交通'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'road-sign-both',
        name: '方向标识',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'road-sign-both', '方向标识', '方向', '指示牌', '多方向', '渠道'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rocket',
        name: '火箭',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'rocket', '火箭', '发射', '上升', '速度'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'round-trip',
        name: '往返飞',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'round-trip', '往返飞', '往返', '往返旅行'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sailboat-one',
        name: '帆船1',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'sailboat-one', '帆船1'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sailing',
        name: '航行',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'sailing', '航行', '帆船', '船舶'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sandals',
        name: '凉鞋',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'sandals', '凉鞋', '拖鞋', '凉拖', '度假', '休闲', '人字拖'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'selfie',
        name: '自拍杆',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'selfie', '自拍杆', '自拍', '拍照', '拍摄', '摄影'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'set-off',
        name: '出发',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'set-off', '出发', '出行', '下班', '动身'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shade',
        name: '乘凉',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'shade', '乘凉', '雨伞', '保护', '休闲'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ship',
        name: '船',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'ship', '船', '舰船', '出行', '海洋', '运输', '交通'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'steering-wheel',
        name: '方向盘',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'steering-wheel', '方向盘', '汽车'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sunbath',
        name: '日光浴',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'sunbath', '日光浴', '休闲', '休息', '躺椅', '度假', '放松'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sunrise',
        name: '日出',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'sunrise', '日出', '风景'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sunset',
        name: '落日',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'sunset', '落日'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sunshade',
        name: '遮阳篷',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'sunshade', '遮阳篷', '遮阳伞', '度假', '休闲'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'take-off',
        name: '飞机起飞',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'take-off', '飞机起飞', '飞行', '起飞', '航空', '航空航天', '飞机'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'take-off-one',
        name: '起飞',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'take-off-one', '起飞'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'taxi',
        name: '出租车',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'taxi', '出租车', '出行', '交通', '汽车', '付费'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tent',
        name: '帐篷',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'tent', '帐篷', '户外', '露营', '居住', '家'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tent-banner',
        name: '帐篷旗帜',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'tent-banner', '帐篷旗帜', '帐篷', '户外', '露营', '居住', '家'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'theater',
        name: '影院',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'theater', '影院', '看电影', '幕布', '电影', 'IMAX'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tickets-checked',
        name: '票务检查',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'tickets-checked', '票务检查', '检票', '值机', '票务', '票', '票据', '开票'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tickets-one',
        name: '门票',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'tickets-one', '门票', '检票', '值机', '票务', '票', '票据', '机票', '票夹'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tickets-two',
        name: '门票',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'tickets-two', '门票', '检票', '值机', '票务', '票', '票据', '机票', '发票', '收据'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tour-bus',
        name: '旅游巴士',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'tour-bus', '旅游巴士', '陆运', '巴士', '公交', '公交车', '大巴车', '旅行巴士'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'train',
        name: '火车',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'train', '火车'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'transfer',
        name: '转机',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'transfer', '转机', '换乘', '移动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'transport',
        name: '运送车',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'transport', '运送车', '行李运输', '运送', '搬运', '托运'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'universal',
        name: '宇宙',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'universal', '宇宙'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'vacation',
        name: '椰树',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'vacation', '椰树'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'wheelchair',
        name: '轮椅',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'wheelchair', '轮椅', '残疾', '运动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'world',
        name: '世界',
        category: 'Travel',
        keywords: ['travel', '交通旅游', 'world', '世界', '环球', '地球', '国际', '地图'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Components',
        name: '界面组件',
        category: 'Components',
        keywords: ['components', '界面组件'],
        count: 8
    },
    {
        kind: 'icon',
        key: 'carousel',
        name: '轮播',
        category: 'Components',
        keywords: ['components', '界面组件', 'carousel', '轮播', '轮换', '轮转', '头图', '焦点图', '运营图'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'checklist',
        name: '检查列表',
        category: 'Components',
        keywords: ['components', '界面组件', 'checklist', '检查列表', '核查', '列表', '校验', '纠正', '检查'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'page',
        name: '页面',
        category: 'Components',
        keywords: ['components', '界面组件', 'page', '页面', '网页', '布局', '排版', '模块', '划分'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'page-template',
        name: '页面模版',
        category: 'Components',
        keywords: ['components', '界面组件', 'page-template', '页面模版', '页面', '模版', '布局'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'palette',
        name: '调色盘',
        category: 'Components',
        keywords: ['components', '界面组件', 'palette', '调色盘', '调色板', '美术', '绘画', '颜色', '主题'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'switch-button',
        name: '切换按钮',
        category: 'Components',
        keywords: ['components', '界面组件', 'switch-button', '切换按钮', '开关', '切换', '组合'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'table-file',
        name: '表格',
        category: 'Components',
        keywords: ['components', '界面组件', 'table-file', '表格', '数据', '列表'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tree-list',
        name: '树结构',
        category: 'Components',
        keywords: ['components', '界面组件', 'tree-list', '树结构', '结构', '树', '序列', '排序'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Connect',
        name: '链接',
        category: 'Connect',
        keywords: ['connect', '链接'],
        count: 52
    },
    {
        kind: 'icon',
        key: 'anchor',
        name: '锚点',
        category: 'Connect',
        keywords: ['connect', '链接', 'anchor', '锚点', '选中', '可编辑', '操作'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'anchor-one',
        name: '锚点',
        category: 'Connect',
        keywords: ['connect', '链接', 'anchor-one', '锚点', '曲线', '贝塞尔', '可编辑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'anchor-round',
        name: '锚轮',
        category: 'Connect',
        keywords: ['connect', '链接', 'anchor-round', '锚轮', '锚点', '定位', '钢笔工具', '曲线', '路径'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'anchor-squre',
        name: '锚方',
        category: 'Connect',
        keywords: ['connect', '链接', 'anchor-squre', '锚方', '锚点', '定位', '钢笔工具', '曲线', '路径'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'api',
        name: 'API 接口',
        category: 'Connect',
        keywords: ['connect', '链接', 'api', 'API 接口', '接口', '开发', '程序', '研发', 'API', '关联', '连接'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'applet-closed',
        name: '小程序关闭',
        category: 'Connect',
        keywords: ['connect', '链接', 'applet-closed', '小程序关闭'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'assembly-line',
        name: '流水线',
        category: 'Connect',
        keywords: ['connect', '链接', 'assembly-line', '流水线', '流转', '流向', '串联', '连接', '路径'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bezier-curve',
        name: '贝塞尔曲线',
        category: 'Connect',
        keywords: ['connect', '链接', 'bezier-curve', '贝塞尔曲线', '编辑', '节点'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'branch',
        name: '分支',
        category: 'Connect',
        keywords: ['connect', '链接', 'branch', '分支', '程序', '管理', 'Git'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'branch-one',
        name: '分支',
        category: 'Connect',
        keywords: ['connect', '链接', 'branch-one', '分支', '排列', '结构', '整理', '树状图', '散发'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'branch-two',
        name: '分支',
        category: 'Connect',
        keywords: ['connect', '链接', 'branch-two', '分支', '代码管理', '分布式'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'clue',
        name: '线索',
        category: 'Connect',
        keywords: ['connect', '链接', 'clue', '线索', '线索池', '连接', '相连'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'command',
        name: '命令键',
        category: 'Connect',
        keywords: ['connect', '链接', 'command', '命令键', '命令建', '符号', '键盘', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'connect',
        name: '链接',
        category: 'Connect',
        keywords: ['connect', '链接', '分享', '连接', '拓扑图', '图表'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'connect-address-one',
        name: '连接地址1',
        category: 'Connect',
        keywords: ['connect', '链接', 'connect-address-one', '连接地址1', '锚点', '定位', '定点', '鱼钩'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'connect-address-two',
        name: '连接地址2',
        category: 'Connect',
        keywords: ['connect', '链接', 'connect-address-two', '连接地址2', '锚点', '定位', '定点', '鱼钩'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'connection',
        name: '连接',
        category: 'Connect',
        keywords: ['connect', '链接', 'connection', '连接', '箭头', '线段', '结合'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'connection-box',
        name: '分组',
        category: 'Connect',
        keywords: ['connect', '链接', 'connection-box', '分组', '关联', '联系', '服务器', '技术', '管理'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'connection-point',
        name: '连接点',
        category: 'Connect',
        keywords: ['connect', '链接', 'connection-point', '连接点', '网络', '节点', '网络邻居', '渠道'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'connection-point-two',
        name: '两点连接',
        category: 'Connect',
        keywords: ['connect', '链接', 'connection-point-two', '两点连接', '相连'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fork',
        name: '分叉',
        category: 'Connect',
        keywords: ['connect', '链接', 'fork', '分叉', '交叉', '拷贝代码', '复制', 'Git'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'left-and-right-branch',
        name: '左右分支',
        category: 'Connect',
        keywords: ['connect', '链接', 'left-and-right-branch', '左右分支'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'left-branch',
        name: '左分支',
        category: 'Connect',
        keywords: ['connect', '链接', 'left-branch', '左分支'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'link-break',
        name: '断开连接',
        category: 'Connect',
        keywords: ['connect', '链接', 'link-break', '断开连接', '禁止使用', '插入', '终止', '解绑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'link-cloud',
        name: '云运行',
        category: 'Connect',
        keywords: ['connect', '链接', 'link-cloud', '云运行', '云', '转化', '传输', '运行'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'link-cloud-faild',
        name: '云中断',
        category: 'Connect',
        keywords: ['connect', '链接', 'link-cloud-faild', '云中断', '终止', '错误', '出错'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'link-cloud-sucess',
        name: '云连接',
        category: 'Connect',
        keywords: ['connect', '链接', 'link-cloud-sucess', '云连接', '成功', '上传成功'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'link-four',
        name: '链接4',
        category: 'Connect',
        keywords: ['connect', '链接', 'link-four', '链接4', '连接', '接口', '按钮', '指示灯', '插口', '充电口'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'link-interrupt',
        name: '链接中断',
        category: 'Connect',
        keywords: ['connect', '链接', 'link-interrupt', '链接中断', '断开', '禁止', '错误', '出错', '失败', '解绑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'link-three',
        name: '链接',
        category: 'Connect',
        keywords: ['connect', '链接', 'link-three', '组合', '合并', '绑定'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'lower-branch',
        name: '下分支',
        category: 'Connect',
        keywords: ['connect', '链接', 'lower-branch', '下分支'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'network-tree',
        name: '网络节点',
        category: 'Connect',
        keywords: ['connect', '链接', 'network-tree', '网络节点', '网络', '结构', '节点', '联通', '信息', '传输', '信号'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pull-requests',
        name: '推送请求',
        category: 'Connect',
        keywords: ['connect', '链接', 'pull-requests', '推送请求', '推动', '消息', 'Git'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'relational-graph',
        name: '关系链',
        category: 'Connect',
        keywords: ['connect', '链接', 'relational-graph', '关系链', '连接', '发散', '跳跃'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'right-branch',
        name: '右分支',
        category: 'Connect',
        keywords: ['connect', '链接', 'right-branch', '右分支'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'right-branch-one',
        name: '右分支1',
        category: 'Connect',
        keywords: ['connect', '链接', 'right-branch-one', '右分支1'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'right-branch-two',
        name: '右分支2',
        category: 'Connect',
        keywords: ['connect', '链接', 'right-branch-two', '右分支2'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ring',
        name: '圆环',
        category: 'Connect',
        keywords: ['connect', '链接', 'ring', '圆环', '循环', '环形', '连接', '开源库'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ring-one',
        name: '圆环',
        category: 'Connect',
        keywords: ['connect', '链接', 'ring-one', '圆环', '循环', '环形', '连接', '合作'],
        count: 0
    },
    {
        kind: 'icon',
        key: 's-turn-down',
        name: '底部连接',
        category: 'Connect',
        keywords: ['connect', '链接', 's-turn-down', '底部连接', '流转', '传输', '串联'],
        count: 0
    },
    {
        kind: 'icon',
        key: 's-turn-left',
        name: '左侧连接',
        category: 'Connect',
        keywords: ['connect', '链接', 's-turn-left', '左侧连接', '流转', '传输', '串联'],
        count: 0
    },
    {
        kind: 'icon',
        key: 's-turn-right',
        name: '右侧连接',
        category: 'Connect',
        keywords: ['connect', '链接', 's-turn-right', '右侧连接', '流转', '传输', '串联'],
        count: 0
    },
    {
        kind: 'icon',
        key: 's-turn-up',
        name: '顶部连接',
        category: 'Connect',
        keywords: ['connect', '链接', 's-turn-up', '顶部连接', '上侧连接', '传输', '串联', '流转'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'share-one',
        name: '分享',
        category: 'Connect',
        keywords: ['connect', '链接', 'share-one', '分享', '转发', '共享', '连接'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'split-turn-down-left',
        name: '左下分支',
        category: 'Connect',
        keywords: ['connect', '链接', 'split-turn-down-left', '左下分支', '思维导图', '分支', '分散'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'split-turn-down-right',
        name: '右下分支',
        category: 'Connect',
        keywords: ['connect', '链接', 'split-turn-down-right', '右下分支', '思维导图', '分支', '分散'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tree-diagram',
        name: '树状图',
        category: 'Connect',
        keywords: ['connect', '链接', 'tree-diagram', '树状图', '整理', '散发', '分支', '结构'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'u-turn-down',
        name: '上回转',
        category: 'Connect',
        keywords: ['connect', '链接', 'u-turn-down', '上回转', '转向', '回转', '返回'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'u-turn-left',
        name: '右回转',
        category: 'Connect',
        keywords: ['connect', '链接', 'u-turn-left', '右回转', '转向', '回转', '返回'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'u-turn-right',
        name: '左回转',
        category: 'Connect',
        keywords: ['connect', '链接', 'u-turn-right', '左回转', '转向', '回转', '返回'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'u-turn-up',
        name: '下回转',
        category: 'Connect',
        keywords: ['connect', '链接', 'u-turn-up', '下回转', '转向', '回转', '返回'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'whole-site-accelerator',
        name: '站点加速',
        category: 'Connect',
        keywords: ['connect', '链接', 'whole-site-accelerator', '站点加速', '闪电', '连接'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Operate',
        name: '美颜调整',
        category: 'Operate',
        keywords: ['operate', '美颜调整'],
        count: 31
    },
    {
        kind: 'icon',
        key: 'beauty',
        name: '美颜',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'beauty', '美颜', '美妆', '变美', '化妆', '美女', '女性', '女性用户'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'click',
        name: '点击',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'click', '点击', '选中', '鼠标', '操作', '执行'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'color-filter',
        name: '颜色滤镜',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'color-filter', '颜色滤镜', '滤镜', '过滤', '效果', '特效'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'contrast',
        name: '对比度',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'contrast', '对比度', '参数', '摄像', '牌照', '配置'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'contrast-view',
        name: '对比',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'contrast-view', '对比', '对比查看', '查看', '编辑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'contrast-view-circle',
        name: '对比',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'contrast-view-circle', '对比', '对比度', '调整', '编辑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'effects',
        name: '特效',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'effects', '特效', '美化', '效果', '化妆', '变美', '改变'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'erase',
        name: '擦除',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'erase', '擦除', '橡皮', '清除', '移除', '消灭'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'face-recognition',
        name: '人脸识别',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'face-recognition', '人脸识别', '人脸支付', '人脸', '刷脸', '人脸密码', '扫脸'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'figma-mask',
        name: '遮罩',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'figma-mask', '遮罩', '遮挡', '编辑', '功能', '绘图'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fill',
        name: '填充',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'fill', '填充', '空', '排除', '颜色面板'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'flip-camera',
        name: '翻转镜头',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'flip-camera', '翻转镜头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'game-two',
        name: '游戏',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'game-two', '游戏', '手柄', '操作', '玩'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'lattice-pattern',
        name: '晶格图案',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'lattice-pattern', '晶格图案', '晶格', '编织', '背景', '图案'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'loading-one',
        name: '加载',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'loading-one', '加载', '等待', '转圈', '缓冲'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'loading-two',
        name: '加载',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'loading-two', '加载', '等待', '转圈', '缓冲'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'magnet',
        name: '磁铁',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'magnet', '磁铁', '吸引', '正负极', '磁力', '物理', '电力'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mask-one',
        name: '面具',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'mask-one', '面具', '补水', '保湿', '美白', '敷面膜', '面膜', '医美'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'material',
        name: '素材',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'material', '素材', '用户素材', '图像'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'material-two',
        name: '材质',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'material-two', '材质', '拍摄', '设置', '摄像'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mirror-one',
        name: '镜子',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'mirror-one', '镜子', '化妆镜', '美状镜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pic-one',
        name: '图片1',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'pic-one', '图片1', '照片', '相册'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'recycle-bin',
        name: '回收站',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'recycle-bin', '回收站', '回收', '垃圾桶', '恢复', '积累'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'reverse-rotation',
        name: '逆向旋转',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'reverse-rotation', '逆向旋转', '逆向', '逆时针', '逆时针旋转', '旋转', '转动', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rotating-add',
        name: '旋转添加',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'rotating-add', '旋转添加', '旋转', '添加', '转动', '箭头', '加号'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rotating-forward',
        name: '正向旋转',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'rotating-forward', '正向旋转', '正向', '顺时针', '顺时针旋转', '旋转', '转动', '箭头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rotation',
        name: '旋转',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'rotation', '旋转', '加载', '圆'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'scan-setting',
        name: '扫描设置',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'scan-setting', '扫描设置', '设置', '扫描', '打印', '方向', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'screen-rotation',
        name: '屏幕旋转',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'screen-rotation', '屏幕旋转', '旋转', '屏幕', '转动', '竖转横'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'stickers',
        name: '贴纸',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'stickers', '贴纸', '贴画', '插图', '壁纸'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'switch-track',
        name: '切换轨道',
        category: 'Operate',
        keywords: ['operate', '美颜调整', 'switch-track', '切换轨道', '切换', '轨道', '线路'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Baby',
        name: '母婴儿童',
        category: 'Baby',
        keywords: ['baby', '母婴儿童'],
        count: 47
    },
    {
        kind: 'icon',
        key: 'baby-app',
        name: '应用',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'baby-app', '应用', '电脑', '小孩'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'baby-bottle',
        name: '奶瓶',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'baby-bottle', '奶瓶', '婴儿', '牛奶', '儿童'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'baby-car-seat',
        name: '车载座',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'baby-car-seat', '车载座', '座椅'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'baby-feet',
        name: '脚掌',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'baby-feet', '脚掌', '脚', '脚印'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'baby-meal',
        name: '餐具',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'baby-meal', '餐具', '勺子', '盘子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'baby-mobile',
        name: '摇玩',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'baby-mobile', '摇玩', '挂钩'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'baby-one',
        name: '儿童1',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'baby-one', '儿童1', '儿童', '宝宝', '娃娃'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'baby-pants',
        name: '裤子',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'baby-pants', '裤子', '秋裤'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'baby-sling',
        name: '背带',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'baby-sling', '背带', '孩子', '儿童'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'baby-taste',
        name: '品尝',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'baby-taste', '品尝', '鬼脸', '味道', '口味'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bib',
        name: '吊带裙',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'bib', '吊带裙', '围巾', '就餐裙'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'booster-car-seat',
        name: '辅助座椅',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'booster-car-seat', '辅助座椅', '座椅'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'boy',
        name: '男孩',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'boy', '男孩', '人', '性别', '男'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'boy-one',
        name: '男孩1',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'boy-one', '男孩1', '人', '性别', '男'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'boy-stroller',
        name: '男儿童车',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'boy-stroller', '男儿童车', '童车'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'boy-two',
        name: '男孩2',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'boy-two', '男孩2', '人', '性别', '男'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'breast-pump',
        name: '吸奶器',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'breast-pump', '吸奶器', '杯子', '容器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chair',
        name: '座椅',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'chair', '座椅', '椅子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chair-one',
        name: '座椅1',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'chair-one', '座椅1', '椅子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'child-with-pacifier',
        name: '吃奶嘴',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'child-with-pacifier', '吃奶嘴', '吃奶'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'children-pyramid',
        name: '儿童金字塔',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'children-pyramid', '儿童金字塔', '玩具', '模型'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'crib',
        name: '摇篮',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'crib', '摇篮', '儿童床'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'crying-baby',
        name: '孩子哭泣',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'crying-baby', '孩子哭泣', '哭泣', '表情', '难过'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'family',
        name: '家庭',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'family', '家庭', '团聚', '人群'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'float',
        name: '漂浮圈',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'float', '漂浮圈', '漂浮', '游泳圈'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'girl',
        name: '女孩',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'girl', '女孩', '人', '性别', '女'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'girl-one',
        name: '女孩1',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'girl-one', '女孩1', '人', '性别', '女'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'girl-two',
        name: '女孩2',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'girl-two', '女孩2', '人', '性别', '女'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'heart-ballon',
        name: '心形气球',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'heart-ballon', '心形气球', '气球', '升空', '起飞'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'holding-hands',
        name: '牵手',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'holding-hands', '牵手', '握手', '携手', '合作'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'onesies',
        name: '连体衣',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'onesies', '连体衣', '衣服', '童装', '上衣'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pacifier',
        name: '奶嘴',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'pacifier', '奶嘴'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'paper-ship',
        name: '纸船',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'paper-ship', '纸船', '船', '模型'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'parenting-book',
        name: '育儿书',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'parenting-book', '育儿书', '书籍', '阅读'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'party-balloon',
        name: '气球',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'party-balloon', '气球', '起飞', '升空'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pokeball-one',
        name: '精灵球1',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'pokeball-one', '精灵球1', '求', '玩具', '精灵'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'powder',
        name: '搽粉',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'powder', '搽粉', '香薰', '瓶子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'preschool',
        name: '学前班',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'preschool', '学前班', '教育', '算数', '计算', '知识'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'radio-nanny',
        name: '广播保姆',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'radio-nanny', '广播保姆', '遥控器', '播放器', '广播'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rattle',
        name: '拨浪鼓',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'rattle', '拨浪鼓', '鼓', '玩具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rattle-one',
        name: '拨浪鼓1',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'rattle-one', '拨浪鼓1', '鼓', '玩具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rocking-horse',
        name: '摇马',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'rocking-horse', '摇马', '马'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'romper',
        name: '连体衣',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'romper', '连体衣', '衣服', '童装', '上衣'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sippy-cup',
        name: '吸管杯',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'sippy-cup', '吸管杯', '杯子', '吸管'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sleep-one',
        name: '睡觉',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'sleep-one', '睡觉', '睡'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'steoller',
        name: '童车',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'steoller', '童车', '车子', '儿童车'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tire-swing',
        name: '溜溜球',
        category: 'Baby',
        keywords: ['baby', '母婴儿童', 'tire-swing', '溜溜球', '球', '旋转', '吊球'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Energy',
        name: '能源 & 生命',
        category: 'Energy',
        keywords: ['energy', '能源', '生命'],
        count: 32
    },
    {
        kind: 'icon',
        key: 'battery-charge',
        name: '电池充电',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'battery-charge', '电池充电', '电池', '充电'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'battery-empty',
        name: '电池没电',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'battery-empty', '电池没电', '电池', '电量空'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'battery-full',
        name: '电池满电',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'battery-full', '电池满电', '电池', '满电'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'battery-working',
        name: '电池运行',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'battery-working', '电池运行', '电池', '电池电量', '能量'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bloom',
        name: '开花',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'bloom', '开花'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'blossom',
        name: '花',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'blossom', '花'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cactus',
        name: '仙人掌',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'cactus', '仙人掌'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'christmas-tree',
        name: '圣诞树',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'christmas-tree', '圣诞树', '圣诞', '树', '节日', '假期', '温暖', '过节'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'christmas-tree-one',
        name: '松树',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'christmas-tree-one', '松树'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'coronavirus',
        name: '冠状病毒',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'coronavirus', '冠状病毒', '细菌', '生病'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fire',
        name: '火热',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'fire', '火热', '热门', '流行', '火', '热', '夏天'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fire-two',
        name: '火堆',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'fire-two', '火堆', '火', '柴火', '热', '燃烧'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fruiter',
        name: '果树',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'fruiter', '果树'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'green-new-energy',
        name: '绿色新能源',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'green-new-energy', '绿色新能源'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'leaf',
        name: '叶子',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'leaf', '叶子', '植物', '生物', '树叶', '大树', '活力', '环保', '新能源'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'leaves',
        name: '树叶',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'leaves', '树叶', '植物', '环保', '无污染', '生命力'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'leaves-one',
        name: '叶子1',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'leaves-one', '叶子1'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'leaves-two',
        name: '叶子',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'leaves-two', '叶子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'lifebuoy',
        name: '救生圈',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'lifebuoy', '救生圈'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'lotus',
        name: '莲花',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'lotus', '莲花'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'outdoor',
        name: '户外',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'outdoor', '户外', '运动', '体育', '锻炼', '旅游'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pinwheel',
        name: '风车',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'pinwheel', '风车', '风轮', '旋风', '旋转'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ripple',
        name: '波纹',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'ripple', '波纹'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sapling',
        name: '树苗',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'sapling', '树苗', '节能', '环保', '新能源', '植物', '树木', '幼小', '苗木'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'seedling',
        name: '幼苗',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'seedling', '幼苗'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tree',
        name: '树',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'tree', '树', '节能', '环保', '新能源', '植物', '树木'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tree-one',
        name: '树1',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'tree-one', '树1'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tree-two',
        name: '树',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'tree-two', '树', '节能', '环保', '新能源', '植物', '树木'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'water',
        name: '水资源',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'water', '水资源', '节能', '环保', '新能源'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'water-no',
        name: '水缺乏',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'water-no', '水缺乏', '节能', '环保', '新能源', '水资源', '缺乏', '匮乏'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'windmill',
        name: '风车',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'windmill', '风车', '纸风车', '旋转', '快速', '环保'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'windmill-two',
        name: '风车',
        category: 'Energy',
        keywords: ['energy', '能源', '生命', 'windmill-two', '风车', '转动', '旋转', '风景', '发电', '动力'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Brand',
        name: '品牌',
        category: 'Brand',
        keywords: ['brand', '品牌'],
        count: 89
    },
    {
        kind: 'icon',
        key: 'adobe-illustrate',
        name: 'adobe-illustrate',
        category: 'Brand',
        keywords: ['brand', '品牌', 'adobe-illustrate', '软件', '应用', '工具', '设计', 'logo', 'ai'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'adobe-indesign',
        name: 'adobe-indesign',
        category: 'Brand',
        keywords: ['brand', '品牌', 'adobe-indesign', '软件', '应用', '工具', '设计', 'logo', 'id'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'adobe-lightroom',
        name: 'adobe-lightroom',
        category: 'Brand',
        keywords: ['brand', '品牌', 'adobe-lightroom', '软件', '应用', '工具', '设计', 'logo', 'lr'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'adobe-photoshop',
        name: 'adobe-photoshop',
        category: 'Brand',
        keywords: ['brand', '品牌', 'adobe-photoshop', '软件', '应用', '工具', '设计', 'logo', 'ps'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'alipay',
        name: '支付宝',
        category: 'Brand',
        keywords: ['brand', '品牌', 'alipay', '支付宝', '手机付款', '移动支付', '无现金支付', '阿里支付', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'android',
        name: '安卓',
        category: 'Brand',
        keywords: ['brand', '品牌', 'android', '安卓', '谷歌', '操作系统', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'app-store',
        name: '应用商店',
        category: 'Brand',
        keywords: ['brand', '品牌', 'app-store', '应用商店', '商店', '应用', '商城', 'logo', '工具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'apple',
        name: '苹果',
        category: 'Brand',
        keywords: ['brand', '品牌', 'apple', '苹果', '手机', '电脑', '设备', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'behance',
        name: 'behance',
        category: 'Brand',
        keywords: ['brand', '品牌', 'behance', '设计', '案例', '作品', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'browser-chrome',
        name: '浏览器',
        category: 'Brand',
        keywords: ['brand', '品牌', 'browser-chrome', '浏览器', 'Chrome', 'logo', '飞机'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'browser-safari',
        name: '浏览器-safari',
        category: 'Brand',
        keywords: ['brand', '品牌', 'browser-safari', '浏览器-safari', '苹果浏览器', 'Safari', '指针', '方向', '罗盘'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bydesign',
        name: '字节设计',
        category: 'Brand',
        keywords: ['brand', '品牌', 'bydesign', '字节设计', 'Bytedesign', 'Bydesign', '字节跳动', '设计中台', 'design', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bytedance',
        name: '字节跳动',
        category: 'Brand',
        keywords: ['brand', '品牌', 'bytedance', '字节跳动', '头条', '音符', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cc',
        name: '巨量创意',
        category: 'Brand',
        keywords: ['brand', '品牌', 'cc', '巨量创意', '创意中心', '商业化品牌', '创意广告', 'oceanengine'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'customer',
        name: '小六客服',
        category: 'Brand',
        keywords: ['brand', '品牌', 'customer', '小六客服', '客服', '聊天', '沟通', 'oceanengine', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dianziqian',
        name: '电子签',
        category: 'Brand',
        keywords: ['brand', '品牌', 'dianziqian', '电子签', 'logo', '签合同', '合作'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dongchedi',
        name: '懂车帝',
        category: 'Brand',
        keywords: ['brand', '品牌', 'dongchedi', '懂车帝', '汽车', '资讯', '媒体', 'logo', '字节跳动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dribble',
        name: '追波',
        category: 'Brand',
        keywords: ['brand', '品牌', 'dribble', '追波', 'logo', '设计', '社区', '分享', '国际设计师社区', 'design', 'designer', 'share', '球'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dropbox',
        name: '管理箱',
        category: 'Brand',
        keywords: ['brand', '品牌', 'dropbox', '管理箱', '盒子', '箱子', '管理', '存储', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'facebook',
        name: '脸书',
        category: 'Brand',
        keywords: ['brand', '品牌', 'facebook', '脸书', '小视频', '短视频', 'logo', '社交', '社交平台'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'facebook-one',
        name: '脸书',
        category: 'Brand',
        keywords: ['brand', '品牌', 'facebook-one', '脸书', '小视频', '短视频', 'logo', '社交', '社交平台'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'facetime',
        name: '视频电话',
        category: 'Brand',
        keywords: ['brand', '品牌', 'facetime', '视频电话', '视频', '音频', '电话', '连线', '直播', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'faceu',
        name: '激萌',
        category: 'Brand',
        keywords: ['brand', '品牌', 'faceu', '激萌', '拍照', 'logo', '修图', '美颜', '相机'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fanqiexiaoshuo',
        name: '番茄小说',
        category: 'Brand',
        keywords: ['brand', '品牌', 'fanqiexiaoshuo', '番茄小说', 'logo', '阅读软件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'feelgood',
        name: 'feelgood',
        category: 'Brand',
        keywords: ['brand', '品牌', 'feelgood', '评估', '体验', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'feelgood-one',
        name: 'feegood1',
        category: 'Brand',
        keywords: ['brand', '品牌', 'feelgood-one', 'feegood1', 'logo', '对话', '气泡', 'feegood'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'feiyu',
        name: '飞鱼CRM',
        category: 'Brand',
        keywords: ['brand', '品牌', 'feiyu', '飞鱼CRM', '飞鱼', 'CRM', '线索', 'oceanengine', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'figma',
        name: 'figma',
        category: 'Brand',
        keywords: ['brand', '品牌', 'figma', 'logo', '设计软件', '应用', '工具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'foursquare',
        name: 'foursquare',
        category: 'Brand',
        keywords: ['brand', '品牌', 'foursquare', '社交', 'logo', '沟通'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'friends-circle',
        name: '朋友圈',
        category: 'Brand',
        keywords: ['brand', '品牌', 'friends-circle', '朋友圈', '快门', '微信', '拍照', '社交', '晒图', 'logo', '螺旋', '循环旋转'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'github',
        name: 'github ',
        category: 'Brand',
        keywords: ['brand', '品牌', 'github', 'github ', '代码共享社区', '开发', '社区', 'logo', '小猫'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'github-one',
        name: 'github-one',
        category: 'Brand',
        keywords: ['brand', '品牌', 'github-one', '代码共享社区', '开发', '社区', 'logo', '小猫'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'gitlab',
        name: 'gitlab',
        category: 'Brand',
        keywords: ['brand', '品牌', 'gitlab', '代码共享社区', '开发', '社区'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'google',
        name: '谷歌',
        category: 'Brand',
        keywords: ['brand', '品牌', 'google', '谷歌', '搜索', 'search', 'company', 'Google', 'LLC', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'google-ads',
        name: '谷歌广告',
        category: 'Brand',
        keywords: ['brand', '品牌', 'google-ads', '谷歌广告', '广告', '谷歌', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'health',
        name: '健康',
        category: 'Brand',
        keywords: ['brand', '品牌', 'health', '健康', '医疗', '体检', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'html-five',
        name: 'html5',
        category: 'Brand',
        keywords: ['brand', '品牌', 'html-five', 'html5', '研发', '前端', '代码', '盾牌', '游戏'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'huoshanzhibo',
        name: '抖音火山',
        category: 'Brand',
        keywords: ['brand', '品牌', 'huoshanzhibo', '抖音火山', '音乐', '抖音火山版', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'instagram',
        name: 'instagram',
        category: 'Brand',
        keywords: ['brand', '品牌', 'instagram', '小视频', '短视频', 'logo', '社交', '图片分享', '国际社交', '社交平台'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'instagram-one',
        name: 'instagram',
        category: 'Brand',
        keywords: ['brand', '品牌', 'instagram-one', 'instagram', '小视频', '短视频', 'logo', '社交', '图片分享', '国际社交', '社交平台'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'jinritoutiao',
        name: '今日头条',
        category: 'Brand',
        keywords: ['brand', '品牌', 'jinritoutiao', '今日头条', '字节跳动', '新闻', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'lark',
        name: '飞书',
        category: 'Brand',
        keywords: ['brand', '品牌', 'lark', '飞书', '协作', '办公', 'logo', '字节跳动', '飞机'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'lark-one',
        name: '飞书1',
        category: 'Brand',
        keywords: ['brand', '品牌', 'lark-one', '飞书1', '协作', '办公', 'logo', '字节跳动', '飞书', '飞机'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'lincoln',
        name: '林肯',
        category: 'Brand',
        keywords: ['brand', '品牌', 'lincoln', '林肯', '汽车', '加工厂', 'logo', '标志', '标识'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'maill-one',
        name: '邮件1',
        category: 'Brand',
        keywords: ['brand', '品牌', 'maill-one', '邮件1', '信息', '讯息', '交流', '社交', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'market',
        name: '易拍',
        category: 'Brand',
        keywords: ['brand', '品牌', 'market', '易拍', '巨量创意', '广告拍摄', '滤镜', '编辑视频', 'oceanengine', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mediaeditor',
        name: '剪映',
        category: 'Brand',
        keywords: ['brand', '品牌', 'mediaeditor', '剪映', '软件', '应用', '工具', '设计', '视频', '剪辑', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'messages',
        name: '短信',
        category: 'Brand',
        keywords: ['brand', '品牌', 'messages', '短信', '信息', '讯息', '交流', '社交', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'messages-one',
        name: '短信1',
        category: 'Brand',
        keywords: ['brand', '品牌', 'messages-one', '短信1', '信息', '讯息', '交流', '社交', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mitsubishi',
        name: '三菱',
        category: 'Brand',
        keywords: ['brand', '品牌', 'mitsubishi', '三菱', '汽车', '三角形', '菱形', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'new-dianziqian',
        name: '电子签-新',
        category: 'Brand',
        keywords: ['brand', '品牌', 'new-dianziqian', '电子签-新'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'new-lark',
        name: '飞书-新',
        category: 'Brand',
        keywords: ['brand', '品牌', 'new-lark', '飞书-新'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'oceanengine',
        name: '巨量引擎',
        category: 'Brand',
        keywords: ['brand', '品牌', 'oceanengine', '巨量引擎', '广告投放', '广告', '变现', '营销'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'orange-station',
        name: '橙子建站',
        category: 'Brand',
        keywords: ['brand', '品牌', 'orange-station', '橙子建站', '智能建站', '落地页', '智能设计平台', 'oceanengine', 'H5'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pangle',
        name: '穿山甲',
        category: 'Brand',
        keywords: ['brand', '品牌', 'pangle', '穿山甲', '广告', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'paypal',
        name: 'paypal',
        category: 'Brand',
        keywords: ['brand', '品牌', 'paypal', '支付', '转账', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'phone-two',
        name: '电话2',
        category: 'Brand',
        keywords: ['brand', '品牌', 'phone-two', '电话2', '通话', '交流', '沟通', '社交', 'logo', '电话'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'qingniao-clue',
        name: '青鸟线索通',
        category: 'Brand',
        keywords: ['brand', '品牌', 'qingniao-clue', '青鸟线索通', '商业化品牌', '品牌广告', 'oceanengine', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'qiyehao',
        name: '企业号',
        category: 'Brand',
        keywords: ['brand', '品牌', 'qiyehao', '企业号', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'renault',
        name: '雷诺',
        category: 'Brand',
        keywords: ['brand', '品牌', 'renault', '雷诺', '四边形', '汽车', 'logo', '标志', '标识'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sketch',
        name: 'sketch',
        category: 'Brand',
        keywords: ['brand', '品牌', 'sketch', 'logo', '设计软件', '应用', '工具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'star-one',
        name: '星星',
        category: 'Brand',
        keywords: ['brand', '品牌', 'star-one', '星星', '已收藏', '取消收藏', '评分', '评价', '打分', '星级', 'qq空间'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'taobao',
        name: '淘宝',
        category: 'Brand',
        keywords: ['brand', '品牌', 'taobao', '淘宝', '阿里巴巴', '电商', '购物', '手机购物', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'telegram',
        name: 'Telegram',
        category: 'Brand',
        keywords: ['brand', '品牌', 'telegram', 'Telegram', '飞机', 'logo', '通信软件', '聊天', '社交'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tencent-qq',
        name: 'QQ',
        category: 'Brand',
        keywords: ['brand', '品牌', 'tencent-qq', 'QQ', '企鹅', 'logo', 'qq', '通信软件', '聊天', '社交'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tiktok',
        name: '抖音',
        category: 'Brand',
        keywords: ['brand', '品牌', 'tiktok', '抖音', '短视频', '小视频', 'TikTok', 'logo', '字节跳动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'topbuzz',
        name: 'topbuzz',
        category: 'Brand',
        keywords: ['brand', '品牌', 'topbuzz', '短视频', '小视频', 'Topbuzz', 'logo', '字体', '字节跳动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tuchong',
        name: '图虫',
        category: 'Brand',
        keywords: ['brand', '品牌', 'tuchong', '图虫', '图片', '创意', '摄影', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tumblr',
        name: 'tumblr',
        category: 'Brand',
        keywords: ['brand', '品牌', 'tumblr', '图片', '动态', '社交', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'twitter',
        name: '推特',
        category: 'Brand',
        keywords: ['brand', '品牌', 'twitter', '推特', '小视频', '短视频', 'logo', '新闻', '国际社交', '社交平台'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ulikecam',
        name: '轻颜相机',
        category: 'Brand',
        keywords: ['brand', '品牌', 'ulikecam', '轻颜相机', '相机', '图片', '美颜', '化妆', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'vigo',
        name: '火山小视频',
        category: 'Brand',
        keywords: ['brand', '品牌', 'vigo', '火山小视频', '火山', '小视频', '短视频', 'logo', '字节跳动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'volkswagen',
        name: '大众',
        category: 'Brand',
        keywords: ['brand', '品牌', 'volkswagen', '大众', '汽车', '加工厂', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'wechat',
        name: '微信',
        category: 'Brand',
        keywords: ['brand', '品牌', 'wechat', '微信', '聊天', '社交', '沟通', '语音', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'weibo',
        name: '微博',
        category: 'Brand',
        keywords: ['brand', '品牌', 'weibo', '微博', '新浪微博', 'logo', '资讯'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'windows',
        name: '微软视窗',
        category: 'Brand',
        keywords: ['brand', '品牌', 'windows', '微软视窗', '微软', '操作系统', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'xiaodu',
        name: '小度',
        category: 'Brand',
        keywords: ['brand', '品牌', 'xiaodu', '小度', '百度', '音响', '屏幕音响', '智能音响', '表情'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'xigua',
        name: '西瓜视频',
        category: 'Brand',
        keywords: ['brand', '品牌', 'xigua', '西瓜视频', '西瓜', '视频', '短视频', 'logo', '字节跳动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'xingfuli',
        name: '幸福里',
        category: 'Brand',
        keywords: ['brand', '品牌', 'xingfuli', '幸福里', '装饰', '家装', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'xingtu',
        name: '星图',
        category: 'Brand',
        keywords: ['brand', '品牌', 'xingtu', '星图', '达人', '撮合', '即合', 'oceanengine'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'youtobe',
        name: '油管',
        category: 'Brand',
        keywords: ['brand', '品牌', 'youtobe', '油管', '视频', '创意', '短视频', '应用平台', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'youtube',
        name: '优兔',
        category: 'Brand',
        keywords: ['brand', '品牌', 'youtube', '优兔', '小视频', '短视频', 'logo', '社交', '社交平台'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'zijinyunying',
        name: '资金运营平台',
        category: 'Brand',
        keywords: ['brand', '品牌', 'zijinyunying', '资金运营平台', 'logo'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'openai',
        name: 'openai',
        category: 'Brand',
        keywords: ['brand', '品牌', 'openai', 'ai', 'chatgpt', 'chat', '聊天'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dingtalk',
        name: '钉钉',
        category: 'Brand',
        keywords: ['brand', '品牌', 'dingtalk', '钉钉', 'chat', 'dingding', '聊天', 'IM', '即时通讯'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'zhihu',
        name: '知乎',
        category: 'Brand',
        keywords: ['brand', '品牌', 'zhihu', '知乎', '问答', '解答', 'quora', 'question', 'answer'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bilibili',
        name: 'B站',
        category: 'Brand',
        keywords: ['brand', '品牌', 'bilibili', 'B站', '小电视', '干杯', '哔哩哔哩', '视频', '二次元', '动漫', 'up主'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'juejin',
        name: '掘金',
        category: 'Brand',
        keywords: ['brand', '品牌', 'juejin', '掘金', '技术', '程序员', '稀土掘金', '问答', '解答', '开发者', '交流', '沸点'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'discord',
        name: 'Discord',
        category: 'Brand',
        keywords: ['brand', '品牌', 'discord', 'Discord', '社群', '即时通话', '聊天', '玩家', '交流', 'chat', 'im', 'group', 'talk'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Life',
        name: '生活',
        category: 'Life',
        keywords: ['life', '生活'],
        count: 25
    },
    {
        kind: 'icon',
        key: 'beach-umbrella',
        name: '海滩雨伞',
        category: 'Life',
        keywords: ['life', '生活', 'beach-umbrella', '海滩雨伞', '度假', '休息'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bedside',
        name: '床头柜',
        category: 'Life',
        keywords: ['life', '生活', 'bedside', '床头柜', '家居', '家具', '装修'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bedside-two',
        name: '床头柜',
        category: 'Life',
        keywords: ['life', '生活', 'bedside-two', '床头柜', '家具', '家居', '台灯'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'boiler',
        name: '壁炉',
        category: 'Life',
        keywords: ['life', '生活', 'boiler', '壁炉'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'coffee-machine',
        name: '咖啡机',
        category: 'Life',
        keywords: ['life', '生活', 'coffee-machine', '咖啡机'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cooking-pot',
        name: '煮锅',
        category: 'Life',
        keywords: ['life', '生活', 'cooking-pot', '煮锅', '煮熟', '烹饪', '厨房', '做饭', '美食', '餐饮'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'door-handle',
        name: '门把手',
        category: 'Life',
        keywords: ['life', '生活', 'door-handle', '门把手', '房间', '开门'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'double-bed',
        name: '双人床',
        category: 'Life',
        keywords: ['life', '生活', 'double-bed', '双人床', '睡觉', '休息'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fan',
        name: '扇子',
        category: 'Life',
        keywords: ['life', '生活', 'fan', '扇子', '文化', '中国风', '凉快', '降温'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'floor-tile',
        name: '地板',
        category: 'Life',
        keywords: ['life', '生活', 'floor-tile', '地板'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hair-dryer',
        name: '吹风机',
        category: 'Life',
        keywords: ['life', '生活', 'hair-dryer', '吹风机'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hanger',
        name: '晾衣架',
        category: 'Life',
        keywords: ['life', '生活', 'hanger', '晾衣架', '危险', '挂钩'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hanger-two',
        name: '衣架',
        category: 'Life',
        keywords: ['life', '生活', 'hanger-two', '衣架', '晒衣服', '晾衣服'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hotel-do-not-clean',
        name: '请勿打扫',
        category: 'Life',
        keywords: ['life', '生活', 'hotel-do-not-clean', '请勿打扫', '房间'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hotel-please-clean',
        name: '请打扫',
        category: 'Life',
        keywords: ['life', '生活', 'hotel-please-clean', '请打扫', '房间'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'iron',
        name: '熨斗',
        category: 'Life',
        keywords: ['life', '生活', 'iron', '熨斗'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'iron-disable',
        name: '熨斗坏了',
        category: 'Life',
        keywords: ['life', '生活', 'iron-disable', '熨斗坏了'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'iron-three',
        name: '熨斗',
        category: 'Life',
        keywords: ['life', '生活', 'iron-three', '熨斗'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'iron-two',
        name: '熨斗',
        category: 'Life',
        keywords: ['life', '生活', 'iron-two', '熨斗'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shower-head',
        name: '淋浴喷头',
        category: 'Life',
        keywords: ['life', '生活', 'shower-head', '淋浴喷头', '酒店', '洗澡'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'single-bed',
        name: '单人床',
        category: 'Life',
        keywords: ['life', '生活', 'single-bed', '单人床', '睡觉', '酒店', '休息'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sofa',
        name: '沙发',
        category: 'Life',
        keywords: ['life', '生活', 'sofa', '沙发', '家居', '家具', '装修'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sofa-two',
        name: '沙发',
        category: 'Life',
        keywords: ['life', '生活', 'sofa-two', '沙发', '居家', 'home', '家居', '家具', '装修', '家装'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'terrace',
        name: '阳台',
        category: 'Life',
        keywords: ['life', '生活', 'terrace', '阳台'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tub',
        name: '浴缸',
        category: 'Life',
        keywords: ['life', '生活', 'tub', '浴缸'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Time',
        name: '时间日期',
        category: 'Time',
        keywords: ['time', '时间日期'],
        count: 17
    },
    {
        kind: 'icon',
        key: 'alarm-clock',
        name: '闹钟',
        category: 'Time',
        keywords: ['time', '时间日期', 'alarm-clock', '闹钟', '倒计时', '时间'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'big-clock',
        name: '大钟表',
        category: 'Time',
        keywords: ['time', '时间日期', 'big-clock', '大钟表', '钟表', '时间', '表', '复古'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'calendar-dot',
        name: '日历',
        category: 'Time',
        keywords: ['time', '时间日期', 'calendar-dot', '日历', '日期', '时间', '期限', '长期'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'calendar-thirty',
        name: '日历',
        category: 'Time',
        keywords: ['time', '时间日期', 'calendar-thirty', '日历', '日期', '时间', '期限', '长期'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'calendar-thirty-two',
        name: '日历',
        category: 'Time',
        keywords: ['time', '时间日期', 'calendar-thirty-two', '日历', '日期', '时间', '期限', '长期'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'calendar-three',
        name: '日历',
        category: 'Time',
        keywords: ['time', '时间日期', 'calendar-three', '日历', '日期', '时间', '期限', '长期'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dashboard',
        name: '仪表盘',
        category: 'Time',
        keywords: ['time', '时间日期', 'dashboard', '仪表盘', '仪表', '指针', '数据', '转盘'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'history',
        name: '历史记录',
        category: 'Time',
        keywords: ['time', '时间日期', 'history', '历史记录', '历史', '记录', '时光机'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'iwatch',
        name: '智能手表',
        category: 'Time',
        keywords: ['time', '时间日期', 'iwatch', '智能手表', 'smart', 'watches', '手表', '时间', '打电话'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'loading-three',
        name: '加载',
        category: 'Time',
        keywords: ['time', '时间日期', 'loading-three', '加载', '等待', '转圈', '缓冲'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'radar-two',
        name: '雷达',
        category: 'Time',
        keywords: ['time', '时间日期', 'radar-two', '雷达', '转动', '扫描', '侦查'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'speed',
        name: '速度',
        category: 'Time',
        keywords: ['time', '时间日期', 'speed', '速度', '速率', '速度表', '仪表盘'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'speed-one',
        name: '速度',
        category: 'Time',
        keywords: ['time', '时间日期', 'speed-one', '速度', '速率', '速度表', '仪表盘'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'stopwatch',
        name: '秒表',
        category: 'Time',
        keywords: ['time', '时间日期', 'stopwatch', '秒表', '倒计时', '时间', '描边'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'stopwatch-start',
        name: '计时器',
        category: 'Time',
        keywords: ['time', '时间日期', 'stopwatch-start', '计时器', '倒计时', '时间', '表'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'time',
        name: '时间',
        category: 'Time',
        keywords: ['time', '时间日期', '时间', '钟表', '倒计时'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'watch',
        name: '手表',
        category: 'Time',
        keywords: ['time', '时间日期', 'watch', '手表', '电子表', '时间', '时区', '指针', '计时'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Foods',
        name: '食品',
        category: 'Foods',
        keywords: ['foods', '食品'],
        count: 121
    },
    {
        kind: 'icon',
        key: 'apple-one',
        name: '苹果',
        category: 'Foods',
        keywords: ['foods', '食品', 'apple-one', '苹果', '水果', '健康', '绿色', '无公害食品'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'avocado',
        name: '牛油果',
        category: 'Foods',
        keywords: ['foods', '食品', 'avocado', '牛油果', '水果', '果蔬'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'avocado-one',
        name: '牛油果',
        category: 'Foods',
        keywords: ['foods', '食品', 'avocado-one', '牛油果', '果子', '水果', '食物', '零食'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'banana',
        name: '香蕉',
        category: 'Foods',
        keywords: ['foods', '食品', 'banana', '香蕉', '果子', '水果', '食物'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'barbecue',
        name: '烧烤',
        category: 'Foods',
        keywords: ['foods', '食品', 'barbecue', '烧烤', '食物', '肉', '饭菜', '夜宵', '烤串'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'beer',
        name: '啤酒',
        category: 'Foods',
        keywords: ['foods', '食品', 'beer', '啤酒', '饮料', '酒水', '酒精'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'beer-mug',
        name: '啤酒杯',
        category: 'Foods',
        keywords: ['foods', '食品', 'beer-mug', '啤酒杯'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'birthday-cake',
        name: '生日蛋糕',
        category: 'Foods',
        keywords: ['foods', '食品', 'birthday-cake', '生日蛋糕', '奶油蛋糕'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bone',
        name: '骨头',
        category: 'Foods',
        keywords: ['foods', '食品', 'bone', '骨头', '骨骼', '健康', '身体'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bottle-one',
        name: '酒瓶',
        category: 'Foods',
        keywords: ['foods', '食品', 'bottle-one', '酒瓶', '酒水', '瓶子', '容器', '塑料瓶', '玻璃瓶'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bottle-three',
        name: '瓶装',
        category: 'Foods',
        keywords: ['foods', '食品', 'bottle-three', '瓶装', '酒水', '瓶子', '容器', '塑料瓶', '玻璃瓶'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bottle-two',
        name: '瓶子',
        category: 'Foods',
        keywords: ['foods', '食品', 'bottle-two', '瓶子', '酒水', '容器', '塑料瓶', '玻璃瓶'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bowl',
        name: '面条',
        category: 'Foods',
        keywords: ['foods', '食品', 'bowl', '面条', '食物', '碗', '吃的', '美食', '热饭'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bowl-one',
        name: '碗',
        category: 'Foods',
        keywords: ['foods', '食品', 'bowl-one', '碗', '容器', '饭菜', '餐饮', '餐具', '热汤'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bread',
        name: '面包',
        category: 'Foods',
        keywords: ['foods', '食品', 'bread', '面包', '面食', '食物', '零食', '早餐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bread-machine',
        name: '面包机',
        category: 'Foods',
        keywords: ['foods', '食品', 'bread-machine', '面包机', '面包', '电器', '早餐', '烤面包'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bread-one',
        name: '面包',
        category: 'Foods',
        keywords: ['foods', '食品', 'bread-one', '面包', '早餐', '甜品', '下午茶'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cake',
        name: '蛋糕',
        category: 'Foods',
        keywords: ['foods', '食品', 'cake', '蛋糕', '生日蛋糕', '生日', '糕点', '甜品', '蜡烛'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cake-five',
        name: '蛋糕',
        category: 'Foods',
        keywords: ['foods', '食品', 'cake-five', '蛋糕', '甜点', '糕点', '甜食', '甜品', '食物', '点心', '下午茶', '小蛋糕'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cake-four',
        name: '蛋糕',
        category: 'Foods',
        keywords: ['foods', '食品', 'cake-four', '蛋糕', '甜点', '糕点', '甜食', '甜品', '食物', '点心', '下午茶', '小蛋糕'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cake-one',
        name: '蛋糕',
        category: 'Foods',
        keywords: ['foods', '食品', 'cake-one', '蛋糕', '甜点', '糕点', '甜食', '甜品', '食物', '点心', '下午茶', '小蛋糕'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cake-three',
        name: '蛋糕',
        category: 'Foods',
        keywords: ['foods', '食品', 'cake-three', '蛋糕', '甜点', '糕点', '甜食', '甜品', '食物', '点心', '下午茶', '小蛋糕', '生日蛋糕'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cake-two',
        name: '蛋糕',
        category: 'Foods',
        keywords: ['foods', '食品', 'cake-two', '蛋糕', '甜点', '糕点', '甜食', '甜品', '食物', '点心', '下午茶', '小蛋糕'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'candy',
        name: '糖果',
        category: 'Foods',
        keywords: ['foods', '食品', 'candy', '糖果', '糖', '甜点', '下午茶', '零食'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'canned-fruit',
        name: '水果罐头',
        category: 'Foods',
        keywords: ['foods', '食品', 'canned-fruit', '水果罐头', '罐头', '瓶子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'carrot',
        name: '胡萝卜',
        category: 'Foods',
        keywords: ['foods', '食品', 'carrot', '胡萝卜', '食物', '菜类', '水果', '青菜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chafing-dish',
        name: '鸳鸯锅',
        category: 'Foods',
        keywords: ['foods', '食品', 'chafing-dish', '鸳鸯锅', '火锅', '烹饪', '涮菜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chafing-dish-one',
        name: '火锅',
        category: 'Foods',
        keywords: ['foods', '食品', 'chafing-dish-one', '火锅', '铜锅', '涮锅', '烹饪', '锅'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cheese',
        name: '奶酪',
        category: 'Foods',
        keywords: ['foods', '食品', 'cheese', '奶酪', '甜点', '蛋糕', '芝士奶酪'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chef-hat-one',
        name: '厨师帽子',
        category: 'Foods',
        keywords: ['foods', '食品', 'chef-hat-one', '厨师帽子', '帽子', '厨师帽'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cherry',
        name: '樱桃',
        category: 'Foods',
        keywords: ['foods', '食品', 'cherry', '樱桃', '水果', '桃子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chicken',
        name: '鸡肉',
        category: 'Foods',
        keywords: ['foods', '食品', 'chicken', '鸡肉', '肉食', '鸡', '烤鸡', '烧鸡'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chicken-leg',
        name: '鸡腿',
        category: 'Foods',
        keywords: ['foods', '食品', 'chicken-leg', '鸡腿', '鸡肉', '美食', '餐饮'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chili',
        name: '辣椒',
        category: 'Foods',
        keywords: ['foods', '食品', 'chili', '辣椒', '蔬菜', '青椒'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chopping-board',
        name: '切菜板',
        category: 'Foods',
        keywords: ['foods', '食品', 'chopping-board', '切菜板', '案板', '菜板', '砧板', '切菜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chopsticks-fork',
        name: '筷子叉子',
        category: 'Foods',
        keywords: ['foods', '食品', 'chopsticks-fork', '筷子叉子', '餐饮', '吃饭', '工具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cola',
        name: '可乐',
        category: 'Foods',
        keywords: ['foods', '食品', 'cola', '可乐', '饮料', '水', '听装可乐', '可口可乐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cook',
        name: '煮饭',
        category: 'Foods',
        keywords: ['foods', '食品', 'cook', '煮饭', '锅', '奶锅', '锅具', '炒锅', '汤锅'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cooking',
        name: '烹饪',
        category: 'Foods',
        keywords: ['foods', '食品', 'cooking', '烹饪', '做饭', '厨师', '加工', '餐饮', '餐具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'crab',
        name: '螃蟹',
        category: 'Foods',
        keywords: ['foods', '食品', 'crab', '螃蟹', '海鲜', '生鲜', '梭子蟹'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'croissant',
        name: '牛角面包',
        category: 'Foods',
        keywords: ['foods', '食品', 'croissant', '牛角面包', '牛角包', '面包', '甜点', '零食', '下午茶'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cup-four',
        name: '茶杯4',
        category: 'Foods',
        keywords: ['foods', '食品', 'cup-four', '茶杯4'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cup-one',
        name: '杯子',
        category: 'Foods',
        keywords: ['foods', '食品', 'cup-one', '杯子', '水杯', '喝水'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'doughnut',
        name: '甜甜圈',
        category: 'Foods',
        keywords: ['foods', '食品', 'doughnut', '甜甜圈', '面包', '甜点', '糕点'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'drink',
        name: '饮料',
        category: 'Foods',
        keywords: ['foods', '食品', 'drink', '饮料', '水杯', '果汁', '汽水', '咖啡', '奶茶'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'drumstick',
        name: '鸡腿',
        category: 'Foods',
        keywords: ['foods', '食品', 'drumstick', '鸡腿', '肉食', '鸡肉'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'egg',
        name: '煎鸡蛋',
        category: 'Foods',
        keywords: ['foods', '食品', 'egg', '煎鸡蛋', '摊鸡蛋', '早餐', '煎蛋'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'egg-one',
        name: '鸡蛋',
        category: 'Foods',
        keywords: ['foods', '食品', 'egg-one', '鸡蛋', '美妆蛋'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'eggplant',
        name: '茄子',
        category: 'Foods',
        keywords: ['foods', '食品', 'eggplant', '茄子', '蔬菜', '生鲜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fish',
        name: '鱼',
        category: 'Foods',
        keywords: ['foods', '食品', 'fish', '鱼', '食物', '美食'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fork-spoon',
        name: '叉子勺子',
        category: 'Foods',
        keywords: ['foods', '食品', 'fork-spoon', '叉子勺子', '餐饮', '吃饭', '工具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'french-fries',
        name: '炸薯条',
        category: 'Foods',
        keywords: ['foods', '食品', 'french-fries', '炸薯条', '薯条', '炸土豆', '土豆条', '零食'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'garlic',
        name: '大蒜',
        category: 'Foods',
        keywords: ['foods', '食品', 'garlic', '大蒜', '蒜头', '蔬菜', '蒜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'glove',
        name: '胶手套',
        category: 'Foods',
        keywords: ['foods', '食品', 'glove', '胶手套', '手套', '保暖', '橡胶手套', '塑胶手套'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'goblet',
        name: '高脚杯',
        category: 'Foods',
        keywords: ['foods', '食品', 'goblet', '高脚杯', '玻璃杯', '红酒杯'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'goblet-cracking',
        name: '高脚杯裂开',
        category: 'Foods',
        keywords: ['foods', '食品', 'goblet-cracking', '高脚杯裂开', '破碎'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'goblet-full',
        name: '高脚杯满了',
        category: 'Foods',
        keywords: ['foods', '食品', 'goblet-full', '高脚杯满了', '高脚杯', '玻璃杯', '酒杯'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'goblet-one',
        name: '高脚杯',
        category: 'Foods',
        keywords: ['foods', '食品', 'goblet-one', '高脚杯', '杯子', '酒杯', '玻璃杯'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hamburger',
        name: '汉堡',
        category: 'Foods',
        keywords: ['foods', '食品', 'hamburger', '汉堡', '美食', '餐饮', '快餐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hamburger-one',
        name: '汉堡',
        category: 'Foods',
        keywords: ['foods', '食品', 'hamburger-one', '汉堡', '汉堡包', '面包', '食物', '美食', '餐饮'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'honey',
        name: '蜂蜜',
        category: 'Foods',
        keywords: ['foods', '食品', 'honey', '蜂蜜', '滋补', '补品', '养生'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'honey-one',
        name: '蜂蜜',
        category: 'Foods',
        keywords: ['foods', '食品', 'honey-one', '蜂蜜', '糖', '甜品', '甜食', '蜜糖'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hot-pot',
        name: '火锅',
        category: 'Foods',
        keywords: ['foods', '食品', 'hot-pot', '火锅', '食物', '火苗', '煮饭', '烹饪', '美味'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hot-pot-one',
        name: '火锅',
        category: 'Foods',
        keywords: ['foods', '食品', 'hot-pot-one', '火锅', '餐饮', '美食', '铜锅', '涮锅'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'icecream',
        name: '冰激凌',
        category: 'Foods',
        keywords: ['foods', '食品', 'icecream', '冰激凌', '零食', '冷食', '冰', '凉食', '雪糕', '冰淇淋'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'icecream-five',
        name: '冰棍4',
        category: 'Foods',
        keywords: ['foods', '食品', 'icecream-five', '冰棍4', '零食', '冷食', '冰', '凉食', '雪糕'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'icecream-four',
        name: '冰激凌',
        category: 'Foods',
        keywords: ['foods', '食品', 'icecream-four', '冰激凌', '冰淇淋', '冷饮', '雪糕'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'icecream-one',
        name: '雪糕',
        category: 'Foods',
        keywords: ['foods', '食品', 'icecream-one', '雪糕', '零食', '冷食', '冰', '凉食'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'icecream-three',
        name: '冰棍',
        category: 'Foods',
        keywords: ['foods', '食品', 'icecream-three', '冰棍', '零食', '冷食', '冰', '凉食', '雪糕'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'icecream-two',
        name: '冰激凌',
        category: 'Foods',
        keywords: ['foods', '食品', 'icecream-two', '冰激凌', '零食', '冷食', '冰', '凉食', '雪糕', '冰淇淋'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'juice',
        name: '果饮',
        category: 'Foods',
        keywords: ['foods', '食品', 'juice', '果饮', '水杯', '果汁', '汽水', '咖啡', '奶茶'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'kettle-one',
        name: '水壶',
        category: 'Foods',
        keywords: ['foods', '食品', 'kettle-one', '水壶', '壶', '热水壶', '容器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'kitchen-knife',
        name: '菜刀',
        category: 'Foods',
        keywords: ['foods', '食品', 'kitchen-knife', '菜刀', '切菜', '刀', '厨房用品'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'knife-fork',
        name: '刀子叉子',
        category: 'Foods',
        keywords: ['foods', '食品', 'knife-fork', '刀子叉子', '刀叉', '餐饮', '吃饭', '工具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'lemon',
        name: '柠檬',
        category: 'Foods',
        keywords: ['foods', '食品', 'lemon', '柠檬', '水果', '食物', '茶'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'liqueur',
        name: '鸡尾酒',
        category: 'Foods',
        keywords: ['foods', '食品', 'liqueur', '鸡尾酒', '酒水', '果汁', '汽水'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'lollipop',
        name: '棒棒糖',
        category: 'Foods',
        keywords: ['foods', '食品', 'lollipop', '棒棒糖', '零食', '甜食', '糖果'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'macadamia-nut',
        name: '夏威夷果',
        category: 'Foods',
        keywords: ['foods', '食品', 'macadamia-nut', '夏威夷果', '坚果'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'measuring-cup',
        name: '计量杯',
        category: 'Foods',
        keywords: ['foods', '食品', 'measuring-cup', '计量杯', '量杯', '厨房厨具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'milk',
        name: '牛奶',
        category: 'Foods',
        keywords: ['foods', '食品', 'milk', '牛奶', '水杯', '果汁', '汽水', '奶茶'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'milk-one',
        name: '牛奶',
        category: 'Foods',
        keywords: ['foods', '食品', 'milk-one', '牛奶', '盒装', '乳品', '牛奶盒', '牛奶杯'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'noodles',
        name: '面条',
        category: 'Foods',
        keywords: ['foods', '食品', 'noodles', '面条', '美食', '饮食', '饥饿', '吃饭', '午餐', '早餐', '晚餐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'nut',
        name: '坚果',
        category: 'Foods',
        keywords: ['foods', '食品', 'nut', '坚果', '零食', '炒货', '果脯'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'orange',
        name: '橙子',
        category: 'Foods',
        keywords: ['foods', '食品', 'orange', '橙子', '水果'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'orange-one',
        name: '柠檬片',
        category: 'Foods',
        keywords: ['foods', '食品', 'orange-one', '柠檬片', '柠檬', '水果', '柠檬干'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'oven',
        name: '电烤箱',
        category: 'Foods',
        keywords: ['foods', '食品', 'oven', '电烤箱', '烤箱', '家电'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'oven-tray',
        name: '托盘',
        category: 'Foods',
        keywords: ['foods', '食品', 'oven-tray', '托盘', '盘子', '厨具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'painted-eggshell',
        name: '彩蛋',
        category: 'Foods',
        keywords: ['foods', '食品', 'painted-eggshell', '彩蛋', 'egg', '鸡蛋', '雨滴', '鸭蛋'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'peach',
        name: '桃子',
        category: 'Foods',
        keywords: ['foods', '食品', 'peach', '桃子', '水果'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pear',
        name: '梨子',
        category: 'Foods',
        keywords: ['foods', '食品', 'pear', '梨子', '水果'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'peas',
        name: '豌豆角',
        category: 'Foods',
        keywords: ['foods', '食品', 'peas', '豌豆角', '豆角', '蔬菜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pineapple',
        name: '菠萝',
        category: 'Foods',
        keywords: ['foods', '食品', 'pineapple', '菠萝', '水果', '生鲜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'popcorn',
        name: '爆米花',
        category: 'Foods',
        keywords: ['foods', '食品', 'popcorn', '爆米花', '娱乐', '食物', '电影', '肥胖'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'popcorn-one',
        name: '爆米花',
        category: 'Foods',
        keywords: ['foods', '食品', 'popcorn-one', '爆米花', '玉米', '零食', '食物'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pot',
        name: '铁锅',
        category: 'Foods',
        keywords: ['foods', '食品', 'pot', '铁锅', '煎锅', '炒锅', '厨具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pumpkin',
        name: '南瓜',
        category: 'Foods',
        keywords: ['foods', '食品', 'pumpkin', '南瓜', '蔬菜', '水果'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'radish',
        name: '萝卜',
        category: 'Foods',
        keywords: ['foods', '食品', 'radish', '萝卜', '蔬菜', '水果'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'radish-one',
        name: '圆萝卜',
        category: 'Foods',
        keywords: ['foods', '食品', 'radish-one', '圆萝卜', '萝卜', '蔬菜', '水萝卜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'refrigerator',
        name: '冰箱',
        category: 'Foods',
        keywords: ['foods', '食品', 'refrigerator', '冰箱', '电器', '厨房厨具', '电冰箱'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rice',
        name: '米饭',
        category: 'Foods',
        keywords: ['foods', '食品', 'rice', '米饭', '大米', '主食', '谷物', '农作物'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sandwich',
        name: '三明治',
        category: 'Foods',
        keywords: ['foods', '食品', 'sandwich', '三明治', '早餐', '切角'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sandwich-one',
        name: '三明治',
        category: 'Foods',
        keywords: ['foods', '食品', 'sandwich-one', '三明治', '热狗', '面包'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'scallion',
        name: '大葱',
        category: 'Foods',
        keywords: ['foods', '食品', 'scallion', '大葱', '葱头', '葱蒜', '蔬菜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shovel',
        name: '铁铲',
        category: 'Foods',
        keywords: ['foods', '食品', 'shovel', '铁铲', '餐具', '工具', '锅铲'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shovel-one',
        name: '铲子',
        category: 'Foods',
        keywords: ['foods', '食品', 'shovel-one', '铲子', '餐具', '工具', '铁铲', '锅铲'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shrimp',
        name: '大虾',
        category: 'Foods',
        keywords: ['foods', '食品', 'shrimp', '大虾', '虾', '水产', '海鲜', '生鲜', '虾仁'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'snacks',
        name: '小食',
        category: 'Foods',
        keywords: ['foods', '食品', 'snacks', '小食', '小吃', '零食', '食物', '饮料', '咖啡', '奶茶', '果汁'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'soybean-milk-maker',
        name: '榨汁机',
        category: 'Foods',
        keywords: ['foods', '食品', 'soybean-milk-maker', '榨汁机', '榨汁', '豆浆机', '厨房厨具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'spoon',
        name: '铁勺',
        category: 'Foods',
        keywords: ['foods', '食品', 'spoon', '铁勺', '餐具', '工具', '勺子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tea',
        name: '茶',
        category: 'Foods',
        keywords: ['foods', '食品', 'tea', '茶', '饮料', '茶饮', '热水', '咖啡', '热牛奶'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tea-drink',
        name: '喝茶',
        category: 'Foods',
        keywords: ['foods', '食品', 'tea-drink', '喝茶', '饮料', '餐饮', '下午茶', '咖啡', '热饮'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'teapot',
        name: '茶壶',
        category: 'Foods',
        keywords: ['foods', '食品', 'teapot', '茶壶', '水壶', '热水壶', '泡茶'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'thermos-cup',
        name: '保温杯',
        category: 'Foods',
        keywords: ['foods', '食品', 'thermos-cup', '保温杯'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tomato',
        name: '番茄',
        category: 'Foods',
        keywords: ['foods', '食品', 'tomato', '番茄', '水果', '蔬菜', '西红柿'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tray',
        name: '托盘',
        category: 'Foods',
        keywords: ['foods', '食品', 'tray', '托盘', '盘子', '厨具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'turkey',
        name: '火鸡',
        category: 'Foods',
        keywords: ['foods', '食品', 'turkey', '火鸡', '鸡肉', '鸡腿', '烧鸡', '餐饮', '美食'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'vegetable-basket',
        name: '菜篮子',
        category: 'Foods',
        keywords: ['foods', '食品', 'vegetable-basket', '菜篮子', '篮子', '蔬菜', '买菜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'vegetables',
        name: '青菜',
        category: 'Foods',
        keywords: ['foods', '食品', 'vegetables', '青菜', '白菜', '蔬菜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'vicia-faba',
        name: '蚕豆',
        category: 'Foods',
        keywords: ['foods', '食品', 'vicia-faba', '蚕豆', '豆子', '蔬菜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'watermelon',
        name: '西瓜',
        category: 'Foods',
        keywords: ['foods', '食品', 'watermelon', '西瓜', '水果', '美食', '夏天'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'watermelon-one',
        name: '西瓜',
        category: 'Foods',
        keywords: ['foods', '食品', 'watermelon-one', '西瓜', '水果', '瓜'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Hands',
        name: '手势动作',
        category: 'Hands',
        keywords: ['hands', '手势动作'],
        count: 66
    },
    {
        kind: 'icon',
        key: 'bad',
        name: '坏的',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'bad', '坏的', '不好', '不认可', '不肯定'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bad-one',
        name: '差劲',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'bad-one', '差劲', '踩', '坏的', '不认可'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bad-two',
        name: '踩',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'bad-two', '踩', '不好', '不认可', '不肯定'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bless',
        name: '保佑',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'bless', '保佑', '手势', '祈祷', '拜佛', '行李'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bye',
        name: '拜拜',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'bye', '拜拜', '再见', '再会', '离开', '分别'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'clap',
        name: '鼓掌',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'clap', '鼓掌', '拍手', '打击', '掌声'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'click-tap',
        name: '点击',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'click-tap', '点击', '小手', '点击率', '点击效果', '按键', '触发'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'click-tap-two',
        name: '点击',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'click-tap-two', '点击', '按下', '点按', '触摸', '操作', '编辑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'come',
        name: '招引',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'come', '招引', '引诱', '勾引'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'concept-sharing',
        name: '理念共享',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'concept-sharing', '理念共享', '共享', '创意共享', '想法'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cool',
        name: '酷的',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'cool', '酷的', '喜欢', '指向', '手型', '手指'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'delivery',
        name: '交货',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'delivery', '交货', '服务', '传递', '交付', '拱手相让'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'easy',
        name: '简单',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'easy', '简单', '差劲', '小拇指', '手势', '手指'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'empty',
        name: '空手',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'empty', '空手', '摊手', '伸手'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fingerprint',
        name: '指纹',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'fingerprint', '指纹', '安全', '解锁', '认证', '验证'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fingerprint-three',
        name: '指纹',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'fingerprint-three', '指纹', '身份', '识别', '解锁', '验证', '安全', '认证'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fingerprint-two',
        name: '指纹',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'fingerprint-two', '指纹', '安全', '解锁', '认证', '验证'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'first',
        name: '第一',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'first', '第一', '一', '手指', '食指', '手势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fist',
        name: '拳头',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'fist', '拳头', '石头', '拳'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'five',
        name: '五',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'five', '五', '手指', '手势', '手掌'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'five-five',
        name: '五',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'five-five', '五', '手指', '手势', '手掌'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'flirt',
        name: '勾引',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'flirt', '勾引', '引诱'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'four',
        name: '四',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'four', '四', '手指', '手势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'four-four',
        name: '四',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'four-four', '四', '手指', '手势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'good',
        name: '好的',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'good', '好的', '好', '认可', '肯定', '赞'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'good-one',
        name: '优秀',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'good-one', '优秀', '赞', '好的', '认可'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'good-two',
        name: '赞',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'good-two', '赞', '好', '认可', '肯定'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hand-down',
        name: '向下指',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'hand-down', '向下指', '向下', '下面', '手', '手势', 'hand'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hand-drag',
        name: '手动拖动',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'hand-drag', '手动拖动', '拖动', '滑动', '手滑单手滑动', '右滑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hand-left',
        name: '向左指',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'hand-left', '向左指', '向左', '左边', '手', '手势', 'hand'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hand-right',
        name: '向右指',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'hand-right', '向右指', '向右', '右边', '手', '手势', 'hand'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hand-up',
        name: '向上指',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'hand-up', '向上指', '手', 'hand', '手势', '向上', '上面'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hi',
        name: '打招呼',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'hi', '打招呼', '手掌', '手势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hold',
        name: '承接',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'hold', '承接', '拿起', '拱手'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hold-interface',
        name: '托起',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'hold-interface', '托起', '拿起', '拱手', '交接'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hold-seeds',
        name: '孕育',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'hold-seeds', '孕育', '拿起', '拱手', '交接'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'index-finger',
        name: '食指',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'index-finger', '食指', '手指', '手势', '指', '指引'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mayura-gesture',
        name: '马尤拉手势',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'mayura-gesture', '马尤拉手势', '手', '手势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'middle-finger',
        name: '中指',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'middle-finger', '中指', '手指', '手势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'move',
        name: '移动',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'move', '移动', '滑动', '侧滑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'okay',
        name: '认可',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'okay', '认可', '三', '手指', '手势', 'OK', '肯定', '胜利'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'one',
        name: '一',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'one', '一', '手指', '食指', '手势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'one-one',
        name: '一',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'one-one', '一', '手指', '食指', '手势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'open',
        name: '打开',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'open', '打开', '张开双手', '鼓掌', '手势', '动作'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'palm',
        name: '手掌',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'palm', '手掌', '五', '手指', '手势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'point',
        name: '指向',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'point', '指向', '一', '手指', '食指', '手势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'point-out',
        name: '指出',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'point-out', '指出', '一', '手指', '食指', '手势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'press',
        name: '点击',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'press', '点击', '按动', '触发', '轻点'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'reload',
        name: '重装',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'reload', '重装', '更新', '画圈', '转动', '指向'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'respect',
        name: '抱拳',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'respect', '抱拳', '佩服', '膜拜', '崇拜', '恳求'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rock',
        name: '摇滚指',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'rock', '摇滚指', '弹手', '手指', '手势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rock-gesture',
        name: '摇滚手势',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'rock-gesture', '摇滚手势', '爱你', '爱心', '摇滚', '手势', '姿势', '态度', '乐队'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'six',
        name: '六',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'six', '六', '手指', '手势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'spider-man',
        name: '弹指',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'spider-man', '弹指', '弹手', '手指', '手势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'swing',
        name: '招手',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'swing', '招手', '摇手', '再见', '鼓掌', '击掌'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'three',
        name: '三',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'three', '三', '手指', '手势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'three-three',
        name: '三',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'three-three', '三', '手指', '手势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'thumbs-down',
        name: '踩',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'thumbs-down', '踩', '差评', '不赞', '错误'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'thumbs-up',
        name: '赞',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'thumbs-up', '赞', '好评', '点赞', '优秀'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'turn-on',
        name: '打开',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'turn-on', '打开', '按动', '点击', '触发', '触动', '轻点'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'two',
        name: '二',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'two', '二', '手指', '胜利'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'two-fingers',
        name: '两个手指',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'two-fingers', '两个手指', '手指', '手势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'two-hands',
        name: '两只手',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'two-hands', '两只手', '手势', '手', '呵护', '保护'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'two-two',
        name: '二',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'two-two', '二', '手指', '手势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'yep',
        name: '胜利',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'yep', '胜利', '二', '手指'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'zoom',
        name: '放大',
        category: 'Hands',
        keywords: ['hands', '手势动作', 'zoom', '放大', '滑动', '侧滑'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Datas',
        name: '数据',
        category: 'Datas',
        keywords: ['datas', '数据'],
        count: 24
    },
    {
        kind: 'icon',
        key: 'data-display',
        name: '数据显示',
        category: 'Datas',
        keywords: ['datas', '数据', 'data-display', '数据显示', '数据同步', '资源共享'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'data-lock',
        name: '数据锁定',
        category: 'Datas',
        keywords: ['datas', '数据', 'data-lock', '数据锁定', '资源库'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'data-switching',
        name: '数据切换',
        category: 'Datas',
        keywords: ['datas', '数据', 'data-switching', '数据切换', '资源互换', '数据关联'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'data-user',
        name: '数据用户',
        category: 'Datas',
        keywords: ['datas', '数据', 'data-user', '数据用户', '数据共享'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'database-alert',
        name: '数据库警示',
        category: 'Datas',
        keywords: ['datas', '数据', 'database-alert', '数据库警示', '资源库'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'database-code',
        name: '数据库代码',
        category: 'Datas',
        keywords: ['datas', '数据', 'database-code', '数据库代码'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'database-config',
        name: '数据库配置',
        category: 'Datas',
        keywords: ['datas', '数据', 'database-config', '数据库配置'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'database-download',
        name: '数据库下载',
        category: 'Datas',
        keywords: ['datas', '数据', 'database-download', '数据库下载', '资源下载'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'database-enter',
        name: '数据库进入',
        category: 'Datas',
        keywords: ['datas', '数据', 'database-enter', '数据库进入', '数据移出'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'database-fail',
        name: '数据库错误',
        category: 'Datas',
        keywords: ['datas', '数据', 'database-fail', '数据库错误', '资源错误'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'database-first',
        name: '数据库第一',
        category: 'Datas',
        keywords: ['datas', '数据', 'database-first', '数据库第一'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'database-forbid',
        name: '数据库禁止',
        category: 'Datas',
        keywords: ['datas', '数据', 'database-forbid', '数据库禁止', '保密', '资源封锁'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'database-lock',
        name: '数据库锁定',
        category: 'Datas',
        keywords: ['datas', '数据', 'database-lock', '数据库锁定', '资源库'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'database-network',
        name: '数据库网络',
        category: 'Datas',
        keywords: ['datas', '数据', 'database-network', '数据库网络', '资源库'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'database-network-point',
        name: '数据库网络节点',
        category: 'Datas',
        keywords: ['datas', '数据', 'database-network-point', '数据库网络节点'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'database-point',
        name: '数据库节点',
        category: 'Datas',
        keywords: ['datas', '数据', 'database-point', '数据库节点'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'database-position',
        name: '数据库定位',
        category: 'Datas',
        keywords: ['datas', '数据', 'database-position', '数据库定位'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'database-power',
        name: '数据库电源',
        category: 'Datas',
        keywords: ['datas', '数据', 'database-power', '数据库电源', '资源库'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'database-proportion',
        name: '数据库占比',
        category: 'Datas',
        keywords: ['datas', '数据', 'database-proportion', '数据库占比'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'database-search',
        name: '数据库搜索',
        category: 'Datas',
        keywords: ['datas', '数据', 'database-search', '数据库搜索', '资源查找'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'database-setting',
        name: '数据库设置',
        category: 'Datas',
        keywords: ['datas', '数据', 'database-setting', '数据库设置', '资源库'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'database-success',
        name: '数据库成功',
        category: 'Datas',
        keywords: ['datas', '数据', 'database-success', '数据库成功', '保存成功'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'database-sync',
        name: '数据库同步',
        category: 'Datas',
        keywords: ['datas', '数据', 'database-sync', '数据库同步', '数据运转'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'database-time',
        name: '数据库时间',
        category: 'Datas',
        keywords: ['datas', '数据', 'database-time', '数据库时间', '资源库'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Charts',
        name: '数据图表',
        category: 'Charts',
        keywords: ['charts', '数据图表'],
        count: 68
    },
    {
        kind: 'icon',
        key: 'activity-source',
        name: '活动源',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'activity-source', '活动源', '数据库', '数据源'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'analysis',
        name: '分析',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'analysis', '分析', '网络分析', '数据', '趋势', '统计'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'area-map',
        name: '区域图',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'area-map', '区域图', '数据', '图表', '区域', '面积图', '趋势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'arithmetic',
        name: '计算',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'arithmetic', '计算', '算数', '计算器', '算法'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'arithmetic-one',
        name: '计算',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'arithmetic-one', '计算', '计算器', '算数', '算法'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'average',
        name: '平均值',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'average', '平均值', '平均', '中等', '数值', '数据', '图表', '曲线'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'broadcast-one',
        name: '广播',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'broadcast-one', '广播', '多节点传输', '传输', '数据', '通信'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bubble-chart',
        name: '气泡图',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'bubble-chart', '气泡图', '气泡', '数据', '图表', '蒸发'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bullet-map',
        name: '子弹图',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'bullet-map', '子弹图', '数据', '图表'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'change-date-sort',
        name: '按修改日期排序',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'change-date-sort', '按修改日期排序', '修改', '排序'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chart-graph',
        name: '关系图',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'chart-graph', '关系图', '结构图', '层级'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chart-histogram',
        name: '条形图',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'chart-histogram', '条形图', '图表', '数据', '柱形图', '趋势', '财经'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chart-histogram-one',
        name: '条形图',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'chart-histogram-one', '条形图', '图表', '数据', '柱形图', '趋势', '财经'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chart-histogram-two',
        name: '条形图',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'chart-histogram-two', '条形图', '柱形图', '图表', '趋势', '数据'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chart-line',
        name: '折线图',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'chart-line', '折线图', '面积图', '曲线图', '趋势'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chart-line-area',
        name: '折线面积图',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'chart-line-area', '折线面积图', '面积图', '曲线图', '折线图'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chart-pie',
        name: '饼图',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'chart-pie', '饼图', '占比', '比例', '划分'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chart-proportion',
        name: '占比图',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'chart-proportion', '占比图', '饼图', '占比', '比例', '划分'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chart-ring',
        name: '环形图',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'chart-ring', '环形图', '环状图', '靶子', '瞄准'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chart-scatter',
        name: '散点图',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'chart-scatter', '散点图', '图表'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chart-stock',
        name: 'K线图',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'chart-stock', 'K线图', '股票图', '股票'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'creation-date-sort',
        name: '按创建日期排序',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'creation-date-sort', '按创建日期排序', '创建', '日期', '排序', '添加', '图表', '数据'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'data',
        name: '数据库',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'data', '数据库', '叠加'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'data-all',
        name: '数据',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'data-all', '数据', '数据库', '多数据', '满数据', '叠加'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'data-arrival',
        name: '数据到达',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'data-arrival', '数据到达', '任务完成', '结束', '成功'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'data-four',
        name: '数据',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'data-four', '数据', '数据库', '叠加'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'data-null',
        name: '数据空',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'data-null', '数据空', '数据为空', '空数据', '无数据', '叠加'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'data-one',
        name: '数据',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'data-one', '数据', '数据库', '叠加'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'data-screen',
        name: '数据看板',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'data-screen', '数据看板', '代码', '编程', '符号', '电脑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'data-sheet',
        name: '数据表',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'data-sheet', '数据表', '数据', '图表', '屏幕'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'data-three',
        name: '数据',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'data-three', '数据', '数据库', '叠加'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'data-two',
        name: '数据',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'data-two', '数据', '数据库', '叠加'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'deadline-sort',
        name: '按截止日期排序',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'deadline-sort', '按截止日期排序', '截止', '关闭', '排序', '截止日期'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'electrocardiogram',
        name: '心电图',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'electrocardiogram', '心电图', '报警', '监控', '监视'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'end-time-sort',
        name: '按结束时间排序',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'end-time-sort', '按结束时间排序', '排序', '序列', '按时间排序'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'follow-up-date-sort',
        name: '按跟进日期排序',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'follow-up-date-sort', '按跟进日期排序', '跟进', '箭头', '下一步', '排序', '图表', '数据'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'form',
        name: '表格',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'form', '表格', '图表', '数据', '列表', '排版'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'histogram',
        name: '直方图',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'histogram', '直方图', '折线图', '数据分析', '图表'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'kagi-map',
        name: 'kagi图',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'kagi-map', 'kagi图', '数据', '图表', '城市剪影'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'maslow-pyramids',
        name: '马斯洛金字塔',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'maslow-pyramids', '马斯洛金字塔', '需求层次理论', '金字塔需求'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'material-three',
        name: '材料3',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'material-three', '材料3', '图片集', '照片', '相册'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'maximum',
        name: '最大值',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'maximum', '最大值', '最大', '极限', '数值', '数据', '图表', '曲线'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'min',
        name: '最小值',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'min', '最小值', '最小', '极限', '数值', '数据', '图表', '曲线'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'multicast',
        name: '多播',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'multicast', '多播', '组播', '节点传输', '多节点', '通信'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'negative-dynamics',
        name: '消极动态',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'negative-dynamics', '消极动态', '动态', '消极', '负向数据', '图表'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'parabola',
        name: '抛物线',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'parabola', '抛物线', '试验', '数学', '教育', '科学'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pie',
        name: '进度',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'pie', '进度', '百分比', '饼图', '划分'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pie-five',
        name: '进度5',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'pie-five', '进度5', '进度', '百分比', '饼图', '划分'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pie-four',
        name: '进度4',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'pie-four', '进度4', '进度', '百分比', '饼图', '划分'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pie-one',
        name: '进度1',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'pie-one', '进度1', '进度', '百分比', '饼图', '划分'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pie-seven',
        name: '进度7',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'pie-seven', '进度7', '进度', '百分比', '饼图', '划分'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pie-six',
        name: '进度6',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'pie-six', '进度6', '进度', '百分比', '饼图', '划分'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pie-three',
        name: '进度3',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'pie-three', '进度3', '进度', '百分比', '饼图', '划分'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pie-two',
        name: '进度2',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'pie-two', '进度2', '进度', '百分比', '饼图', '划分'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pivot-table',
        name: '数据透视表',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'pivot-table', '数据透视表', '数据', '透视', '表格', '交互式表格'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'positive-dynamics',
        name: '积极动态',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'positive-dynamics', '积极动态', '动态', '积极', '正向数据', '图表'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'radar-chart',
        name: '雷达图',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'radar-chart', '雷达图', '蜘蛛网', '雷达', '图谱'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ranking',
        name: '排行榜',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'ranking', '排行榜', '柱状图', '奖牌', '排名', '热榜'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ranking-list',
        name: '排行榜',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'ranking-list', '排行榜', '排行', '排名', '榜单'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'recent-views-sort',
        name: '按最近浏览量排序',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'recent-views-sort', '按最近浏览量排序', '排序', '浏览', '最近', '查看数据'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sinusoid',
        name: '正弦曲线',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'sinusoid', '正弦曲线', '正玄曲线', '科学', '数学', '教育', '物理'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'slide',
        name: '幻灯片',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'slide', '幻灯片', '数据看版', '销售提报', '文稿演示', '屏幕', '投屏'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'slide-two',
        name: '幻灯片',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'slide-two', '幻灯片', '播放', 'PPT', '投影'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'start-time-sort',
        name: '按开始时间排序',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'start-time-sort', '按开始时间排序', '排序', '序列', '按时间排序', '开始'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'timeline',
        name: '时间线',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'timeline', '时间线', '分析', '图表'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'unicast',
        name: '单播',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'unicast', '单播', '点对点通信', '节点传输'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'vertical-timeline',
        name: '垂直时间线',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'vertical-timeline', '垂直时间线', '时间线', '时间', '数据', '分析', '图表'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'viencharts',
        name: '维恩图',
        category: 'Charts',
        keywords: ['charts', '数据图表', 'viencharts', '维恩图', '数据', '维恩', '图表', '圆环交叉'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Sports',
        name: '体育运动',
        category: 'Sports',
        keywords: ['sports', '体育运动'],
        count: 84
    },
    {
        kind: 'icon',
        key: 'air-bike',
        name: '空气自行车',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'air-bike', '空气自行车'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'archers-bow',
        name: '射箭',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'archers-bow', '射箭', '弓箭'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'archery',
        name: '射箭',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'archery', '射箭'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'arena',
        name: '竞技场',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'arena', '竞技场', '拳击', '拳击台', '比赛', '擂台', '摔跤', '体育', '运动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'badge-two',
        name: '徽章',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'badge-two', '徽章'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'badminton',
        name: '羽毛球',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'badminton', '羽毛球', '球类', '球', '运动', '网球', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'balance-one',
        name: '电子秤',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'balance-one', '电子秤', '称', '减肥', '减脂', '平衡', '体重', '重量', '质量', '沉重', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'baokemeng',
        name: '精灵球',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'baokemeng', '精灵球', '球类', '球', '弹性球', '圆球', '彩色球', '水晶球', '精灵'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'baseball',
        name: '棒球',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'baseball', '棒球', '运动', '体育', '板球'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'baseball-bat',
        name: '棒球棍',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'baseball-bat', '棒球棍'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'basketball',
        name: '篮球',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'basketball', '篮球', '追波', 'dribbble', '设计'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'basketball-one',
        name: '篮球架1',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'basketball-one', '篮球架1', '篮球', '篮板', '三分球', '得分', '进球', '进攻', '命中', '投篮', '球类', '球', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'basketball-stand',
        name: '篮球架',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'basketball-stand', '篮球架', '运动', '篮板'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'black-eight',
        name: '台球黑八',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'black-eight', '台球黑八', '运动', '台球', '斯诺克', '桌球'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bottom-bar-one',
        name: '保留球',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'bottom-bar-one', '保留球', '球'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bowling',
        name: '保龄球',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'bowling', '保龄球', '球类', '球', '圆球', '硬球', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'boxing',
        name: '拳击',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'boxing', '拳击', '手套', '护具', '套', '训练', '打击', '拳头', '力量', '对打', '攻击', '跆拳道', '摔跤', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'boxing-one',
        name: '拳击1',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'boxing-one', '拳击1', '拳击', '手套', '护具', '套', '训练', '打击', '拳头', '力量', '对打', '攻击', '跆拳道', '摔跤', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'checkerboard',
        name: '棋盘',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'checkerboard', '棋盘', '下棋', '围棋'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chess',
        name: '西洋棋',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'chess', '西洋棋', '象棋', '国际象棋', '西洋象棋', '棋子', '人马', '兵', '卒', '战争', '战场', '对战', '比赛', '智力', '战术', '策略'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chess-one',
        name: '国际象棋',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'chess-one', '国际象棋', '象棋', '西洋象棋', '棋子', '人马', '兵', '卒', '战争', '战场', '对战', '比赛', '智力', '战术', '策略'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'court',
        name: '篮球场',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'court', '篮球场', '运动', '篮球', '场地'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'curling',
        name: '冰壶',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'curling', '冰壶', '奥运会', '滑冰', '比赛', '运动', '团队项目', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'diving-bottle',
        name: '潜水瓶',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'diving-bottle', '潜水瓶', '潜水', '氧气瓶', '补给', '装备', '瓶子', '救生', '医疗', '换气', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'diving-suit',
        name: '潜水装',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'diving-suit', '潜水装', '潜水', '服装', '装备', '潜水服', '衣服', '呼吸', '换气', '眼罩', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dumbbel-line',
        name: '杠铃',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'dumbbel-line', '杠铃'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dumbbell',
        name: '健身',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'dumbbell', '健身', '运动', '减肥', '体育', '哑铃', '举重'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fitness',
        name: '健身',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'fitness', '健身'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'five-star-badge',
        name: '五星徽章',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'five-star-badge', '五星徽章'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'foot',
        name: '脚',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'foot', '脚'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'football',
        name: '足球',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'football', '足球', '运动', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'gold-medal',
        name: '金牌',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'gold-medal', '金牌', '奖牌', '第一名'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'gold-medal-two',
        name: '金牌',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'gold-medal-two', '金牌', '奖牌', '第一名'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'golf-course',
        name: '高尔夫球场',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'golf-course', '高尔夫球场', '运动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'gongfu',
        name: '功夫',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'gongfu', '功夫'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'gymnastics',
        name: '体操2',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'gymnastics', '体操2', '体操', '运动', '跳舞', '跳动', '活动', '训练', '舞蹈', '挥舞', '舞动', '放松', '热身', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'gymnastics-one',
        name: '体操1',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'gymnastics-one', '体操1', '体操', '运动', '跳舞', '跳动', '活动', '训练', '舞蹈', '挥舞', '舞动', '放松', '热身', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'heartbeat',
        name: '心跳',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'heartbeat', '心跳', '呼吸', '喘气', '心脏', '心电图', '跳动', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'helmet',
        name: '头盔',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'helmet', '头盔', '橄榄球头盔', '铁盔', '盔', '护具', '防护', '半盔', '全盔', '帽子', '安全'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hockey',
        name: '曲棍球',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'hockey', '曲棍球', '打', '运动', '比赛', '体育', '球类', '球', '进球', '运球', '助攻', '棍球'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'jump',
        name: '跳',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'jump', '跳'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'kungfu',
        name: '功夫',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'kungfu', '功夫', '武打', '练功', '训练', '习武', '踢脚', '抬腿', '舞蹈', '体操', '压腿', '放松', '热身', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'muscle',
        name: '肌肉',
        category: 'Sports',
        keywords: [
            'sports',
            '体育运动',
            'muscle',
            '肌肉',
            '武打',
            '功夫',
            '练功',
            '训练',
            '习武',
            '踢脚',
            '抬腿',
            '舞蹈',
            '体操',
            '放松',
            '热身',
            '健身',
            '健壮',
            '健康',
            '力量',
            '体育'
        ],
        count: 0
    },
    {
        kind: 'icon',
        key: 'play-basketball',
        name: '打篮球',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'play-basketball', '打篮球', '篮球', '球类', '球', '运动', '扣篮', '远投', '传球', '助攻', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'play-volleyball',
        name: '打排球',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'play-volleyball', '打排球', '排球', '运动', '体育', '拍', '打', '扣', '球类', '球'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'riding',
        name: '骑自行车',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'riding', '骑自行车', '骑行', '运动', '比赛', '自行车', '冲刺', '两轮车', '轮胎', '速度', '健身', '力量', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rings',
        name: '吊环',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'rings', '吊环', '训练', '舞蹈', '体操', '放松', '热身', '健身', '健壮', '健康', '力量', '运动', '拉伸', '吊起', '技术', '技巧', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rollerskates',
        name: '溜冰鞋',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'rollerskates', '溜冰鞋', '鞋子', '滑冰', '溜冰', '轮滑', '滑行', '滑走', '运动', '训练', '技术', '技巧', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rope-skipping',
        name: '跳绳',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'rope-skipping', '跳绳', '绳子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rope-skipping-one',
        name: '跳绳',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'rope-skipping-one', '跳绳', '绳子', '跳'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rowing',
        name: '划船',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'rowing', '划船', '滑动', '船', '滑行', '拨动', '前进', '划龙舟', '划水', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rugby',
        name: '橄榄球',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'rugby', '橄榄球', '运动', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rugby-one',
        name: '橄榄球1',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'rugby-one', '橄榄球1', '球类', '球', '运动', '橄榄球', '美式足球', '美式体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sailboat',
        name: '帆船',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'sailboat', '帆船', '船', '舰', '渔船', '港口', '航行', '旅游'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'scoreboard',
        name: '比分牌',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'scoreboard', '比分牌', '比分', '统计牌'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'skate',
        name: '滑板',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'skate', '滑板', '板', '滑冰', '溜冰', '轮滑', '滑行', '滑走', '运动', '训练', '技术', '技巧', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'skating',
        name: '溜冰鞋',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'skating', '溜冰鞋', '鞋子', '滑冰', '溜冰', '轮滑', '滑行', '滑走', '运动', '训练', '技术', '技巧', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'skiing-nordic',
        name: '滑雪',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'skiing-nordic', '滑雪', '滑车'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'soccer',
        name: '足球',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'soccer', '足球', '踢足球', '运动', '体育', '运球', '打球', '踢', '跑动', '助攻'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'soccer-one',
        name: '足球1',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'soccer-one', '足球1', '踢足球', '足球', '运动', '体育', '运球', '过人', '变向', '射门', '打球', '踢', '跑动', '助攻'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'softball',
        name: '垒球',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'softball', '垒球', '棒球', '球类', '球', '弹性球', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'spikedshoes',
        name: '钉鞋',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'spikedshoes', '钉鞋', '鞋子', '跑步', '运动', '训练', '技术', '技巧', '体育', '鞋'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'spinning-top',
        name: '陀螺',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'spinning-top', '陀螺', '旋转', '陀螺仪', '转动', '转', '平衡', '速度'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sport',
        name: '运动',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'sport', '运动', '跑步', '健康', '活力'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sporting',
        name: '运动',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'sporting', '运动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'stretching-one',
        name: '拉伸',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'stretching-one', '拉伸'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'swimming-pool',
        name: '游泳池',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'swimming-pool', '游泳池', '水池', '游泳', '潜水', '下水', '泡水', '泡澡', '河', '水塘'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'swimming-ring',
        name: '游泳圈',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'swimming-ring', '游泳圈', '救生圈', '气球', '游泳', '下水', '安全', '救生', '圈'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tabletennis',
        name: '乒乓球',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'tabletennis', '乒乓球', '乒乓', '运动', '体育', '拍', '打', '扣', '球类', '球'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'target-one',
        name: '靶标',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'target-one', '靶标', '射击', '打靶', '训练', '射', '精准', '射箭', '比赛', '标靶', '准确', '枪战'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'target-two',
        name: '枪靶',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'target-two', '枪靶', '射击', '打靶', '训练', '射', '精准', '射箭', '比赛', '标靶', '准确', '枪战', '扫描'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tennis',
        name: '网球',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'tennis', '网球', '运动', '球'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'thin',
        name: '瘦身',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'thin', '瘦身', '胸', '身材', '瘦', '女人', '妩媚', '性感'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'torch',
        name: '火炬',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'torch', '火炬', '奥运会', '火', '传递', '点燃', '燃烧', '火焰', '火把', '照明', '圣火', '生火'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'towel',
        name: '毛巾',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'towel', '毛巾', '布', '布料', '浴巾', '手绢', '生活用品', '软', '擦', '洗'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'treadmill',
        name: '跑步机',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'treadmill', '跑步机', '跑步', '器材', '工具', '跑', '智能', '电子', '设备'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'treadmill-one',
        name: '跑步机1',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'treadmill-one', '跑步机1', '跑步', '运动', '体育', '跑', '慢跑', '健身', '减脂', '瘦身', '训练'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'treadmill-two',
        name: '跑步机',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'treadmill-two', '跑步机'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'volleyball',
        name: '排球',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'volleyball', '排球', '球类', '球', '线球', '圆球', '轮子', '运动', '体育'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'waterpolo',
        name: '水球',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'waterpolo', '水球', '运动', '体育', '排球', '水', '训练'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'waterpolo-one',
        name: '水球1',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'waterpolo-one', '水球1', '运动', '体育', '排球', '水', '训练'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'weightlifting',
        name: '举重',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'weightlifting', '举重', '运动', '体育', '训练', '减脂', '重量', '负重', '力量', '比赛', '拉伸'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'whistling',
        name: '吹哨',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'whistling', '吹哨', '哨子', '比赛', '声音', '响声', '裁判', '犯规', '铃声', '音乐', '乐器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'wingsuit-flying',
        name: '翼装飞行',
        category: 'Sports',
        keywords: ['sports', '体育运动', 'wingsuit-flying', '翼装飞行', '飞行', '人', '体育', '运动', '比赛', '超人', '飞人'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Weather',
        name: '天气',
        category: 'Weather',
        keywords: ['weather', '天气'],
        count: 16
    },
    {
        kind: 'icon',
        key: 'cloudy',
        name: '多云',
        category: 'Weather',
        keywords: ['weather', '天气', 'cloudy', '多云', '阴天', '云彩', '云朵'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cloudy-night',
        name: '夜间多云',
        category: 'Weather',
        keywords: ['weather', '天气', 'cloudy-night', '夜间多云', '云'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fog',
        name: '大雾',
        category: 'Weather',
        keywords: ['weather', '天气', 'fog', '大雾', '雾霾', '云雾'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'heavy-rain',
        name: '大雨',
        category: 'Weather',
        keywords: ['weather', '天气', 'heavy-rain', '大雨', '下雨', '洪水'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'heavy-wind',
        name: '大风',
        category: 'Weather',
        keywords: ['weather', '天气', 'heavy-wind', '大风', '风'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'light-rain',
        name: '小雨',
        category: 'Weather',
        keywords: ['weather', '天气', 'light-rain', '小雨', '下雨'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'moon',
        name: '月亮',
        category: 'Weather',
        keywords: ['weather', '天气', 'moon', '月亮', '夜晚', '黑夜', '晚上', '月牙', '黑暗'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sandstorm',
        name: '沙尘暴',
        category: 'Weather',
        keywords: ['weather', '天气', 'sandstorm', '沙尘暴', '浮尘', '大风', '坏天气'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'snow',
        name: '下雪',
        category: 'Weather',
        keywords: ['weather', '天气', 'snow', '下雪', '雪'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'snowflake',
        name: '雪花',
        category: 'Weather',
        keywords: ['weather', '天气', 'snowflake', '雪花', '下雪', '寒冷', '大雪'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sun',
        name: '太阳',
        category: 'Weather',
        keywords: ['weather', '天气', 'sun', '太阳', '晴朗', '阳光'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sun-one',
        name: '太阳1',
        category: 'Weather',
        keywords: ['weather', '天气', 'sun-one', '太阳1', '阳光', '太阳', '晴朗'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sunny',
        name: '晴天',
        category: 'Weather',
        keywords: ['weather', '天气', 'sunny', '晴天', '晴朗', '好心情'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'thunderstorm',
        name: '雷雨',
        category: 'Weather',
        keywords: ['weather', '天气', 'thunderstorm', '雷雨', '打雷', '闪电', '下雨'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'thunderstorm-one',
        name: '雷雨',
        category: 'Weather',
        keywords: ['weather', '天气', 'thunderstorm-one', '雷雨', '打雷', '闪电', '下雨'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'wind',
        name: '刮风',
        category: 'Weather',
        keywords: ['weather', '天气', 'wind', '刮风', '风'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Constellation',
        name: '星座',
        category: 'Constellation',
        keywords: ['constellation', '星座'],
        count: 12
    },
    {
        kind: 'icon',
        key: 'aquarius',
        name: '水瓶座',
        category: 'Constellation',
        keywords: ['constellation', '星座', 'aquarius', '水瓶座'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'aries',
        name: '白羊座',
        category: 'Constellation',
        keywords: ['constellation', '星座', 'aries', '白羊座'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cancer',
        name: '巨蟹座',
        category: 'Constellation',
        keywords: ['constellation', '星座', 'cancer', '巨蟹座'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'capricornus',
        name: '摩羯座',
        category: 'Constellation',
        keywords: ['constellation', '星座', 'capricornus', '摩羯座'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'gemini',
        name: '双子座',
        category: 'Constellation',
        keywords: ['constellation', '星座', 'gemini', '双子座'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'leo',
        name: '狮子座',
        category: 'Constellation',
        keywords: ['constellation', '星座', 'leo', '狮子座'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'libra',
        name: '天秤座',
        category: 'Constellation',
        keywords: ['constellation', '星座', 'libra', '天秤座'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pisces',
        name: '双鱼座',
        category: 'Constellation',
        keywords: ['constellation', '星座', 'pisces', '双鱼座'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sagittarius',
        name: '射手座',
        category: 'Constellation',
        keywords: ['constellation', '星座', 'sagittarius', '射手座'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'scorpio',
        name: '天蝎座',
        category: 'Constellation',
        keywords: ['constellation', '星座', 'scorpio', '天蝎座'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'taurus',
        name: '金牛座',
        category: 'Constellation',
        keywords: ['constellation', '星座', 'taurus', '金牛座'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'virgo',
        name: '处女座',
        category: 'Constellation',
        keywords: ['constellation', '星座', 'virgo', '处女座'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Health',
        name: '医疗健康',
        category: 'Health',
        keywords: ['health', '医疗健康'],
        count: 70
    },
    {
        kind: 'icon',
        key: 'abdominal',
        name: '腹部',
        category: 'Health',
        keywords: ['health', '医疗健康', 'abdominal', '腹部', '肚子', '腹', '腰'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ambulance',
        name: '救护车',
        category: 'Health',
        keywords: ['health', '医疗健康', 'ambulance', '救护车'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'anti-corrosion',
        name: '防腐',
        category: 'Health',
        keywords: ['health', '医疗健康', 'anti-corrosion', '防腐', '防腐剂', '保存', '防腐科', '堆积物'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bottle',
        name: '奶瓶',
        category: 'Health',
        keywords: ['health', '医疗健康', 'bottle', '奶瓶', '育儿', '哺育', '婴幼儿科'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'brain',
        name: '大脑',
        category: 'Health',
        keywords: ['health', '医疗健康', 'brain', '大脑', '脑部', '头部', '脑科', '思考', '智慧', '医疗'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cardioelectric',
        name: '心电',
        category: 'Health',
        keywords: ['health', '医疗健康', 'cardioelectric', '心电', '电波', '心电图', '检测', '心跳', '波动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cell',
        name: '细胞',
        category: 'Health',
        keywords: ['health', '医疗健康', 'cell', '细胞', '䏭', '生命体', '生命', '生物'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chest',
        name: '胸部',
        category: 'Health',
        keywords: ['health', '医疗健康', 'chest', '胸部', '胸腔', '肺部', '器官', '医疗'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'composition',
        name: '成份',
        category: 'Health',
        keywords: ['health', '医疗健康', 'composition', '成份', '实验', '元素', '组成部分', '组成元素', '试管'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cross-society',
        name: '红十字',
        category: 'Health',
        keywords: ['health', '医疗健康', 'cross-society', '红十字'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'detection',
        name: '检测',
        category: 'Health',
        keywords: ['health', '医疗健康', 'detection', '检测', '检查', '测试', '实验', '测量'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ecg',
        name: '心电图2',
        category: 'Health',
        keywords: ['health', '医疗健康', 'ecg', '心电图2'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'eeg',
        name: '脑电图',
        category: 'Health',
        keywords: ['health', '医疗健康', 'eeg', '脑电图'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'endocrine',
        name: '内分泌',
        category: 'Health',
        keywords: ['health', '医疗健康', 'endocrine', '内分泌', '分泌', '火', '新陈代谢'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'eyes',
        name: '眼睛',
        category: 'Health',
        keywords: ['health', '医疗健康', 'eyes', '眼睛', '眼科', '睁眼', '开启'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'facial-mask',
        name: '口罩2',
        category: 'Health',
        keywords: ['health', '医疗健康', 'facial-mask', '口罩2'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'first-aid-kit',
        name: '急救箱',
        category: 'Health',
        keywords: ['health', '医疗健康', 'first-aid-kit', '急救箱'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'gastrointestinal',
        name: '肠胃',
        category: 'Health',
        keywords: ['health', '医疗健康', 'gastrointestinal', '肠胃', '内科', '胃', '器官'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'gauze',
        name: '纱布',
        category: 'Health',
        keywords: ['health', '医疗健康', 'gauze', '纱布'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'general-branch',
        name: '全科',
        category: 'Health',
        keywords: ['health', '医疗健康', 'general-branch', '全科', '添加', '科室', '全部科室'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'germs',
        name: '病菌',
        category: 'Health',
        keywords: ['health', '医疗健康', 'germs', '病菌', '细菌', '病毒', '菌体', '细小'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'heart',
        name: '心脏',
        category: 'Health',
        keywords: ['health', '医疗健康', 'heart', '心脏', '心', '脉搏', '跳动', '器官', '医疗'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'heart-rate',
        name: '心率',
        category: 'Health',
        keywords: ['health', '医疗健康', 'heart-rate', '心率'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hospital',
        name: '医院',
        category: 'Health',
        keywords: ['health', '医疗健康', 'hospital', '医院', '就医', '看病', '就诊', '医疗'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hospital-bed',
        name: '病床',
        category: 'Health',
        keywords: ['health', '医疗健康', 'hospital-bed', '病床'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hospital-four',
        name: '医院4',
        category: 'Health',
        keywords: ['health', '医疗健康', 'hospital-four', '医院4'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hospital-three',
        name: '医院3',
        category: 'Health',
        keywords: ['health', '医疗健康', 'hospital-three', '医院3'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'infusion',
        name: '点滴',
        category: 'Health',
        keywords: ['health', '医疗健康', 'infusion', '点滴'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'injection',
        name: '打针',
        category: 'Health',
        keywords: ['health', '医疗健康', 'injection', '打针', '麻醉', '麻醉科'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'love-and-help',
        name: '爱心',
        category: 'Health',
        keywords: ['health', '医疗健康', 'love-and-help', '爱心'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'lung',
        name: '肺',
        category: 'Health',
        keywords: ['health', '医疗健康', 'lung', '肺', '呼吸', '呼吸道', '呼吸科', '器官'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mask',
        name: '口罩',
        category: 'Health',
        keywords: ['health', '医疗健康', 'mask', '口罩', '传染', '传染科', '雾霾', '生病'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'medical-box',
        name: '医疗箱',
        category: 'Health',
        keywords: ['health', '医疗健康', 'medical-box', '医疗箱', '药箱', '急诊箱'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'medical-files',
        name: '医疗档案',
        category: 'Health',
        keywords: ['health', '医疗健康', 'medical-files', '医疗档案', '档案', '文件', '收藏文件', '医疗'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'medical-mark',
        name: '医学标志',
        category: 'Health',
        keywords: ['health', '医疗健康', 'medical-mark', '医学标志'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'medicine-bottle',
        name: '药罐',
        category: 'Health',
        keywords: ['health', '医疗健康', 'medicine-bottle', '药罐', '西药', '药瓶'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'medicine-bottle-one',
        name: '药瓶',
        category: 'Health',
        keywords: ['health', '医疗健康', 'medicine-bottle-one', '药瓶'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'medicine-chest',
        name: '药箱',
        category: 'Health',
        keywords: ['health', '医疗健康', 'medicine-chest', '药箱'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'microscope',
        name: '显微镜',
        category: 'Health',
        keywords: ['health', '医疗健康', 'microscope', '显微镜', '观察', '高倍镜', '病理科'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'nasal',
        name: '鼻腔',
        category: 'Health',
        keywords: ['health', '医疗健康', 'nasal', '鼻腔', '鼻子', '呼吸', '耳鼻喉', '耳鼻喉科'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'needle',
        name: '针',
        category: 'Health',
        keywords: ['health', '医疗健康', 'needle', '针'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'nests',
        name: '燕窝',
        category: 'Health',
        keywords: ['health', '医疗健康', 'nests', '燕窝', '补品', '滋补', '养生', '动物'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'neural',
        name: '神经',
        category: 'Health',
        keywords: ['health', '医疗健康', 'neural', '神经', '神经科', '精神', '神经元', '医疗'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'nmr',
        name: '核磁共振',
        category: 'Health',
        keywords: ['health', '医疗健康', 'nmr', '核磁共振', '影像科', '影像', '检查', '医疗'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'nurse-cap',
        name: '护士帽',
        category: 'Health',
        keywords: ['health', '医疗健康', 'nurse-cap', '护士帽'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'nutrition',
        name: '营养',
        category: 'Health',
        keywords: ['health', '医疗健康', 'nutrition', '营养', '米饭', '午饭', '午餐', '饭', '营养科'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'orthopedic',
        name: '骨科',
        category: 'Health',
        keywords: ['health', '医疗健康', 'orthopedic', '骨科', '骨头', '器官'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'other',
        name: '其他',
        category: 'Health',
        keywords: ['health', '医疗健康', 'other', '其他', '其他科室', '添加', '新建', '增加'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'panorama-horizontal',
        name: '全景水平',
        category: 'Health',
        keywords: ['health', '医疗健康', 'panorama-horizontal', '全景水平', '水平线', '全景', '拍照', '360度'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'period',
        name: '经期',
        category: 'Health',
        keywords: ['health', '医疗健康', 'period', '经期', '女性', '生理期', '生殖'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pesticide',
        name: '农药',
        category: 'Health',
        keywords: ['health', '医疗健康', 'pesticide', '农药', '药品', '毒药', '肥料', '药瓶', '医药', '牛奶'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pill',
        name: '药丸2',
        category: 'Health',
        keywords: ['health', '医疗健康', 'pill', '药丸2'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pills',
        name: '药丸',
        category: 'Health',
        keywords: ['health', '医疗健康', 'pills', '药丸', '药', '生病', '吃药', '看医生'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'plastic-surgery',
        name: '整形科',
        category: 'Health',
        keywords: ['health', '医疗健康', 'plastic-surgery', '整形科', '整容', '美容', '整容手术', '医疗美容', '女人', '女士', '女性', '美女', '女性用户'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pregnant-women',
        name: '孕妇',
        category: 'Health',
        keywords: ['health', '医疗健康', 'pregnant-women', '孕妇', '怀孕', '胎儿', '妈妈', '孕产期'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'prescription',
        name: '处方',
        category: 'Health',
        keywords: ['health', '医疗健康', 'prescription', '处方', '药单', '看医生', '看病', '添加', '添加文件', '文件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pure-natural',
        name: '纯天然',
        category: 'Health',
        keywords: ['health', '医疗健康', 'pure-natural', '纯天然', '绿色', '天然', '无公害', '健康'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'red-cross',
        name: '红十字',
        category: 'Health',
        keywords: ['health', '医疗健康', 'red-cross', '红十字', '医疗', '救援', '医院', '急救中心'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'renal',
        name: '肾',
        category: 'Health',
        keywords: ['health', '医疗健康', 'renal', '肾', '泌尿科', '肾脏', '排泄', '代谢', '器官'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'safe-retrieval',
        name: '安全检索',
        category: 'Health',
        keywords: ['health', '医疗健康', 'safe-retrieval', '安全检索'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sperm',
        name: '精子',
        category: 'Health',
        keywords: ['health', '医疗健康', 'sperm', '精子', '男科', '生殖', '繁衍'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'stethoscope',
        name: '听诊器',
        category: 'Health',
        keywords: ['health', '医疗健康', 'stethoscope', '听诊器', '医疗', '医生', '治疗', '监测', '大夫', '护士', '药物'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'swallow',
        name: '燕子',
        category: 'Health',
        keywords: ['health', '医疗健康', 'swallow', '燕子', '鸟', '麻雀', '小鸟', '动物', '燕窝'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'teeth',
        name: '牙齿',
        category: 'Health',
        keywords: ['health', '医疗健康', 'teeth', '牙齿', '口腔', '齿科', '医疗'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'thermometer-one',
        name: '温度计1',
        category: 'Health',
        keywords: ['health', '医疗健康', 'thermometer-one', '温度计1'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'toxins',
        name: '毒素',
        category: 'Health',
        keywords: ['health', '医疗健康', 'toxins', '毒素', '有毒害', '有害气体', '恐怖', '有害', '骷髅'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'traditional-chinese-medicine',
        name: '中药',
        category: 'Health',
        keywords: ['health', '医疗健康', 'traditional-chinese-medicine', '中药', '中国', '药材', '饭', '碗'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'uterus',
        name: '子宫',
        category: 'Health',
        keywords: ['health', '医疗健康', 'uterus', '子宫', '女性', '生殖', '繁衍', '器官'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'waistline',
        name: '腰围',
        category: 'Health',
        keywords: ['health', '医疗健康', 'waistline', '腰围'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'weight',
        name: '体重',
        category: 'Health',
        keywords: ['health', '医疗健康', 'weight', '体重', '秤', '重量', '称量'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Hardware',
        name: '硬件',
        category: 'Hardware',
        keywords: ['hardware', '硬件'],
        count: 223
    },
    {
        kind: 'icon',
        key: 'add-computer',
        name: '计算机添加',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'add-computer', '计算机添加'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'air-conditioning',
        name: '空调',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'air-conditioning', '空调', '电空调', '家电', '温度', '过滤器', '制暖', '制冷', '换气'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'airplay',
        name: 'AirPlay',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'airplay', 'AirPlay', '屏幕映像', '无线投屏', '电脑', '显示器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'asterisk-key',
        name: '星号键',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'asterisk-key', '星号键', '星号', '按钮'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'battery-failure',
        name: '电池故障',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'battery-failure', '电池故障'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'battery-storage',
        name: '电池充电',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'battery-storage', '电池充电'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'battery-tips',
        name: '电池提示',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'battery-tips', '电池提示'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'battery-working-one',
        name: '电池',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'battery-working-one', '电池', '电量', '充电', '能量', '能源'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bike',
        name: '自行车',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'bike', '自行车', '单车', '交通', '出行', '健身', '锻炼'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bolt-one',
        name: '插头',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'bolt-one', '插头', '电器', '电源', '充电器', '插排', '插座'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'broadcast-radio',
        name: '收音机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'broadcast-radio', '收音机', '声音', '播放器', '复古电器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bus',
        name: '大巴',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'bus', '大巴', '旅游', '汽车', '出行', '交通'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'calculator',
        name: '计算器',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'calculator', '计算器', '计算', '算数', '数学', '算力'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'calculator-one',
        name: '计算器',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'calculator-one', '计算器', '计算', '智能', '算数', '统计', '结果', '答案', '数字', '加', '减', '乘', '除', '工具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'camera-five',
        name: '摄像头',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'camera-five', '摄像头', '摄像', '拍摄', '记录', '录像', '录制', '检测', '探头', '抓拍', '偷拍', '电影', '放映'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'camera-four',
        name: '监控录像',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'camera-four', '监控录像', '摄像', '拍摄', '记录', '录像', '录制', '检测', '探头', '抓拍', '偷拍', '电影', '放映'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'camera-one',
        name: '摄像头',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'camera-one', '摄像头', '摄像', '拍摄', '记录', '录像', '录制', '检测', '探头', '抓拍', '偷拍'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'camera-three',
        name: '相机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'camera-three', '相机', '照相机', '傻瓜机', '摄像机', '摄影', '记录', '记载', '画面', '抓拍', '偷拍'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'camera-two',
        name: '智能摄像头',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'camera-two', '智能摄像头', '摄像', '拍摄', '记录', '录像', '录制', '检测', '探头', '抓拍', '偷拍'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'car',
        name: '汽车',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'car', '汽车', '交通', '小轿车', '出行'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cd',
        name: '光盘',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'cd', '光盘', '刻盘', 'CD', '影片', '光碟'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'charging-treasure',
        name: '充电宝',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'charging-treasure', '充电宝', '电池', '电量', '充电', '能量', '能源', '充电器', '移动电源'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'chip',
        name: '芯片',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'chip', '芯片', '科技', '晶片'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cloud-storage',
        name: '云存储',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'cloud-storage', '云存储', '储存', '云盘', 'cloud', 'store'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'code-computer',
        name: '计算机代码',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'code-computer', '计算机代码'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'code-laptop',
        name: '笔记本电脑代码',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'code-laptop', '笔记本电脑代码'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'collect-computer',
        name: '计算机收藏',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'collect-computer', '计算机收藏'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'collect-laptop',
        name: '笔记本电脑收集',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'collect-laptop', '笔记本电脑收集'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'computer',
        name: '电脑',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'computer', '电脑', '显示屏', 'PC电脑', '电视'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'computer-one',
        name: '计算机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'computer-one', '计算机', '计算', '算数', '加', '减', '乘', '除'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'control',
        name: '控制器',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'control', '控制器', '控制设备', '调控器', '调节器', '控制台'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cpu',
        name: '芯片',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'cpu', '芯片', 'CPU', 'GPU', '算法', '算力', '电路', '运算'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cup',
        name: '咖啡杯',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'cup', '咖啡杯', '水', '水杯', '被子', '饮料', '咖啡', '热饮', '喝'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dashboard-one',
        name: '仪表盘',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'dashboard-one', '仪表盘', '仪表', '速度', '数值', '计数', '表盘', '统计', '温度', '转动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dashboard-two',
        name: '仪表盘',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'dashboard-two', '仪表盘', '仪表', '看板'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'data-server',
        name: '数据服务器',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'data-server', '数据服务器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'delete-key',
        name: '删除键',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'delete-key', '删除键', '删除', '去除'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'desk-lamp',
        name: '台灯',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'desk-lamp', '台灯', '灯具', '电灯'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'devices',
        name: '设备',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'devices', '设备', '手机', '平板电脑', '移动端', '网络', '屏幕'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'digital-watches',
        name: '电子表',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'digital-watches', '电子表', '计时器', '手表', '时间', '智能手表', '机械表'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'disabled-computer',
        name: '计算机禁用',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'disabled-computer', '计算机禁用'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'disabled-laptop',
        name: '笔记本电脑禁用',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'disabled-laptop', '笔记本电脑禁用'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'disk',
        name: '磁盘',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'disk', '磁盘', '保存', '存储', '储存', '硬盘'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'disk-one',
        name: 'U盘1',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'disk-one', 'U盘1', 'U盘', '硬盘', '储存', '移动', '保存', '文件', '安全'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'disk-two',
        name: 'U盘2',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'disk-two', 'U盘2', 'U盘', '硬盘', '储存', '移动', '保存', '文件', '安全'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dome-light',
        name: '顶灯',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'dome-light', '顶灯', '灯', '光', '亮', '家具', '装饰', '闪光', '打光', '照亮'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'download-computer',
        name: '计算机下载',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'download-computer', '计算机下载'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'download-laptop',
        name: '笔记本电脑下载',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'download-laptop', '笔记本电脑下载'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'drone',
        name: '无人机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'drone', '无人机', '飞机', '玩具', '数码', '飞行', '飞盘'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'drone-one',
        name: '无人机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'drone-one', '无人机', '飞机', '遥控', '飞行', '航空', '航行', '飞'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dvi',
        name: 'DVI',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'dvi', 'DVI', '接口'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'eight-key',
        name: '按键八',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'eight-key', '按键八', '八', '8', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'electric-iron',
        name: '电熨斗',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'electric-iron', '电熨斗', '加热', '电', '烫衣服', '烫印', '烙印'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'electronic-door-lock',
        name: '智能门锁',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'electronic-door-lock', '智能门锁', '门', '锁', '智能', '密码锁', '安全', '防盗门', '关门', '加密'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'electronic-locks-close',
        name: '电子锁关',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'electronic-locks-close', '电子锁关', '锁', '电子', '感应', '关'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'electronic-locks-open',
        name: '电子锁开',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'electronic-locks-open', '电子锁开', '锁', '电子', '感应', '开'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'electronic-pen',
        name: '触电笔',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'electronic-pen', '触电笔', '电笔', '体温计'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'enter-key',
        name: '回车键',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'enter-key', '回车键', '键盘'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'enter-key-one',
        name: '回车键',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'enter-key-one', '回车键', '回车'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'error-computer',
        name: '计算机错误',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'error-computer', '计算机错误'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ethernet-off',
        name: '网口关',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'ethernet-off', '网口关', '接口', '网口', '网线'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ethernet-on',
        name: '网口开',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'ethernet-on', '网口开', '接口', '网口', '网线'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'f-eight-key',
        name: 'F8',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'f-eight-key', 'F8', '八', '8', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'f-five-key',
        name: 'F5',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'f-five-key', 'F5', '五', '5', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'f-four-key',
        name: 'F4',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'f-four-key', 'F4', '四', '4', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'f-n-key',
        name: 'Fn',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'f-n-key', 'Fn', 'n', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'f-nine-key',
        name: 'F9',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'f-nine-key', 'F9', '九', '9', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'f-one-key',
        name: 'F1',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'f-one-key', 'F1', '一', '1', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'f-seven-key',
        name: 'F7',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'f-seven-key', 'F7', '七', '7', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'f-six-key',
        name: 'F6',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'f-six-key', 'F6', '六', '6', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'f-three-key',
        name: 'F3',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'f-three-key', 'F3', '三', '3', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'f-two-key',
        name: 'F2',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'f-two-key', 'F2', '二', '2', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'f-zero-key',
        name: 'F0',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'f-zero-key', 'F0', '零', '0', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'five-key',
        name: '按键五',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'five-key', '按键五', '五', '5', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'flashlight',
        name: '手电筒',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'flashlight', '手电筒', '手电', '光线', '电灯', '电器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'four-key',
        name: '按键四',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'four-key', '按键四', '四', '4', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'game-console',
        name: '游戏机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'game-console', '游戏机', '游戏', '电子', '设备', '娱乐', '上瘾', '消遣', '沉迷', '活动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'game-console-one',
        name: '移动游戏机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'game-console-one', '移动游戏机', '游戏机', '游戏手柄'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'game-three',
        name: '游戏手柄',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'game-three', '游戏手柄', '游戏机', '控制器', '遥控器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'gamepad',
        name: '游戏机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'gamepad', '游戏机'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'gopro',
        name: '运动相机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'gopro', '运动相机', '摄像', '拍摄', '记录', '录像', '录制', '检测', '探头', '抓拍', '偷拍', '电影', '放映'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hair-dryer-one',
        name: '吹风机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'hair-dryer-one', '吹风机', '吹风', '吹头发', '加热', '热风', '吹造型'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hand-painted-plate',
        name: '手绘板',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'hand-painted-plate', '手绘板', '绘制', '绘画', '控制板', '触控板', '手绘'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hard-disk',
        name: '硬盘',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'hard-disk', '硬盘', '储存', '存储', '移动硬盘', 'store'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hard-disk-one',
        name: '移动硬盘',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'hard-disk-one', '移动硬盘', 'U盘', '硬盘', '储存', '移动', '保存', '文件', '安全'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hashtag-key',
        name: '井号键',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'hashtag-key', '井号键', '井号', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hdd',
        name: 'HDD',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'hdd', 'HDD', '接口'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hdmi-cable',
        name: 'HDMI线',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'hdmi-cable', 'HDMI线', '接口', '数据线', 'hdmi'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hdmi-connector',
        name: 'HDMI接口',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'hdmi-connector', 'HDMI接口', '接口', '数据线', 'hdmi'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'headset-two',
        name: '耳机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'headset-two', '耳机', '听筒', '收音器', '扩音器', '音响'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hunting-gear',
        name: '从动装置',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'hunting-gear', '从动装置', '组件', '配置', '驱动', '装置', '从动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'i-mac',
        name: '苹果电脑iMac',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'i-mac', '苹果电脑iMac', 'iMac', '苹果电脑', '电脑', '设备', 'PC'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'induction-lock',
        name: '感应锁',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'induction-lock', '感应锁', '锁', '电子', '感应'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'intercom',
        name: '对讲机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'intercom', '对讲机', '联系', '沟通', '对话', '连接', '交流', '电话', '通讯'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ipad',
        name: 'Ipad',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'ipad', 'Ipad', '电脑', '屏幕', '平板', '移动电脑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ipad-one',
        name: '平板电脑',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'ipad-one', '平板电脑', '电脑', '屏幕', '平板', '移动电脑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'iphone',
        name: '苹果手机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'iphone', '苹果手机', '手机', '苹果', 'apple', '移动设备'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'iwatch-one',
        name: '智能手表',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'iwatch-one', '智能手表', '手表', '智能', '时间', '精准', '电子', '多功能', '闹钟', '计时', '日历'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'iwatch-two',
        name: '苹果智能手表',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'iwatch-two', '苹果智能手表', '计时器', '手表', '时间', '智能手表', '机械表'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'kettle',
        name: '热水壶',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'kettle', '热水壶', '水壶', '茶器', '加热', '烧水', '咖啡', '容器', '被子', '水杯'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'keyboard',
        name: '键盘',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'keyboard', '键盘', '输入', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'keyboard-one',
        name: '键盘',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'keyboard-one', '键盘', '控制', '输入', '敲打', '编码', '写代码', '点击', '指令', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'lamp',
        name: '节能灯',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'lamp', '节能灯', '灯光', '电器', '灯具', '节能', '光亮'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'laptop',
        name: '笔记本',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'laptop', '笔记本', '计算机', '电脑', '网络', '屏幕'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'laptop-computer',
        name: '笔记本电脑',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'laptop-computer', '笔记本电脑', '移动电脑', '笔记本'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'laptop-one',
        name: '笔记本电脑',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'laptop-one', '笔记本电脑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'locking-computer',
        name: '计算机锁定',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'locking-computer', '计算机锁定'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'locking-laptop',
        name: '笔记本电脑锁定',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'locking-laptop', '笔记本电脑锁定'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mac-finder',
        name: '访达',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'mac-finder', '访达', '文件管理', '我的电脑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'master',
        name: '主机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'master', '主机', '储存器', '服务器', '管理器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'memory',
        name: '储存卡',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'memory', '储存卡', 'U盘', '硬盘', '储存', '移动', '保存', '文件', '安全'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'memory-card',
        name: '存储卡',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'memory-card', '存储卡', 'U盘', '硬盘', '储存', '移动', '保存', '文件', '安全'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'memory-card-one',
        name: '记忆卡',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'memory-card-one', '记忆卡', 'U盘', '硬盘', '储存', '移动', '保存', '文件', '安全'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'memory-one',
        name: '储存器',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'memory-one', '储存器', 'U盘', '硬盘', '储存', '移动', '保存', '文件', '安全'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'micro-sd',
        name: '微型SD',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'micro-sd', '微型SD', '卡', '储存', '信号', '流量'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'micro-slr-camera',
        name: '微单',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'micro-slr-camera', '微单', '摄影', '设备', '相机', '镜头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'microphone',
        name: '麦克风',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'microphone', '麦克风', '话筒', '收音器', '音乐', '乐器', '扩音器', '耳麦', '麦霸'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'microphone-one',
        name: '收音器',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'microphone-one', '收音器', '广播', '话筒', '扩音器', '麦克风'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'microscope-one',
        name: '显微镜',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'microscope-one', '显微镜', '镜子', '放大', '仪器', '实验', '望远镜', '探测仪'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'microwave-oven',
        name: '微波炉',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'microwave-oven', '微波炉', '加热', '电器', '烤箱', '容器', '冰箱', '收纳箱'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'microwaves',
        name: '微波炉',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'microwaves', '微波炉', '加热器', '烹饪机', '做饭'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mini-sd-card',
        name: '微型存储卡',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'mini-sd-card', '微型存储卡', '微型SD卡', 'SD', '储存', '存储', 'store'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'monitor-camera',
        name: '监控摄像头',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'monitor-camera', '监控摄像头', '监控', '摄像头', '网络摄像头', '摄像机', '监视'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'monitor-one',
        name: '显示器',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'monitor-one', '显示器', '屏幕', '显示屏', '电脑', '监测台', '窗口', '电视', '电影', '节目', '电视剧'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mouse',
        name: '鼠标',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'mouse', '鼠标', '配件', '设备', '网络'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'mouse-one',
        name: '鼠标',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'mouse-one', '鼠标', '点击', '移动', '指引', '选择', '按键', '控制'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'multi-function-knife',
        name: '多功能刀',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'multi-function-knife', '多功能刀', '武器', '瑞士', '军刀'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'network-drive',
        name: '云办公',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'network-drive', '云办公', '云', '服务', '办公'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'new-computer',
        name: '计算机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'new-computer', '计算机'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'nine-key',
        name: '按键九',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'nine-key', '按键九', '九', '9', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'one-key',
        name: '按键一',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'one-key', '按键一', '一', '1', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pad',
        name: '平板电脑',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'pad', '平板电脑', '电脑', '平板', '游戏', '设备'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'painted-screen',
        name: '绘制屏',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'painted-screen', '绘制屏', '触控板', '绘制', '屏幕', '平板电脑'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'phone',
        name: '手机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'phone', '手机', 'Phone', '电话', '通信'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'phone-one',
        name: '电话',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'phone-one', '电话', '通话', '拨号', '转接', '接通', '交流', '沟通', '会议', '语音', '求救', '报警'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'phonograph',
        name: '留声机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'phonograph', '留声机', '音乐', '声音', '歌曲', '歌声'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'plug',
        name: '插头',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'plug', '插头', '插座', '电力'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'plug-one',
        name: '插电头',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'plug-one', '插电头', '电器', '电源', '充电器', '插排', '插座'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'power-supply',
        name: '插头2',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'power-supply', '插头2', '电器', '通电', '断电', '插板', '插座', '插头', '转接头', '充电器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'power-supply-one',
        name: '插头1',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'power-supply-one', '插头1', '电器', '通电', '断电', '插板', '插座', '插头', '转接头', '充电器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'printer',
        name: '打印机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'printer', '打印机', '打印', '设备', '纸张', '输出'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'printer-one',
        name: '打印机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'printer-one', '打印机', '打印', '印刷', '印制', '复制', '机器', '设备'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'printer-two',
        name: '打印机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'printer-two', '打印机', '打印', '印刷', '印制', '复制', '机器', '设备'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'projector',
        name: '投影仪',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'projector', '投影仪', '播放', '幻灯片', '演讲'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'projector-one',
        name: '投影机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'projector-one', '投影机', '摄像', '拍摄', '记录', '录像', '录制', '检测', '电影', '放映'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'projector-three',
        name: '放映机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'projector-three', '放映机', '摄像', '拍摄', '记录', '录像', '录制', '检测', '电影', '放映'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'projector-two',
        name: '投影仪',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'projector-two', '投影仪', '设备', '投影', '投屏', '播放', '演示'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'radio',
        name: '收音机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'radio', '收音机', '新闻', '播报机', '播音', '音响', '广播', '通知', '喇叭', '声音', '乐器', '听音乐', '听书'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'radio-one',
        name: '收音机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'radio-one', '收音机', '播音', '音响', '广播', '通知', '喇叭', '声音', '乐器', '听音乐', '听书'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'receiver',
        name: '接收器',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'receiver', '接收器', '信号', '接收', '卫星', '发现'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'record-player',
        name: '播放器',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'record-player', '播放器', '播放', '音响', '广播', '通知', '喇叭', '声音', '乐器', '听音乐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'remote-control',
        name: '遥控器',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'remote-control', '遥控器', '控制', '遥控', '开关', '调节', '调整', '命令', '传感器', '感应器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'remote-control-one',
        name: '遥控器',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'remote-control-one', '遥控器', '控制', '遥控', '开关', '调节', '调整', '命令', '传感器', '感应器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'robot',
        name: '机器人2',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'robot', '机器人2', '控制', '遥控', '调整', '命令', '执行', '客服'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'robot-one',
        name: '机器人1',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'robot-one', '机器人1', '控制', '遥控', '调整', '命令', '执行', '客服'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rocket-one',
        name: '火箭',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'rocket-one', '火箭', '飞行器', '推动器', '发射器', '航天器', '宇宙飞船'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'round-socket',
        name: '圆形插座',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'round-socket', '圆形插座', '电源', '危险', '插件', '三角插口'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'router',
        name: '路由器',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'router', '路由器', '路由', '网络', '设备', '存储', '信号'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'router-one',
        name: '路由器',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'router-one', '路由器', 'wifi', '信号', '发射器', '无线网', '流量', '接收器', '雷达'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'rs-male',
        name: 'RS',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'rs-male', 'RS', '接口', '数据'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sd',
        name: 'SD卡',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'sd', 'SD卡', '卡', '储存', '信号', '流量'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sd-card',
        name: '存储卡',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'sd-card', '存储卡', 'SD', 'secure', 'digital', 'memory', 'card', '储存', '存储', 'store', '芯片'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'seal',
        name: '印章',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'seal', '印章', '打印', '印制', '复印', '标记', '认证', '审批', '审核', '确认'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'server',
        name: '服务器',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'server', '服务器', '运算', '计算', '机房', '云计算'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'setting-computer',
        name: '计算机设置',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'setting-computer', '计算机设置'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'setting-laptop',
        name: '笔记本电脑设置',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'setting-laptop', '笔记本电脑设置'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'seven-key',
        name: '按键七',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'seven-key', '按键七', '七', '7', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shaver',
        name: '剃须刀',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'shaver', '剃须刀', '电器', '男士用品', '刮胡刀', '剃胡刀'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'signal-tower',
        name: '信号塔',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'signal-tower', '信号塔', '信号', '发射器', '接收器', '电子卫星', '检测器', '探测仪', '雷达', '防御', '干扰器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sim',
        name: '电话卡',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'sim', '电话卡', '卡', '5G'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sim-card',
        name: '储存卡',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'sim-card', '储存卡', '移动卡', '卡片', '手机卡', '流量卡', '电话卡', '芯片'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'six-key',
        name: '按键六',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'six-key', '按键六', '六', '6', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'slave',
        name: '附件',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'slave', '附件', '数据', '传输', '链接'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'solar-energy',
        name: '太阳能',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'solar-energy', '太阳能', '新能源', '蓄电池', '资源', '能量'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'solid-state-disk',
        name: '固态硬盘',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'solid-state-disk', '固态硬盘', '储存', '存储', '硬盘', 'store'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sound',
        name: '音响',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'sound', '音响', '声音', '音乐', '乐器', '扩音器', '喇叭'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sound-one',
        name: '音响',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'sound-one', '音响', '声音', '音乐', '乐器', '扩音器', '喇叭'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'speaker',
        name: '音响',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'speaker', '音响', '音乐', '设备', '声音', '家庭影院'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'speaker-one',
        name: '喇叭',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'speaker-one', '喇叭', '声音', '音乐', '乐器', '扩音器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ssd',
        name: 'SSD',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'ssd', 'SSD', '储存器', '服务器', '管理器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'stapler',
        name: '订书机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'stapler', '订书机', '工具', '打穿', '订书', '砌书'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'stereo-one',
        name: '立体声',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'stereo-one', '立体声', '声音', '音乐', '乐器', '扩音器', '喇叭'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'storage-card-one',
        name: '储存卡1',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'storage-card-one', '储存卡1', 'U盘', '硬盘', '储存', '移动', '保存', '文件', '安全'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'storage-card-two',
        name: '储存卡2',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'storage-card-two', '储存卡2', 'U盘', '硬盘', '储存', '移动', '保存', '文件', '安全'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'strongbox',
        name: '保险箱',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'strongbox', '保险箱', '保险', '箱子', '安全', '稳固'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'subway',
        name: '地铁',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'subway', '地铁', '交通', '火车', '运输', '货运', '电车', '公交车'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'surveillance-cameras',
        name: '监控摄像头',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'surveillance-cameras', '监控摄像头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'surveillance-cameras-one',
        name: '监控摄像头',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'surveillance-cameras-one', '监控摄像头', '摄像', '拍摄', '记录', '录像', '录制', '检测', '探头', '抓拍', '偷拍'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'surveillance-cameras-two',
        name: '监控摄像头',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'surveillance-cameras-two', '监控摄像头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'switch-nintendo',
        name: '任天堂游戏',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'switch-nintendo', '任天堂游戏', '手柄', '控制器', '游戏机', '操作器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'switch-one',
        name: '开关',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'switch-one', '开关', '控制器', '调节器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'table-lamp',
        name: '台灯',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'table-lamp', '台灯', '灯光', '书桌', '电器', '家电'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'telescope',
        name: '望远镜',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'telescope', '望远镜', '侦查', '观察', '监视', '工具'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'three-key',
        name: '按键三',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'three-key', '按键三', '三', '3', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'thunderbolt',
        name: '霹雳接口',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'thunderbolt', '霹雳接口', '接口', '数据线', '闪电传输'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'timer',
        name: '计时器',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'timer', '计时器', '手表', '时间', '智能手表', '机械表'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'toilet',
        name: '马桶',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'toilet', '马桶', '卫生间', '公共厕所'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'transporter',
        name: '送货车',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'transporter', '送货车', '快递车', '运输车'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'truck',
        name: '货车',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'truck', '货车', '出行', '卡车', '皮卡', '汽车', '设备', '交通', '运输'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'trumpet',
        name: '喇叭',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'trumpet', '喇叭', '声音', '音乐', '乐器', '扩音器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tv',
        name: '电视',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'tv', '电视', '设备', '综艺', '屏幕', '大屏'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'tv-one',
        name: '电视',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'tv-one', '电视', '显示屏', '电影', '投影', '节目', '音乐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'two-key',
        name: '按键二',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'two-key', '按键二', '二', '2', '按键'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'type-drive',
        name: '磁带',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'type-drive', '磁带', '音乐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'u-disk',
        name: 'U盘',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'u-disk', 'U盘', '硬盘', '储存', '移动', '保存', '文件', '安全'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'upload-computer',
        name: '计算机上传',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'upload-computer', '计算机上传'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'upload-laptop',
        name: '笔记本电脑上传',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'upload-laptop', '笔记本电脑上传'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'usb',
        name: '数据接口',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'usb', '数据接口', 'USB', '设备', '存储', '插口', '接口'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'usb-memory-stick',
        name: 'U盘',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'usb-memory-stick', 'U盘', 'usb信号', '储存'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'usb-micro-one',
        name: '微型USB1',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'usb-micro-one', '微型USB1', '接口', '数据线'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'usb-micro-two',
        name: '微型USB2',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'usb-micro-two', '微型USB2', '接口', '数据线'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'usb-one',
        name: '数据接口',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'usb-one', '数据接口', 'USB', '设备', '存储', '插口', '接口'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'usb-type-c',
        name: 'TypeC',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'usb-type-c', 'TypeC', '接口', '数据线'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'vacuum-cleaner',
        name: '吸尘器',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'vacuum-cleaner', '吸尘器', '卫生', '打扫', '清除', '干净', '垃圾', '清洗', '电器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'videocamera',
        name: '摄像机1',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'videocamera', '摄像机1', '摄像', '拍摄', '记录', '录像', '录制', '检测', '探头', '抓拍', '偷拍', '电影', '放映'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'videocamera-one',
        name: '摄像机2',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'videocamera-one', '摄像机2', '摄像', '拍摄', '记录', '录像', '录制', '检测', '探头', '抓拍', '偷拍', '电影', '放映'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'virtual-reality-glasses',
        name: '虚拟现实眼镜',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'virtual-reality-glasses', '虚拟现实眼镜', 'VR', '虚拟现实', '眼睛', 'AR', '增强现实', '游戏'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'vr-glasses',
        name: 'VR 眼镜',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'vr-glasses', 'VR 眼镜', 'VR', '眼镜', '虚拟现实', '设备', '游戏'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'washing-machine',
        name: '洗衣机',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'washing-machine', '洗衣机', '卫生', '打扫', '清除', '干净', '垃圾', '清洗', '洗衣服', '除污渍', '电器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'washing-machine-one',
        name: '洗衣机1',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'washing-machine-one', '洗衣机1', '卫生', '打扫', '清除', '干净', '垃圾', '清洗', '洗衣服', '除污渍', '电器'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'watch-one',
        name: '手表',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'watch-one', '手表', '计时器', '时间', '智能手表', '机械表'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'webcam',
        name: '网络摄像头',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'webcam', '网络摄像头', '摄像头', '拍摄', '摄像机', '镜头', '网络'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'zero-key',
        name: '按键零',
        category: 'Hardware',
        keywords: ['hardware', '硬件', 'zero-key', '按键零', '零', '0', '按键'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Peoples',
        name: '用户人名',
        category: 'Peoples',
        keywords: ['peoples', '用户人名'],
        count: 50
    },
    {
        kind: 'icon',
        key: 'add-user',
        name: '添加用户',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'add-user', '添加用户', '添加', '增加', '人群扩充', '用户', '个人中心', '我的', '人'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'address-book',
        name: '通讯录',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'address-book', '通讯录', '联系人'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'appointment',
        name: '定时见面',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'appointment', '定时见面'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'avatar',
        name: '头像',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'avatar', '头像', '用户', '客户', '个人中心', '账户中心', '我的', '员工', '男'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'baby',
        name: '婴儿',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'baby', '婴儿', '育儿', '宝宝', '小朋友', '婴幼儿', '儿童票'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'classroom',
        name: '课堂',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'classroom', '课堂', '听课', '教学', '学习', '用户', '个人中心'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'edit-name',
        name: '编辑姓名',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'edit-name', '编辑姓名'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'every-user',
        name: '众多用户',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'every-user', '众多用户', '用户', '很多', '群', '用户群', '用户组'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'hands',
        name: '举手',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'hands', '举手', '手', '听课', '教学', '这里', '抬手'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'id-card-h',
        name: '身份证',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'id-card-h', '身份证', 'ID', '工牌', '卡片'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'id-card-v',
        name: '身份证',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'id-card-v', '身份证', 'ID', '工牌', '卡片'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'me',
        name: '我的',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'me', '我的', '个人中心', '用户', '人', '头像', '圆形头像'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'passport',
        name: '护照',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'passport', '护照', '身份证'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'people',
        name: '人员',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'people', '人员', '用户', '客户', '个人中心', '账户中心', '我的', '员工'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'people-bottom',
        name: '人员下',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'people-bottom', '人员下'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'people-bottom-card',
        name: '人像卡片下',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'people-bottom-card', '人像卡片下'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'people-delete',
        name: '删除用户',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'people-delete', '删除用户'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'people-delete-one',
        name: '删除用户',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'people-delete-one', '删除用户'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'people-download',
        name: '用户下载',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'people-download', '用户下载'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'people-left',
        name: '人员左',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'people-left', '人员左'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'people-minus',
        name: '减少人群',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'people-minus', '减少人群', '添加', '用户', '客户'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'people-minus-one',
        name: '减少人群',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'people-minus-one', '减少人群', '添加', '用户', '客户'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'people-plus',
        name: '添加人群',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'people-plus', '添加人群', '减少', '用户', '客户', '删除'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'people-plus-one',
        name: '添加人群',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'people-plus-one', '添加人群', '减少', '用户', '客户', '删除'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'people-right',
        name: '人员右',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'people-right', '人员右'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'people-safe',
        name: '人身安全',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'people-safe', '人身安全'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'people-safe-one',
        name: '人身安全1',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'people-safe-one', '人身安全1'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'people-search',
        name: '搜索用户',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'people-search', '搜索用户'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'people-search-one',
        name: '搜索用户',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'people-search-one', '搜索用户'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'people-speak',
        name: '人员说话',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'people-speak', '人员说话'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'people-top',
        name: '人员上',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'people-top', '人员上'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'people-top-card',
        name: '人像卡片上',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'people-top-card', '人像卡片上'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'people-unknown',
        name: '人员屏蔽',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'people-unknown', '人员屏蔽'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'people-upload',
        name: '用户上传',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'people-upload', '用户上传'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'peoples',
        name: '人群',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', '人群', '用户', '客户', '员工', '多人'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'peoples-two',
        name: '人群',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'peoples-two', '人群', '好多人'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'personal-collection',
        name: '收藏好友',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'personal-collection', '收藏好友'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'personal-privacy',
        name: '个人隐私',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'personal-privacy', '个人隐私'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'public-toilet',
        name: '卫生间',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'public-toilet', '卫生间', '厕所', '男女', '洗手间'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'reduce-user',
        name: '减少用户',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'reduce-user', '减少用户', '减少', '精简', '用户', '人群', '我的', '个人中心', '人'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'right-user',
        name: '正确用户',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'right-user', '正确用户', '正确', '用户', '精准', '完成'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'turn-around',
        name: '人员调动',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'turn-around', '人员调动'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'user',
        name: '用户',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'user', '用户', '账户', '个人中心', '我的', '人群', '人'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'user-business',
        name: '商务用户',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'user-business', '商务用户', '用户', '账户', '人', '很多人', '商务', '领带'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'user-positioning',
        name: '用户定位',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'user-positioning', '用户定位', '定位', '用户', '个人中心', '我的', '人群', '人'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'user-to-user-transmission',
        name: '用户互传',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'user-to-user-transmission', '用户互传', '相互传输', '用户', '用户之间'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'weixin-people-nearby',
        name: '微信附近的人',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'weixin-people-nearby', '微信附近的人', '附近的人', '漂流瓶', '地理位置'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'woman',
        name: '女人',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'woman', '女人', '女生', '女士', '妈妈', '阿姨', '女性', '女', '女性用户'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'women',
        name: '女',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'women', '女', '用户', '客户', '个人中心', '账户中心', '我的', '员工'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'wrong-user',
        name: '错误用户',
        category: 'Peoples',
        keywords: ['peoples', '用户人名', 'wrong-user', '错误用户', '错误', '关闭', '关闭用户权限', '删除用户'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Game',
        name: '游戏',
        category: 'Game',
        keywords: ['game', '游戏'],
        count: 36
    },
    {
        kind: 'icon',
        key: 'arithmetic-buttons',
        name: '加减乘除',
        category: 'Game',
        keywords: ['game', '游戏', 'arithmetic-buttons', '加减乘除', '键盘'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'arrow-keys',
        name: '方向键',
        category: 'Game',
        keywords: ['game', '游戏', 'arrow-keys', '方向键', '键盘'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'block-eight',
        name: '俄罗斯方块',
        category: 'Game',
        keywords: ['game', '游戏', 'block-eight', '俄罗斯方块', '拼接', '模块', '组合', '组件', '娱乐', '乐高', '魔方'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'block-five',
        name: '俄罗斯方块',
        category: 'Game',
        keywords: ['game', '游戏', 'block-five', '俄罗斯方块', '拼接', '模块', '组合', '组件', '娱乐', '乐高', '魔方'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'block-four',
        name: '俄罗斯方块',
        category: 'Game',
        keywords: ['game', '游戏', 'block-four', '俄罗斯方块', '拼接', '模块', '组合', '组件', '娱乐', '乐高', '魔方'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'block-nine',
        name: '俄罗斯方块',
        category: 'Game',
        keywords: ['game', '游戏', 'block-nine', '俄罗斯方块', '拼接', '模块', '组合', '组件', '娱乐', '乐高', '魔方'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'block-one',
        name: '俄罗斯方块',
        category: 'Game',
        keywords: ['game', '游戏', 'block-one', '俄罗斯方块', '拼接', '模块', '组合', '组件', '娱乐', '乐高', '魔方'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'block-seven',
        name: '俄罗斯方块',
        category: 'Game',
        keywords: ['game', '游戏', 'block-seven', '俄罗斯方块', '拼接', '模块', '组合', '组件', '娱乐', '乐高', '魔方'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'block-six',
        name: '俄罗斯方块',
        category: 'Game',
        keywords: ['game', '游戏', 'block-six', '俄罗斯方块', '拼接', '模块', '组合', '组件', '娱乐', '乐高', '魔方'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'block-ten',
        name: '俄罗斯方块',
        category: 'Game',
        keywords: ['game', '游戏', 'block-ten', '俄罗斯方块', '拼接', '模块', '组合', '组件', '娱乐', '乐高', '魔方'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'block-three',
        name: '俄罗斯方块',
        category: 'Game',
        keywords: ['game', '游戏', 'block-three', '俄罗斯方块', '拼接', '模块', '组合', '组件', '娱乐', '乐高', '魔方'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'block-two',
        name: '俄罗斯方块',
        category: 'Game',
        keywords: ['game', '游戏', 'block-two', '俄罗斯方块', '拼接', '模块', '组合', '组件', '娱乐', '乐高', '魔方'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'game',
        name: '游戏',
        category: 'Game',
        keywords: ['game', '游戏', '娱乐', '玩耍'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'game-handle',
        name: '游戏手柄',
        category: 'Game',
        keywords: ['game', '游戏', 'game-handle', '游戏手柄', '手柄', '操作', '玩'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'game-ps',
        name: '游戏机',
        category: 'Game',
        keywords: ['game', '游戏', 'game-ps', '游戏机', '索尼', '图形拼接', '抽象'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'ghost',
        name: '幽灵',
        category: 'Game',
        keywords: ['game', '游戏', 'ghost', '幽灵', '恐怖', '可怕'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'handheld',
        name: '掌机',
        category: 'Game',
        keywords: ['game', '游戏', 'handheld', '掌机', '手机', '游戏机', '主机'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'handle-a',
        name: '手柄A',
        category: 'Game',
        keywords: ['game', '游戏', 'handle-a', '手柄A', 'a'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'handle-b',
        name: '手柄B',
        category: 'Game',
        keywords: ['game', '游戏', 'handle-b', '手柄B', 'b'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'handle-c',
        name: '手柄C',
        category: 'Game',
        keywords: ['game', '游戏', 'handle-c', '手柄C', 'c'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'handle-down',
        name: '手柄下',
        category: 'Game',
        keywords: ['game', '游戏', 'handle-down', '手柄下', '下'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'handle-left',
        name: '手柄左',
        category: 'Game',
        keywords: ['game', '游戏', 'handle-left', '手柄左', '左'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'handle-right',
        name: '手柄右',
        category: 'Game',
        keywords: ['game', '游戏', 'handle-right', '手柄右', '右'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'handle-round',
        name: '手柄圆圈',
        category: 'Game',
        keywords: ['game', '游戏', 'handle-round', '手柄圆圈', '圆形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'handle-square',
        name: '手柄方形',
        category: 'Game',
        keywords: ['game', '游戏', 'handle-square', '手柄方形', '方形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'handle-triangle',
        name: '手柄三角形',
        category: 'Game',
        keywords: ['game', '游戏', 'handle-triangle', '手柄三角形', '三角形'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'handle-up',
        name: '手柄上',
        category: 'Game',
        keywords: ['game', '游戏', 'handle-up', '手柄上', '上'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'handle-x',
        name: '手柄X',
        category: 'Game',
        keywords: ['game', '游戏', 'handle-x', '手柄X', 'x'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'handle-y',
        name: '手柄Y',
        category: 'Game',
        keywords: ['game', '游戏', 'handle-y', '手柄Y', 'y'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'handle-z',
        name: '手柄Z',
        category: 'Game',
        keywords: ['game', '游戏', 'handle-z', '手柄Z', 'z'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'joystick',
        name: '游戏摇杆',
        category: 'Game',
        keywords: ['game', '游戏', 'joystick', '游戏摇杆', '操作', '摇杆', '手柄'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'nintendo-switch',
        name: '任天堂游戏机',
        category: 'Game',
        keywords: ['game', '游戏', 'nintendo-switch', '任天堂游戏机', '游戏机', '任天堂', '娱乐', '玩啥', '电子游戏', '掌机'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'poker',
        name: '扑克',
        category: 'Game',
        keywords: ['game', '游戏', 'poker', '扑克', '赌博', '运气', '魔术'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'puzzle',
        name: '拼图',
        category: 'Game',
        keywords: ['game', '游戏', 'puzzle', '拼图', '版图', '拼接', '组合'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'skull',
        name: '骷髅',
        category: 'Game',
        keywords: ['game', '游戏', 'skull', '骷髅', '鼓楼', '恐怖', '危险', '骨头'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'trophy',
        name: '奖杯',
        category: 'Game',
        keywords: ['game', '游戏', 'trophy', '奖杯', '冠军', '比赛', '胜利', '奖励', '荣誉'],
        count: 0
    },
    {
        kind: 'header',
        key: 'Others',
        name: '其它',
        category: 'Others',
        keywords: ['others', '其它'],
        count: 67
    },
    {
        kind: 'icon',
        key: 'add-two',
        name: '添加2',
        category: 'Others',
        keywords: ['others', '其它', 'add-two', '添加2'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'audit',
        name: '审核',
        category: 'Others',
        keywords: ['others', '其它', 'audit', '审核', '印章', '评审', '审查'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'balance',
        name: '平衡',
        category: 'Others',
        keywords: ['others', '其它', 'balance', '平衡', '平衡点', '支撑点', '中心'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'blackboard',
        name: '黑板',
        category: 'Others',
        keywords: ['others', '其它', 'blackboard', '黑板'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bluetooth',
        name: '蓝牙',
        category: 'Others',
        keywords: ['others', '其它', 'bluetooth', '蓝牙', '设备', '无线连接', '打开蓝牙'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bookmark-three',
        name: '书签3',
        category: 'Others',
        keywords: ['others', '其它', 'bookmark-three', '书签3'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'broadcast',
        name: '广播',
        category: 'Others',
        keywords: ['others', '其它', 'broadcast', '广播', '投射', '发射', '辐射', '分享', '信号', '传递'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'browser',
        name: '浏览器',
        category: 'Others',
        keywords: ['others', '其它', 'browser', '浏览器', '窗口', '网页', '页面', 'pc端'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'bytedance-mini-app',
        name: '应用程序',
        category: 'Others',
        keywords: ['others', '其它', 'bytedance-mini-app', '应用程序'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'card-two',
        name: '双卡片',
        category: 'Others',
        keywords: ['others', '其它', 'card-two', '双卡片', '立体', '层级', '前后', '关系'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cast-screen',
        name: '投射屏幕',
        category: 'Others',
        keywords: ['others', '其它', 'cast-screen', '投射屏幕', '投射', '投屏', '无线投屏'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'certificate',
        name: '证书',
        category: 'Others',
        keywords: ['others', '其它', 'certificate', '证书', '安全', '级别'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'close-wifi',
        name: '关闭无线网络',
        category: 'Others',
        keywords: ['others', '其它', 'close-wifi', '关闭无线网络', 'Wi-Fi', '无线网', '网络', '信号', '关闭'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'code-one',
        name: '代码1',
        category: 'Others',
        keywords: ['others', '其它', 'code-one', '代码1'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'cooperative-handshake',
        name: '合作握手',
        category: 'Others',
        keywords: ['others', '其它', 'cooperative-handshake', '合作握手', '爱心'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'creative',
        name: '创意',
        category: 'Others',
        keywords: ['others', '其它', 'creative', '创意', '想法', '创新', '五星', '徽章'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'crown',
        name: '皇冠',
        category: 'Others',
        keywords: ['others', '其它', 'crown', '皇冠', '王冠', '皇上', '国王', '第一', '权利'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'dashboard-car',
        name: '仪表盘',
        category: 'Others',
        keywords: ['others', '其它', 'dashboard-car', '仪表盘', '汽车', '指针', '表盘'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'degree-hat',
        name: '学位帽',
        category: 'Others',
        keywords: ['others', '其它', 'degree-hat', '学位帽', '今日学堂', '学位', '学习', '帽子'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'desk-lamp-one',
        name: '台灯1',
        category: 'Others',
        keywords: ['others', '其它', 'desk-lamp-one', '台灯1'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'diamond',
        name: '钻石',
        category: 'Others',
        keywords: ['others', '其它', 'diamond', '钻石', '钻戒', '戒指', '结婚'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'energy-socket',
        name: '能源插座',
        category: 'Others',
        keywords: ['others', '其它', 'energy-socket', '能源插座'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'express-delivery',
        name: '快递',
        category: 'Others',
        keywords: ['others', '其它', 'express-delivery', '快递', '快递盒', '快递箱'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'fireworks',
        name: '礼花',
        category: 'Others',
        keywords: ['others', '其它', 'fireworks', '礼花', '庆祝', '欢庆', '节日'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'folder-one',
        name: '文件夹1',
        category: 'Others',
        keywords: ['others', '其它', 'folder-one', '文件夹1'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'full-screen-play',
        name: '全屏播放',
        category: 'Others',
        keywords: ['others', '其它', 'full-screen-play', '全屏播放', '播放', '媒体', '投屏'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'gas',
        name: '气体',
        category: 'Others',
        keywords: ['others', '其它', 'gas', '气体'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'gavel',
        name: '拍卖',
        category: 'Others',
        keywords: ['others', '其它', 'gavel', '拍卖'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'glasses-three',
        name: '眼镜3',
        category: 'Others',
        keywords: ['others', '其它', 'glasses-three', '眼镜3'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'id-card',
        name: '名片',
        category: 'Others',
        keywords: ['others', '其它', 'id-card', '名片', '卡片', '证件'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'light',
        name: '光源',
        category: 'Others',
        keywords: ['others', '其它', 'light', '光源', '散射', '散射光', '发光', '照射', '节能', 'luminous', '键盘'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'light-member',
        name: '轻会员',
        category: 'Others',
        keywords: ['others', '其它', 'light-member', '轻会员', '会员', 'VIP', '客户', '顾客'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'luminous',
        name: '发光',
        category: 'Others',
        keywords: ['others', '其它', 'luminous', '发光', '散射', '散射光', '光源', '照射', '节能', 'light', '键盘'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'magic',
        name: '魔法棒',
        category: 'Others',
        keywords: ['others', '其它', 'magic', '魔法棒', '魔法', '魔术', '神奇', '变化'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'medal-one',
        name: '徽章',
        category: 'Others',
        keywords: ['others', '其它', 'medal-one', '徽章'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pay-code',
        name: '支付码',
        category: 'Others',
        keywords: ['others', '其它', 'pay-code', '支付码', '支付', '支付宝', '扫码', '花钱', '财产'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'pencil',
        name: '铅笔',
        category: 'Others',
        keywords: ['others', '其它', 'pencil', '铅笔'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'radar-three',
        name: '雷达3',
        category: 'Others',
        keywords: ['others', '其它', 'radar-three', '雷达3'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'read-book',
        name: '读书',
        category: 'Others',
        keywords: ['others', '其它', 'read-book', '读书'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'seat',
        name: '座位',
        category: 'Others',
        keywords: ['others', '其它', 'seat', '座位'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'shake',
        name: '震动',
        category: 'Others',
        keywords: ['others', '其它', 'shake', '震动', '颤抖', '抖动', '摇摆'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'share-sys',
        name: '分享',
        category: 'Others',
        keywords: ['others', '其它', 'share-sys', '分享', '信号', '播音', '投屏'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sickbed',
        name: '病床',
        category: 'Others',
        keywords: ['others', '其它', 'sickbed', '病床'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'signal',
        name: '信号',
        category: 'Others',
        keywords: ['others', '其它', 'signal', '信号', '信号源', '消息', '来信'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'signal-one',
        name: '信号',
        category: 'Others',
        keywords: ['others', '其它', 'signal-one', '信号', '信号源', '消息', '基站'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sleaves',
        name: '树叶',
        category: 'Others',
        keywords: ['others', '其它', 'sleaves', '树叶', '叶子', '叶', '标本', '植物', '树木', '草'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'sleep-two',
        name: '睡觉',
        category: 'Others',
        keywords: ['others', '其它', 'sleep-two', '睡觉'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'snowman',
        name: '雪人',
        category: 'Others',
        keywords: ['others', '其它', 'snowman', '雪人'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'stand-up',
        name: '站起来',
        category: 'Others',
        keywords: ['others', '其它', 'stand-up', '站起来'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'target',
        name: '靶子',
        category: 'Others',
        keywords: ['others', '其它', 'target', '靶子', '射击', '攻击', '目标'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'terminal',
        name: '终端',
        category: 'Others',
        keywords: ['others', '其它', 'terminal', '终端', '技术', '命令行', '代码框', '程序'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'thinking-problem',
        name: '思考问题',
        category: 'Others',
        keywords: ['others', '其它', 'thinking-problem', '思考问题'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'toolkit',
        name: '工具箱',
        category: 'Others',
        keywords: ['others', '其它', 'toolkit', '工具箱'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'trace',
        name: '追踪',
        category: 'Others',
        keywords: ['others', '其它', 'trace', '追踪', '查探', '目标', '命中'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'turn-off-bluetooth',
        name: '关闭蓝牙',
        category: 'Others',
        keywords: ['others', '其它', 'turn-off-bluetooth', '关闭蓝牙', '蓝牙', '设备', '无线连接'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'vip-one',
        name: 'vip',
        category: 'Others',
        keywords: ['others', '其它', 'vip-one', 'vip'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'voice-input',
        name: '语音文字',
        category: 'Others',
        keywords: ['others', '其它', 'voice-input', '语音文字', '语音转文字', '语音入法'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'voice-message',
        name: '语音信息',
        category: 'Others',
        keywords: ['others', '其它', 'voice-message', '语音信息', '语音', '信息', '声音', '信号'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'weixin-cards-offers',
        name: '微信卡包',
        category: 'Others',
        keywords: ['others', '其它', 'weixin-cards-offers', '微信卡包', '卡券', '信用卡', '钱包', '优惠券'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'weixin-favorites',
        name: '微信收藏',
        category: 'Others',
        keywords: ['others', '其它', 'weixin-favorites', '微信收藏', '收藏', '喜欢', '保存', '存储'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'weixin-games',
        name: '微信游戏',
        category: 'Others',
        keywords: ['others', '其它', 'weixin-games', '微信游戏', '游戏', '玩', '娱乐'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'weixin-mini-app',
        name: '微信小程序',
        category: 'Others',
        keywords: ['others', '其它', 'weixin-mini-app', '微信小程序', '小程序', '图标'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'weixin-scan',
        name: '微信扫一扫',
        category: 'Others',
        keywords: ['others', '其它', 'weixin-scan', '微信扫一扫', '扫码', '二维码', '扫描', '扫一扫'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'weixin-search',
        name: '微信搜索',
        category: 'Others',
        keywords: ['others', '其它', 'weixin-search', '微信搜索', '搜索'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'weixin-shake',
        name: '微信摇一摇',
        category: 'Others',
        keywords: ['others', '其它', 'weixin-shake', '微信摇一摇', '摇一摇', '搜索', '互动', '交互'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'weixin-top-stories',
        name: '微信看一看',
        category: 'Others',
        keywords: ['others', '其它', 'weixin-top-stories', '微信看一看', '文章', '看一看', '信息流'],
        count: 0
    },
    {
        kind: 'icon',
        key: 'wifi',
        name: '无线网络',
        category: 'Others',
        keywords: ['others', '其它', 'wifi', '无线网络', 'Wi-Fi', '无线网', '网络', '信号'],
        count: 0
    }
]

export default allIconItems
