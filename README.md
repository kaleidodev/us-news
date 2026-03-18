# US News Money AI Article Module

🎯 基于 Figma 设计的 AI 文章总结器组件库

一套完整的、生产级别的 React 组件，用于 US News Money 版块的 AI 文章总结功能。

## ✨ 项目特性

- 📱 **响应式设计** - 完美支持桌面、平板和手机设备
- 🎨 **精美 UI** - 基于 Figma 高保真设计实现
- ⚡ **高性能** - Next.js 16 + Turbopack 优化编译
- 🔧 **易于集成** - 简单的 Props API，开箱即用
- 💬 **完整交互** - 展开/折叠、反馈、后续问题等
- 📚 **详细文档** - 中英双语文档和示例

## 🚀 快速开始

### 1. 安装依赖
```bash
npm install --legacy-peer-deps
```

### 2. 启动开发服务器
```bash
npm run dev
```

### 3. 打开浏览器
访问 `http://localhost:3001`（或显示的端口）

## 📂 项目结构

```
us-news/
├── app/
│   ├── components/
│   │   ├── AISummarizer.tsx          # 内联 AI 总结器
│   │   ├── AISummarizerLarge.tsx     # 大型面板版本
│   │   ├── ArticlePage.tsx            # 完整文章页面
│   │   └── index.ts                   # 组件导出
│   ├── components-demo/page.tsx       # 组件演示页面
│   ├── designs/page.tsx               # 设计对应参考
│   ├── page.tsx                        # 主页
│   └── layout.tsx                      # 根布局
├── public/assets/                      # 图片资源
├── COMPONENTS.md                       # 详细API文档
├── 快速开始.md                         # 中文快速入门
└── README.md                           # 本文件
```

## 📖 核心组件

### AISummarizer
紧凑的内联 AI 总结器，可展开和折叠。

```tsx
import { AISummarizer } from '@/app/components';

export default function Article() {
  return (
    <AISummarizer 
      articleTitle="5 Best Nuclear Energy Stocks"
      articleContent="..."
    />
  );
}
```

### AISummarizerLarge
全屏幕大型 AI 面板，用于深度交互。

```tsx
import { AISummarizerLarge } from '@/app/components';

export default function Page() {
  return <AISummarizerLarge isExpanded={true} />;
}
```

### ArticlePage
完整的文章页面组件（含导航、标题、AI 总结器）。

```tsx
import { ArticlePage } from '@/app/components';

export default function Page() {
  return (
    <ArticlePage 
      title="文章标题"
      author="作者名"
      date="发布日期"
    />
  );
}
```

## 🎨 设计系统

| 属性 | 值 |
|------|-----|
| 主色 | #1263d3 (Science Blue) |
| 背景 | #f4f7f9 (Light Gray) |
| 文字主色 | #1a1d26 |
| 文字次色 | #737d8c |
| 字体 | Montserrat, Roboto |
| 边框圆角 | 8px-20px |

## 🔗 相关资源

- 📋 [详细组件文档](./COMPONENTS.md) - 完整的 API 文档和示例
- 🎯 [中文快速开始](./快速开始.md) - 中文版快速入门指南
- 🎨 [设计对应参考](http://localhost:3001/designs) - Figma 设计节点对应关系
- 🖼️ [组件演示页面](http://localhost:3001/components-demo) - 所有组件变体展示

## 🔧 技术栈

- **框架：** Next.js 16.1.7
- **UI 库：** React 19.2.3
- **样式：** Tailwind CSS 4
- **图标：** Lucide React 0.396.0
- **类型：** TypeScript 5
- **编译器：** Turbopack

## 💻 可用命令

```bash
# 开发服务器
npm run dev

# 生产构建
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

## 📱 响应式断点

```
手机 (xs): < 640px
平板 (sm): 640px - 1024px
桌面 (md): > 1024px
```

## ✅ 实现的功能

- ✅ 展开/折叠动画
- ✅ AI 消息气泡界面
- ✅ 编号要点列表
- ✅ 相关文章推荐
- ✅ 反馈系统（点赞/点踩）
- ✅ 后续问题建议
- ✅ 免责声明框
- ✅ 聊天输入框
- ✅ 响应式布局
- ✅ 导航栏和面包屑
- ✅ 文章元数据展示
- ✅ 社交分享按钮

## 🎯 Figma 设计对应

| Node ID | 组件 | 描述 |
|---------|------|------|
| 480-3510 | ArticlePage | 完整文章页面 |
| 256-11356 | AISummarizer | AI 总结按钮 |
| 255-6851 | AISummarizer | 展开的面板 |
| 256-11244 | ArticlePage | 中等宽度页面 |
| 353-23519 | AISummarizerLarge | 大型专业面板 |

## 🐛 常见问题

**Q: 依赖冲突错误？**
```bash
npm install --legacy-peer-deps
```

**Q: 端口 3000 被占用？**
Next.js 会自动使用 3001 端口。

**Q: 如何自定义颜色？**
编辑组件中的 Tailwind 类，例如 `className="bg-[#你的颜色]"`

**Q: 如何添加真实数据？**
通过 Props 传入动态内容，或集成后端 API。

## 📚 下一步

1. 连接真实的后端 API
2. 添加用户认证
3. 集成分析跟踪
4. 实现暗黑模式
5. 性能优化（图像懒加载等）

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📝 许可证

MIT License - 详见 LICENSE 文件

---

**官网：** [usnews.com](https://www.usnews.com)  
**创建日期：** 2026-03-18  
**最后更新：** 2026-03-18
