var express = require('express');
var router = express.Router();
var ZoneController = require('../controllers/zoneController');
var controllers = require('../controllers');

router.get('/:resource', function(req, res, next) {

	var resource = req.params.resource;
	var controller = controllers[resource];

	if(controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid resource request: ' +resource
		});
	}

	controller.find(req.query, function(err, item) {
		if (err) {
				res.json({
					confirmation: 'fail',
					message: err
				});

				return;
			}

			res.json({
				confirmation: 'success',
				results: item
			});
	});
});

router.get('/:resource/:id', function(req, res, next) {

	var resource = req.params.resource;
	var id = req.params.id;
	var controller = controllers[resource];

	if(controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid resource request: ' +resource
		});
	}

	controller.findById(id, function(err, item){
			if(err) {
				res.json({
					confirmation: 'Item does not exist',
					message: err
				});

				return;
			}

			res.json({
				confirmation: 'success',
				result: item
			});
		})
});

router.post('/:resource', function(req, res, next) {

	var resource = req.params.resource;
	var controller = controllers[resource];

	if(controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid resource request: ' +resource
		});
	}

	controller.create(req.body, function(err, item) {
			if(err) {
				res.json({
					confirmation: 'fail',
					message: err
				});

				return;
			}

			res.json({
				confirmation: 'success',
				result: item
			});

		});
});

router.put('/:resource/:id', function(req, res, next) {
	var resource = req.params.resource;
	var id = req.params.id;
	var controller = controllers[resource];

	if(controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid resource request: ' +resource
		});
	}

	controller.findByIdAndUpdate(id, req.body, function(err, item) {
		if(err) {
				res.json({
					confirmation: 'fail',
					message: err
				});

				return;
			}

			res.json({
				confirmation: 'success',
				result: item
			});
	});
});

router.delete('/:resource/:id', function(req, res, next) {
	var resource = req.params.resource;
	var id = req.params.id;
	var controller = controllers[resource];

	if(controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid resource request: ' +resource
		});
	}

	controller.findByIdAndRemove(id, function(err, item) {
		if(err) {
				res.json({
					confirmation: 'fail',
					message: err
				});

				return;
			}

			res.json({
				confirmation: 'success',
				result: item
			});
	});
});

module.exports = router;