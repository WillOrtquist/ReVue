<template>
    <section>
        <base-card>
            <header>
                <h2>Messages Received:</h2>
            </header>
            <ul v-if="hasMessages">
                <message-item v-for="msg in receivedMessages"
                :key="msg.id"
                :email="msg.userEmail"
                :message="msg.message"
                ></message-item>
            </ul>
            <h3 v-else>You haven't received any messages yet!</h3>
        </base-card>
    </section>
</template>

<script>
import MessageItem from '../../components/messages/MessageItem.vue';
export default {
    components: {
        MessageItem
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