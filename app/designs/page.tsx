'use client';

import Link from 'next/link';

export default function DesignsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Figma 设计对应关系</h1>
          <p className="text-lg text-gray-600">查看所有实现的 Figma 设计节点</p>
        </div>

        {/* Design Cards */}
        <div className="space-y-8">
          {/* Design 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white">Node ID: 480-3510</h2>
              <p className="text-blue-100 mt-1">完整文章页面 - 导航视图</p>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📋 描述</h3>
              <p className="text-gray-700 mb-6">
                完整的 US News Money 文章页面，包括顶部导航栏、面包屑导航、文章标题和元数据。
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🔧 实现组件</h3>
              <code className="bg-gray-100 text-gray-800 px-4 py-2 rounded inline-block font-mono text-sm">
                ArticlePage
              </code>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">✨ 特性</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>US News 导航栏（深灰色）</li>
                <li>面包屑导航路径</li>
                <li>文章标题和副标题</li>
                <li>作者和审核者信息</li>
                <li>发布日期显示</li>
                <li>社交分享按钮</li>
                <li>集成 AISummarizer</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">🔗 使用示例</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<ArticlePage 
  title="5 Best Nuclear Energy Stocks"
  author="Marc Guberti"
  reviewer="Rachel McVearry"
  date="Jan. 23, 2026"
  breadcrumbs={["Home", "Money", "Investing"]}
/>`}
              </pre>
            </div>
          </div>

          {/* Design 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-6">
              <h2 className="text-2xl font-bold text-white">Node ID: 256-11356</h2>
              <p className="text-blue-100 mt-1">AI Article Module - 折叠状态</p>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📋 描述</h3>
              <p className="text-gray-700 mb-6">
                统一响应式 AI Article Module 的折叠状态。在所有屏幕尺寸上响应式适配，点击展开为完整面板。
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🔧 实现组件</h3>
              <code className="bg-gray-100 text-gray-800 px-4 py-2 rounded inline-block font-mono text-sm">
                AIArticleModule (collapsed state)
              </code>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">✨ 特性</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>蓝色背景按钮</li>
                <li>BETA 徽章显示</li>
                <li>点击展开效果</li>
                <li>平滑过渡动画</li>
                <li>问号图标（帮助提示）</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">🔗 使用示例</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<AISummarizer 
  articleTitle="5 Best Nuclear Energy Stocks and ETFs to Buy"
  articleContent="Renewed interest in nuclear energy stocks..."
/>`}
              </pre>
            </div>
          </div>

          {/* Design 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-blue-400 to-blue-500 px-8 py-6">
              <h2 className="text-2xl font-bold text-white">Node ID: 255-6851</h2>
              <p className="text-blue-100 mt-1">AI Article Module - 展开状态（小屏/中屏）</p>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📋 描述</h3>
              <p className="text-gray-700 mb-6">
                统一 AIArticleModule 在小屏和中屏尺寸上的展开状态，显示对话、要点、推荐文章、反馈和后续问题。
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🔧 实现组件</h3>
              <code className="bg-gray-100 text-gray-800 px-4 py-2 rounded inline-block font-mono text-sm">
                AIArticleModule (expanded state)
              </code>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">✨ 特性</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>用户消息气泡（蓝色）</li>
                <li>AI 回复文本</li>
                <li>编号要点列表（1, 2, 3）</li>
                <li>免责声明框</li>
                <li>相关文章推荐卡片</li>
                <li>点赞/点踩反馈按钮</li>
                <li>后续问题建议</li>
                <li>聊天输入框</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">📐 尺寸</h3>
              <p className="text-gray-700">宽度: 768px | 最大高度: 可滚动</p>
            </div>
          </div>

          {/* Design 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-blue-400 to-blue-500 px-8 py-6">
              <h2 className="text-2xl font-bold text-white">Node ID: 256-11244</h2>
              <p className="text-blue-100 mt-1">中等宽度页面 - 完整视图</p>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📋 描述</h3>
              <p className="text-gray-700 mb-6">
                为中等屏幕尺寸优化的完整文章页面布局。
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🔧 实现组件</h3>
              <code className="bg-gray-100 text-gray-800 px-4 py-2 rounded inline-block font-mono text-sm">
                ArticlePage
              </code>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">📐 尺寸</h3>
              <p className="text-gray-700">宽度: 768px | 响应式设计</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">✨ 优化点</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>平衡的列布局</li>
                <li>适合平板设备</li>
                <li>可选的侧边栏区域</li>
                <li>广告位置预留</li>
              </ul>
            </div>
          </div>

          {/* Design 5 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-8 py-6">
              <h2 className="text-2xl font-bold text-white">Node ID: 353-23519</h2>
              <p className="text-indigo-100 mt-1">AI Article Module - 展开状态（大屏）</p>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📋 描述</h3>
              <p className="text-gray-700 mb-6">
                统一 AIArticleModule 在大屏尺寸（1200px+）上的展开状态，采用大型 rail 设计语言和完整展开态视觉风格。
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🔧 实现组件</h3>
              <code className="bg-gray-100 text-gray-800 px-4 py-2 rounded inline-block font-mono text-sm">
                AIArticleModule (desktop expanded)
              </code>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">✨ 特性</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>圆角方形卡片设计</li>
                <li>灰蓝色背景（#f4f7f9）</li>
                <li>蓝色头部栏</li>
                <li>编号圆形指示器（最多 6 个）</li>
                <li>带标签的编号点</li>
                <li>相关文章网格（1-2 列）</li>
                <li>建议问题卡片</li>
                <li>反馈机制</li>
                <li>可滚动内容区</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">📐 尺寸</h3>
              <p className="text-gray-700">宽度: 全屏 | 最大高度: 70vh (可滚动)</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">🔗 使用示例</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<AISummarizerLarge 
  isExpanded={true}
  relatedArticles={[
    { 
      id: '1', 
      title: "Bitcoin ETF: What's Next in Grayscale's Battle" 
    },
    // ... 更多文章
  ]}
/>`}
              </pre>
            </div>
          </div>
        </div>

        {/* Summary Table */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">设计映射总结</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-700">
              <thead className="bg-gray-100 border-b-2 border-gray-300">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Figma Node</th>
                  <th className="px-4 py-3 text-left font-semibold">组件名称</th>
                  <th className="px-4 py-3 text-left font-semibold">描述</th>
                  <th className="px-4 py-3 text-left font-semibold">状态</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-blue-600">480-3510</td>
                  <td className="px-4 py-3 font-semibold">ArticlePage</td>
                  <td className="px-4 py-3">完整文章页面</td>
                  <td className="px-4 py-3"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">✅ 完成</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-blue-600">256-11356</td>
                  <td className="px-4 py-3 font-semibold">AIArticleModule</td>
                  <td className="px-4 py-3">模块折叠状态</td>
                  <td className="px-4 py-3"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">✅ 完成</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-blue-600">255-6851</td>
                  <td className="px-4 py-3 font-semibold">AIArticleModule</td>
                  <td className="px-4 py-3">展开状态（小/中屏）</td>
                  <td className="px-4 py-3"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">✅ 完成</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-blue-600">256-11244</td>
                  <td className="px-4 py-3 font-semibold">ArticlePage</td>
                  <td className="px-4 py-3">中等宽度页面</td>
                  <td className="px-4 py-3"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">✅ 完成</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-blue-600">353-23519</td>
                  <td className="px-4 py-3 font-semibold">AIArticleModule</td>
                  <td className="px-4 py-3">展开状态（大屏）</td>
                  <td className="px-4 py-3"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">✅ 完成</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 p-8 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-xl font-bold text-blue-900 mb-4">🔗 查看实现</h3>
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold">
              → 查看主页（ArticlePage）
            </Link>
            <Link href="/components-demo" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold">
              → 查看组件演示
            </Link>
            <a href="https://github.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold">
              → 在 GitHub 查看代码
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
