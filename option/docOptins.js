'use strict';

const request = require("request");

exports.addDoc = function (url, index, type, key, data) {
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

    return new Promise(function (resolve,reject) {
        request(options, function (error, response, body) {
            if(error){
                reject(error);
            }else {
                resolve(body);
            }
        });
    })
}

exports.deleteDoc = function (url, index, type, key) {
    var options = {
        method: 'DELETE',
        url: url + '/' + index + '/' + type + (key ? ("/" + key) : ''),
        headers: {
            'cache-control': 'no-cache',
            'content-type': 'application/json'
        },
        json: true
    };

    return new Promise(function (resolve,reject) {
        request(options, function (error, response, body) {
            if(error){
                reject(error);
            }else {
                resolve(body);
            }
        });
    })
}

exports.searchDocByKey = function (url, index, type, key) {
    var options = {
        method: 'GET',
        url: url + '/' + index + '/' + type + (key ? ("/" + key) : ''),
        headers: {
            'cache-control': 'no-cache'
        }
    };

    return new Promise(function (resolve,reject) {
        request(options, function (error, response, body) {
            if(error){
                reject(error);
            }else {
                resolve(body);
            }
        });
    })
}

exports.searchDoc = function (url, index, type, qs) {
    var options = {
        method: 'GET',
        url: url + '/' + index + '/' + type + "/_search",
        qs: qs,
        headers: {
            'cache-control': 'no-cache'
        }
    };

    return new Promise(function (resolve,reject) {
        request(options, function (error, response, body) {
            if(error){
                reject(error);
            }else {
                resolve(body);
            }
        });
    })
}