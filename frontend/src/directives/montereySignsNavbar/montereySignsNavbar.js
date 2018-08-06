angular.module("monterey-signs.directives")
        .directive("montereySignsNavbar", function (Const) {
            var directive_def = {
                restrict: 'E',
                replace: true,
                templateUrl: 'frontend/src/directives/montereySignsNavbar/montereySignsNavbar.html',
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                scope.settings = {
                    show_search_bar: (attrs.showSearchBar === "true"),
                };
                
                scope.list_nav = Const.list_navbar;

                // -- Helpers -- //
            }
        });
