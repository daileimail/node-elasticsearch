var elasticSearch = require("./../index");
var opt = {url: "http://localhost:32770"};
var elastic = new elasticSearch(opt);

var model = elastic.defineModel('myfood', 'user', {
    name: {type: "string"},
    location: {
        type: "geo_point"
    }
})
model.sync().then(data =>{
    console.log('sucess-->',data)
}).catch(err =>{
    console.log(err)
})