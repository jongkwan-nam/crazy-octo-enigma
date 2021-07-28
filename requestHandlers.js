var calcBytes = require('./filesystem');

function view(response) {
    console.log('request handler called --> view');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('processed #view');
    response.end();
}

function create(response) {
    console.log('request handler called --> create');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('processed #create');
    response.end();
}

var handle = {};
handle['/'] = view;
handle['/view'] = view;
handle['/create'] = create;
handle['/files'] = calcBytes;

exports.handle = handle;
