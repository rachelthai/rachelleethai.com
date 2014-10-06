'use strict';
angular.module('rachelleethai.comApp')
    .controller('MainCtrl', function ($scope, imageData) {
        $scope.imageInfo = imageData.get();
    });
