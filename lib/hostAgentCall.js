const Q = require('q');
const fetch = require('node-fetch');
const ErrorResponse = require('./error-response');

exports.refresh = async (commands) => {
	var deferred = Q.defer();

	try {
		var payload = JSON.stringify({	
			'commands': commands
		});
	
		const response = await fetch([__settings.hostAgent, '/agent/refresh'].join(''), {
			'headers': {
				'Accept': '*/*',
				'Content-Type': 'application/json; charset=utf-8',
				'Content-Length': payload.length
			},
			'body': payload,
			'method': 'POST'
		});
	
		const result = await response.json();

		if (typeof (result.errors) != 'undefined') {
			var err = new ErrorResponse();
			err.error.code = 401;
			err.error.errors[0].code = 401;
			err.error.errors[0].reason = result.errors[0].reason;
			err.error.errors[0].message = result.errors[0].message;
			deferred.reject(err);
		} else {
			deferred.resolve(result);
		};
	} catch (error) {
		var err = new ErrorResponse();
		err.error.code = 401;
		err.error.errors[0].code = 401;
		err.error.errors[0].reason = error.message;
		err.error.errors[0].message = error.message;
		deferred.reject(err);
	};

	return deferred.promise;
};