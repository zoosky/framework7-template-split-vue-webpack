<template>
  <div id="app">
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
          <!-- Main view-->
    <f7-view main ios-edges>
      <home></home>
    </f7-view>
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
