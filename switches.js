const color = 'yellow';

switch(color){ // if else gibi ama daha kolay yazımı var. Yazım stili biraz farklı. birden fazla durum kontrol edilecekse switch kullanılması önerilir.
  case 'red':
    console.log('Color is red');
    break; // true dönerse çalışmayı durdur.
  case 'blue':
    console.log('Color is blue');
    break;
  default: // ikisi de seçilmezse dönecek cevap.
    console.log('Color is not red or blue');
    break;
}

let day;

switch(new Date().getDay()){ // gün değeri 0'dan 6'ya kadar bir değer olarak döneceği için switchle en kolay şekilde gün isimlerine çevrilebilir.
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

console.log(`Today is ${day}`);