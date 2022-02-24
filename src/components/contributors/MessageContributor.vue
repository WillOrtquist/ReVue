<template>
    <base-button :link="true" :to="messageContributorLink">Message Contributor</base-button>
    <!-- <base-button :to="messageContributorLink">Message Contributor</base-button> -->
</template>

<script>

export default {
    // This should be a component for the individual reviews
    // receives data through prop
    // this.$route.path == current path
    name: 'message-contributor',
    props: ['id'],
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
        messageContributorLink() {
            console.log(`/contributors/${this.id}/message`)
            return `/contributors/${this.id}/message`
        }

    },
    methods: {

    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>