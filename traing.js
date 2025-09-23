console.log("Daniyelni maslaxatlari");

const list = [
  "yaxshi uquvchi va talaba buling", //0-20
  "uzingiz ustingizda ishlang va uzingiz uchun investitsiya qiling", //20-30
  "mustaqil ishlaydigan korxonaga sababchi buling", //30-40
  "yangi loyixalaringiz ustida shugullaning", //40-50
  "jamgarmalaringizni kupaytiring", //50-60
  "endi dam olsangiz buladi bundan keyingi harakatlar befoyda", //60+
];
 
 function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("iltimos raqam yozing");
  else if (a <= 20) return( list[0]);
  else if (a > 20 && a <= 30)return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else 
 { setInterval(function (){
    callback(null,list[5]);
 }, 1000)
}
}
console.log("passed here 0");
maslahatBering(70, (err,data) =>{
    if (err) console.log("ERROR",err);
    else{
        console.log(data);
    }
})


//async

 /*async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("iltimos raqam yozing");
  else if (a <= 20) return( list[0]);
  else if (a > 20 && a <= 30)return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else 
  {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
       resolve(list[5]);
        },5000);
        

    });
  }


    
}*/
/*console.log("passed here 0");

 maslahatBering(26).then(data =>{
 console.log('javob:',data);
 }).catch(err =>{
  console.log("ERROR",err);
 });
 console.log("passed here 1");*/

run();
