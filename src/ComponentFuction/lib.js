function request(method, url) {
    return new Promise((resolv, reject) => {
        let rq = new XMLHttpRequest();
        rq.open(method, url);
        rq.send();
        rq.onload = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolv(JSON.parse(this.responseText))
            }
            else {
                reject(new Error(this.responseText))
            }
        }
    });
}

export default request