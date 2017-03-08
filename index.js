var httpsRedirect  = {
    "port": "80",
    redirect: function(req, res, next) {
    if (req.headers && req.headers.$wssp === httpsRedirect.port) {
            res.redirect("https://" + req.headers.host + req.path);
        } else {
            next();
        }
    },
    setPort(port) {
        if (port) {
            if (typeof port !== "string") {
                try {
                    port = port.toString();
                } catch (error) {
                    console.log(error);
                }
                httpsRedirect.port = port;
            } else {
                httpsRedirect.port = port;
            }
        } else {
            httpsRedirect.port = "80";
        }
    }
}


module.exports = httpsRedirect;
