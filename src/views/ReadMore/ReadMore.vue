<template>
    <div>
        <PageHeader title="Saved Items" :showFilterParam="false"/>
         <ul v-if="readLaterFeeds.length">
            <li v-for="(feed, index) in readLaterFeeds" :key="index" class="d-flex align-items-center w-100">
                <NewsFeed :feed="feed" :index="index" :thumbnailPresent="false" class="w-75"/>
                <b-button @click="removeFromReadLater(feed)" class="ml-3">Remove from readmore</b-button>
            </li>
        </ul>
        <NoResults info="No saved items" :showResetButton="false" v-else />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import NoResults from "@/components/NoResults/NoResults";
import NewsFeed from "@/components/NewsFeed/NewsFeed";
import PageHeader from "@/components/PageHeader/PageHeader";

export default {
    components: {
        NewsFeed,
        NoResults,
        PageHeader
    },
    computed: {
        ...mapState(['readLaterFeeds', 'filterParam'])
    },
    methods: {
        removeFromReadLater(feed) {
            this.$store.dispatch('removeFromReadLater', feed);
        }
    }
}
</script>