const Q = require('q');
const ErrorResponse = require('./error-response');

var module = function () {
	var responder = {
		response: {
			update: (result) => {
				var deferred = Q.defer();

				deferred.resolve({
					'updated': result.n
				});

				return deferred.promise;
			},

			delete: (result) => {
				var deferred = Q.defer();

				deferred.resolve({
					'deleted': result.n
				});

				return deferred.promise;
			},

			admin: {
				authenticate: (result) => {
					var deferred = Q.defer();

					deferred.resolve({
						'authenticated': result
					});

					return deferred.promise;
				}
			},

			settings: {
				update: (result) => {
					var deferred = Q.defer();

					deferred.resolve({
						'updated': result.n
					});

					return deferred.promise;
				},


				list: (result) => {
					var deferred = Q.defer();

					result = result.map(obj => {
						return {
							commsOption: obj.commsOption,
							overideDeviceBarcode: obj.overideDeviceBarcode,
							barcode: obj.barcode,
							deviceId: obj.deviceId,
							apn: obj.apn,
							txtime: obj.txtime,
							publishEnabled: obj.publishEnabled,
							host: obj.host,
							port: obj.port,
							tcpClientHost: obj.tcpClientHost,
							tcpClientPort: obj.tcpClientPort,
							username: obj.username,
							password: obj.password,
							dataTopic: obj.dataTopic,
							controlTopic: obj.controlTopic,
							rateLimitTmrSP: obj.rateLimitTmrSP,
							rateLimitTxCountSP: obj.rateLimitTxCountSP
						};
					});

					deferred.resolve(result);

					return deferred.promise;
				},

				command: (result) => {
					var deferred = Q.defer();

					result = result.map(obj => {
						return {
							commandResponse: obj.commandResponse
						};
					});

					deferred.resolve(result);

					return deferred.promise;
				}

			},


			devices: {
				add: (result) => {
					var deferred = Q.defer();

					deferred.resolve({
						'id': result.id
					});

					return deferred.promise;
				},

				get: (result) => {
					var deferred = Q.defer();

					deferred.resolve({
						id: result.id,
						io: result.io,
						ip: result.ip,
						port: result.port,
						softwareIp: result.softwareIp,
						softwarePort: result.softwarePort,
						type: result.type,
						pxtime: result.pxtime,
						txtime: result.txtime,
						barcode: result.barcode,
						publish: result.publish,
						timeout: result.timeout,
						enabled: result.enabled,
						unitId: result.unitId,
						deviceId: result.deviceId,
						description: result.description,
						userName: result.userName,
						password: result.password,
					});

					return deferred.promise;
				},

				list: (result) => {
					var deferred = Q.defer();

					result = result.map(obj => {
						return {
							id: obj.id,
							io: obj.io,
							ip: obj.ip,
							port: obj.port,
							type: obj.type,
							pxtime: obj.pxtime,
							txtime: obj.txtime,
							barcode: obj.barcode,
							publish: obj.publish,
							timeout: obj.timeout,
							enabled: obj.enabled,
							unitId: obj.unitId,
							deviceId: obj.deviceId,
							description: obj.description,
							userName: obj.userName,
							password: obj.password,
						};
					});

					deferred.resolve(result);

					return deferred.promise;
				}
			},

			mapping: {
				add: (result) => {
					var deferred = Q.defer();

					deferred.resolve({
						'mapId': result._id
					});

					return deferred.promise;
				},

				get: (result) => {
					var deferred = Q.defer();

					deferred.resolve({
						mapId: result.mapId,
						source: result.source,
						destination: result.destination
					});

					return deferred.promise;
				},

				list: (result) => {
					var deferred = Q.defer();

					result = result.map(obj => {
						return {
							mapId: obj.mapId,
							source: obj.source,
							destination: obj.destination
						};
					});

					deferred.resolve(result);

					return deferred.promise;
				}
			}
		},

		model: (req, result) => {
			var deferred = Q.defer();

			switch (req.originalUrl) {
				case ('*'):
				case ('/edge-router/config/export'):
					deferred.resolve(result);
					break;

				case ('/edge-router/admin/authenticate'):
					responder.response.admin.authenticate(result).then(deferred.resolve, deferred.reject);
					break;

				case ('/edge-router/devices/add'):
					responder.response.devices.add(result).then(deferred.resolve, deferred.reject);
					break;
				case ('/edge-router/devices/get'):
					responder.response.devices.get(result).then(deferred.resolve, deferred.reject);
					break;
				case ('/edge-router/devices/list'):
					responder.response.devices.list(result).then(deferred.resolve, deferred.reject);
					break;

				case ('/edge-router/settings/list'):
					responder.response.settings.list(result).then(deferred.resolve, deferred.reject);
					break;
				case ('/edge-router/settings/update'):
					responder.response.settings.update(result).then(deferred.resolve, deferred.reject);
					break;
				case ('/edge-router/settings/command'):
					responder.response.settings.command(result).then(deferred.resolve, deferred.reject);
					break;


				case ('/edge-router/mapping/add'):
					responder.response.mapping.add(result).then(deferred.resolve, deferred.reject);
					break;
				case ('/edge-router/mapping/get'):
					responder.response.mapping.get(result).then(deferred.resolve, deferred.reject);
					break;
				case ('/edge-router/mapping/list'):
					responder.response.mapping.list(result).then(deferred.resolve, deferred.reject);
					break;

				case ('/edge-router/config/import'):
				case ('/edge-router/devices/update'):
				case ('/edge-router/mapping/update'):
				case ('/edge-router/admin/change-email'):
				case ('/edge-router/admin/change-password'):
					responder.response.update(result).then(deferred.resolve, deferred.reject);
					break;

				case ('/edge-router/devices/delete'):
				case ('/edge-router/mapping/delete'):
					responder.response.delete(result).then(deferred.resolve, deferred.reject);
					break;

				default:
					deferred.resolve({
						'success': 'Your request resolved successfully but this payload is not modeled!'
					});
					break;
			};

			return deferred.promise;
		},

		error: (req, res, err) => {
			res.status(err.error.code).json(err.error);
		},

		success: (req, res, result) => {
			responder.model(req, result)
				.then(result => {
					res.json(result);
				}, error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = 401;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					responder.error(req, res, err);
				});
		}
	};

	return responder;
};

exports.module = module;