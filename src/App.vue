<template>
  <div id="app">
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
    <home></home>
  </div>
</template>

<script>
import Home from "./pages/home.vue";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style lang="scss">
</style>
