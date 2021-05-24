<template>
    <div>
        <PageHeader title="Saved Items"/>
         <ul v-if="filteredReadLaterFeed.length">
            <li v-for="(feed, index) in filteredReadLaterFeed" :key="index">
                <NewsFeed :feed="feed" :index="index"/>
            </li>
        </ul>
        <NoResults info="No saved items" v-else />
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
        ...mapState(['filteredReadLaterFeed', 'filterParam'])
    }
}
</script>