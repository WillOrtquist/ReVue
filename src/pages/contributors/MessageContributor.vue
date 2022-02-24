<template>
    <div>
        <label for="email">Your Email:</label>
        <input type="email" id="email" v-model.trim="email"/>
    </div>
    <div>
        <label for="email">Message:</label>
        <textarea rows="5" id="message" v-model.trim="message"/>
    </div>
    <p class="errors" v-if="!formIsValid">Please enter a valid email and non-empty message</p>
    <div class="actions">
        <base-button v-on:click="submitForm">Send Message</base-button>
    </div>
</template>

<script>

export default {
    // This should be a component for the individual reviews
    // receives data through prop
    // this.$route.path == current path
    name: 'message-contributor',
    components: {
    },
    data(){
        return{
            email: '',
            message: '',
            formIsValid: true,
        }
    },
    mounted(){
    },
    watch:{
    },
    computed: {

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
            this.$router.push(`/contributors/${this.$route.id}`)
        },

    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>