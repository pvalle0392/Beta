sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	'sap/ui/model/Sorter',
	'sap/m/MessageBox',
	'sap/f/library'
], function (JSONModel, Controller, Filter, FilterOperator, Sorter, MessageBox, fioriLibrary) {
	"use strict";

	return Controller.extend("Gmao.GmaoBeta.controller.Maestro.listMaestro", {
		onInit: function () {
			
			
		},
		onDetail: function () {
			var oFCL = this.oView.getParent().getParent();
			oFCL.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded);
		},
		onSearch: function (oEvent) {
			var ubicacion = oEvent.getParameter("query");
			var sUrl = "/sap/opu/odata/sap/ZGMAO_ODATA_SRV/";
			var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
			sap.ui.getCore().setModel(oModel);
			var myView = this.getView();
			
			oModel.read("/Equi_GetListSet", null, ["&$filter=(ZubTec eq '"+ubicacion+"')&$expand=EQUILIST"],false, 
						function(oData, oResponse) {
							var arrayData = oData.results[0].EQUILIST.results;	
							var jsondata = {equipos: arrayData };
							var jsonModel = new sap.ui.model.json.JSONModel();
							jsonModel.setData(jsondata);
							myView.setModel(jsonModel,"equipos");
							myView.bindElement({
								path:"/equipos/",
								model:"equipos"
							});
						},
						function(error){
							console.log("error ESE PARAM NO EXISTE");
					    });
		},
		onHome: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Home");
		}
	});
});