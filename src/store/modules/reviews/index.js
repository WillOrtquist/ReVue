import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    mutations,
    actions,
    getters,
    state() {
        return {
            reviews: [
                {
                    id: 'bogusId',
                    title: 'bogus album name',
                    genre: 'hiphop',
                    artist: 'bogus artist',
                    artistId: 'bogus artist id',
                    body: 'bogus review body',
                    score: 'bogus review score',
                    contributorId: 'bogus contributor id'
                },
            ]
        }
    }
};