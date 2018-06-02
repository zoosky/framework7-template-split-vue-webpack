import HomePage from "./pages/home.vue";
import AboutPage from "./pages/about.vue";
import FormPage from "./pages/form.vue";
import DynamicRoutePage from "./pages/dynamic-route.vue";
import NotFoundPage from "./pages/not-found.vue";

import LeftPage1 from "./pages/left-page-1.vue";
import LeftPage2 from "./pages/left-page-2.vue";
import PanelLeftPage from "./pages/panel-left.vue";
import PanelRightPage from "./pages/panel-right.vue";

import RoutesEvents from "./routers-events.js";

export default [
  {
    path: "/",
    component: HomePage,
    on: RoutesEvents
  },
  {
    path: "/about/",
    component: AboutPage,
    on: RoutesEvents
  },
  {
    path: "/form/",
    component: FormPage
  },
  // Left View Pages
  {
    path: "/left-page-1/",
    component: LeftPage1
  },
  {
    path: "/left-page-2/",
    component: LeftPage2
  },
  // Right View Pages
  {
    path: "/panel-left/",
    component: PanelLeftPage
  },
  {
    path: "/panel-right/",
    component: PanelRightPage
  },

  // Page Loaders & Router
  {
    path: "/page-loader-template7/:user/:userId/:posts/:postId/",
    templateUrl: "./pages/page-loader-template7.html"
  },
  {
    path: "/page-loader-component/:user/:userId/:posts/:postId/",
    componentUrl: "./pages/page-loader-component.html"
  },
  {
    path: "/request-and-load/user/:userId/",
    component: DynamicRoutePage,
    async: function(routeTo, routeFrom, resolve /* reject */) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request TODO
      // eslint-disable-next-line to
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function() {
        // We got user data from request
        var user = {
          firstName: "Vladimir",
          lastName: "Kharlampidi",
          about: "Hello, i am creator of Framework7! Hope you like it!",
          links: [
            {
              title: "Framework7 Website",
              url: "http://framework7.io"
            },
            {
              title: "Framework7 Forum",
              url: "http://forum.framework7.io"
            }
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: "./pages/request-and-load.html"
          },
          {
            context: {
              user: user,
              uid: userId
            }
          }
        );
      }, 1000);
    }
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: "(.*)",
    component: NotFoundPage
  }
];
