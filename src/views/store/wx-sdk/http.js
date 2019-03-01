function http(options = {}) {
    http.createDef = http.createDef || {};
    http._default = {
        method: 'GET',
        url: '',
        baseURL: '',
        cache: false,
        data: null,
        params: null,
        headers: {},
        dataType: 'JSON',
    }
    let {method,url,baseURL,cache,data,params,headers,dataType}={...http._default, ...http.createDef,...options};
    if (/^(get|delete|head|options)$/i.test(method)) {//get系列
        if (params) {
            url += /\?/g.test(url) ? '&' + http.paramsSerializer(params) : '?' + http.paramsSerializer(params);
        }
        if (cache === false) {
            url += /\?/g.test(url) ? '&_=' + new Date() : '?_=' + new Date();
        }
    } else {
        if (data) {
            data = http.paramsSerializer(data);
        }
    }
    ;
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, `${baseURL}${url}`);
        if (headers && typeof headers == 'object') {
            for (let attr in headers) {
                if (!headers.hasOwnProperty(attr)) {
                    let val = /[\u4e00-\u9fa5]/.test(headers[attr]) ? encodeURIComponent(headers[attr]) : headers[attr];
                    xhr.setRequestHeader(attr, val);
                }
            }
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (/2\d{2}/.test(xhr.status)) {
                    let result = xhr.responseText;
                    dataType = dataType.toUpperCase();
                    dataType === 'JSON' ? result = JSON.parse(result) : (dataType === 'XML' ? result = xhr.responseXML : null);
                    resolve(result);
                } else {
                    reject('error');
                }
            }
        }
        xhr.send(data);
    })
};
http.paramsSerializer = function (params) {
    if (typeof params == 'string') {
        return params;
    }
    if (!params) {
        return null;
    }
    if (typeof params == 'object') {
        let res = '';
        for (let attr in params) {
            res += `${attr}=${params[attr]}&`;
        }
        res = res.substring(0, res.length - 1);
        return res;
    }
};
http.all = function (data) {
    return Promise.all(data);
};
http.spread = function (callback) {
    return function (arg) {
        callback.apply(null, arg);
    }
};
http.create = function (options) {
    if (options && typeof options == 'object') {
        http.createDef = options;
    }
};

['get', 'delete', 'head', 'options'].forEach(item => {
    http[item] = function (url, options = {}) {
        options = {
            ...options,
            url: url,
            method: item.toUpperCase()
        };
        return http(options);
    }
});
['post', 'put', 'patch'].forEach(item => {
    http[item] = function (url, data = {}, options = {}) {
        options = {
            ...options,
            url: url,
            method: item.toUpperCase(),
            data: data,
        };
        return http(options);
    }
});

export default http