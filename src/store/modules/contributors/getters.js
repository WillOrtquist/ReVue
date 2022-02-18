export default {
    contributors(state) {
        return state.contributors;
    },
    hasContributors(state) {
        return state.contributors && state.contributors.length > 0;
    },
}