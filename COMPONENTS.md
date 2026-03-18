# US News AI Summarizer Components

这个项目实现了根据 Figma 设计的 AI 总结器组件，用于 US News Money 文章模块。

## 🎨 实现的组件

### 1. **AISummarizer** (`app/components/AISummarizer.tsx`)
紧凑的内联 AI 总结器组件，可展开和折叠。

**功能特性：**
- 折叠状态显示蓝色按钮，包含 BETA 徽章
- 展开时显示完整的 AI 回复面板
- 支持用户消息和 AI 回复
- 带编号的要点总结
- 相关文章推荐网格
- 帮助反馈（点赞/点踩）
- 后续问题建议
- 免责声明
- 聊天输入区域

**Props：**
```typescript
interface AISummarizerProps {
  articleTitle?: string;
  articleContent?: string;
}
```

**使用示例：**
```tsx
<AISummarizer 
  articleTitle="5 Best Nuclear Energy Stocks and ETFs to Buy"
  articleContent="Renewed interest in nuclear energy stocks and ETFs..."
/>
```

---

### 2. **AISummarizerLarge** (`app/components/AISummarizerLarge.tsx`)
全屏幕大型 AI 总结面板，用于详细的 AI 交互。

**功能特性：**
- 专业的蓝色头部设计
- 完整的消息对话界面
- 带有编号圆形指示器的要点
- 相关文章卡片网格
- 后续问题的可选择状态
- 反馈机制
- 更大的可交互区域
- 优雅的动画效果

**Props：**
```typescript
interface AISummarizerLargeProps {
  isExpanded?: boolean;
  relatedArticles?: RelatedArticle[];
}

interface RelatedArticle {
  id: string;
  title: string;
  image?: string;
}
```

**使用示例：**
```tsx
<AISummarizerLarge 
  isExpanded={true}
  relatedArticles={[
    { 
      id: '1', 
      title: "Bitcoin ETF: What's Next in Grayscale's Battle With the SEC" 
    },
    // ... more articles
  ]}
/>
```

---

### 3. **ArticlePage** (`app/components/ArticlePage.tsx`)
完整的文章页面组件，展示 US News 文章布局。

**功能特性：**
- 导航栏，带有 US News logo 和菜单
- 面包屑导航
- 文章标题、副标题、作者信息
- 社交分享按钮
- 集成了 AISummarizer 组件
- 文章内容区域
- 响应式设计

**Props：**
```typescript
interface ArticlePageProps {
  title?: string;
  subtitle?: string;
  author?: string;
  reviewer?: string;
  date?: string;
  breadcrumbs?: string[];
}
```

---

## 🎯 设计对应

| Figma Node ID | 描述 | 实现组件 |
|---|---|---|
| 480-3510 | 完整文章页面（导航栏视图） | ArticlePage |
| 256-11356 | AI 总结按钮展示 | AISummarizer |
| 255-6851 | 展开的 AI 总结面板 | AISummarizer (expanded) |
| 256-11244 | 中等宽度页面 | ArticlePage |
| 353-23519 | 大型 AI 面板 | AISummarizerLarge |

---

## 🛠 技术栈

- **框架：** Next.js 16.1.7
- **UI 框架：** React 19.2.3
- **样式：** Tailwind CSS 4
- **图标：** Lucide React 0.396.0
- **类型系统：** TypeScript 5

---

## 📦 安装和使用

### 1. 安装依赖
```bash
npm install --legacy-peer-deps
```

### 2. 运行开发服务器
```bash
npm run dev
```

访问 `http://localhost:3001`（或显示的端口）

### 3. 查看演示
- **主页（文章页面）：** `http://localhost:3001`
- **组件演示：** `http://localhost:3001/components-demo`

---

## 📐 设计细节

### 颜色系统
- **主蓝色（Science Blue）：** `#1263d3`
- **浅蓝背景：** `#f4f7f9`
- **边框灰色：** `#e0e0e0`
- **文字主色：** `#1a1d26`（Nugget Default Text）
- **文字次色：** `#737d8c`（Raven）

### 字体
- **Montserrat Bold：** 标题（14px-18px）
- **Roboto Regular/Bold：** 正文（14px-16px）

### 响应式断点
- **Mobile：** < 640px
- **Tablet：** 640px - 1024px
- **Desktop：** > 1024px

---

## 🚀 主要功能

### 1. 展开/折叠动画
```tsx
const [isExpanded, setIsExpanded] = useState(false);
```

### 2. 反馈系统
```tsx
const [isHelpful, setIsHelpful] = useState<boolean | null>(null);
```

### 3. 响应式网格
```tsx
<div className="grid grid-cols-2 gap-3">
  {relatedArticles.map(/* ... */)}
</div>
```

### 4. 交互效果
- Hover 状态变色
- 平滑过渡动画
- Focus 状态提示

---

## 📱 响应性设计

所有组件都针对以下设备进行了优化：
- **桌面浏览器** (≥1024px)
- **平板设备** (640px-1024px)
- **手机设备** (<640px)

使用 Tailwind 的响应式前缀（`sm:`、`md:` 等）进行自适应设计。

---

## 🔧 自定义和扩展

### 修改颜色
所有颜色值都在组件中使用 Tailwind 类，可轻松修改：

```tsx
className="bg-[#1263d3]" // 改为你的颜色
```

### 添加新的相关文章
```tsx
<AISummarizerLarge
  relatedArticles={[
    { id: '5', title: '新文章标题' },
    // ...
  ]}
/>
```

### 集成真实数据
更新 ArticlePage props：

```tsx
<ArticlePage 
  title={realArticle.title}
  subtitle={realArticle.summary}
  author={realArticle.author}
  // ... 其他 props
/>
```

---

## ✅ 已实现的 Figma 设计元素

- ✅ AI 总结器头部（蓝色）
- ✅ BETA 徽章
- ✅ 展开/折叠按钮
- ✅ 用户消息气泡
- ✅ AI 回复文本
- ✅ 编号要点
- ✅ 免责声明框
- ✅ 相关文章卡片
- ✅ 反馈按钮
- ✅ 后续问题按钮
- ✅ 聊天输入框
- ✅ 导航栏
- ✅ 面包屑导航
- ✅ 文章元数据
- ✅ 社交分享按钮

---

## 📝 注意事项

1. **依赖兼容性：** 使用 `--legacy-peer-deps` 因为 lucide-react 对 React 19 的支持还在测试中。

2. **图标库：** Lucide React 提供了所有需要的图标（书签、分享、点赞/点踩等）。

3. **图片：** 相关文章使用渐变色占位符，可以替换为真实的文章图片。

4. **状态管理：** 目前使用 React hooks，如果需要更复杂的状态，可以集成 Redux 或 Zustand。

---

## 🎬 下一步

1. **集成真实 API：** 连接到后端获取文章数据和 AI 总结
2. **添加动画库：** 可以集成 Framer Motion 获得更流畅的动画
3. **增加无障碍支持：** 添加 ARIA 标签和键盘导航
4. **性能优化：** 图像懒加载、代码分割
5. **主题支持：** 添加暗黑模式

---

## 📞 支持

如有任何问题或需要进一步自定义，请参考：
- [Next.js 文档](https://nextjs.org)
- [Tailwind CSS 文档](https://tailwindcss.com)
- [Lucide React 图标库](https://lucide.dev)
