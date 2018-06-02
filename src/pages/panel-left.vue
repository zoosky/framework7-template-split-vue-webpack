    <template>
      <!-- Left panel with reveal effect when hidden -->
      <f7-panel left reveal>
        <f7-view url="/panel-left/" name="panel-left">
          <f7-page>
            <f7-navbar title="Left Panel"></f7-navbar>
            <f7-block strong>
              <p>Left panel content goes here</p>
            </f7-block>
            <f7-block-title>Load page in panel</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About"></f7-list-item>
              <f7-list-item link="/form/" title="Form"></f7-list-item>
              <f7-list-item link="/left-page-1/" title="Page Left 1"></f7-list-item>
              <f7-list-item link="/left-page-2/" title="Page Left 2"></f7-list-item>
          
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
