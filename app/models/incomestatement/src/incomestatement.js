define(function() {
    'use strict';

    var mod = angular.module('investments.models.incomestatement', []);

    mod.filter('percentage', function() {

        return function(input) {
            input = input || '';
            var out = '';

            out = (input.toFixed(2) * 100).toString() + '%';

            return out;
        };
    });

    mod.factory('investments.models.incomestatement', function() {

        var IncomeStatement = function(timeframe, symbol, response) {

            var i, keys;

            this.timeframe = timeframe;
            this.symbol = symbol;

            keys = Object.keys(response);
            for (i = 0; i < keys.length; i++) {
                if (Object.hasOwnProperty.call(response, keys[i])) {
                    if (response[keys[i]].content) {
                        this[keys[i]] = response[keys[i]].content;
                    } else {
                        this[keys[i]] = response[keys[i]];
                    }
                }
            }
        };

        IncomeStatement.fromYQL = function(response) {
            var incomestatements = [];

            var timeframe = response.data.query.results.incomestatement.timeframe;
            var symbol = response.data.query.results.incomestatement.symbol;

            var i;
            for (i = 0; i < response.data.query.results.incomestatement.statement.length; i++) {
                incomestatements.push(new IncomeStatement(timeframe, symbol, response.data.query.results.incomestatement.statement[i]));
            }

            return incomestatements;
        };

        return IncomeStatement;
    });
});