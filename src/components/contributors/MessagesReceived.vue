<template>
    <base-button :link="true" :to="messageContributorLink">View Received Messages</base-button>
    <!-- <base-button :to="messageContributorLink">Message Contributor</base-button> -->
</template>
>

<script>
// import MessageItem from '../messages/MessageItem.vue';
export default {
    components: {
        // MessageItem
    },
    data(){
        return{
        };
    },
    methods: {
    },
    computed: {
        receivedMessages() {
            return this.$store.getters['messages/messsages']
        },
        hasMessages() {
            return this.$store.getters['messages/hasMesssages']
        }
    }
}

</script>