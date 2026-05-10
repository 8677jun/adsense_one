export type Author = {
  name: string;
  title: string;
  avatarUrl: string;
  bio: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  categorySlug: string;
  publishedAt: string;
  readTimeMinutes: number;
  coverImage: string;
  coverImageAlt: string;
  featured?: boolean;
  popularRank?: number;
  author: Author;
  body: string[];
};

export const authors: Record<string, Author> = {
  "dr-chen": {
    name: "陈薇博士",
    title: "分子生物学研究员 · 15 年制药与基因编辑经验",
    avatarUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=200&q=80",
    bio: "陈薇博士专注于基因编辑与免疫疗法的转化研究，曾在多家跨国药企担任顾问，现为独立科学撰稿人，致力于将同行评议研究转化为公众可理解的洞察。",
  },
  "marcus-wells": {
    name: "Marcus Wells",
    title: "长寿医学记者 · 临床医学硕士（inactive）",
    avatarUrl:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&q=80",
    bio: "Marcus 报道衰老生物学与临床试验伦理十余年，强调证据层级与利益披露，文章常被医学院继续教育项目引用。",
  },
  "elena-ruiz": {
    name: "Elena Ruiz",
    title: "精准肿瘤学顾问 · E-E-A-T 医学编辑",
    avatarUrl:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80",
    bio: "Elena 为医疗机构与科学媒体提供事实核查与 YMYL 内容策略，持有分子病理背景，专注液体活检与伴随诊断叙事。",
  },
};

export const articles: Article[] = [
  {
    slug: "crispr-base-editing-liver-trial-milestone",
    title: "碱基编辑首次在肝脏罕见病试验中展现持久疗效信号",
    excerpt:
      "一项开放标签 I/II 期研究公布了中期生物标志物数据，显示靶向路径的编辑效率与安全性窗口符合预设阈值——这对可编程核酸酶疗法意味着什么？",
    categorySlug: "biotechnology",
    publishedAt: "2026-05-02",
    readTimeMinutes: 12,
    coverImage:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1600&q=80",
    coverImageAlt: "实验室中的显微研究与样本处理场景",
    featured: true,
    popularRank: 1,
    author: authors["dr-chen"],
    body: [
      "碱基编辑（base editing）在不产生双链断裂的前提下引入单碱基替换，理论上可降低染色体易位等脱靶风险。本周公布的肝脏靶向递送数据，为罕见代谢病的长期随访提供了关键对照基线。",
      "研究者强调：本次读出仍属于探索性终点，样本量有限，尚未确立对患者报告结局（PRO）的直接影响。监管路径将取决于 III 期设计中预先指定的验证性指标。",
      "对读者而言，最值得跟踪的不是单一百分比，而是编辑持久性、免疫原性与随访时长三维度的交汇。我们将在同行评议全文刊出后更新解读。",
    ],
  },
  {
    slug: "longevity-zone-blue-zones-revisited",
    title: "长寿热点地区研究复盘：关联不等于因果",
    excerpt:
      "流行病学意义上的“蓝区”叙事风靡大众健康领域，但混杂因素与生活方式迁移正在改写结论——如何用证据框架看待地域长寿差异？",
    categorySlug: "longevity",
    publishedAt: "2026-04-28",
    readTimeMinutes: 9,
    coverImage:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1600&q=80",
    coverImageAlt: "户外健康饮食与生活方式场景",
    popularRank: 2,
    author: authors["marcus-wells"],
    body: [
      "地域长寿差异往往与社会经济梯度、公共卫生基础设施及遗传背景共同演化。把某一饮食习惯单独拎出来作为“秘诀”，容易忽略结构性因素。",
      "更高质量的纵向队列正在整合可穿戴设备与多组学数据，用以区分短期行为改变与长期老化轨迹。读者在采纳任何干预前，应与执业医师讨论个体风险。",
    ],
  },
  {
    slug: "precision-oncology-mrd-testing-standardization",
    title: "MRD 检测标准化迈出一步：实验室间一致性指南草案出炉",
    excerpt:
      "微小残留病灶（MRD）正在成为分层随访工具，但检测差异限制了横向比较。新的共识文件聚焦预分析与报告透明度。",
    categorySlug: "precision-medicine",
    publishedAt: "2026-04-22",
    readTimeMinutes: 10,
    coverImage:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1600&q=80",
    coverImageAlt: "现代医院与精密医疗设备环境",
    popularRank: 3,
    author: authors["elena-ruiz"],
    body: [
      "MRD 阳性解读必须与采样时间、肿瘤类型及检测下限一并呈现，否则临床决策可能被噪声牵引。指南草案呼吁公开检出限与不确定区间。",
      "对患者而言，检测结果变更不一定等同于复发；影像学、症状学与多学科会诊仍是不可替代的一环。",
    ],
  },
  {
    slug: "biohacking-sauna-hrv-what-we-know",
    title: "桑拿、冷暴露与 HRV：生物黑客社群热议背后的证据图谱",
    excerpt:
      "心率变异性（HRV）作为自主神经张力 proxy 被广泛讨论，但它受睡眠、咖啡因与情绪多重调制——如何避免过度解读？",
    categorySlug: "biohacking",
    publishedAt: "2026-04-18",
    readTimeMinutes: 8,
    coverImage:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
    coverImageAlt: "运动与健康监测概念",
    popularRank: 4,
    author: authors["marcus-wells"],
    body: [
      "小规模随机试验提示热暴露可能对某些心血管风险标志物有益，但效应量与人群异质性显著。把可穿戴设备的短期波动当成疗效证据并不稳妥。",
      "任何极端温度干预都应有禁忌筛查；孕妇、心血管疾病患者与低血压人群尤其需要谨慎。",
    ],
  },
  {
    slug: "ai-protein-structure-clinical-deployment-guardrails",
    title: "AI 蛋白结构预测进入临床前管线：需要哪些护栏？",
    excerpt:
      "结构模型加速了靶点假设生成，但免疫原性预测、动力学与配方稳定性仍需实验闭合——业界正在建立验证清单。",
    categorySlug: "biotechnology",
    publishedAt: "2026-04-12",
    readTimeMinutes: 11,
    coverImage:
      "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&w=1600&q=80",
    coverImageAlt: "DNA 双螺旋与科技感生物医学视觉",
    popularRank: 5,
    author: authors["dr-chen"],
    body: [
      "计算生物学工具的价值在于缩小实验搜索空间，而非替代质量控制。监管机构更关注验证链路与变更管理，而非模型的单次排行榜得分。",
      "我们建议在管线里程碑中显式标注“模型驱动假设”与“实验确证”节点，以利审计与协作。",
    ],
  },
  {
    slug: "senolytics-combination-trials-safety-signals",
    title: "衰老细胞清除联合疗法：早期安全性信号如何解读",
    excerpt:
      "联合用药扩展治疗窗口的同时亦叠加毒性谱。本文梳理近期会议摘要中的停药率与实验室异常模式。",
    categorySlug: "longevity",
    publishedAt: "2026-04-05",
    readTimeMinutes: 7,
    coverImage:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&q=80",
    coverImageAlt: "药片与医学研究概念图",
    author: authors["marcus-wells"],
    body: [
      "衰老生物学干预仍处于早期临床阶段，联合策略需要更细粒度的剂量探索设计。读者应避免依据新闻标题自行叠加补充剂或处方药。",
    ],
  },
];

export function getFeaturedArticle(): Article {
  const featured = articles.find((a) => a.featured);
  return featured ?? articles[0];
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getPopularArticles(limit = 4): Article[] {
  const ranked = [...articles].sort((a, b) => {
    const ar = a.popularRank ?? 999;
    const br = b.popularRank ?? 999;
    return ar - br;
  });
  return ranked.slice(0, limit);
}

export function getRelatedArticles(
  currentSlug: string,
  categorySlug: string,
  limit = 3,
): Article[] {
  return articles
    .filter((a) => a.slug !== currentSlug && a.categorySlug === categorySlug)
    .slice(0, limit);
}

export function filterArticles(
  q?: string,
  categorySlug?: string,
): Article[] {
  let list = [...articles];
  if (categorySlug) {
    list = list.filter((a) => a.categorySlug === categorySlug);
  }
  if (q?.trim()) {
    const s = q.trim().toLowerCase();
    list = list.filter(
      (a) =>
        a.title.toLowerCase().includes(s) ||
        a.excerpt.toLowerCase().includes(s),
    );
  }
  return list;
}
