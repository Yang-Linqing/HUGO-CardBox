---
title      : "{{ replace .Name "-" " " | title }}"
description: 描述。
date       : {{ .Date }}
lastmod    : {{ .Date }}

ContentType: 文章 # 可选值：图书、章节、指南、手册、页面、文章
Sections:
  - Title: 相关内容
    Groups:
    - Title: 卡片和链接
      Links:
      - Type: Page # 这是一个指向首页的卡片链接。
        URL : /
---
文章链接: https://example.com/

{{< aside>}}
**文献卡片备注**
　　此卡片为文献卡片。文献卡片使用精炼的语言总结原始文献的内容，并可能带有指向其他卡片的链接。文献卡片不追求完整还原原始文献，建议读者结合此类卡片完整阅读原始文献。
{{< /aside >}}

　　正文。

## 修订记录
### {{ .Date }}
* 创建。