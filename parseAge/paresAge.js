function paresAge(age) {
    if(!age ) {
        return console.error(`age is not define`);
    }
    newAge = Number(age)
    if(newAge == NaN) {
        return console.error(`${age}is not a number`);
    }
    if(newAge > 150)return console.error(`${age}is not a right number`);
    console.log(Math.floor(newAge)+'1111')
    return Math.floor(newAge)
}
paresAge('q1q')