export default {
    messageContributor(context, payload) {
        const newMessage = {
            id: new Date().toISOString(),
            contributorId: payload.contributorId,
            userEmail: payload.email,
            message: payload.message,
        }
        context.commit('addMessage', newMessage)
    }
}