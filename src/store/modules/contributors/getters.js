export default {
    contributors(state) {
        return state.contributors;
    },
    hasContributors(state) {
        return state.contributors && state.contributors.length > 0;
    },
    isContributor(state, getters, rootState, rootGetters) {
        const contributors = state.contributors;
        const userId = rootGetters.userId
        contributors.some( contributor => contributor.id === userId)
    },
}