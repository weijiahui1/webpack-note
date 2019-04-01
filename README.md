# webpack-note
webpack 系统整理
中文官网地址：https://webpack.docschina.org/

# 深入浅出Webpack book
中文官网地址：http://webpack.wuhaolin.cn/
### 简介
  Entry: 入口，Webpack执行构建的第一步将从Entry开始，可抽象成输入。
  Module: 模块，在Webpack里一切皆模块，一个模块对应着一个文件。 Webpack会从配置的Entry开始递归找出所有依赖的模块。
  Chunk: 代码块，一个Chunk由多个模块组合而成，用于代码合并与分割。
  Loader: 模块转换器，用于把模块原内容按照需求转换成新内容。
  Plugin: 扩展插件，在Webpack构建流程中特定时机注入扩展逻辑来改变构建结果做你想要的事情。
  Output: 输出结果，在Webpack经过一系列处理得出最终想要的代码后输出结果。
