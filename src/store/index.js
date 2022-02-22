import { createStore } from 'vuex';

import reviewsModule from './modules/reviews/index.js';
import artistsModule from './modules/artists/index.js';
import contributorsModule from './modules/contributors/index.js';

const store = createStore({
    modules: {
        reviews: reviewsModule,
        artists: artistsModule,
        contributors: contributorsModule,
    },
    state() {
        return {
            userId: 'c3'
        };
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});

export default store;