/*
  Odev 1:
  Asagidaki fonksiyonu "Hello, John ciktisi verecek sekilde duzenleyiniz."
 */
var person = {
  name: "John",
  message: function () {
    console.log("Hello, " + this.name)
  }
}

person.message();
//var messageFunc = person.message
//messageFunc();
/*
messageFunc.call(person);
bu sekilde de this atamasiyla cagirabiliriz.

*/
// burada person.message'i var degiskeniyle globalde bir seye tanimladigimiz icin global scope'dan global = window oldugu icin hello window ciktisi aliriz bunu duzeltmek icin cikti direkt olarak person.message kullanilarak alinabilir.


/*  
  Odev 2:
  Asagidaki fonksiyonu sirasiyla 
  20
  40
  60
  sonuclarini yazdiracak sekilde duzenleyiniz.
*/
var numbers = {
  numbers: [[10, 20, 30], 2],
  multiply: function () {
    this.numbers[0].map(function (number, numberIndex) {
      const result = number * this.numbers[1];
      console.log(result)
    }.bind(this))
  }
};
/*
burada iki farkli yontemle bu ciktiyi alabiliriz bunlar bind kullanimi ile Explicit binding digeri ise arrow function.
*/
numbers.multiply();


/* 
  Odev 3:
  Asagidaki isValidName fonksiyonunda bir isim validasyonu yaziniz.
  Ipucu: Verilen arguman gecerli bir isim ise true degilse false donmeli
  Ornek : isValidName("John") true donmeli
  Ornek : isValidName(" J ohn") false donmeli
*/
function isValidName(name) {
  var a = ' zahit ';
  var trimmedA = a.trim();
  var divideBySpaces = trimmedA.split("");

  var count = 0;
  for(var i = 0; i < divideBySpaces.length; ++i){
    if(divideBySpaces[i] == ' ')
        count++;       
}
  if (count > 0) {
    console.log(count == '0');
  }else {
    console.log(count == '0');
/* 
burada if else kullanimina gerek var mi emin olamadim ama kullanmak istedim
*/
}
}

/*
  Odev 4:
  Asagidaki katilimSaati fonksionu 2 arguman almaktadir.
  dersSayisi: ogrencinin katildigi ders sayisi
  dersSaati: her bir dersin dakika cinsinden suresi
  katilimSaati fonkisyonu kac derse gerilidigi ve her bir dersin kac dakika surdugu bilgisini alip sonuc olarak toplamda kac dakika derse girildigini donmelidir.
  - iki arguman de number veya string olarak verilebilir.
  - Sayi olmayan ya da sayiya cevrilemeyen argumanlar var ise hata donulmelidir.
  Ornek: katilimSaati(3, 30) 90 sonucunu vermelidir.
  Ornek: katilimSaati("3", 20) 60 sonucunu vermelidir.
  Ornek: katilimSaati("5", "30") 150 sonucunu vermelidir.
*/
/*
Burada sayiya cevirilebilecek kisminda bir anlasmazliga dustugum icin boyle bir kontrol mekanizmasi olusturmaya calistim.
*/
function katilimSaati(dersSayisi, dersSuresi) {
     const katilim = dersSayisi  * dersSuresi;
        if (isNaN(katilim)){
       console.log("lutfen sayiya cevirilebilecek bir arguman giriniz.")
       
     }else{
 
      switch (dersSayisi){
          case undefined:
            console.log("lutfen sayiya cevirilebilecek bir arguman giriniz.");
            break;
          case null:
            console.log("lutfen sayiya cevirilebilecek bir arguman giriniz.");
            break;
          case '':
            console.log("lutfen sayiya cevirilebilecek bir arguman giriniz.");
            break;
          case true:
            console.log("lutfen sayiya cevirilebilecek bir arguman giriniz.");
            break;
          case false:
            console.log("lutfen sayiya cevirilebilecek bir arguman giriniz.");
            break;
          default:
            switch (dersSuresi){
              case undefined:
                console.log("lutfen sayiya cevirilebilecek bir arguman giriniz.");
                break;
              case null:
                console.log("lutfen sayiya cevirilebilecek bir arguman giriniz.");
                break;
              case '':
                console.log("lutfen sayiya cevirilebilecek bir arguman giriniz.");
                break;
              case true:
                console.log("lutfen sayiya cevirilebilecek bir arguman giriniz.");
                break;
              case false:
                 console.log("lutfen sayiya cevirilebilecek bir arguman giriniz.");
                 break;
              default:
                 console.log(`Toplam katildiginiz ders saati: ${katilim}` );
                } 
           break;
           }
     }
}
katilimSaati(3,20);

