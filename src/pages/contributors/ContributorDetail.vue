<template>
    <div>
        Here is the contributor detail page
        <router-view></router-view>
        <router-link to="/contributors/bogusId/message">Message Contributor</router-link>
    </div>
</template>

<script>

export default {
    // name: 'module-enable-component',
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