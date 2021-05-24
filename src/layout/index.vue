<template>
  <section class="main-view">
    <div class="page-body-wrapper">
      <SideBar></SideBar>
      <div class="main-panel">
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
    components: {
      SideBar,
      NavBar
    }
  }
</script>