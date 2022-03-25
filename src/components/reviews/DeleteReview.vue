<template>
    <div>
        <base-button v-on:click="deleteReview">Delete Review</base-button>
    </div>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue'

export default {
    // This should be a component for the individual reviews
    // receives data through prop
    // this.$route.path == current path
    name: 'review-item',
    props: ['id'],
    components: {
        BaseButton
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

    },
    methods: {
        deleteReview() {
            this.$store.dispatch('reviews/deleteReview',this.id)
        }

    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>