export default {
    addReview(state, payload) {
        console.log('in add review mutation: ' + payload)
        state.reviews.push(payload);
    }
};