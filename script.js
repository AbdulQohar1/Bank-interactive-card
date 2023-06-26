// select & declare all necessary classnames
// add event listener to the confirm button 
//make the card-number input field take number input alone 
// display "wrong format number only" when false card-number is entered 
// write a function that prevent the input fields in the user-subMain section from being empty
// display "can't be blank (red-color)" when left empty
//  


let inputCardName = document.querySelector('.input-card-name');
let inputCardNumber = document.querySelector('.input-card-number');
let expiringMonth = document.querySelector('.month-of-expiring');
const expiringYear = document.querySelector('.year-of-expiring');
const cvcValue = document.querySelector('.input-cvc-digits');
const confirmBtn = document.querySelector('.confirmBtn');
let detailsElement = document.querySelectorAll('.input-subMain-details')

let outputCardNumber = document.querySelector('.card-number');
let outputCardHolderName = document.querySelector('.card-front-cardHolderName');
let outputExpiringDate = document.querySelector('.card-front-expiringDate');
let expiringDateDetails = document.querySelector('expiring-date-details');
let outputCvcValue = document.querySelector('.back-card-cvcDigit');

let blank1Message = document.querySelector('.blank1');
let blank2Message = document.querySelector('.blank2');

 

//  expiringMonthElement = expiringMonth.value;
//  expiringYearElement = expiringYear.value;
//  cvcElememt = cvcValue.value;

confirmBtn.addEventListener('click', function(){
    
    outputCardHolderName.textContent = inputCardName.value;
    outputCardNumber.textContent = inputCardNumber.value;
    // let blankFunc = function() {
    //     outputCvcValue.textContent = cvcValue.value;
    //     console.log(outputCvcValue.textContent);
    //     cvcValue.classList.remove(".blank")
        
    // };
   

    
    
    if (cvcValue.value == '') {
        blank1Message.innerHTML = `can't be blank`;
        // console.log(blankMessage);
        
    } else{
        
        outputCvcValue.textContent = cvcValue.value;
        cvcValue.classList.remove(".blank1");
        
    }

    if (expiringMonth.value && expiringYear.value =='') {
        blank2Message.innerHTML = `Can't be blank`;
        
    } else {
        
    }

    // if (expiringMonth.value && expiringYear.value =='' )  {
    //     wrongFormatMessage.innerHTML = `can't be blank`;
    //     console.log(wrongFormatMessage.innerHTML);
    // }
    
    

    // console.log(input[0].textContent);
    
    // if (expiringMonthElement && expiringYearElement && cvcElememt =='') {
    //     wrongFormatMessage.innerHTML = `wrong format, can't be blank`;
    // }
    
    // if (detailsElement.value = '') {
    //     wrongFormatMessage.textContent = `wrong format, can't be blank`;
    
    //     console.log(wrongFormatMessage.textContent);
    // }
})



// function preventEmpty() {
    //     expiringMonth.value.maxlength = 2;
    //     if (expiringMonth.value === '') {
        
        //     }
        //     if (expiringYear.value === '') {
            //         console.log("Can't be blank");
            //    }
            //    if(cvcValue.value === '') {
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

// if (inputCardNumber.value != Number() ) {
//         console.log("wrong format");
//     }

// confirmBtn.addEventListener('click' , function () {
//     if (inputCardNumber.value != Number ) {
//         console.log("wrong format");
//     }
// })



