<template>
 <f7-app :params="f7params">
  
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
    <panel-left></panel-left>
    <panel-right></panel-right>
    <!-- Main view-->      
    <home></home>
    <pop-up></pop-up>
    <login-screen></login-screen>
 </f7-app>
</template>

<script>
// Import Routes
import Routes from "./routes.js";

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
  },
  data() {
    return {
      // Framework7 parameters here
      f7params: {
        id: "io.framework7.testapp", // App bundle ID
        name: "Framework7 Split-View with Vuejs Components", // App name
        theme: "auto", // Automatic theme detection
        // App routes
        routes: Routes,
        // Enable panel left visibility breakpoint
        panel: {
          leftBreakpoint: 960
        },
        view: {
          // configuration examples
          iosDynamicNavbar: true, //default: true
          xhrCache: true, //default: true
          pushState: true //default: false
        }
      }
    };
  }
};
</script>

<style lang="scss">
</style>
