<template>
  <section class="main-view">
    <div class="page-body-wrapper">
      <SideBar v-if="isNotReadMoreRoute"></SideBar>
      <div :class="isNotReadMoreRoute ? 'main-panel' : 'w-100 main-panel'">
        <NavBar></NavBar>
        <div class="content-wrapper">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import SideBar from "@/components/SideBar/AppSidebar";
  import NavBar from "@/components/NavBar/AppNavbar";
  export default {
    name: "layout",
    computed: {
      isNotReadMoreRoute() {
        return this.$route.name !== 'readmore'
      }
    },
    components: {
      SideBar,
      NavBar
    }
  }
</script>