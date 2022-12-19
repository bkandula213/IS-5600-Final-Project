import { getProducts, productsReducer, ProductType } from './products-reducer';

let initialState: { products: Array<ProductType> };

beforeEach(() => {
    initialState = {
        products: [],
    };
});

test('products was added to state', () => {
    const products: Array<ProductType> = [
        {
            productId: '1',
            imgSrc: '',
            productName: '1',
            productDescription: '',
            pricePerUnit: 80,
        },
        {
            productId: '2',
            imgSrc: '',
            productName: '2',
            productDescription: '',
            pricePerUnit: 60,
        },
    ];

    const newState = productsReducer(
        initialState,
        getProducts.fulfilled({ products }, '', { products }),
    );

    // eslint-disable-next-line no-magic-numbers
    expect(newState.products.length).toBe(2);
});
