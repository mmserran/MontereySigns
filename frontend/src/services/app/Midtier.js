angular.module("monterey-signs.services")
        .service("Midtier", function (Const, $http, Request) {
            var self; // "As much on the midtier as possible"

            // -- Service -- //
            return (self = {
                home: new Request.cached(function () {
                    var get = {}, post = {};
                    var config = {
                        method: 'GET',
                        url: '/landing/home',
                        params: get,
                    };

                    return $http(config);
                }),
            });

        });
