// select & declare all necessary classnames
// add event listener to the confirm button 
//make the card-number input field take number input alone 
// display "wrong format number only" when false card-number is entered 
// write a function that prevent the input fields in the user-subMain section from being empty
// display "can't be blank (red-color)" when left empty
//  


let inputCardName = document.querySelector('.input-card-name');
let cardNumberInput = document.querySelector('.input-card-number');
let expiringMonth = document.querySelector('.month-of-expiring');
const expiringYear = document.querySelector('.year-of-expiring');
const cvcInput = document.querySelector('.input-cvc-digits');
const monthInput = document.querySelector("input[name=month]");
const yearInput = document.querySelector("input[name=year]");
const confirmBtn = document.querySelector('.confirmBtn');
let detailsElement = document.querySelectorAll('.input-subMain-details')

let outputCardNumber = document.querySelector('.card-number');
let outputCardHolderName = document.querySelector('.card-front-cardHolderName');
let outputExpiringDate = document.querySelector('.card-front-expiringDate');
let expiringDateDetails = document.querySelector('expiring-date-details');
let outputCvcValue = document.querySelector('.back-card-cvcDigit');
let monthOutput = document.querySelector('.monthOutput');
let yearOutput = document.querySelector('.yearOutput');

let blank1Message = document.querySelector('.blank1');
let blank2Message = document.querySelector('.blank2');
let wrongFormatMessage = document.querySelector('.wrongFormatMessage');
let numberLength = document.querySelector('.numberLength');

  
function parseCardNumber(value, type){
  if(type === "removeSpace"){
    return value.split(" ").join("");
  }
  
  if(type === "addSpace"){
    return value.split(" ").join("").split("").map((val, index) => {
      if(index && index % 4 === 0){
        return " " + val;
      }
      return val;
    }).join("");
  }
}


function handleKeyDown(e) {
  const name = e.target.name;
  const value = e.target.value;
  const maxLength = e.target.maxLength;
  
  // Validate max length
  // Note: Boolean(maxLength) === !!maxLength 
  if (Boolean(maxLength) && value.length > maxLength) {
    e.target.value = value.slice(0, maxLength);
  }
  
  // 
  if(name === "card-number"){
    e.target.value = parseCardNumber(value,"addSpace");
  }  
}




cardNumberInput.addEventListener('input', handleKeyDown);
monthInput.addEventListener('input', handleKeyDown); 
yearInput.addEventListener('input', handleKeyDown); 
cvcInput.addEventListener('input', handleKeyDown); 

confirmBtn.addEventListener('click', function(){
  
  outputCardHolderName.textContent = inputCardName.value;
  outputCardNumber.textContent = cardNumberInput.value;
  monthOutput.textContent = monthInput.value;
  yearOutput.textContent = yearInput.value.slice(2);


  const parsedCardNumber = parseCardNumber(cardNumberInput.value, "removeSpace");
  if (isNaN(parsedCardNumber)) {
    wrongFormatMessage.innerHTML = "Wrong format, number only"
    console.log("Wrong format, number only");
  }
  
  if (cvcInput.value == '') {
    blank2Message.innerHTML = `can't be blank`;
    console.log(blank2Message.innerHTML);
    
  } else{
    
    outputCvcValue.textContent = cvcInput.value;
    cvcInput.classList.remove(".blank1");
    
  }
  
  if (expiringMonth.value =='' || expiringYear.value =='') {
    
    blank1Message.innerHTML = `can't be blank`;
    console.log(blank1Message.innerHTML);
  }
  
})



// function preventEmpty() {
    //     expiringMonth.value.maxlength = 2;
    //     if (expiringMonth.value === '') {
        
        //     }
        //     if (expiringYear.value === '') {
            //         console.log("Can't be blank");
            //    }
            //    if(cvcInput.value === '') {
//     console.log("Can't be blank");
//    }
    
// }


// confirmBtn.addEventListener('click' ,  function () {
//     preventEmpty();
//     // if (preventEmpty) {
//     //     expiringDateDetails.classList.add(hidden);
//     // }
// })

/*
const preventEmpty = function { 
    if (expiringMonth.value === '') {
        console.log("Can't be blank");
    }
}
preventEmpty()*/

// if (cardNumberInput.value != Number() ) {
//         console.log("wrong format");
//     }

// confirmBtn.addEventListener('click' , function () {
//     if (cardNumberInput.value != Number ) {
//         console.log("wrong format");
//     }
// })



