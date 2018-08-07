angular.module("monterey-signs.controllers")
        .controller("HomeCtrl", function (Const, Midtier, $location, $translate) {
            var _this = this;

            _this.template = {
                list_type: [],
                hero: null,
                image_belt: null,
                our_clients: null,
            };
            _this.btn = {
                goto_url: goto_url,
            };

            Midtier.home.call().then(function () {
                _this.template.list_type = Midtier.home.get_data(Const.P.Info);
                _this.template.hero = Midtier.home.get_data(Const.P.Hero);
                _this.template.image_belt = Midtier.home.get_data(Const.P.ImageBelt);
                _this.template.our_clients = Midtier.home.get_data(Const.P.OurClients);
            });

            // -- Helpers -- //
            function goto_url(path) {
                $location.path(path);
            }
        });
