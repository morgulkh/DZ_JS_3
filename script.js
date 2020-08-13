'use strict';
//1
let arr1 = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
const count = arr1.length;
let sum = 0;
let j = 0;
for (let i = 0; i < count; i++) {
    j = +arr1[i];
    if (isNaN(j)) {
        continue;
    }
    sum += j;
}
alert(sum);

//2
let n = 7;
let arr2 = Array(n);
let randomNumber = 0;
for (let i = 0; i < n; i++) {
    randomNumber = Math.random().toFixed(2);
    arr2[i] = randomNumber;
}
let randomNumberPow = 0;
let powNumber = 5;
for (let i = 0; i < n; i++) {
    randomNumber = arr2[i];
    randomNumberPow = randomNumber;
    for (let j = 2; j <= powNumber; j++) {
        randomNumberPow *= randomNumber;
    }
    console.log(randomNumberPow);
}

//3
let arr3 = ['AngularJS', 'jQuery'];
arr3.unshift('Backbone.js');
arr3.push('ReactJS', 'Vue.js');
arr3.splice(2, 0, 'CommonJS');
let i = arr3.indexOf('jQuery');
alert(`Это здесь лишнее - ${arr3.splice(i,1)}`);

//4
let str1 = 'Как однажды Жак звонарь сломал фонарь головой';
let arr4 = str1.split(' ');
const elem1 = 'однажды';
const ix3 = arr4.indexOf(elem1);
arr4.splice(ix3, 1);
const ix4 = arr4.indexOf('звонарь') + 1;
const arrNew = [...arr4.slice(0, ix4), elem1, ...arr4.slice(ix4)];
const ix1 = arrNew.indexOf('фонарь');
const ix2 = arrNew.indexOf('головой');
let temp = arrNew[ix2];
arrNew[ix2] = arrNew[ix1];
arrNew[ix1] = temp;
let str2 = arrNew.join(' ');
alert(`исходный вариант ${str1}\r\nрезультат ${str2}`);

//5
let person = {
    firstName : 'Ivan',
    lastName : 'Ivanov',
    age : 150,
    position : 'developer',
    location : 'Kharkiv'
};
let propName = prompt('задайте на английском имя свойства');
if (propName in person) {
    alert(`person's ${propName} is ${person[propName]}`);
} else {
    let propValue = prompt('задайте на английском значение свойства');
    person[propName] = propValue;
}
console.log(person);

//6
let phoneModel = {
    brand: '',
    model: '',
    resolution: '',
    color: '',
    price: ''
};
for (propName in phoneModel) {
    phoneModel[propName] = prompt(`Enter phone's ${propName} value`);
}
person.phoneModel = phoneModel;
console.log(person);

//7
let date1 = new Date();
let date2 = new Date();
let date2Mscs = date2.getTime() - (365 * 24 * 60 * 60 * 1000);
date2.setTime(date2Mscs);
let dates = {
    date1 : date1,
    date2 : date2
};
let dateStr = prompt('задайте дату', 'yyyy-MM-dd');
let date3 = new Date(dateStr);
if ((dates.date1.getTime() >= date3.getTime()) && (date3.getTime() >= dates.date2.getTime())) {
    alert(`${date3} находится в диапазоне`);
} else {
    alert(`${date3} находится вне диапазона`);
}

//8
let arr6 = [];
n = 3;
let num = 0;
for (let i = 0; i < n; i++) {
    num = +prompt('введите число');
    arr6.push(num);
}
let sum6 = arr6.reduce((accumulator, currentValue) => {return (accumulator + currentValue);});
alert(`sum is ${sum6}`);

//9
let arr9 = Array(10);
let subArr = null;
i = 0;
j = 0;
let result = 0;
for (i = 1; i < 11; i++) {
    subArr = Array(10);
    for (j = 1; j < 11; j++) {
        result = (i) * (j);
        subArr[j-1] = `${i}x${j}=${result}`;
    }
    arr9[i-1] = subArr;
}
console.log(arr9);

//10
let img = {
    src : "https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    alt : "",
    style : {
        border: "1px solid #ccc"
    },
    width : "200"
};