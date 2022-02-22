<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label :class="{invalid: !title.isValid}" for="title">Album Title</label>
            <input id="title" type="text" v-model.trim="title.val" @blur="clearValidity('title')"/>
            <p v-if="!title.isValid">Title cannot be empty</p>
        </div>
        <div class="form-control">
            <label :class="{invalid: !genre.isValid}" for="genre">Album Genre</label>
            <input id="genre" type="text" v-model.trim="genre.val" @blur="clearValidity('genre')"/>
            <p v-if="!genre.isValid">Genre cannot be empty</p>
        </div>
        <div class="form-control">
            <label :class="{invalid: !artist.isValid}" for="artist">Artist</label>
            <input id="artist" type="text" v-model.trim="artist.val" @blur="clearValidity('artist')"/>
            <p v-if="!artist.isValid">Artist cannot be empty</p>
        </div>
        <div class="form-control">
            <label :class="{invalid: !body.isValid}" for="body">Review Body</label>
            <input id="body" type="text" v-model.trim="body.val" @blur="clearValidity('body')"/>
            <p v-if="!body.isValid">Review Body cannot be empty</p>
        </div>
        <div class="form-control">
            <label :class="{invalid: !score.isValid}" for="score">Review Score</label>
            <input id="score" type="number" v-model.number="score.val" @blur="clearValidity('score')"/>
            <p v-if="!score.isValid">Review Score must be integer between 0 and 10</p>
        </div>
        <div v-if="!formIsValid">Please fix errors and submit review again. </div>
        <base-button>Submit Review</base-button>
    </form>
</template>

<script>

export default {
    emits: ['save-data'],
    data(){
        return{
            title: {
                val: '',
                isValid: true,
            },
            genre: {
                val: '',
                isValid: true,
            },
            artist: {
                val: '',
                isValid: true,
            },
            body: {
                val: '',
                isValid: true,
            },
            score: {
                val: null,
                isValid: true,
            },
            formIsValid: true,
        }
    },
    methods: {
        validateForm() {
            this.formIsValid = true;
            if(this.title.val == '') {
                this.title.isValid = false;
                this.formIsValid = false;
            }
            if(this.genre.val == '') {
                this.genre.isValid = false;
                this.formIsValid = false;
            }
            if(this.artist.val == '') {
                this.artist.isValid = false;
                this.formIsValid = false;
            }
            if(this.body.val == '') {
                this.body.isValid = false;
                this.formIsValid = false;
            }
            if(!this.score.val || this.score.val < 0 || this.score.val > 10) {
                this.score.isValid = false;
                this.formIsValid = false;
            }

        },
        submitForm() {
            this.validateForm();

            if(!this.formIsValid){
                return;
            }

            const formData = {
                title: this.title,
                genre: this.genre,
                artist: this.artist,
                body: this.body,
                score: this.score,
            };

            this.$emit('save-data', formData);
        },
        clearValidity(input) {
            this[input].isValid = true;
        }
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.invalid{
    color: red;
}


</style>