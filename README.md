# README

欢迎来到懒人世界

[如果觉得好用，不要吝啬star(*^▽^*)](https://gitee.com/qq34347476/snippets)

## 前言

虽然vscode商店有很多代码补全插件，但是怎么说。。太不友好！

大佬们都是英文注释，这让我们萌新怎么看~

于是..

自己动手写了这个插件

## 链接飞机

[A-super-comprehensive下载地址](https://marketplace.visualstudio.com/items?itemName=xuedao.super-comprehensive)

`代码补全` 包含 mui,javascript,css,html,php,ajax,node 等等..

`26国语翻译言` 链接：[点击](https://marketplace.visualstudio.com/items?itemName=xuedao.super-translate)

`终极美化包` 链接：[点击](https://marketplace.visualstudio.com/items?itemName=xuedao.super-themes)

后期我们还会不断更新，当然您如果发现 bugs，可以点击[github](https://github.com/qq34347476/web/issues)进行留言联系我

## 食用姿势

为了更好的体验推荐个人设置中将代码提示设置为穿插  `"editor.snippetSuggestions": "inline",`

> 由于本人比较懒，其实彩蛋很多，自行体会(●'◡'●)

- 右击菜单`打开查询笔记`

只需要输入在相应的地方输入相应的快捷键，`自动补全`

有时候你也可以输入中文 , `自动补全`

### html

#### Bootstrap代码片段

此部分插件食用说明单独做成阅读文档    [详细说明地址1](https://gitee.com/qq34347476/bootstrap-3.3.2-dist) , [详细说明地址2](https://github.com/qq34347476/bootstrap-3.3.2-dist)

bootstrap3参考官网文档[bootstrap3文档](https://v3.bootcss.com/)

创建一个新的HTML文档并键入“`bs3`”以查看所有可用的代码段。

例:如果你想用bootstrap3,键入`bs3`,想要通栏`block`,想要链接型`link`,想要按钮`button`,想要导航`nav`等等

再举个栗子:如果你想用栏栅系统 输入`b35`,`b37`，就可以分出5份跟7份的一排格栅

### mui代码片段

mui片段使用参考官网文档[MUI中文文档](http://dev.dcloud.net.cn/mui/ui/)

例：mui轮播图:   `mslider`  或者 `mui-lbt` (使用轮播图缩写)

再举个栗子:

    一套mui基础框架，你只需要
    `mheader`(生成头部[关于顶部的mui会多选生成，如顶部选项卡，顶部标题栏，顶部导航栏等])
    `mfooter`(同上，关于底部相关内容会直接生成)
    `mbody`生成内容区

| 内容          | 快捷键 |
| :------------ | -----: |
| 显示全部      |   html |
| mui框架类     |    mui |
| 骨架          |      ! |
| 常用各种模板  |     zj |
| script 云 CDN | script |
| 引入类        |   link |
| 表单类        |   form |
| 惊喜彩蛋      |     sm |

### css/less

| 内容          |    快捷键 |
| :------------ | --------: |
| 显示全部      |      html |
| 显示全部      |       css |
| 初始化        |       csh |
| 文本超出省略  |        sl |
| transform连写 | transform |
| 动画          |        dh |
| flex相关属性  |      flex |
| @media        |         @ |

### javascript

#### nodeJS详解姿势

> 快捷键 nodejs查看所有

node中以node为前缀激活, 模块化激活例:node-file，查看常用file模块

npm 常用资源包 键入`npm`

**提供两种模式**

    完整版跟片段版本,举个栗子：(读取文件)
    `node-file`中补全的是从引入fs模块开始的完整的代码片段
    `readFile`的提示补全的是读取文件的剩下代码片段

**可以使用以下命令：**

- node-express，express 服务器 相关
- node-http，HTTP服务器 相关
- node-file，常用文件操作 相关
- node-mysql,数据库操作 相关
- node-event-emitter，创建事件发射器，发出事件和节目以订阅所述事件
- node-promise-create，创造一个承诺
- node-promise-shorthand，创建使用静态方法的承诺resolve()和reject()
- node-promise-all，使用该Promise.all([])方法解析Promise列表
- node-async-await，使用async / await
- node-express-schema-validation，为express添加模式验证，[点击这里](https://github.com/hapijs/joi)可以阅读有关模式验证用法的更多信息

| 内容                                 |     快捷键 |
| :----------------------------------- | ---------: |
| 显示全部                             |         js |
| node类                               |       node |
| module.exports                       |         me |
| 淘宝flexble.js自适应                 |        csh |
| 清除h5 click300ms延时                |        csh |
| 笔记算法用法等                       |       help |
| 获取类                               |        get |
| 常用正则表达式                       |      zzbds |
| 存储                                 |    storage |
| touch手指触摸事件                    |      touch |
| 物理像素比                           |        dpr |
| 对象类                               |         dx |
| 单词                                 |         dc |
| location相关                         |   location |
| 清除类                               |      clear |
| 定时器                               |        dsq |
| 事件                                 |         sj |
| 鼠标事件                             |      mouse |
| 键盘事件                             |        key |
| 选择元素(以及元素操作)               |        dom |
| 坐标                                 |         zb |
| 创建                                 |     create |
| 设置                                 |        set |
| 删除                                 |        del |
| 克隆                                 |      clone |
| 添加                                 |        add |
| 阻止(禁用)                           |       stop |
| 封装的几个函数                       |         hs |
| 兼容处理的函数                       |         jr |
| 反选按钮                             |         fx |
| 全选按钮                             |         qx |
| 排序                                 |         px |
| 数组去重                             |         qc |
| 构造函数                             |       gzhs |
| 随机整数                             |       sjqz |
| 获取时间                             |       time |
| 倒计时                               |        djs |
| BOM加载事件                          |       load |
| 动画函数                             |         dh |
| 拖动元素                             |         td |
| 放大镜                               |        fdj |
| 根据浏览器不同实现跳转               |         tz |
| 导航栏鼠标动画效果                   |        nav |
| 移动端拖动元素                       |         td |
| 轮播图(移动端)                       |        lbt |
| 返回顶部函数                         |     goback |
| 判断                                 |         is |
| 自调用函数                           |          ! |
| 改变this指向                         | changethis |
| 原型继承                             |       yxjc |
| 图片即时预览                         |         yl |
| 状态码                               |        ztm |
| 创建异步对象                         |     create |
| ajax相关                             |       ajax |
| 监听响应状态                         |     listen |
| 判断服务器成功响应且数据解析完成     |         is |
| 异步对象发送GET请求                  |        xhr |
| 服务器返回值                         |        res |
| 服务器成功响应且数据解析完毕可以使用 |     ajaxon |

### jquery

| 内容     | 快捷键 |
| :------- | -----: |
| 显示全部 |  jq... |

如果你需要使用ajax,那么就是`jqajax`

### php

| 内容         | 快捷键 |
| :----------- | -----: |
| 显示常用     |    php |
| php基础设置  | config |
| mysqli操作类 | mysqli |
| sql语句      |    sql |
| 获取类       |    get |
| 判断类       |     is |
| 删除类       |    del |
| header的设置 | header |
| 文件操作     |   file |
| json格式转换 |   json |
| 创建类       | create |
| 修改类       | change |
| 执行类(使用) |    use |
| 封装的函数   |     hs |

## Known Issues

由于自启插件设置为全局，开启 VScode 加载会较慢（0.3-1S）

## Release Notes

> Tip: 超过 `500` 种常用快捷补全及注释用法 `自启笔记页`

## 全局设置

- 如果你安装了jQuery Code Snippets插件

    `使用前必须卸载(禁用)jQuery Code Snippets`

- 如果你想禁用开启vscode时自启笔记页(可以通过右键`查询web笔记`)

    `vscodePluginDemo.showTip：false`

### For more information

- [更多学习复习资料](https://github.com/qq34347476/web/)
- [好的意见及 BUG 提交收集](https://github.com/qq34347476/web/issues)

**Enjoy!**
