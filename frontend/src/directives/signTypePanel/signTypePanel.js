angular.module("monterey-signs.directives")
        .directive("signTypePanel", function (Const, $translate) {
            var directive_def = {
                restrict: 'E',
                replace: true,
                templateUrl: 'frontend/src/directives/signTypePanel/signTypePanel.html',
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                scope.settings = {
                    image: attrs.imageUrl,
                    key: attrs.key,
                    label: $translate.instant('btn_explore', {type: attrs.key}),
                    blurb_text: $translate.instant('blurb_placeholder', {type: attrs.key}),
                    show_blurb: (attrs.showBlurb === 'true'),
                    url: attrs.gotoUrl,
                };
                var el = {
                    image: elem.children().eq(0),
                    shade: elem.children().eq(1),
                    text: elem.children().eq(2),
                };

                elem.on('mouseenter', add_shade);
                elem.on('mouseleave', remove_shade);
                elem.on('$destroy', teardown);

                el.image.css({
                    'background': 'url(' + scope.settings.image + ')',
                    'background-size': '120%',
                    'background-position': '50% 20%',
                });

                // -- Helpers -- //
                function teardown() {
                    elem.off('mouseenter', add_shade);
                    elem.off('mouseleave', remove_shade);
                }
                function add_shade() {
                    el.shade.addClass('signTypePanel__shade--dark');
                    el.text.addClass('text--show-it');
                }
                function remove_shade() {
                    el.shade.removeClass('signTypePanel__shade--dark');
                    el.text.removeClass('text--show-it');
                }
            }
        });
