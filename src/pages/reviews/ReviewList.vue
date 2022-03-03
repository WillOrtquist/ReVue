<template>
    <div>
        Here is a list of all of our reviews
    </div>
    <review-filter @change-filter="setFilter"></review-filter>
    <div>
        <!-- <li v-for="review in filteredReviews" :key="review.id"> {{review.title}}</li> -->
        <review-item
            v-for="review in filteredReviews"
            :key="review.id"
            :title="review.title"
            :artist="review.artist"
            :genre="review.genre"
        ></review-item>
    </div>
</template>

<script>
import ReviewItem from '../../components/reviews/ReviewItem.vue';
import ReviewFilter from '../../components/reviews/ReviewFilter.vue';
export default {
    // name: 'module-enable-component',
    components: {
        ReviewItem,
        ReviewFilter
    },
    data(){
        return{
            activeFilters: {
                hiphop: true,
                other: true,
            }

        }
    },
    mounted(){
    },
    watch:{
    },
    computed: {
        filteredReviews() {
            const reviews = this.$store.getters['reviews/reviews'];
            console.log('in filtered reviews computed property: ' + reviews.length)

            const filteredReviews =  reviews.filter( review => {
                if (this.activeFilters.hiphop === true && review.genre == "hiphop"){
                    return true;
                }
                if (this.activeFilters.other){
                    return true;
                }
                return false;
            })
            return filteredReviews
        },
        hasReviews() {
            return this.$store.getters['reviews/hasReviews']
        }
    },
    created() {
        this.loadReviews()
    },
    methods: {
        setFilter(updatedFilters) { // argument is passed when even is emitted
            this.activeFilters = updatedFilters;
        },
        loadReviews() {
            this.$store.dispatch('reviews/loadReviews');
        }

    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>