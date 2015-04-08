# 本工程的目的是学习nodejs express4技术  
学习的阶段性目标是山寨一个apple.com的硬件展示网站！ 刚八代！  
-------------------------------------------------------------  

## 搭建nodejs + express 网站    
1.指导文档    
 [参考](http://blog.fens.me/nodejs-express4/)    
2.配置     

## 学习html前台页面编辑
1.增加全局的header

2.增加三格滑动展示窗

3.底部场景展示  






## 建站流程  
###1.需求分析  
  共有两个页面。  
  页面1 官网展示  
  页面2 单个产品详细展示  
  
###2.项目依赖初始化  
2.1 在ws中新建工程选择，nodejs+express
2.2 选择模板和引擎

###入口文件编码  
###创建视图
[exress下EJS使用介绍](http://blog.sina.com.cn/s/blog_ad0672d60101l2ml.html)  
[整体开发教程](http://www.geedoo.info/nodejs-development-framework-express4-x-development-notes.html) 
###测试前端流程 
###样式开发，伪造模板数据   
###设计数据库模型
###开发后端逻辑
###配置依赖文件，完成开发


##express
目录介绍：
node_modules, 存放所有的项目依赖库。(每个项目管理自己的依赖，与Maven,Gradle等不同)
package.json，项目依赖配置及开发者信息
app.js，程序主入口
public，静态文件(css,js,img)
routes，路由文件(MVC中的C,controller)
Views，页面文件(Ejs模板)
nodejs-demo/bin/www （启动文件，用于启动app.js）


## 可能用到的文档
[nodejs debug模块用法](https://www.npmjs.com/package/debug)