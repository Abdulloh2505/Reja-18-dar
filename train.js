// /*console.log("Daniyelni maslaxatlari");

// const list = [
//   "yaxshi uquvchi va talaba buling", //0-20
//   "uzingiz ustingizda ishlang va uzingiz uchun investitsiya qiling", //20-30
//   "mustaqil ishlaydigan korxonaga sababchi buling", //30-40
//   "yangi loyixalaringiz ustida shugullaning", //40-50
//   "jamgarmalaringizni kupaytiring", //50-60
//   "endi dam olsangiz buladi bundan keyingi harakatlar befoyda", //60+
// ];
 
//  function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("iltimos raqam yozing");
//   else if (a <= 20) return( list[0]);
//   else if (a > 20 && a <= 30)return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else 
//  { setInterval(function (){
//     callback(null,list[5]);
//  }, 1000)
// }
// }
// console.log("passed here 0");
// maslahatBering(70, (err,data) =>{
//     if (err) console.log("ERROR",err);
//     else{
//         console.log(data);
//     }
// })


// //async

//  /*async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("iltimos raqam yozing");
//   else if (a <= 20) return( list[0]);
//   else if (a > 20 && a <= 30)return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else 
//   {
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//        resolve(list[5]);
//         },5000);
        

//     });
//   }


    
// }*/
// /*console.log("passed here 0");

//  maslahatBering(26).then(data =>{
//  console.log('javob:',data);
//  }).catch(err =>{
//   console.log("ERROR",err);
//  });
//  console.log("passed here 1");*/

// //run();*/


// /*function countLetter(letter, text) {
//   let count = 0
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === letter) {
//       count = count + 1
//     }
//   }
//   return count
// }

// // Misol:
// console.log(countLetter("e", "engineer"))

// console.log("Train script ishga tushdi!");
// */
// //b task
// // function countDigits(str) {
// //     let count = 0;
// //     for (let i = 0; i < str.length; i++) {
// //         if (str[i] >= '0' && str[i] <= '9') {
// //             count++;
// //         }
// //     }
// //     return count;
// // }

// // // Test
// // console.log(countDigits("ad2a54y79wet0sfgb9")); // Natija: 7


// //TASK-c
// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   // Vaqtni buyicha
//   getTime() {
//     const now = new Date();
//     const soat = now.getHours().toString().padStart(2, "0");
//     const minut = now.getMinutes().toString().padStart(2, "0");
//     return `Hozir ${soat}:${minut}da`;
//   }

//   // Qoldiqni ko'rsatadi
//   qoldiq() {
//     console.log(
//       `${this.getTime()} ${this.non}ta non, ${this.lagmon}ta lag'mon va ${this.cola}ta cola mavjud`
//     );
//   }

//   // Mahsulot sotish
//   sotish(nomi, soni) {
//     if (this[nomi] !== undefined) {
//       this[nomi] -= soni;
//       if (this[nomi] < 0) this[nomi] = 0;
//       console.log(`${this.getTime()} ${soni}ta ${nomi} sotildi`);
//     } else {
//       console.log(`${this.getTime()} ${nomi} mahsuloti mavjud emas`);
//     }
//   }

//   // Mahsulot qabul qilish
//   qabul(nomi, soni) {
//     if (this[nomi] !== undefined) {
//       this[nomi] += soni;
//       console.log(`${this.getTime()} ${soni}ta ${nomi} qabul qilindi`);
//     } else {
//       console.log(`${this.getTime()} ${nomi} mahsuloti mavjud emas`);
//     }
//   }
// }

// // ✅ Test qilish:
// const shop = new Shop(4, 5, 2);

// shop.qoldiq();           // Hozir 20:40da 4ta non, 5ta lag'mon va 2ta cola bor
// shop.sotish("non", 3);   // Hozir 20:50da 3ta non sotildi
// shop.qabul("cola", 4);   // Hozir 20:50da 4ta cola qabul qilidi
// shop.qoldiq();           // Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola bor

// /// aka uzin tuzolmadim lekin siz aytganingizgak chatgp dan yordam suradim yechim emass qadama qada qildim




//D-Task
function checkContent(a, b) {
  let x = a.split("").sort().join("");
  let y = b.split("").sort().join("");
  if (x === y) {
    return true;
  } else {
    return false;
  }
}




// //masalan
// /console.log(checkContent("mitgroup", "gmtiprou")); // true
// console.log(checkContent("hello", "olelh"));       // true
// console.log(checkContent("hello", "world"));       // false