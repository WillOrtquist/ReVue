<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link v-else>
        <slot></slot>
    </router-link>
</template>

<script>

export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: null
        },
        link: {
            type: Boolean,
            required: false,
            default: false, // by default render button
        },
        to: {
            type: String,
            required: false,
            default: "/"
        }
    },
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

    },
    methods: {

    }
}

</script>

<!-- This file determines how our buttons look. This styling section can support different classes
The different classes are passed in with the mode prop -->
<style scoped>

</style>