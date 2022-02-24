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
            <button v-on:click="showMessages">Show messages</button>
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
        showMessages() {
            // let msgs = this.$store.getters['messages/messsages']
            console.log(this.$store)
            console.log(this.$store.getters)
        }
    },
    computed: {
        receivedMessages() {
            return this.$store.getters['messages/messages']
        },
        hasMessages() {
            return this.$store.getters['messages/hasMesssages']
        }
    }
}

</script>