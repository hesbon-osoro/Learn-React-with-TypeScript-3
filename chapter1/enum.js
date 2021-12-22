var OrderStatus;
(function (OrderStatus) {
	OrderStatus[(OrderStatus['Paid'] = 0)] = 'Paid';
	OrderStatus[(OrderStatus['Shipped'] = 1)] = 'Shipped';
	OrderStatus[(OrderStatus['Completed'] = 2)] = 'Completed';
	OrderStatus[(OrderStatus['Cancelled'] = 3)] = 'Cancelled';
})(OrderStatus || (OrderStatus = {}));
var cancel = OrderStatus.Cancelled;
console.log(cancel);
