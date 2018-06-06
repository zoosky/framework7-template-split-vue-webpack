<template>
  <div id="app">
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
    <panel-left></panel-left>
    <panel-right></panel-right>
    <!-- Main view-->      
    <home></home>
    <pop-up></pop-up>
    <login-screen></login-screen>
  </div>
</template>

<script>
import Home from "./pages/home.vue";
import PanelLeft from "./pages/panel-left.vue";
import PanelRight from "./pages/panel-right.vue";
import PopUp from "./components/popup.vue";
import LoginScreen from "./components/login-screen.vue";
export default {
  name: "app",
  components: {
    Home,
    PanelLeft,
    PanelRight,
    PopUp,
    LoginScreen
  }
};
</script>

<style lang="scss">
</style>
