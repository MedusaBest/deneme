var http_proxy = "PROXY 104.207.49.166:3128";    // Proxy for HTTP connection
var https_proxy = "PROXY 188.166.197.129:3128";   // Proxy for HTTPS connection

function FindProxyForURL(url, host) {
    if (url.startsWith('https:')) {
        return https_proxy;
    } else {
        return http_proxy;
    }
}
