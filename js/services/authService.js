define([
		"app",
		"services/session"
	],
	function( app ) {
		app.factory( "AuthService", function( $http, Session ) {
			var authService = {};

			authService.login = function()  {
				Session.create( "1", "jhc4877", "heechul", 5 );
				return Session.name;
			};

			authService.isAuthenticated = function() {
				return !!Session.userId;
			};

			authService.isAuthorized = function( role ) {
				return authService.isAuthenticated() && Session.userRole <= role;
			};

			return authService;
		});
	}
);
