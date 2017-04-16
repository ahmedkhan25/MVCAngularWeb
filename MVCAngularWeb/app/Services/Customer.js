app.factory('CustomerService', function ($http, $q, $log, $rootScope) {

    var baseUrl = '/api/customer';

    var service = {
        data: {
            customers: []
        },
        find: function () {            
            var deferred = $q.defer();
            $http.get(baseUrl)
            .success(function (data) {
                service.data.customers = data;
                deferred.resolve(data);
            }).error(function () {
                deferred.reject();
            });
            return deferred.promise;
        }

    }
    service.find();
    return service;

});