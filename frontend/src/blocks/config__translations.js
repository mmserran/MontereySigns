angular.module("monterey-signs.blocks")
        .config(function ($translateProvider) {
            $translateProvider.useSanitizeValueStrategy('sanitize');
            $translateProvider
                    .preferredLanguage("en");
        });