import { InitialStateCartType } from '../../features/cartPage/cart-reducer';

export const saveState = (state: InitialStateCartType): void => {
    try {
        localStorage.setItem('order', JSON.stringify(state));
        // eslint-disable-next-line no-empty
    } catch (e) {
        // Ignore write errors.
    }
};

export const loadState = (): InitialStateCartType | undefined => {
    try {
        const serializedState = localStorage.getItem('order');

        if (serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};
