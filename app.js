
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