'use strict';

//post
var elasticSearch = require("./index");
var opt = {url: "http://192.168.99.100:32776"};
var elastic = new elasticSearch(opt);

var params = {
    index: "user",
    type: "basicinfo"
};

var addUsers = function () {
    params.qs = {q: "user_name:水"};
    params.qs.from = 0;
    params.qs.size = 100;
    params.qs.sort = "user_id:desc";
    elastic.search(params, function (err, data) {
        console.log(err, JSON.parse(data).hits.hits.length);
    });
}
addUsers();