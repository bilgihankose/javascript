// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2'); // h2 adında bir etiket oluşturur.
// Add id
newHeading.id = 'task-title'; // oluşturduğumuz elemente task-title adında bir id atar.
// New text node
newHeading.appendChild(document.createTextNode('Task List')); //  oluşturduğumuz elementin text nodu'unu Task List olarak ayarlar.

// Get the old heading
const oldHeading = document.getElementById('task-title');  //bu kısmı anlamadım.
//Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li'); // tüm li elementlerini seçer
const list = document.querySelector('ul'); // tüm ul elementini seçer.

// Remove list item
lis[0].remove(); //li elementlerinden ilkini sil.

// Remove child element
list.removeChild(lis[3]); // 4.sıradaki li elementini siler.

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);

