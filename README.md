## 静态网站脚手架 
包含以下功能：
 1. 使用less写样式，也很容易改成其他预处理器
 2. 开发时改动文件自动刷新浏览器
 3. 打包时压缩html,css,js文件

### 使用方法

#### 1. 下载代码
```
git clone https://github.com/gzgogo/static-init.git my-project
```

#### 2. 安装模块
```
cd my-project
npm i
```

#### 3. 开发
```
grunt
```
>改动代码并保存后，页面自动刷新

#### 4. 上线前打包
```
grunt build
```
打包后会生成build文件夹，里面的css, js进行了压缩