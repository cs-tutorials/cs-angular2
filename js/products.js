(function() {
	var app = angular.module('store-products', []);

	app.directive("productGallery", function() {
		return {
			restrict: 'E',
			templateUrl: 'product-gallery.html',
			controller: function() {
				this.current = 0;
				this.setCurrent = function(newVal){
					this.current = newVal || 0;
				};
			},
			controllerAs: 'gallery'
		};
	});

	app.directive('productTabs', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-tabs.html',
			controller: function() {
				this.tab = 1;

				this.setTab = function(newValue){
					this.tab = newValue;
				};

				this.isSet = function(tabName){
					return this.tab === tabName;
				};
			},
			controllerAs: 'tabCtrl'
		};
	});

	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});

	app.directive('productDescription', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-description.html'
		};
	});

	app.directive('productSpecs', function(){
		return {
			restrict: 'A',
			templateUrl: 'product-specs.html'
		};
	});

	app.directive('productReviews', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-reviews.html',
			controller: function() {
				this.review = {};

				this.addReview = function(product) {
					this.review.createdOn = Date.now();
					product.reviews.push(this.review);
					this.review = {};
				}
			},
			controllerAs: 'reviewCtrl'
		};
	});
})();
