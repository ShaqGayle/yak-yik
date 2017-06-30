var express = require('express');
var router = express.Router();
var ZoneController = require('../controllers/zoneController');
var controllers = require('../controllers');

router.get('/:resource', function(req, res, next) {

	var resource = req.params.resource;
	var contr

	if(resource = 'zone'){
		ZoneController.find(req.query, function(err, results){
			if (err) {
				res.json({
					confirmation: 'fail',
					message: err
				});

				return;
			}

			res.json({
				confirmation: 'success',
				results: results
			});
		});
	}

});

router.get('/:resource/:id', function(req, res, next) {

	var resource = req.params.resource;
	var id = req.params.id;

	if(resource =='zone'){
		ZoneController.findById(id, function(err, result){
			if(err) {
				res.json({
					confirmation: 'Item does not exist',
					message: err
				});

				return;
			}

			res.json({
				confirmation: 'success',
				result: result
			});
		})
	}
});

router.post('/:resource', function(req, res, next) {

	var resource = req.params.resource;

	if(resource == 'zone'){
		ZoneController.create(req.body, function(err, zone) {
			if(err) {
				res.json({
					confirmation: 'fail',
					message: err
				});

				return;
			}

			res.json({
				confirmation: 'success',
				zone: zone
			});

		});
	}
});

module.exports = router;