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
            contributors: [
                {
                    id: 'bogusId',
                    name: 'Will Ortquist',
                },
                {
                    id: 'otherBogusId',
                    name: 'Oill Wortquist'
                }
            ]
        }
    }
};