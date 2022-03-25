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
            // would probably add a permissions level
            contributors: [
                {
                    id: 'bogusId',
                    name: 'Will Ortquist',
                    permissions: 'moderator',
                },
                {
                    id: 'otherBogusId',
                    name: 'Oill Wortquist',
                    permissions: 'contributor'
                }
            ]
        }
    }
};