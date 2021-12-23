interface Product3 {
	readonly name: string;
	price: number;
}

const table3: Product3 = {
	name: 'Table',
	price: 100,
};

// this operation is not permitted
// table3.name = 'New Table';
