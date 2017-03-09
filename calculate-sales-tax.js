var salesTaxRates = {
AB: 0.05,
BC: 0.12,
SK: 0.10
};

var companySalesData = [{
name: "Telus",
province: "BC",
sales: [ 100, 200, 400 ]
},
{
name: "Bombardier",
province: "AB",
sales: [ 80, 20, 10, 100, 90, 500 ]
},
{
name: "Telus",
province: "SK",
sales: [ 500, 100 ]
}];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

var sumOf = function(sums){
  var sum = 0;
  sums.forEach(function(sum2){
    sum += sum2;
  });
  return sum;
}

var salesTaxReport = function(salesData, taxRates) {
  var output = {};

  salesData.forEach(function(current){

    var salesTotal = sumOf(current.sales);
    var taxes = salesTotal * salesTaxRates[current.province];

  if(output.hasOwnProperty(current.name)){

    output[current.name].totalSales += salesTotal;
    output[current.name].totalTaxes += taxes;

  }else{

    output[current.name] = {
      totalSales: salesTotal,
      totalTaxes: taxes,
    };
  }
});
return output;
}

var output = salesTaxReport(companySalesData, salesTaxRates);
var string = JSON.stringify(output, null, 2);
console.log(string);