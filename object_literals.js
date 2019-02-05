const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2017 - this.age;
  }
}

let val;

val = person;
// Get specific value
val = person.firstName; //person değişkeninden spesifik bir değeri çekmek istiyorsak.
val = person['lastName']; //person değişkeninden spesifik bir değeri çekmek istiyorsak. Bu şekilde de yapılabilir.
val = person.age;
val = person.hobbies[1]; //hobileri içerisindeki 2. elemanı getirir.
val = person.address.state; //adress objesindeki state değerini döndür.
val = person.address['city'];
val = person.getBirthYear(); //person objesindeki getBirthYear fonksiyonuna ata.

console.log(val);

//array tanımlamanın bir başka yolu
const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 40}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name); //burada for döngüsüyle dizideki tüm name tanımlamalarını tek tek getiriyor.
}