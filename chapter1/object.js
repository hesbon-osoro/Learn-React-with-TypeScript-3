// objects
var customer = {
    name: "Lamps ltd",
    turnover: 2001123,
    active: true
};
// this is possible since we are not altering the customer object variable
// rather we are changing one of its properties
customer.turnover = 5000;
// this is not possible since we are altering the customer object variable
//  customer.profit=500
