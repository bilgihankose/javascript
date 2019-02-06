//traverse means basically move up and down.

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child'); // collection-item'daki li elementinin ilk elemanını seçer.

val = listItem; // ilk li elementini getirecek.
val = list; // ul clasını getirecek.

// Get child nodes
val = list.childNodes; //li elemanlarını getirecek (Unutma eğer tagler arasında boşluk bırakıldıysa text olarak da childNotes getirecektir.) Bunlardan kurtulmak için childNodes yerine children kullanabilirsin.
val = list.childNodes[0]; // boşluk varsa text döndürecektir.
val = list.childNodes[0].nodeName; // aynı şekilde boşluk varsa text döndürecektir.
val = list.childNodes[3].nodeType;  // aşağıda bu type değerinin neler verdiğini açıklıyor. Ama anlamadım.

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes
val = list.children;
val = list.children[1];// list te bulunan ikinci elemanı getirir.
list.children[1].textContent = 'Hello'; // list te bulunan ikinci elemandaki textcontenti hello olarak çevirir.
// Children of children
list.children[3].children[0].id = 'test-link';  // listin içerisindeki dördüncü elemanın, ilk children'ının id'sini test-link yap.
val = list.children[3].children[0];

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);