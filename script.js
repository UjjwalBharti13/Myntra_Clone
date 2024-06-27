let bagItems;
onLoad();

function onLoad(){
let  bagItemsStr = localStorage.getItem(`bagItems`);
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];

displayItemsOnHomePage();
displayBagIcon();
}

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem(`bagItems`,JSON.stringify(bagItems));
    displayBagIcon();

}
function displayBagIcon(){
    let bagItemCountElement = document.querySelector(`.bag-item-count`);
    if(bagItems.length>0){
        bagItemCountElement.style.visibility = `visible`;
        bagItemCountElement.innerHTML = bagItems.length;
    }
    else {
        bagItemCountElement.style.visibility =`hidden`;
    }
}



function displayItemsOnHomePage() {
let itemsContinerElement = document.querySelector(`.items_container`);
    if(!itemsContinerElement){
        return;
    }

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


let innerHTML = '';
items.forEach(item => {

    innerHTML +=`
    <div class="item_container">
            <img class="item_image" src="${item.item_image}" alt="item image">
            <div class="rating">
                ${item.rating.stars} ⭐|${item.rating.noOfReviews}
            </div>
            <div class="company_name">${item.company_name}</div>
            <div class="item_name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="Original-price">Rs ${item.Original_price}</span>
                <span class="discount">Rs ${item.Discount_price}% OFF</span>
            </div>
            <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>`

}) ;



itemsContinerElement.innerHTML = innerHTML;
}



