# 项目部署指南 (Deployment Guide)

本项目定位为一个极高质量、访问极快、无后端负担的静态内容展示网站。经过对比，我们选择了以下部署策略。

## 最优推荐：Netlify
这是本项目的**最佳部署平台**。

### 为什么选择 Netlify？
1. **零配置极速上线**: 连接 GitHub 仓库后几乎零干预即可发布。
2. **极速 CDN 节点**: 全球分发静态资源，非常适合我们这种纯展示型的 Next-Gen 官网。
3. **出色的自动化构建**: `npm run build` 生成的 `dist` 目录契合完美。

### Netlify 配置参数
- Build command: `npm run build`
- Publish directory: `dist`
- Node Version: `>= 20.0.0`

## 其他平台对比
| 平台 | 适用场景 | 为什么本项目不首选 |
| :--- | :--- | :--- |
| **GitHub Pages** | 完全不想离开 GitHub | Route 问题（Vite 需配 `base`），刷新容易 404，配置 Action 略微繁琐。|
| **Vercel** | 此类前端框架最佳之选 | 若仅为了静态页面，Netlify 的配置更轻盈一些；但如果是 Next.js 我们会首选 Vercel。|

## 部署执行步骤 (给用户的行动项)
1. 将本项目进行 `Git Commit` 并在 GitHub 创建新仓库通过 `git push` 上传。
2. 登录 `app.netlify.com`。
3. 选择 `Add new site` > `Import an existing project`。
4. 授权 GitHub 连接。
5. 检出刚才的仓库，按照上述推荐参数填入 `Build command` 和 `Publish directory`。
6. 点击 `Deploy site`，2 分钟内即可拿到以 `.netlify.app` 结尾的线上访问链接。（并在 Settings 中自由绑定你自己的域名）。
