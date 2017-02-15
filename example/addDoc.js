'use strict';
var elasticSearch = require("./../index");
var opt = {url: "http://localhost:32777"};
var elastic = new elasticSearch(opt);
var params = {
    index: "food",
    type: "restaurant"
};


params.key = 1;
params.data = {name: "dai","location": {
    "lat": 40.722,
    "lon": -73.990
}};
elastic.addDoc(params).then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
})