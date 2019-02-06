// set local storage item
// localStorage.setItem('name', 'John'); // localStorage'a key olarak name value olarak John yazar.
// localStorage.setItem('age', '30'); 

// set session storage item
// sessionStorage.setItem('name', 'Beth'); // bu da sessionStarage e aynısını yapar.

// remove from storage
// localStorage.removeItem('name'); // localStorage'ten name ve value kısmını siler

// get from storage
// const name = localStorage.getItem('name'); //localStorage'tan name'in value bilgisini çeker.
// const age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear(); // localStorage'taki bilgileri siler.

// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value; // task id'li elemenlerin value bilgisini task değişkenine atar.

  let tasks;

  if(localStorage.getItem('tasks') === null) { // tasks arrayinin içerisinde hiçbir şey yoksa
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks')); //json formatına çevirmezsek string olarak alır değerleri.
  }

  tasks.push(task); // eğer bunu yapmasaydık kaydedilen veriler her zaman üzerine yazacaktı bu yüzden yukarıda, bir array olarak tanımladık.

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');

  e.preventDefault(); // default davranışlarını durdur gibi bir şey demek.
});

const tasks = JSON.parse(localStorage.getItem('tasks')); //jsona çevirmeseydik gene hata alacaktık. 

tasks.forEach(function(task){
  console.log(task);
});