var fs = require('fs');

// non-blocking code
fs.readdir('.', function (err, filenames) {
    var i;
    for (i = 0; i < filenames.length; i++) {
        console.log(filenames[i]);
    }
    console.log('ready');
});

console.log('can process next job...');


function calculateBytes() {
    fs.readdir('.', function (err, filenames) {
        var count = filenames.length;
        var totalBytes = 0;
        var i;
        for (i = 0; i < filenames.length; i++) {
            console.log(filenames[i]);

            fs.stat('./' + finenames[i], function (err, stats) {
                totalBytes += stats.size;
                count--;
                if (count == 0) {
                    console.log('totalBytes', totalBytes);
                }
            });
        }
        console.log('ready');
    });
}

exports.calculateBytes = calculateBytes;
