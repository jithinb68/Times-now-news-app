<template>
    <div class="error-page">
        <div class="error-no">404</div>
        <div class="error-text">Page not Found</div>
    </div>
</template>

<script>
  export default {
    name: "error",
    created() {
         this.$router.push('404');
    }
 
  }
</script>