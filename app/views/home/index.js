define(['./_controller/home', 'text!./_view/home.html'], function(ctrl, view) {
	'use strict';

	return [{
		url: '/',
		controller: ctrl,
		template: view
	}];

});