<template>
    <div>
        Here is a list of all of our Contributors
    </div>
    <div>
        <li v-for="contributor in filteredContributors" :key="contributor.id"> {{contributor.name}} </li>
    </div>
    <submit-review></submit-review>
</template>

<script>
import SubmitReview from '../../components/contributors/SubmitReview.vue'
export default {
    // name: 'module-enable-component',
    components: {
        SubmitReview
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
        filteredContributors(){
            return this.$store.getters['contributors/contributors']
        }
    },
    methods: {

    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>