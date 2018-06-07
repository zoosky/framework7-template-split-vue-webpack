import HomePage from "./pages/home.vue";
import AboutPage from "./pages/about.vue";
import FormPage from "./pages/form.vue";
import DynamicRoutePage from "./pages/dynamic-route.vue";
import NotFoundPage from "./pages/not-found.vue";

import LeftPage1 from "./pages/left-page-1.vue";
import LeftPage2 from "./pages/left-page-2.vue";
import PanelLeftPage from "./pages/panel-left.vue";
import PanelRightPage from "./pages/panel-right.vue";

import TabsRoutable from "./pages/tabs-routable.vue";
import Tab1 from "./pages/tabs/tab1.vue";
import Tab2 from "./pages/tabs/tab2.vue";
import Tab3 from "./pages/tabs/tab3.vue";

import RequestAndLoad from "./pages/request-and-load.vue";

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
  {
    path: "/tabs-routable/",
    component: TabsRoutable,
    tabs: [
      {
        path: "/",
        id: "tab1",
        component: Tab1
      },
      {
        path: "/tab2/",
        id: "tab2",
        component: Tab2
      },
      {
        path: "/tab3/",
        id: "tab3",
        component: Tab3
      }
    ]
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
    path: "/dynamic-route/blog/:blogId/post/:postId/",
    component: DynamicRoutePage
  },
  {
    path: "/request-and-load/user/:userId/",
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
        console.log("route", routeTo, routeFrom);
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
            component: RequestAndLoad
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
