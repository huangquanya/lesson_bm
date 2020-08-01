
// 165. 比较版本号
// 比较两个版本号 version1 和 version2。
// 如果 version1 > version2 返回 1，如果 version1 < version2 返回 -1， 除此之外返回 0。

// 你可以假设版本字符串非空，并且只包含数字和 . 字符。

//  . 字符不代表小数点，而是用于分隔数字序列。

// 例如，2.5 不是“两个半”，也不是“差一半到三”，而是第二版中的第五个小版本。

// 你可以假设版本号的每一级的默认修订版号为 0。例如，版本号 3.4 的第一级（大版本）和第二级（小版本）修订号分别为 3 和 4。其第三级和第四级修订号均为 0。
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.split('.').map(_=>+_)
    let v2 = version2.split('.').map(_=>+_)
    let len1 = v1.length,len2 = v2.length;
    if(len1 > len2){
        while(v2.length!==len1){v2.push(0)}
    }
    if(len2 > len1){
        while(v1.length!==len2){v1.push(0)}
    }
    for(let i = 0;i<v1.length; i++){
        if(v1[i]>v2[i]){return 1}
        if(v1[i]<v2[i]){return -1}
    }
    return 0
};