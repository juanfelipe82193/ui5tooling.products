sap.ui.define([
  "sap/ui/test/Opa5"
], function(Opa5) {
  "use strict";

  return Opa5.extend("tutorial.products.test.integration.arrangements.Startup", {

    iStartMyApp: function () {
      this.iStartMyUIComponent({
        componentConfig: {
          name: "tutorial.products",
          async: true,
          manifest: true
        }
      });
    }

  });
});
