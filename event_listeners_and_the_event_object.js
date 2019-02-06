// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');
//event listenerda il önce selector gerekli, selector'le seçip funktionları tanımlayacağız.
//   //e.preventDefault(); // bununla butondaki href i etsizi braktı ve hello world kaldı.
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  //console.log('Clicked');

  let val;

  val = e;

  // Event target element
  val = e.target; // tıkladığımızda targetin elementini verir.
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY; // butona tıkladığımız Y koordinatını verir, butonun değil click'in gerçekleştirildiği yer. Heat map gibi.
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}