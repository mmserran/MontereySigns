angular.module("monterey-signs.controllers")
        .controller("HomeCtrl", function (Const, Midtier, $location, $translate) {
            var _this = this;

            _this.template = {
                list_type: [],
                hero: null,
            };
            _this.btn = {
                goto_url: goto_url,
                label_quote: $translate.instant('btn_get_quote'),
                label_follow: $translate.instant('btn_follow'),
            };

            Midtier.home.call().then(function () {
                _this.template.list_type = Midtier.home.get_data(Const.P.Info);
                _this.template.hero = Midtier.home.get_data(Const.P.Hero);
            });

            // -- Helpers -- //
            function goto_url(path) {
                $location.path(path);
            }
        });
