# 本工程的目的是学习nodejs express4技术  
学习的阶段性目标是山寨一个apple.com的硬件展示网站！ 刚八代！  
-----------------------------------------------------------------------------------------------------------  


## 搭建nodejs + express 网站    
1.建站指导文档    
 [参考http://blog.fens.me/nodejs-express4 ](http://blog.fens.me/nodejs-express4/)    
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
####前端模板引入 
假如你想使用一个名为layout_header.ejs的模版只要建立layout_header.ejs后，在你的网页中引入 <% include layoutHeader%>就可以了。
  
为了实现一个图片轮播教程，引入一个jQuery控件，but 先学下jquery怎么用吧。   
[jQuery 教程](http://www.w3school.com.cn/jquery/)   
##### jQuery是一个js库，用于简化js编程，很易学。      
1.jQuery简单测试    
  
    <% include header.ejs%>
    <script type="text/javascript">
        var i= true;
        $(document).ready(function(){  //文档就绪函数，避免在文档完全加载钱运行jQ  
            $("button").click(function(){
                if (i) $("p").hide();
                else $("p").show();
                i=!i;
            });
        });
    </script>
    </head>
    <body>
    <h1><%= title %></h1>
    <button type="button">隐藏</button>
    <h2>This is a heading</h2>
    <p>This is a paragraph.</p>
    <p id="test">This is another paragraph.</p>
    <% include footer.ejs%>

2.jQuery基础语法  
2.1 基础语法是：$(selector).action()   
selector用法：  

    $(this)  |  当前 HTML 元素  
    $("p")  |  所有 <p> 元素  
    $("p.intro")  |  所有 class="intro" 的 <p> 元素  
    $(".intro")  |  所有 class="intro" 的元素  
    $("#intro")  |  id="intro" 的元素  
    $("ul li:first")  |  每个 <ul> 的第一个 <li> 元素  
    $("[href$='.jpg']")  |  所有带有以 ".jpg" 结尾的属性值的 href 属性  
    $("div#intro .head")  |  id="intro" 的 <div> 元素中的所有 class="head" 的元素  
      
jQuery 元素选择器和属性选择器允许您通过标签名、属性名或内容对 HTML 元素进行选择。  



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