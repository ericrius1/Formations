window.app = angular.module('ngMagnets', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ngRoute', 'ngff.controllers', 'ngff.directives', 'ngff.services', 'colorpicker.module']);

// bundling dependencies
window.angular.module('ngff.controllers', ['ngff.controllers.index', 'ngff.controllers.symbols', 'ngff.controllers.header', 'ngff.controllers.board']);
window.angular.module('ngff.services', ['ngff.services.global', 'ngff.services.symbols']);
window.angular.module('ngff.directives', ['ngff.directives.createsymbol', 'ngff.directives.displaysymbol', 'ngff.directives.formations', 'ngff.directives.board']);
