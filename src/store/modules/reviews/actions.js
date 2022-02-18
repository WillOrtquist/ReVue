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
        }

        context.commit('addReview', reviewData);
    }
};
