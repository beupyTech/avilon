var htmlElementField = {
    pills:document.getElementById('dataPills'),
    mg:document.getElementById('dataMg'),
    shipping:document.getElementById('dataShipping'),
    price:document.getElementById('dataPrice'),
    productName:document.getElementById('dataProduct'),
    name:document.getElementById('dataName'),
    middleName:document.getElementById('dataMiddleName'),
    lastName:document.getElementById('dataLastName'),
    phone:document.getElementById('dataPhn'),
    email:document.getElementById('email'),
    stretName:document.getElementById('dataStreet'),
    city:document.getElementById('dataCity'),
    zip:document.getElementById('dataZip'),
    state:document.getElementById('dataState'),
    country:document.getElementById('dataCountry'),
    paymentType:document.getElementById('dataPaymentType'),
    cardHolName:document.getElementById('dataCCName'),
    cardNumber:document.getElementById('dataCCNum'),
    cvv:document.getElementById('dataCVV'),
    expiry:document.getElementById('dataExpiry'),
    bStreetName:document.getElementById('dataBillingStreetName'),
    bCity:document.getElementById('dataBillingCity'),
    bZip:document.getElementById('dataBillingZip'),
    bState:document.getElementById('dataBillingState'),
    bCountry:document.getElementById('dataBillingCountry'),
    coinName:document.getElementById('dataCoinName'),
    backBtn:document.getElementById('btnBack'),
    nxtBtn:document.getElementById('btnNext'),
    subBtn:document.getElementById('sub')
};

(function(){
    //styling Button 
    htmlElementField.nxtBtn.style.display = 'none';
    htmlElementField.backBtn.style.display = 'inline';
    htmlElementField.subBtn.style.display = 'inline';
    
    //putting data on Template
    htmlElementField.pills.innerHTML = orderSummary.pills;
    htmlElementField.mg.innerHTML = orderSummary.mg;
    htmlElementField.shipping.innerHTML = orderSummary.shipping;
    htmlElementField.price.innerHTML = orderSummary.price;
    htmlElementField.productName.innerHTML = orderSummary.product;
    htmlElementField.name.innerHTML = orderSummary.name;
    htmlElementField.middleName.innerHTML = orderSummary.middleName;
    htmlElementField.lastName.innerHTML= orderSummary.lastName;
    htmlElementField.phone.innerHTML = orderSummary.phone;
    htmlElementField.email.innerHTML = orderSummary.email;
    htmlElementField.stretName.innerHTML = orderSummary.streetAddress;
    htmlElementField.city.innerHTML = orderSummary.city;
    htmlElementField.state.innerHTML = orderSummary.state;
    htmlElementField.zip.innerHTML = orderSummary.zipCode;
    htmlElementField.country.innerHTML = orderSummary.country;
    htmlElementField.paymentType.innerHTML = orderSummary.paymentMode;
    htmlElementField.cardHolName.innerHTML = orderSummary.cardName;
    htmlElementField.cardNumber.innerHTML = orderSummary.cardNum;
    htmlElementField.cvv.innerHTML = orderSummary.cvv;
    htmlElementField.expiry.innerHTML = orderSummary.expiry;
    htmlElementField.bStreetName.innerHTML = orderSummary.billingStreet;
    htmlElementField.bCity.innerHTML = orderSummary.billingCity;
    htmlElementField.bZip.innerHTML = orderSummary.billingZipcode;
    htmlElementField.bState.innerHTML = orderSummary.billingState;
    htmlElementField.bCountry.innerHTML = orderSummary.billingCountry;
    htmlElementField.coinName.innerHTML = orderSummary.coinSelected
    
    
})();

htmlElementField.backBtn.addEventListener('click', function(e){
    e.preventDefault();
    redirectToForum = true;
    backBtnFunc = true;
    createFunction('./buy.html', body, './js/buyMain.js');
});

htmlElementField.subBtn.addEventListener("click", function(e){
    e.preventDefault();
    htmlElementField.subBtn.disabled = true;
    serverRequest('http://theillfree2019.openode.io/orders', orderSummary);
})