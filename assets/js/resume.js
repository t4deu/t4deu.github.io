(function() {
  'use strict';

  angular.module('app', [])
  .controller('Resume', Resume)
  .factory('resumeService', resumeService)
  .filter('to_trusted', toTrusted);

  Resume.$inject = ['resumeService'];
  resumeService.$inject = ['$http'];
  toTrusted.$inject = ['$sce'];

  function Resume(resumeService) {
    var vm = this;
    vm.resume = {};

    getResume();

    //////////

    function getResume(language) {
      return resumeService.loadResume(language).then(function(resume) {
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

    function loadResume(language) {
      return $http.get('resume/pt/ruby.json')
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
