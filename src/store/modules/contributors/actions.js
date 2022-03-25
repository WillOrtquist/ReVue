export default {
    registerContributor(context, payload) {
        const newContributor = {
            id: new Date.toIsoString(),
            name: payload.name
        }

        context.commit('registerContributor', newContributor)
    }
};
