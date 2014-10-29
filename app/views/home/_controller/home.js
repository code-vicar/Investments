define(function() {
    'use strict';

    return [
        '$scope',
        '$http',
        'investments.models.balancesheet',
        'investments.models.incomestatement',
        function($scope, $http, BalanceSheet, IncomeStatement) {
            $scope.incomeStatements = [];

            Promise.cast($http({
                method: 'GET',
                url: 'https://query.yahooapis.com/v1/public/yql',
                params: {
                    q: 'SELECT * FROM yahoo.finance.incomestatement WHERE symbol=\'brew\'',
                    format: 'json',
                    env: 'store://datatables.org/alltableswithkeys'
                }
            })).then(function(resp) {
                $scope.$apply(function() {
                    $scope.incomeStatements = IncomeStatement.fromYQL(resp);
                });

                console.dir(resp);
            })['catch'](function(err) {
                console.dir(err);
            });

            Promise.cast($http({
                method: 'GET',
                url: 'https://query.yahooapis.com/v1/public/yql',
                params: {
                    q: 'SELECT * FROM yahoo.finance.balancesheet WHERE symbol=\'brew\'',
                    format: 'json',
                    env: 'store://datatables.org/alltableswithkeys'
                }
            })).then(function(resp) {
                $scope.$apply(function() {
                    $scope.balancesheet = BalanceSheet.fromYQL(resp);
                });

                console.dir(resp);
            })['catch'](function(err) {
                console.dir(err);
            });
        }
    ];
});