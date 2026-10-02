const numbers = [1,2,3,4,5]
const even = numbers.map(value => value * 2)

console.log(numbers)
console.log(even)
// ----------------------------------------

const number = [5,10,15,20]
const ret = number.map(value => value * 5 )

console.log(number)
console.log(ret)
// ===========================================
const names = ["ali","sara","zain"]

const result = names.map(name => name.toUpperCase())

console.log(result);
// ==========================================

const num = [1,2,3,4,5,6,]

const evens = number.filter(number => number % 2 ===0)

console.log(num);
console.log(evens);

// ===================================

const numb = [5, 12, 8, 20, 3, 15];
const update = numb.filter(numb => numb > 10)

console.log(numb)
console.log(update)

// ===========================================

const Name = ["Ali", "Ahmed", "Sara", "Usman", "John"];
const updateName = Name.filter(Name => Name.length > 4)

console.log(Name)
console.log(updateName)

// ===================================

const Numbers = [2, 6, 8, 3, 10];
const updatenumber =Numbers.filter(Numbers => Numbers > 5) .map(Numbers => Numbers * 2);

console.log(updatenumber)