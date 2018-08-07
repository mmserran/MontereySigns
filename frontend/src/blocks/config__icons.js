angular.module("monterey-signs.blocks")
        .config(function ($mdIconProvider) {
            $mdIconProvider
                    .iconSet('social:instagram', 'resources/feather/instagram.svg', 24)
                    .iconSet('social:facebook', 'resources/feather/facebook.svg', 24)
                    .iconSet('social:yelp', 'resources/feather/loader.svg', 24)
        });
