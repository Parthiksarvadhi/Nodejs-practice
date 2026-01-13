// /// that is tredictional commoon module system

import { rejects } from "node:assert";
import { resolve } from "node:dns";

// // console.log('hello')
//  const {data}=require('./math')
//  //console .log(abc(10,20))
// ///****** we can not use same module sysyem in one file  */

// // import { display , name } from './print.js';
// // console.log(display())
//  console.log(data())

// // import {data} from './fs-module.js';
// // console.log(data);
// let arr=[10,20,30,40,50,'string',true]
// const names = arr.map(u => u + 10);
//  console.log(names);

// console.time('testtime');

//   console.log(arr.filter(u => typeof u === 'number'));
//    console.log(arr.reduce((a, b) => (typeof b === 'number' ? a + b : a), 0));
//    console.log(arr.indexOf(20));
//    console.log(arr.slice(1,4));
//    console.log(arr.splice(2,2,86868,7678,8,88,8,8,88));
//    console.log(arr);

// let obj={age:22,company:'sarvadhisolution'};
// console.log(obj.name ?? 'No name provided');
// // if(obj.key==name){
// //     return true
// // }else return false

// const users = [
//     { id: 1, name: 'Alice', role: 'Admin' },
//     { id: 2, name: 'Bob', role: 'User' }
// ];
// console.table(users);
// console.timeEnd('testtime');    


const obj1={
    name:'rohit',
    age:22,
    greet(){
        return `hello my name is ${this.name}`;
    }
}
console.log(obj1);
console.log(obj1.greet());


class Service {
  constructor(name) {
    this.name = name;
  }

  
}
function run(n) {
    console.log(n);
  }
const s = new Service('AuthService');

run("5376453645343378"); // AuthService


const practice_promise=new Promise((resolve,reject)=>{
    let a=20;
    if(a==10){
        resolve('promise resolved');    
    }
    else{
        reject('promise rejected');
    }
})

practice_promise.then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
});

