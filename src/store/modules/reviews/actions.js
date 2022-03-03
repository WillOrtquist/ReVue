export default {
    async addReview(context, payload) {
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

        // fetch returns a promise, can use .then()
        const response = await fetch('https://music-revue-fde97-default-rtdb.firebaseio.com/reviews.json', {
            method: 'POST',
            body: JSON.stringify(reviewData)
        });

        // const responseData = await response.json();

        if (!response.ok) {
            // error ...
        }

        context.commit('addReview', reviewData);
    },
    async loadReviews(context, ) {
        const response = await fetch(
            'https://music-revue-fde97-default-rtdb.firebaseio.com/reviews.json'
        );
        const responseData = await response.json();

        if (!response.ok) {
            // ...
        }

        const reviews = []
        for (const key in responseData) {
            const review = {
                id: responseData[key].id,
                title: responseData[key].title,
                genre: responseData[key].genre,
                artist: responseData[key].artist,
                artistId: responseData[key].artistId,
                body: responseData[key].body,
                score: responseData[key].score,
                contributorId: responseData[key].contributorId,
            };
            reviews.push(review)
        }
        context.commit('setReviews', reviews);
    }
};
