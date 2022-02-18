<template>
    <div>
        Here the review Detail Page
    </div>
</template>

<script>

export default {
    props: ['id'], // use this prop to fetch relevant data from store
    components: {
    },
    data(){
        return{
            selectedReview: null

        }
    },
    created() {
        this.selectedReview = this.$store.getters['reviews/reviews'].find(
            (review) => review.id === this.id
        );
    },
    watch:{
    },
    computed: {
    },
    methods: {

    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>