angular.module("monterey-signs.controllers")
        .controller("HomeCtrl", function (Const, Midtier) {
            var _this = this;

            _this.template = {
                list_type: [],
                hero: null,
            };
            
            Midtier.home.call().then(function () {
                _this.template.list_type = Midtier.home.get_data(Const.P.Info);
                _this.template.hero = Midtier.home.get_data(Const.P.Hero);
            });
            
        });
