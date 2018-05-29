<template>
        <!-- Your main view, should have "view-main" class -->
    <div class="view view-main ios-edges">
      <!-- Page, data-name contains page name which can be used in callbacks -->
      <div class="page" data-name="home">
        <!-- Top Navbar -->
        <div class="navbar">
          <div class="navbar-inner">
            <div class="left">
              <a href="#" class="link icon-only panel-open" data-panel="left">
                <i class="icon f7-icons ios-only">menu</i>
                <i class="icon material-icons md-only">menu</i>
              </a>
            </div>
            <div class="title sliding">My App</div>
            <div class="right">
              <a href="#" class="link icon-only panel-open" data-panel="right">
                <i class="icon f7-icons ios-only">menu</i>
                <i class="icon material-icons md-only">menu</i>
              </a>
            </div>
          </div>
        </div>
        <!-- Toolbar-->
        <div class="toolbar">
          <div class="toolbar-inner">
            <a href="#" class="link">Left Link</a>
            <a href="#" class="link">Right Link</a>
          </div>
        </div>
        <!-- Scrollable page content-->
        <div class="page-content">
          <div class="block block-strong">
            <p>This is an example of split view application layout, commonly used on tablets. The main approach of such kind of layout is that you can see different views at the same time.</p>

            <p>Each view may have different layout, different navbar type (dynamic, fixed or static) or without navbar.</p>

            <p>The fun thing is that you can easily control one view from another without any line of JavaScript just using "data-view" attribute on links.</p>
          </div>

          <div class="block-title">Navigation</div>
          <div class="list">
            <ul>
              <li>
                <a href="/about/" class="item-content item-link">
                  <div class="item-inner">
                    <div class="item-title">About</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="/form/" class="item-content item-link">
                  <div class="item-inner">
                    <div class="item-title">Form</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div class="block-title">Modals</div>
          <div class="block block-strong">
            <div class="row">
              <div class="col-50">
                <a href="#" class="button button-raised button-fill popup-open" data-popup="#my-popup">Popup</a>
              </div>
              <div class="col-50">
                <a href="#" class="button button-raised button-fill login-screen-open" data-login-screen="#my-login-screen">Login Screen</a>
              </div>
            </div>
          </div>

          <div class="block-title">Panels</div>
          <div class="block block-strong">
            <div class="row">
              <div class="col-50">
                <a href="#" class="button button-raised button-fill panel-open" data-panel="left">Left Panel</a>
              </div>
              <div class="col-50">
                <a href="#" class="button button-raised button-fill panel-open" data-panel="right">Right Panel</a>
              </div>
            </div>
          </div>

          <div class="block-title searchbar-hide-on-search">Page Loaders & Router</div>
          <div class="list links-list searchbar-hide-on-search">
            <ul>
              <li>
                <a href="/page-loader-template7/vladimir/123/about-me/1/?start=0&end=30#top">Template7 Page</a>
              </li>
              <li>
                <a href="/page-loader-component/vladimir/123/about-me/1/?start=0&end=30#top">Component Page</a>
              </li>
              <li>
                <a href="/load-something-that-doesnt-exist/">Default Route (404)</a>
              </li>
              <li>
                <a href="/request-and-load/user/123456/">Request Data & Load</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>
