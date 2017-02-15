'use strict';
var elasticSearch = require("./../index");
var opt = {url: "http://localhost:32777"};
var elastic = new elasticSearch(opt);
var params = {
    index: "user",
    type: "basicinfo"
};

params.key = 1;
params.data = {
    username: "dailei1", "location": {
        "lat": 40.722,
        "lon": -73.989
    }
};
elastic.updateDoc(params).then(data => console.log(data)).catch(err => console.log(err));
