 // The Variable Swap
let a = "3";
let b = "8";
let temporary = a;
a = b;
b = temporary;
// a = b;
// b = a;  - 
/*ასე ვიფიქრე, მაგრამ არ გამოდის. მჭირდება რაღაც ახალი ცვლადი, 
 რომლითაც "ა"-ს მნიშვნელობას რაღაცნაირად შევინახავ, "დავბლოკავ" და 
 მერე "ა"-ს მივანიჭებ "ბ"-ს მნიშვნელობას (ანუ ა გახდება 8), 
ბოლოს კი"ბ"-ს მივანიჭებ იმ ახალ ცვლადს რომლითაც "ა" შევინახე, "დავბლოკე" ( ანუ ბ გახდება 3):დდ */
console.log("a არის " + a);
console.log("b არის " + b);

 // Twitter Character Counter
let usertext = prompt("შექმენით პაროლი");
let usedsymbols = usertext.length;
let allsymbols = 12 - usedsymbols;
alert("თქვენ გამოიყენეთ " + usedsymbols + " სიმბოლო, დარჩენილია " + allsymbols + " სიმბოლო");
console.log("თქვენ გამოიყენეთ " + usedsymbols + " სიმბოლო, დარჩენილია " + allsymbols + " სიმბოლო");

 //   Capitalize Your Name

 const userName = prompt("your name");

 let firstletter = userName.slice(0, 1).toUpperCase();
 let lastletters = userName.slice(1).toLowerCase();
 let lastname = firstletter + lastletters;
 console.log("Hello  " + lastname);