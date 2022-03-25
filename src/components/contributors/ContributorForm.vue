<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="name"/>
        </div>
        <base-button>Register Contributor</base-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: '',
        }
    },
    methods: {
        submitForm() {
            const formData = {
                name: this.name
            }
            console.log(formData)
        }
    }
}
</script>