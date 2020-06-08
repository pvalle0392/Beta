sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/f/library' 
], function (Controller,fioriLibrary) {
	"use strict";

	return Controller.extend("Gmao.GmaoBeta.controller.Maestro.detMaestro", {
	
		onInit: function () {
			//this.setData();
			this.onCreate();
			this.onDocument();
		},
		onCreate: function () {
			var sUrl = "/sap/opu/odata/sap/ZGMAO_ODATA_SRV/";
			var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
			//sap.ui.getCore().setModel(oModel);  	//this.getView().setModel(oModel);
			var myView = this.getView();
			oModel.read("/Equi_GetDetailSet(Zequipo='30000003')",null, null, false,
				function(success,oData, oResponse) {
					var arrayData = oData.data;		
					var jsondata = {equipo: arrayData };
					var jsonModel = new sap.ui.model.json.JSONModel();
					jsonModel.setData(jsondata);
					myView.setModel(jsonModel,"equipo");
					myView.bindElement({
						path: "/equipo",
						model: "equipo"
					});
				}
				,function(error){
					//colocar codigo para evento de error
				}
			);
		},
		onDocument: function () {
			var sUrl = "/sap/opu/odata/sap/ZGMAO_ODATA_SRV/";
			var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
			var myView = this.getView();
			oModel.read("/Equi_GetDocumentSet",null,["&$filter=Zequipo eq '30000003'"], false,
				function(success,oData, oResponse) {
					//console.log(oData);
					var arrayData = oData.data.results;
					//console.log(arrayData);
					var jsonDocs = {documentos: arrayData};
					var jsonDocsModel = new sap.ui.model.json.JSONModel();
					jsonDocsModel.setData(jsonDocs);
					myView.setModel(jsonDocsModel,"documentos");
					myView.bindElement({
						path: "/documentos/",
						model: "documentos"
					});
				}
				,function(error){
					//colocar codigo para evento de error
				}
			);	
		},
		onBack: function (){
			var oFCL = this.oView.getParent().getParent();
			oFCL.setLayout(fioriLibrary.LayoutType.OneColumn);
		}
	});
});