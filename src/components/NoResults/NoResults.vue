<template>
    <div class="d-flex flex-column justify-content-center align-items-center my-5">
        <div class="text-center">
                <b-icon icon="emoji-frown" style="width: 40px; height: 40px;"></b-icon>
        </div>
        <h6 class="text-center mt-3">Sorry! {{ info }}</h6>
        <b-button @click="resetNewsFeedFilter()">Reset Filter</b-button>
    </div>
</template>


<script>

export default {
    props: {
        info: String
    },
    methods: {
        resetNewsFeedFilter() {
            this.$store.dispatch('resetFilter');
        }
    }
}
</script>