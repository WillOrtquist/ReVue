<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="title">Album Title</label>
            <input id="title" type="text" v-model.trim="title"/>
        </div>
        <div class="form-control">
            <label for="genre">Album Genre</label>
            <input id="genre" type="text" v-model.trim="genre"/>
        </div>
        <div class="form-control">
            <label for="artist">Artist</label>
            <input id="artist" type="text" v-model.trim="artist"/>
        </div>
        <div class="form-control">
            <label for="body">Review Body</label>
            <input id="body" type="text" v-model.trim="body"/>
        </div>
        <div class="form-control">
            <label for="score">Review Score</label>
            <input id="score" type="number" v-model.number="score"/>
        </div>
        <base-button>Submit Review</base-button>
    </form>
</template>

<script>

export default {
    emits: ['save-data'],
    data(){
        return{
            title: '',
            genre: '',
            artist: '',
            body: '',
            score: null,
        }
    },
    methods: {
        submitForm() {
            const formData = {
                title: this.title,
                genre: this.genre,
                artist: this.artist,
                body: this.body,
                score: this.score,
            };

            this.$emit('save-data', formData);

        }
    }
}

</script>