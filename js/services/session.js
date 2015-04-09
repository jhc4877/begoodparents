define([
	"app"
	],
	function( app ) {
		app.service( "Session", function() {
			this.create = function( sessionId, userId, name, userRole ) {
				this.sessionId = sessionId;
				this.userId = userId;
				this.name = name;
				this.userRole = userRole;
			};

			this.destroy = function() {
				this.sessionId = null;
				this.userId = null;
				this.name = null;
				this.userRole = null;
			};
		});
	}
);
