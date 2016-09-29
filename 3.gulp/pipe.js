var fs = require('fs');
fs.createReadStream('./gulpfile.js').
pipe(fs.createWriteStream('./gulpfile2.js'));
