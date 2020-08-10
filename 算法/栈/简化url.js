// ## URL 简化路径
// 实现一个方法 function resolve(baseUrl: string, moduleId: string): string {}

// resolve('http://www.baidu.com', 'a/b/c'); 
// 简化为-> http://www.baidu.com/a/b/c
// resolve('http://www.baidu.com', 'a/../c'); 
// 简化为-> http://www.baidu.com/c
// resolve('http://www.baidu.com/1/2', 'a/.././c'); 
// 简化为-> http://www.baidu.com/1/2/c

function resolve(baseUrl: string, moduleId: string){
    let stack = [baseUrl]
    let arr = moduleId.split('/');
    arr.map(i=>{
        if(i ==''||i=='.'){

        }else if(i=='..'&&stack.length==1){

        } else if(i=='..'&&stack.length>1){
            stack.pop()
        }else(
            stack.push(i)
        )
    })
    return stack.join('/')
}
