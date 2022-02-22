<template>
    <div>
        Here is the contributor detail page
        <router-view></router-view>
        <!-- v-if not contributor -->
        <div>Contact Contributor</div>
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
    </div>
</template>

<script>

export default {
    // name: 'module-enable-component',
    name: 'contributor-detail',
    props: ['id'],
    components: {
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
        },
    },
    created(){
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>