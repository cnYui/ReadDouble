
import { ContentSection, Language } from './types';

const SLOT_IMAGES = [
  "sleeping",
  "teaching",
  "arms-crossed",
  "laptop",
  "meditating",
  "thumbs-up"
];

export const CONTENT: Record<Language, ContentSection> = {
  en: {
    hero: {
      tagline: "Reading doesn't have to be lonely.",
      subline: "Meet Read Double — your AI companion that reads with you.",
      scroll: "Scroll to explore"
    },
    pain: {
      line1: "You're trying to read.",
      line2: "But your mind drifts away...",
      line3: "You wish someone could read with you."
    },
    companion: {
      bodyDouble: {
        title: "What is a Body Double?",
        subtitle: "A discovery from ADHD practice: Having someone sit nearby, even if they do nothing, can significantly boost focus and executive function.",
        items: [
          { title: "Social Presence", desc: "Provides a faint but continuous sense of companionship." },
          { title: "Reduce Cognitive Load", desc: "Eliminates the loneliness of 'fighting alone'." },
          { title: "Boost Initiation", desc: "Lowers the psychological resistance to starting tasks." },
          { title: "Maintain Rhythm", desc: "Helps the brain maintain learning continuity." }
        ],
        labels: {
          solo: "Solo Learning",
          companion: "Companion Learning",
          focusLow: "Focus: Low",
          focusHigh: "Focus: High"
        }
      },
      reveal: {
        text: "Someone who reads with you. Literally."
      }
    },
    features: {
      title: "A NEW WAY TO READ",
      items: [
        { 
          title: "Synchronous Co-Reading", 
          desc: "Not passive Q&A. The AI reads with you, actively checking your understanding and facilitating bidirectional discussion.",
          flowchart: [
            { label: "① User Uploads Paper", type: 'user' },
            { label: "② AI Extracts Concepts", type: 'ai' },
            { label: "③ Generate Questions", type: 'ai' },
            { label: "④ Voice Answer", type: 'user' },
            { label: "⑤ Evaluate Answer", type: 'ai' },
            { label: "⑥ Feedback & Guidance", type: 'ai' },
            { label: "⑦ Next Page", type: 'user' }
          ]
        },
        { 
          title: "Instant Micro-Podcast", 
          desc: "Snap a photo to generate a 1-minute interactive audio lesson. Turn fragmented time into structured learning.",
          flowchart: [
            { label: "① Snap Page", type: 'user' },
            { label: "② AI Extracts Content", type: 'ai' },
            { label: "③ 1-min Podcast", type: 'ai' },
            { label: "④ User Listens", type: 'user' },
            { label: "⑤ AI Verification", type: 'ai' },
            { label: "⑥ Answer or Continue", type: 'user' }
          ]
        },
        { 
          title: "Learning Loop", 
          desc: "From content tool to cognitive system. Visualize your understanding trends, accuracy, and reading history.",
          flowchart: [
            { label: "① User Study", type: 'user' },
            { label: "② System Logs Data", type: 'ai' },
            { label: "③ AI Analysis", type: 'ai' },
            { label: "④ Generate Summary", type: 'ai' },
            { label: "⑤ View Progress", type: 'user' },
            { label: "⑥ Optimize Path", type: 'user' }
          ]
        },
        { 
          title: "Companion Evolution", 
          desc: "Visualized motivation. Your ghost companion grows and unlocks new skins based on your streaks and focus.",
          slotImages: SLOT_IMAGES,
          slotButton: {
            idle: "TAP TO EVOLVE",
            active: "EVOLVING..."
          }
        }
      ]
    },
    demo: {
      userLabel: "YOU",
      aiLabel: "READ DOUBLE",
      conversation: [
        { speaker: 'ai', text: "Based on this paragraph about entanglement, how does the state of one particle affect the other?" },
        { speaker: 'user', text: "It seems like they mirror each other instantly? Even if they are light years apart." },
        { speaker: 'ai', text: "Exactly. Einstein called this 'spooky action at a distance' because it defies classical physics. You've grasped the non-local property perfectly. Shall we continue?" },
        { speaker: 'user', text: "Yes, this makes much more sense now. Let's go." },
        { speaker: 'user', text: "Actually, on second thought... could you give me one more quiz question to make sure I got it?" },
        { speaker: 'ai', text: "Absolutely. If we measure particle A as 'spin up', what happens to particle B?" },
        { speaker: 'user', text: "I think it stays undefined until we measure it too?" },
        { speaker: 'ai', text: "Close! It actually becomes 'spin down' instantly. The moment A is defined, B is fixed. You're applying the logic of superposition correctly, just missing the correlation part!" },
        { speaker: 'user', text: "But how does it know instantly? Doesn't that break the speed of light limit?" },
        { speaker: 'ai', text: "That's the mind-bending part. No 'signal' travels between them. They share one mathematical existence (wavefunction), so resolving one resolves both simultaneously." },
        { speaker: 'user', text: "That clarifies it perfectly. I think I'm done with this section." },
        { speaker: 'ai', text: "Great. To wrap up, what are your top three takeaways from this text?" },
        { speaker: 'user', text: "1. Entanglement connects particles instantly across any distance. 2. Observing one particle defines the state of the other. 3. It defies classical physics but respects the speed of light limit." },
        { speaker: 'ai', text: "Insightful! Here are my three takeaways from reading with you: 1. Your questions helped me better distinguish between correlation and causation. 2. I realized that 'sharing a wavefunction' is the most crucial concept to emphasize. 3. Exploring the limits of 'instant action' made the physics much clearer for me too." }
      ]
    },
    takeaways: {
      mindMapTitle: "Your Knowledge Graph",
      heatmapTitle: "Learning Consistency",
      stats: [
        { label: "Total Days", value: "128" },
        { label: "Longest Streak", value: "42 Days" },
        { label: "Total Minutes", value: "8,500" }
      ]
    },
    vision: {
      statement: "A future where nobody reads alone."
    },
    cta: {
      button: "Join the waitlist",
      footer: "© 2024 Read Double. All rights reserved."
    }
  },
  cn: {
    hero: {
      tagline: "知识的门从不拒绝我们",
      subline: "但有时候，是我们推不开它。",
      scroll: "让阅读不再孤单"
    },
    pain: {
      line1: "你正试图专注阅读。",
      line2: "但思绪却不由自主地飘远……",
      line3: "你希望有人能陪你一起读。"
    },
    companion: {
      bodyDouble: {
        title: "什么是 Body Double？",
        subtitle: "来自 ADHD 实践的发现：旁边坐着一个人，哪怕什么都不做，也能大幅提高专注力和执行力。",
        items: [
          { title: "社会存在感", desc: "提供微弱但持续的陪伴感" },
          { title: "减轻认知负荷", desc: "消除“我一个人在战斗”的孤独感" },
          { title: "提升启动动机", desc: "降低任务启动的心理阻力" },
          { title: "维持节奏与结构", desc: "帮助大脑保持学习的连贯性" }
        ],
        labels: {
          solo: "独自学习",
          companion: "有陪伴的学习",
          focusLow: "专注力：低",
          focusHigh: "专注力：高"
        }
      },
      reveal: {
        text: "让知识真正进入你的大脑，重新定义你的阅读体验。\n一个真的会和你一起阅读的伙伴。"
      }
    },
    features: {
      title: "全新的阅读方式",
      items: [
        { 
          title: "桌面深度共读", 
          desc: "拒绝被动问答。同步读同一篇论文，主动提问检验理解，给积极指导意见，随时接受你的提问，能和你一起学习、会主动互动的 AI 学伴",
          flowchart: [
            { label: "① 用户上传论文", type: 'user' },
            { label: "② AI 提取核心概念", type: 'ai' },
            { label: "③ 生成教学问题", type: 'ai' },
            { label: "④ 用户语音回答", type: 'user' },
            { label: "⑤ AI 评估理解", type: 'ai' },
            { label: "⑥ 提供反馈指导", type: 'ai' },
            { label: "⑦ 进入下一页", type: 'user' }
          ]
        },
        { 
          title: "1 分钟微播客", 
          desc: "随拍随听，把碎片时间变成高效输入，AI 会确认你是否理解了，可以交流提问",
          flowchart: [
            { label: "① 用户拍一页论文", type: 'user' },
            { label: "② AI 提取关键内容", type: 'ai' },
            { label: "③ 生成1分钟播客", type: 'ai' },
            { label: "④ 用户听播客", type: 'user' },
            { label: "⑤ AI 提问检验", type: 'ai' },
            { label: "⑥ 用户回答或继续", type: 'user' }
          ]
        },
        { 
          title: "学习数据闭环", 
          desc: "从工具到认知系统。可视化追踪最近阅读论文主题、正确率与知识盲点，量化你的每一次进步。",
          flowchart: [
            { label: "① 用户学习活动", type: 'user' },
            { label: "② 系统记录数据", type: 'ai' },
            { label: "③ AI 分析数据", type: 'ai' },
            { label: "④ 生成学习总结", type: 'ai' },
            { label: "⑤ 展示进度反馈", type: 'user' },
            { label: "⑥ 优化下一步学习", type: 'user' }
          ]
        },
        { 
          title: "IP 成长体系", 
          desc: "可视化的情绪价值。根据你的坚持天数与答题表现，眼镜小人会解锁新形态，提供长期陪伴。",
          slotImages: SLOT_IMAGES,
          slotButton: {
            idle: "点击进化",
            active: "进化中..."
          }
        }
      ]
    },
    demo: {
      userLabel: "你",
      aiLabel: "READ DOUBLE",
      conversation: [
        { speaker: 'ai', text: "读了这段关于量子纠缠的描述，你觉得其中一个粒子的状态是如何影响另一个的？" },
        { speaker: 'user', text: "看起来它们会瞬间互相模仿？即使相隔好几光年也一样。" },
        { speaker: 'ai', text: "完全正确。爱因斯坦称之为“鬼魅般的超距作用”，因为它违反了经典物理学。你已经精准捕捉到了“非定域性”这个核心。我们继续吗？" },
        { speaker: 'user', text: "好，这样讲我就懂了，继续。" },
        { speaker: 'user', text: "等等，在继续之前，能不能再考我一个问题？" },
        { speaker: 'ai', text: "没问题。假设我们测得粒子 A 是“上旋”，那粒子 B 的状态必然是什么？" },
        { speaker: 'user', text: "我觉得在没去测它之前，它应该还是随机的？" },
        { speaker: 'ai', text: "思路很棒，但答案是：B 会瞬间变成“下旋”！一旦 A 确定了，B 也就同时确定了。不过你对叠加态的直觉是对的！" },
        { speaker: 'user', text: "等等，它怎么能瞬间知道？这不就超光速了吗？" },
        { speaker: 'ai', text: "问得好。这并不违反相对论，因为并没有“信号”在传输。它们共享同一个波函数——观测其中一部分，整个系统就塌缩了。" },
        { speaker: 'user', text: "解释得很完美。我觉得我读完了。" },
        { speaker: 'ai', text: "很好。为了总结一下，你觉得这篇文章给你最大的三个收获是什么？" },
        { speaker: 'user', text: "1. 量子纠缠能瞬间跨越任意距离连接粒子。 2. 观测其中一个粒子就决定了另一个的状态。 3. 它虽然违反经典物理，但依然遵守光速限制。" },
        { speaker: 'ai', text: "非常有洞察力！这是我陪你阅读的三个收获：1. 你的提问让我更好地厘清了“相关性”和“因果性”的区别。 2. 我意识到“共享波函数”才是解释这一切的核心概念。 3. 和你一起探讨“瞬间作用”的边界，让我也对这些物理法则有了更清晰的认识。" }
      ]
    },
    takeaways: {
      mindMapTitle: "你的知识图谱",
      heatmapTitle: "学习热力图",
      stats: [
        { label: "累计天数", value: "128" },
        { label: "最长连续", value: "42 天" },
        { label: "累计时长", value: "8,500" }
      ]
    },
    vision: {
      statement: "重新定义阅读\nRead Double @ Rokid 陪伴式学习的未来"
    },
    cta: {
      button: "加入等候名单",
      footer: "© 2025 Read Double. 版权所有。"
    }
  }
};

