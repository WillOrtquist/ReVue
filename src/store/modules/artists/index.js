import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    mutations,
    actions,
    getters,
    state() {
        return{
            artists: [
                {
                    id: 'bogusId',
                    name: 'Bogus Name',
                    genre: 'bogus genre',
                    reviewIds:[]
                }
            ]
        }
    }
};