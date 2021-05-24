<template>
  <b-button class="base-btn" @click="onButtonClick">
    <div class="d-flex align-items-center justify-content-center">
      <slot name="btn-img"></slot> 
      {{ buttonText }} 
      <slot name="btn-icon"></slot>
    </div>
  </b-button>
</template>

<script>
  export default {
    name: "base-button",
    props: {
        buttonText: String,
        onButtonClick: { type: Function }, 
    }
  }
</script>