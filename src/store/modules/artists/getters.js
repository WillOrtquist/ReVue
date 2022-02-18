export default {
    artists(state) {
        return state.artists;
    },
    hasArtists(state) {
        return state.artists && state.artists.length > 0;
    },
}