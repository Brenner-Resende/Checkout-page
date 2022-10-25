// Item selection
let numberItemsA = 1;
let numberItemsB = 1;
let bagsPrice = 54.99;
let bagsPriceOld = 94.99;
let shoesPrice = 74.99;
let shoesPriceOld = 124.99;


let firstMinusButton = document.getElementById('1-minus-btn');
let firstPlusButton = document.getElementById('1-plus-btn');
let secondMinusButton = document.getElementById('2-minus-btn');
let secondPlusButton = document.getElementById('2-plus-btn');
let bags = document.getElementById('numberOfBags');
let bgPriceBox = document.getElementById('price-1');

let shPriceBox = document.getElementById('price-2');
let shoes = document.getElementById('numberOfShoes');
let finalPrice = document.getElementById('fprice');



// Listen for clicks in the buttons
firstMinusButton.addEventListener('click', ()=>{
    if (numberItemsA > 1) {
    numberItemsA--;
    bags.innerHTML = numberItemsA;
    decrementPriceBag(Number(bgPriceBox.innerHTML), bagsPrice);
    calcSubtotal(Number(bgPriceBox.innerHTML), Number(shPriceBox.innerHTML), 19);
    }
});
firstPlusButton.addEventListener('click', ()=>{
    numberItemsA++;
    bags.innerHTML = numberItemsA;
    incrementPriceBag(numberItemsA, bagsPrice);
    calcSubtotal(Number(bgPriceBox.innerHTML), Number(shPriceBox.innerHTML), 19);
});

secondMinusButton.addEventListener('click', ()=>{
    if (numberItemsB > 1) {
    numberItemsB--;
    shoes.innerHTML = numberItemsB;
    decrementPriceShoe(Number(shPriceBox.innerHTML), shoesPrice);
    calcSubtotal(Number(bgPriceBox.innerHTML), Number(shPriceBox.innerHTML), 19);
    }
});
secondPlusButton.addEventListener('click', ()=>{
    numberItemsB++;
    shoes.innerHTML = numberItemsB;
    incrementPriceShoe(numberItemsB, shoesPrice);
    calcSubtotal(Number(bgPriceBox.innerHTML), Number(shPriceBox.innerHTML), 19);
});


// Calculate user input functions
// increments
function incrementPriceBag(a, b){
    let result = a * b;
    bgPriceBox.innerHTML = `${result.toFixed(2)}`;

};
function incrementPriceShoe(a, b){
    let result = a * b;
    shPriceBox.innerHTML = `${result.toFixed(2)}`;

};
// decrements
function decrementPriceBag(a, b) {
    let result = a - b;
    bgPriceBox.innerHTML = `${result.toFixed(2)}`;
};
function decrementPriceShoe(a, b) {
    let result = a - b;
    shPriceBox.innerHTML = `${result.toFixed(2)}`;
};
//subtotal
function calcSubtotal(a, b, c) {
    let result = (a + b) + c;
    finalPrice.innerHTML = `$${result.toFixed(2)}`;
}

// Sell Validation
function sellValidation() {
    window.alert('Thanks for your purchase, your products will soon be shipped');
}