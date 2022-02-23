<template>
    <li>
        <div>
            <a :href="emailLink">{{ email }}</a>
        </div>
        <p>{{ message }}</p>
    </li>
</template>

<script>

export default {
    props: ['email', 'message'],
    components: {
    },
    data(){
        return{
        };
    },
    methods: {
    },
    computed: {
        emailLink() {
            return 'mailto: ' + this.email;
        }
    }
}

</script>