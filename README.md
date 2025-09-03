# All In AIGC - 现代 SEO 和 AI 工具企业网站

![All In AIGC Logo](/public/logo.png)

## 项目概述

All In AIGC 是一个现代化的 SEO 和 AI 工具企业展示网站，采用 Next.js 15 框架开发，结合了最新的 Web 技术和设计理念，为 SEO
和 AI 工具企业提供了一个专业、现代的在线展示平台。网站支持多语言切换、暗黑模式、响应式设计等现代网站必备功能，并集成了
Google Analytics 进行用户行为分析。

## 主要功能

- **多语言支持**：内置中英文切换功能，轻松满足国际化需求
- **暗黑模式**：支持明亮/暗黑主题切换，提升用户体验
- **响应式设计**：完美适配各种设备尺寸，从手机到桌面端
- **动画效果**：使用 Framer Motion 实现流畅的交互动画
- **打字机效果**：首页标题采用打字机动画效果，增强视觉吸引力
- **产品展示**：专业的产品卡片展示区域
- **Google Analytics**：集成 GA4 分析，追踪用户行为数据
- **现代 UI 组件**：基于 Radix UI 和 Tailwind CSS 构建的现代化 UI 组件库

## 技术栈

- **前端框架**：Next.js 15
- **UI 库**：Radix UI + Tailwind CSS
- **动画**：Framer Motion
- **打字效果**：Typewriter Effect
- **图标**：Lucide React
- **样式**：Tailwind CSS + CSS Modules
- **类型检查**：TypeScript
- **表单处理**：React Hook Form + Zod
- **分析工具**：Google Analytics 4

## 项目结构

```
Modern SEO & AI Tools Corporate Website/
├── app/                   # Next.js 应用主目录
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 主布局组件
│   ├── metadata.ts        # 元数据配置
│   └── page.tsx           # 首页组件
├── components/            # 可复用组件
│   ├── client-layout.tsx  # 客户端布局组件
│   ├── footer.tsx         # 页脚组件
│   ├── google-analytics.tsx # Google Analytics集成
│   ├── header.tsx         # 页头组件
│   ├── language-provider.tsx # 多语言支持
│   ├── logo.tsx           # Logo组件
│   ├── theme-provider.tsx # 主题切换支持
│   └── ui/                # UI组件库
├── hooks/                 # 自定义React Hooks
├── lib/                   # 工具函数和常量
├── public/                # 静态资源
└── types/                 # TypeScript类型定义
```

## 安装与运行

### 前提条件

- Node.js 18.0.0 或更高版本
- npm 或 yarn 或 pnpm

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 开发环境运行

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

访问 http://localhost:3000 查看网站。

### 生产环境构建

```bash
npm run build
# 或
yarn build
# 或
pnpm build
```

### 启动生产服务

```bash
npm run start
# 或
yarn start
# 或
pnpm start
```

## Google Analytics 配置

网站已集成 Google Analytics 4 进行用户行为分析。使用前需要进行以下配置：

1. 在[Google Analytics](https://analytics.google.com/)创建账户和媒体资源
2. 获取测量 ID (格式为 G-XXXXXXXXXX)
3. 在`components/google-analytics.tsx`文件中，将占位符替换为您的实际测量 ID：

```typescript
// Replace with your Google Analytics measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // 替换为您的实际GA4测量ID
```

## 自定义与扩展

### 修改网站信息

网站的标题、描述等元数据在`app/metadata.ts`文件中配置。

### 添加新页面

在`app`目录下创建新的目录和 page.tsx 文件，Next.js 会自动将其路由化。

### 多语言支持

在`lib/translations.ts`文件中添加新的翻译内容。

### 主题定制

通过修改`tailwind.config.js`文件自定义颜色、字体等主题元素。

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 许可证

[MIT](LICENSE)

## 联系方式

- 网站：https://allinaigc.org
- 邮箱：open@wtai.cc
