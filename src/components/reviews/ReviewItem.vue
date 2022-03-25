<template>
    <base-card id="review-card">
        <ul>{{ review.title.val }}</ul>
        <!-- <ul>{{ artist.val }}</ul>
        <ul>{{ genre.val }}</ul>
        <ul>{{ body.val }}</ul>
        <ul>{{ score.val }}</ul> -->
        <delete-review :id="review.id"></delete-review>
    </base-card>
</template>

<script>

import DeleteReview from './DeleteReview.vue'
export default {
    // This should be a component for the individual reviewss
    // this.$route.path == current path
    name: 'review-item',
    // props: ['id','title', 'artist', 'genre', 'body', 'score'],
    props: ['review'],
    components: {
        DeleteReview
    },
    data(){
        return{

        }
    },
    mounted(){
        console.log('mounted' + JSON.stringify(this))
        console.log('mounted')
        // console.log('title: ' + this.$props.title.val)
        // console.log('title: ')
        // console.log('title: ')
        // console.log('title: ')
        // console.log('title: ')

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

#review-card{
    display: inline-block;
    margin-right: 1rem
}

</style>