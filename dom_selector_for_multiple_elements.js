// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items); // collection-item classının içerisindekileri yazdır.
// console.log(items[0]); 
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item'); // yukarıdakiyle aynı çalışır, listItems'ları documandaki ul etiketlerini getir, collection item classındaki. Yukarıdaki collection-item classındaki tüm ifadeleri çekerken bu sadece ul etiketlerini çeker.

// console.log(listItems);

// document.getElementsByTagName // yin yukarıdakiler gibi çalışır, bunun mantığı direkt tagleri çekmek.
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // Conver HTML Collection into array
// lis = Array.from(lis); // HTML collections array olmadığı için array methotlarını kullanabilmemiz için arraye çevirmemiz gerekir.

// lis.reverse();

// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

// document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
}


console.log(items);
