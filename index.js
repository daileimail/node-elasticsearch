'use strict';
var documentOptions = require('./option/docOptins')

var elasticSearch = module.exports = function (opt) {

    if (opt.url) {
        this.url = opt.url;
    }
}


elasticSearch.prototype.addDoc = function (params) {
    var index = "";
    var type = "";

    if (params.index) {
        index = params.index;
    } else {
        throw "there is no index";
    }

    if (params.type) {
        type = params.type;
    } else {
        throw "this is no type";
    }

    return documentOptions.addDoc(this.url, index, type, params.key, params.data);
}

elasticSearch.prototype.updateDoc = function (params, callback) {
    var index = "";
    var type = "";
    var key = "";
    if (params.index) {
        index = params.index;
    } else {
        throw "there is no index";
    }

    if (params.type) {
        type = params.type;
    } else {
        throw "this is no type";
    }

    if (params.key) {
        key = params.key;
    } else {
        throw "this is no key";
    }

    return documentOptions.addDoc(this.url, index, type, params.key, params.data);
}

elasticSearch.prototype.deleteDoc = function (params, callback) {
    var index = "";
    var type = "";
    var key = "";
    if (params.index) {
        index = params.index;
    } else {
        throw "there is no index";
    }

    if (params.type) {
        type = params.type;
    } else {
        throw "this is no type";
    }

    if (params.key) {
        key = params.key;
    } else {
        throw "this is no key";
    }

    return documentOptions.deleteDoc(this.url, index, type, key);
}

elasticSearch.prototype.search = function (params, callback) {
    var index = "";
    var type = "";
    if (params.index) {
        index = params.index;
    } else {
        throw "there is no index";
    }

    if (params.type) {
        type = params.type;
    } else {
        throw "this is no type";
    }

    if (params.key) {
        return documentOptions.searchDocByKey(this.url, index, type, params.key);
    }
    else {
        return documentOptions.searchDoc(this.url,index,type,params.qs);
    }


}
