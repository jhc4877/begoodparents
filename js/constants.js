define([
		"app"
	],
	function( app ) {
		app.constant( "USER_ROLES", {
			admin: 1,
			seller: 3,
			customer: 5
		});
	}
);