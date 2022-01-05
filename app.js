/**
 * function for age calculation
 */
const formName = document.querySelector("#form-name");
const formYear = document.querySelector("#form-year");
const result = document.querySelector("#result");
const formBtn = document.querySelector("#form-btn");
const msg = document.querySelector(".msg h1")



formBtn.onclick = ()=>{

   let uName = formName.value;
   let uYear = formYear.value;
   
   let uNamePattan = /^[a-z@0-9]{5,}$/;
   let uYearPattan = /^[0-9]{4,}$/;
  
   
   if(uName == '' || uYear == ''){
      
      result.innerHTML =`<p class="alert alert-danger"> All field Required ! </p>`

   }else if (uNamePattan.test(uName) == false) {
       result.innerHTML = `<p class = "alert alert-danger">Please type your name &  must be 5 charecter </p>`;
       formName.style.border="1px solid red"
       
   } else if (uYearPattan.test(uYear) == false) {
       result.innerHTML = `<p class = "alert alert-danger">Please type your Year & must be 4 charecter </p>`;
      formYear.style.border = "1px solid red"
   }else{
      result.innerHTML = ageCal(uName, uYear);
      formName.value = '';
      formYear.value = '';
      formName.style.border = "1px solid black";
      formYear.style.border = "1px solid black"
   }
     

}

/**
 * function for currency
 */


const cAmount = document.querySelector("#cAmount");
const from = document.querySelector("#from");
const to = document.querySelector("#to");
const simble = document.querySelector("#simble");
const gesture = document.querySelector("#gesture");
const inputBox = document.querySelector(".inputBox");
const cResult = document.querySelector("#cResult");
const cBtn = document.querySelector("#cBtn");


cAmount.onkeyup =()=>{
   if(cAmount.value=="" || cAmount.value== null || !(/^[0-9.]*$/.test(cAmount.value))){

      inputBox.style.border=`1px solid red`
      gesture.innerHTML =`Invalied Number`
   }else{
      inputBox.style.border=`1px solid #ddd`
      gesture.innerHTML=''
   }
}

from.onchange=()=>{
   if(from.value=="1"){
      simble.innerHTML="$";
   }else if(from.value== "85"){
      simble.innerHTML= "৳"
   }else if(from.value== "0.88"){
      simble.innerHTML = "€";
   } else if (from.value == "1.27"){
      simble.innerHTML = "$"
   }else if(from.value=="0.74"){
      simble.innerHTML = "£"
   }
}

let currency = "$";

to.onchange = () => {
if(to.value=="1"){
   currency ="$"
}else if ( to.value =="85"){
   currency = "৳"
}else if(to.value=="0.88"){
   currency = "€"
}else if(to.value=="1.27"){
   currency = "$"
}else if(to.value=="0.74"){
   currency = "£"
}
}

cBtn.onclick = () =>{

   if(cAmount.value !="" || cAmount.value != null){
      cResult.innerHTML= `<p style="font-size:26px;"> Your Total amount ${((cAmount.value/from.value)*to.value).toFixed(2)} ${currency}</p>`
   }else{
      cResult.style="backgroundColor:red";
   }

}

/**
 * function for marriage
 */

const mForm = document.querySelector("#mForm");
const mName = document.querySelector("#mName");
const mYear = document.querySelector("#mYear");
const mMsg = document.querySelector(".mMsg");
const mBtn = document.querySelector("#mBtn");

mBtn.addEventListener('click', function(e){


 if(mName.value=="" || mYear.value == "" || !(/^[a-z]*$/.test(mName.value)) || !(/^[0-9]{4,}$/.test(mYear.value))){
   mMsg.innerHTML =validation(`All field Required`)
 }else{
   mMsg.innerHTML = ageCal(mName.value, mYear.value) + validation('you done')
 }

})

// mBtn.onclick = () =>{
//    if(mName.value != || mYear.value !='' ){

//    }
// }

