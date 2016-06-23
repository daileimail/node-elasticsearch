'use strict';
var elasticSearch = require("./../index");
var opt = {url: "http://192.168.99.100:32769/"};
var elastic = new elasticSearch(opt);
var params = {
    index: "user",
    type: "basicinfo"
};

params.key = 1;
params.data = {username: "dailei1"};
elastic.updateDoc(params).then(data => console.log(data)).catch(err => console.log(err));
