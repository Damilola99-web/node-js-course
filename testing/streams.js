const fs = require('fs')

const readStream = fs.createReadStream('./files/text.html', {encoding : 'utf8'})


const writeStream = fs.createWriteStream('./files/files3.txt')

// readStream.on('data', (chunk) => {
//     console.log('---NEWDATA---');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk)
// })

readStream.pipe(writeStream)
