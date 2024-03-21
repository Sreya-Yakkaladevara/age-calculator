let ipt_day = document.getElementById('input-day')
let ipt_month = document.getElementById('input-month')
let ipt_year = document.getElementById('input-year')
let isValid = false;
let err_day = document.getElementById('error-day')
let err_month = document.getElementById('error-month')
let err_year = document.getElementById('error-year')
let opt_day = document.getElementById('output-day')
let opt_month = document.getElementById('output-month')
let opt_year = document.getElementById('output-year')
let btn = document.querySelector('.icon')
btn.addEventListener("click",calculateDate)
ipt_day.addEventListener("input",()=>{
    if((+ipt_day.value=="")||(+ipt_day.value==0)||(+ipt_day.value<0)){
        err_day.textContent="This field is required"
        isValid = false;
        return;
    }else{
        err_day.textContent=""
        isValid = true;
    }
    if(+ipt_day.value>31){
        err_day.textContent="please enter correct num"
        isValid = false;
        return;
    }else{
        err_day.textContent=""
        isValid = true;
    }
})
ipt_month.addEventListener("input",()=>{
    if((ipt_month.value=="")||(ipt_month.value==0)||(+ipt_month.value<0)){
        err_month.textContent="This field is required"
        isValid = false;
        return;
    }else{
        err_month.textContent=""
        isValid = true;
    }
    if(ipt_month.value>12){
        err_month.textContent="please enter correct num"
        isValid = false;
        return;
    }else{
        err_month.textContent=""
        isValid = true;

    }
    
})
ipt_year.addEventListener("input",()=>{
    if((ipt_year.value=="")||(ipt_year.value==0)||(+ipt_year.value<0)){
        err_year.textContent="This field is required"
        isValid = false;
        return;
    }
    else{
        err_year.textContent=""
        isValid = true;
    }
    if(ipt_year.value>2024){
        err_year.textContent="please enter correct num"
        isValid = false;
        return;
    }else{
        err_year.textContent=""
        isValid = true;
    }
});
function calculateDate(){
    if(isValid){
      let birth = `${ipt_day.value}/${ipt_month.value}/${ipt_year.value}`;

      let birthobj = new Date(birth)
      let age = Date.now()- birthobj;
      let ageDate = new Date(age)
      let ageyear = ageDate.getUTCFullYear()-1970;
      let ageMonth = ageDate.getUTCMonth();
      let ageDay = ageDate.getUTCDay() - 1;
      opt_year.textContent=ageyear;
      opt_month.textContent=ageMonth;
      opt_day.textContent=ageDay;
    }else{
        alert("error")
    }

}