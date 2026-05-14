# 部署说明

生产站点：

```text
https://qinxujun-ai-vibecoding.netlify.app
```

当前平台：Netlify。

## 部署模型

这是一个 Vite 构建的静态站点，发布目录只有 `dist/`。部署路径保持最短即可：

- 构建命令：`npm run build`
- 发布目录：`dist`
- 平台配置：`netlify.toml`

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

## 注意事项

- `.netlify/` 只保存本地站点绑定状态，不提交。
- `dist/` 是构建产物，不提交。
- 当前项目不依赖运行时环境变量，Netlify 上也不需要额外配置应用密钥。
