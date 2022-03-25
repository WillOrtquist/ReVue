<template>
    <div>
        Here is a list of all of our Contributors
    </div>
    <div>
        <!-- <li v-for="contributor in filteredContributors" :key="contributor.id"> {{contributor.name}} </li> -->
        <contributor-item
            v-for="contributor in filteredContributors"
            :key="contributor.id"
            :name="contributor.name"
            :id="contributor.id">
        </contributor-item>

    </div>
    <base-button :link="true" :to="'/contributors/register'">Register Contributor</base-button>        <!-- should maybe be its own component -->
</template>

<script>
import ContributorItem from '../../components/contributors/ContributorItem.vue'
export default {
    // name: 'module-enable-component',
    components: {
        ContributorItem
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
        filteredContributors() {
            console.log(this.$store.getters['contributors/contributors'])
            return this.$store.getters['contributors/contributors']
        },
        isContributor() {
            return this.$store.getters['contributor/isContributor'];
        },
        contactLink(contributor) {
            let contactlink = `/contributors/:${contributor.id}`;
            console.log(contactlink)
            return `/contributors/:${contributor.id}`
        }
    },
    methods: {

    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}

</style>