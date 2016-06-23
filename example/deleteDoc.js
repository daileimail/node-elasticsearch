'use strict';
var elasticSearch = require("./../index");
var opt = {url: "http://192.168.99.100:32769"};
var elastic = new elasticSearch(opt);
var params = {
    index: "user",
    type: "basicinfo"
};
params.key = 1;

elastic.deleteDoc(params).then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
})