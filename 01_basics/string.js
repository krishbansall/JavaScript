const name = "Krish Bansal"
console.log(`Hello my name is ${name}`);

const GameName = new String('krish bansal')

console.log(GameName.__proto__);

console.log(GameName.length);
console.log(GameName.toUpperCase());
console.log(GameName.toLocaleUpperCase());
console.log(GameName.charAt(2));
console.log(GameName.indexOf('b'));

const newString = GameName.substring(0,5);
console.log(newString);

const anotherString = GameName.slice(6,12);
console.log(anotherString);

const newStringOne = "    Krish   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const name1 = "Krish  Bansal"
console.log(name1.replace('Bansal','-'));
console.log(name1.includes('Krish'));


