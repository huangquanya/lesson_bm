// js es6 class 关键字 面向对象
const UUID = require('uuid');//引入第三方库
class Wallet {
    // 属性和方法组成
    constructor() {//构造函数里声明
        this._id = UUID.v1().replace(/-/g,'');//命名规则_表示私有变量
        //创建时间不能改
        this._createTime = + new Date();//类型转换
        // 余额怎么设计？
        this._balabce = 0;// 余额 设计成私有的属性

        // console.log('欢迎使用支付宝钱包');
        // 设计支付宝用的钱包，  几十亿人都在用的
        // 手机号159569122
        // 数字货币的概念 比特币，
        // 1. 唯一 id  autocrement  node，绝不会重复
        
    }
    getCreatTime() {
        return this._createTime;
    }
    setCreateTime() {
        throw new Error('创建时间不能修改')
    }
    getBalance() {
        return this._balabce;
    }
    increaseBalance(increasedAmount) {//
        console.log('多了'+increasedAmount)
        this._balabce += increasedAmount; 
    }
    decreaseBalance(decreaseAmount) {
        this._balabce -= decreaseAmount;
    }
    getId() {
        return this._id;
    }
    setId() {
        throw new Error('私有属性_id 不可以修改')
    }
}

const zzwWallet = new Wallet(); //实例化
console.log(zzwWallet.getBalance());
zzwWallet.increaseBalance(10.0);
zzwWallet.decreaseBalance(8.1);
console.log(zzwWallet.getBalance().toFixed(2));
// console.log(zzwWallet.getCreatTime());
console.log(zzwWallet.getId());
// console.log(zzwWallet.setId());
// zzwWallet._id = '12212'; //id 属性只读， 但不能修改
// console.log(zzwWallet._id); // id 是zzwWallet 的public 属性
//实例化
// zzwWallet.id = ''; id属性只读不能修改
// console.log(zzwWallet.id); id是zzwWallet的public属性