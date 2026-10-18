# 部署说明

生产站点：

```text
https://qinxujun-ai-vibecoding.netlify.app
```

当前主平台：Netlify。

GitHub Pages 镜像：

```text
https://qinxujunai.github.io/qinxujun-ai-vibecoding/
```

## 部署模型

这是一个 Vite 构建的静态站点，发布目录只有 `dist/`。部署路径保持最短即可：

- 构建命令：`npm run build`
- 发布目录：`dist`
- 平台配置：`netlify.toml`
- Netlify 项目：`qinxujun-ai-vibecoding`

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

## 手动部署

```bash
npm install
npm run build
npx netlify deploy --prod --build
```

## Git 驱动部署

如果 Netlify 已经连接 GitHub 仓库，那么推送到生产分支后会自动触发构建。手动部署主要用于临时补发或本地确认。

## GitHub Pages 镜像

GitHub Pages 使用 `gh-pages` 分支根目录作为发布源，由 `.github/workflows/deploy.yml` 自动维护：

1. 推送到 `main`（或在 Actions 页面手动触发）。
2. Actions 执行 `npm ci` → `npm run lint` → `BASE_PATH=/qinxujun-ai-vibecoding npm run build`。
3. `peaceiris/actions-gh-pages` 把 `dist/`（含 `.nojekyll`）推送到 `gh-pages`，GitHub 随后自动重建 Pages。

不要手动编辑 `gh-pages` 分支。若 Pages 设置被改成 “GitHub Actions” 作为来源，需要改回 “Deploy from a branch: gh-pages / root”，否则这条流水线发布的内容不会生效。

注意：GitHub Pages 发布可能有几分钟缓存延迟，最终地址以 GitHub Pages 设置为准。

## 注意事项

- `.netlify/` 只保存本地站点绑定状态，不提交。
- `dist/` 是构建产物，不提交。
- 当前项目不依赖运行时环境变量，Netlify 上也不需要额外配置应用密钥。
- 推送到 GitHub 与发布 Netlify 前，必须先通过 `npm run lint` 与 `npm run build`，并完成真实浏览器截图验证。
- 发布后同步检查 GitHub 仓库的 description、homepage 与 topics，确保它们反映当前站点定位。
