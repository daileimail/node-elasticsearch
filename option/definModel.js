const request = require("request");

var model = function (url, index, type, model) {

    if (!type && !index) {
        throw "please enter userful data"
    }

    var data = {};
    data.mappings = {};
    data.mappings[type] = {};
    data.mappings[type].properties = model
    this.options = {
        method: 'PUT',
        url: url + '/' + index,
        headers: {
            'cache-control': 'no-cache',
            'content-type': 'application/json'
        },
        body: data,
        json: true
    };
}

model.prototype.sync = function () {
    var _this = this;
    return new Promise(function (resolve, reject) {
        request(_this.options, function (error, response, body) {
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    })
}


exports.defineModel = model;