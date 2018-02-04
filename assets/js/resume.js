(function() {
  'use strict';

  angular.module('app', ['ngRoute'])
  .config(Bootstrap)
  .controller('Resume', Resume)
  .factory('resumeService', resumeService)
  .filter('to_trusted', toTrusted);

  Bootstrap.$inject = ['$routeProvider'];
  Resume.$inject = ['resumeService', '$routeParams', '$location'];
  resumeService.$inject = ['$http'];
  toTrusted.$inject = ['$sce'];

  function Bootstrap($routeProvider) {
    $routeProvider
    .when('/not_found', {
      templateUrl: 'not_found.html'
    })
    .when('/:code/:language?', {
      controller: 'Resume',
      controllerAs: 'vm',
      templateUrl: 'resume.html'
    })
    .otherwise({
      redirectTo: '/not_found'
    });

  }

  function Resume(resumeService, $routeParams, $location) {
    var vm = this;
    var code = $routeParams.code;
    var language = $routeParams.language || 'pt';

    getResume(code, language);

    //////////

    function getResume(code, language) {
      return resumeService.loadResume(code, language).then(function(resume) {
        vm.resume = resume;
      }).catch(function() {
        $location.path('/not_found');
      });
    }
  }

  function resumeService($http) {
    var service = {
      loadResume: loadResume
    };

    return service;

    //////////

    function loadResume(code, language) {
      return $http.get('/resume/codes/' + code + '/' + language + '.json')
        .then(loadResumeFinish);

      function loadResumeFinish(response) {
        return response.data;
      }
    }
  }

  function toTrusted($sce) {
    return function(text) {
      return $sce.trustAsHtml(text);
    };
  }
})();
