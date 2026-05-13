# 部署说明

当前生产站点：

```text
https://qinxujun-ai-vibecoding.netlify.app
```

当前部署平台：Netlify。

## 为什么使用 Netlify

本项目是 Vite 构建的静态展示站，生产产物是 `dist/`。Netlify 对这类项目的路径最短：

- 构建命令简单：`npm run build`
- 发布目录明确：`dist`
- 自动 HTTPS 与 CDN 分发开箱可用
- 适合连接 GitHub 后持续部署

## 本仓库配置

`netlify.toml`：

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

## 发布流程

1. 确认本地构建通过：

```bash
npm run build
```

2. 提交并推送 GitHub：

```bash
git status
git add <changed-files>
git commit -m "..."
git push
```

3. 部署生产站点：

```bash
npx netlify deploy --prod --build
```

## 注意事项

- `.netlify/` 是本地 Netlify 关联状态，不提交。
- `dist/` 是构建产物，不提交。
- 若 Netlify Dashboard 出现多余站点，可以删除旧项目；删除旧站点不会恢复已消耗的当月构建/带宽额度，但会停止后续构建和访问消耗。
- 若未来需要更正式的品牌域名，建议绑定自定义域名，而不是长期依赖默认 `.netlify.app` 子域名。
