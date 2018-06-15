<template>
<!-- Main view-->
<f7-view id="main-view" main name="main-view" ios-edges>
      
  <f7-page name="home">
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>My App</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
        <!-- Toolbar, fixed on bottom -->
      <f7-toolbar>
        <f7-link text="Page Left" href="/left-page-1/">
          <f7-icon if-ios="f7:drawer" if-md="material:drawer" active>

          </f7-icon>
        </f7-link>
        <f7-link>
          <f7-icon if-ios="f7:today" if-md="material:today">
            <f7-badge color="red">7</f7-badge>
          </f7-icon>
        </f7-link>
        <f7-link text="Form" href="/form/">
          <f7-icon if-ios="f7:settings" if-md="material:settings">
            <f7-badge color="green">2</f7-badge>
          </f7-icon> 
        </f7-link>

    </f7-toolbar>  

    <f7-block strong>
      <p>This is an example of split view application layout, commonly used on tablets. The main approach of such kind of layout is that you can see different views at the same time.</p>
      <p>Each view may have different layout, different navbar type (dynamic, fixed or static) or without navbar.</p>
      <p>The fun thing is that you can easily control one view from another without any line of JavaScript just using "data-view" attribute on links.</p>
    </f7-block>

    <time-stamp></time-stamp>    
    
    <f7-block>
      <p>Here comes main view page text</p>
    </f7-block>
    <f7-block-title>Navigation</f7-block-title>
    <f7-list>
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item link="/form/" title="Form"></f7-list-item>
      <f7-list-item link="/left-page-1/" title="Page Left 1"></f7-list-item>
      <f7-list-item link="/left-page-2/" title="Page Left 2"></f7-list-item>
      <f7-list-item link="/tabs-routable/" title="Tabs Routable"></f7-list-item>
    </f7-list>
    
    
    <f7-block-title>Panels</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised panel-open="left">Left Panel</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised panel-open="right">Right Panel</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Modals</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised popup-open="#popup">Popup</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised login-screen-open="#login-screen">Login Screen</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title searchbar-hide-on-search>Page Loaders & Router</f7-block-title>
    <f7-list searchbar-hide-on-search>
      <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>
      <f7-list-item link="/load-something-that-doesnt-exist/" title="Default Route (404)"></f7-list-item>
      <f7-list-item link="/page-loader-template7/vladimir/123/about-me/1/?start=0&end=30#top" title="Template7 Page"></f7-list-item>
      <f7-list-item link="/page-loader-component/vladimir/123/about-me/1/?start=0&end=30#top" title="Component Page"></f7-list-item>
      <f7-list-item link="/request-and-load/user/123456/" title="Request Data & Load"></f7-list-item>
    </f7-list>
    
    <version></version>
            
  </f7-page>
</f7-view>
</template>

<script>
import version from "./../components/version.vue";
import TimeStamp from "./../components/time.vue";

export default {
  components: {
    version,
    TimeStamp
  }
};
</script>
