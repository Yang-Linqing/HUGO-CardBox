# Hugo 卡片盒主题

　　我的 Hugo 卡片盒主题适合将 Hugo 站点用作卡片盒。所有的页面都是一个卡片，没有层级嵌套结构，通过索引卡片组织卡片之间的联系。

　　每张卡片包含两个部分：顶部的卡片内容和底部的相关链接。索引卡片以底部的链接部分为主，普通卡片以顶部的卡片内容为主。

## 安装
　　在 Hugo 站点目录下添加 Git 子模块

```bash
git submodule add --depth=1 https://github.com/Yang-Linqing/HUGO-CardBox.git themes/CardBox
git submodule update --init --recursive
```

　　此仓库还同时托管在极狐 GitLab 中，地址：`https://jihulab.com/Yang-Linqing/Hugo-CardBox.git`

　　如果你的站点目录没有使用 Git 管理，直接把此仓库的文件放在 `themes/CardBox` 即可。

　　在站点配置文件中配置主题，并启用配置合并：
```yaml
theme: CardBox
markup:
  _merge: deep
```

## 创建卡片
```bash
hugo new content/cardid.md
```

　　本主题提供两种卡片模版：默认卡片和文献卡片。要创建文献卡片，使用一下命令：

```bash
hugo new content/cardid.md -k ref
```

## 编辑首页索引
　　在 `content/_index.md` 的元数据中可以编辑索引。此文件也是一个卡片，只不过其类型被标记为“首页”。以下是一个示例：

```markdown
---
title      : 卡片盒
description: 使用 HUGO 构建的卡片盒。
date       : 2022-05-09T21:17:15+08:00
lastmod    : 2022-05-09T21:17:22+08:00

ContentType: 首页
Sections:
  - Title: 索引
    Groups:
    - Title: 其他文档
      Links:
        - Type: Page
          URL : card-id-name
        - Type: URL
          URL : ../example.html
          Title: Examp
          Description: Example URL.
---
 　　这里可以写首页的其他内容。注意行首有两个全角空格。
```

## 添加卡片链接
　　卡片的元数据中有一个 `Sections` 数组，这里可以创建很多节。一般情况下只使用一个“相关内容”节就足够使用了，也可以自定义节标题，例如“索引”、“最近更新”等。每一节下面包含多个组，每个组下面包含多个链接。`Page` 类型的链接会自动填写卡片标题、编译后的 URL 和描述， `URL` 需要指定标题、URL、描述。如果想要覆盖卡片的标题盒描述，可以使用 `URL` 类型的链接，此时需要填写编译后的 URL。
 　首页会包含最近 5 个更新的卡片的链接。根据卡片元数据中的 `lastmod` 确定。

## 使用不同的卡片与链接类型
　　卡片的元数据中可以指定 `ContentType` , `Sections` 中的 URL 类型的链接也可以指定链接的 `ContentType`。不同的 `ContentType` 会显示为不同的图标。

| 图标 | 类型 |
|-----|------|
| {{<icon "fas fa-book">}} | 图书、指南、手册 |
| {{<icon "far fa-bookmark">}} | 章节 |
| {{<icon "far fa-file-alt">}} | 页面、文章 |
| {{<icon "far fa-file-archive">}} | 附件、文件 |
| {{<icon "fas fa-terminal">}} | 终结点 |
| {{<icon "fas fa-link">}} | 链接 |
| 显示字面值 | 其他类型 |