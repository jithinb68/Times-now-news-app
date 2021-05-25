<template>
     <div class="d-flex justify-content-between mb-3">
        <h4>{{ title }}</h4>
        <div v-if="showFilterParam">
            <h6 v-if="filterParam">Showing {{ filterParam }} stories</h6>
            <h6 v-else>Showing all stories</h6>
        </div>
        <b-button @click="$router.push('/home')" v-else>Back to Home</b-button>
     </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: {
        title: String,
        showFilterParam: Boolean
    },
    computed: {
        ...mapState(['filterParam'])
    },
}
</script>