	sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"Gmao/GmaoBeta/model/models",
	 "sap/ui/core/routing/HashChanger"
], function (UIComponent, Device, models,HashChanger) {
	"use strict";

	return UIComponent.extend("Gmao.GmaoBeta.Component", {

		metadata: {
			manifest: "json"
		},
		
		init: function () {
			HashChanger.getInstance().replaceHash("");
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});