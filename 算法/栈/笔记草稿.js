// 题目
// 薯队长写了一篇笔记草稿，请你帮忙输出最后内容。
// 1.输入字符包括，"(" , ")" 和 "<"和其他字符。
// 2.其他字符表示笔记内容。
// 3.()之间表示注释内容，任何字符都无效。 括号保证成对出现。
// 4."<"表示退格, 删去前面一个笔记内容字符。括号不受"<"影响 。

// 输入
// Corona(Trump)USA<<<Virus
// 输出
// CoronaVirus

function note(code = String()){
    let stack = [];
    let a = code.replace(/(\(\w+\))/g,'');
    let arr = a.split('');
    arr.map(i=>{
        if(i==='<'){
            stack.pop()
        }else{
            stack.push(i)
        }
    })
    return stack.join('')
}
note('Corona(Trump)USA<<<Virus')