'use strict';

const request = require("request");

exports.addDoc = function (url, index, type, key, data, callback) {
    var options = {
        method: 'POST',
        url: url + '/' + index + '/' + type + (key ? ("/" + key) : ''),
        headers: {
            'cache-control': 'no-cache',
            'content-type': 'application/json'
        },
        body: data,
        json: true
    };

    request(options, function (error, response, body) {
        callback(error);
        console.log(body);
    });
}

exports.deleteDoc = function (url, index, type, key, callback) {
    var options = {
        method: 'DELETE',
        url: url + '/' + index + '/' + type + (key ? ("/" + key) : ''),
        headers: {
            'cache-control': 'no-cache',
            'content-type': 'application/json'
        },
        json: true
    };

    request(options, function (error, response, body) {
        callback(error);
        console.log(body);
    });
}

exports.searchDocByKey = function (url, index, type, key, callback) {
    var options = {
        method: 'GET',
        url: url + '/' + index + '/' + type + (key ? ("/" + key) : ''),
        headers: {
            'cache-control': 'no-cache'
        }
    };

    request(options, function (error, response, body) {
        if (error) {
            callback(error, null);
        } else {
            callback(null, body);
        }

    });
}

exports.searchDoc = function (url, index, type, qs, callback) {
    var options = {
        method: 'GET',
        url: url + '/' + index + '/' + type + "/_search",
        qs: qs,
        headers: {
            'cache-control': 'no-cache'
        }
    };

    request(options, function (error, response, body) {
        if (error) {
            callback(error, null);
        } else {
            callback(null, body);
        }

    });
}