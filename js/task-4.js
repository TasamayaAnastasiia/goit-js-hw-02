function getShippingCost(country) {
    let price;
    let resultString;
    switch(country) {
        case 'China':
            price = 100;
            resultString = `Shipping to ${country} will cost ${price} credits"`;
            break;
        case 'Chile':
            price = 250;
            resultString = `Shipping to ${country} will cost ${price} credits"`;
            break;
        case 'Australia':
            price = 170;
            resultString = `Shipping to ${country} will cost ${price} credits"`;
            break;
        case 'Jamaica':
            price = 120;
            resultString = `Shipping to ${country} will cost ${price} credits"`;
        break;
        default:
            resultString = "Sorry, there is no delivery to your country";
    }
    return resultString;
}
console.log(getShippingCost("Australia")); 
console.log(getShippingCost("Germany")); 
console.log(getShippingCost("China")); 
console.log(getShippingCost("Chile")); 
console.log(getShippingCost("Jamaica")); 
console.log(getShippingCost("Sweden")); 