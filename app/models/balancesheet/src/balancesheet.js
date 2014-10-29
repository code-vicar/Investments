define(function() {
    'use strict';

    var mod = angular.module('investments.models.balancesheet', []);

    mod.factory('investments.models.balancesheet', function() {

        var BalanceSheet = function() {};

        BalanceSheet.prototype.accountsPayable = 0;

        BalanceSheet.fromYQL = function(response) {
            var balancesheet = new BalanceSheet();

            balancesheet.accountsPayable = response.data.query.results.balancesheet.statement[0].AccountsPayable.content;

            return balancesheet;
        };

        return BalanceSheet;
    });
});