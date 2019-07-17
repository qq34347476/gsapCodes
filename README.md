# README

欢迎来到懒人世界

[如果觉得好用，不要吝啬star(*^▽^*)](https://gitee.com/qq34347476/gsapCodes)

今后更新更多懒人插件，欢迎提bugs,交流,关注,star：
[github](https://github.com/qq34347476)
[gitee](https://gitee.com/qq34347476)

更多优秀插件：

A-super-comprehensive: [vue-bootstrap-js-nodejs-html-css-mui-less等前端超级合集代码补全](https://marketplace.visualstudio.com/items?itemName=xuedao.super-comprehensive)

A-super-themes: [荧光字体主题美化](https://marketplace.visualstudio.com/items?itemName=xuedao.super-themes)

A-super-translate: [英语小白必备悬浮翻译](https://marketplace.visualstudio.com/items?itemName=xuedao.super-translate)

A-super-change-case: [驼峰,下划线等词组格式互转](https://marketplace.visualstudio.com/items?itemName=xuedao.super-change-case)

## 关于GSAP web动画库

GSAP的全名是GreenSock Animation Platform，是一个从flash时代一直发展到今天的专业动画库

GSAP提供4个库文件供用户使用，4者之间有不同也有重叠

TweenLite是GSAP的主体核心，它用于创建基本动画，是其他各类模块的基础。一般都会搭配plugins/CSSPlugin以实现DOM元素的动画（也就是我们最熟悉的动画了）。

TimelineLite是一个叫做时间轴的动画容器，它用于对多个动画进行有序的组织与控制。

TimeLineMax是TimelineLite的升级版，在TimelineLite的基础之上，可以有更高级的组织与控制。

TweenMax是GSAP集合包，除前面3个之外，还包括plugins里的常用插件以及easing里的缓动函数补充

## 食用姿势

调用前缀  `gsap` + 下列对应内容


| 内容                                             |                                快捷键 |
| :----------------------------------------------- | ------------------------------------: |
| config                                           |                          vars相关属性 |
| config-url                                       |                          快捷引入GSAP |
| new-tween                                        |                      快速创建TweenMax |
| to                                               |                           TweenMax.to |
| from                                             |                         TweenMax.from |
| fromTo                                           |                       TweenMax.fromTo |
| stagger-to                                       |                    TweenMax.staggerTo |
| stagger-from                                     |                  TweenMax.staggerFrom |
| stagger-fromTo                                   |                       TweenMax.fromTo |
| api(pause/resume/reverse/seek/restart/timeScale) | 暂停/继续/反转播放/跳转/重播/倍速播放 |
| new-timeline                                     |                      快速创建Timeline |
| new-timeline                                     |                快速创建timeline时间轴 |
| timeline-add                                     |                      向时间轴添加动画 |
