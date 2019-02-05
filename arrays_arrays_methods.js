// Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers); //true or false döner. DOM için kullanışlı oluyor. Test için kullanılabilir. Böylelikle arraye çevirebilirsin eğer ihtiyacın olursa.
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100; // arrayde bulunan üçüncü eleman 100'le değişir.
// Find index of value
val = numbers.indexOf(36); // seçilen array elemanının sırasını verir.

// MUTATING ARRAYS
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1,3); //ilk eleman nereden başladığını ikinci elemanda nerede sonlandığı belirtir. Ona göre çıkartma yapar.
// // Reverse
// numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2); //numbers dizisine numbers2 dizisindeki elemanları da ekler.

// Sorting arrays
val = fruit.sort(); // alfabetik olarak ekledi.
// val = numbers.sort(); // number tipinde bu yemiyor. aşağıdaki gibi düzenlenmesi gerekiyor.

// // Use the "compare function"
// val = numbers.sort(function(x, y){
//   return x - y; //bu kısmı anlamadım.
// });

// // Reverse sort
// val = numbers.sort(function(x, y){
//   return y - x;
// });

// Find
function over50(num){
  return num > 50;
}

val = numbers.find(over50); //50den büyük olan ilk dizi elemanını getiriyor. Ne için kullanıldığını anlamadım.

console.log(numbers);
console.log(val);
