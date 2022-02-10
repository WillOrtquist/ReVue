<template>
    <Header></Header>
    <router-view></router-view>
</template>

<script>

import Header from './components/layout/Header.vue';

export default {
    // name: 'module-enable-component',
    components: {
        Header
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

<style>
</style>