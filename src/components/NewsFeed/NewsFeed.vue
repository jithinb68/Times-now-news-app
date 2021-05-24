<template>
    <b-card class="news-card">
        <b-row>
            <b-col cols="9" @click="goToDetailView(feed.url)">
                <h5>{{ feed.title ? feed.title : 'Sorry! Couldnt find the details of this story.' }}</h5>
                <p class="mb-0">{{ feed.abstract ? feed.abstract : "Sorry! Couldnt find the details of this story."}}</p>
                <div class="mt-2" @click.stop="toggleReadLater(feed, index)" v-if="this.$route.name === 'home'">
                    <b-icon icon="bookmark-fill" class="mr-2" v-if="feed.readLater"></b-icon>
                    <b-icon icon="bookmark" class="mr-2" v-else></b-icon>
                    <a>Read Later</a>
                </div>
            </b-col>
            <b-col cols="3" v-if="feed.multimedia && feed.multimedia.length" @click.prevent='click'>
                <VueSlickCarousel :arrows="false" :dots="false" :autoplay="true">
                    <div v-for="(media, index) in feed.multimedia" :key="index" class="media-wrapper">
                        <img :src="media.url ? media.url : 'https://via.placeholder.com/150'" :alt="media.caption">
                    </div>
                </VueSlickCarousel>
            </b-col>
        </b-row>   
    </b-card>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    name: "section-list",
    props: {
        feed: Object,
        index: Number
    },
    components: {
        VueSlickCarousel
    },
    methods: {
        goToDetailView(url) {
            window.open(url, '_blank').focus();
        },
        toggleReadLater(feed, index) {
            console.log(this.$route.name);
            this.$store.dispatch('toggleReadLater', {feed, index});
        }
    }
}
</script>