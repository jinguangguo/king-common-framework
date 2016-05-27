简单项目脚手架
===================

### 在gulp中使用ES6
[详细介绍](https://github.com/wangchi/using-es6-with-gulp)

### tag目录
> - gulp支持ES6: gulp_es6
> - 添加子模块, 将公共库最为一个子模块进行引用: submodule
> - less支持: wepack添加less支持


### 子模块更新
```shell
# 添加子模块
git submodule add <repository>

# checkout 子模块
git submodule update —init —recursive
```

### 使用less
主要具备两个功能点
> - 源码的映射 - 使用sourcemaps
> - 自动补全css3前缀 - 使用autoprefixer

node端使用
```javascript
gulp.src(fileInfo.filePath)
    .pipe(gulpSourcemaps.init())
    .pipe(gulpLess())
    .pipe(gulpAutoprefixer({
        browsers: ['last 2 versions', 'Firefox >= 20', 'last 3 Safari versions', 'last 2 Explorer versions']
    }))
    .pipe(gulpSourcemaps.write())
    .pipe(
        through2.obj(
            function (file) {
                reply(file.contents.toString()).type('text/css')
            }
        )
    );
```

webpack的loader配置
```javascript
{
    test: /(\.css|\.less)$/,
    loader: 'style?sourceMap!css?sourceMap!less?sourceMap!autoprefixer?{browsers:["last 2 versions", "Firefox >= 20", "last 3 Safari versions", "last 2 Explorer versions"]}'
    //loader: ExtractTextPlugin.extract(
    //    // activate source maps via loader query
    //    'css?sourceMap!less?sourceMap'
    //)
}
```

现在两种的使用方式, 直接link引入less文件, 同样可以在js中import对应的less文件()使用webpack, 主要是方便js引用相关的模块css, 使得组件更加内聚).


