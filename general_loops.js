// FOR LOOP

// for(let i = 0; i < 10; i++){ //loop için her zaman let tanımla, çünkü içerideki değişken sürekli değişecek.
//   if(i === 2){
//     console.log('2 is my favorite number'); // burada yapılan şey tüm döngülerde yapılabilir.
//     continue; // sıradaki şart sağlayana kadar loopa devam et, yani buradaki continue methodu bu adımı yaptıktan sonra geç demek gibi bir şey. Burada Number 0, Number 1, 2 is my fovarite number, Number 3 olarak ilerler.
//   }

//   if(i === 5){
//     console.log('Stop the loop');
//     break; //tahmin edilebileceği gibi burada bırak demek. ...Number 3, Number 4, Stop the loop
//   }

//   console.log('Number '+ i);
// }

// WHILE LOOP //for loop'unun ne kadar süreceğini bilebilirsin, ancak while loopunu ne zaman kullanacağını bilemediğin durumlarda kullanılır.

// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// DO WHILE

// let i = 100;

// do { // bu sorgu her zaman devam edecektir. Ne olduğu fark etmeksizin. WHile daki şarta göre duracak ya da devam edecek.
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

// FOREACH
// cars.forEach(function(car, index, array){ // bunun kullanılması öneriliyor. If you are trying to loop through an array.
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

// MAP
// const users  = [ // user bilgileri içieren bir array oluşturuldu.
//   {id: 1, name:'John'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Karen'},
//   {id: 4, name: 'Steve'}
// ];

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);


// FOR IN LOOP
const user = {
  firstName: 'John', 
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}