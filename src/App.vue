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
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>