define(['./balancesheet/index', './incomestatement/index'], function() {
    'use strict';

    angular.module('investments.models', [
        'investments.models.balancesheet',
        'investments.models.incomestatement'
    ]);
});