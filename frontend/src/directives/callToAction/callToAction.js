angular.module("monterey-signs.directives")
        .directive("callToAction", function (Const, $translate) {
            var directive_def = {
                restrict: 'E',
                replace: true,
                templateUrl: 'frontend/src/directives/callToAction/callToAction.html',
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                scope.settings = {
                    key: attrs.key,
                    goto_url: attrs.gotoUrl,
                    label: attrs.label,
                    show_blurb: (attrs.showBlurb == 'true'),
                };

                // -- Helpers -- //
            }
        });
