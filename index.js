var server = require('./server');
var router = require('./router');
var requeestHandlers = require('./requestHandlers');

server.start(router.route, requeestHandlers.handle);

console.log("called server start");
