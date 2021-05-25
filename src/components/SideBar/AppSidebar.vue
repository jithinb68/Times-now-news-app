<template>
  <div class="sidebar">
    <div class="logo-wrapper">
        <h4 class="text-center">Section Listing</h4>
    </div>
    <div>
      <ul class="nav">
        <li v-for="(list, index) in sectionLists" :key="index" class="nav-item">
          <SectionList :list="list"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import SectionList from "@/components/SideBar/SectionList";

  export default {
    name: "app-sidebar",
    computed: {
        ...mapState(['sectionLists'])
    },
    components: {
      SectionList
    },
    mounted() {
      this.getSectionList()
      
    },
    methods: {
      getSectionList() {
          !this.sectionLists.length && this.$store.dispatch('getSectionList');
      }
    }
  }
</script>