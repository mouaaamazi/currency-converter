 let base_url='https://latest.currency-api.pages.dev/v1/currencies'
 let dropdownselects = document.querySelectorAll(".dropdown select")
 let amount = document.getElementById('amount')
 let fromcurr = document.getElementById("from")
 let tocurr = document.getElementById("to")
 let button = document.querySelector(".getexchange")
 let msg = document.querySelector(".result")
 
 for(codes in countryList){
    for( select of dropdownselects){
        // console.log(select.value)
        let newoption = document.createElement('option')
        newoption.value=codes;
        newoption.innerHTML=codes
       select.append(newoption)
       select.addEventListener('change', (eve)=>{
    changeflag(eve.target)
})
       }
   

    
 }
let changeflag = (element)=>{
        let changeelement = element.value;
        let countrycode=countryList[changeelement]
        let changeflag = element.parentElement.querySelector('img')
        changeflag.src=`https://flagsapi.com/${countrycode}/flat/64.png`
        


    }
 let updateexchangerate= async()=>{

 let response = await fetch(`${base_url}/${fromcurr.value.toLowerCase()}.json`)
 let data = await response.json();
 console.log(data)

 
 
 let base=fromcurr.value.toLowerCase();
 let top=tocurr.value.toLowerCase();
 let toval=data[base][top]
 

 
 
 

 let am = Number(amount.value)
let newamount = am* toval;
msg.innerText=`${am}${fromcurr.value}=${newamount}${tocurr.value}`; 





 }

button.addEventListener('click',(event)=>{
    event.preventDefault();
    updateexchangerate();
    
    

})