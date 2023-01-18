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

> ⚠️注意: 文件名将作为卡片编号显示在卡片页面顶部和卡片链接旁边。卡片标题请使用 `Title` 元数据。

## 编辑首页索引
　　在 `content/_index.md` 的元数据中可以编辑索引。此文件也是一个卡片。以下是一个示例：

```markdown
---
title      : 卡片盒
description: 使用 HUGO 构建的卡片盒。
date       : 2022-05-09T21:17:15+08:00
RevisionHistory:
- Date: &ModDate 2022-05-09T21:17:15+08:00
  Mods:
  - 创建。
lastmod: *ModDate

Sections:
  - Title: 索引
    Groups:
    - Title: 其他文档
      Links:
        - card-id
        - Type: Page
          URL : card-id
          Description: 替代卡片描述的自定义文本。不设置此值则使用卡片自带描述。
        - Type: URL
          URL : ../example.html
          Title: Example
          Description: Example URL.
---
 　　这里可以写首页的其他内容。注意行首有两个全角空格。
```

## 添加卡片链接
　　卡片的元数据中有一个 `Sections` 数组，这里可以创建很多节。一般情况下只使用一个“相关内容”节就足够使用了，也可以自定义节标题，例如“索引”、“最近更新”等。每一节下面包含多个组，每个组下面包含多个链接，例如：

```yaml
Sections:
- Title: 相关内容
  Groups:
  - Title: 主题一
    Links:
    - 卡片编号一
    - 卡片编号二
  - Title: 主题二
    Links:
    - 卡片编号三
    - 卡片编号四
    - 卡片编号五
  - Title: 索引
    Links:
    - 索引卡片编号一
    - 索引卡片编号二
```

　　每个链接会自动填充卡片的元数据。

　　要覆盖卡片的描述，请参考以下示例：

```yaml
...
Links:
- Type: Page
  URL: 卡片编号
  Description: 覆盖卡片的描述文本。
...
```

　　要插入任意 URL ，请参考以下示例：

```yaml
...
Links:
- Type: URL
  URL: https://example.com
  Title: 链接标题
  Description: 链接描述文本。
...
```

　　首页会包含最近 5 个更新的卡片的链接。根据卡片元数据中的 `lastmod` 确定。

## VS Code 代码片段
　　vscode.code-snippets 文件提供了 VS Code 工作区代码片段模版。添加到工作区的 .vscode 目录即可启用。

## 编译
　　此主题生成的所有链接均相对于网站跟路径，baseURL 必须为 "https://example.org/"，否则卡片之间的链接会失效。