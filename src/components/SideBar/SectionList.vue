<template>
     <div class="nav-link" @click="filterNewsFeed(list.display_name)">
        <b-icon icon="star-fill"></b-icon>
        <span class="ml-2">{{ list.display_name }}</span>
      </div>
</template>

<script>
  export default {
    name: "section-list",
     props: {
      list: Object,
    },
    methods: {
      filterNewsFeed(selectedSection) {
        this.$store.dispatch('filterNewsFeed', selectedSection);
      }
    }
  }
</script>