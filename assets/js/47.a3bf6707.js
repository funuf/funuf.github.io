(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{492:function(s,t,a){"use strict";a.r(t);var e=a(23),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"ssh密钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh密钥"}},[s._v("#")]),s._v(" SSH密钥")]),s._v(" "),a("p",[s._v("代码仓库支持 HTTP(S) 和 SSH 两种访问协议，SSH 协议可以实现安全的免密认证，且性能比 HTTP(S) 协议更好（因为 HTTP 是无状态协议，需要多次连接和交互）。在使用 SSH 协议操作代码仓库前，首先需要生成并上传你的 SSH 公钥，完成 SSH 公钥和用户账号的对应。")]),s._v(" "),a("p",[s._v("安装 ssh-keygen，它是 OpenSSH 组件，在 Linux 和 macOS 中通常已安装；如果使用 Windows，安装 Git for Windows 时会同时安装 OpenSSH 。")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://help.aliyun.com/document_detail/153709.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("阿里云效--传送门"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://gitee.com/help/articles/4181",target:"_blank",rel:"noopener noreferrer"}},[s._v("Gitee--传送门"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 检查本机是否已存在密钥")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.ssh/id_ed25519.pub\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 如果查询不到本地公钥，你可以按如下命令重新生成 SSH 密钥对 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该指令要求提供一个位置去存放公钥、私钥文件，你可以选择使用默认位置保存公钥、私钥文件。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 公钥文件以 .pub 扩展名结尾，可以公开给其他人，而没有 .pub 扩展名的私钥文件不要泄露给任何人！")]),s._v("\nssh-keygen -t ed25519 -C "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_email@example.com"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. 查看公钥")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.ssh/id_ed25519.pub\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4. 去相应平台上配置公钥")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5. 添加平台到本机SSH的可信列表")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@gitee.com\n")])])]),a("h2",{attrs:{id:"git-cheatsheet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-cheatsheet"}},[s._v("#")]),s._v(" Git-CheatSheet")]),s._v(" "),a("imgv",{attrs:{v:"/img/it/devops/git/git-cheatsheet.png"}}),s._v(" "),a("h2",{attrs:{id:"git脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git脚本"}},[s._v("#")]),s._v(" Git脚本")]),s._v(" "),a("p",[s._v("以下脚本，可以通过IDEA运行，省略输入git命令的步骤，提高效率。")]),s._v(" "),a("h3",{attrs:{id:"commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit"}},[s._v("#")]),s._v(" commit")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exec>>> [git add .]'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exec>>> [git commit -a -m msg]'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://blog.csdn.net/ABCisCOOL/article/details/109288845")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v("  -p "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"请输入提交信息Message: "')]),s._v(" message\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -a -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$message")]),s._v('"')]),s._v("\n")])])]),a("h3",{attrs:{id:"commit-push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit-push"}},[s._v("#")]),s._v(" commit push")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exec>>> [git add .]'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exec>>> [git commit -a -m msg]'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exec>>> [git push]'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://blog.csdn.net/ABCisCOOL/article/details/109288845")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v("  -p "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"请输入提交信息Message: "')]),s._v(" message\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -a -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$message")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n")])])]),a("h3",{attrs:{id:"pull"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pull"}},[s._v("#")]),s._v(" pull")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exec>>> [git pull]'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n")])])]),a("h3",{attrs:{id:"submodule-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#submodule-update"}},[s._v("#")]),s._v(" submodule update")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exec>>> [git submodule update --remote]'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodule update --remote\n")])])]),a("h3",{attrs:{id:"sync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sync"}},[s._v("#")]),s._v(" sync")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exec>>> [git submodule update --remote]'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exec>>> [git pull]'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exec>>> [git submodule update --remote]'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exec>>> [git pull]'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exec>>> [git submodule update --remote]'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exec>>> [git pull]'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行多次，保证全部更新下来")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodule update --remote\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodule update --remote\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodule update --remote\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n\n")])])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://git-scm.com/book/en/v2",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git--传送门"),a("OutboundLink")],1)])],1)}),[],!1,null,null,null);t.default=n.exports}}]);