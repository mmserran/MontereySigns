/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/build/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/build/_helper.js":
/*!***********************************!*\
  !*** ./frontend/build/_helper.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ======================================
// # Build Helper Functions
// ======================================
(function () {
    module.exports = {
        load_all: load_all,
        load_and_remove: load_and_remove,
        load_selected: load_selected,
    };

    // -- Functions -- //
    function load_all(require_all) {
        var list_file = require_all.keys();
        load_selected(require_all, list_file);
    }
    function load_and_remove(require_all, to_remove) {
        var list_file = require_all.keys();
        var remove_it = list_file.splice(list_file.indexOf(to_remove), 1);
        require_all(remove_it[0]);

        return list_file;
    }
    function load_selected(require_all, list_file) {
        for (var i = 0; i < list_file.length; i++) {
            var key = list_file[i];
            require_all(key);
        }
    }
})();


/***/ }),

/***/ "./frontend/build/entry.js":
/*!*********************************!*\
  !*** ./frontend/build/entry.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// ======================================
// # Javascript/Template Source Files
// ======================================
helper = __webpack_require__(/*! ./_helper */ "./frontend/build/_helper.js");

// load src javascript and templates
var require_src_file = __webpack_require__("./frontend/src sync recursive .+\\.(js|html)$");
helper.load_all(require_src_file);

/***/ }),

/***/ "./frontend/src sync recursive .+\\.(js|html)$":
/*!******************************************!*\
  !*** ./frontend/src sync .+\.(js|html)$ ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.js": "./frontend/src/app.js",
	"./blocks/config__en.js": "./frontend/src/blocks/config__en.js",
	"./blocks/config__icons.js": "./frontend/src/blocks/config__icons.js",
	"./blocks/config__translations.js": "./frontend/src/blocks/config__translations.js",
	"./blocks/config__whitelabel.js": "./frontend/src/blocks/config__whitelabel.js",
	"./blocks/run__const.js": "./frontend/src/blocks/run__const.js",
	"./directives/callToAction/callToAction.html": "./frontend/src/directives/callToAction/callToAction.html",
	"./directives/callToAction/callToAction.js": "./frontend/src/directives/callToAction/callToAction.js",
	"./directives/carousel/carousel.html": "./frontend/src/directives/carousel/carousel.html",
	"./directives/carousel/carousel.js": "./frontend/src/directives/carousel/carousel.js",
	"./directives/detectBrowser.js": "./frontend/src/directives/detectBrowser.js",
	"./directives/hamburgerAnimation/hamburgerAnimation.html": "./frontend/src/directives/hamburgerAnimation/hamburgerAnimation.html",
	"./directives/hamburgerAnimation/hamburgerAnimation.js": "./frontend/src/directives/hamburgerAnimation/hamburgerAnimation.js",
	"./directives/montereySignsNavbar/montereySignsNavbar.html": "./frontend/src/directives/montereySignsNavbar/montereySignsNavbar.html",
	"./directives/montereySignsNavbar/montereySignsNavbar.js": "./frontend/src/directives/montereySignsNavbar/montereySignsNavbar.js",
	"./directives/scrollAffix.js": "./frontend/src/directives/scrollAffix.js",
	"./directives/signTypePanel/signTypePanel.html": "./frontend/src/directives/signTypePanel/signTypePanel.html",
	"./directives/signTypePanel/signTypePanel.js": "./frontend/src/directives/signTypePanel/signTypePanel.js",
	"./pages/home/HomeCtrl.js": "./frontend/src/pages/home/HomeCtrl.js",
	"./pages/home/home.html": "./frontend/src/pages/home/home.html",
	"./pages/sitedown/SiteDownCtrl.js": "./frontend/src/pages/sitedown/SiteDownCtrl.js",
	"./pages/sitedown/sitedown.html": "./frontend/src/pages/sitedown/sitedown.html",
	"./routes.js": "./frontend/src/routes.js",
	"./services/app/Midtier.js": "./frontend/src/services/app/Midtier.js",
	"./services/lab/Browser.js": "./frontend/src/services/lab/Browser.js",
	"./services/lab/DateTime.js": "./frontend/src/services/lab/DateTime.js",
	"./services/lab/Request.js": "./frontend/src/services/lab/Request.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./frontend/src sync recursive .+\\.(js|html)$";

/***/ }),

/***/ "./frontend/src/app.js":
/*!*****************************!*\
  !*** ./frontend/src/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module("monterey-signs", [
    "pascalprecht.translate",
    "ngSanitize",
    "ngMaterial",
    "ngAnimate",
    "ngAria",
    //
    "monterey-signs.blocks",
    "monterey-signs.constants",
    "monterey-signs.controllers",
    "monterey-signs.directives",
    "monterey-signs.routing",
    "monterey-signs.services",
]);

angular.module("monterey-signs.blocks", []);
angular.module("monterey-signs.constants", []);
angular.module("monterey-signs.controllers", []);
angular.module("monterey-signs.directives", []);
angular.module("monterey-signs.routing", ["ngRoute"]);
angular.module("monterey-signs.services", []);

/***/ }),

/***/ "./frontend/src/blocks/config__en.js":
/*!*******************************************!*\
  !*** ./frontend/src/blocks/config__en.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module("monterey-signs.blocks")
        .config(["$translateProvider", function ($translateProvider) {
            $translateProvider.translations("en", {
                "": ""

                        // sitedown
                , "btn_back_home": "back to home"
                , "sitedown_404": "Oops! This page is not yet available."

                        // navbar
                , "choose_sign": "choose your sign"
                , "our_work": "our excellent work"
                , "sign_stories": "sign stories"
                , "about_us": "about us"
                , "nuts_bolts": "nuts & bolts"
                , "commercial": "commercial"
                , "printed": "printed"
                , "electrical": "electrical"
                , "services": "services"

                        // home
                , "monterey_signs": "monterey's favorite sign shop"
                , "blurb_placeholder": "this is a blurb about {{type}}{{ type === 'services' ? '' : ' products'}}"
                , "btn_explore": "explore {{ type }}"
                , "btn_get_quote": "get a quote"
                , "our_clients": "our clients"
                , "questions": "have questions?"
                , "more_info_1a": "We're happy to help!"
                , "more_info_1b": "The best first step is usually an on-site meeting where we can discuss your project including sizing, placement, construction, permits, budget, timeline, and all the other details. Please fill out our quote form to begin a free consultation."
                , "more_info_2a": "Monterey Signs is a local, independent, family-owned, award winning, full-service sign shop. Our mission is to provide our clients with cost-effective design and fabrication solutions, while at the same time combining materials, finishes, and techniques that provide a creative edge. Whenever possible we use environmentally-friendly materials and processes."
                , "more_info_2b": "Santa Cruz Signs and Monterey Signs are owned and operated by the same family. Our attention to detail, and attention to our customers, has earned us the reputation as the premier full service sign company on the Central Coast."
                , "more_info_2c": "We look forward to working with you."
                , "twitter_handle": "@montereysigns"
                , "instagram": "Follow us on Instagram"
                , "btn_follow": "follow us"

                        // footer
                , "get_started": "ready to get started?"
                , "get_started_info": "If you would like a quote on your project, please fill out our quote form. You will receive an answer to your quote within 24 hours."
                , "contact_us": "contact us"
                , "entity_name": "Monterey Signs"
                , "address1": "555 Broadway Avenue"
                , "address2": "Seaside, CA 93955"
                , "phone": "831-632-0490"
                , "email": "sales@MontereySigns.com"
                , "copyright1": "Copyright © {{ year }} Monterey Signs"
                , "copyright2": "Web Design by Sleepless Media"
            });
        }]);


/***/ }),

/***/ "./frontend/src/blocks/config__icons.js":
/*!**********************************************!*\
  !*** ./frontend/src/blocks/config__icons.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module("monterey-signs.blocks")
        .config(["$mdIconProvider", function ($mdIconProvider) {
            $mdIconProvider
                    .iconSet('social:instagram', 'resources/feather/instagram.svg', 24)
                    .iconSet('social:facebook', 'resources/feather/facebook.svg', 24)
                    .iconSet('social:yelp', 'resources/feather/loader.svg', 24)
        }]);


/***/ }),

/***/ "./frontend/src/blocks/config__translations.js":
/*!*****************************************************!*\
  !*** ./frontend/src/blocks/config__translations.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module("monterey-signs.blocks")
        .config(["$translateProvider", function ($translateProvider) {
            $translateProvider.useSanitizeValueStrategy('sanitize');
            $translateProvider
                    .preferredLanguage("en");
        }]);

/***/ }),

/***/ "./frontend/src/blocks/config__whitelabel.js":
/*!***************************************************!*\
  !*** ./frontend/src/blocks/config__whitelabel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module("monterey-signs.blocks")
        .config(["$mdThemingProvider", function ($mdThemingProvider) {

            var primary = define_primary_palette('scw_blue');
            var secondary = define_secondary_palette('scw_yellow');
            var warning = define_warning_palette('warning');

            $mdThemingProvider.theme('default')
                    .primaryPalette(primary)
                    .accentPalette(secondary)
                    .warnPalette(warning);

            // -- Functions -- //
            function define_primary_palette(label) {
                return __define_custom_palette(label, {
                    '50': 'E0EDF6',
                    '100': 'B3D3E9',
                    '200': '80B5DB',
                    '300': '2681C1', // hue 1
                    '400': '2681C1',
                    '500': '006BB6', // hue default
                    '600': '0063AF',
                    '700': '0058A6',
                    '800': 'FFFFFF', // hue 2
                    '900': '003C8E',
                    'A100': '003C8E', // hue 3
                    'A200': '87B0FF',
                    'A400': '548EFF',
                    'A700': '3B7EFF',
                    'contrastDefaultColor': 'dark'
                });
            }
            function define_secondary_palette(label) {
                return __define_custom_palette(label, {
                    '50': 'FFF8E4',
                    '100': 'FFEDBC',
                    '200': 'FFE290',
                    '300': 'FFD663',
                    '400': 'FFCD41',
                    '500': 'FFC420',
                    '600': 'FFBE1C',
                    '700': 'FFB618',
                    '800': 'FFAF13',
                    '900': 'FFA20B',
                    'A100': 'FFCD41', // hue 1 (base - 100)
                    'A200': 'FFC420', // hue default
                    'A400': 'FFB618', // hue 2 (base + 200)
                    'A700': 'FFA20B', // hue 3 (base + 400)
                    'contrastDefaultColor': 'light'
                });
            }
            function define_warning_palette(label) {
                return __define_custom_palette(label, {
                    '50': 'FFEBEE',
                    '100': 'FFCDD2',
                    '200': 'EF9A9A',
                    '300': 'EF5350', // hue 1
                    '400': 'EF5350',
                    '500': 'F44336', // hue default
                    '600': 'E53935',
                    '700': 'D32F2F',
                    '800': 'D32F2F', // hue 2
                    '900': 'B71C1C',
                    'A100': 'B71C1C', // hue 3
                    'A200': 'FF5252',
                    'A400': 'FF1744',
                    'A700': 'D50000',
                    'contrastDefaultColor': 'light'
                });
            }

            // -- Helpers -- //
            function __define_custom_palette(label, replacements) {
                $mdThemingProvider.definePalette(label, replacements);

                return label;
            }
            function __extend_palette(label, original_set, replacements) {
                var custom_palette = $mdThemingProvider.extendPalette(original_set, replacements);
                return __define_custom_palette(label, custom_palette);
            }
        }]);


/***/ }),

/***/ "./frontend/src/blocks/run__const.js":
/*!*******************************************!*\
  !*** ./frontend/src/blocks/run__const.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module("monterey-signs.blocks")
        .run(["$rootScope", "Const", function ($rootScope, Const) {
            $rootScope.Const = Const;
        }]);


/***/ }),

/***/ "./frontend/src/directives/callToAction/callToAction.html":
/*!****************************************************************!*\
  !*** ./frontend/src/directives/callToAction/callToAction.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var v1='<div class=callToAction><md-button class=callToAction__btn aria-label={{settings.label}} ng-href={{settings.goto_url}} ng-bind-html=settings.label></md-button></div>';
angular.module('monterey-signs').run(['$templateCache', function ($templateCache) {$templateCache.put('frontend/src/directives/callToAction/callToAction.html', v1);}]);
module.exports=v1

/***/ }),

/***/ "./frontend/src/directives/callToAction/callToAction.js":
/*!**************************************************************!*\
  !*** ./frontend/src/directives/callToAction/callToAction.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module("monterey-signs.directives")
        .directive("callToAction", ["Const", "$translate", function (Const, $translate) {
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
        }]);


/***/ }),

/***/ "./frontend/src/directives/carousel/carousel.html":
/*!********************************************************!*\
  !*** ./frontend/src/directives/carousel/carousel.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var v1='<div class=carousel><div class=carousel__image></div><div class="overlay carousel__shade"></div><div class="overlay text" layout=column layout-align="center center"><span class=text__title ng-bind="settings.key | translate"></span><call-to-action class=text__call-to-action data-label={{settings.label}} ng-click=btn.goto_url(settings.url)></call-to-action></div></div>';
angular.module('monterey-signs').run(['$templateCache', function ($templateCache) {$templateCache.put('frontend/src/directives/carousel/carousel.html', v1);}]);
module.exports=v1

/***/ }),

/***/ "./frontend/src/directives/carousel/carousel.js":
/*!******************************************************!*\
  !*** ./frontend/src/directives/carousel/carousel.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module("monterey-signs.directives")
        .directive("carousel", ["Const", "$translate", "$location", function (Const, $translate, $location) {
            var directive_def = {
                restrict: 'E',
                replace: true,
                templateUrl: 'frontend/src/directives/carousel/carousel.html',
                scope: {
                    hero: "=",
                },
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                scope.$watch('hero', function (old, curr) {
                    if (scope.hero !== null) {
                        scope.settings = {
                            image: scope.hero[Const.P.Image],
                            key: scope.hero[Const.P.Key],
                            label: $translate.instant('btn_get_quote'),
                            url: scope.hero[Const.P.Url],
                        };

                        el.image.css({
                            'background': 'url(' + scope.settings.image + ')',
                            'background-size': 'cover',
                            'background-position-x': '50%',
                            'height': '100%',
                            'width': '100vw',
                        });
                    }
                });
                var el = {
                    image: elem.children().eq(0),
                    shade: elem.children().eq(1),
                    text: elem.children().eq(2),
                };

                scope.btn = {
                    goto_url: goto_url,
                };

                elem.on('mouseenter', add_shade);
                elem.on('mouseleave', remove_shade);
                elem.on('$destroy', teardown);


                // -- Helpers -- //
                function teardown() {
                    elem.off('mouseenter', add_shade);
                    elem.off('mouseleave', remove_shade);
                }
                function add_shade() {
                    el.text.addClass('text--show-it');
                }
                function remove_shade() {
                    el.text.removeClass('text--show-it');
                }
                function goto_url(path) {
                    $location.path(path);
                }
            }
        }]);


/***/ }),

/***/ "./frontend/src/directives/detectBrowser.js":
/*!**************************************************!*\
  !*** ./frontend/src/directives/detectBrowser.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module("monterey-signs.directives")
        .directive("detectBrowser", ["Const", "Browser", function (Const, Browser) {
            var directive_def = {
                restrict: 'A',
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                var info = {
                    'Chrome': (Browser.is_chrome() === true),
                    'Firefox': (Browser.is_firefox() === true),
                    'Safari': (Browser.is_safari() === true),
                    'iOS': (Browser.is_iOS() === true),
                };
                add_browser_name_as_css_class(elem, info);

                // -- Helpers -- //
                function add_browser_name_as_css_class(target, browser_detected) {
                    for (var name in browser_detected) {
                        if (browser_detected[name] === true) {
                            target.addClass(name);
                        }
                    }
                }

            }

        }]);


/***/ }),

/***/ "./frontend/src/directives/hamburgerAnimation/hamburgerAnimation.html":
/*!****************************************************************************!*\
  !*** ./frontend/src/directives/hamburgerAnimation/hamburgerAnimation.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var v1='<button class="mserrano hamburger {{settings.animation_type}}" type=button><span class=hamburger-box><span class=hamburger-inner></span></span></button>';
angular.module('monterey-signs').run(['$templateCache', function ($templateCache) {$templateCache.put('frontend/src/directives/hamburgerAnimation/hamburgerAnimation.html', v1);}]);
module.exports=v1

/***/ }),

/***/ "./frontend/src/directives/hamburgerAnimation/hamburgerAnimation.js":
/*!**************************************************************************!*\
  !*** ./frontend/src/directives/hamburgerAnimation/hamburgerAnimation.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module("monterey-signs.directives")
        .directive("hamburgerAnimation", ["Const", function (Const) {
            var directive_def = {
                restrict: 'E',
                replace: true,
                templateUrl: 'frontend/src/directives/hamburgerAnimation/hamburgerAnimation.html',
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                attrs.$observe('isActive', do_animation);

                scope.settings = {
                    animation_type: 'hamburger--emphatic',
                };

                // -- Helpers -- //
                function do_animation(state) {
                    if (state === 'true') {
                        elem.addClass('is-active');
                    } else {
                        elem.removeClass('is-active');
                    }
                }
            }
        }]);


/***/ }),

/***/ "./frontend/src/directives/montereySignsNavbar/montereySignsNavbar.html":
/*!******************************************************************************!*\
  !*** ./frontend/src/directives/montereySignsNavbar/montereySignsNavbar.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var v1='<md-toolbar class="navbar md-hue-2" layout=row layout-align="center center" md-no-ink><div class=md-toolbar-tools layout=row layout-align="space-between center" layout-gt-sm=row layout-align-gt-sm="center center"><div class=toolbar__menu--mobile><md-button class=toolbar__btn aria-label="Mobile Menu" ng-click="btn.toggle_mobile_menu(); $event.stopPropagation()"><hamburger-animation data-is-active={{css.show_mobile_menu}}></hamburger-animation></md-button></div><div ng-repeat="obj in list_nav"><md-menu ng-if="(css.is_image(obj) === false)" md-position-mode="target bottom"><md-button class=navbar__button ng-class="{\'highlight\': (css.current_subnav === obj)}" ng-mouseenter="btn.close_subnav(obj); btn.open_subnav($mdMenu, $event, obj)" ng-href={{obj[Const.P.Url]}} aria-label="{{obj[Const.P.Key]| translate}}"><span ng-bind-html="obj[Const.P.Key] | translate"></span></md-button><md-menu-content width=4 ng-mouseleave=btn.close_subnav(obj)><md-menu-item style=display:none><span></span></md-menu-item><md-menu-item ng-repeat="subnav in obj[Const.P.Subnav]"><md-button class=navbar__subnav-btn aria-label="{{subnav[Const.P.Key]| translate}}" ng-href={{subnav[Const.P.Url]}}><span ng-bind="subnav[Const.P.Key] | translate"></span></md-button></md-menu-item></md-menu-content></md-menu><img class=navbar__image ng-if="(css.is_image(obj) === true)" src="/resources/img/monterey-signs.png"></div><img class="navbar__image navbar__image--mobile" src="/resources/img/monterey-signs.png"></div></md-toolbar>';
angular.module('monterey-signs').run(['$templateCache', function ($templateCache) {$templateCache.put('frontend/src/directives/montereySignsNavbar/montereySignsNavbar.html', v1);}]);
module.exports=v1

/***/ }),

/***/ "./frontend/src/directives/montereySignsNavbar/montereySignsNavbar.js":
/*!****************************************************************************!*\
  !*** ./frontend/src/directives/montereySignsNavbar/montereySignsNavbar.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module("monterey-signs.directives")
        .directive("montereySignsNavbar", ["Const", "$timeout", "$mdSidenav", function (Const, $timeout, $mdSidenav) {
            var directive_def = {
                restrict: 'E',
                replace: true,
                templateUrl: 'frontend/src/directives/montereySignsNavbar/montereySignsNavbar.html',
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                scope.settings = {
                    show_search_bar: (attrs.showSearchBar === "true"),
                    current_subnav: null,
                };
                scope.css = {
                    is_image: is_image,
                    current_subnav: null,
                    show_mobile_menu: false,
                };
                scope.btn = {
                    open_subnav: open_subnav,
                    close_subnav: close_subnav,
                    toggle_mobile_menu: toggle_mobile_menu,
                };

                scope.list_nav = Const.Navbar;

                // -- Helpers -- //
                function is_image(obj) {
                    var _return = false;
                    if (angular.isDefined(obj) === true) {
                        _return = (obj[Const.P.Key] === null);
                    }
                    return _return;
                }
                function open_subnav($mdMenu, ev, obj) {
                    var _continue = true;

                    _continue = _continue && (obj[Const.P.Key] !== null);
                    _continue = _continue && (obj[Const.P.Subnav] !== null);
                    _continue = _continue && (scope.settings.current_subnav === null);

                    if (_continue === true) {
                        $mdMenu.open(ev);
                        scope.settings.current_subnav = $mdMenu;
                        scope.css.current_subnav = obj;

                        _attach_fn_to_backdrop();
                    }
                }
                function close_subnav(obj) {
                    var _continue = true;

                    _continue = _continue && (scope.settings.current_subnav !== null);
                    _continue = _continue && (scope.css.current_subnav !== obj);

                    if (_continue === true) {
                        scope.settings.current_subnav.close();
                        scope.settings.current_subnav = null;
                        scope.css.current_subnav = null;
                    }
                }
                function toggle_mobile_menu() {
                    $mdSidenav('right').toggle();
                    scope.css.show_mobile_menu = !scope.css.show_mobile_menu;
                    _attach_fn_to_mobile_backdrop();
                }
                function close_mobile_menu() {
                    $mdSidenav('right').close();
                    scope.css.show_mobile_menu = false;
                }
                function _attach_fn_to_backdrop() {
                    $timeout(function () {
                        var backdrop = angular.element(document.body.querySelector('.md-menu-backdrop.md-click-catcher'));
                        backdrop.on('mouseenter', close_subnav);

                        backdrop.on('$destroy', function () {
                            backdrop.off('mouseenter', close_subnav);
                        });
                    });
                }
                function _attach_fn_to_mobile_backdrop() {
                    $timeout(function () {
                        var backdrop = angular.element(document.body.querySelector('.md-sidenav-backdrop'));
                        backdrop.bind('click', close_mobile_menu);

                        backdrop.on('$destroy', function () {
                            backdrop.unbind('click', close_mobile_menu);
                        });
                    });
                }
            }
        }]);


/***/ }),

/***/ "./frontend/src/directives/scrollAffix.js":
/*!************************************************!*\
  !*** ./frontend/src/directives/scrollAffix.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module("monterey-signs.directives")
        .directive("scrollAffix", ["Const", "$document", "$timeout", function (Const, $document, $timeout) {
            var directive_def = {
                restrict: "A",
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                var settings = {
                    scroll_id: attrs.scrollAffix,
                    affix_top: attrs.affixTop || false,
                    affix_bottom: attrs.affixBottom || false,
                    affix_parallax: (attrs.affixParallaxEffect !== undefined),
                    do_logic: (attrs.affixCondition !== "false"),
                    parallax_const: 40,
                    scroll_info: null,
                };
                var _raf = window.requestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.msRequestAnimationFrame ||
                        window.oRequestAnimationFrame;

                if (settings.do_logic === true) {
                    var scroll_container = angular.element($document[0].getElementById(settings.scroll_id));

                    elem.addClass(settings.scroll_id);
                    if (settings.affix_top !== false) {
                        scroll_container.on("scroll", __handle_classname_at_top);
                        set_transition("0.10s");
                    }
                    if (settings.affix_bottom !== false) {
                        scroll_container.on("scroll", __handle_classname_at_bottom);
                        set_transition("0.10s");
                    }
                    if (settings.affix_parallax !== false) {
                        elem.css({
                            "background-size": "auto " + (100 + settings.parallax_const) + "%",
                        });
                        scroll_container.on("scroll", __handle_parallax_effect);
                        _raf(__animate);
                        set_transition(attrs.affixParallaxEffect);
                    }

                    elem.on("$destroy", __teardown);
                }

                // -- Helpers -- //
                function __teardown() {
                    scroll_container.off("scroll", __handle_classname_at_top);
                    scroll_container.off("scroll", __handle_classname_at_bottom);
                    scroll_container.off("scroll", __handle_parallax_effect);
                }
                function __handle_classname_at_top() {
                    var at_top_of_page = (scroll_container[0].scrollTop <= 0);
                    if (at_top_of_page === true) {
                        elem.addClass(settings.affix_top);
                    } else {
                        elem.removeClass(settings.affix_top);
                    }
                }
                function __handle_classname_at_bottom() {
                    var scroll_bot = (scroll_container[0].scrollHeight - scroll_container[0].offsetHeight);
                    var at_bottom_of_page = (scroll_bot <= scroll_container[0].scrollTop);
                    if (at_bottom_of_page === true) {
                        elem.addClass(settings.affix_bottom);
                    } else {
                        elem.removeClass(settings.affix_bottom);
                    }
                }
                function __handle_parallax_effect() {
                    settings.scroll_info = scroll_container[0];
                }
                function __animate() {
                    _raf(__animate);

                    var scroll_info = {
                        position: scroll_container[0].scrollTop,
                        height: (scroll_container[0].scrollHeight - scroll_container[0].offsetHeight),
                    };
                    var ratio = (scroll_info.position / scroll_info.height);
                    var result = (ratio * settings.parallax_const);

                    elem.css({
                        "background-position-y": '-' + result + 'vh',
                    });
                }
                function set_transition(time_val) {
                    $timeout(function () {
                        elem[0].style.transition = "all " + time_val + " ease-out";
                    }, 100);
                }
            }

        }]);


/***/ }),

/***/ "./frontend/src/directives/signTypePanel/signTypePanel.html":
/*!******************************************************************!*\
  !*** ./frontend/src/directives/signTypePanel/signTypePanel.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var v1='<div class=signTypePanel><div class=signTypePanel__image></div><div class="overlay signTypePanel__shade"></div><div class="overlay text" layout=column layout-align="center center"><span class=text__title ng-bind="settings.key | translate"></span> <span class=text__blurb ng-if=settings.show_blurb translate=blurb_placeholder translate-values="{type: settings.key}"></span><call-to-action class=text__call-to-action data-key={{settings.key}} data-label={{settings.label}} data-show-blurb={{settings.show_blurb}} data-goto-url={{settings.url}}></call-to-action></div></div>';
angular.module('monterey-signs').run(['$templateCache', function ($templateCache) {$templateCache.put('frontend/src/directives/signTypePanel/signTypePanel.html', v1);}]);
module.exports=v1

/***/ }),

/***/ "./frontend/src/directives/signTypePanel/signTypePanel.js":
/*!****************************************************************!*\
  !*** ./frontend/src/directives/signTypePanel/signTypePanel.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module("monterey-signs.directives")
        .directive("signTypePanel", ["Const", "$translate", function (Const, $translate) {
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
        }]);


/***/ }),

/***/ "./frontend/src/pages/home/HomeCtrl.js":
/*!*********************************************!*\
  !*** ./frontend/src/pages/home/HomeCtrl.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module("monterey-signs.controllers")
        .controller("HomeCtrl", ["Const", "Midtier", "$location", "$translate", function (Const, Midtier, $location, $translate) {
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
        }]);


/***/ }),

/***/ "./frontend/src/pages/home/home.html":
/*!*******************************************!*\
  !*** ./frontend/src/pages/home/home.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var v1='<div class=page--home layout-fill layout=column layout-align="start center"><monterey-signs-navbar data-show-search-bar=true></monterey-signs-navbar><md-sidenav class=md-sidenav-right md-component-id=right><md-list flex><md-subheader class="md-no-sticky item item--title" translate="Monterey Signs"></md-subheader><md-list-item class="md-1-line item item--main" aria-label="Monterey Signs" ng-click=page.btn.goto_url(Const.Url.Sitedown)><div class=md-list-item-text layout=column><h3 translate=choose_sign></h3></div></md-list-item><md-divider></md-divider><md-list-item class="md-1-line item item--sub" aria-label=commercial ng-click=page.btn.goto_url(Const.Url.Sitedown)><div class=md-list-item-text layout=column><h4 translate=commercial></h4></div></md-list-item><md-list-item class="md-1-line item item--sub" aria-label=electrical ng-click=page.btn.goto_url(Const.Url.Sitedown)><div class=md-list-item-text layout=column><h4 translate=electrical></h4></div></md-list-item><md-list-item class="md-1-line item item--sub" aria-label=print ng-click=page.btn.goto_url(Const.Url.Sitedown)><div class=md-list-item-text layout=column><h4 translate=print></h4></div></md-list-item><md-list-item class="md-1-line item item--sub" aria-label=services ng-click=page.btn.goto_url(Const.Url.Sitedown)><div class=md-list-item-text layout=column><h4 translate=services></h4></div></md-list-item><md-divider></md-divider><md-list-item class="md-1-line item item--main" aria-label=our_work ng-click=page.btn.goto_url(Const.Url.Sitedown)><div class=md-list-item-text layout=column><h3 translate=our_work></h3></div></md-list-item><md-list-item class="md-1-line item item--main" aria-label=sign_stories ng-click=page.btn.goto_url(Const.Url.Sitedown)><div class=md-list-item-text layout=column><h3 translate=sign_stories></h3></div></md-list-item><md-list-item class="md-1-line item item--main" aria-label=about_us ng-click=page.btn.goto_url(Const.Url.Sitedown)><div class=md-list-item-text layout=column><h3 translate=about_us></h3></div></md-list-item><md-list-item class="md-1-line item item--main" aria-label=nuts_bolts ng-click=page.btn.goto_url(Const.Url.Sitedown)><div class=md-list-item-text layout=column><h3 translate=nuts_bolts></h3></div></md-list-item><md-divider></md-divider><div class="callToAction button--brown" layout=row layout="center center"><md-button class=callToAction__btn aria-label="{{\'btn_get_quote\'| translate}}" ng-click=page.btn.goto_url(Const.Url.Sitedown) ng-bind="\'btn_get_quote\' | translate"></md-button></div></md-list></md-sidenav><md-content class=page__content flex layout=column layout-align="start space-around"><carousel class=hero flex data-hero=page.template.hero></carousel><div class=grid-list-container><div class=grid-list layout-wrap layout=row layout-align="space-around space-around"><div class=grid-list__item ng-class="{\'grid-list__item--left\': ($even === true),\n                            \'grid-list__item--right\': ($even === false)}" ng-repeat="obj in page.template.list_type" flex=100 flex-gt-sm=50><sign-type-panel flex data-goto-url={{obj[Const.P.Url]}} data-key={{obj[Const.P.Key]}} data-show-blurb=true data-image-url={{obj[Const.P.Image]}}></sign-type-panel></div></div></div><div class=bottom-container><div class=get-a-quote layout=column layout-align="center center"><div class=callToAction><md-button class=callToAction__btn aria-label="{{\'btn_get_quote\'| translate}}" ng-click=page.btn.goto_url(Const.Url.Sitedown) ng-bind="\'btn_get_quote\' | translate"></md-button></div></div><div class=split-container layout=column layout-align="start center" layout-gt-sm=row layout-align-gt-sm="start center"><div class="split-container__item our-clients" layout=column layout-align="start center" flex=50><span class=item__title translate=our_clients></span><div class=client-grid layout-wrap layout=row layout-align="start start"><img flex=50 flex-gt-xs=33 class=client-grid__item ng-repeat="image in page.template.our_clients" ng-src="{{image}}"></div></div><div class="split-container__item have-questions" layout=column layout-align="start center" flex=50><span class=item__title translate=questions></span> <span class=item__description translate=more_info_2a></span> <span class=item__description translate=more_info_2b></span> <span class=item__description translate=more_info_2c></span><div class="callToAction button--light-brown"><md-button class=callToAction__btn aria-label="{{\'contact_us\'| translate}}" ng-click=page.btn.goto_url(Const.Url.Sitedown) ng-bind="\'contact_us\' | translate"></md-button></div></div></div><div class=social-media layout=column layout-align="center center"><span class=social-media__handle translate=twitter_handle></span> <span class=social-media__follow-us-title translate=instagram></span><div class="callToAction button--brown"><md-button class=callToAction__btn aria-label="{{\'btn_follow\'| translate}}" ng-click=page.btn.goto_url(Const.Url.Sitedown) ng-bind="\'btn_follow\' | translate"></md-button></div></div><div class=image-belt layout=row layout-align="start start"><div flex=20 class=image-belt__item ng-class="{\'first\': ($first === true),\n                                \'last\': ($last === true)}" ng-repeat="image in page.template.image_belt" style=background:url({{image}})></div></div><div class=footer layout=column layout-align="start center" layout-gt-xs=row layout-align-gt-xs="start space-between"><div class="footer__section sitemap" flex=33 layout=column layout-align="start center" layout-gt-sm=column layout-align-gt-sm="start start"><span class=footer__title translate=choose_sign ng-click=page.btn.goto_url(Const.Url.Sitedown)></span><div class=spacer layout=column layout-align="start start"><span class=footer__description ng-click=page.btn.goto_url(Const.Url.Sitedown) translate=commercial></span> <span class=footer__description ng-click=page.btn.goto_url(Const.Url.Sitedown) translate=electrical></span> <span class=footer__description ng-click=page.btn.goto_url(Const.Url.Sitedown) translate=print></span> <span class=footer__description ng-click=page.btn.goto_url(Const.Url.Sitedown) translate=services></span></div><span class="footer__title compact" ng-click=page.btn.goto_url(Const.Url.Sitedown) translate=our_work></span> <span class="footer__title compact" ng-click=page.btn.goto_url(Const.Url.Sitedown) translate=sign_stories></span> <span class="footer__title compact" ng-click=page.btn.goto_url(Const.Url.Sitedown) translate=about_us></span> <span class="footer__title compact" ng-click=page.btn.goto_url(Const.Url.Sitedown) translate=nuts_bolts></span></div><div class="footer__section get-started" flex=33 layout=column layout-align="start center"><span class=footer__title translate=get_started></span> <span class=footer__description translate=get_started_info></span><div class=callToAction><md-button class=callToAction__btn aria-label="{{\'btn_get_quote\'| translate}}" ng-click=page.btn.goto_url(Const.Url.Sitedown) ng-bind="\'btn_get_quote\' | translate"></md-button></div><div class=social-media-bar layout=row layout-align="center center"><md-icon md-svg-icon=social:facebook aria-label=facebook></md-icon><md-icon md-svg-icon=social:instagram aria-label=instagram></md-icon><md-icon md-svg-icon=social:yelp aria-label=yelp></md-icon></div></div><div class="footer__section contact-us" flex=33 layout=column layout-align="start center" layout-gt-sm=column layout-align-gt-sm="start end"><div layout=column layout-align="start start"><span class=footer__title translate=contact_us></span> <span class=footer__description translate=entity_name></span> <span class=footer__description translate=address1></span> <span class=footer__description translate=address2></span> <span class="footer__description spacer" translate=phone></span> <span class=footer__description translate=email></span></div></div></div><div class=copyright layout=column layout-align="center center" layout-gt-sm=row layout-align-gt-sm="center center"><span translate=copyright1 translate-values="{year: Const.Default.Year}"></span> <span class=copyright__divider>&nbsp;|&nbsp;</span> <span translate=copyright2 translate-values="{year: Const.Default.Year}"></span></div></div></md-content></div>';
angular.module('monterey-signs').run(['$templateCache', function ($templateCache) {$templateCache.put('frontend/src/pages/home/home.html', v1);}]);
module.exports=v1

/***/ }),

/***/ "./frontend/src/pages/sitedown/SiteDownCtrl.js":
/*!*****************************************************!*\
  !*** ./frontend/src/pages/sitedown/SiteDownCtrl.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module("monterey-signs.controllers")
        .controller("SiteDownCtrl", ["Const", "Midtier", function (Const, Midtier) {
            var _this = this;
        }]);


/***/ }),

/***/ "./frontend/src/pages/sitedown/sitedown.html":
/*!***************************************************!*\
  !*** ./frontend/src/pages/sitedown/sitedown.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var v1='<div class=page--sitedown layout=row layout-align="center start"><md-content class=page__content layout-fill layout=row layout-align="center start"><div class="message md-whiteframe-6dp" layout=column layout-align="start center"><div class=message__text translate=sitedown_404></div><img class=message__img src="/resources/img/monterey-signs.png"><div class=button-container><md-button class=button aria-label="{{btn_back_home| translate}}" ng-href={{Const.Url.Home}} translate=btn_back_home></md-button></div></div></md-content></div>';
angular.module('monterey-signs').run(['$templateCache', function ($templateCache) {$templateCache.put('frontend/src/pages/sitedown/sitedown.html', v1);}]);
module.exports=v1

/***/ }),

/***/ "./frontend/src/routes.js":
/*!********************************!*\
  !*** ./frontend/src/routes.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module("monterey-signs.routing")
        .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
    
            $routeProvider.when('/sitedown', {
                templateUrl: 'frontend/src/pages/sitedown/sitedown.html',
                controller: 'SiteDownCtrl',
                controllerAs: 'page',
            });
            $routeProvider.when('/', {
                templateUrl: 'frontend/src/pages/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'page',
            });

            $routeProvider.otherwise({redirectTo: '/'});
        }]);

/***/ }),

/***/ "./frontend/src/services/app/Midtier.js":
/*!**********************************************!*\
  !*** ./frontend/src/services/app/Midtier.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module("monterey-signs.services")
        .service("Midtier", ["Const", "$http", "Request", function (Const, $http, Request) {
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

        }]);


/***/ }),

/***/ "./frontend/src/services/lab/Browser.js":
/*!**********************************************!*\
  !*** ./frontend/src/services/lab/Browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module("monterey-signs.services")
        .service("Browser", ["Const", function (Const) {
            var self;

            // -- Service -- //
            return (self = {
                is_chrome: is_chrome,
                is_firefox: is_firefox,
                is_safari: is_safari,
                is_iOS: is_iOS,
            });

            // -- Functions -- //
            /* 
             * https://stackoverflow.com/a/9851769 
             * 
             * Analysis of reliability
             * 
             * Chrome: The global chrome object, containing several properties including a documented chrome.webstore object.
             * Firefox: Firefox's API to install add-ons: InstallTrigger
             * Safari: Check against SafariRemoteNotification, which was introduced after version 7.1, to cover all Safaris from 3.0 and upwards.
             * iOS: https://stackoverflow.com/a/9039885 checks via navigator.platform
             * 
             * */
            function is_chrome() {
                return (!!window.chrome && !!window.chrome.webstore);
            }
            function is_firefox() {
                return (typeof InstallTrigger !== 'undefined');
            }
            function is_safari() {
                return (/constructor/i.test(window.HTMLElement) || (function (p) {
                    return p.toString() === "[object SafariRemoteNotification]";
                })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)));
            }
            function is_iOS() {
                var iDevices = [
                    'iPad Simulator',
                    'iPhone Simulator',
                    'iPod Simulator',
                    'iPad',
                    'iPhone',
                    'iPod'
                ];
                var _return = false;
                if (!!navigator.platform) {
                    while (iDevices.length) {
                        if (navigator.platform === iDevices.pop()) {
                            _return = true;
                        }
                    }
                }
                return _return;
            }

        }]);


/***/ }),

/***/ "./frontend/src/services/lab/DateTime.js":
/*!***********************************************!*\
  !*** ./frontend/src/services/lab/DateTime.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module("monterey-signs.services")
        .service("DateTime", ["Const", function (Const) {
            var self;

            // -- Service -- //
            return (self = {
                date: {
                    today: date_today, // local
                },
                time: {
                    today: time_today, // local
                },
                current_year: current_year(),
            });

            // -- Functions -- //
            function date_today() {
                return to_iso_date(new Date());
            }

            function time_today() {
                return to_iso_datetime(new Date());
            }
            function current_year() {
                return new Date().getFullYear();
            }

            function to_iso_date(date) {
                var year, month, day;
                // Y-m-d
                year = __leftpad(date.getFullYear(), '0000');
                month = __leftpad(date.getMonth() + 1, '00');
                day = __leftpad(date.getDate(), '00');

                return (year + '-' + month + '-' + day);
            }

            function to_iso_datetime(date) {
                var isodate, hour, min, sec;
                // Y-m-d H:i:s
                hour = __leftpad(date.getHours(), '00');
                min = __leftpad(date.getMinutes(), '00');
                sec = __leftpad(date.getSeconds(), '00');

                isodate = to_iso_date(date);

                return (isodate + ' ' + hour + ':' + min + ':' + sec);
            }

            function __leftpad(val, pad) {
                var _return = (pad + val);
                return _return.substring(_return.length - pad.length);
            }

        }]);


/***/ }),

/***/ "./frontend/src/services/lab/Request.js":
/*!**********************************************!*\
  !*** ./frontend/src/services/lab/Request.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module("monterey-signs.services")
        .service("Request", ["Const", function (Const) {
            var self, memory = [];

            // -- Service -- //
            return (self = {
                cached: RequestCached,
                standard: RequestStandard,
            });

            // -- Functions -- //
            function is_valid(container) {
                var std_resp = container.data;
                return (std_resp[Const.Infrastructure.Result] !== Const.Infrastructure.Fail);
            }
            function is_loaded(container) {
                return (container.data !== null);
            }
            function get_data_key(container, key) {
                return container.data[key];
            }
            function record_data(container, response) {
                container.data = response.data;
            }
            function clear_cache(container) {
                container.promise = null;
            }
            function call_standard(container, request_fn) {
                var fargs = angular.extend([], arguments);
                fargs.splice(0, 2);
                return request_fn.apply(null, fargs)
                        .then(record_data.bind(null, container));
            }
            function call_cached(container, request_fn) {
                if (container.promise === null) {
                    container.promise = call_standard.apply(null, arguments);
                }
                return container.promise;
            }

            // -- Objects -- //
            function RequestCached(request_fn) {
                var index = memory.length;
                memory.push({promise: null, data: null});

                this.is_valid = is_valid.bind(null, memory[index]);
                this.is_loaded = is_loaded.bind(null, memory[index]);
                this.get_data = get_data_key.bind(null, memory[index]);
                this.call = call_cached.bind(null, memory[index], request_fn);
                this.clear_cache = clear_cache.bind(null, memory[index]);
            }
            function RequestStandard(request_fn) {
                var index = memory.length;
                memory.push({promise: null, data: null});

                this.is_valid = is_valid.bind(null, memory[index]);
                this.is_loaded = is_loaded.bind(null, memory[index]);
                this.get_data = get_data_key.bind(null, memory[index]);
                this.call = call_standard.bind(null, memory[index], request_fn);
            }
        }]);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvbW9udGVyZXktc2lnbnMubXNlcnJhbm8uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvYnVpbGQvX2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9idWlsZC9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9ibG9ja3MvY29uZmlnX19lbi5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvYmxvY2tzL2NvbmZpZ19faWNvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2Jsb2Nrcy9jb25maWdfX3RyYW5zbGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvYmxvY2tzL2NvbmZpZ19fd2hpdGVsYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvYmxvY2tzL3J1bl9fY29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2RpcmVjdGl2ZXMvY2FsbFRvQWN0aW9uL2NhbGxUb0FjdGlvbi5odG1sIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9kaXJlY3RpdmVzL2NhbGxUb0FjdGlvbi9jYWxsVG9BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2RpcmVjdGl2ZXMvY2Fyb3VzZWwvY2Fyb3VzZWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvZGlyZWN0aXZlcy9jYXJvdXNlbC9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvZGlyZWN0aXZlcy9kZXRlY3RCcm93c2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9kaXJlY3RpdmVzL2hhbWJ1cmdlckFuaW1hdGlvbi9oYW1idXJnZXJBbmltYXRpb24uaHRtbCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvZGlyZWN0aXZlcy9oYW1idXJnZXJBbmltYXRpb24vaGFtYnVyZ2VyQW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9kaXJlY3RpdmVzL21vbnRlcmV5U2lnbnNOYXZiYXIvbW9udGVyZXlTaWduc05hdmJhci5odG1sIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9kaXJlY3RpdmVzL21vbnRlcmV5U2lnbnNOYXZiYXIvbW9udGVyZXlTaWduc05hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvZGlyZWN0aXZlcy9zY3JvbGxBZmZpeC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvZGlyZWN0aXZlcy9zaWduVHlwZVBhbmVsL3NpZ25UeXBlUGFuZWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvZGlyZWN0aXZlcy9zaWduVHlwZVBhbmVsL3NpZ25UeXBlUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL3BhZ2VzL2hvbWUvSG9tZUN0cmwuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL3BhZ2VzL2hvbWUvaG9tZS5odG1sIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9wYWdlcy9zaXRlZG93bi9TaXRlRG93bkN0cmwuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL3BhZ2VzL3NpdGVkb3duL3NpdGVkb3duLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvc2VydmljZXMvYXBwL01pZHRpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL3NlcnZpY2VzL2xhYi9Ccm93c2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9zZXJ2aWNlcy9sYWIvRGF0ZVRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL3NlcnZpY2VzL2xhYi9SZXF1ZXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZnJvbnRlbmQvYnVpbGQvZW50cnkuanNcIik7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gIyBCdWlsZCBIZWxwZXIgRnVuY3Rpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKGZ1bmN0aW9uICgpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgbG9hZF9hbGw6IGxvYWRfYWxsLFxuICAgICAgICBsb2FkX2FuZF9yZW1vdmU6IGxvYWRfYW5kX3JlbW92ZSxcbiAgICAgICAgbG9hZF9zZWxlY3RlZDogbG9hZF9zZWxlY3RlZCxcbiAgICB9O1xuXG4gICAgLy8gLS0gRnVuY3Rpb25zIC0tIC8vXG4gICAgZnVuY3Rpb24gbG9hZF9hbGwocmVxdWlyZV9hbGwpIHtcbiAgICAgICAgdmFyIGxpc3RfZmlsZSA9IHJlcXVpcmVfYWxsLmtleXMoKTtcbiAgICAgICAgbG9hZF9zZWxlY3RlZChyZXF1aXJlX2FsbCwgbGlzdF9maWxlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbG9hZF9hbmRfcmVtb3ZlKHJlcXVpcmVfYWxsLCB0b19yZW1vdmUpIHtcbiAgICAgICAgdmFyIGxpc3RfZmlsZSA9IHJlcXVpcmVfYWxsLmtleXMoKTtcbiAgICAgICAgdmFyIHJlbW92ZV9pdCA9IGxpc3RfZmlsZS5zcGxpY2UobGlzdF9maWxlLmluZGV4T2YodG9fcmVtb3ZlKSwgMSk7XG4gICAgICAgIHJlcXVpcmVfYWxsKHJlbW92ZV9pdFswXSk7XG5cbiAgICAgICAgcmV0dXJuIGxpc3RfZmlsZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbG9hZF9zZWxlY3RlZChyZXF1aXJlX2FsbCwgbGlzdF9maWxlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdF9maWxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gbGlzdF9maWxlW2ldO1xuICAgICAgICAgICAgcmVxdWlyZV9hbGwoa2V5KTtcbiAgICAgICAgfVxuICAgIH1cbn0pKCk7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gIyBKYXZhc2NyaXB0L1RlbXBsYXRlIFNvdXJjZSBGaWxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmhlbHBlciA9IHJlcXVpcmUoJy4vX2hlbHBlcicpO1xuXG4vLyBsb2FkIHNyYyBqYXZhc2NyaXB0IGFuZCB0ZW1wbGF0ZXNcbnZhciByZXF1aXJlX3NyY19maWxlID0gcmVxdWlyZS5jb250ZXh0KCcuLi9zcmMvJywgdHJ1ZSwgLy4rXFwuKGpzfGh0bWwpJC8pO1xuaGVscGVyLmxvYWRfYWxsKHJlcXVpcmVfc3JjX2ZpbGUpOyIsImFuZ3VsYXIubW9kdWxlKFwibW9udGVyZXktc2lnbnNcIiwgW1xuICAgIFwicGFzY2FscHJlY2h0LnRyYW5zbGF0ZVwiLFxuICAgIFwibmdTYW5pdGl6ZVwiLFxuICAgIFwibmdNYXRlcmlhbFwiLFxuICAgIFwibmdBbmltYXRlXCIsXG4gICAgXCJuZ0FyaWFcIixcbiAgICAvL1xuICAgIFwibW9udGVyZXktc2lnbnMuYmxvY2tzXCIsXG4gICAgXCJtb250ZXJleS1zaWducy5jb25zdGFudHNcIixcbiAgICBcIm1vbnRlcmV5LXNpZ25zLmNvbnRyb2xsZXJzXCIsXG4gICAgXCJtb250ZXJleS1zaWducy5kaXJlY3RpdmVzXCIsXG4gICAgXCJtb250ZXJleS1zaWducy5yb3V0aW5nXCIsXG4gICAgXCJtb250ZXJleS1zaWducy5zZXJ2aWNlc1wiLFxuXSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9udGVyZXktc2lnbnMuYmxvY2tzXCIsIFtdKTtcbmFuZ3VsYXIubW9kdWxlKFwibW9udGVyZXktc2lnbnMuY29uc3RhbnRzXCIsIFtdKTtcbmFuZ3VsYXIubW9kdWxlKFwibW9udGVyZXktc2lnbnMuY29udHJvbGxlcnNcIiwgW10pO1xuYW5ndWxhci5tb2R1bGUoXCJtb250ZXJleS1zaWducy5kaXJlY3RpdmVzXCIsIFtdKTtcbmFuZ3VsYXIubW9kdWxlKFwibW9udGVyZXktc2lnbnMucm91dGluZ1wiLCBbXCJuZ1JvdXRlXCJdKTtcbmFuZ3VsYXIubW9kdWxlKFwibW9udGVyZXktc2lnbnMuc2VydmljZXNcIiwgW10pOyIsImFuZ3VsYXIubW9kdWxlKFwibW9udGVyZXktc2lnbnMuYmxvY2tzXCIpXG4gICAgICAgIC5jb25maWcoW1wiJHRyYW5zbGF0ZVByb3ZpZGVyXCIsIGZ1bmN0aW9uICgkdHJhbnNsYXRlUHJvdmlkZXIpIHtcbiAgICAgICAgICAgICR0cmFuc2xhdGVQcm92aWRlci50cmFuc2xhdGlvbnMoXCJlblwiLCB7XG4gICAgICAgICAgICAgICAgXCJcIjogXCJcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzaXRlZG93blxuICAgICAgICAgICAgICAgICwgXCJidG5fYmFja19ob21lXCI6IFwiYmFjayB0byBob21lXCJcbiAgICAgICAgICAgICAgICAsIFwic2l0ZWRvd25fNDA0XCI6IFwiT29wcyEgVGhpcyBwYWdlIGlzIG5vdCB5ZXQgYXZhaWxhYmxlLlwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5hdmJhclxuICAgICAgICAgICAgICAgICwgXCJjaG9vc2Vfc2lnblwiOiBcImNob29zZSB5b3VyIHNpZ25cIlxuICAgICAgICAgICAgICAgICwgXCJvdXJfd29ya1wiOiBcIm91ciBleGNlbGxlbnQgd29ya1wiXG4gICAgICAgICAgICAgICAgLCBcInNpZ25fc3Rvcmllc1wiOiBcInNpZ24gc3Rvcmllc1wiXG4gICAgICAgICAgICAgICAgLCBcImFib3V0X3VzXCI6IFwiYWJvdXQgdXNcIlxuICAgICAgICAgICAgICAgICwgXCJudXRzX2JvbHRzXCI6IFwibnV0cyAmIGJvbHRzXCJcbiAgICAgICAgICAgICAgICAsIFwiY29tbWVyY2lhbFwiOiBcImNvbW1lcmNpYWxcIlxuICAgICAgICAgICAgICAgICwgXCJwcmludGVkXCI6IFwicHJpbnRlZFwiXG4gICAgICAgICAgICAgICAgLCBcImVsZWN0cmljYWxcIjogXCJlbGVjdHJpY2FsXCJcbiAgICAgICAgICAgICAgICAsIFwic2VydmljZXNcIjogXCJzZXJ2aWNlc1wiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhvbWVcbiAgICAgICAgICAgICAgICAsIFwibW9udGVyZXlfc2lnbnNcIjogXCJtb250ZXJleSdzIGZhdm9yaXRlIHNpZ24gc2hvcFwiXG4gICAgICAgICAgICAgICAgLCBcImJsdXJiX3BsYWNlaG9sZGVyXCI6IFwidGhpcyBpcyBhIGJsdXJiIGFib3V0IHt7dHlwZX19e3sgdHlwZSA9PT0gJ3NlcnZpY2VzJyA/ICcnIDogJyBwcm9kdWN0cyd9fVwiXG4gICAgICAgICAgICAgICAgLCBcImJ0bl9leHBsb3JlXCI6IFwiZXhwbG9yZSB7eyB0eXBlIH19XCJcbiAgICAgICAgICAgICAgICAsIFwiYnRuX2dldF9xdW90ZVwiOiBcImdldCBhIHF1b3RlXCJcbiAgICAgICAgICAgICAgICAsIFwib3VyX2NsaWVudHNcIjogXCJvdXIgY2xpZW50c1wiXG4gICAgICAgICAgICAgICAgLCBcInF1ZXN0aW9uc1wiOiBcImhhdmUgcXVlc3Rpb25zP1wiXG4gICAgICAgICAgICAgICAgLCBcIm1vcmVfaW5mb18xYVwiOiBcIldlJ3JlIGhhcHB5IHRvIGhlbHAhXCJcbiAgICAgICAgICAgICAgICAsIFwibW9yZV9pbmZvXzFiXCI6IFwiVGhlIGJlc3QgZmlyc3Qgc3RlcCBpcyB1c3VhbGx5IGFuIG9uLXNpdGUgbWVldGluZyB3aGVyZSB3ZSBjYW4gZGlzY3VzcyB5b3VyIHByb2plY3QgaW5jbHVkaW5nIHNpemluZywgcGxhY2VtZW50LCBjb25zdHJ1Y3Rpb24sIHBlcm1pdHMsIGJ1ZGdldCwgdGltZWxpbmUsIGFuZCBhbGwgdGhlIG90aGVyIGRldGFpbHMuIFBsZWFzZSBmaWxsIG91dCBvdXIgcXVvdGUgZm9ybSB0byBiZWdpbiBhIGZyZWUgY29uc3VsdGF0aW9uLlwiXG4gICAgICAgICAgICAgICAgLCBcIm1vcmVfaW5mb18yYVwiOiBcIk1vbnRlcmV5IFNpZ25zIGlzIGEgbG9jYWwsIGluZGVwZW5kZW50LCBmYW1pbHktb3duZWQsIGF3YXJkIHdpbm5pbmcsIGZ1bGwtc2VydmljZSBzaWduIHNob3AuIE91ciBtaXNzaW9uIGlzIHRvIHByb3ZpZGUgb3VyIGNsaWVudHMgd2l0aCBjb3N0LWVmZmVjdGl2ZSBkZXNpZ24gYW5kIGZhYnJpY2F0aW9uIHNvbHV0aW9ucywgd2hpbGUgYXQgdGhlIHNhbWUgdGltZSBjb21iaW5pbmcgbWF0ZXJpYWxzLCBmaW5pc2hlcywgYW5kIHRlY2huaXF1ZXMgdGhhdCBwcm92aWRlIGEgY3JlYXRpdmUgZWRnZS4gV2hlbmV2ZXIgcG9zc2libGUgd2UgdXNlIGVudmlyb25tZW50YWxseS1mcmllbmRseSBtYXRlcmlhbHMgYW5kIHByb2Nlc3Nlcy5cIlxuICAgICAgICAgICAgICAgICwgXCJtb3JlX2luZm9fMmJcIjogXCJTYW50YSBDcnV6IFNpZ25zIGFuZCBNb250ZXJleSBTaWducyBhcmUgb3duZWQgYW5kIG9wZXJhdGVkIGJ5IHRoZSBzYW1lIGZhbWlseS4gT3VyIGF0dGVudGlvbiB0byBkZXRhaWwsIGFuZCBhdHRlbnRpb24gdG8gb3VyIGN1c3RvbWVycywgaGFzIGVhcm5lZCB1cyB0aGUgcmVwdXRhdGlvbiBhcyB0aGUgcHJlbWllciBmdWxsIHNlcnZpY2Ugc2lnbiBjb21wYW55IG9uIHRoZSBDZW50cmFsIENvYXN0LlwiXG4gICAgICAgICAgICAgICAgLCBcIm1vcmVfaW5mb18yY1wiOiBcIldlIGxvb2sgZm9yd2FyZCB0byB3b3JraW5nIHdpdGggeW91LlwiXG4gICAgICAgICAgICAgICAgLCBcInR3aXR0ZXJfaGFuZGxlXCI6IFwiQG1vbnRlcmV5c2lnbnNcIlxuICAgICAgICAgICAgICAgICwgXCJpbnN0YWdyYW1cIjogXCJGb2xsb3cgdXMgb24gSW5zdGFncmFtXCJcbiAgICAgICAgICAgICAgICAsIFwiYnRuX2ZvbGxvd1wiOiBcImZvbGxvdyB1c1wiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvb3RlclxuICAgICAgICAgICAgICAgICwgXCJnZXRfc3RhcnRlZFwiOiBcInJlYWR5IHRvIGdldCBzdGFydGVkP1wiXG4gICAgICAgICAgICAgICAgLCBcImdldF9zdGFydGVkX2luZm9cIjogXCJJZiB5b3Ugd291bGQgbGlrZSBhIHF1b3RlIG9uIHlvdXIgcHJvamVjdCwgcGxlYXNlIGZpbGwgb3V0IG91ciBxdW90ZSBmb3JtLiBZb3Ugd2lsbCByZWNlaXZlIGFuIGFuc3dlciB0byB5b3VyIHF1b3RlIHdpdGhpbiAyNCBob3Vycy5cIlxuICAgICAgICAgICAgICAgICwgXCJjb250YWN0X3VzXCI6IFwiY29udGFjdCB1c1wiXG4gICAgICAgICAgICAgICAgLCBcImVudGl0eV9uYW1lXCI6IFwiTW9udGVyZXkgU2lnbnNcIlxuICAgICAgICAgICAgICAgICwgXCJhZGRyZXNzMVwiOiBcIjU1NSBCcm9hZHdheSBBdmVudWVcIlxuICAgICAgICAgICAgICAgICwgXCJhZGRyZXNzMlwiOiBcIlNlYXNpZGUsIENBIDkzOTU1XCJcbiAgICAgICAgICAgICAgICAsIFwicGhvbmVcIjogXCI4MzEtNjMyLTA0OTBcIlxuICAgICAgICAgICAgICAgICwgXCJlbWFpbFwiOiBcInNhbGVzQE1vbnRlcmV5U2lnbnMuY29tXCJcbiAgICAgICAgICAgICAgICAsIFwiY29weXJpZ2h0MVwiOiBcIkNvcHlyaWdodCDCqSB7eyB5ZWFyIH19IE1vbnRlcmV5IFNpZ25zXCJcbiAgICAgICAgICAgICAgICAsIFwiY29weXJpZ2h0MlwiOiBcIldlYiBEZXNpZ24gYnkgU2xlZXBsZXNzIE1lZGlhXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XSk7XG4iLCJhbmd1bGFyLm1vZHVsZShcIm1vbnRlcmV5LXNpZ25zLmJsb2Nrc1wiKVxuICAgICAgICAuY29uZmlnKFtcIiRtZEljb25Qcm92aWRlclwiLCBmdW5jdGlvbiAoJG1kSWNvblByb3ZpZGVyKSB7XG4gICAgICAgICAgICAkbWRJY29uUHJvdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgLmljb25TZXQoJ3NvY2lhbDppbnN0YWdyYW0nLCAncmVzb3VyY2VzL2ZlYXRoZXIvaW5zdGFncmFtLnN2ZycsIDI0KVxuICAgICAgICAgICAgICAgICAgICAuaWNvblNldCgnc29jaWFsOmZhY2Vib29rJywgJ3Jlc291cmNlcy9mZWF0aGVyL2ZhY2Vib29rLnN2ZycsIDI0KVxuICAgICAgICAgICAgICAgICAgICAuaWNvblNldCgnc29jaWFsOnllbHAnLCAncmVzb3VyY2VzL2ZlYXRoZXIvbG9hZGVyLnN2ZycsIDI0KVxuICAgICAgICB9XSk7XG4iLCJhbmd1bGFyLm1vZHVsZShcIm1vbnRlcmV5LXNpZ25zLmJsb2Nrc1wiKVxuICAgICAgICAuY29uZmlnKFtcIiR0cmFuc2xhdGVQcm92aWRlclwiLCBmdW5jdGlvbiAoJHRyYW5zbGF0ZVByb3ZpZGVyKSB7XG4gICAgICAgICAgICAkdHJhbnNsYXRlUHJvdmlkZXIudXNlU2FuaXRpemVWYWx1ZVN0cmF0ZWd5KCdzYW5pdGl6ZScpO1xuICAgICAgICAgICAgJHRyYW5zbGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAgICAgICAgIC5wcmVmZXJyZWRMYW5ndWFnZShcImVuXCIpO1xuICAgICAgICB9XSk7IiwiYW5ndWxhci5tb2R1bGUoXCJtb250ZXJleS1zaWducy5ibG9ja3NcIilcbiAgICAgICAgLmNvbmZpZyhbXCIkbWRUaGVtaW5nUHJvdmlkZXJcIiwgZnVuY3Rpb24gKCRtZFRoZW1pbmdQcm92aWRlcikge1xuXG4gICAgICAgICAgICB2YXIgcHJpbWFyeSA9IGRlZmluZV9wcmltYXJ5X3BhbGV0dGUoJ3Njd19ibHVlJyk7XG4gICAgICAgICAgICB2YXIgc2Vjb25kYXJ5ID0gZGVmaW5lX3NlY29uZGFyeV9wYWxldHRlKCdzY3dfeWVsbG93Jyk7XG4gICAgICAgICAgICB2YXIgd2FybmluZyA9IGRlZmluZV93YXJuaW5nX3BhbGV0dGUoJ3dhcm5pbmcnKTtcblxuICAgICAgICAgICAgJG1kVGhlbWluZ1Byb3ZpZGVyLnRoZW1lKCdkZWZhdWx0JylcbiAgICAgICAgICAgICAgICAgICAgLnByaW1hcnlQYWxldHRlKHByaW1hcnkpXG4gICAgICAgICAgICAgICAgICAgIC5hY2NlbnRQYWxldHRlKHNlY29uZGFyeSlcbiAgICAgICAgICAgICAgICAgICAgLndhcm5QYWxldHRlKHdhcm5pbmcpO1xuXG4gICAgICAgICAgICAvLyAtLSBGdW5jdGlvbnMgLS0gLy9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlZmluZV9wcmltYXJ5X3BhbGV0dGUobGFiZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX19kZWZpbmVfY3VzdG9tX3BhbGV0dGUobGFiZWwsIHtcbiAgICAgICAgICAgICAgICAgICAgJzUwJzogJ0UwRURGNicsXG4gICAgICAgICAgICAgICAgICAgICcxMDAnOiAnQjNEM0U5JyxcbiAgICAgICAgICAgICAgICAgICAgJzIwMCc6ICc4MEI1REInLFxuICAgICAgICAgICAgICAgICAgICAnMzAwJzogJzI2ODFDMScsIC8vIGh1ZSAxXG4gICAgICAgICAgICAgICAgICAgICc0MDAnOiAnMjY4MUMxJyxcbiAgICAgICAgICAgICAgICAgICAgJzUwMCc6ICcwMDZCQjYnLCAvLyBodWUgZGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAnNjAwJzogJzAwNjNBRicsXG4gICAgICAgICAgICAgICAgICAgICc3MDAnOiAnMDA1OEE2JyxcbiAgICAgICAgICAgICAgICAgICAgJzgwMCc6ICdGRkZGRkYnLCAvLyBodWUgMlxuICAgICAgICAgICAgICAgICAgICAnOTAwJzogJzAwM0M4RScsXG4gICAgICAgICAgICAgICAgICAgICdBMTAwJzogJzAwM0M4RScsIC8vIGh1ZSAzXG4gICAgICAgICAgICAgICAgICAgICdBMjAwJzogJzg3QjBGRicsXG4gICAgICAgICAgICAgICAgICAgICdBNDAwJzogJzU0OEVGRicsXG4gICAgICAgICAgICAgICAgICAgICdBNzAwJzogJzNCN0VGRicsXG4gICAgICAgICAgICAgICAgICAgICdjb250cmFzdERlZmF1bHRDb2xvcic6ICdkYXJrJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZGVmaW5lX3NlY29uZGFyeV9wYWxldHRlKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZGVmaW5lX2N1c3RvbV9wYWxldHRlKGxhYmVsLCB7XG4gICAgICAgICAgICAgICAgICAgICc1MCc6ICdGRkY4RTQnLFxuICAgICAgICAgICAgICAgICAgICAnMTAwJzogJ0ZGRURCQycsXG4gICAgICAgICAgICAgICAgICAgICcyMDAnOiAnRkZFMjkwJyxcbiAgICAgICAgICAgICAgICAgICAgJzMwMCc6ICdGRkQ2NjMnLFxuICAgICAgICAgICAgICAgICAgICAnNDAwJzogJ0ZGQ0Q0MScsXG4gICAgICAgICAgICAgICAgICAgICc1MDAnOiAnRkZDNDIwJyxcbiAgICAgICAgICAgICAgICAgICAgJzYwMCc6ICdGRkJFMUMnLFxuICAgICAgICAgICAgICAgICAgICAnNzAwJzogJ0ZGQjYxOCcsXG4gICAgICAgICAgICAgICAgICAgICc4MDAnOiAnRkZBRjEzJyxcbiAgICAgICAgICAgICAgICAgICAgJzkwMCc6ICdGRkEyMEInLFxuICAgICAgICAgICAgICAgICAgICAnQTEwMCc6ICdGRkNENDEnLCAvLyBodWUgMSAoYmFzZSAtIDEwMClcbiAgICAgICAgICAgICAgICAgICAgJ0EyMDAnOiAnRkZDNDIwJywgLy8gaHVlIGRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgJ0E0MDAnOiAnRkZCNjE4JywgLy8gaHVlIDIgKGJhc2UgKyAyMDApXG4gICAgICAgICAgICAgICAgICAgICdBNzAwJzogJ0ZGQTIwQicsIC8vIGh1ZSAzIChiYXNlICsgNDAwKVxuICAgICAgICAgICAgICAgICAgICAnY29udHJhc3REZWZhdWx0Q29sb3InOiAnbGlnaHQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBkZWZpbmVfd2FybmluZ19wYWxldHRlKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZGVmaW5lX2N1c3RvbV9wYWxldHRlKGxhYmVsLCB7XG4gICAgICAgICAgICAgICAgICAgICc1MCc6ICdGRkVCRUUnLFxuICAgICAgICAgICAgICAgICAgICAnMTAwJzogJ0ZGQ0REMicsXG4gICAgICAgICAgICAgICAgICAgICcyMDAnOiAnRUY5QTlBJyxcbiAgICAgICAgICAgICAgICAgICAgJzMwMCc6ICdFRjUzNTAnLCAvLyBodWUgMVxuICAgICAgICAgICAgICAgICAgICAnNDAwJzogJ0VGNTM1MCcsXG4gICAgICAgICAgICAgICAgICAgICc1MDAnOiAnRjQ0MzM2JywgLy8gaHVlIGRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgJzYwMCc6ICdFNTM5MzUnLFxuICAgICAgICAgICAgICAgICAgICAnNzAwJzogJ0QzMkYyRicsXG4gICAgICAgICAgICAgICAgICAgICc4MDAnOiAnRDMyRjJGJywgLy8gaHVlIDJcbiAgICAgICAgICAgICAgICAgICAgJzkwMCc6ICdCNzFDMUMnLFxuICAgICAgICAgICAgICAgICAgICAnQTEwMCc6ICdCNzFDMUMnLCAvLyBodWUgM1xuICAgICAgICAgICAgICAgICAgICAnQTIwMCc6ICdGRjUyNTInLFxuICAgICAgICAgICAgICAgICAgICAnQTQwMCc6ICdGRjE3NDQnLFxuICAgICAgICAgICAgICAgICAgICAnQTcwMCc6ICdENTAwMDAnLFxuICAgICAgICAgICAgICAgICAgICAnY29udHJhc3REZWZhdWx0Q29sb3InOiAnbGlnaHQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tIEhlbHBlcnMgLS0gLy9cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9fZGVmaW5lX2N1c3RvbV9wYWxldHRlKGxhYmVsLCByZXBsYWNlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAkbWRUaGVtaW5nUHJvdmlkZXIuZGVmaW5lUGFsZXR0ZShsYWJlbCwgcmVwbGFjZW1lbnRzKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9fZXh0ZW5kX3BhbGV0dGUobGFiZWwsIG9yaWdpbmFsX3NldCwgcmVwbGFjZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1c3RvbV9wYWxldHRlID0gJG1kVGhlbWluZ1Byb3ZpZGVyLmV4dGVuZFBhbGV0dGUob3JpZ2luYWxfc2V0LCByZXBsYWNlbWVudHMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBfX2RlZmluZV9jdXN0b21fcGFsZXR0ZShsYWJlbCwgY3VzdG9tX3BhbGV0dGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG4iLCJhbmd1bGFyLm1vZHVsZShcIm1vbnRlcmV5LXNpZ25zLmJsb2Nrc1wiKVxuICAgICAgICAucnVuKFtcIiRyb290U2NvcGVcIiwgXCJDb25zdFwiLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgQ29uc3QpIHtcbiAgICAgICAgICAgICRyb290U2NvcGUuQ29uc3QgPSBDb25zdDtcbiAgICAgICAgfV0pO1xuIiwidmFyIHYxPSc8ZGl2IGNsYXNzPWNhbGxUb0FjdGlvbj48bWQtYnV0dG9uIGNsYXNzPWNhbGxUb0FjdGlvbl9fYnRuIGFyaWEtbGFiZWw9e3tzZXR0aW5ncy5sYWJlbH19IG5nLWhyZWY9e3tzZXR0aW5ncy5nb3RvX3VybH19IG5nLWJpbmQtaHRtbD1zZXR0aW5ncy5sYWJlbD48L21kLWJ1dHRvbj48L2Rpdj4nO1xuYW5ndWxhci5tb2R1bGUoJ21vbnRlcmV5LXNpZ25zJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHskdGVtcGxhdGVDYWNoZS5wdXQoJ2Zyb250ZW5kL3NyYy9kaXJlY3RpdmVzL2NhbGxUb0FjdGlvbi9jYWxsVG9BY3Rpb24uaHRtbCcsIHYxKTt9XSk7XG5tb2R1bGUuZXhwb3J0cz12MSIsImFuZ3VsYXIubW9kdWxlKFwibW9udGVyZXktc2lnbnMuZGlyZWN0aXZlc1wiKVxuICAgICAgICAuZGlyZWN0aXZlKFwiY2FsbFRvQWN0aW9uXCIsIFtcIkNvbnN0XCIsIFwiJHRyYW5zbGF0ZVwiLCBmdW5jdGlvbiAoQ29uc3QsICR0cmFuc2xhdGUpIHtcbiAgICAgICAgICAgIHZhciBkaXJlY3RpdmVfZGVmID0ge1xuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2Zyb250ZW5kL3NyYy9kaXJlY3RpdmVzL2NhbGxUb0FjdGlvbi9jYWxsVG9BY3Rpb24uaHRtbCcsXG4gICAgICAgICAgICAgICAgbGluazogbGlua0ZuLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmVfZGVmO1xuXG4gICAgICAgICAgICAvLyAtLSBGdW5jdGlvbnMgLS0gLy9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGxpbmtGbihzY29wZSwgZWxlbSwgYXR0cnMpIHtcbiAgICAgICAgICAgICAgICBzY29wZS5zZXR0aW5ncyA9IHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBhdHRycy5rZXksXG4gICAgICAgICAgICAgICAgICAgIGdvdG9fdXJsOiBhdHRycy5nb3RvVXJsLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogYXR0cnMubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIHNob3dfYmx1cmI6IChhdHRycy5zaG93Qmx1cmIgPT0gJ3RydWUnKSxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gLS0gSGVscGVycyAtLSAvL1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG4iLCJ2YXIgdjE9JzxkaXYgY2xhc3M9Y2Fyb3VzZWw+PGRpdiBjbGFzcz1jYXJvdXNlbF9faW1hZ2U+PC9kaXY+PGRpdiBjbGFzcz1cIm92ZXJsYXkgY2Fyb3VzZWxfX3NoYWRlXCI+PC9kaXY+PGRpdiBjbGFzcz1cIm92ZXJsYXkgdGV4dFwiIGxheW91dD1jb2x1bW4gbGF5b3V0LWFsaWduPVwiY2VudGVyIGNlbnRlclwiPjxzcGFuIGNsYXNzPXRleHRfX3RpdGxlIG5nLWJpbmQ9XCJzZXR0aW5ncy5rZXkgfCB0cmFuc2xhdGVcIj48L3NwYW4+PGNhbGwtdG8tYWN0aW9uIGNsYXNzPXRleHRfX2NhbGwtdG8tYWN0aW9uIGRhdGEtbGFiZWw9e3tzZXR0aW5ncy5sYWJlbH19IG5nLWNsaWNrPWJ0bi5nb3RvX3VybChzZXR0aW5ncy51cmwpPjwvY2FsbC10by1hY3Rpb24+PC9kaXY+PC9kaXY+JztcbmFuZ3VsYXIubW9kdWxlKCdtb250ZXJleS1zaWducycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7JHRlbXBsYXRlQ2FjaGUucHV0KCdmcm9udGVuZC9zcmMvZGlyZWN0aXZlcy9jYXJvdXNlbC9jYXJvdXNlbC5odG1sJywgdjEpO31dKTtcbm1vZHVsZS5leHBvcnRzPXYxIiwiYW5ndWxhci5tb2R1bGUoXCJtb250ZXJleS1zaWducy5kaXJlY3RpdmVzXCIpXG4gICAgICAgIC5kaXJlY3RpdmUoXCJjYXJvdXNlbFwiLCBbXCJDb25zdFwiLCBcIiR0cmFuc2xhdGVcIiwgXCIkbG9jYXRpb25cIiwgZnVuY3Rpb24gKENvbnN0LCAkdHJhbnNsYXRlLCAkbG9jYXRpb24pIHtcbiAgICAgICAgICAgIHZhciBkaXJlY3RpdmVfZGVmID0ge1xuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2Zyb250ZW5kL3NyYy9kaXJlY3RpdmVzL2Nhcm91c2VsL2Nhcm91c2VsLmh0bWwnLFxuICAgICAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlcm86IFwiPVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGluazogbGlua0ZuLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmVfZGVmO1xuXG4gICAgICAgICAgICAvLyAtLSBGdW5jdGlvbnMgLS0gLy9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGxpbmtGbihzY29wZSwgZWxlbSwgYXR0cnMpIHtcbiAgICAgICAgICAgICAgICBzY29wZS4kd2F0Y2goJ2hlcm8nLCBmdW5jdGlvbiAob2xkLCBjdXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY29wZS5oZXJvICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5zZXR0aW5ncyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogc2NvcGUuaGVyb1tDb25zdC5QLkltYWdlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHNjb3BlLmhlcm9bQ29uc3QuUC5LZXldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAkdHJhbnNsYXRlLmluc3RhbnQoJ2J0bl9nZXRfcXVvdGUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHNjb3BlLmhlcm9bQ29uc3QuUC5VcmxdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuaW1hZ2UuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZCc6ICd1cmwoJyArIHNjb3BlLnNldHRpbmdzLmltYWdlICsgJyknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiAnY292ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uLXgnOiAnNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3aWR0aCc6ICcxMDB2dycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGVsZW0uY2hpbGRyZW4oKS5lcSgwKSxcbiAgICAgICAgICAgICAgICAgICAgc2hhZGU6IGVsZW0uY2hpbGRyZW4oKS5lcSgxKSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZWxlbS5jaGlsZHJlbigpLmVxKDIpLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBzY29wZS5idG4gPSB7XG4gICAgICAgICAgICAgICAgICAgIGdvdG9fdXJsOiBnb3RvX3VybCxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgZWxlbS5vbignbW91c2VlbnRlcicsIGFkZF9zaGFkZSk7XG4gICAgICAgICAgICAgICAgZWxlbS5vbignbW91c2VsZWF2ZScsIHJlbW92ZV9zaGFkZSk7XG4gICAgICAgICAgICAgICAgZWxlbS5vbignJGRlc3Ryb3knLCB0ZWFyZG93bik7XG5cblxuICAgICAgICAgICAgICAgIC8vIC0tIEhlbHBlcnMgLS0gLy9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB0ZWFyZG93bigpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5vZmYoJ21vdXNlZW50ZXInLCBhZGRfc2hhZGUpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLm9mZignbW91c2VsZWF2ZScsIHJlbW92ZV9zaGFkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGFkZF9zaGFkZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwudGV4dC5hZGRDbGFzcygndGV4dC0tc2hvdy1pdCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZW1vdmVfc2hhZGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnRleHQucmVtb3ZlQ2xhc3MoJ3RleHQtLXNob3ctaXQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ290b191cmwocGF0aCkge1xuICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aChwYXRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKFwibW9udGVyZXktc2lnbnMuZGlyZWN0aXZlc1wiKVxuICAgICAgICAuZGlyZWN0aXZlKFwiZGV0ZWN0QnJvd3NlclwiLCBbXCJDb25zdFwiLCBcIkJyb3dzZXJcIiwgZnVuY3Rpb24gKENvbnN0LCBCcm93c2VyKSB7XG4gICAgICAgICAgICB2YXIgZGlyZWN0aXZlX2RlZiA9IHtcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICAgICAgICAgIGxpbms6IGxpbmtGbixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlX2RlZjtcblxuICAgICAgICAgICAgLy8gLS0gRnVuY3Rpb25zIC0tIC8vXG4gICAgICAgICAgICBmdW5jdGlvbiBsaW5rRm4oc2NvcGUsIGVsZW0sIGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgICdDaHJvbWUnOiAoQnJvd3Nlci5pc19jaHJvbWUoKSA9PT0gdHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgICdGaXJlZm94JzogKEJyb3dzZXIuaXNfZmlyZWZveCgpID09PSB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgJ1NhZmFyaSc6IChCcm93c2VyLmlzX3NhZmFyaSgpID09PSB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgJ2lPUyc6IChCcm93c2VyLmlzX2lPUygpID09PSB0cnVlKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGFkZF9icm93c2VyX25hbWVfYXNfY3NzX2NsYXNzKGVsZW0sIGluZm8pO1xuXG4gICAgICAgICAgICAgICAgLy8gLS0gSGVscGVycyAtLSAvL1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGFkZF9icm93c2VyX25hbWVfYXNfY3NzX2NsYXNzKHRhcmdldCwgYnJvd3Nlcl9kZXRlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIGJyb3dzZXJfZGV0ZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChicm93c2VyX2RldGVjdGVkW25hbWVdID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmFkZENsYXNzKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfV0pO1xuIiwidmFyIHYxPSc8YnV0dG9uIGNsYXNzPVwibXNlcnJhbm8gaGFtYnVyZ2VyIHt7c2V0dGluZ3MuYW5pbWF0aW9uX3R5cGV9fVwiIHR5cGU9YnV0dG9uPjxzcGFuIGNsYXNzPWhhbWJ1cmdlci1ib3g+PHNwYW4gY2xhc3M9aGFtYnVyZ2VyLWlubmVyPjwvc3Bhbj48L3NwYW4+PC9idXR0b24+JztcbmFuZ3VsYXIubW9kdWxlKCdtb250ZXJleS1zaWducycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7JHRlbXBsYXRlQ2FjaGUucHV0KCdmcm9udGVuZC9zcmMvZGlyZWN0aXZlcy9oYW1idXJnZXJBbmltYXRpb24vaGFtYnVyZ2VyQW5pbWF0aW9uLmh0bWwnLCB2MSk7fV0pO1xubW9kdWxlLmV4cG9ydHM9djEiLCJhbmd1bGFyLm1vZHVsZShcIm1vbnRlcmV5LXNpZ25zLmRpcmVjdGl2ZXNcIilcbiAgICAgICAgLmRpcmVjdGl2ZShcImhhbWJ1cmdlckFuaW1hdGlvblwiLCBbXCJDb25zdFwiLCBmdW5jdGlvbiAoQ29uc3QpIHtcbiAgICAgICAgICAgIHZhciBkaXJlY3RpdmVfZGVmID0ge1xuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2Zyb250ZW5kL3NyYy9kaXJlY3RpdmVzL2hhbWJ1cmdlckFuaW1hdGlvbi9oYW1idXJnZXJBbmltYXRpb24uaHRtbCcsXG4gICAgICAgICAgICAgICAgbGluazogbGlua0ZuLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmVfZGVmO1xuXG4gICAgICAgICAgICAvLyAtLSBGdW5jdGlvbnMgLS0gLy9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGxpbmtGbihzY29wZSwgZWxlbSwgYXR0cnMpIHtcbiAgICAgICAgICAgICAgICBhdHRycy4kb2JzZXJ2ZSgnaXNBY3RpdmUnLCBkb19hbmltYXRpb24pO1xuXG4gICAgICAgICAgICAgICAgc2NvcGUuc2V0dGluZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbl90eXBlOiAnaGFtYnVyZ2VyLS1lbXBoYXRpYycsXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIC0tIEhlbHBlcnMgLS0gLy9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkb19hbmltYXRpb24oc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dKTtcbiIsInZhciB2MT0nPG1kLXRvb2xiYXIgY2xhc3M9XCJuYXZiYXIgbWQtaHVlLTJcIiBsYXlvdXQ9cm93IGxheW91dC1hbGlnbj1cImNlbnRlciBjZW50ZXJcIiBtZC1uby1pbms+PGRpdiBjbGFzcz1tZC10b29sYmFyLXRvb2xzIGxheW91dD1yb3cgbGF5b3V0LWFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIiBsYXlvdXQtZ3Qtc209cm93IGxheW91dC1hbGlnbi1ndC1zbT1cImNlbnRlciBjZW50ZXJcIj48ZGl2IGNsYXNzPXRvb2xiYXJfX21lbnUtLW1vYmlsZT48bWQtYnV0dG9uIGNsYXNzPXRvb2xiYXJfX2J0biBhcmlhLWxhYmVsPVwiTW9iaWxlIE1lbnVcIiBuZy1jbGljaz1cImJ0bi50b2dnbGVfbW9iaWxlX21lbnUoKTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+PGhhbWJ1cmdlci1hbmltYXRpb24gZGF0YS1pcy1hY3RpdmU9e3tjc3Muc2hvd19tb2JpbGVfbWVudX19PjwvaGFtYnVyZ2VyLWFuaW1hdGlvbj48L21kLWJ1dHRvbj48L2Rpdj48ZGl2IG5nLXJlcGVhdD1cIm9iaiBpbiBsaXN0X25hdlwiPjxtZC1tZW51IG5nLWlmPVwiKGNzcy5pc19pbWFnZShvYmopID09PSBmYWxzZSlcIiBtZC1wb3NpdGlvbi1tb2RlPVwidGFyZ2V0IGJvdHRvbVwiPjxtZC1idXR0b24gY2xhc3M9bmF2YmFyX19idXR0b24gbmctY2xhc3M9XCJ7XFwnaGlnaGxpZ2h0XFwnOiAoY3NzLmN1cnJlbnRfc3VibmF2ID09PSBvYmopfVwiIG5nLW1vdXNlZW50ZXI9XCJidG4uY2xvc2Vfc3VibmF2KG9iaik7IGJ0bi5vcGVuX3N1Ym5hdigkbWRNZW51LCAkZXZlbnQsIG9iailcIiBuZy1ocmVmPXt7b2JqW0NvbnN0LlAuVXJsXX19IGFyaWEtbGFiZWw9XCJ7e29ialtDb25zdC5QLktleV18IHRyYW5zbGF0ZX19XCI+PHNwYW4gbmctYmluZC1odG1sPVwib2JqW0NvbnN0LlAuS2V5XSB8IHRyYW5zbGF0ZVwiPjwvc3Bhbj48L21kLWJ1dHRvbj48bWQtbWVudS1jb250ZW50IHdpZHRoPTQgbmctbW91c2VsZWF2ZT1idG4uY2xvc2Vfc3VibmF2KG9iaik+PG1kLW1lbnUtaXRlbSBzdHlsZT1kaXNwbGF5Om5vbmU+PHNwYW4+PC9zcGFuPjwvbWQtbWVudS1pdGVtPjxtZC1tZW51LWl0ZW0gbmctcmVwZWF0PVwic3VibmF2IGluIG9ialtDb25zdC5QLlN1Ym5hdl1cIj48bWQtYnV0dG9uIGNsYXNzPW5hdmJhcl9fc3VibmF2LWJ0biBhcmlhLWxhYmVsPVwie3tzdWJuYXZbQ29uc3QuUC5LZXldfCB0cmFuc2xhdGV9fVwiIG5nLWhyZWY9e3tzdWJuYXZbQ29uc3QuUC5VcmxdfX0+PHNwYW4gbmctYmluZD1cInN1Ym5hdltDb25zdC5QLktleV0gfCB0cmFuc2xhdGVcIj48L3NwYW4+PC9tZC1idXR0b24+PC9tZC1tZW51LWl0ZW0+PC9tZC1tZW51LWNvbnRlbnQ+PC9tZC1tZW51PjxpbWcgY2xhc3M9bmF2YmFyX19pbWFnZSBuZy1pZj1cIihjc3MuaXNfaW1hZ2Uob2JqKSA9PT0gdHJ1ZSlcIiBzcmM9XCIvcmVzb3VyY2VzL2ltZy9tb250ZXJleS1zaWducy5wbmdcIj48L2Rpdj48aW1nIGNsYXNzPVwibmF2YmFyX19pbWFnZSBuYXZiYXJfX2ltYWdlLS1tb2JpbGVcIiBzcmM9XCIvcmVzb3VyY2VzL2ltZy9tb250ZXJleS1zaWducy5wbmdcIj48L2Rpdj48L21kLXRvb2xiYXI+JztcbmFuZ3VsYXIubW9kdWxlKCdtb250ZXJleS1zaWducycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7JHRlbXBsYXRlQ2FjaGUucHV0KCdmcm9udGVuZC9zcmMvZGlyZWN0aXZlcy9tb250ZXJleVNpZ25zTmF2YmFyL21vbnRlcmV5U2lnbnNOYXZiYXIuaHRtbCcsIHYxKTt9XSk7XG5tb2R1bGUuZXhwb3J0cz12MSIsImFuZ3VsYXIubW9kdWxlKFwibW9udGVyZXktc2lnbnMuZGlyZWN0aXZlc1wiKVxuICAgICAgICAuZGlyZWN0aXZlKFwibW9udGVyZXlTaWduc05hdmJhclwiLCBbXCJDb25zdFwiLCBcIiR0aW1lb3V0XCIsIFwiJG1kU2lkZW5hdlwiLCBmdW5jdGlvbiAoQ29uc3QsICR0aW1lb3V0LCAkbWRTaWRlbmF2KSB7XG4gICAgICAgICAgICB2YXIgZGlyZWN0aXZlX2RlZiA9IHtcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdmcm9udGVuZC9zcmMvZGlyZWN0aXZlcy9tb250ZXJleVNpZ25zTmF2YmFyL21vbnRlcmV5U2lnbnNOYXZiYXIuaHRtbCcsXG4gICAgICAgICAgICAgICAgbGluazogbGlua0ZuLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmVfZGVmO1xuXG4gICAgICAgICAgICAvLyAtLSBGdW5jdGlvbnMgLS0gLy9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGxpbmtGbihzY29wZSwgZWxlbSwgYXR0cnMpIHtcbiAgICAgICAgICAgICAgICBzY29wZS5zZXR0aW5ncyA9IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd19zZWFyY2hfYmFyOiAoYXR0cnMuc2hvd1NlYXJjaEJhciA9PT0gXCJ0cnVlXCIpLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3N1Ym5hdjogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNjb3BlLmNzcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgaXNfaW1hZ2U6IGlzX2ltYWdlLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3N1Ym5hdjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgc2hvd19tb2JpbGVfbWVudTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzY29wZS5idG4gPSB7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5fc3VibmF2OiBvcGVuX3N1Ym5hdixcbiAgICAgICAgICAgICAgICAgICAgY2xvc2Vfc3VibmF2OiBjbG9zZV9zdWJuYXYsXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZV9tb2JpbGVfbWVudTogdG9nZ2xlX21vYmlsZV9tZW51LFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBzY29wZS5saXN0X25hdiA9IENvbnN0Lk5hdmJhcjtcblxuICAgICAgICAgICAgICAgIC8vIC0tIEhlbHBlcnMgLS0gLy9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpc19pbWFnZShvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9yZXR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKG9iaikgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZXR1cm4gPSAob2JqW0NvbnN0LlAuS2V5XSA9PT0gbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9wZW5fc3VibmF2KCRtZE1lbnUsIGV2LCBvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9jb250aW51ZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgX2NvbnRpbnVlID0gX2NvbnRpbnVlICYmIChvYmpbQ29uc3QuUC5LZXldICE9PSBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgX2NvbnRpbnVlID0gX2NvbnRpbnVlICYmIChvYmpbQ29uc3QuUC5TdWJuYXZdICE9PSBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgX2NvbnRpbnVlID0gX2NvbnRpbnVlICYmIChzY29wZS5zZXR0aW5ncy5jdXJyZW50X3N1Ym5hdiA9PT0gbnVsbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jb250aW51ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJG1kTWVudS5vcGVuKGV2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLnNldHRpbmdzLmN1cnJlbnRfc3VibmF2ID0gJG1kTWVudTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmNzcy5jdXJyZW50X3N1Ym5hdiA9IG9iajtcblxuICAgICAgICAgICAgICAgICAgICAgICAgX2F0dGFjaF9mbl90b19iYWNrZHJvcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNsb3NlX3N1Ym5hdihvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9jb250aW51ZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgX2NvbnRpbnVlID0gX2NvbnRpbnVlICYmIChzY29wZS5zZXR0aW5ncy5jdXJyZW50X3N1Ym5hdiAhPT0gbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIF9jb250aW51ZSA9IF9jb250aW51ZSAmJiAoc2NvcGUuY3NzLmN1cnJlbnRfc3VibmF2ICE9PSBvYmopO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChfY29udGludWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLnNldHRpbmdzLmN1cnJlbnRfc3VibmF2LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5zZXR0aW5ncy5jdXJyZW50X3N1Ym5hdiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5jc3MuY3VycmVudF9zdWJuYXYgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHRvZ2dsZV9tb2JpbGVfbWVudSgpIHtcbiAgICAgICAgICAgICAgICAgICAgJG1kU2lkZW5hdigncmlnaHQnKS50b2dnbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuY3NzLnNob3dfbW9iaWxlX21lbnUgPSAhc2NvcGUuY3NzLnNob3dfbW9iaWxlX21lbnU7XG4gICAgICAgICAgICAgICAgICAgIF9hdHRhY2hfZm5fdG9fbW9iaWxlX2JhY2tkcm9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNsb3NlX21vYmlsZV9tZW51KCkge1xuICAgICAgICAgICAgICAgICAgICAkbWRTaWRlbmF2KCdyaWdodCcpLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmNzcy5zaG93X21vYmlsZV9tZW51ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIF9hdHRhY2hfZm5fdG9fYmFja2Ryb3AoKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiYWNrZHJvcCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5tZC1tZW51LWJhY2tkcm9wLm1kLWNsaWNrLWNhdGNoZXInKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcC5vbignbW91c2VlbnRlcicsIGNsb3NlX3N1Ym5hdik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wLm9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcC5vZmYoJ21vdXNlZW50ZXInLCBjbG9zZV9zdWJuYXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBfYXR0YWNoX2ZuX3RvX21vYmlsZV9iYWNrZHJvcCgpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJhY2tkcm9wID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLm1kLXNpZGVuYXYtYmFja2Ryb3AnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcC5iaW5kKCdjbGljaycsIGNsb3NlX21vYmlsZV9tZW51KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3Aub24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wLnVuYmluZCgnY2xpY2snLCBjbG9zZV9tb2JpbGVfbWVudSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG4iLCJhbmd1bGFyLm1vZHVsZShcIm1vbnRlcmV5LXNpZ25zLmRpcmVjdGl2ZXNcIilcbiAgICAgICAgLmRpcmVjdGl2ZShcInNjcm9sbEFmZml4XCIsIFtcIkNvbnN0XCIsIFwiJGRvY3VtZW50XCIsIFwiJHRpbWVvdXRcIiwgZnVuY3Rpb24gKENvbnN0LCAkZG9jdW1lbnQsICR0aW1lb3V0KSB7XG4gICAgICAgICAgICB2YXIgZGlyZWN0aXZlX2RlZiA9IHtcbiAgICAgICAgICAgICAgICByZXN0cmljdDogXCJBXCIsXG4gICAgICAgICAgICAgICAgbGluazogbGlua0ZuLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmVfZGVmO1xuXG4gICAgICAgICAgICAvLyAtLSBGdW5jdGlvbnMgLS0gLy9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGxpbmtGbihzY29wZSwgZWxlbSwgYXR0cnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2V0dGluZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbF9pZDogYXR0cnMuc2Nyb2xsQWZmaXgsXG4gICAgICAgICAgICAgICAgICAgIGFmZml4X3RvcDogYXR0cnMuYWZmaXhUb3AgfHwgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGFmZml4X2JvdHRvbTogYXR0cnMuYWZmaXhCb3R0b20gfHwgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGFmZml4X3BhcmFsbGF4OiAoYXR0cnMuYWZmaXhQYXJhbGxheEVmZmVjdCAhPT0gdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgICAgZG9fbG9naWM6IChhdHRycy5hZmZpeENvbmRpdGlvbiAhPT0gXCJmYWxzZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyYWxsYXhfY29uc3Q6IDQwLFxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxfaW5mbzogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBfcmFmID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZTtcblxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5kb19sb2dpYyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsX2NvbnRhaW5lciA9IGFuZ3VsYXIuZWxlbWVudCgkZG9jdW1lbnRbMF0uZ2V0RWxlbWVudEJ5SWQoc2V0dGluZ3Muc2Nyb2xsX2lkKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZWxlbS5hZGRDbGFzcyhzZXR0aW5ncy5zY3JvbGxfaWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MuYWZmaXhfdG9wICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsX2NvbnRhaW5lci5vbihcInNjcm9sbFwiLCBfX2hhbmRsZV9jbGFzc25hbWVfYXRfdG9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldF90cmFuc2l0aW9uKFwiMC4xMHNcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLmFmZml4X2JvdHRvbSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbF9jb250YWluZXIub24oXCJzY3JvbGxcIiwgX19oYW5kbGVfY2xhc3NuYW1lX2F0X2JvdHRvbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRfdHJhbnNpdGlvbihcIjAuMTBzXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5hZmZpeF9wYXJhbGxheCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtc2l6ZVwiOiBcImF1dG8gXCIgKyAoMTAwICsgc2V0dGluZ3MucGFyYWxsYXhfY29uc3QpICsgXCIlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbF9jb250YWluZXIub24oXCJzY3JvbGxcIiwgX19oYW5kbGVfcGFyYWxsYXhfZWZmZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yYWYoX19hbmltYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldF90cmFuc2l0aW9uKGF0dHJzLmFmZml4UGFyYWxsYXhFZmZlY3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZWxlbS5vbihcIiRkZXN0cm95XCIsIF9fdGVhcmRvd24pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIC0tIEhlbHBlcnMgLS0gLy9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBfX3RlYXJkb3duKCkge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxfY29udGFpbmVyLm9mZihcInNjcm9sbFwiLCBfX2hhbmRsZV9jbGFzc25hbWVfYXRfdG9wKTtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsX2NvbnRhaW5lci5vZmYoXCJzY3JvbGxcIiwgX19oYW5kbGVfY2xhc3NuYW1lX2F0X2JvdHRvbSk7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbF9jb250YWluZXIub2ZmKFwic2Nyb2xsXCIsIF9faGFuZGxlX3BhcmFsbGF4X2VmZmVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIF9faGFuZGxlX2NsYXNzbmFtZV9hdF90b3AoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhdF90b3Bfb2ZfcGFnZSA9IChzY3JvbGxfY29udGFpbmVyWzBdLnNjcm9sbFRvcCA8PSAwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0X3RvcF9vZl9wYWdlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmFkZENsYXNzKHNldHRpbmdzLmFmZml4X3RvcCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUNsYXNzKHNldHRpbmdzLmFmZml4X3RvcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gX19oYW5kbGVfY2xhc3NuYW1lX2F0X2JvdHRvbSgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbF9ib3QgPSAoc2Nyb2xsX2NvbnRhaW5lclswXS5zY3JvbGxIZWlnaHQgLSBzY3JvbGxfY29udGFpbmVyWzBdLm9mZnNldEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhdF9ib3R0b21fb2ZfcGFnZSA9IChzY3JvbGxfYm90IDw9IHNjcm9sbF9jb250YWluZXJbMF0uc2Nyb2xsVG9wKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0X2JvdHRvbV9vZl9wYWdlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmFkZENsYXNzKHNldHRpbmdzLmFmZml4X2JvdHRvbSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUNsYXNzKHNldHRpbmdzLmFmZml4X2JvdHRvbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gX19oYW5kbGVfcGFyYWxsYXhfZWZmZWN0KCkge1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5zY3JvbGxfaW5mbyA9IHNjcm9sbF9jb250YWluZXJbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIF9fYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3JhZihfX2FuaW1hdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBzY3JvbGxfaW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzY3JvbGxfY29udGFpbmVyWzBdLnNjcm9sbFRvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogKHNjcm9sbF9jb250YWluZXJbMF0uc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsX2NvbnRhaW5lclswXS5vZmZzZXRIZWlnaHQpLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmF0aW8gPSAoc2Nyb2xsX2luZm8ucG9zaXRpb24gLyBzY3JvbGxfaW5mby5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gKHJhdGlvICogc2V0dGluZ3MucGFyYWxsYXhfY29uc3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIGVsZW0uY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1wb3NpdGlvbi15XCI6ICctJyArIHJlc3VsdCArICd2aCcsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXRfdHJhbnNpdGlvbih0aW1lX3ZhbCkge1xuICAgICAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtWzBdLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCBcIiArIHRpbWVfdmFsICsgXCIgZWFzZS1vdXRcIjtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfV0pO1xuIiwidmFyIHYxPSc8ZGl2IGNsYXNzPXNpZ25UeXBlUGFuZWw+PGRpdiBjbGFzcz1zaWduVHlwZVBhbmVsX19pbWFnZT48L2Rpdj48ZGl2IGNsYXNzPVwib3ZlcmxheSBzaWduVHlwZVBhbmVsX19zaGFkZVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJvdmVybGF5IHRleHRcIiBsYXlvdXQ9Y29sdW1uIGxheW91dC1hbGlnbj1cImNlbnRlciBjZW50ZXJcIj48c3BhbiBjbGFzcz10ZXh0X190aXRsZSBuZy1iaW5kPVwic2V0dGluZ3Mua2V5IHwgdHJhbnNsYXRlXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz10ZXh0X19ibHVyYiBuZy1pZj1zZXR0aW5ncy5zaG93X2JsdXJiIHRyYW5zbGF0ZT1ibHVyYl9wbGFjZWhvbGRlciB0cmFuc2xhdGUtdmFsdWVzPVwie3R5cGU6IHNldHRpbmdzLmtleX1cIj48L3NwYW4+PGNhbGwtdG8tYWN0aW9uIGNsYXNzPXRleHRfX2NhbGwtdG8tYWN0aW9uIGRhdGEta2V5PXt7c2V0dGluZ3Mua2V5fX0gZGF0YS1sYWJlbD17e3NldHRpbmdzLmxhYmVsfX0gZGF0YS1zaG93LWJsdXJiPXt7c2V0dGluZ3Muc2hvd19ibHVyYn19IGRhdGEtZ290by11cmw9e3tzZXR0aW5ncy51cmx9fT48L2NhbGwtdG8tYWN0aW9uPjwvZGl2PjwvZGl2Pic7XG5hbmd1bGFyLm1vZHVsZSgnbW9udGVyZXktc2lnbnMnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkgeyR0ZW1wbGF0ZUNhY2hlLnB1dCgnZnJvbnRlbmQvc3JjL2RpcmVjdGl2ZXMvc2lnblR5cGVQYW5lbC9zaWduVHlwZVBhbmVsLmh0bWwnLCB2MSk7fV0pO1xubW9kdWxlLmV4cG9ydHM9djEiLCJhbmd1bGFyLm1vZHVsZShcIm1vbnRlcmV5LXNpZ25zLmRpcmVjdGl2ZXNcIilcbiAgICAgICAgLmRpcmVjdGl2ZShcInNpZ25UeXBlUGFuZWxcIiwgW1wiQ29uc3RcIiwgXCIkdHJhbnNsYXRlXCIsIGZ1bmN0aW9uIChDb25zdCwgJHRyYW5zbGF0ZSkge1xuICAgICAgICAgICAgdmFyIGRpcmVjdGl2ZV9kZWYgPSB7XG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnZnJvbnRlbmQvc3JjL2RpcmVjdGl2ZXMvc2lnblR5cGVQYW5lbC9zaWduVHlwZVBhbmVsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGxpbms6IGxpbmtGbixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlX2RlZjtcblxuICAgICAgICAgICAgLy8gLS0gRnVuY3Rpb25zIC0tIC8vXG4gICAgICAgICAgICBmdW5jdGlvbiBsaW5rRm4oc2NvcGUsIGVsZW0sIGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUuc2V0dGluZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBhdHRycy5pbWFnZVVybCxcbiAgICAgICAgICAgICAgICAgICAga2V5OiBhdHRycy5rZXksXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAkdHJhbnNsYXRlLmluc3RhbnQoJ2J0bl9leHBsb3JlJywge3R5cGU6IGF0dHJzLmtleX0pLFxuICAgICAgICAgICAgICAgICAgICBibHVyYl90ZXh0OiAkdHJhbnNsYXRlLmluc3RhbnQoJ2JsdXJiX3BsYWNlaG9sZGVyJywge3R5cGU6IGF0dHJzLmtleX0pLFxuICAgICAgICAgICAgICAgICAgICBzaG93X2JsdXJiOiAoYXR0cnMuc2hvd0JsdXJiID09PSAndHJ1ZScpLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGF0dHJzLmdvdG9VcmwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBlbGVtLmNoaWxkcmVuKCkuZXEoMCksXG4gICAgICAgICAgICAgICAgICAgIHNoYWRlOiBlbGVtLmNoaWxkcmVuKCkuZXEoMSksXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGVsZW0uY2hpbGRyZW4oKS5lcSgyKSxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgZWxlbS5vbignbW91c2VlbnRlcicsIGFkZF9zaGFkZSk7XG4gICAgICAgICAgICAgICAgZWxlbS5vbignbW91c2VsZWF2ZScsIHJlbW92ZV9zaGFkZSk7XG4gICAgICAgICAgICAgICAgZWxlbS5vbignJGRlc3Ryb3knLCB0ZWFyZG93bik7XG5cbiAgICAgICAgICAgICAgICBlbC5pbWFnZS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZCc6ICd1cmwoJyArIHNjb3BlLnNldHRpbmdzLmltYWdlICsgJyknLFxuICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogJzEyMCUnLFxuICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICc1MCUgMjAlJyxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIC0tIEhlbHBlcnMgLS0gLy9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB0ZWFyZG93bigpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5vZmYoJ21vdXNlZW50ZXInLCBhZGRfc2hhZGUpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLm9mZignbW91c2VsZWF2ZScsIHJlbW92ZV9zaGFkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGFkZF9zaGFkZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuc2hhZGUuYWRkQ2xhc3MoJ3NpZ25UeXBlUGFuZWxfX3NoYWRlLS1kYXJrJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsLnRleHQuYWRkQ2xhc3MoJ3RleHQtLXNob3ctaXQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVtb3ZlX3NoYWRlKCkge1xuICAgICAgICAgICAgICAgICAgICBlbC5zaGFkZS5yZW1vdmVDbGFzcygnc2lnblR5cGVQYW5lbF9fc2hhZGUtLWRhcmsnKTtcbiAgICAgICAgICAgICAgICAgICAgZWwudGV4dC5yZW1vdmVDbGFzcygndGV4dC0tc2hvdy1pdCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuIiwiYW5ndWxhci5tb2R1bGUoXCJtb250ZXJleS1zaWducy5jb250cm9sbGVyc1wiKVxuICAgICAgICAuY29udHJvbGxlcihcIkhvbWVDdHJsXCIsIFtcIkNvbnN0XCIsIFwiTWlkdGllclwiLCBcIiRsb2NhdGlvblwiLCBcIiR0cmFuc2xhdGVcIiwgZnVuY3Rpb24gKENvbnN0LCBNaWR0aWVyLCAkbG9jYXRpb24sICR0cmFuc2xhdGUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIF90aGlzLnRlbXBsYXRlID0ge1xuICAgICAgICAgICAgICAgIGxpc3RfdHlwZTogW10sXG4gICAgICAgICAgICAgICAgaGVybzogbnVsbCxcbiAgICAgICAgICAgICAgICBpbWFnZV9iZWx0OiBudWxsLFxuICAgICAgICAgICAgICAgIG91cl9jbGllbnRzOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF90aGlzLmJ0biA9IHtcbiAgICAgICAgICAgICAgICBnb3RvX3VybDogZ290b191cmwsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBNaWR0aWVyLmhvbWUuY2FsbCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnRlbXBsYXRlLmxpc3RfdHlwZSA9IE1pZHRpZXIuaG9tZS5nZXRfZGF0YShDb25zdC5QLkluZm8pO1xuICAgICAgICAgICAgICAgIF90aGlzLnRlbXBsYXRlLmhlcm8gPSBNaWR0aWVyLmhvbWUuZ2V0X2RhdGEoQ29uc3QuUC5IZXJvKTtcbiAgICAgICAgICAgICAgICBfdGhpcy50ZW1wbGF0ZS5pbWFnZV9iZWx0ID0gTWlkdGllci5ob21lLmdldF9kYXRhKENvbnN0LlAuSW1hZ2VCZWx0KTtcbiAgICAgICAgICAgICAgICBfdGhpcy50ZW1wbGF0ZS5vdXJfY2xpZW50cyA9IE1pZHRpZXIuaG9tZS5nZXRfZGF0YShDb25zdC5QLk91ckNsaWVudHMpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIC0tIEhlbHBlcnMgLS0gLy9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdvdG9fdXJsKHBhdGgpIHtcbiAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aChwYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuIiwidmFyIHYxPSc8ZGl2IGNsYXNzPXBhZ2UtLWhvbWUgbGF5b3V0LWZpbGwgbGF5b3V0PWNvbHVtbiBsYXlvdXQtYWxpZ249XCJzdGFydCBjZW50ZXJcIj48bW9udGVyZXktc2lnbnMtbmF2YmFyIGRhdGEtc2hvdy1zZWFyY2gtYmFyPXRydWU+PC9tb250ZXJleS1zaWducy1uYXZiYXI+PG1kLXNpZGVuYXYgY2xhc3M9bWQtc2lkZW5hdi1yaWdodCBtZC1jb21wb25lbnQtaWQ9cmlnaHQ+PG1kLWxpc3QgZmxleD48bWQtc3ViaGVhZGVyIGNsYXNzPVwibWQtbm8tc3RpY2t5IGl0ZW0gaXRlbS0tdGl0bGVcIiB0cmFuc2xhdGU9XCJNb250ZXJleSBTaWduc1wiPjwvbWQtc3ViaGVhZGVyPjxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0xLWxpbmUgaXRlbSBpdGVtLS1tYWluXCIgYXJpYS1sYWJlbD1cIk1vbnRlcmV5IFNpZ25zXCIgbmctY2xpY2s9cGFnZS5idG4uZ290b191cmwoQ29uc3QuVXJsLlNpdGVkb3duKT48ZGl2IGNsYXNzPW1kLWxpc3QtaXRlbS10ZXh0IGxheW91dD1jb2x1bW4+PGgzIHRyYW5zbGF0ZT1jaG9vc2Vfc2lnbj48L2gzPjwvZGl2PjwvbWQtbGlzdC1pdGVtPjxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj48bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMS1saW5lIGl0ZW0gaXRlbS0tc3ViXCIgYXJpYS1sYWJlbD1jb21tZXJjaWFsIG5nLWNsaWNrPXBhZ2UuYnRuLmdvdG9fdXJsKENvbnN0LlVybC5TaXRlZG93bik+PGRpdiBjbGFzcz1tZC1saXN0LWl0ZW0tdGV4dCBsYXlvdXQ9Y29sdW1uPjxoNCB0cmFuc2xhdGU9Y29tbWVyY2lhbD48L2g0PjwvZGl2PjwvbWQtbGlzdC1pdGVtPjxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0xLWxpbmUgaXRlbSBpdGVtLS1zdWJcIiBhcmlhLWxhYmVsPWVsZWN0cmljYWwgbmctY2xpY2s9cGFnZS5idG4uZ290b191cmwoQ29uc3QuVXJsLlNpdGVkb3duKT48ZGl2IGNsYXNzPW1kLWxpc3QtaXRlbS10ZXh0IGxheW91dD1jb2x1bW4+PGg0IHRyYW5zbGF0ZT1lbGVjdHJpY2FsPjwvaDQ+PC9kaXY+PC9tZC1saXN0LWl0ZW0+PG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLTEtbGluZSBpdGVtIGl0ZW0tLXN1YlwiIGFyaWEtbGFiZWw9cHJpbnQgbmctY2xpY2s9cGFnZS5idG4uZ290b191cmwoQ29uc3QuVXJsLlNpdGVkb3duKT48ZGl2IGNsYXNzPW1kLWxpc3QtaXRlbS10ZXh0IGxheW91dD1jb2x1bW4+PGg0IHRyYW5zbGF0ZT1wcmludD48L2g0PjwvZGl2PjwvbWQtbGlzdC1pdGVtPjxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0xLWxpbmUgaXRlbSBpdGVtLS1zdWJcIiBhcmlhLWxhYmVsPXNlcnZpY2VzIG5nLWNsaWNrPXBhZ2UuYnRuLmdvdG9fdXJsKENvbnN0LlVybC5TaXRlZG93bik+PGRpdiBjbGFzcz1tZC1saXN0LWl0ZW0tdGV4dCBsYXlvdXQ9Y29sdW1uPjxoNCB0cmFuc2xhdGU9c2VydmljZXM+PC9oND48L2Rpdj48L21kLWxpc3QtaXRlbT48bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+PG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLTEtbGluZSBpdGVtIGl0ZW0tLW1haW5cIiBhcmlhLWxhYmVsPW91cl93b3JrIG5nLWNsaWNrPXBhZ2UuYnRuLmdvdG9fdXJsKENvbnN0LlVybC5TaXRlZG93bik+PGRpdiBjbGFzcz1tZC1saXN0LWl0ZW0tdGV4dCBsYXlvdXQ9Y29sdW1uPjxoMyB0cmFuc2xhdGU9b3VyX3dvcms+PC9oMz48L2Rpdj48L21kLWxpc3QtaXRlbT48bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMS1saW5lIGl0ZW0gaXRlbS0tbWFpblwiIGFyaWEtbGFiZWw9c2lnbl9zdG9yaWVzIG5nLWNsaWNrPXBhZ2UuYnRuLmdvdG9fdXJsKENvbnN0LlVybC5TaXRlZG93bik+PGRpdiBjbGFzcz1tZC1saXN0LWl0ZW0tdGV4dCBsYXlvdXQ9Y29sdW1uPjxoMyB0cmFuc2xhdGU9c2lnbl9zdG9yaWVzPjwvaDM+PC9kaXY+PC9tZC1saXN0LWl0ZW0+PG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLTEtbGluZSBpdGVtIGl0ZW0tLW1haW5cIiBhcmlhLWxhYmVsPWFib3V0X3VzIG5nLWNsaWNrPXBhZ2UuYnRuLmdvdG9fdXJsKENvbnN0LlVybC5TaXRlZG93bik+PGRpdiBjbGFzcz1tZC1saXN0LWl0ZW0tdGV4dCBsYXlvdXQ9Y29sdW1uPjxoMyB0cmFuc2xhdGU9YWJvdXRfdXM+PC9oMz48L2Rpdj48L21kLWxpc3QtaXRlbT48bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMS1saW5lIGl0ZW0gaXRlbS0tbWFpblwiIGFyaWEtbGFiZWw9bnV0c19ib2x0cyBuZy1jbGljaz1wYWdlLmJ0bi5nb3RvX3VybChDb25zdC5VcmwuU2l0ZWRvd24pPjxkaXYgY2xhc3M9bWQtbGlzdC1pdGVtLXRleHQgbGF5b3V0PWNvbHVtbj48aDMgdHJhbnNsYXRlPW51dHNfYm9sdHM+PC9oMz48L2Rpdj48L21kLWxpc3QtaXRlbT48bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+PGRpdiBjbGFzcz1cImNhbGxUb0FjdGlvbiBidXR0b24tLWJyb3duXCIgbGF5b3V0PXJvdyBsYXlvdXQ9XCJjZW50ZXIgY2VudGVyXCI+PG1kLWJ1dHRvbiBjbGFzcz1jYWxsVG9BY3Rpb25fX2J0biBhcmlhLWxhYmVsPVwie3tcXCdidG5fZ2V0X3F1b3RlXFwnfCB0cmFuc2xhdGV9fVwiIG5nLWNsaWNrPXBhZ2UuYnRuLmdvdG9fdXJsKENvbnN0LlVybC5TaXRlZG93bikgbmctYmluZD1cIlxcJ2J0bl9nZXRfcXVvdGVcXCcgfCB0cmFuc2xhdGVcIj48L21kLWJ1dHRvbj48L2Rpdj48L21kLWxpc3Q+PC9tZC1zaWRlbmF2PjxtZC1jb250ZW50IGNsYXNzPXBhZ2VfX2NvbnRlbnQgZmxleCBsYXlvdXQ9Y29sdW1uIGxheW91dC1hbGlnbj1cInN0YXJ0IHNwYWNlLWFyb3VuZFwiPjxjYXJvdXNlbCBjbGFzcz1oZXJvIGZsZXggZGF0YS1oZXJvPXBhZ2UudGVtcGxhdGUuaGVybz48L2Nhcm91c2VsPjxkaXYgY2xhc3M9Z3JpZC1saXN0LWNvbnRhaW5lcj48ZGl2IGNsYXNzPWdyaWQtbGlzdCBsYXlvdXQtd3JhcCBsYXlvdXQ9cm93IGxheW91dC1hbGlnbj1cInNwYWNlLWFyb3VuZCBzcGFjZS1hcm91bmRcIj48ZGl2IGNsYXNzPWdyaWQtbGlzdF9faXRlbSBuZy1jbGFzcz1cIntcXCdncmlkLWxpc3RfX2l0ZW0tLWxlZnRcXCc6ICgkZXZlbiA9PT0gdHJ1ZSksXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcJ2dyaWQtbGlzdF9faXRlbS0tcmlnaHRcXCc6ICgkZXZlbiA9PT0gZmFsc2UpfVwiIG5nLXJlcGVhdD1cIm9iaiBpbiBwYWdlLnRlbXBsYXRlLmxpc3RfdHlwZVwiIGZsZXg9MTAwIGZsZXgtZ3Qtc209NTA+PHNpZ24tdHlwZS1wYW5lbCBmbGV4IGRhdGEtZ290by11cmw9e3tvYmpbQ29uc3QuUC5VcmxdfX0gZGF0YS1rZXk9e3tvYmpbQ29uc3QuUC5LZXldfX0gZGF0YS1zaG93LWJsdXJiPXRydWUgZGF0YS1pbWFnZS11cmw9e3tvYmpbQ29uc3QuUC5JbWFnZV19fT48L3NpZ24tdHlwZS1wYW5lbD48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPWJvdHRvbS1jb250YWluZXI+PGRpdiBjbGFzcz1nZXQtYS1xdW90ZSBsYXlvdXQ9Y29sdW1uIGxheW91dC1hbGlnbj1cImNlbnRlciBjZW50ZXJcIj48ZGl2IGNsYXNzPWNhbGxUb0FjdGlvbj48bWQtYnV0dG9uIGNsYXNzPWNhbGxUb0FjdGlvbl9fYnRuIGFyaWEtbGFiZWw9XCJ7e1xcJ2J0bl9nZXRfcXVvdGVcXCd8IHRyYW5zbGF0ZX19XCIgbmctY2xpY2s9cGFnZS5idG4uZ290b191cmwoQ29uc3QuVXJsLlNpdGVkb3duKSBuZy1iaW5kPVwiXFwnYnRuX2dldF9xdW90ZVxcJyB8IHRyYW5zbGF0ZVwiPjwvbWQtYnV0dG9uPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9c3BsaXQtY29udGFpbmVyIGxheW91dD1jb2x1bW4gbGF5b3V0LWFsaWduPVwic3RhcnQgY2VudGVyXCIgbGF5b3V0LWd0LXNtPXJvdyBsYXlvdXQtYWxpZ24tZ3Qtc209XCJzdGFydCBjZW50ZXJcIj48ZGl2IGNsYXNzPVwic3BsaXQtY29udGFpbmVyX19pdGVtIG91ci1jbGllbnRzXCIgbGF5b3V0PWNvbHVtbiBsYXlvdXQtYWxpZ249XCJzdGFydCBjZW50ZXJcIiBmbGV4PTUwPjxzcGFuIGNsYXNzPWl0ZW1fX3RpdGxlIHRyYW5zbGF0ZT1vdXJfY2xpZW50cz48L3NwYW4+PGRpdiBjbGFzcz1jbGllbnQtZ3JpZCBsYXlvdXQtd3JhcCBsYXlvdXQ9cm93IGxheW91dC1hbGlnbj1cInN0YXJ0IHN0YXJ0XCI+PGltZyBmbGV4PTUwIGZsZXgtZ3QteHM9MzMgY2xhc3M9Y2xpZW50LWdyaWRfX2l0ZW0gbmctcmVwZWF0PVwiaW1hZ2UgaW4gcGFnZS50ZW1wbGF0ZS5vdXJfY2xpZW50c1wiIG5nLXNyYz1cInt7aW1hZ2V9fVwiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJzcGxpdC1jb250YWluZXJfX2l0ZW0gaGF2ZS1xdWVzdGlvbnNcIiBsYXlvdXQ9Y29sdW1uIGxheW91dC1hbGlnbj1cInN0YXJ0IGNlbnRlclwiIGZsZXg9NTA+PHNwYW4gY2xhc3M9aXRlbV9fdGl0bGUgdHJhbnNsYXRlPXF1ZXN0aW9ucz48L3NwYW4+IDxzcGFuIGNsYXNzPWl0ZW1fX2Rlc2NyaXB0aW9uIHRyYW5zbGF0ZT1tb3JlX2luZm9fMmE+PC9zcGFuPiA8c3BhbiBjbGFzcz1pdGVtX19kZXNjcmlwdGlvbiB0cmFuc2xhdGU9bW9yZV9pbmZvXzJiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9aXRlbV9fZGVzY3JpcHRpb24gdHJhbnNsYXRlPW1vcmVfaW5mb18yYz48L3NwYW4+PGRpdiBjbGFzcz1cImNhbGxUb0FjdGlvbiBidXR0b24tLWxpZ2h0LWJyb3duXCI+PG1kLWJ1dHRvbiBjbGFzcz1jYWxsVG9BY3Rpb25fX2J0biBhcmlhLWxhYmVsPVwie3tcXCdjb250YWN0X3VzXFwnfCB0cmFuc2xhdGV9fVwiIG5nLWNsaWNrPXBhZ2UuYnRuLmdvdG9fdXJsKENvbnN0LlVybC5TaXRlZG93bikgbmctYmluZD1cIlxcJ2NvbnRhY3RfdXNcXCcgfCB0cmFuc2xhdGVcIj48L21kLWJ1dHRvbj48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPXNvY2lhbC1tZWRpYSBsYXlvdXQ9Y29sdW1uIGxheW91dC1hbGlnbj1cImNlbnRlciBjZW50ZXJcIj48c3BhbiBjbGFzcz1zb2NpYWwtbWVkaWFfX2hhbmRsZSB0cmFuc2xhdGU9dHdpdHRlcl9oYW5kbGU+PC9zcGFuPiA8c3BhbiBjbGFzcz1zb2NpYWwtbWVkaWFfX2ZvbGxvdy11cy10aXRsZSB0cmFuc2xhdGU9aW5zdGFncmFtPjwvc3Bhbj48ZGl2IGNsYXNzPVwiY2FsbFRvQWN0aW9uIGJ1dHRvbi0tYnJvd25cIj48bWQtYnV0dG9uIGNsYXNzPWNhbGxUb0FjdGlvbl9fYnRuIGFyaWEtbGFiZWw9XCJ7e1xcJ2J0bl9mb2xsb3dcXCd8IHRyYW5zbGF0ZX19XCIgbmctY2xpY2s9cGFnZS5idG4uZ290b191cmwoQ29uc3QuVXJsLlNpdGVkb3duKSBuZy1iaW5kPVwiXFwnYnRuX2ZvbGxvd1xcJyB8IHRyYW5zbGF0ZVwiPjwvbWQtYnV0dG9uPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9aW1hZ2UtYmVsdCBsYXlvdXQ9cm93IGxheW91dC1hbGlnbj1cInN0YXJ0IHN0YXJ0XCI+PGRpdiBmbGV4PTIwIGNsYXNzPWltYWdlLWJlbHRfX2l0ZW0gbmctY2xhc3M9XCJ7XFwnZmlyc3RcXCc6ICgkZmlyc3QgPT09IHRydWUpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFwnbGFzdFxcJzogKCRsYXN0ID09PSB0cnVlKX1cIiBuZy1yZXBlYXQ9XCJpbWFnZSBpbiBwYWdlLnRlbXBsYXRlLmltYWdlX2JlbHRcIiBzdHlsZT1iYWNrZ3JvdW5kOnVybCh7e2ltYWdlfX0pPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9Zm9vdGVyIGxheW91dD1jb2x1bW4gbGF5b3V0LWFsaWduPVwic3RhcnQgY2VudGVyXCIgbGF5b3V0LWd0LXhzPXJvdyBsYXlvdXQtYWxpZ24tZ3QteHM9XCJzdGFydCBzcGFjZS1iZXR3ZWVuXCI+PGRpdiBjbGFzcz1cImZvb3Rlcl9fc2VjdGlvbiBzaXRlbWFwXCIgZmxleD0zMyBsYXlvdXQ9Y29sdW1uIGxheW91dC1hbGlnbj1cInN0YXJ0IGNlbnRlclwiIGxheW91dC1ndC1zbT1jb2x1bW4gbGF5b3V0LWFsaWduLWd0LXNtPVwic3RhcnQgc3RhcnRcIj48c3BhbiBjbGFzcz1mb290ZXJfX3RpdGxlIHRyYW5zbGF0ZT1jaG9vc2Vfc2lnbiBuZy1jbGljaz1wYWdlLmJ0bi5nb3RvX3VybChDb25zdC5VcmwuU2l0ZWRvd24pPjwvc3Bhbj48ZGl2IGNsYXNzPXNwYWNlciBsYXlvdXQ9Y29sdW1uIGxheW91dC1hbGlnbj1cInN0YXJ0IHN0YXJ0XCI+PHNwYW4gY2xhc3M9Zm9vdGVyX19kZXNjcmlwdGlvbiBuZy1jbGljaz1wYWdlLmJ0bi5nb3RvX3VybChDb25zdC5VcmwuU2l0ZWRvd24pIHRyYW5zbGF0ZT1jb21tZXJjaWFsPjwvc3Bhbj4gPHNwYW4gY2xhc3M9Zm9vdGVyX19kZXNjcmlwdGlvbiBuZy1jbGljaz1wYWdlLmJ0bi5nb3RvX3VybChDb25zdC5VcmwuU2l0ZWRvd24pIHRyYW5zbGF0ZT1lbGVjdHJpY2FsPjwvc3Bhbj4gPHNwYW4gY2xhc3M9Zm9vdGVyX19kZXNjcmlwdGlvbiBuZy1jbGljaz1wYWdlLmJ0bi5nb3RvX3VybChDb25zdC5VcmwuU2l0ZWRvd24pIHRyYW5zbGF0ZT1wcmludD48L3NwYW4+IDxzcGFuIGNsYXNzPWZvb3Rlcl9fZGVzY3JpcHRpb24gbmctY2xpY2s9cGFnZS5idG4uZ290b191cmwoQ29uc3QuVXJsLlNpdGVkb3duKSB0cmFuc2xhdGU9c2VydmljZXM+PC9zcGFuPjwvZGl2PjxzcGFuIGNsYXNzPVwiZm9vdGVyX190aXRsZSBjb21wYWN0XCIgbmctY2xpY2s9cGFnZS5idG4uZ290b191cmwoQ29uc3QuVXJsLlNpdGVkb3duKSB0cmFuc2xhdGU9b3VyX3dvcms+PC9zcGFuPiA8c3BhbiBjbGFzcz1cImZvb3Rlcl9fdGl0bGUgY29tcGFjdFwiIG5nLWNsaWNrPXBhZ2UuYnRuLmdvdG9fdXJsKENvbnN0LlVybC5TaXRlZG93bikgdHJhbnNsYXRlPXNpZ25fc3Rvcmllcz48L3NwYW4+IDxzcGFuIGNsYXNzPVwiZm9vdGVyX190aXRsZSBjb21wYWN0XCIgbmctY2xpY2s9cGFnZS5idG4uZ290b191cmwoQ29uc3QuVXJsLlNpdGVkb3duKSB0cmFuc2xhdGU9YWJvdXRfdXM+PC9zcGFuPiA8c3BhbiBjbGFzcz1cImZvb3Rlcl9fdGl0bGUgY29tcGFjdFwiIG5nLWNsaWNrPXBhZ2UuYnRuLmdvdG9fdXJsKENvbnN0LlVybC5TaXRlZG93bikgdHJhbnNsYXRlPW51dHNfYm9sdHM+PC9zcGFuPjwvZGl2PjxkaXYgY2xhc3M9XCJmb290ZXJfX3NlY3Rpb24gZ2V0LXN0YXJ0ZWRcIiBmbGV4PTMzIGxheW91dD1jb2x1bW4gbGF5b3V0LWFsaWduPVwic3RhcnQgY2VudGVyXCI+PHNwYW4gY2xhc3M9Zm9vdGVyX190aXRsZSB0cmFuc2xhdGU9Z2V0X3N0YXJ0ZWQ+PC9zcGFuPiA8c3BhbiBjbGFzcz1mb290ZXJfX2Rlc2NyaXB0aW9uIHRyYW5zbGF0ZT1nZXRfc3RhcnRlZF9pbmZvPjwvc3Bhbj48ZGl2IGNsYXNzPWNhbGxUb0FjdGlvbj48bWQtYnV0dG9uIGNsYXNzPWNhbGxUb0FjdGlvbl9fYnRuIGFyaWEtbGFiZWw9XCJ7e1xcJ2J0bl9nZXRfcXVvdGVcXCd8IHRyYW5zbGF0ZX19XCIgbmctY2xpY2s9cGFnZS5idG4uZ290b191cmwoQ29uc3QuVXJsLlNpdGVkb3duKSBuZy1iaW5kPVwiXFwnYnRuX2dldF9xdW90ZVxcJyB8IHRyYW5zbGF0ZVwiPjwvbWQtYnV0dG9uPjwvZGl2PjxkaXYgY2xhc3M9c29jaWFsLW1lZGlhLWJhciBsYXlvdXQ9cm93IGxheW91dC1hbGlnbj1cImNlbnRlciBjZW50ZXJcIj48bWQtaWNvbiBtZC1zdmctaWNvbj1zb2NpYWw6ZmFjZWJvb2sgYXJpYS1sYWJlbD1mYWNlYm9vaz48L21kLWljb24+PG1kLWljb24gbWQtc3ZnLWljb249c29jaWFsOmluc3RhZ3JhbSBhcmlhLWxhYmVsPWluc3RhZ3JhbT48L21kLWljb24+PG1kLWljb24gbWQtc3ZnLWljb249c29jaWFsOnllbHAgYXJpYS1sYWJlbD15ZWxwPjwvbWQtaWNvbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiZm9vdGVyX19zZWN0aW9uIGNvbnRhY3QtdXNcIiBmbGV4PTMzIGxheW91dD1jb2x1bW4gbGF5b3V0LWFsaWduPVwic3RhcnQgY2VudGVyXCIgbGF5b3V0LWd0LXNtPWNvbHVtbiBsYXlvdXQtYWxpZ24tZ3Qtc209XCJzdGFydCBlbmRcIj48ZGl2IGxheW91dD1jb2x1bW4gbGF5b3V0LWFsaWduPVwic3RhcnQgc3RhcnRcIj48c3BhbiBjbGFzcz1mb290ZXJfX3RpdGxlIHRyYW5zbGF0ZT1jb250YWN0X3VzPjwvc3Bhbj4gPHNwYW4gY2xhc3M9Zm9vdGVyX19kZXNjcmlwdGlvbiB0cmFuc2xhdGU9ZW50aXR5X25hbWU+PC9zcGFuPiA8c3BhbiBjbGFzcz1mb290ZXJfX2Rlc2NyaXB0aW9uIHRyYW5zbGF0ZT1hZGRyZXNzMT48L3NwYW4+IDxzcGFuIGNsYXNzPWZvb3Rlcl9fZGVzY3JpcHRpb24gdHJhbnNsYXRlPWFkZHJlc3MyPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJmb290ZXJfX2Rlc2NyaXB0aW9uIHNwYWNlclwiIHRyYW5zbGF0ZT1waG9uZT48L3NwYW4+IDxzcGFuIGNsYXNzPWZvb3Rlcl9fZGVzY3JpcHRpb24gdHJhbnNsYXRlPWVtYWlsPjwvc3Bhbj48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPWNvcHlyaWdodCBsYXlvdXQ9Y29sdW1uIGxheW91dC1hbGlnbj1cImNlbnRlciBjZW50ZXJcIiBsYXlvdXQtZ3Qtc209cm93IGxheW91dC1hbGlnbi1ndC1zbT1cImNlbnRlciBjZW50ZXJcIj48c3BhbiB0cmFuc2xhdGU9Y29weXJpZ2h0MSB0cmFuc2xhdGUtdmFsdWVzPVwie3llYXI6IENvbnN0LkRlZmF1bHQuWWVhcn1cIj48L3NwYW4+IDxzcGFuIGNsYXNzPWNvcHlyaWdodF9fZGl2aWRlcj4mbmJzcDt8Jm5ic3A7PC9zcGFuPiA8c3BhbiB0cmFuc2xhdGU9Y29weXJpZ2h0MiB0cmFuc2xhdGUtdmFsdWVzPVwie3llYXI6IENvbnN0LkRlZmF1bHQuWWVhcn1cIj48L3NwYW4+PC9kaXY+PC9kaXY+PC9tZC1jb250ZW50PjwvZGl2Pic7XG5hbmd1bGFyLm1vZHVsZSgnbW9udGVyZXktc2lnbnMnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkgeyR0ZW1wbGF0ZUNhY2hlLnB1dCgnZnJvbnRlbmQvc3JjL3BhZ2VzL2hvbWUvaG9tZS5odG1sJywgdjEpO31dKTtcbm1vZHVsZS5leHBvcnRzPXYxIiwiYW5ndWxhci5tb2R1bGUoXCJtb250ZXJleS1zaWducy5jb250cm9sbGVyc1wiKVxuICAgICAgICAuY29udHJvbGxlcihcIlNpdGVEb3duQ3RybFwiLCBbXCJDb25zdFwiLCBcIk1pZHRpZXJcIiwgZnVuY3Rpb24gKENvbnN0LCBNaWR0aWVyKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB9XSk7XG4iLCJ2YXIgdjE9JzxkaXYgY2xhc3M9cGFnZS0tc2l0ZWRvd24gbGF5b3V0PXJvdyBsYXlvdXQtYWxpZ249XCJjZW50ZXIgc3RhcnRcIj48bWQtY29udGVudCBjbGFzcz1wYWdlX19jb250ZW50IGxheW91dC1maWxsIGxheW91dD1yb3cgbGF5b3V0LWFsaWduPVwiY2VudGVyIHN0YXJ0XCI+PGRpdiBjbGFzcz1cIm1lc3NhZ2UgbWQtd2hpdGVmcmFtZS02ZHBcIiBsYXlvdXQ9Y29sdW1uIGxheW91dC1hbGlnbj1cInN0YXJ0IGNlbnRlclwiPjxkaXYgY2xhc3M9bWVzc2FnZV9fdGV4dCB0cmFuc2xhdGU9c2l0ZWRvd25fNDA0PjwvZGl2PjxpbWcgY2xhc3M9bWVzc2FnZV9faW1nIHNyYz1cIi9yZXNvdXJjZXMvaW1nL21vbnRlcmV5LXNpZ25zLnBuZ1wiPjxkaXYgY2xhc3M9YnV0dG9uLWNvbnRhaW5lcj48bWQtYnV0dG9uIGNsYXNzPWJ1dHRvbiBhcmlhLWxhYmVsPVwie3tidG5fYmFja19ob21lfCB0cmFuc2xhdGV9fVwiIG5nLWhyZWY9e3tDb25zdC5VcmwuSG9tZX19IHRyYW5zbGF0ZT1idG5fYmFja19ob21lPjwvbWQtYnV0dG9uPjwvZGl2PjwvZGl2PjwvbWQtY29udGVudD48L2Rpdj4nO1xuYW5ndWxhci5tb2R1bGUoJ21vbnRlcmV5LXNpZ25zJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHskdGVtcGxhdGVDYWNoZS5wdXQoJ2Zyb250ZW5kL3NyYy9wYWdlcy9zaXRlZG93bi9zaXRlZG93bi5odG1sJywgdjEpO31dKTtcbm1vZHVsZS5leHBvcnRzPXYxIiwiYW5ndWxhci5tb2R1bGUoXCJtb250ZXJleS1zaWducy5yb3V0aW5nXCIpXG4gICAgICAgIC5jb25maWcoW1wiJHJvdXRlUHJvdmlkZXJcIiwgXCIkbG9jYXRpb25Qcm92aWRlclwiLCBmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XG4gICAgICAgICAgICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG4gICAgXG4gICAgICAgICAgICAkcm91dGVQcm92aWRlci53aGVuKCcvc2l0ZWRvd24nLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdmcm9udGVuZC9zcmMvcGFnZXMvc2l0ZWRvd24vc2l0ZWRvd24uaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1NpdGVEb3duQ3RybCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAncGFnZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy8nLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdmcm9udGVuZC9zcmMvcGFnZXMvaG9tZS9ob21lLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIb21lQ3RybCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAncGFnZScsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJHJvdXRlUHJvdmlkZXIub3RoZXJ3aXNlKHtyZWRpcmVjdFRvOiAnLyd9KTtcbiAgICAgICAgfV0pOyIsImFuZ3VsYXIubW9kdWxlKFwibW9udGVyZXktc2lnbnMuc2VydmljZXNcIilcbiAgICAgICAgLnNlcnZpY2UoXCJNaWR0aWVyXCIsIFtcIkNvbnN0XCIsIFwiJGh0dHBcIiwgXCJSZXF1ZXN0XCIsIGZ1bmN0aW9uIChDb25zdCwgJGh0dHAsIFJlcXVlc3QpIHtcbiAgICAgICAgICAgIHZhciBzZWxmOyAvLyBcIkFzIG11Y2ggb24gdGhlIG1pZHRpZXIgYXMgcG9zc2libGVcIlxuXG4gICAgICAgICAgICAvLyAtLSBTZXJ2aWNlIC0tIC8vXG4gICAgICAgICAgICByZXR1cm4gKHNlbGYgPSB7XG4gICAgICAgICAgICAgICAgaG9tZTogbmV3IFJlcXVlc3QuY2FjaGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdldCA9IHt9LCBwb3N0ID0ge307XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2xhbmRpbmcvaG9tZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IGdldCxcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAoY29uZmlnKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKFwibW9udGVyZXktc2lnbnMuc2VydmljZXNcIilcbiAgICAgICAgLnNlcnZpY2UoXCJCcm93c2VyXCIsIFtcIkNvbnN0XCIsIGZ1bmN0aW9uIChDb25zdCkge1xuICAgICAgICAgICAgdmFyIHNlbGY7XG5cbiAgICAgICAgICAgIC8vIC0tIFNlcnZpY2UgLS0gLy9cbiAgICAgICAgICAgIHJldHVybiAoc2VsZiA9IHtcbiAgICAgICAgICAgICAgICBpc19jaHJvbWU6IGlzX2Nocm9tZSxcbiAgICAgICAgICAgICAgICBpc19maXJlZm94OiBpc19maXJlZm94LFxuICAgICAgICAgICAgICAgIGlzX3NhZmFyaTogaXNfc2FmYXJpLFxuICAgICAgICAgICAgICAgIGlzX2lPUzogaXNfaU9TLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIC0tIEZ1bmN0aW9ucyAtLSAvL1xuICAgICAgICAgICAgLyogXG4gICAgICAgICAgICAgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvOTg1MTc2OSBcbiAgICAgICAgICAgICAqIFxuICAgICAgICAgICAgICogQW5hbHlzaXMgb2YgcmVsaWFiaWxpdHlcbiAgICAgICAgICAgICAqIFxuICAgICAgICAgICAgICogQ2hyb21lOiBUaGUgZ2xvYmFsIGNocm9tZSBvYmplY3QsIGNvbnRhaW5pbmcgc2V2ZXJhbCBwcm9wZXJ0aWVzIGluY2x1ZGluZyBhIGRvY3VtZW50ZWQgY2hyb21lLndlYnN0b3JlIG9iamVjdC5cbiAgICAgICAgICAgICAqIEZpcmVmb3g6IEZpcmVmb3gncyBBUEkgdG8gaW5zdGFsbCBhZGQtb25zOiBJbnN0YWxsVHJpZ2dlclxuICAgICAgICAgICAgICogU2FmYXJpOiBDaGVjayBhZ2FpbnN0IFNhZmFyaVJlbW90ZU5vdGlmaWNhdGlvbiwgd2hpY2ggd2FzIGludHJvZHVjZWQgYWZ0ZXIgdmVyc2lvbiA3LjEsIHRvIGNvdmVyIGFsbCBTYWZhcmlzIGZyb20gMy4wIGFuZCB1cHdhcmRzLlxuICAgICAgICAgICAgICogaU9TOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvOTAzOTg4NSBjaGVja3MgdmlhIG5hdmlnYXRvci5wbGF0Zm9ybVxuICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgKiAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gaXNfY2hyb21lKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoISF3aW5kb3cuY2hyb21lICYmICEhd2luZG93LmNocm9tZS53ZWJzdG9yZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpc19maXJlZm94KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAodHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpc19zYWZhcmkoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgvY29uc3RydWN0b3IvaS50ZXN0KHdpbmRvdy5IVE1MRWxlbWVudCkgfHwgKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwLnRvU3RyaW5nKCkgPT09IFwiW29iamVjdCBTYWZhcmlSZW1vdGVOb3RpZmljYXRpb25dXCI7XG4gICAgICAgICAgICAgICAgfSkoIXdpbmRvd1snc2FmYXJpJ10gfHwgKHR5cGVvZiBzYWZhcmkgIT09ICd1bmRlZmluZWQnICYmIHNhZmFyaS5wdXNoTm90aWZpY2F0aW9uKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNfaU9TKCkge1xuICAgICAgICAgICAgICAgIHZhciBpRGV2aWNlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ2lQYWQgU2ltdWxhdG9yJyxcbiAgICAgICAgICAgICAgICAgICAgJ2lQaG9uZSBTaW11bGF0b3InLFxuICAgICAgICAgICAgICAgICAgICAnaVBvZCBTaW11bGF0b3InLFxuICAgICAgICAgICAgICAgICAgICAnaVBhZCcsXG4gICAgICAgICAgICAgICAgICAgICdpUGhvbmUnLFxuICAgICAgICAgICAgICAgICAgICAnaVBvZCdcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIHZhciBfcmV0dXJuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKCEhbmF2aWdhdG9yLnBsYXRmb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpRGV2aWNlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IucGxhdGZvcm0gPT09IGlEZXZpY2VzLnBvcCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JldHVybiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfV0pO1xuIiwiYW5ndWxhci5tb2R1bGUoXCJtb250ZXJleS1zaWducy5zZXJ2aWNlc1wiKVxuICAgICAgICAuc2VydmljZShcIkRhdGVUaW1lXCIsIFtcIkNvbnN0XCIsIGZ1bmN0aW9uIChDb25zdCkge1xuICAgICAgICAgICAgdmFyIHNlbGY7XG5cbiAgICAgICAgICAgIC8vIC0tIFNlcnZpY2UgLS0gLy9cbiAgICAgICAgICAgIHJldHVybiAoc2VsZiA9IHtcbiAgICAgICAgICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvZGF5OiBkYXRlX3RvZGF5LCAvLyBsb2NhbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGltZToge1xuICAgICAgICAgICAgICAgICAgICB0b2RheTogdGltZV90b2RheSwgLy8gbG9jYWxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGN1cnJlbnRfeWVhcjogY3VycmVudF95ZWFyKCksXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gLS0gRnVuY3Rpb25zIC0tIC8vXG4gICAgICAgICAgICBmdW5jdGlvbiBkYXRlX3RvZGF5KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b19pc29fZGF0ZShuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gdGltZV90b2RheSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9faXNvX2RhdGV0aW1lKG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY3VycmVudF95ZWFyKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHRvX2lzb19kYXRlKGRhdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgeWVhciwgbW9udGgsIGRheTtcbiAgICAgICAgICAgICAgICAvLyBZLW0tZFxuICAgICAgICAgICAgICAgIHllYXIgPSBfX2xlZnRwYWQoZGF0ZS5nZXRGdWxsWWVhcigpLCAnMDAwMCcpO1xuICAgICAgICAgICAgICAgIG1vbnRoID0gX19sZWZ0cGFkKGRhdGUuZ2V0TW9udGgoKSArIDEsICcwMCcpO1xuICAgICAgICAgICAgICAgIGRheSA9IF9fbGVmdHBhZChkYXRlLmdldERhdGUoKSwgJzAwJyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKHllYXIgKyAnLScgKyBtb250aCArICctJyArIGRheSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHRvX2lzb19kYXRldGltZShkYXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzb2RhdGUsIGhvdXIsIG1pbiwgc2VjO1xuICAgICAgICAgICAgICAgIC8vIFktbS1kIEg6aTpzXG4gICAgICAgICAgICAgICAgaG91ciA9IF9fbGVmdHBhZChkYXRlLmdldEhvdXJzKCksICcwMCcpO1xuICAgICAgICAgICAgICAgIG1pbiA9IF9fbGVmdHBhZChkYXRlLmdldE1pbnV0ZXMoKSwgJzAwJyk7XG4gICAgICAgICAgICAgICAgc2VjID0gX19sZWZ0cGFkKGRhdGUuZ2V0U2Vjb25kcygpLCAnMDAnKTtcblxuICAgICAgICAgICAgICAgIGlzb2RhdGUgPSB0b19pc29fZGF0ZShkYXRlKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoaXNvZGF0ZSArICcgJyArIGhvdXIgKyAnOicgKyBtaW4gKyAnOicgKyBzZWMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBfX2xlZnRwYWQodmFsLCBwYWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3JldHVybiA9IChwYWQgKyB2YWwpO1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmV0dXJuLnN1YnN0cmluZyhfcmV0dXJuLmxlbmd0aCAtIHBhZC5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKFwibW9udGVyZXktc2lnbnMuc2VydmljZXNcIilcbiAgICAgICAgLnNlcnZpY2UoXCJSZXF1ZXN0XCIsIFtcIkNvbnN0XCIsIGZ1bmN0aW9uIChDb25zdCkge1xuICAgICAgICAgICAgdmFyIHNlbGYsIG1lbW9yeSA9IFtdO1xuXG4gICAgICAgICAgICAvLyAtLSBTZXJ2aWNlIC0tIC8vXG4gICAgICAgICAgICByZXR1cm4gKHNlbGYgPSB7XG4gICAgICAgICAgICAgICAgY2FjaGVkOiBSZXF1ZXN0Q2FjaGVkLFxuICAgICAgICAgICAgICAgIHN0YW5kYXJkOiBSZXF1ZXN0U3RhbmRhcmQsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gLS0gRnVuY3Rpb25zIC0tIC8vXG4gICAgICAgICAgICBmdW5jdGlvbiBpc192YWxpZChjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RkX3Jlc3AgPSBjb250YWluZXIuZGF0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHN0ZF9yZXNwW0NvbnN0LkluZnJhc3RydWN0dXJlLlJlc3VsdF0gIT09IENvbnN0LkluZnJhc3RydWN0dXJlLkZhaWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNfbG9hZGVkKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoY29udGFpbmVyLmRhdGEgIT09IG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0X2RhdGFfa2V5KGNvbnRhaW5lciwga2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5kYXRhW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiByZWNvcmRfZGF0YShjb250YWluZXIsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY2xlYXJfY2FjaGUoY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnByb21pc2UgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY2FsbF9zdGFuZGFyZChjb250YWluZXIsIHJlcXVlc3RfZm4pIHtcbiAgICAgICAgICAgICAgICB2YXIgZmFyZ3MgPSBhbmd1bGFyLmV4dGVuZChbXSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICBmYXJncy5zcGxpY2UoMCwgMik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RfZm4uYXBwbHkobnVsbCwgZmFyZ3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZWNvcmRfZGF0YS5iaW5kKG51bGwsIGNvbnRhaW5lcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY2FsbF9jYWNoZWQoY29udGFpbmVyLCByZXF1ZXN0X2ZuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5wcm9taXNlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wcm9taXNlID0gY2FsbF9zdGFuZGFyZC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyLnByb21pc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tIE9iamVjdHMgLS0gLy9cbiAgICAgICAgICAgIGZ1bmN0aW9uIFJlcXVlc3RDYWNoZWQocmVxdWVzdF9mbikge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IG1lbW9yeS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbWVtb3J5LnB1c2goe3Byb21pc2U6IG51bGwsIGRhdGE6IG51bGx9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaXNfdmFsaWQgPSBpc192YWxpZC5iaW5kKG51bGwsIG1lbW9yeVtpbmRleF0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNfbG9hZGVkID0gaXNfbG9hZGVkLmJpbmQobnVsbCwgbWVtb3J5W2luZGV4XSk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfZGF0YSA9IGdldF9kYXRhX2tleS5iaW5kKG51bGwsIG1lbW9yeVtpbmRleF0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsbCA9IGNhbGxfY2FjaGVkLmJpbmQobnVsbCwgbWVtb3J5W2luZGV4XSwgcmVxdWVzdF9mbik7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhcl9jYWNoZSA9IGNsZWFyX2NhY2hlLmJpbmQobnVsbCwgbWVtb3J5W2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBSZXF1ZXN0U3RhbmRhcmQocmVxdWVzdF9mbikge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IG1lbW9yeS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbWVtb3J5LnB1c2goe3Byb21pc2U6IG51bGwsIGRhdGE6IG51bGx9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaXNfdmFsaWQgPSBpc192YWxpZC5iaW5kKG51bGwsIG1lbW9yeVtpbmRleF0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNfbG9hZGVkID0gaXNfbG9hZGVkLmJpbmQobnVsbCwgbWVtb3J5W2luZGV4XSk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRfZGF0YSA9IGdldF9kYXRhX2tleS5iaW5kKG51bGwsIG1lbW9yeVtpbmRleF0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsbCA9IGNhbGxfc3RhbmRhcmQuYmluZChudWxsLCBtZW1vcnlbaW5kZXhdLCByZXF1ZXN0X2ZuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pOyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9