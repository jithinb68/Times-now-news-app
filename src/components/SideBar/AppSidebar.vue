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
  import SectionList from "@/components/SideBar/SectionList";
  import axios from 'axios'

  export default {
    name: "app-sidebar",
    data() {
      return {
        sectionLists: []
      }
    },
    components: {
      SectionList
    },
    mounted() {
      this.getSectionList()
      
    },
    methods: {
      getSectionList() {
          axios({url: 'https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=uR1j3A82i48Cvvn6A4pQRWBCIhUCIvG7', method: 'GET' })
          .then(resp => {
            this.sectionLists =  resp.data.results;
          })
          .catch(err => {
            console.log(err);
          })
      }
    }
  }
</script>