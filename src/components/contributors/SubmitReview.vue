<template>
    <section>
        <base-card>
            <h2>Contributor, submit a review!</h2>
            <review-form @save-data="saveData"></review-form>
        </base-card>
    </section>
</template>

<script>

import ReviewForm from './ReviewForm.vue'
export default {
    components: {
        ReviewForm
    },
    data(){
        return{
        };
    },
    methods: {
        saveData(data) { // gets form data from $emit
            this.$store.dispatch('reviews/addReview',data)
        }
    }
}

</script>