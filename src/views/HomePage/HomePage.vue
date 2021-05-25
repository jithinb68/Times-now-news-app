<template>
    <Loader v-if="isFeedLoading"/>
    <div v-else>
        <PageHeader title="News Feed" :showFilterParam="true"/>
        <ul v-if="filteredNewsFeeds.length">
            <li v-for="(feed, index) in filteredNewsFeeds" :key="index">
                <NewsFeed :feed="feed" :index="index" :thumbnailPresent="true"/>
            </li>
        </ul>
        <NoResults info="No results found for this filter. Try changing the filter" :showResetButton="true" v-else/>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import NewsFeed from "@/components/NewsFeed/NewsFeed";
import Loader from "@/components/Loader/Loader";
import NoResults from "@/components/NoResults/NoResults";
import PageHeader from "@/components/PageHeader/PageHeader";

export default {
    components: {
        NewsFeed,
        Loader,
        NoResults,
        PageHeader
    },
    computed: {
        ...mapState(['filteredNewsFeeds', 'isFeedLoading', 'filterParam'])
    },
    mounted() {
        this.getNewsFeed();
    },
    methods: {
        getNewsFeed() {
            !this.filteredNewsFeeds.length &&  !this.filterParam && this.$store.dispatch('getNewsFeed');
        },
        resetNewsFeedFilter() {
            this.$store.dispatch('resetFilter');
        }
    }
}
</script>

<style>

</style>