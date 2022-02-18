<template>
    <base-card>
    <h2>Filter Reviews</h2>
    <span class="filter-option">
        <input type="checkbox" id="hiphop" checked @change="setFilter"/>
        <label for="hiphop">Hiphop</label>

        <input type="checkbox" id="other" checked @change="setFilter"/>
        <label for="other">other</label>
    </span>
    </base-card>
</template>

<script>

export default {
    data(){
        return{
            filters: {
                hiphop: true,
                other: true,
            },
        };
    },
    methods: {
        setFilter(event){
            const inputId = event.target.id; // id would be hiphop
            const isActive = event.target.checked;
            const updatedFilters = {
                ...this.filters, // copies this.filters
                [inputId]:isActive // but sets the input id to the active/inactive status
            };
            this.filters = updatedFilters;
            this.$emit('change-filter', updatedFilters);
        }
    }
}

</script>