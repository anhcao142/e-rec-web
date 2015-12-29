var async = require('async');


var success = {success: true};

exports.add = function add(req, res, next) {
    res.status(200).json(success)
}

exports.del = function del(req, res, next) {
    res.status(200).json(success)
}

exports.delById = function delById(req, res, next) {
    res.status(200).json(success)
}