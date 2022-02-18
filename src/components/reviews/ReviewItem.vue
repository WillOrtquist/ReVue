<template>
    <li>{{ title }}</li>
    <li>{{ artist }}</li>
    <li>{{ genre }}</li>
</template>

<script>

export default {
    // This should be a component for the individual reviews
    // receives data through prop
    // this.$route.path == current path
    name: 'review-item',
    props: ['title', 'artist', 'genre'],
    components: {
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

    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>