/**
 * Created by G.zhen on 2015/11/9.
 */
module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      clean: {
        assets: {
          src: ['build/**', '!build']
        }
      },
      copy: {
        assets: {
          files: [{
            expand: true,
            cwd: 'app/public/assets',
            src: ['**'],
            dest: 'build/public/assets'
          }]
        },
        js: {
          files: [{
            expand: true,
            cwd: 'app/js',
            src: ['*.js'],
            dest: 'app/public/js'
          }]
        }
      },
      less: {
        build: {
          files: [{
            expand: true,     // Enable dynamic expansion.
            cwd: 'app/css',      // Src matches are relative to this path.
            src: ['*.less'], // Actual pattern(s) to match.
            dest: 'app/public/css',   // Destination path prefix.
            ext: '.css',   // Dest filepaths will have this extension.
            extDot: 'first'   // Extensions in filenames begin after the first dot
          }]
        }
      },
      //为css3属性添加前缀
      autoprefixer: {
        build: {
          files: [{
            expand: true,     // Enable dynamic expansion.
            cwd: 'app/public/css',      // Src matches are relative to this path.
            src: ['*.css'], // Actual pattern(s) to match.
            dest: 'app/public/css',   // Destination path prefix.
            ext: '.css',   // Dest filepaths will have this extension.
            extDot: 'first'   // Extensions in filenames begin after the first dot
          }]
        }
      },
      //压缩css
      cssmin: {
        //文件头部输出信息
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
            //美化代码
            beautify: {
                //中文ascii化，非常有用！防止中文乱码的神配置
                ascii_only: true
            }
        },
        build: {
          files: [{
            expand: true,     // Enable dynamic expansion.
            cwd: 'app/public/css',      // Src matches are relative to this path.
            src: ['*.css'], // Actual pattern(s) to match.
            dest: 'build/public/css',   // Destination path prefix.
            ext: '.css',   // Dest filepaths will have this extension.
            extDot: 'first'   // Extensions in filenames begin after the first dot
          }]
        }
      },
      //压缩js
      uglify: {
        options: {
          mangle: false, //不混淆变量名
          preserveComments: 'all', //不删除注释，还可以为 false（删除全部注释），some（保留@preserve @license @cc_on等注释）
          footer:'\n/*! <%= pkg.name %> 最后修改于： <%= grunt.template.today("yyyy-mm-dd") %> */'//添加footer
        },
        build: {
          files: [{
            expand: true,     // Enable dynamic expansion.
            cwd: 'app/js',      // Src matches are relative to this path.
            src: ['*.js'], // Actual pattern(s) to match.
            dest: 'build/public/js',   // Destination path prefix.
            ext: '.js',   // Dest filepaths will have this extension.
            extDot: 'first'   // Extensions in filenames begin after the first dot
          }]
        }
      },
      jshint: {
        build: {
          src: 'app/js/*.js'
        }
      },
      //压缩HTML
      htmlmin: {
        options: {
            removeComments: true,
            removeCommentsFromCDATA: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: false,
            removeRedundantAttributes: false,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeOptionalTags: true
        },
        build: {
          files: [{
            expand: true,     // Enable dynamic expansion.
            cwd: 'app',      // Src matches are relative to this path.
            src: ['*.html'], // Actual pattern(s) to match.
            dest: 'build',   // Destination path prefix.
            ext: '.html',   // Dest filepaths will have this extension.
            extDot: 'first'   // Extensions in filenames begin after the first dot
          }]
        }
      },
      watch: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        html: {
          files: ['app/*.html']
        },
        js: {
          files: ['app/js/*.js'],
          tasks: ['copy:js']
        },
        less: {
          files: ['app/css/*.less'],
          tasks: ['less', 'autoprefixer']
        }
      },
      connect: {
        options: {
          port: 8080,
          open: true,
          livereload: true, //35729
          // Change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost',
        },
        server: {
          options: {
            base: './app'
          }
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks("grunt-autoprefixer");
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // 开发
    grunt.registerTask('default',['copy:js', 'less', 'autoprefixer', 'connect', 'watch']);
    // 构建
    grunt.registerTask('build',['clean', 'copy:assets', 'htmlmin', 'less', 'autoprefixer', 'cssmin', 'jshint', 'uglify']);
};