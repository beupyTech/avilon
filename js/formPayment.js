btnBack.style.display = 'inline';
sub.style.display = 'inline';
btnNext.style.display = 'None';

btnBack.addEventListener('click', function(e){
    e.preventDefault();
    backBtnFunc = true;
    createFunction("../view/formAddress.html",mainContainer,'../js/formAddress.js');
});

var htmlElementField = {
    cardName: document.getElementById('cardName'),
    cardNum: document.getElementById('cardNum'),
    cvv: document.getElementById('cvv'),
    expiry: document.getElementById('expiry'),
    coinName: document.getElementById('coinName'),
    billingStreet: document.getElementById('billingAdd'),
    billingCity: document.getElementById('billingAdd1'),
    billingZipcode: document.getElementById('billingAdd4'),
    billingState: document.getElementById('billingAdd2'),
    billingCountry: document.getElementById('billingAdd3'),
    paypalEmail: document.getElementById('paypalEmail')
};

var paymentType = document.getElementById('paymentType');
//div area of coin and cryptocoin.
var payPalCard = document.getElementById('paypal');
var card = document.getElementById("card");
card.style.display = "none";
var cryptoCoin = document.getElementById("cryptoCoin");
cryptoCoin.style.display = "none";

paymentType.addEventListener('change', function(e){
    e.preventDefault();
    if(paymentType.selectedIndex === 5){
        cryptoCoin.style.display = "block";
        card.style.display = "none";
        payPalCard.style.display = "none";
    }else if(paymentType.selectedIndex === 0){
        cryptoCoin.style.display = "none";
        card.style.display = "none";
        payPalCard.style.display = "block";
    }else{
        payPalCard.style.display = "none";
        cryptoCoin.style.display = "none";
        card.style.display = "block";
    }
});

sub.addEventListener('click', function(e){
    e.preventDefault();
    if(paymentType.selectedIndex < 5 && paymentType.selectedIndex !== 0){
        if(htmlElementField.cardName.value && htmlElementField.cardNum.value && htmlElementField.cvv.value && htmlElementField.expiry.value && htmlElementField.billingStreet.value && htmlElementField.billingCity.value && htmlElementField.billingState.selectedIndex > 0 && htmlElementField.billingCountry.value && paymentType.selectedIndex !== 0){
            orderSummary.paymentMode = paymentType[paymentType.selectedIndex].text;
            orderSummary.cardName = htmlElementField.cardName.value;
            orderSummary.cardNum  = htmlElementField.cardNum.value;
            orderSummary.cvv  = htmlElementField.cvv.value;
            orderSummary.expiry = htmlElementField.expiry.value;
            orderSummary.billingStreet = htmlElementField.billingStreet.value;
            orderSummary.billingCity  = htmlElementField.billingCity.value;
            orderSummary.billingZipcode = htmlElementField.billingZipcode.value ;
            orderSummary.billingState = htmlElementField.billingState[htmlElementField.billingState.selectedIndex].text;
            orderSummary.billingCountry = htmlElementField.billingCountry.value;
            orderSummary.coinSelected = "xxx";
            orderSummary.paypalEmail = "xxx";
            console.log(orderSummary);
            createFunction("../view/finalOrder.html",mainContainer,'../js/finalOrder.js');
        }else{
            alert("Card Values Missing");
        }
    }else if(paymentType.selectedIndex === 5){
        if(htmlElementField.coinName.selectedIndex > 0){
            orderSummary.paymentMode = paymentType[paymentType.selectedIndex].text;
            orderSummary.coinSelected = htmlElementField.coinName[htmlElementField.coinName.selectedIndex].text;
            orderSummary.cardName = "xxx";
            orderSummary.cardNum = "xxx";
            orderSummary.cvv = "xxx";
            orderSummary.expiry = "xxx";
            orderSummary.billingStreet = "xxx";
            orderSummary.billingCity = "xxx";
            orderSummary.billingZipcode = "xxx";
            orderSummary.billingState = "xxx";
            orderSummary.billingCountry = "xxx";
            orderSummary.paypalEmail = "xxx";
            console.log(orderSummary);
            createFunction("../view/finalOrder.html",mainContainer,'../js/finalOrder.js');
        }else{
            alert("coin Name missing");
        }
    }else if(paymentType.selectedIndex === 0){
        if(htmlElementField.paypalEmail.value.trim() !== ""){
            orderSummary.paymentMode = paymentType[paymentType.selectedIndex].text;
            orderSummary.coinSelected = "xxx";
            orderSummary.cardName = "xxx";
            orderSummary.cardNum = "xxx";
            orderSummary.cvv = "xxx";
            orderSummary.expiry = "xxx";
            orderSummary.billingStreet = "xxx";
            orderSummary.billingCity = "xxx";
            orderSummary.billingZipcode = "xxx";
            orderSummary.billingState = "xxx";
            orderSummary.billingCountry = "xxx";
            orderSummary.paypalEmail = htmlElementField.paypalEmail.value;
            console.log(orderSummary);
            createFunction("../view/finalOrder.html",mainContainer,'../js/finalOrder.js');
            
        }else{
            alert("Provide Paypal Email Only.")
        }
   }
});
