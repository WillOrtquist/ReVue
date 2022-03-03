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
            <button v-on:click="peek">look at state</button>
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
        peek() {
            console.log('in peek funct')
            let messages = this.$store.getters['messages/messages']
            console.log(this.receivedMessages)
            console.log(messages)

        }
    },
    computed: {
        receivedMessages() {
            console.log(this.$store.getters)
            let messages = this.$store.getters['messages/messages']
            return messages
        },
        hasMessages() {
            console.log(this.$store.getters)
            return this.$store.getters['messages/hasMessages']
        }
    }
}

</script>