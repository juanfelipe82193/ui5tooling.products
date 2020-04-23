sap.ui.define([
  "sap/ui/test/Opa5",
  "tutorial/products/test/integration/arrangements/Startup",
  "tutorial/products/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
