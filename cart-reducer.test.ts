import {
    addProductToCart,
    cartReducer,
    decreaseQuantity,
    deleteProductFromCart,
    increaseQuantity,
    InitialStateCartType,
} from './cart-reducer';

let initialState: InitialStateCartType;

beforeEach(() => {
    initialState = {
        productsCartList: [
            {
                productId: '42',
                imgSrc: '',
                productName: 'Free gift',
                quantity: 1,
                pricePerUnit: 10,
            },
        ],
        contactDetails: {
            firstName: '',
            surname: '',
            address: '',
            phone: '',
        },
        totalSum: 10,
    };
});

test('product should be added to cart', () => {
    const newProduct = {
        productId: '443',
        imgSrc: '',
        productName: 'Caket',
        pricePerUnit: 10,
        productDescription: '',
    };
    const newState = cartReducer(initialState, addProductToCart({ product: newProduct }));

    // eslint-disable-next-line no-magic-numbers
    expect(newState.productsCartList.length).toBe(2);
    expect(newState.productsCartList[1].productId).toBe('443');
    // eslint-disable-next-line no-magic-numbers
    expect(newState.totalSum).toBe(20);
});

test('product should be deleted', () => {
    const newState = cartReducer(
        initialState,
        deleteProductFromCart({ productId: '42' }),
    );

    expect(newState.productsCartList.length).toBe(0);
});

test('product quantity should be increased', () => {
    const newState = cartReducer(initialState, increaseQuantity({ productId: '42' }));

    // eslint-disable-next-line no-magic-numbers
    expect(newState.productsCartList[0].quantity).toBe(2);
    // eslint-disable-next-line no-magic-numbers
    expect(newState.totalSum).toBe(20);
});

test('product quantity should be decreased', () => {
    const newState = cartReducer(initialState, decreaseQuantity({ productId: '42' }));

    expect(newState.productsCartList.length).toBe(0);
    expect(newState.totalSum).toBe(0);
});
