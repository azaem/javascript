// ARRAY - МАССИВ
// НОБОР,КОЛЛЕКЦИЯ ДАННЫХ


// [1,"qwerty",true , undefined, null , {}, []]
// let arr = [10,"gwerty",true,undefined,null]
// arr [6]="6"
// arr [5] = "5"
// arr [0] = "100"
// console.log(arr)
//
// let newArr = new Array(12)
// // console.log(newArr)
// console.log(arr.push())
// // pop - акыркы элементти чыгарат
// console.log(arr.pop())
// // shift -биринчи елементти чыгарат
// console.log(arr.shift())
// // unshift
// console.log(arr.unshift())

// // map ()
// let arr = [12, true, [5], false]
// let arr2 = arr.map(function (el) {
//     return el ** 0
// })
// console.log(arr2)
//
// let a = [12, 12, 34, 67, 89, 12, '12', '10', '99']
// const sub = (a) => {
//     return a.map(function (el) {
//         if (typeof el === 'number') {
//             return el.toString()
//         } else {
//             return parseInt(el)
//         }
//     })
// }
// console.log(sub(a))
//
// //
// let secondArr = new Array(100).fill(0).map(function (el, index) {
//     return el + index + 1
// })
// console.log(secondArr)
//
// let res = secondArr.map(function (el){
//     if (el % 2 === 0){
//         return el * 2
//     }else {
//         return el
//     }
// })
// console.log(res)

// // 1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// let s = ['a', 'b', 'c']
// s.push('1,2,3')
// console.log(s"-1")


// 2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// const object1 = [1,2,3]
// const object2 = [4,5,6]
// console.log(object1.concat(object2))

// 3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let s = [1, 2, 3]
// s.push( 4, 5, 6)
// console.log(s)
// 4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let s = [1, 2, 3]
// s.unshift( 4, 5, 6)
// console.log(s)

// 5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// let str =  ['js', 'css', 'jq']
// console.log(str[0])


// 6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// let str =  ['js', 'css', 'jq']
// console.log(str.[str.length-1]'6')
// 7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// let a = [1, 2, 3, 4, 5]
// console.log(a. slice(0,3))

// 8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// let a = [1, 2, 3, 4, 5]
// console.log(a.slice(3))

// 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// let a = [1, 2, 3, 4, 5]
// a.splice(1,2)
// console.log(a)
// // 10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// let a = [1, 2, 3, 4, 5]
// let d = a.splice(1,3)
// console.log(d)
// 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let a = [1, 2, 3, 4, 5]
// a.splice(3,0,'a', 'b', 'c')
// console.log(a)
// 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let ger = [1, 2, 3, 4, 5]
// ger.splice(1, 'a', 'b', 2, 3, 4, 'c', 5, 'e')
// console.log(ger  )
// 13  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
// let f = [3, 4, 1, 2, 7]
// let sortedArr = f.sort(function (a,b){
//     return a -b
// })
// console.log(sortedArr,"13")
// let fruit = ['арбуз' 'банан' 'вишня']
//
// let sortedSymbol = fruit.sort((a,b) =>{
//     return a.toLowerCase() > b.toLowerCase()? 1: -1
// })
// console.log(sortedArr)
// 14 биринчи элемент кайтарып берет
// var array = [1,2,3,4,5,6,7,8,9];
//
// function getFirst(array) {
//     return array [0]
//
// };
// 15 акыркы элемент кайтарып берет
// var array = [1,2,3,4,5,6,7,8,9];
//
// function getLast(array, n) {
//    return array[array length -1
// };
// map ()
// let arr = [1,2,3,4,5]
// let daub = arr.map(function (el){
//     return el + el
// })
// console.log(daub)
//
// let  secondArr = [false,false,false,false]
// console.log(secondArr.map(el)=>{
//
// })

// let arr3 = [15,3,46,93,56,34]
// let sorted_arr = arr3.sort((a,b)=>a-b)
// console.log(sorted_arr)
//
// let symbols = ['ban','alma', 'fep']
// let sortedSymbols = symbols.sort((a,b)=> a>b ? 1: -1)
// console.log(sortedSymbols)
//
// const colors = [
//     "AliceBlue",
//     "AntiqueWhite",
//     "Aqua",
//     "Aquamarine",
//     "Azure",
//     "Beige",
//     "Bisque",
//     "Black",
//     "BlanchedAlmond",
//     "Blue",
//     "BlueViolet",
//     "Brown",
//     "BurlyWood",
//     "CadetBlue",
//     "Chartreuse",
//     "Chocolate",
//     "Coral",
//     "CornflowerBlue",
//     "Cornsilk",
//     "Crimson",
//     "Cyan",
//     "DarkBlue",
//     "DarkCyan",
//     "DarkGoldenRod",
//     "DarkGray",
//     "DarkGrey",
//     "DarkGreen",
//     "DarkKhaki",
//     "DarkMagenta",
//     "DarkOliveGreen",
//     "DarkOrange",
//     "DarkOrchid",
//     "DarkRed",
//     "DarkSalmon",
//     "DarkSeaGreen",
//     "DarkSlateBlue",
//     "DarkSlateGray",
//     "DarkSlateGrey",
//     "DarkTurquoise",
//     "DarkViolet",
//     "DeepPink",
//     "DeepSkyBlue",
//     "DimGray",
//     "DimGrey",
//     "DodgerBlue",
//     "FireBrick",
//     "FloralWhite",
//     "ForestGreen",
//     "Fuchsia",
//     "Gainsboro",
//     "GhostWhite",
//     "Gold",
//     "GoldenRod",
//     "Gray",
//     "Grey",
//     "Green",
//     "GreenYellow",
//     "HoneyDew",
//     "HotPink",
//     "IndianRed",
//     "Indigo",
// ]
//
// let selected_colors = colors.filter((el) =>{
//     return el.includes('r')
// })
// console.log(selected_colors)
//
//
//
// let numbers = new Array(100).fill(0).map(function (el, index) {
//     return el + index + 1
// })
// console.log(numbers.filter(function (el){
//     return el % 2 === 0
// }))
//     let expenses = [100,200,5000,1500]
//
// let total = expenses.reduce((acc,cur,,)=>{
//     console.log(acc,'-acc')
//     console.log(cur,'cur')
//     if (cur % 8 === 0){
//         return acc + cur
//     }else {
//         return acc
//     }
// } ,0)
// console.log(total)
// Во всех задачах используйте только методы map, reduce.
// 1. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму этих чисел.
// let arr = [5,15,315,2,13,20,9]
// let result = arr.reduce((a, b)=> {
//     return a + b
// })
// console.log(result)
// 2. Вам дан массив с числами [5,12,314,2,13,20,9]. Найдите сумму всех четных чисел.
// let nums = [5,12,314,2,13,20,9]
// let symOfEven = nums.reduce((a,b)=>{
//     if (b% 2 === 0){
//         return a+b
//     }else {
//         return a++++++
//     }
// },0)
// console.log(symOfEven)
// 3. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму чисел, которые больше 10.
// let sumOften = nums.reduce((acc,el)=>{
//     if (el>10){
//         return acc + el
//     }else {
//         return acc
//     }
// },0)
// console.log(sumOften)
// 4. Вам дан массив с числами [3,13,54,15,335, 39]. Найдите разность чисел, которые больше 10.
// let hut = nums.reduce((acc,el)=>{
//     if (el> 10){
//         return acc - el
//     }else {
//         return acc
//     }
// },0)
// console.log(hut)
// 5. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Сложите все строки и выведите длину результата.
// let names = ['Аскар', 'Баяман', 'Калмамат']
// //
// let len= names.reduce((acc,el)=>{
//     return acc + el
// },"").length
// console.log(len)
// let len
// 6. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите все строки в верхнем регистре, используя map.
// let upperName = names
// 7. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите все вторые строки в верхнем регистре.
// 8. Напишите функцию, которая принимает str, target. И возвращает true или false, если targer присутствует в str. Использовать .reduce для этого.
//     Пример: isPresent ('abcd', 'b') => true
// isPresent ('ef', 'a') // => false
// 9. Вам дан массив с строками ['асКар', 'бЯяман', 'калМмамат']. Используйте заглавные буквы в каждом массиве имен.
// let secondName = ['асКар', 'бЯяман', 'калМмамат']
// console.log( secondName.map(el =>{
//     return el[0].toUpperCase() + el.slice(1).toLowerCase()
//     }))
//     Пример: (["john", "JACOB", "jinGleHeimer", "schmidt"])), => ["John", "Jacob", "Jingleheimer", "Schmidt"]
// 10. Вам дан массив со строками ['Баяман', 'Калмамат']. Поменяйте местами первые буквы строк.
// let a = ['Баяман', 'Калмамат']
//
// function getName (a){
//     return a.map(el,idx) =>
// }
// 11. Вам дан массив [true, '1234', 325]. Напишите функцию, которая проверяет, все ли элементы массива относятся к одному типу данных.
// 12. Вам дана строка 'тестинг'. Ваша задача - вернуть средний символ слова. Если длина слова нечетная, верните средний символ. Если длина слова четная, вернуть 2 средних символа.
// function test(word){
//     if (word.length % 2 === 0){
//         return word[Math.floor(word.length/2)]
//     }else
// }
// console.log(test('тестинг'))
// 13. Вам дан массив с числами [5, -3, 13, -7, 45]. Верните сумму всех положительных чисел.

// 14. Вам дан массив с числами [5, -54, 13, -7, 45, -15, -34]. Верните сумму всех отрицательных чисел, которые больше -10.
// const nums = [5, -54, 13, -7, 45, -15, -34]
// const str = nums.reduce((acc,el)=>{
//     if (el > -10) {
//         return acc
//     } else {
//         return  acc+= el
//     }
// })
// console.log(str)

// 15. Вам дан массив с числами [1, 65, 13 , 30, 100] - все числа - доллары. Вам нужно обменять эти доллары по курсу сома и вывести все числа в сомах.
// let arr = [1, 65, 13 , 30, 100]
// function task15(arr){
//     let som = 85
//     return arr.map(el => {
//         return el * som
//     })
// }
//
// console.log(task15(arr))
// 16. Вам дан массив со строками ['Lorem ipsum dor sit omet devour il ela sit']. Выведите каждый нечетный индекс в строке в верхнем регистре.
// let string ='Lorem ipsum dor sit omet devour il ela sit'
// function upper (string){
//     string =string.split('')
//     console.log(string)
// return string .map((el,idx)=>{
//     if (idx % 2 !== 0){
//         return el.toUpperCase()
//     }else {
//         return el.toLowerCase()
//     }
// }).join('')
// }
//
// console.log(upper(string))
// 17. Вам дан массив с строками ['Оскар', 'Баяман', 'Калмамат']. Добавьте к каждой строке нумерацию.
// let n =  ['Оскар', 'Баяман', 'Калмамат']
// function numerate(names){
//     return names.map((el,idx) => {
//         return idx + el
//     })
//
// }
// console.log(numerate(n))
// 18. Вам дан массив с числами [2,456,6,8]. Напишите функцию , которая вставляет дефис (-) между каждыми двумя четными числами. Например, если вы принимаете 025468, на выходе должно быть 0-254-6-8.
// let numbers = [2,456,6,8]
// console.log(numbers.map((el)=>{
//     if (el % ===0){
//         return '-'+ el
//     }
// }).join(''))
// 20. Вам дан массив с числами [5,15,315,2,13,20,9]. Посчитайте среднее арифметическое чисел в массиве.
// let str1 = [5,15,315,2,13,20,9]
// function ver(ter){
//     return  Math.floor(ter.reduce((acc,el)=>{
//         return acc + el
//     }) /str1.length)
// }
//
// console.log(ver(str1))
// 1. Вам дан массив: [315, 64, 75, 43, 65, 63].Найдите сумму каждого числа.
// let ar =  [315, 64, 75, 43, 65, 63]
// let dau = ar.map(function (el){
//     return el + el
// })
// console.log(dau)
// 2. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат'].
// Создайте функцию, изменяющую букву а в каждом имени на я и выведите в консоль.
// 1)
// let k = ['Аскар', 'Баяман', 'Калмамат']
// const change = (name) => {
//     return name.map(el =>{
//         return el.split('').map(el => {
//             if(el.toLowerCase() === 'а'){
//                 return 'а'
//             } else return  el
//         }).join('')
//     })
// }
// console.log(change(k))

// 2)
const thirdWay = (name)=>{
    return name.map()
}
// 3. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, которая выводит только те имена, где есть буква к и выведите в консоль.
// const  name = ['Аскар', 'Баяман', 'Калмамат']
// let name2 = name.filter((el) =>{
//     return el.toLowerCase().includes('к')
// })
// console.log(name2)
// 4. Вам дан массив: [4, 54, 49]. Сделайте из него массив, состоящий из квадратов этих чисел.
// let  n =  [4, 54, 49]
// function numerate(names){
//     return names.map((el, idx) => {
//         return el * el
//     })
// }
// console.log(numerate(n))
// 5. Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.
// let d = [3134, 4, -143, -245, -214]

// 6. Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа.

// 7. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// const task7 =(name)=>{
//     return name .filter(el => {
//         return el.length > 5
//     })
// }
// console.log(task7(['Бегимай', 'Баяман', 'Калмамат'])
// // 8. Вам дан массив [-13, 96, -41, -28, 40]. Посчитайте количество отрицательных чисел в этом массиве.
// let  task8 =  [-13, 96, -41, -28, 40]
// let arr8 = task8.filter((el)=>{
//     return el < 8
// }).length
// console.log(task8)
// 9. Вам дан массив [3, 51, -30, -54, 60].
// Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел, если эти числа больше 30.
// let  s= [3, 51, -30, -54, 60]
//
// function positive(s){
//     return s.filter(el =>{
//         return el > 30
//     }).map(el => Math.floor(Math.sgrt(el)))
// }
//
// console.log(positive(s))
// 10. Вам дан массив [55, 44, 55, 44, 15, 49].
// Оставьте в нем только неповторяющиеся числа.
// let f =  [55, 44, 55, 44, 15, 49]
//
//  function get(arr){
//     return arr.filter(el =>{
//         return arr.indexOf(el) === arr.lastIndexOf(el)
//     })
//  }
//
// console.log(get(f))

// 11. Вам дан массив [NaN, 0, 77, false, -17, '',undefined, 99, null].
// let l = [NaN, 0, 77, false, -17, '',undefined, 99, null]
//
// console.log(l.filter((el => el)))
// Создайте функцию, которая очищает массив от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустая строка).
// 12. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки.
// let x = ['Бегимай', 'Баяман', 'Калмамат']
// console.log(x.map(el => el.length))
//
// function people(old){
//     if (old < 14){
//         return "drink toddy"
//     }else if (old < 18 && old >=14){
//         return 'Teens drink coke.'
//     }else if (old < 21 && old >= 18){
//         return 'Young adults drink beer.'
//     }else{
//         return 'Adults drink whisky.'
//     }
// }
// //
// console.log(people(20))
// let nums =[1 + 2 + 3 + 4 + 5 + 6 + 7 + 8]
// let symOfEven = nums.reduce((a,b)=>{
//     if (b% 2 === 0){
//         return a+b
//     }else {
//         return a ++
//     }
// },0)
// console.log(symOfEven)
//
// function rama (a,b){
//     if (a > b){
//         return a % b
//     }else if (b > a){
//         return b % a
//     }else return NaN
// }


// function find_average(array) {
//     if (array.length === 0){
//     return 0
//     }else {
//         return array.reduce((acc,cur)=>{
//             return acc + cur
//         }) /array.length
//     }
//
// }
//
// console.log(find_average([1,2,3,4]))
// //
//
// function findLongest(str) (
//
// let spl = str.split(" ");
// let longest = 0
//
// for (let i = 0; i > spl.length; i+) (
// if (spl(i).length > longest) {
//     longest = spl[i].length
// )
// }
// return longest
// )
//////////////////////////////////////////////////////////////////////////20.11.2021 субота \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// 8 тип данных  js

// primitive

// number
// string
// boolean
// null
// undefined
// symbol
// bigint
// let a = 12
// a=20
// let b =100
// a = b
// сылочный.complex tupe

// Object

// Mutable,мутируйуший
{
}
// let user = {
//     name : "azm",
//     age : 19,
//     city:"bishkek",
//     email: "aaza92384@gmail.com",
//     spouse : undefined,
//     friends :["kut","ship"],
//     hobby : ["football","hockey"],
//     job:{
// developer:"fronted",
//         teacher:"full-stack",
//         nanny:{
//     toddler:"1 to 5",
//             elderly: "over 60"
//         }
//     },
//     "born in city":"osh"
// }

// delete
// Object.freeze-коштурбайт дагы, удалит дагы кылбайт
// обектин ичиндеги маанисин озгортууго жол бербейт болбойт

// let car4 ={
//     model: "Mercedes",
//     year: 2021,
//     v: "5.5",
// }
// const car = {
//     model: "audi r8",
//     year: 2021,
//     v: "5.5",
//     weight:"2000kg",
//     speed:"350km/h",
//     speedUp:"1,5s"
//
// }
// let car2 = {...car}
//
// // глубокойе копирование-деп койот
// let car3 =Object.assign({},car4,car2)
// let car5 =Object.assign(car4,car2)
//
// console.log(car3)
// console.log(car4)
//


// car.model ="BWM"
// let car2 = {...car}
// car.model= "tesla"
// console.log(car)
// console.log(car2)

// console.log(user.hobby[0])
// console.log(user["born in city"])
//.
// //[""]
// let hobbies = user.hobby.map((el,idx)=> el + idx)
// console.log(hobbies)

// object.keys()
// console.log(objec.keys(user).length)

// object.values()


// console.log(object.values(user))

// object,entries() ---- баарын чогу чыгарат 2 тен
// console.log(object.entries(user)
/////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// console.log(Object.keys(obj).length)


// 2. Создайте объект obj = {a: 1, b: 2, c: 3}.
// Выведите на экран элемент с ключом 'c' двумя способами:
// через квадратные скобки и как свойство объекта.
// //
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// let obj2 = ["a: 1, b: 2, c: 3"]
// console.log(obj)
// console.log(obj2)


// 3. Создайте объект заработных плат
// obj = {Ширин: '1000', Айжан:'500', Атай: '200'};
// Выведите на экран зарплату Атая и Ширин.

// let obj = {
//     Shirin: '1000',
//     Ayjhan:'500',
//     Atay: '200'
// }
// console.log(obj.Atay)
// console.log(obj.Shirin)

// 4. Создайте объект заработных плат obj =
// {Ширин: '1000', Айжан:'500', Атай: '200'}.
// Измените зарплату Атая на 500.
//
// let obj = {
//     Shirin: '1000',
//     Ayjhan:'500',
//     Atay: '200'
// }
// obj.Atay = '500'
// console.log(obj)


// 5. Создайте объект заработных плат obj =
// {Ширин: '1000', Айжан:'500', Атай: '200'}.
// Добавьте к объекту ключ Медет со значением 1500.
//
// let obj = {
//     Shirin: '1000',
//     Ayjhan:'500',
//     Atay: '200',
// }
// console.log(obj)
// 6. Создайте объект заработных плат
// obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Выведите значение ключа salary в консоль.

// let obj = {
//     Shirin: '1000',
//     Ayjhan:'500',
//     Atay: {salary: '500'}
// }
// console.log(obj.Atay.salary)


// 7. Создайте объект с днями недели.
// Ключами в нем должны служить номера дней от начала недели
// (понедельник - первый и т.д.). Выведите на экран текущий день недели.
// let d = 7
// let week = {
  // 1:  'monday',
    // 2:'tuesday',
    //  3:'wednesday',
    //  4:'thursday',
    // 5: 'friday',
    //  6:'saturday',
    // 7:'sunday',
// }
// console.log(week.[d])
//

// 8. Пусть теперь номер дня недели хранится в переменной day,
// например там лежит число 3. Выведите день недели,
// соответствующий значению переменной day.

// let day = {
//     1: 'monday',
//     2: 'tuesday',
//     3: 'wednesday',
//     4: 'thursday',
//     5: 'friday',
//     6: 'saturday',
//     7: 'sunday'
// }
// console.log(day["1"])


// 9. Создайте объект заработных плат obj =
// {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Получите все ключи объекта.
// //
// let obj = {
// //     Shirin: '1000',
// //     Ayjhan:'500',
// //     Atay: {salary: '500'}
// // }
// console.log(Object.entries(obj))


// 10. Создайте объект заработных плат obj =
// {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Получите все значения объекта.

// let obj = {
//     Shirin: '1000',
//     Ayjhan:'500',
//     Atay: {salary: '500'}
// }
// console.log(obj.Atay.salary)
// console.log(obj.Shirin)
// console.log(obj.Ayjhan)


// 11. Создайте объект заработных плат obj =
// {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Выведите все entries объекта.

// let obj = {
//     Shirin: '1000',
//     Ayjhan:'500',
//     Atay: {salary: '500'}
// }
// console.log(Object.entries(obj))


// 12. Создайте функцию, передайте в нее объект{name: 'Igor'}.
// Выведите 1, если длина ключа name нечетная, 0 если четная.
// let obj = {name: 'Igor'}
// function find (obj) {
//     return obj
// }


// 13. Создайте функцию, передайте в нее массив с объектами
// [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ].
// Выведите все id в консоль через map.
//
// let fjd = [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ]
// console.log(fjd.map(el => Object.keys()))
// console.log(fun)
//

// 14. Создайте функцию, передайте в нее объект {name: 'Igor'}.
// Добавьте новый ключ age со значением 25.
// Поменяйте значение name на Azat.

// function  name(a){
//     return{
//         name: a,
//         age: 25,
//     }
// }
//
// console.log(name( a,"igor"))
// 15. Вам дан объект product = {
//     name: "headphones",
//     price: 100,
//     discount: 0
// }.
// Найдите стоимость объекта с ценой, и если она больше 100,
// снизьте ее на 10%. Если это не так, сделайте скидку на 7%. Обновите объект.
//
// let product = {
//     name: "headphones",
//     price: 100,
//     discount: 0
// }
// if (product.price > 100){
//     product.discount = product.price / 100 * 10
//     product.price = product.price - product.discount
//
// }else {
//     product.discount = product.price / 100 * 7
//     product.price = product.price - product.discount
//
// }
// console.log(product)
// let todos = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut autem",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "quis ut nam facilis et officia qui",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "fugiat veniam minus",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 4,
//         "title": "et porro tempora",
//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 5,
//         "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 6,
//         "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 7,
//         "title": "illo expedita consequatur quia in",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 8,
//         "title": "quo adipisci enim quam ut ab",
//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 9,
//         "title": "molestiae perspiciatis ipsa",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 10,
//         "title": "illo est ratione doloremque quia maiores aut",
//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 11,
//         "title": "vero rerum temporibus dolor",
//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 12,
//         "title": "ipsa repellendus fugit nisi",
//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 13,
//         "title": "et doloremque nulla",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 14,
//         "title": "repellendus sunt dolores architecto voluptatum",
//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 15,
//         "title": "ab voluptatum amet voluptas",
//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 16,
//         "title": "accusamus eos facilis sint et aut voluptatem",
//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 17,
//         "title": "quo laboriosam deleniti aut qui",
//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 18,
//         "title": "dolorum est consequatur ea mollitia in culpa",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 19,
//         "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 20,
//         "title": "ullam nobis libero sapiente ad optio sint",
//         "completed": true
//     },
//     {
//         "userId": 2,
//         "id": 21,
//         "title": "suscipit repellat esse quibusdam voluptatem incidunt",
//         "completed": false
//     },
//     {
//         "userId": 2,
//         "id": 22,
//         "title": "distinctio vitae autem nihil ut molestias quo",
//         "completed": true
//     },
//     {
//         "userId": 2,
//         "id": 23,
//         "title": "et itaque necessitatibus maxime molestiae qui quas velit",
//         "completed": false
//     },
//     {
//         "userId": 2,
//         "id": 24,
//         "title": "adipisci non ad dicta qui amet quaerat doloribus ea",
//         "completed": false
//     },
//     {
//         "userId": 2,
//         "id": 25,
//         "title": "voluptas quo tenetur perspiciatis explicabo natus",
//         "completed": true
//     },
//     id ===25
// title : "Hello javascript"

//
// console.log(todos.map(el =>{
//     if (el.id === 25){
//         return{...el, title: "Hello javascript"}
//     }else {
//         return el
//     }
// }))
//
// console.log(todos)
//     Задание 1
//     Напишите функцию, которая принимает массив и возвращает наименьшее число в массиве.
//         Пример входных данных: [3, 7,34, 2]
// let arr =  [3, 7,34, 2]
//     console.log(Math.min(...arr))
//
// Задание 2
// Напишите функцию, которая принимает строку и возвращает строку в алфавитном порядке.
//
//     Пример входных данных: "Hello"
// Результат: "ehllo"
// let str = "Hello",
//     let sortedString = str.toLowerCase().split("").sort((a,b)=>{
//         return a > b > b ? 1 : -1
//     })
//     console.log(sortedString)

// Задание 3
// Напишите функцию, которая принимает массив чисел и возвращает массив только с четными числами.
//
//     Пример входных данных: [1, 2, 3, 4, 5, 6]
// Результат: [2, 4, 6]
// let str = [1, 2, 3, 4, 5, 6]
// console.log(str.filter(el => {
//     return el % 2 === 0
// }))
// Задание 4
// Напишите функцию, которая принимает массив чисел значений и возвращает только числовые данные.
//
//     Пример входных данных: ['text', 3, 7, 'github', 13, 'dev'] Результат: [3, 7, 13]
// let date = ['text', 3, 7, 'github', 13, 'dev']  [3, 7,13]
// console.log( date.filter(el => {
//     return typeof  el === "number"
// }))
// Задание 5
// Напишите функцию, которая принимает массив и возвращает:
//
//     Минимальный элемент
//
// Максимальный элемент
//
// Длину массива
//
// Среднее арифметическое
//
// Ответ должен быть в виде массива
//
// Пример входных данных: [7, 13, 3, 77, 100]
// Результат: [ 3, 100, 5, 40 ]
// let r =  [7, 13, 3, 77, 100]
// const task5 = ( arr)=> {
//     let min = Math.min(...arr)
//     let max = Math.max(...arr)
//     let len = arr.length
//     let aver = arr.reduce((acc,el)=>{
//         return acc + el
//     })/ arr.length
//     return [min,max,len,aver]
// }
// console.log(task5(r))
// Задание 6
// Напишите функцию, которая принимает строку и повторяем каждый ее символ 2 раза.
//     Пример входных данных: "test"
// Результат: "tteesstt"
// let test = "test"
// console.log(test.split().map(el=> el))
// Задание 7
// Напишите функцию, которая принимает массив объектов и возвращает массив с пользователями, возраст которых старше 18
//
// Пример входных данных:
//
//     const persons = [
//         {name: 'Ivan', age: 27},
//         {name: 'Petya', age: 16},
//         {name: 'Erbol', age: 15},
//         {name: 'Aktai', age: 46},
//     ]
//
// function  person (obj){
//     let filter = persons.filter(el =>{
//         return el.age > 18
//     })
// return filter.map(el => el.name)
// }
//
// console.log(person(persons))
// Результат: Ivan, Aktai
// Задание 9
// Напишите функцию, которая принимает массив чисел и возвращает первое четное число.
//     Пример входных данных: [5, 7, 33, 88, 92]
// Результат: 88
// let wer =  [5, 7, 33, 88, 92]
// console.log(wer.filter(el => el % 2 === 0))
// // find ---искать
// let found = wer.find(el => {
//     return el % 2 === 0
// })
// console.log(found)
// Задание 10
// Напишите функцию, которая принимает массив с объектами и возвращает возраст самого взрослого человека
//
// Пример входных данных:
//
//     const people= [
//         {name: 'Ivan', age: 27},
//         {name: 'Petya', age: 16},
//         {name: 'Dima', age: 24}
//     ]
// let oldest = people.reduce((acc,el)=>{
//     return acc.age > el.age ? acc : el
// })
// console.log(oldest)
// // Результат: 27
// // reverse --- алмаштырат  массивде гана иштейт
// function solution (str) {
// str = str.split ("")
//     return str.reverse().join()
//
// }
//
// console.log(solution("world"))
//
//
// // Anagram --- эки создун окшош тамгаларын айтабыз
// const isAnagram = function(test, original) {
//     test = test.split("").sort((a,b)=> a > b  ? 1: -1).join("")
//         original = original.split("").sort((a,b)=> a > b  ? 1: -1).join("")
//     return test === original
// };
// console.log(isAnagram("talas","ralat"))
//
//
//     function isPalindrome(line) {
//         let test = line.toLowerCase().split("").reverse().join("")
//         return line.toLowerCase() === test
//     }
//
//     console.log(isPalindrome("anna"))
/////////////////////////////////////////////////// ЦИКЛ\ 27/11/2021 cб/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// const myFunc = () => {
//     console.log("hi javaScript")
// }
// for (let i = 0;i < 10;i++){
//     myFunc()
// }
//
// let arr = []
// for (let i = 1;i <= 50; i++){
//     arr.push(i)
// }
// console.log(arr)

// for (let i = 0; i <= 20;i++){
//     if (i % 2 === 0){
//         console.log(i)
//     }
// }
// for (let i = 1; i <= 50;i++){
//     if (i % 2 !== 0){
//         console.log(i)
//     }
// }
//
// let e = 0
// for(let i = 0; i <= 50; i++) {
//     e += i
// }
// console.log(e)
//
// let array= [10,30,40,30,50]
// let second = 0
// for (let i = 0;i < array.length; i++){
//     second +=array[i]
// }
// console.log(second,"second")
// let str = "javascript"
// let result =''
// for ( let i= 0;i < str.length;i++){
//     console.log(str[i])
//     if (i % 2 ===0){
//         result += str[i].toLowerCase()
//     }else {
//         result += str[i].toLowerCase()
//     }
// }
// console.log(result)
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ home work //////////////////////////////////////////////////////
// 1. Выведите столбец чисел от 1 до 50.
// for (let i = 0;i < 50;i++){
//     console.log(i)
// }
// 2. Создайте переменную с пустым массивом, заполните массив 10-ю элементами X с помощью цикла.
// let arr = []
// for (let i = 0; i < 10;i++){
//     arr.push('x')
// }
// console.log(arr)

// 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. С помощью цикла for выведите все эти элементы в консоль.
// let arr1 = [5,3,1,2,7,]
// for (let i = 0; i < arr1.length;i++){
//     console.log(arr1[1])
// }
// 4. Вам дан массив с элементами [5, 2, 1, 2]. С помощью цикла for найдите произведение элементов этого массива.
// let str =[5, 2, 1, 2]
// let sum = 1
// for (let i = 0;i < str.length;i++){
//     sum *= str[i]
// }
// console.log(sum)
// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.
// for (let i = 0; i <= 100; i++){
//     if (i % 2 === 0){
//         console.log(i)
//     }
// }

// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.
// result = 0
// for (let i = 0; i <= 100; i++){
//     result += i
// }
// console.log(result)
// 7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
// let res =  [2, 4, 5, 6, 8]
// let sum = 0
//
// for (let i = 0;i < res.length;i++){
//     sum += res[i]
// }
// console.log(sum)

// 8. Вам дан массив [3, 4, 6, 12, 3, 5].
// С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
//     let arr = [3, 4, 6, 12, 3, 5]
// console.log(arr[0])
// for (let i = 0; i < arr.length;i++){
//     if(arr[i] > 3 && arr [i] < 10){
//         console.log(arr[i])
//     }
// }

// 9. Вам дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
// let arr =[10,20,12,-20,-3,-4,20,34]
// let result = 0
// for (let i = 0; i < arr.length;i++){
//     if (arr[i] > 0){
//         // result += arr[i]
//     result = result + arr[i]
//     }
// }
// console.log(result)
// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением,
// равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
// let arr = [5, 4, 3, 7, 6, 15, 3, 20]
// for (let i = 0 ; i < arr.length;i++){
//     if (arr[i]===4){
//         console.log(true)
//     }
// }

// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 40, 135, 2000]
//
// for (let i = 0; i < arr.length; i++)
//     if (+arr[i].toString()[0] === 1 || +arr[i].toString()[0] === 2 || +arr [i].toString()[0] === 5) {
//     console.log(arr[i])
// }
// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
// let arr =[1, 2, 3, 4, 5, 6, 7, 8, 9]
// let res =""
// for (let i = 0; i < arr.length; i++){
// res = res + "-" + numbers[i]
// }
// console.log(arr + "-")
// 13. Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
//
// let i =0
// for(let n = 1000; n > 50; n= n/2){
//     i++
//     console.log(n)
// }
// console.log(i)

// let s= 0
// let n = 1000
// while (n > 50){
//     n = n/2
//     s++
// }
// console.log(s)
    // 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).

// let arr =[1, 2, 3, 7, 6, 9]
// let sum = 0
// for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum/arr.length.)
// 15. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла найдите сумму квадратов элементов этого массива.
// let arr =[1, 2, 3, 7, 6, 9]
//
// for(let i = 0; i < arr.length; i++) {
//     arr[i]+= arr[i] ** 2
// }
// console.log(arr)
// 16. Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
// let arr4 =[]
// for (let i = 0; i <= 10;i++){
//     let random = () =>{
//         return Math.floor(Math.random()*10 +1)
//     }
//     arr4[i] = random()
// }
// console.log(arr4)
// 17. Создайте переменную с пустым массивом, заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.round(Math.random() * 10) + 1);
// }
// console.log(arr);
// 18. Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000.
// let sum = 0
//  for (let i = 0; i < 1000; i++){
//      if (i % 3 === 0 && i % 5 === 0){
//          sum += i
//          console.log(sum
//          )
//      }
//  }
// console.log(sum)

// 19. Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].Создайте цикл, который выводит нечетные числа, которые больше 10.
// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
// for (let i = 0;i < arr.length; i++){
//     if ( i % 2 === 0){
//         if ( i > 10){
//             console.log(arr[i])
//         }
//     }
// }
// 20. Вам дана строка 'jzvzszrzpz'. Измените каждую вторую букву на верхний регистр.
// let arr = 'jzvzszrzpz'
// let str = ''
//
// for (let  i = 0; i < arr.length; i++){
//     if (i % 2 === 0){
//         str += arr.toLowerCase()
//     }else {
//         str += arr [i].toLowerCase()
//     }
//
// }
// console.log(str)
////////////////////////////////////////////// while/01.12.2021/среда\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// let n = 10
//  while (n > 2){
//     n--
//      console.log(n)
//  }
//  while (n < 100){
//     n++
//      console.log(n)
//  }
//
//  let arr = [1,2,3,4,5,6,7,8,0,23,4,5,6,7,6]
//
// for ( let i = 0;i < arr.length; i++){
//     if (arr[i] === 0){
//         break
//     }
//     console.log(arr[i],"break")
// }
//
// for ( let i = 0;i < arr.length; i++){
//     if (arr[i] === 0){
//       continue
//     }
//     console.log(arr[i],"continue")
// }
//
// for ( let i = 0;i < 20; i++){
//     if (i === 13 || i  === 4){
//       continue
//     }
//     console.log(arr[i])
// }
// 0 / 100
//
// let res = 0
// while (res < 100){
//     res++
//     if (res % 3 === 0 || res % 5 ===0){
//         continue
//     }
//     console.log(res)
// }
// for ( let i = 0;i < 100; i++){
//     if (i % 3 === 0 || i  === 0){
//       continue
//     }
//     console.log([i])
// }

////////////////////////////////////////////////////////////// RECURSION --- РЕУРСИЯ/04.12.2021.CБ\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////////////////////////////////////////////////////CURRYING ----КАРРИРОВАНИЕ\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// function faktorial(n){
//    if (n > 1){
//        return n * faktorial(n-1)
//    }
//    return 1
// }
//
// console.log(faktorial(2))
//
// function whileFact (num){
//     let f = 1
//     let i = 1
//
//     while (i <= num){
//         f = f * i
//         i ++
//         console.log(f, "-f", i,"-i")
//     }
//     return f
//
// }
//
// console.log(whileFact(5))

// function secondFactorial(number){
//     let result = 1
    // 5
    //20
    //60
    //120
//     for( let i = number; i > 1; i--){
//         result *= i
//     }
//     return result
// }
//
// console.log(secondFactorial(5))


// const fact = (num)=> {
//     let res = 1
//     if (num > 1){
//         for(let i = 1; i <= num; i++){
//             res *= i
//         }
//     }
//     return res
// }
// console.log(fact(6))

/////////////////////////////// КАРРИРОВАНИЕ

// CURRYING - функция башка.
//  const sum = a => b=> c => a+ b+c

// function  sum (a){
//     return(b)=>{
//         return (c) =>{
//             return a + b+c
//         }
//     }
// }
//
// console.log(sum(12)(2)(2))

//     function webLink (protocol){
//         return function (www){
//         return function (name){
//             return function (domain){
//               return   `${protocol}://${www}.${name}.${domain}`
//             }
//         }
//     }
//
//
// }
//
// console.log(webLink("https")("www")("google")("com"))
// let arr = [2,4,30,50,55,80,100,101]
//     function max(arr){
//     return Math.max(...arr)
// }
//
// console.log(max(arr))
//
// function min(arr){
//     return Math.min(...arr)
// }
//
// console.log(min(arr))
//
//
// // reduce
//
// function  ret(arr){
//     return arr.reduce((acc,el)=>{
//         return acc > el ? acc : el
//     })
// }
//
// console.log(ret(arr))
//
//
// function min(arr){
//     return arr.reduce((acc,el)=>{
//         return acc > el ? el : acc
//     })
//
// }
//
// console.log(min(arr))
//
// function greatest (arr){
//     let max = arr [0]
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > max){
//             max = arr [i]
//             console.log(max,"max",arr[i],"arr[i]")
//         }
//     }
//     return max
// }
//
// console.log(greatest(arr))


//  FIBONACCI---ФИБОНОЧИ
//
// const fibo = (n) => {
//     return n <= 0 ? 1 : fibo(n-1)+fibo(n-2)
// }
// console.log(fibo(5))
//
// function fib(n){
//     let a = 0
//     let b = 1
//     for (let i = 0; i < n; i++){
//         let c = a + b
//         console.log(a,"-a",b,"b",)
//         a = b
//         b =c
//     }
//     return n === 1 ? a:b
// }
//
// console.log(fib(7))
///////////////////codewars\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// function find(str){
//
//     str = str.split(" ").map(el => el.length)
//     return str.reduce((acc,el)=>{
//         console.log(acc,el)
//         return acc > el ? acc : el
//     })
// }
//
// console.log(find('There will only be one \'longest\' word.'))
//
// function create_phone_number(numbers){
//     return numbers.reduce((p,c)=>p.replace('x',c),"(xxx) xxx-xxxx")
//
// function ntr(n) {
//     let a = 0
//     let b = 1
//     for (let i = 3; i <= n; i++) {
//         let c = a + b
//         a = b
//         b = c
//     }
//     return n === 1 ? a:b
// }
//
// console.log(ntr(2))
//
//  const  ef = n =>
//      Math.round(((1+5 ** 5)/2)** --n / 5 ** 5)
// function match(candidate, job){
//
// }

////////////////////////////////////////////////////This.08.12.2021.cр\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// this --указываеть на тело родителского элемента

// у срелочный функции нету контекс
//контекс тело родителского элемента
//
// let obj1 ={
//     hello: function (){
//         console.log('hello world');
//         return this;
//     },
//     obj2:{
//         breed:'dog',
//         speak : () => {
//             console.log('woof')
//             return this
//         }
//     }
// }
// console.log(obj1.hello())
// console.log(obj1.obj2.speak())
//
// function sayHello (){
//     console.log(this)
// }
// sayHello()
// //
// const person = {
//     name : "aza",
//     age : "19",
//     greeting : sayHello,
//     logInfo: function (job,phone){
//         console.log('Name is ${this.name}')
//         console.log('age is $ {this.age}')
//         console.log('job is ${job}')
//         console.log('phone is $ {phone}')
//     }
// }
// person.logInfo("developer,0999026492")
// person.logInfo("bus,0707346855")
// person.greeting()
//
// const secondPerson ={
//     name: "aza",
//     age:20
// }
// // привязка кантекста 3
// //  1) call
// //  2) apply
// //  3) bind
//
// console.log(person.greeting.bind(secondPerson))
//
// const fnSecondPerson = person.greeting.bind(secondPerson)
// fnSecondPerson ()
//
// person.greeting.apply(secondPerson)
// person.greeting.call(secondPerson)
//
// person.logInfo.bind(secondPerson)("full-stak devoloper","0999026492")
// // person.logInfo.apply(thirdPerson,["bacend devoloper","0999026492"])
// // person.logInfo.call(thirdPerson,"bacend devoloper","0999026492")
//
// /////////////////////////////////////////// ЗАМЫКАНИЕ/ CLOSURE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// // это когда функция внутри другой функции имеет доступ к внешним переменнымб или же локальным переменным
//
// function init (){
//     const name = "Azem"
//     function innerFunc(){
//         console.log(name)
//     }
//     innerFunc()
// }
//
// init()
//
//
// function Maneger(){
//     const fw = ['angular','React']
//
//     return{
//         print: function (){
//             console.log(fw)
//         },
//         add: function (framework){
//             fw.push(framework)
//         }
//     }
// }
//
// let second = Maneger()
//
// second.add("Vue.js")
// second.print()
//
//
// function sayHi(name){
//     const massage="Hello" + name
//     function myFunc(){
//         console.log(massage)
//     }
//     myFunc()
// }
//
// sayHi(" aza")
//
// function sayHello(name){
//     const massage = "Hello"+ name
//     return function (){
//         console.log(massage)
//     }
// }
//
// let askar = sayHello(" aza")
// askar()
//////////////////////ДЕСТРУКТУРИЗАЦИЯ.СРЕДА\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let numbers =[1,2,3,4,5,6,7]
// const [one,twq,three, ...nums]=numbers
// console.log(one)
// console.log(nums)
//
// let [firstName,lastHame,...rest]="урий,цезар,император,рима".split(" ")
// console.log(firstName)
// console.log(lastHame)
// console.log(rest)

 /// OBJECTS
// const cakes = (flavor,fruit)=>{
//     let cake ={flavor:flavor,fruit:fruit}
//     console.log(cake)
// }
// cakes("medovik","chocolate")
//
// const user = {
//     name:"adilet",
//     age:20
// }
//
//
// const {name:fullHame,age:fullAge}= user
// const {name,age}= user
// console.log(fullHame,fullAge)
//
//
// let person =true
// if (person === true){
//     console.log("hello")
// }
