export default {
    addReview(context, payload) {
        const reviewData = {
            id: 'bogusId',
            title: payload.title,
            genre: payload.genre,
            artist: payload.artist,
            artistId: 'bogus artist id',
            body: payload.body,
            score: payload.score,
            contributorId: context.rootGetters.userId
        }

        context.commit('addReview', reviewData);
    }
};
