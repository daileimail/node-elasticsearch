'use strict';
var elasticSearch = require("./../index");
var opt = {url: "http://localhost:32777"};
var elastic = new elasticSearch(opt);
var params = {
    index: "food",
    type: "restaurant"
};

params.qs = {
    "query": {
        bool:{
            "must" : {
                "match": {
                    "name": "daid"
                }
            },
            filter:{
                "geo_distance": {
                    "distance": "1km",
                    "distance_type": "plane",
                    "location": {
                        "lat": 40.715,
                        "lon": -73.988
                    }
                }
            }
        }
    }
};
params.qs.from = 0;
params.qs.size = 100;
//params.qs.sort = "user_id:desc";
elastic.search(params).then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
})
