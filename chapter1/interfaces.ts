interface Product{
    name: string;
    price: number;
}
interface OrderDetail{
    product: Product;
    quantity: number;
}

const table:Product={
    name: 'Table',
    price: 100
}
const tableOrder:OrderDetail={
    product: table,
    quantity: 2
}
const chair:Product={
    name: 'Chair',
    price: 50
}