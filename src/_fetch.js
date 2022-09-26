/**
 * 
 * @param {String} url url of the api / service 
 * @param {Object} obj options to pass method, body, token for the request 
 * @param {('GET'|'POST'|'PATCH'|'DELETE')} obj.method http method to use for request
 * @param {Object} obj.body http message body if request type is POST or PATCH
 * @returns 
 */
export default async function _fetch(url, obj = {}) {

    let headers = {};
    headers['Access-Control-Allow-Origin'] = "*";
    let { method = 'GET', body = undefined } = obj;

    if (body)
        headers['Content-Type'] = 'application/json';

    const options = {
        headers,
        body: JSON.stringify(body),
        method,
        // credentials: 'include'
    };

    try {
        let res = await fetch(url, options)
        if (res.status === 401) {
            window.location = '/';
            return;
        }
        res = await res.json()
        return res
    } catch (e) {
        process.env.NODE_ENV === 'development' && console.log(e)
        throw (e)
    }
}