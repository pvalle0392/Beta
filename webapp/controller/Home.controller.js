sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/f/library',
	"sap/ui/model/json/JSONModel"
], function (Controller,fioriLibrary) {
	"use strict";

	return Controller.extend("Gmao.GmaoBeta.controller.Home", {
		onInit: function () {

		},
		onDM: function() {
			console.log("entró a la funcion");
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("appMaestro", {layout: fioriLibrary.LayoutType.TwoColumnsMidExpanded});
		}

	});

});