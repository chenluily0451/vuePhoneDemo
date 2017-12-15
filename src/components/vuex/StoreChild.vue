<template>
  <p>
    child<span>{{count}}</span>
  </p>
</template>

<script>
export default {
    name: 'StoreChild',
    computed: {
      count: function() {
        return this.$store.state.count
      }
    }
}
</script>
