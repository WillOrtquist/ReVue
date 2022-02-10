import { createStore } from 'vuex';

import reviewsModule from './modules/reviews/index.js';

const store = createStore({
    modules: {
        reviews: reviewsModule
    }
});

export default store;