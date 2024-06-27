const CONVENIENCE_FEE =99;

let bagItemObjects;

onLoad();



function onLoad(){
    loadBagItemObjects();
    displayBagItems();
    displayBagSummary();
}
function displayBagSummary(){
    let displayBagSummaryElement = document.querySelector(`.bag-summary`);
    let totalItem = bagItemObjects.length;
    let totalMRP = 0;
    let totalDiscount = 0;
   
     bagItemObjects.forEach(bagItem=>{
        totalMRP +=bagItem.Original_price;
        totalDiscount +=bagItem.Original_price-bagItem.current_price;
    });

    let finalPayment = totalMRP-totalDiscount + CONVENIENCE_FEE;

    displayBagSummaryElement.innerHTML = `
     <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">₹${totalMRP}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">₹99</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹${finalPayment}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>`;
}

function loadBagItemObjects(){
    console.log(bagItems);

    const items = [
        {  
           id:`001`,
           item_image: `img 3/1.jpg`,
           rating: {
               stars: 4.5,
               noOfReviews: 1400,
           },
           company_name:`Carlton London`, 
           item_name:`Rhodium-Plated CZ Floral Studs`,
           current_price: 606,
           Original_price:1045,
           Discount_price:42,
           return_peroid:14,
           delivery_date:`10 jul 2024`,
           
       
       },
       {  
           id:`002`,
           item_image: `img 3/2.jpg`,
           rating: {
               stars: 4.3,
               noOfReviews: 24,
           },
           company_name:`CUKOO`, 
           item_name:`Women Padded Halter Neck Swiming Dress`,
           current_price: 1507,
           Original_price:2599,
           Discount_price:42,
           return_peroid:14,
           delivery_date:`10 jul 2024`,
           
       
       },
       {  
           id:`003`,
           item_image: `img 3/3.jpg`,
           rating: {
               stars: 4.1,
               noOfReviews: 344,
           },
           company_name:`NUEVOSDAMAS`, 
           item_name:`Women Red & White Printed A-Line Knee-Length Skirts`,
           current_price: 495,
           Original_price:1599,
           Discount_price:69,
           return_peroid:14,
           delivery_date:`10 jul 2024`,
           
       
       },
       {  
           id:`004`,
           item_image: `img 3/4.jpg`,
           rating: {
               stars: 5,
               noOfReviews: 140,
           },
           company_name:`ADIDAS`, 
           item_name:`Indian Cricket ODI Jersey`,
           current_price: 999,
           Original_price:999,
           Discount_price:0,
           return_peroid:14,
           delivery_date:`10 jul 2024`,
           
           
       
       },
       {  
           id:`005`,
           item_image: `img 3/5.jpg`,
           rating: {
               stars: 4.2,
               noOfReviews: 3500,
           },
           company_name:`Roadster`, 
           item_name:`Pure Cotton T-shirt`,
           current_price: 489,
           Original_price:1399,
           Discount_price:65,
           return_peroid:14,
           delivery_date:`10 jul 2024`,
           
           
       
       },
       {  
           id:`006`,
           item_image: `img 3/6.jpg`,
           rating: {
               stars: 0.0,
               noOfReviews: 0,
           },
           company_name:`NIKE`, 
           item_name:`Men ReactX Running Shoes`,
           current_price: 14995,
           Original_price:14995,
           Discount_price:0,
           return_peroid:14,
           delivery_date:`10 jul 2024`,
           
       
       },
       {  
           id:`007`,
           item_image: `img 3/7.jpg`,
           rating: {
               stars: 4.2,
               noOfReviews: 560,
           },
           company_name:`The Indian Garage Co`, 
           item_name:`Men Slim Fit Regular Shorts'`,
           current_price: 639,
           Original_price:1599,
           Discount_price:60,
           return_peroid:14,
           delivery_date:`10 jul 2024`,
           
           
       
       },
       {  
           id:`008`,
           item_image: `img 3/8.jpg`,
           rating: {
               stars: 4.2,
               noOfReviews: 5400,
           },
           company_name:`Nivea`, 
           item_name:`Men Fresh Deodrant 150ml`,
           current_price: 142,
           Original_price:285,
           Discount_price:50,
           return_peroid:14,
           delivery_date:`10 jul 2024`,
        }
    ];

    bagItemObjects=bagItems.map(itemId =>{
        for(let i=0; i< items.length; i++){
            if(itemId == items[i].id){
                return items[i];
            }
        }
    });
    console.log(bagItemObjects);
}

function displayBagItems(){

    let containerElement = document.querySelector(`.bag-items-container`);
    let innerHTML = ``;
    bagItemObjects.forEach(bagItem =>{
        innerHTML += generateItemHtml(bagItem); 
    });

    containerElement.innerHTML = innerHTML;
}

 function removeFromBag(itemId){
   bagItems = bagItems.filter(bagItemId => bagItemId !== itemId);
   localStorage.setItem(`bagItems`, JSON.stringify(bagItems));
   loadBagItemObjects();
   displayBagItems();
   displayBagIcon();
   displayBagSummary();
 }

function generateItemHtml(item){
    return `<div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="${item.item_image}">
    </div>
    <div class="item-right-part">
      <div class="company_name">${item.company_name}</div>
      <div class="item_name">${item.item_name}</div>
      <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="Original-price">Rs ${item.Original_price}</span>
        <span class="discount">(${item.Discount_price}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${item.return_period} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${item.delivery_date}</span>
      </div>
    </div>

    <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
  </div>`;
}
