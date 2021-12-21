interface IProduct {
	name: String;
	unitPrice: number;
}
function calculateTotalPriceTS(
	product: IProduct,
	quantity: number,
	discount: number
): number {
	var priceWithoutDiscount = product.unitPrice * quantity;
	var discountAmount = priceWithoutDiscount * discount;
	return priceWithoutDiscount - discountAmount;
}
