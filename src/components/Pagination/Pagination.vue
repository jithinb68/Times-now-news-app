<template>
    <b-pagination
      v-model="currentPage"
      :total-rows="10"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
</template>

<script>
  export default {
    data() {
      return {
        perPage: 3,
        currentPage: 1,
      }
    }
  }
</script>
