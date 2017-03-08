# Forced HTTPS Redirect for Bluemix Apps
```
var httpsRedirect = require('forcedhttpsbluemix');
router.get('/', httpsRedirect.redirect, function(req, res, next) {
    //do stuff...
    });
```

This is for Bluemix platform hosted apps only! The default Bluemix port is 80. If you would like to specify a different port:

```
httpsRedirect.setPort(<port>)
```
You can input a string or an integer, but the package expects a string and will attempt to convert your input into one.

```
httpsRedirect.setPort()
```
Reverts to the default.

This little package utilizes the Bluemix specific protocol headers to ensure that users are forced to use HTTPS when you want them to, used like any other express middleware. When testing locally it won't do anything, if req.headers.$wssp is present it then takes action.

(I am not affiliated with IBM or Bluemix nor do I pretend to be)
