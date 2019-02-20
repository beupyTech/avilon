btnBack.style.display = 'none';
sub.style.display = 'none';
var contentForm = document.getElementById('contentForm');
orderData = JSON.parse(localStorage.selectedProduct);
var orderSummary;
var pageData;
var htmlElementField = {
    name: document.getElementById('nameUser'),
    middleName: document.getElementById('middleName'),
    lastName: document.getElementById('lastName'),
    phone: document.getElementById('telUser'),
    email: document.getElementById('email'),
    locality: document.getElementById('address'),
    city: document.getElementById('address1'),
    state: document.getElementById('address2'),
    country: document.getElementById('address3'),
    zipCode: document.getElementById('address4'),
    dataPills: document.getElementById('dataPills'),
    dataMg: document.getElementById('dataMg'),
    dataShipping: document.getElementById('dataShipping'),
    dataProduct: document.getElementById('dataProduct'),
    dataPrice: document.getElementById('dataPrice')
};

btnNext.addEventListener('click', function(e){
    e.preventDefault();
    var backBtnFunc = false;
    if(htmlElementField.name.value && htmlElementField.phone.value && htmlElementField.locality.value && htmlElementField.city.value && htmlElementField.state.selectedIndex > 0 && htmlElementField.country.value && htmlElementField.middleName.value && htmlElementField.lastName.value){
        orderSummary= {
            pills: orderData.pills,
            mg: orderData.mg,
            shipping: orderData.shipping,
            product:orderData.product,
            price:orderData.price,
            name: htmlElementField.name.value,
            middleName: htmlElementField.middleName.value,
            lastName: htmlElementField.lastName.value,
            phone: htmlElementField.phone.value,
            email: htmlElementField.email.value,
            streetAddress: htmlElementField.locality.value,
            city: htmlElementField.city.value,
            state: htmlElementField.state[htmlElementField.state.selectedIndex].text,
            zipCode: htmlElementField.zipCode.value,
            country: htmlElementField.country.value
        };
        pageData= {
            state: htmlElementField.state.selectedIndex
        };
        console.log(orderSummary);
        createFunction('./view/formPayment.html', contentForm, './js/formPayment.js');
    }else{
        alert('Missing Field');
    };
    
});

htmlElementField.dataPills.innerHTML = orderData.pills;
htmlElementField.dataMg.innerHTML = orderData.mg;
htmlElementField.dataShipping.innerHTML = orderData.shipping;
htmlElementField.dataProduct.innerHTML = orderData.product;
htmlElementField.dataPrice.innerHTML = orderData.price;

if(backBtnFunc){
    htmlElementField.name.value = orderSummary.name;
    htmlElementField.middleName.value = orderSummary.middleName;
    htmlElementField.lastName.value = orderSummary.lastName;
    htmlElementField.phone.value = orderSummary.phone;
    htmlElementField.email.value = orderSummary.email;
    htmlElementField.locality.value = orderSummary.streetAddress;
    htmlElementField.city.value = orderSummary.city;
    htmlElementField.state.selectedIndex = pageData.state;
    htmlElementField.zipCode.value = orderSummary.zipCode;
};
