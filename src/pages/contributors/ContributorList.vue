<template>
    <div>
        Here is a list of all of our Contributors
    </div>
    <div>
        <!-- <li v-for="contributor in filteredContributors" :key="contributor.id"> {{contributor.name}} </li> -->
        <contributor-item
            v-for="contributor in filteredContributors"
            :key="contributor.id"
            :name="contributor.name"
            :id="contributor.id">
        </contributor-item>

    </div>
    <submit-review></submit-review>
</template>

<script>
import SubmitReview from '../../components/contributors/SubmitReview.vue'
import ContributorItem from '../../components/contributors/ContributorItem.vue'
export default {
    // name: 'module-enable-component',
    components: {
        SubmitReview, ContributorItem
    },
    data(){
        return{

        }
    },
    mounted(){
    },
    watch:{
    },
    computed: {
        filteredContributors() {
            return this.$store.getters['contributors/contributors']
        },
        isContributor() {
            return this.$store.getters['contributor/isContributor'];
        },
        contactLink(contributor) {
            let contactlink = `/contributors/:${contributor.id}`;
            console.log(contactlink)
            return `/contributors/:${contributor.id}`
        }
    },
    methods: {

    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>