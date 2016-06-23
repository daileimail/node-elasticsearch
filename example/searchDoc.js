'use strict';
var elasticSearch = require("./../index");
var opt = {url: "http://192.168.99.100:32769/"};
var elastic = new elasticSearch(opt);
var params = {
    index: "user",
    type: "basicinfo"
};

params.qs = {q: "user_name:水"};
params.qs.from = 0;
params.qs.size = 100;
params.qs.sort = "user_id:desc";
elastic.search(params).then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
})
