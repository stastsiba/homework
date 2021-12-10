//1
//let arr = [1,33,456,986,122]
//найти суму квадратов всех значений масива (reduce)

//2
//let arr = [ 'Tanita', 'Vasyl', 'George', 'Stepan']
//получить массив вида: [ 'My name is Tanita','My name is Vasyl', и тд... ] использовать map

//3
//написать функцию которая будет принимать входным параметром массив
//и переставит в нем елементы так что в начале массива будут только цифры а в конце только строки

//let arr =[2, 6, 7, "a", "b", "q"]

// function sortTheArray(someArray){
//     // ваш код
// }
// sortTheArray(["b", 6, "a", "q", 7, 2])


// let arr = [1,899,456,66,122]
//
// let sum = arr.reduce((acc, cur) => {
//     console.log(acc)
//     return {
//         ...acc,
//         [cur]:cur
//     }
// },{})
//
//
// for(let i = 0;i<=arr.length;i++){
//
// }
//
// console.log(sum)

// let arr = [ 'Tanita', 'Vasyl', 'George', 'Stepan']

// let newArr = arr.map(arrItem => {
//     return 'My name is' + ' ' + arrItem
// })

// console.log(newArr)





//1
//let arr = [1,33,456,986,122]
//найти суму квадратов всех значений масива (reduce)
//2
//let arr = [ 'Tanita', 'Vasyl', 'George', 'Stepan']
//получить массив вида: [ 'My name is Tanita','My name is Vasyl', и тд... ] использовать map
//3
//написать функцию которая будет принимать входным параметром массив
//и переставит в нем елементы так что в начале массива будут только цифры а в конце только строки
//
//let arr =[2, 6, 7, "a", "b", "q"]
// function sortTheArray(someArray){
//     // ваш код
// }
//
// sortTheArray(["b", 6, "a", "q", 7, 2])



// Home work
// 1.
let arr = [ 'Tanita', 'Vasyl', 'George', 'Stepan'];

let result = arr.map(function (item){
    return `My name is ${item}`;
});



// 2
let arr = [ 1, 33, 456, 986, 122, ];
let result = arr.reduce(function ( previousValue, item,){
    return item * item + previousValue;
})


//3
let arr = ["b", 6, "a", "q", 7, 2];
let someArray = [];

function sortTheArray() {
    for(let i = 0; i < arr.length; i++){
        if ( typeof arr[i] === 'string'){
            someArray.push(arr[i]);
        } else if ( typeof arr[i] === 'number'){
            someArray.unshift(arr[i])
        }
    }

    for(let i = 0; i < someArray.length; i++ ) {
        for(let j = i; j < someArray.length; j++) {
            if (someArray[i] > someArray[j]) {
                let temp = someArray[i];

                someArray[i] = someArray[j];
                someArray[j] = temp;
            }
        }
    }
}
sortTheArray(someArray);

//Home work #2

// 1
for (let i = 4; i <= 400; i++) {
    console.log(i);
}

//2
for (let i = 4; i <= 13; i += 3 ){
    console.log(i);
}

//3
for(let i = 654; i >= 0; i-- ){
    console.log(i);
}


//4
for (let i = 1983; i <= 2017; i++) {
    console.log(i);
}


//5
for (let i = -4; i <= 100; i += 2) {
    console.log(i);
}


//6
for (let i = 7; i <= 63; i += 7) {
    console.log(i);
}


//7
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum = sum + i;
}



//8
let sum = 1;
for (let i = 1; i <= 50; i++) {
    sum = sum * i;
}
