const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val =  'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3); // negatif değer verilirse örneğin -3 sondan üç harfi alır. slice ve substring çok benzer.

// split()
val = str.split(' ');
val = tags.split(','); //commayla ayrılanları arraye çeviriyor.

// replace()
val = str.replace('Brad', 'Jack'); //Brad gördüğün yere Jack yaz.

// includes()
val = str.includes('foo'); //içeriyor mu içermiyor mu true ya da false döndürür.

console.log(val);
