"use strick";

require.config({
	baseUrl: "js",
	paths: {
		"jquery": "../lib/jquery/jquery-2.1.3.min",
		"angular": "../lib/angular/angular.min",
		"ngRoute": "../lib/angular/angular-route.min",
		"uiBootstrap": "../lib/angular-bootstrap/ui-bootstrap-tpls.min"
	},
	shim: {
		"angular": {
			deps: [ "jquery" ],
			exports: "angular"
		},
		"app": {
			deps: [ "angular" ]
		}
	}
});

require([
		"jquery",
		"angular",
		"controllers/commonCtrl",
		"routes"
	],
	function( $, angular ) {
		$( document ).ready(function() {
			angular.bootstrap( document, [ "beparents" ] );
		});
	}
);
