define([
		"app",
		"constants",
		"services/authService"
	], function( app ) {
		app.controller( "CommonCtrl", function( $scope, $rootScope, AuthService, USER_ROLES ) {
			var isAuth, name, topBarLists = [];

			name = AuthService.login();
			isAuth = AuthService.isAuthenticated();

			if ( isAuth ) {
				if ( AuthService.isAuthorized( USER_ROLES.admin ) ) {
					topBarLists.push({
						value: "Admin"
					});
				}

				if ( AuthService.isAuthorized( USER_ROLES.seller ) ) {
					topBarLists.push({
						value: "Seller"
					});
				}

				topBarLists.push({
					value: name + "님"
				}, {
					value: "로그아웃"
				}, {
					value: "마이페이지"
				});
			} else {
				topBarLists.push({
					value: "로그인"
				}, {
					value: "회원가입"
				});
			}

			topBarLists.push({
				value: "고객센터"
			}, {
				value: "즐겨찾기"
			});

			$scope.topBarLists = topBarLists;

			$scope.status = {
				isopen: false
			};

			$scope.toggleDropdown = function( $event ) {
				$event.preventDefault();
				$event.stopPropagation();
				$scope.status.isopen = !$scope.status.isopen;
			};
		});
	}
);
