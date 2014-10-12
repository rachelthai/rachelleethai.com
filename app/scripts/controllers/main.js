'use strict';
angular.module('rachelleethai.comApp')
    .controller('MainCtrl', function ($scope, $timeout, imageData) {

        var memo;

        $timeout(function () {
            $scope.imageInfo = imageData.get();
            memo = $scope.imageInfo;
        }, 2000);

        $scope.hide = function () {
            if ($scope.imageInfo) {
                $scope.imageInfo = undefined;
            } else {
                $scope.imageInfo = memo;
            }
        };

    });
