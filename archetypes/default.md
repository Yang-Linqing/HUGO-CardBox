---
title      : "{{ replace .Name "-" " " | title }}"
description: 描述。
date       : {{ .Date }}
lastmod    : {{ .Date }}

ContentType: 卡片 # 可选值：图书、章节、指南、手册、页面、文章
Sections:
  - Title: 相关内容
    Groups:
    - Title: 学习资料
      Links:
      - Type: URL
        URL : https://example.com
        Title: 学习的文章标题
        Description: 这个资料如何如何，是讲什么的。
        ContentType: 链接 # 可选值：图书、章节、指南、手册、卡片、页面、文章、附件、文件、终结点
    - Title: 卡片和链接
      Links:
      - Type: Page # 这是一个指向首页的卡片链接。
        URL : /
---

　　正文。

## 修订记录
### {{ .Date }}
* 创建。