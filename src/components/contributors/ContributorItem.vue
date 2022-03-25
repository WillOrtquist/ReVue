<template>
    <div id="contributor-item">
        <h3><base-button :link="true" :to="contributorDetailLink">{{ name }}</base-button></h3>
        <h4>{{ id }}</h4>
        <!-- <div class="actions">
            <base-button :link="true" :to="contributorDetailLink">View Content</base-button>
        </div> -->
    </div>
</template>

<script>

export default {
    // This should be a component for the individual reviews
    // receives data through prop
    // this.$route.path == current path
    name: 'contributor-item',
    props: ['name','id'],
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
        contributorDetailLink() {
            return `/contributors/${this.id}`
        }

    },
    methods: {

    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #contributor-item {
        margin: 1rem 0;
        border: 1px solid #424242;
        border-radius: 12px;
        padding: 1rem;
        margin-left: 2rem;
        margin-right: 2rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    h3,
    h4 {
        margin: 0.5rem 0;
    }

    .actions {
        display: flex;
        justify-content: flex-end;
    }

</style>