sap.ui.define(["sap/ui/test/opaQunit","tutorial/products/test/integration/pages/App"],function(t){"use strict";t("should show correct number of nested pages",function(t,e,o){t.iStartMyApp();o.onTheAppPage.iShouldSeePageCount(1);o.iTeardownMyApp()})});