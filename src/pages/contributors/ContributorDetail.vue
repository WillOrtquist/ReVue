<template>
    <div>
        Here is the contributor detail page
        <router-view></router-view>
        <!-- v-if not contributor -->

        <div>Here is the content the Contributor has contributed:</div>
        <div>Bogus Content</div>
        <div>Bogus Content</div>
        <div>Bogus Content</div>
        <div>Bogus Content</div>
        <div>Bogus Content</div>
        <message-contributor :id="id"></message-contributor>
        <messages-received-button :id="id"></messages-received-button>
        <submit-review :id="id"></submit-review>
    </div>
</template>

<script>

import MessageContributor from '../../components/contributors/MessageContributor.vue';
// import MessagesReceived from '../../pages/contributors/MessagesReceived.vue';
import MessagesReceivedButton from '../../components/contributors/MessagesReceivedButton.vue';
import SubmitReview from '../../components/contributors/SubmitReview.vue'

// the MessageContributor and MessagesReceivedButton should just be changed to buttons, don't need to import entire components

export default {
    // name: 'module-enable-component',
    name: 'contributor-detail',
    props: ['id'],
    components: {
        MessageContributor,
        SubmitReview,
        MessagesReceivedButton
    },
    data(){
        return{
            email: '',
            message: '',
            formIsValid: true,
        }
    },
    methods: {
        submitForm(){
            this.formIsValid = true;
            if (this.email === '' || !this.email.includes('@') || this.message === ''){
                this.formIsValid = false;
                return;
            }
            this.$store.dispatch('messages/messageContributor', {
                coachId: this.$route.id,
                email: this.email,
                message: this.message
            });
            this.$router.push('/contributors')
        },
    },
    created(){
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>