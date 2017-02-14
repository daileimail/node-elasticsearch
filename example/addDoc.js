'use strict';
var elasticSearch = require("./../index");
var opt = {url: "http://localhost:32777"};
var elastic = new elasticSearch(opt);
var params = {
    index: "user",
    type: "basicinfo"
};


params.key = 1;
params.data = {username: "dailei"};
elastic.addDoc(params).then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
})