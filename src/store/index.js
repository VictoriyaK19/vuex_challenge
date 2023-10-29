import { createStore} from 'vuex';

import productModule from './modules/product.js';
import cardModule from './modules/cart.js'

const store = createStore({
    modules: {
        prods: productModule,
        cart: cartModule
    }
});

export default store;