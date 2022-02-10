import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return{
            reviews: [
                {
                    id: 'bogusId',
                    title: 'bogus album name',
                    genre: 'bogus genre',
                    artist: 'bogus artist',
                    artistId: 'bogus artist id',
                    body: 'bogus review body',
                    score: 'bogus review score'
                }
            ]
        },
        mutations,
        actions,
        getters
    }
};