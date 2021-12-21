function calculateTotalPrice(product, quantity, discount) {
	var proceWithoutDiscount = product.price * quantity;
	var discountAmount = priceWithoutDiscount * discount;
	return proceWithoutDiscount - discountAmount;
}
