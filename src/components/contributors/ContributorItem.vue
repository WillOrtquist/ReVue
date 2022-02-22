<template>
    <router-link :to="contributorDetailLink">{{ name }}</router-link>
    <li>{{ id }}</li>
</template>

<script>

export default {
    // This should be a component for the individual reviews
    // receives data through prop
    // this.$route.path == current path
    name: 'contributor-item',
    props: ['name','id'],
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
        contributorDetailLink() {
            return `/contributors/${this.id}`
        }

    },
    methods: {

    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>