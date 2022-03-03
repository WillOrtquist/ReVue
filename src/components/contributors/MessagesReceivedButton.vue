<template>
    <base-button :link="true" :to="receivedMessagesLink">View Received Messages</base-button>
</template>
>

<script>
// import MessageItem from '../messages/MessageItem.vue';
export default {
    name: 'messages-received',
    props: ['id'],
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
        receivedMessagesLink() {
            return `/contributors/${this.id}/messagesReceived`
        }
    }
}

</script>