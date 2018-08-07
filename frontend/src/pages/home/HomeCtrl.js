angular.module("monterey-signs.controllers")
        .controller("HomeCtrl", function (Const, Midtier) {
            var _this = this;

            _this.template = {
                list_type: [],
            };

            Midtier.home.call().then(function () {
                _this.template.list_type = Midtier.home.get_data(Const.P.Info);
            });
        });
