'use strict';
angular.module('rachelleethai.comApp', [
    'ngRoute',
    'ngResource',
    'ngAnimate'
])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    })
    .service('imageData', function () {
        var self = this;

        var data;

        self.set = function (imageData) {
            data = imageData;
        };

        self.get = function () {
            return data;
        };
    })
    .run(function ($rootScope, imageData) {

        var images = [
            {
                image: 'photos/rachelthai-wipsite_images-01.jpg',
                title: 'Tibercio Vasquez: Hero Villian',
                date: '2010',
                description: 'Print - Book Design - Research - Sequential Narrative - Photography'
            },
            {
                image: 'photos/rachelthai-wipsite_images-02.jpg',
                title: 'Tibercio Vasquez: Hero Villian',
                date: '2010',
                description: 'Print - Book Design - Research - Sequential Narrative - Photography'
            },
            {
                image: 'photos/rachelthai-wipsite_images-03.jpg',
                title: 'Trails of Escape Collage Wallpaper',
                date: '2011',
                description: 'Image Creation Fun'
            },
            {
                image: 'photos/rachelthai-wipsite_images-04.jpg',
                title: 'Trails of Escape Camp Trip Notebooks',
                date: '2013 - Present',
                description: 'Notebook Creation and Production - trailsofescape.com'
            },
            {
                image: 'photos/rachelthai-wipsite_images-05.jpg',
                title: 'Trails of Escape Camp Trip Notebooks',
                date: '2013 - Present',
                description: 'Notebook Creation and Production - trailsofescape.com'
            }
        ];

        var randImage = _.random(0, 4);
        var image = images[randImage].image;
        var data = images[randImage];

        imageData.set(data);

        $.backstretch(image, {duration: 0, fade: 500});

    });
