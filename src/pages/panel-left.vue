    <template>

    <!-- Left panel with reveal effect when hidden -->
    <div class="panel panel-left panel-reveal">
      <div class="view view-left">
        <div class="page">
          <div class="navbar">
            <div class="navbar-inner sliding">
              <div class="title">Left Panel</div>
            </div>
          </div>
          <div class="page-content">
            <div class="block-title">Left View Navigation</div>
            <div class="list links-list">
              <ul>
                <li><a href="/left-page-1/">Left Page 1</a></li>
                <li><a href="/left-page-2/">Left Page 2</a></li>
              </ul>
            </div>
            <div class="block-title">Control Main View</div>
            <div class="list links-list">
              <ul>
                <li>
                  <a href="/about/" data-view=".view-main" class="panel-close">About</a>
                </li>
                <li>
                  <a href="/form/" data-view=".view-main" class="panel-close">Form</a>
                </li>
                <li>
                  <a href="#" data-view=".view-main" class="back">Back in history</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </template>
