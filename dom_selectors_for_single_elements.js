// document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5')); // birden fazla h5 elemanı varsa ilkini çeker.

document.querySelector('li').style.color = 'red'; // birden fazla li elementleri olsada da sadece ilkininkinin rengini kırmızı yapar.
document.querySelector('ul li').style.color = 'blue'; // Bu da aynı şekilde ul elementlinin içindeki ilk li elementinin rengini blue yapar.

document.querySelector('li:last-child').style.color = 'red'; // li elementlerinin içerisindeki en sonuncusunun rengini kırmızı yapar.
document.querySelector('li:nth-child(3)').style.color = 'yellow'; // Dizideki gibi değil üçüncü li elementini çeker ve rengini sarı yapar.
document.querySelector('li:nth-child(4)').textContent = 'Hello World'; // dördüncü li elementinin textini hello world yapar.
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';




