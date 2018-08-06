angular.module("monterey-signs.routing")
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider.when('/sitedown', {
                templateUrl: 'frontend/src/pages/sitedown/sitedown.html',
                controller: 'SiteDownCtrl',
                controllerAs: 'page',
            });

            $routeProvider.otherwise({redirectTo: '/sitedown'});
        });