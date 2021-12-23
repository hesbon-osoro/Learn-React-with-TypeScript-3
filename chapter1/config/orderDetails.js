'use strict';
exports.__esModule = true;
exports.OrderDetail = void 0;
var OrderDetail = /** @class */ (function () {
	function OrderDetail() {}
	OrderDetail.prototype.getTotal = function (discount) {
		var priceWithoutDiscount = this.product.price * this.quantity;
		var discountAmount = priceWithoutDiscount * (discount || 0);
		return priceWithoutDiscount - discountAmount;
	};
	OrderDetail.prototype.doSomething = function (input) {
		input.something();
		return input.result;
	};
	return OrderDetail;
})();
exports.OrderDetail = OrderDetail;
