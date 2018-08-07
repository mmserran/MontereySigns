angular.module("monterey-signs.directives")
        .directive("montereySignsNavbar", function (Const, $timeout, $mdSidenav) {
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
                    current_subnav: null,
                };
                scope.css = {
                    is_image: is_image,
                    current_subnav: null,
                    show_mobile_menu: false,
                };
                scope.btn = {
                    open_subnav: open_subnav,
                    close_subnav: close_subnav,
                    toggle_mobile_menu: toggle_mobile_menu,
                };

                scope.list_nav = Const.Navbar;

                // -- Helpers -- //
                function is_image(obj) {
                    var _return = false;
                    if (angular.isDefined(obj) === true) {
                        _return = (obj[Const.P.Key] === null);
                    }
                    return _return;
                }
                function open_subnav($mdMenu, ev, obj) {
                    var _continue = true;

                    _continue = _continue && (obj[Const.P.Key] !== null);
                    _continue = _continue && (obj[Const.P.Subnav] !== null);
                    _continue = _continue && (scope.settings.current_subnav === null);

                    if (_continue === true) {
                        $mdMenu.open(ev);
                        scope.settings.current_subnav = $mdMenu;
                        scope.css.current_subnav = obj;

                        _attach_fn_to_backdrop();
                    }
                }
                function close_subnav(obj) {
                    var _continue = true;

                    _continue = _continue && (scope.settings.current_subnav !== null);
                    _continue = _continue && (scope.css.current_subnav !== obj);

                    if (_continue === true) {
                        scope.settings.current_subnav.close();
                        scope.settings.current_subnav = null;
                        scope.css.current_subnav = null;
                    }
                }
                function toggle_mobile_menu() {
                    $mdSidenav('right').toggle();
                    scope.css.show_mobile_menu = !scope.css.show_mobile_menu;
                    _attach_fn_to_mobile_backdrop();
                }
                function close_mobile_menu() {
                    $mdSidenav('right').close();
                    scope.css.show_mobile_menu = false;
                }
                function _attach_fn_to_backdrop() {
                    $timeout(function () {
                        var backdrop = angular.element(document.body.querySelector('.md-menu-backdrop.md-click-catcher'));
                        backdrop.on('mouseenter', close_subnav);

                        backdrop.on('$destroy', function () {
                            backdrop.off('mouseenter', close_subnav);
                        });
                    });
                }
                function _attach_fn_to_mobile_backdrop() {
                    $timeout(function () {
                        var backdrop = angular.element(document.body.querySelector('.md-sidenav-backdrop'));
                        backdrop.bind('click', close_mobile_menu);

                        backdrop.on('$destroy', function () {
                            backdrop.unbind('click', close_mobile_menu);
                        });
                    });
                }
            }
        });
