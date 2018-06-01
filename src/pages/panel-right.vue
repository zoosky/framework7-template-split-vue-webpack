<template>
  <f7-panel right reveal cover theme-dark>
    <f7-view url="/panel-right/">
      <f7-page>
        <f7-navbar title="Right Panel" sliding></f7-navbar>
        <f7-block>
          <p>Right panel content goes here</p>
        </f7-block>
        <f7-block-title>Load page in panel</f7-block-title>
        <f7-list>
          <f7-list-item link="/about/" title="About"></f7-list-item>
          <f7-list-item link="/form/" title="Form"></f7-list-item>
        </f7-list>
        <f7-block-title>Load page in main view</f7-block-title>
        <f7-list>
          <f7-list-item link="/about/" title="About" view="#main-view" panel-close></f7-list-item>
          <f7-list-item link="/form/" title="Form" view="#main-view" panel-close></f7-list-item>
          <f7-list-item link="/left-page-1/" title="Page Left 1" view="#main-view" panel-close></f7-list-item>
          <f7-list-item link="/left-page-2/" title="Page Left 2" view="#main-view" panel-close></f7-list-item>
        </f7-list>
      </f7-page>
    </f7-view>
  </f7-panel>
</template>

<script>
export default {};
</script>
