var firstMap = new Map();
firstMap.set('manufacturer_1', 'product_name_1')
        .set('manufacturer_2', 'product_name_1')
        .set('manufacturer_3', 'product_name_2')
        .set('manufacturer_4', 'product_name_2');

var secondMap = new Map();
secondMap.set(124, 'manufacturer_1')
          .set(1456, 'manufacturer_2')
          .set(8754, 'manufacturer_3')
          .set(437897, 'manufacturer_3')
          .set(78964211, 'manufacturer_4')
          .set(778612, 'manufacturer_1');

var thirdMap = new Map();
thirdMap.set(15.45, 'manufacturer_1')
        .set(16.05, 'manufacturer_2')
        .set(22.23, 'manufacturer_2')
        .set(11.01, 'manufacturer_4')
        .set(13.25, 'manufacturer_4')
        .set(21.48, 'manufacturer_3');

minPrice = Math.min(...secondMap.keys());
minManufacturer = secondMap.get(minPrice);
minProductName = firstMap.get(minManufacturer);
minTime_Price = thirdMap.get(minManufacturer); 
let minPriceObj = {};
minPriceObj[minProductName] = `${minPrice} ${minManufacturer} ${minTime_Price}`;


maxPrice = Math.max(...secondMap.keys());
maxManufacturer = secondMap.get(maxPrice);
maxProductName = firstMap.get(maxManufacturer);
maxTime_Price = thirdMap.get(maxManufacturer); 
let maxPriceObj = {};
maxPriceObj[maxProductName] = `${maxPrice} ${maxManufacturer} ${maxTime_Price}`;


minTime = Math.min(...thirdMap.keys());
minTimeManufacturer = thirdMap.get(minTime);
minTimeProductName = firstMap.get(minTimeManufacturer);
minTimeDelivery = secondMap.get(minTimeManufacturer); 
let minTimeObj = {};
minTimeObj[minTimeProductName] = `${minTimeDelivery} ${minTimeManufacturer} ${minTime}`;


maxTime = Math.max(...thirdMap.keys());
maxTimeManufacturer = thirdMap.get(maxTime);
maxTimeProductName = firstMap.get(maxTimeManufacturer);
maxTimeDelivery = secondMap.get(maxTimeManufacturer); 
let maxTimeObj = {};
maxTimeObj[maxTimeProductName] = `${maxTimeDelivery} ${maxTimeManufacturer} ${maxTime}`;

console.log( minPriceObj,'\n', maxPriceObj,'\n', minTimeObj,'\n', maxTimeObj);

