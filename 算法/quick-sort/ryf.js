const qs = (arr) => {
    if (arr.length <= 1)return arr;
    let left = [];
    let right = [];
    let provit = arr[0]
    for(let i = 1; i <arr.length; i++) {
        if(arr[i] < provit){
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }
    return [...qs(left),provit,...qs(right)]
}
const arr = [0, 1, -1, 3, 99, 5, 0]

console.log(qs(arr));
