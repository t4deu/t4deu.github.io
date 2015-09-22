(function() {
  'use strict';

  angular.module('app', ['ngRoute'])
  .config(Bootstrap)
  .controller('Resume', Resume)
  .factory('resumeService', resumeService)
  .filter('to_trusted', toTrusted);

  Bootstrap.$inject = ['$routeProvider'];
  Resume.$inject = ['resumeService', '$routeParams'];
  resumeService.$inject = ['$http'];
  toTrusted.$inject = ['$sce'];

  function Bootstrap($routeProvider) {
    $routeProvider
    .when('/:code/:language?', {
      controller: 'Resume',
      controllerAs: 'vm',
      templateUrl: 'resume.html'
    }).
    otherwise({
      templateUrl: 'not_found.html'
    });

  }

  function Resume(resumeService, $routeParams) {
    var vm = this;
    vm.resume = {};

    var code = $routeParams.code;
    var language = $routeParams.language || 'pt';
    getResume(code, language);

    //////////

    function getResume(code, language) {
      return resumeService.loadResume(code, language).then(function(resume) {
        return vm.resume = resume;
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
        .then(loadResumeFinish)
        .catch(loadResumeFailed);

      function loadResumeFinish(response) {
        return response.data;
      }

      function loadResumeFailed(error) {
        console.log(error);
      }
    }
  }

  function toTrusted($sce) {
    return function(text) {
      return $sce.trustAsHtml(text);
    };
  }
})();
