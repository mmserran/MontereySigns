angular.module("monterey-signs.directives")
        .directive("carousel", function (Const, $translate, $location) {
            var directive_def = {
                restrict: 'E',
                replace: true,
                templateUrl: 'frontend/src/directives/carousel/carousel.html',
                scope: {
                    hero: "=",
                },
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                scope.$watch('hero', function (old, curr) {
                    if (scope.hero !== null) {
                        scope.settings = {
                            image: scope.hero[Const.P.Image],
                            key: scope.hero[Const.P.Key],
                            label: $translate.instant('btn_get_quote'),
                            url: scope.hero[Const.P.Url],
                        };

                        el.image.css({
                            'background': 'url(' + scope.settings.image + ')',
                            'background-size': 'cover',
                            'background-position-x': '50%',
                            'height': '100%',
                            'width': '100vw',
                        });
                    }
                });
                var el = {
                    image: elem.children().eq(0),
                    shade: elem.children().eq(1),
                    text: elem.children().eq(2),
                };

                scope.btn = {
                    goto_url: goto_url,
                };

                elem.on('mouseenter', add_shade);
                elem.on('mouseleave', remove_shade);
                elem.on('$destroy', teardown);


                // -- Helpers -- //
                function teardown() {
                    elem.off('mouseenter', add_shade);
                    elem.off('mouseleave', remove_shade);
                }
                function add_shade() {
                    el.text.addClass('text--show-it');
                }
                function remove_shade() {
                    el.text.removeClass('text--show-it');
                }
                function goto_url(path) {
                    $location.path(path);
                }
            }
        });
