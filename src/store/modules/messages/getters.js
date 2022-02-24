export default {
    messages(state) {
        console.log(state.messages)
        return state.messages;
    },
    hasMessages(state) {
        return state.messages && state.messages.length > 0;
    }
}