app.controller('CustomerController', function ($scope, CustomerService, $routeParams, $log) {

    $scope.data = CustomerService.data;

});
