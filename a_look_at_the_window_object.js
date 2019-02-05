// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
//alert('Hello World'); // bunun yerine DOM kullanarak (güzel bir botstrap kullanarak) güzel bir alarm çıkarılabilir. Bu baya eski bir tasarım.

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

let val;

// Outter height and width
val = window.outerHeight; // Browserı komple ölçüleri gibi düşün.
val = window.outerWidth;

// Inner height and width
val = window.innerHeight; // console vs açıksa sadece gözüken kısmı alıyor.
val = window.innerWidth;

// Scroll points
val = window.scrollY; // animasyon göstermek istediğinde kullanılabilir.
val = window.scrollX;

// Location Object
val = window.location; //Komple location objesini almış oluruz.
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
//window.location.href = 'http://google.com';
//Reload
//window.location.reload();

// History Object

// window.history.go(-2); // this will actually bring us back to whereever we cam from, and we can do negative one to go back to the site before this negative two to gobefore that.
// val = window.history.length;

// Navigator Object //Browserın kendi özelliklerini verir.
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;



console.log(val);
