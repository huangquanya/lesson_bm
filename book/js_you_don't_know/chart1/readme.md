# 作用域是什么

- react mvvm setState state 状态机制
  - 程序状态由变量提供  声明空间(闭包， 作用域， 变量查找， 变量提升)  可以去储存值  值修改
  闭包：在编译阶段带来了闭包
  执行上下文：
  - 1. 赋值过程
       var a = 2; 它是怎么运行的？
       var： 关键字 a： identifier标识符  2： 值

# 编译原理
- 语言执行的底层
- 操作底层->编译原理  最后成为二进制
- 引擎 v8
## 编译的三个阶段
1. 分词 -> 词法分析  
    [var,a,=,2] 每一个token词法单元
    - 分词（tokenizing）词法单元的识别是无状态的方式执行
    - 词法分析（Lexing） 词法单元生成器判断a是一个独立的词法单元或其他词法单元的一部分时，调用的是有状态的解析规则
2. 语法分析阶段(Parsing)
   - 抽象语法树(Abstract Syntax Tree, AST)
   - 编译器也是一段代码 运行     
   - HTML<div></div>DOM树   
                               ->AssignmentExpression ->NumericLiter(2)
    VariableDeclaration（var） -> Indentifier(a)
    代码块的语法是否正确，如果出现不正确会向外抛出一个 SyntaxError(语法错误),并且停止 js 代码的执行
3. 代码生成
   将AST转换为可执行代码的过程
   将var a = 2;的AST转化为一组机器指令 创建一个叫做a的变量（包括分配内存），并将一个值储存到a中

  JS 运行时编译
  JAVA C++
  编译器（compilar）
  解释器（Interpreter）
  JIT 即时编译器
  在V8引擎中会将AST先转换为字节码，减少系统存储压力，之后再转化为机器码


js 错误类型详解：https://segmentfault.com/a/1190000022746484