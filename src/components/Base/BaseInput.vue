<template>
    <div>
        <slot></slot>
        <input 
        class="form-control"
        :placeholder="placeholder"
        :type="type"
        :value="value"
         @input="$emit('input', $event.target.value)"
        >
    </div>
</template>

<script>
  export default {
    name: "base-input",
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      value: {
        type: [String, Number],
        default: ''
      },
      type: {
        type: String,
        default: ''
      }
    }
  }
</script>