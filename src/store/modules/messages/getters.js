export default {
    messages(state, getters, rootState, rootGetters) {
        console.log('in messages getter')
        let contributorId = rootGetters.userId;
        state.messages.filter( msg => msg.contributorId === contributorId)
        return state.messages;
    },
    hasMessages(state, getters) {
        return getters.messages && getters.messages.length > 0;
    }
}